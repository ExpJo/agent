#!/usr/bin/env node
import {
  loadEnv,
  requireApiKey,
  getRuntime,
  ensureDataDirs,
  checkPhasePrerequisites,
  PHASES,
  type Phase,
} from "./pipeline/config.js";
import { runPhase, runAllPhases } from "./pipeline/run.js";

loadEnv();
ensureDataDirs();

const args = process.argv.slice(2);
const command = args[0] ?? "help";
const resumeFlag = args.indexOf("--resume");
const resumeAgentId = resumeFlag !== -1 ? args[resumeFlag + 1] : undefined;

async function main(): Promise<void> {
  if (command === "help" || command === "--help" || command === "-h") {
    printHelp();
    return;
  }

  const apiKey = requireApiKey();
  const runtime = getRuntime();

  if (command === "all") {
    console.log("[pipeline] Running all phases sequentially.");
    console.log("[pipeline] This may take a while — safe to leave running.\n");
    await runAllPhases(runtime, apiKey);
    console.log("\n[pipeline] All phases complete. Open the UI: npm run ui");
    return;
  }

  if (!PHASES.includes(command as Phase)) {
    console.error(`Unknown command: ${command}`);
    printHelp();
    process.exit(1);
  }

  const phase = command as Phase;
  const prereqError = checkPhasePrerequisites(phase);
  if (prereqError && !resumeAgentId) {
    console.warn(`[pipeline] Warning: ${prereqError}`);
    console.warn("[pipeline] Continuing anyway — agent may handle missing prerequisites.\n");
  }

  await runPhase(phase, runtime, apiKey, resumeAgentId);

  if (phase === "rank") {
    console.log("\n[pipeline] Ranking complete. Open the UI: npm run ui");
  } else {
    const next: Record<Phase, string> = {
      framework: "npm run pipeline:collect",
      collect: "npm run pipeline:rank",
      rank: "npm run ui",
    };
    console.log(`\n[pipeline] Next step: ${next[phase]}`);
  }
}

function printHelp(): void {
  console.log(`
Montreal Idea Engine — Pipeline CLI

Usage:
  npm run pipeline:framework   Research & design the methodology
  npm run pipeline:collect     Collect startup ideas using the framework
  npm run pipeline:rank        Evaluate and rank ideas
  npm run pipeline:all         Run all phases sequentially
  npm run ui                   Open the results UI

Options:
  --resume <agentId>           Resume a previous agent for the same phase

Environment:
  CURSOR_API_KEY               Required. From cursor.com/dashboard/integrations
  PIPELINE_RUNTIME             "local" (default) or "cloud"
  CLOUD_REPO_URL               Required for cloud runtime (GitHub repo URL)

Examples:
  npm run pipeline:framework
  npm run pipeline -- collect --resume agent-abc123
  PIPELINE_RUNTIME=cloud npm run pipeline:all
`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
