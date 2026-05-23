# Project Philosophy

This project discovers startup ideas for Montreal — businesses, services, or products
that can be built in ~1 week with vibe-coding and start generating cash flow quickly.

## Core principle

**When in doubt, research first.** Do not guess. Do not use generic templates.
Step back, investigate, and determine the best approach before acting.

This applies to everything in this repo:

- How to research Montreal market opportunities
- What metrics and criteria to use for evaluation
- What output formats work best
- How to rank and compare ideas

**We do not predefine scoring rubrics or frameworks.** The agents' first job is to
research and design the methodology itself. Only after that research is complete
should agents collect, evaluate, and rank ideas using the framework they built.

## Constraints for ideas (fixed context, not scoring)

These are boundary conditions for what we're looking for — not how to score:

- **Location:** Montreal, Quebec, Canada
- **Build speed:** MVP shippable in ~7 days by a solo developer using AI-assisted coding
- **Revenue goal:** Realistic path to cash flow within 30–60 days
- **Scope:** B2B services, B2C products, local market plays — all valid

## Agent workflow

1. **Framework** — Research how to best discover and evaluate Montreal startup ideas.
   Design the methodology, metrics, data sources, and output schemas. Write everything
   to `data/framework/`.

2. **Collect** — Using the framework from step 1, research and collect candidate ideas.
   Write each idea to `data/ideas/` (format is your choice — markdown, JSON, or both).

3. **Rank** — Using the framework's own evaluation criteria, score and rank all ideas.
   Write the ranked index to `data/ranked/index.json` and detailed briefs to
   `data/ranked/briefs/`.

4. **Display** — The UI in `ui/` reads from `data/` to show results. Keep output
   structured enough for the UI to parse.

## Output guidelines

- Prefer structured data the UI can consume (`index.json` manifest + markdown briefs)
- Cite sources where possible; mark unverified claims as `hypothesis`
- Be specific to Montreal — not generic "startup advice"
- Document your reasoning in the framework phase so later runs are reproducible
