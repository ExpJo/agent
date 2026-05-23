# Juillet Premier Move Coordinator

**Rank:** #3 | **MOVS:** 8.2 | **Status:** hypothesis  
**Category:** consumer | **Build:** 5 days

---

## Product definition — Week 1 MVP

A personalized July 1 moving timeline for Montreal households — Quebec-specific checklist (TAL rent disclosure, Hydro-Québec transfer, borough parking permits) plus affiliate links to truck rental, cleaners, and storage.

**Ship in 7 days:**
- Move date countdown wizard
- QC-specific checklist (TAL, RAMQ address change, SAAQ)
- Affiliate links (U-Haul, Entreposage, cleaning services)
- Stripe: $14.99 digital guide
- FR/EN toggle
- Email drip: 30/14/7/1 day reminders

**NOT in v1:** Full marketplace dispatch, apartment search, lease legal review.

---

## Target market

| Segment | Who pays | Count |
|---------|----------|-------|
| Primary | Young couple moving Plateau → Verdun on July 1 | 115,000 movers `[Gazette]` |
| Secondary | Family upgrading to larger NDG home | subset |

**First payer:** Bilingual couple, first July 1 move, overwhelmed by simultaneous lease end/start and truck availability.

---

## Cost to build

| Item | Estimate |
|------|----------|
| Developer time | 5 days |
| Stack | Next.js, Stripe, Resend |
| Affiliate setup | 2 hrs (U-Haul, storage partners) |
| Cash outlay | ~$30/mo + ad budget |

---

## Revenue potential (CAD)

```
Month 1 (days 1–30):  100 guides × $14.99 = $1,499  (+ affiliates ~$500)
Month 2 (days 31–60): 200 guides × $14.99 = $2,998  (+ affiliates ~$1,500)
─────────────────────────────────────────────
60-day range:         $2,000 – $10,000  [hypothesis]
```

Affiliate revenue could exceed guide sales if conversion is strong.

---

## Go-to-market — first 3 steps

1. **Launch landing page by May 25** — Google Ads on "déménagement 1er juillet Montréal" ($300 test budget).
2. **Post in r/montreal and r/Quebec** moving threads with free preview checklist (top 10 items).
3. **Content SEO:** "Guide déménagement 1er juillet Montréal 2026" — target OMHM-adjacent search terms.

---

## Competitors — Montreal landscape

| Competitor | Gap |
|------------|-----|
| U-Haul | Truck only; no QC-specific timeline |
| 311 / OMHM | Emergency help; not planning tool |
| Generic moving checklists | Not Quebec/July 1 specific |
| Québec.ca SARL | Crisis intervention; not proactive planner |

---

## Risks and open questions

- **Paid ads required** (GTM 5.0) — CAC may exceed $14.99 guide price `[hypothesis]`
- **Student subset** (#16 Student Move Kit) competes at lower price point
- **One-day peak** — revenue concentrated May 15–June 25
- **Affiliate commission uncertainty** — need partner agreements

---

## Score breakdown

| Dimension | Score | Weighted |
|-----------|-------|----------|
| Pain Evidence | 8.0 | 1.44 |
| Montreal Anchor | 10.0 | 1.70 |
| 7-Day Ship | 9.0 | 1.98 |
| Cash Path | 7.0 | 1.54 |
| Solo Sustainability | 9.0 | 1.17 |
| GTM Reach | 5.0 | 0.40 |
| **MOVS Total** | | **8.2** |
