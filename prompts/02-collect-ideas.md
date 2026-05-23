# Phase 2: Idea Collection

## Objective

Using the framework you designed in Phase 1, research and collect candidate startup
ideas for Montreal. Follow your own methodology — read everything in `data/framework/`.

## Prerequisites

- `data/framework/` must exist and contain your methodology, evaluation system, and
  data sources. If it's empty or incomplete, stop and say so.

## What to do

1. Read all files in `data/framework/` carefully.
2. Execute your research playbook against Montreal-specific sources.
3. Collect **at least 15 candidate ideas** (aim for 20–30 if sources support it).
4. For each idea, capture enough detail for later evaluation:
   - Problem being solved
   - Target customer in Montreal
   - Why now / why Montreal
   - Evidence (source links or marked as `hypothesis`)
   - Rough sense of 1-week MVP scope
5. Write each idea to `data/ideas/` using the format defined in your framework's
   `output-schema.json`. Markdown files, JSON files, or both — follow your schema.

Also create `data/ideas/index.json` — a manifest listing all collected ideas with
id, title, and file path.

## Quality bar

- **No generic ideas.** "Build a todo app" or "AI chatbot for X" without Montreal
  specificity is rejected-quality.
- **Evidence over intuition.** Cite sources. Tag guesses as `hypothesis`.
- **Buildable in ~1 week.** Filter out ideas that need months of dev or heavy compliance
  unless your framework explicitly handles that category differently.

## Important

- Do NOT rank or score ideas yet. Collection only.
- Do NOT modify the framework unless you discover a gap — if you do, document changes
  in `data/framework/changelog.md`.

When finished, update `data/ideas/index.json` and confirm the count in a brief
`data/ideas/README.md`.
