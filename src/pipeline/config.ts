import { readFileSync, existsSync, mkdirSync, appendFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
export const ROOT = join(__dirname, "..", "..");

export type Phase = "framework" | "collect" | "rank";
export type Runtime = "local" | "cloud";

export const PHASES: Phase[] = ["framework", "collect", "rank"];

export const PHASE_PROMPTS: Record<Phase, string> = {
  framework: "prompts/01-framework-research.md",
  collect: "prompts/02-collect-ideas.md",
  rank: "prompts/03-evaluate-and-rank.md",
};

export function loadEnv(): void {
  const envPath = join(ROOT, ".env");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

export function requireApiKey(): string {
  const key = process.env.CURSOR_API_KEY?.trim();
  if (!key) {
    console.error("Missing CURSOR_API_KEY. Set it in .env or export it.");
    process.exit(1);
  }
  return key;
}

export function getRuntime(): Runtime {
  const runtime = process.env.PIPELINE_RUNTIME?.trim().toLowerCase();
  return runtime === "cloud" ? "cloud" : "local";
}

export function loadPrompt(relativePath: string): string {
  const systemContext = readFileSync(
    join(ROOT, "prompts/00-system-context.md"),
    "utf-8",
  );
  const phasePrompt = readFileSync(join(ROOT, relativePath), "utf-8");
  return `${systemContext}\n\n---\n\n${phasePrompt}`;
}

export function ensureDataDirs(): void {
  for (const dir of ["data/framework", "data/ideas", "data/ranked/briefs", "logs"]) {
    mkdirSync(join(ROOT, dir), { recursive: true });
  }
}

export function logRun(phase: Phase, agentId: string, runId: string, status: string): void {
  ensureDataDirs();
  const entry = {
    timestamp: new Date().toISOString(),
    phase,
    agentId,
    runId,
    status,
  };
  appendFileSync(join(ROOT, "logs/pipeline.jsonl"), JSON.stringify(entry) + "\n");
}

export function checkPhasePrerequisites(phase: Phase): string | null {
  if (phase === "collect") {
    const frameworkDir = join(ROOT, "data/framework");
    if (!existsSync(frameworkDir)) {
      return "data/framework/ does not exist. Run `npm run pipeline:framework` first.";
    }
    const files = existsSync(join(frameworkDir, "methodology.md"));
    if (!files) {
      return "data/framework/methodology.md not found. Framework phase may be incomplete.";
    }
  }
  if (phase === "rank") {
    const ideasIndex = join(ROOT, "data/ideas/index.json");
    if (!existsSync(ideasIndex)) {
      return "data/ideas/index.json not found. Run `npm run pipeline:collect` first.";
    }
  }
  return null;
}
