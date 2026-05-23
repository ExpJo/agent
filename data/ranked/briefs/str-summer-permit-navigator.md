# STR Summer Permit Navigator

**Rank:** #2 | **MOVS:** 8.2 | **Status:** hypothesis  
**Category:** compliance-regtech | **Build:** 6 days

---

## Product definition — Week 1 MVP

A guided checklist tool for Montreal condo/apartment owners who want to legally rent their principal residence on Airbnb during the June 10–September 10 window.

**Ship in 7 days:**
- Borough eligibility quiz (maps 19 borough rules — some ban STR entirely)
- Document checklist (proof of residence, insurance, registry number)
- Calendar with renewal reminders (email via Resend)
- Stripe: $49/season or $79 with 15-min review call
- FR/EN UI

**NOT in v1:** City permit API, listing management, dynamic pricing.

---

## Target market

| Segment | Who pays | Count |
|---------|----------|-------|
| Primary | Griffintown / Sud-Ouest condo owner, first-time host | ~4,000 STR units `[CBC]` |
| Secondary | Plateau duplex owner renting secondary unit in legal window | ~1,000 `[hypothesis]` |

**First payer:** Bilingual professional who bought a Griffintown condo in 2023, wants summer rental income, heard about $1,000+/day fines on CBC.

---

## Cost to build

| Item | Estimate |
|------|----------|
| Developer time | 6 days |
| Stack | Next.js, Supabase, Resend, Stripe |
| Borough rule research | 1 day (montreal.ca pages) |
| Cash outlay | ~$40/mo |

---

## Revenue potential (CAD)

```
Month 1 (days 1–30):  30 hosts × $49  = $1,470  (pre-June 10 rush)
Month 2 (days 31–60): 50 hosts × $49  = $2,450  (peak June)
─────────────────────────────────────────────
60-day range:         $2,000 – $8,000  [hypothesis]
```

June 10 window creates natural urgency — launch by May 30 to capture pre-season demand.

---

## Go-to-market — first 3 steps

1. **Post in r/montreal** and Montreal Airbnb host Facebook groups with free borough eligibility checker (lead gen for paid checklist).
2. **Partner with 2 Griffintown RE agents** — offer $20 referral per sale; agents field STR questions from buyers.
3. **Google Ads** on "location court terme Montréal permis" starting May 25 — budget $200 test.

---

## Competitors — Montreal landscape

| Competitor | Gap |
|------------|-----|
| montreal.ca permit pages | Official but static; no reminders or borough quiz |
| Airbnb host forums | Anecdotal advice; outdated post-2025 rules |
| Property managers | Full-service; $200+/mo overkill for one unit |

---

## Risks and open questions

- **WTP unverified** — hosts may rely on free montreal.ca pages
- **Seasonal revenue** — 4-month product; need winter pivot or annual renewal
- **Borough rule changes** — requires annual content update
- **Legal disclaimer** — must not imply city approval

**Open question:** Will expanded inspector team (The Logic, 2025) increase fine fear enough to drive purchases?

---

## Score breakdown

| Dimension | Score | Weighted |
|-----------|-------|----------|
| Pain Evidence | 7.0 | 1.26 |
| Montreal Anchor | 9.0 | 1.53 |
| 7-Day Ship | 9.0 | 1.98 |
| Cash Path | 8.0 | 1.76 |
| Solo Sustainability | 9.0 | 1.17 |
| GTM Reach | 6.0 | 0.48 |
| **MOVS Total** | | **8.2** |
