import { readFileSync, appendFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { Agent, CursorAgentError, type AgentOptions } from "@cursor/sdk";
import { ROOT, type Runtime } from "../pipeline/config.js";

export interface AgentRunResult {
  agentId: string;
  runId: string;
  status: string;
}

export function buildAgentOptions(apiKey: string, runtime: Runtime): AgentOptions {
  if (runtime === "cloud") {
    const repoUrl = process.env.CLOUD_REPO_URL?.trim();
    if (!repoUrl) {
      console.error(
        "PIPELINE_RUNTIME=cloud requires CLOUD_REPO_URL in .env pointing to a pushed GitHub repo.",
      );
      process.exit(1);
    }
    return {
      apiKey,
      model: { id: "composer-2.5" },
      cloud: {
        repos: [{ url: repoUrl, startingRef: "main" }],
        skipReviewerRequest: true,
      },
    };
  }

  return {
    apiKey,
    model: { id: "composer-2.5" },
    local: {
      cwd: ROOT,
      settingSources: [],
    },
  };
}

export function loadServicePrompt(relativePath: string, extraInstructions?: string): string {
  const systemContext = readFileSync(
    join(ROOT, "prompts/00-system-context.md"),
    "utf-8",
  );
  const servicePrompt = readFileSync(join(ROOT, relativePath), "utf-8");
  const parts = [systemContext, servicePrompt];
  if (extraInstructions?.trim()) {
    parts.push(`## Additional instructions from human\n\n${extraInstructions.trim()}`);
  }
  return parts.join("\n\n---\n\n");
}

export function logServiceRun(
  service: string,
  agentId: string,
  runId: string,
  status: string,
): void {
  mkdirSync(join(ROOT, "logs"), { recursive: true });
  appendFileSync(
    join(ROOT, "logs/services.jsonl"),
    JSON.stringify({
      timestamp: new Date().toISOString(),
      service,
      agentId,
      runId,
      status,
    }) + "\n",
  );
}

async function streamRun(
  run: Awaited<ReturnType<Awaited<ReturnType<typeof Agent.create>>["send"]>>,
): Promise<void> {
  for await (const event of run.stream()) {
    if (event.type === "assistant") {
      for (const block of event.message.content) {
        if (block.type === "text") process.stdout.write(block.text);
      }
    }
  }
}

export async function runAgentPrompt(
  label: string,
  prompt: string,
  runtime: Runtime,
  apiKey: string,
  resumeAgentId?: string,
): Promise<AgentRunResult> {
  console.log(`\n[${label}] Starting (${runtime})\n`);

  try {
    if (resumeAgentId) {
      await using agent = await Agent.resume(resumeAgentId, { apiKey });
      const run = await agent.send(prompt);
      console.log(`\n[${label}] agent=${agent.agentId} run=${run.id}\n`);
      await streamRun(run);
      const result = await run.wait();
      logServiceRun(label, agent.agentId, run.id, result.status);
      return { agentId: agent.agentId, runId: run.id, status: result.status };
    }

    await using agent = await Agent.create(buildAgentOptions(apiKey, runtime));
    const run = await agent.send(prompt);
    console.log(`\n[${label}] agent=${agent.agentId} run=${run.id}\n`);
    await streamRun(run);
    const result = await run.wait();
    logServiceRun(label, agent.agentId, run.id, result.status);

    if (result.status === "error") {
      console.error(`\n[${label}] Finished with error. Resume with:`);
      console.error(`  npm run service:frontend -- --resume ${agent.agentId}`);
      process.exit(2);
    }

    console.log(`\n[${label}] Finished: ${result.status}`);
    return { agentId: agent.agentId, runId: run.id, status: result.status };
  } catch (err) {
    if (err instanceof CursorAgentError) {
      console.error(`[${label}] Startup failed: ${err.message}`);
      console.error(`[${label}] Retryable: ${err.isRetryable}`);
      process.exit(1);
    }
    throw err;
  }
}
