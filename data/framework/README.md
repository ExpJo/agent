# Montreal Idea Engine — Framework (Phase 1)

**Version:** 1.0.0  
**Generated:** 2026-05-23  
**Status:** Ready for Phase 2 (idea collection)

## What this is

Phase 1 research produced a **Montreal-specific** methodology for discovering, validating, and ranking startup opportunities that a solo developer can ship in ~7 days and monetize within 30–60 days. This is not a generic startup rubric — it synthesizes investor evaluation frameworks, micro-SaaS bootstrapping research, and Quebec/Montreal market signals.

## Files in this folder

| File | Purpose |
|------|---------|
| [methodology.md](./methodology.md) | End-to-end research playbook: discovery → validation → scoring |
| [evaluation-system.md](./evaluation-system.md) | **Montreal Opportunity Velocity Score (MOVS)** — metrics, weights, gates |
| [data-sources.md](./data-sources.md) | Curated Montreal/Quebec sources with URLs |
| [mvp-criteria.md](./mvp-criteria.md) | What counts as a shippable 1-week MVP in 2026 |
| [montreal-context.md](./montreal-context.md) | Local factors: language, seasonality, regulations, culture |
| [output-schema.json](./output-schema.json) | JSON Schema for raw ideas and ranked index |
| [research-log.md](./research-log.md) | How this framework was built (reproducibility) |

## Key design decisions

1. **Investor frameworks adapted down, not copied.** VC scorecards (6 T's, team/TAM/traction) assume venture scale and co-founders. We kept *problem validation*, *timing*, and *competitive wedge* but replaced team/TAM with **solo operability** and **7-day build feasibility** — the dimensions micro-SaaS research identifies as the strongest predictors of solo-founder success.

2. **Montreal is a filter, not a footnote.** Ideas must have a concrete Montreal anchor (language law, borough dynamics, local buyer, regulatory tailwind, or proven Toronto/NYC model not yet localized). Generic "small business SaaS" scores low on **Montreal Anchor**.

3. **Hard gates before scoring.** Ideas that cannot ship in 7 days, cannot reach revenue in 60 days, or lack Montreal specificity are disqualified — not ranked low.

4. **Hypothesis tagging is mandatory.** Unverified claims use `hypothesis` status or inline tags so the UI and human reviewer can distinguish signal from speculation.

## Scoring summary (MOVS)

| Dimension | Weight | What it measures |
|-----------|--------|------------------|
| Pain Evidence | 18% | Verified local problem signals |
| Montreal Anchor | 17% | Why this idea belongs in MTL, not anywhere |
| 7-Day Ship | 22% | Solo build feasibility with vibe-coding |
| Cash Path | 22% | Realistic path to first revenue in 30–60 days |
| Solo Sustainability | 13% | One person can build, sell, and support |
| GTM Reach | 8% | Credible customer acquisition in Montreal |

**Formula:** `score = Σ(dimension_score × weight)` where each dimension is 0–10.

## Next steps (Phase 2)

Run the collection playbook in `methodology.md`:

1. Scan sources in `data-sources.md` using the signal taxonomy
2. Write each candidate to `data/ideas/` (JSON + optional markdown)
3. Apply hard gates from `evaluation-system.md`
4. Do **not** rank yet — collect broadly, tag confidence

Phase 3 will score all collected ideas and write `data/ranked/index.json` + `data/ranked/briefs/`.

## UI compatibility

The ranked index schema matches `ui/src/types.ts` (`RankedIdea`, `RankedIndex`). Briefs are markdown rendered by `IdeaDetail.tsx`.
