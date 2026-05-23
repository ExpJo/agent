# Resto Shift SMS Board

**Rank:** #10 | **MOVS:** 7.5 | **Status:** hypothesis  
**Category:** b2b-micro-saas | **Build:** 7 days

---

## Product definition — Week 1 MVP

Simple SMS-based shift coverage tool for Montreal restaurant managers — post an open shift, blast trusted part-time staff, first-accept wins.

**Ship in 7 days:**
- Manager login + staff phone list
- Shift post form (date, time, role, rate)
- SMS blast via Twilio with accept link
- First-accept-wins confirmation
- FR/EN UI; Stripe $49/mo per location

**NOT in v1:** Full scheduling, payroll, TFW compliance tracking, AI optimization.

---

## Target market

| Segment | Who pays | Count |
|---------|----------|-------|
| Primary | Old Port / Ville-Marie restaurant manager, TFW-dependent | ~800 `[hypothesis]` |
| Secondary | Any Montreal full-service restaurant with labour shortage | subset |

**First payer:** Manager at 40-seat Old Port restaurant who lost a cook on Grand Prix weekend and scrambled via WhatsApp groups.

---

## Cost to build

| Item | Estimate |
|------|----------|
| Developer time | 7 days |
| Twilio SMS costs | ~$0.01/msg; budget $50/mo for pilots |
| Stack | Next.js, Supabase, Twilio, Stripe |
| Cash outlay | ~$80/mo (incl. Twilio) |

---

## Revenue potential (CAD)

```
Month 1 (days 1–30):  3 locations × $49  = $147
Month 2 (days 31–60): 8 locations × $49  = $392
─────────────────────────────────────────────
60-day range:         $500 – $2,500  [hypothesis]
```

Slow ramp — needs 10+ locations for meaningful MRR. Compare to #1 tipping scanner one-time revenue.

---

## Go-to-market — first 3 steps

1. **3-restaurant pilot** during festival season — free for June in exchange for feedback (target Old Port / Kwizinn-type venues).
2. **ARQ member outreach** — position as "WhatsApp replacement for shift coverage."
3. **PME MTL hospitality advisor intro** — warm leads to managers already seeking staffing help.

---

## Competitors — Montreal landscape

| Competitor | Gap |
|------------|-----|
| WhatsApp groups | Free but chaotic; no audit trail |
| 7shifts | Full scheduling suite; overkill and expensive |
| Placement agencies | 15–25% markup; slow for same-day needs |
| Grand Prix Staff Pool (#18) | Event-specific; this is ongoing |

---

## Risks and open questions

- **WhatsApp is "good enough"** — biggest adoption barrier
- **Twilio costs eat margin** at low subscriber count
- **Labour shortage may worsen** — fewer part-time workers to blast
- **7shifts could add SMS wedge** — feature not product risk
- **Overlaps with #18 Grand Prix pool** — different use case (ongoing vs event)

---

## Score breakdown

| Dimension | Score | Weighted |
|-----------|-------|----------|
| Pain Evidence | 8.0 | 1.44 |
| Montreal Anchor | 8.0 | 1.36 |
| 7-Day Ship | 8.0 | 1.76 |
| Cash Path | 6.0 | 1.32 |
| Solo Sustainability | 8.0 | 1.04 |
| GTM Reach | 7.0 | 0.56 |
| **MOVS Total** | | **7.5** |
