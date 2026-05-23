# Phase 3: Evaluate and Rank

## Objective

Using the evaluation system you designed in Phase 1, score and rank all collected
ideas from Phase 2. Produce output the UI can display.

## Prerequisites

- `data/framework/evaluation-system.md` and `output-schema.json` must exist.
- `data/ideas/` must contain collected ideas with `index.json` manifest.

## What to do

1. Read the evaluation system and schema from `data/framework/`.
2. Read every idea in `data/ideas/`.
3. Apply **your own metrics** (not a generic rubric) to each idea. Show your scoring
   work — transparency matters.
4. Rank all ideas from best to worst for our goal: **1-week MVP, Montreal, fast cash flow**.
5. Write output:

| File | Purpose |
|------|---------|
| `data/ranked/index.json` | Ranked manifest — array of ideas with rank, scores, summary fields |
| `data/ranked/scoring-notes.md` | How you scored, edge cases, ideas you deprioritized and why |
| `data/ranked/briefs/{id}.md` | Full brief for each idea in the top 10 (minimum top 5) |

Each brief must include (adapt field names to your schema):

- Product definition — what exactly gets built in week 1
- Target market — who in Montreal pays for this
- Cost to build — time and cash estimate
- Revenue potential — realistic month 1–3 range in CAD
- Go-to-market — first 3 concrete steps
- Competitors — who exists in Montreal already, their gaps
- Risks and open questions
- Overall score and rank with breakdown by your metrics

## UI contract

The UI reads `data/ranked/index.json`. Ensure it matches your schema and includes
at minimum for each entry:

```json
{
  "id": "string",
  "rank": 1,
  "title": "string",
  "tagline": "string",
  "score": 0,
  "scoreBreakdown": {},
  "category": "string",
  "buildDays": 7,
  "revenuePotentialCAD": { "low": 0, "high": 0 },
  "briefPath": "briefs/idea-id.md",
  "status": "ranked"
}
```

Adjust fields to match your framework schema — the UI adapts to what's in the file.

## Important

- Use the evaluation system **you designed**, not a generic one.
- Be honest in scoring. A mediocre idea ranked #1 helps no one.
- The top 3 ideas should be genuinely exciting for a solo Montreal builder.

When finished, write `data/ranked/README.md` with a summary: top 3 picks and why.
