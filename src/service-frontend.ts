#!/usr/bin/env node
import { loadEnv, requireApiKey, getRuntime } from "./pipeline/config.js";
import { loadServicePrompt, runAgentPrompt } from "./lib/agent-runner.js";

const FRONTEND_PROMPT = "prompts/services/frontend-engineer.md";

loadEnv();

const args = process.argv.slice(2);
const resumeFlag = args.indexOf("--resume");
const resumeAgentId = resumeFlag !== -1 ? args[resumeFlag + 1] : undefined;

const extraParts: string[] = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--resume") {
    i++;
    continue;
  }
  extraParts.push(args[i]);
}
const extraInstructions = extraParts.join(" ").trim() || undefined;

async function main(): Promise<void> {
  if (args.includes("--help") || args.includes("-h")) {
    console.log(`
Frontend Engineer Service

Usage:
  npm run service:frontend
  npm run service:frontend -- "focus on mobile brief layout"
  npm run service:frontend -- --resume agent-XXXX

Runs a Cursor SDK agent to investigate and improve ui/.
`);
    return;
  }

  const apiKey = requireApiKey();
  const runtime = getRuntime();
  const prompt = loadServicePrompt(FRONTEND_PROMPT, extraInstructions);

  await runAgentPrompt("service:frontend", prompt, runtime, apiKey, resumeAgentId);
  console.log("\n[service:frontend] Done. Refresh http://localhost:5173");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
