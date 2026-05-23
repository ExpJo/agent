# Bill 96 Storefront Signage Checker

**Rank:** #6 | **MOVS:** 7.7 | **Status:** hypothesis  
**Category:** compliance-regtech | **Build:** 6 days

---

## Product definition — Week 1 MVP

Photo upload tool where Montreal retailers submit storefront images and receive a Bill 96 signage compliance checklist — identifying whether French is "markedly predominant" on public signs.

**Ship in 7 days:**
- Photo upload (storefront + individual signs)
- Rule-based checklist (size ratio, French prominence — not AI legal verdict)
- Fix recommendations with estimated sign modification costs
- PDF report; Stripe $59/audit, $149/3 locations
- Concierge: manual review in v1

**NOT in v1:** OQLF certification, sign design service, automated computer vision.

---

## Target market

| Segment | Who pays | Count |
|---------|----------|-------|
| Primary | EN-branded boutique, Ste-Catherine / Mont-Royal | ~2,000 `[hypothesis]` |
| Secondary | Franchise locations updating signage post-June 2025 | subset |

**First payer:** Bilingual Village merchant with English-primary storefront signage facing OQLF inspection anxiety (CBC documented business group panic).

---

## Cost to build

| Item | Estimate |
|------|----------|
| Developer time | 6 days |
| Manual review time | ~15 min/audit (Solo concern) |
| Stack | Next.js, Supabase Storage, Stripe |
| Cash outlay | ~$40/mo |

---

## Revenue potential (CAD)

```
Month 1 (days 1–30):  20 audits × $59  = $1,180
Month 2 (days 31–60): 35 audits × $59  = $2,065
─────────────────────────────────────────────
60-day range:         $1,200 – $5,000  [hypothesis]
```

---

## Go-to-market — first 3 steps

1. **SDC du Village outreach** — offer free audits for 5 merchants in exchange for case studies.
2. **Mont-Royal Ave merchant walk** — print one-pager with CBC fine quote ($3,000–30,000/day).
3. **Signage fabricator referral** — partner with local sign shop; they refer pre-installation audits.

---

## Competitors — Montreal landscape

| Competitor | Gap |
|------------|-----|
| Signage fabricators | Sell new signs; no audit product |
| OQLF guidance PDFs | Free but not interactive or photo-based |
| Lawyers | Expensive; overkill for signage check |

---

## Risks and open questions

- **Manual review bottleneck** — Solo score 7.0; doesn't scale past ~20 audits/week
- **Signage rules may stabilize** — urgency decreases as merchants comply
- **AI vision temptation** — avoid; legal liability if automated assessment wrong
- **WTP unverified** — merchants may wait for OQLF notice before paying

---

## Score breakdown

| Dimension | Score | Weighted |
|-----------|-------|----------|
| Pain Evidence | 8.0 | 1.44 |
| Montreal Anchor | 9.0 | 1.53 |
| 7-Day Ship | 7.5 | 1.65 |
| Cash Path | 7.0 | 1.54 |
| Solo Sustainability | 7.0 | 0.91 |
| GTM Reach | 8.0 | 0.64 |
| **MOVS Total** | | **7.7** |
