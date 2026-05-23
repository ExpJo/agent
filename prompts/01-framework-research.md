# Phase 1: Framework Research

## Objective

Before collecting or ranking any startup ideas, **design the research and evaluation
framework itself**. This is the most important phase. Do not skip it. Do not use a
predetermined rubric — discover the best approach through research.

## What to research

Investigate and synthesize answers to these questions:

1. **How do the best idea scouts and early-stage investors evaluate opportunities?**
   What frameworks exist (e.g. lean validation, jobs-to-be-done, market sizing)?
   Which are relevant for a solo developer targeting Montreal micro-SaaS / local services?

2. **What data sources reveal real problems and opportunities in Montreal?**
   - Local forums, Reddit (r/montreal, r/Quebec, r/entrepreneur), Facebook groups
   - Quebec / Montreal government grants and programs (current, not outdated)
   - Montreal business news, startup ecosystem (FounderFuel, MTL NewTech, etc.)
   - Regulatory changes creating openings (permits, licensing, new bylaws)
   - Successful models in Toronto, NYC, Paris, etc. not yet adopted in Montreal
   - Seasonal and cultural factors unique to Montreal

3. **What metrics should we use to compare ideas?**
   Research what dimensions matter for fast-to-build, fast-to-revenue opportunities.
   Design your own scoring/evaluation system based on what you find — not a generic
   template. Justify every metric you choose.

4. **What output format serves both human review and the UI?**
   Design schemas for idea files and the ranked index. The UI reads `data/ranked/index.json`.

5. **What is a realistic "1-week MVP" in 2026 with vibe-coding?**
   Define scope boundaries so collected ideas are actually buildable.

## Deliverables (write all to `data/framework/`)

Create at minimum:

| File | Purpose |
|------|---------|
| `methodology.md` | Full research methodology: where to look, how to validate, step-by-step playbook |
| `evaluation-system.md` | The metrics, weights, and scoring approach you designed (with justification) |
| `data-sources.md` | Curated list of Montreal/Quebec sources with URLs where possible |
| `output-schema.json` | JSON schema for idea objects and the ranked index |
| `mvp-criteria.md` | What counts as a 1-week buildable MVP in this context |

Also create any additional files you determine are needed.

## Important

- Use web search to find **current** Montreal/Quebec sources, grants, and market signals.
- Document your research process so future agent runs can follow the same playbook.
- Do NOT collect startup ideas in this phase. Framework only.
- Do NOT start ranking. Framework only.

When finished, summarize what you built in a short `data/framework/README.md`.
