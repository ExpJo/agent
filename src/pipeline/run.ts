import { Agent, CursorAgentError } from "@cursor/sdk";
import {
  ROOT,
  type Phase,
  type Runtime,
  loadPrompt,
  logRun,
  PHASE_PROMPTS,
} from "./config.js";

export interface RunPhaseResult {
  phase: Phase;
  agentId: string;
  runId: string;
  status: string;
}

function buildAgentOptions(apiKey: string, runtime: Runtime) {
  const base = {
    apiKey,
    model: { id: "composer-2.5" as const },
    local: {
      cwd: ROOT,
      settingSources: [],
    },
  };

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
      model: { id: "composer-2.5" as const },
      cloud: {
        repos: [{ url: repoUrl, startingRef: "main" }],
        skipReviewerRequest: true,
      },
    };
  }

  return base;
}

export async function runPhase(
  phase: Phase,
  runtime: Runtime,
  apiKey: string,
  resumeAgentId?: string,
): Promise<RunPhaseResult> {
  const prompt = loadPrompt(PHASE_PROMPTS[phase]);

  console.log(`\n[pipeline] Starting phase: ${phase} (${runtime})`);
  console.log(`[pipeline] Prompt: ${PHASE_PROMPTS[phase]}\n`);

  try {
    if (resumeAgentId) {
      await using agent = await Agent.resume(resumeAgentId, { apiKey });
      const run = await agent.send(prompt);
      console.log(`[pipeline] agent=${agent.agentId} run=${run.id}`);

      await streamRun(run);
      const result = await run.wait();
      logRun(phase, agent.agentId, run.id, result.status);

      return {
        phase,
        agentId: agent.agentId,
        runId: run.id,
        status: result.status,
      };
    }

    await using agent = await Agent.create(buildAgentOptions(apiKey, runtime));
    const run = await agent.send(prompt);
    console.log(`[pipeline] agent=${agent.agentId} run=${run.id}`);

    await streamRun(run);
    const result = await run.wait();
    logRun(phase, agent.agentId, run.id, result.status);

    if (result.status === "error") {
      console.error(`[pipeline] Phase ${phase} finished with error.`);
      console.error(`[pipeline] Inspect run ${run.id} or resume with:`);
      console.error(`  npm run pipeline -- ${phase} --resume ${agent.agentId}`);
      process.exit(2);
    }

    console.log(`\n[pipeline] Phase ${phase} finished: ${result.status}`);
    return {
      phase,
      agentId: agent.agentId,
      runId: run.id,
      status: result.status,
    };
  } catch (err) {
    if (err instanceof CursorAgentError) {
      console.error(`[pipeline] Startup failed: ${err.message}`);
      console.error(`[pipeline] Retryable: ${err.isRetryable}`);
      process.exit(1);
    }
    throw err;
  }
}

async function streamRun(run: Awaited<ReturnType<Awaited<ReturnType<typeof Agent.create>>["send"]>>): Promise<void> {
  for await (const event of run.stream()) {
    if (event.type === "assistant") {
      for (const block of event.message.content) {
        if (block.type === "text") {
          process.stdout.write(block.text);
        }
      }
    }
  }
}

export async function runAllPhases(
  runtime: Runtime,
  apiKey: string,
): Promise<RunPhaseResult[]> {
  const results: RunPhaseResult[] = [];
  const phases: Phase[] = ["framework", "collect", "rank"];

  for (const phase of phases) {
    const result = await runPhase(phase, runtime, apiKey);
    results.push(result);
    if (result.status === "error") break;
  }

  return results;
}
