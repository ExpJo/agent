# Terrace Permit Renewal Tracker

**Rank:** #7 | **MOVS:** 7.7 | **Status:** hypothesis  
**Category:** compliance-regtech | **Build:** 5 days

---

## Product definition — Week 1 MVP

Borough-specific terrace permit renewal tracker for Montreal restaurants — quiz determines applicable rules, generates document checklist, sends email reminders before deadlines.

**Ship in 7 days:**
- Borough rule lookup (19 boroughs — different periods: Apr 15–Nov 15 vs May 1–Oct 15)
- Document checklist per borough
- Email renewal reminders
- Stripe: $39–59/season
- French-primary UI

**NOT in v1:** Permit submission API, insurance broker integration.

---

## Target market

| Segment | Who pays | Count |
|---------|----------|-------|
| Primary | Plateau restaurant with public terrace, 30–80 seats | ~600 `[hypothesis]` |
| Secondary | Mile End / Ville-Marie terrasse owners | subset |

**First payer:** Plateau café owner who missed a renewal deadline last year and lost 2 weeks of terrace revenue.

---

## Cost to build

| Item | Estimate |
|------|----------|
| Developer time | 5 days |
| Borough data compilation | 1 day (montreal.ca) |
| Stack | Next.js, Supabase, Resend, Stripe |
| Cash outlay | ~$40/mo |

---

## Revenue potential (CAD)

```
Month 1 (days 1–30):  10 subs × $39  = $390   [May 2026 — post-renewal season]
Month 2 (days 31–60): 15 subs × $39  = $585
─────────────────────────────────────────────
60-day range:         $800 – $4,000  [hypothesis]
```

**Timing warning:** Scored May 23, 2026 — April renewal cycle passed. Real revenue window is February–April 2027. Launch now to build list for next season.

---

## Go-to-market — first 3 steps

1. **ARQ pre-season email** (target March 2027 list-building now) — "Never miss your terrasse renewal again."
2. **SDC Plateau merchant newsletter** — free borough quiz as lead magnet.
3. **Restaurant supplier co-marketing** — partner with terrasse furniture rental company.

---

## Competitors — Montreal landscape

| Competitor | Gap |
|------------|-----|
| montreal.ca terrace pages | Static; no reminders or borough quiz |
| Restaurant accountants | Don't track permit deadlines |
| Memory + calendar | Current workaround; fails on rule changes |

---

## Risks and open questions

- **Seasonal cash path** (score 5.0) — wrong launch timing if expecting immediate revenue
- **Low price point** — $39/season needs 100+ subscribers for meaningful income
- **Annual content maintenance** — borough rules change; requires yearly update
- **Terrace revenue urgency** — post-staffing crisis, owners may prioritize staffing over permit tools

---

## Score breakdown

| Dimension | Score | Weighted |
|-----------|-------|----------|
| Pain Evidence | 7.0 | 1.26 |
| Montreal Anchor | 9.0 | 1.53 |
| 7-Day Ship | 9.0 | 1.98 |
| Cash Path | 5.0 | 1.10 |
| Solo Sustainability | 9.0 | 1.17 |
| GTM Reach | 8.0 | 0.64 |
| **MOVS Total** | | **7.7** |
