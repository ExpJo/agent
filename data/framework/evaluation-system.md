# Evaluation System — Montreal Opportunity Velocity Score (MOVS)

**Framework version:** 1.0.0  
**Scale:** 0–10 per dimension, weighted composite 0–10

## Design rationale

We synthesized three research streams:

1. **VC / angel frameworks** (6 T's, lean validation) — emphasize problem, timing, traction, differentiation
2. **Micro-SaaS solo-founder research** — MVP speed is the dominant failure mode; "boring" niches outperform sexy ones
3. **Montreal market structure** — ~140K employer businesses in the CMA, bilingual regulation, local distribution networks (SDCs, boroughs, PME MTL)

Standard VC rubrics overweight **team** and **TAM**. Our fixed context replaces those with **Solo Sustainability** and **Montreal Anchor**. We overweight **7-Day Ship** and **Cash Path** because the project's success criterion is *build fast, revenue fast* — not venture returns.

---

## Hard gates (must pass before scoring)

| ID | Gate | Pass criteria |
|----|------|---------------|
| G1 | Montreal Anchor | Idea loses >50% value if moved to another city |
| G2 | 7-Day Ship | MVP scope fits [mvp-criteria.md](./mvp-criteria.md) |
| G3 | Cash Path | Named first customer type + channel; revenue plausible in 60 days |
| G4 | Solo Ops | ≤15 hrs/week support at 20 customers `[hypothesis: adjust per idea]` |
| G5 | Legal | No blocked professional license or pre-revenue regulatory approval |

**If any gate fails:** set `status: "disqualified"` in idea file; do not include in ranked index.

---

## Scoring dimensions

### 1. Pain Evidence (weight: 18%)

*How strong is proof that Montreal customers feel this problem?*

| Score | Criteria |
|-------|----------|
| 9–10 | Multiple verified sources; customers already pay for workarounds; quantified cost |
| 7–8 | Clear recurring complaints; competitor revenue proves market |
| 5–6 | Single strong source or logical inference from regulation |
| 3–4 | Anecdotal; `[hypothesis]` only |
| 0–2 | Invented problem; no sources |

**Evidence types (best → weakest):** paid workaround > repeated forum posts > news trend > founder intuition

**JTBD check:** Can you quote a real person describing the job they need done?

---

### 2. Montreal Anchor (weight: 17%)

*Why must this exist in Montreal specifically?*

| Score | Criteria |
|-------|----------|
| 9–10 | Quebec law, municipal bylaw, or French-language requirement is core to the product |
| 7–8 | Strong local network effect (borough, industry cluster, SDC) |
| 5–6 | Localized GTM or data (neighborhood-level) but product could theoretically expand |
| 3–4 | "Montreal first" GTM only — product is geographically agnostic |
| 0–2 | Generic; works identically in any North American city |

**Examples of high anchor:**
- OQLF / Bill 96 francization workflow tooling
- Montreal STR permit compliance ( municipal bylaw + provincial registry)
- SDC merchant rent benchmarking (Monk Blvd, Wellington St dynamics)

**Examples of low anchor:**
- Generic invoice SaaS with Montreal landing page

---

### 3. 7-Day Ship (weight: 22%)

*Can one developer ship a usable MVP in ≤7 days using vibe-coding?*

| Score | Criteria |
|-------|----------|
| 9–10 | CRUD + auth + payments + email; no mobile app; standard stack |
| 7–8 | One hard integration (maps, calendar, PDF); still ≤7 days |
| 5–6 | Tight 7 days; requires cutting scope aggressively |
| 3–4 | 2–3 weeks realistic; fails gate G2 unless rescoped |
| 0–2 | Months of work; hardware; multi-sided marketplace cold-start |

Reference: [mvp-criteria.md](./mvp-criteria.md)

**Micro-SaaS research note:** ~68% of failed solo ideas die on build complexity, not market size. This dimension gets the highest weight alongside Cash Path.

---

### 4. Cash Path (weight: 22%)

*How realistic is revenue within 30–60 days?*

| Score | Criteria |
|-------|----------|
| 9–10 | Pre-sold or obvious paid pilot; price ≥$49/mo or ≥$200 one-time; buyer budget exists |
| 7–8 | Clear B2B buyer; short sales cycle; seasonal timing aligns |
| 5–6 | B2C with $15–29/mo; needs 50+ customers for meaningful cash |
| 3–4 | Freemium with unclear conversion; long enterprise cycle |
| 0–2 | No willingness-to-pay signal; ad-supported only |

**Revenue modeling (required in brief):**

```
Month 1 (days 1–30):  {n} customers × ${price} = ${low}
Month 2 (days 31–60): {n} customers × ${price} = ${high}
```

Use CAD. Mark projections as `[hypothesis]` without validation data.

**Pricing sweet spot for solo ops:** $29–$199/mo B2B or $50–$500 one-time local service (MicroConf / Indie Hackers consensus).

---

### 5. Solo Sustainability (weight: 13%)

*Can one person build, sell, support, and improve this?*

| Score | Criteria |
|-------|----------|
| 9–10 | Self-serve SaaS; low-touch; async support |
| 7–8 | Occasional onboarding call; bounded support load |
| 5–6 | Moderate customization; manageable with templates |
| 3–4 | High-touch service; risk of becoming a job not a product |
| 0–2 | 24/7 ops; field work; multi-vendor coordination |

---

### 6. GTM Reach (weight: 8%)

*Can this founder reach Montreal customers without a ad budget?*

| Score | Criteria |
|-------|----------|
| 9–10 | Direct access: SDC partnership, niche community, SEO with local intent |
| 7–8 | LinkedIn / cold email to countable list (<500 targets) |
| 5–6 | Paid ads needed but affordable; `[hypothesis]` CAC |
| 3–4 | Crowded channel; depends on virality |
| 0–2 | No identifiable path to first 10 customers |

**Montreal-specific GTM assets:**
- PME MTL sector advisors (free)
- YES Montréal workshops
- Meetup groups (Plateau entrepreneurs, business owners network)
- Borough merchant associations / SDCs
- French-language Facebook groups (often underserved by English SaaS marketing)

---

## Composite score

```
MOVS = (Pain × 0.18) + (Anchor × 0.17) + (Ship × 0.22) + (Cash × 0.22) + (Solo × 0.13) + (GTM × 0.08)
```

**Display in UI:** Round to 1 decimal. Populate `scoreBreakdown` with dimension keys:

```json
{
  "painEvidence": 8.0,
  "montrealAnchor": 9.0,
  "sevenDayShip": 7.5,
  "cashPath": 8.0,
  "soloSustainability": 8.5,
  "gtmReach": 7.0
}
```

### Tie-breakers (same MOVS ±0.1)

1. Higher **Cash Path**
2. Higher **7-Day Ship**
3. Higher **Montreal Anchor**
4. More **pain-verified** sources (count)

---

## Status labels

| Status | Meaning |
|--------|---------|
| `verified` | ≥3 pain signals with URLs; gates passed; no critical `[hypothesis]` on revenue |
| `hypothesis` | In ranked index but key claims unverified |
| `disqualified` | Failed gate; excluded from index |
| `ranked` | Default after scoring |

---

## What we intentionally don't score

| Excluded metric | Why |
|-----------------|-----|
| Team / founder fit | Solo context; human decides |
| Venture TAM | Irrelevant at 100–500 customer scale |
| Defensibility / moats | Premature at MVP stage |
| "Innovation" | Boring problems often win for cash flow |
| ESG impact | Unless regulatory-driven (e.g., GES reporting) |

---

## Calibration examples (illustrative — not real collected ideas)

These calibrate scorer judgment only:

| Concept | Pain | Anchor | Ship | Cash | Solo | GTM | MOVS |
|---------|------|--------|------|------|------|-----|------|
| OQLF francization checklist SaaS for 25–50 employee firms | 8 | 10 | 8 | 8 | 9 | 7 | **8.4** |
| Generic AI writing tool for "businesses" | 4 | 2 | 9 | 3 | 9 | 3 | **4.8** → disqualified on G1 |
| STR permit compliance tracker (MTL bylaw) | 7 | 9 | 7 | 7 | 8 | 6 | **7.5** |
| Multi-sided home services marketplace | 8 | 6 | 2 | 5 | 3 | 4 | **4.7** → fails G2/G4 |

---

## Scoring workflow (Phase 3)

1. Load all `data/ideas/*.json`
2. Run gates G1–G5 → split qualified / disqualified
3. Score qualified ideas on six dimensions with evidence notes
4. Compute MOVS; sort descending
5. Assign `rank` 1…n
6. Generate briefs for top N (recommend: all qualified, minimum top 20)
7. Write `data/ranked/index.json` with `frameworkVersion: "1.0.0"`

---

## Review questions for human reader

After ranking, the human should be able to answer:

1. **Why this idea now?** → Pain Evidence + Montreal Anchor sections
2. **Can I build it next week?** → 7-Day Ship + brief build plan
3. **Who pays me first?** → Cash Path + GTM
4. **What's unverified?** → `[hypothesis]` tags and `status` field
