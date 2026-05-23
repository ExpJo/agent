# MTL Tipping Compliance Scanner

**Rank:** #1 | **MOVS:** 8.5 | **Status:** verified  
**Category:** compliance-regtech | **Build:** 5 days

---

## Product definition — Week 1 MVP

A self-serve web tool where Montreal restaurant owners upload a sample receipt photo, select their POS vendor (Lightspeed, Square, TouchBistro, etc.), and receive a compliance report confirming whether tipping prompts calculate on pre-tax amounts per Quebec's May 2025 rule.

**Ship in 7 days:**
- Landing page (FR primary, EN toggle) with OPC fine context
- POS vendor selector + receipt photo upload
- Rule-based checklist (not AI legal advice) comparing subtotal vs tip base
- PDF compliance report with fix instructions per POS vendor
- Stripe Checkout: $79/audit, $199/year monitoring
- Email delivery of report within 24h (manual review in v1)

**Explicitly NOT in v1:** POS API integration, automated terminal reconfiguration, legal certification.

---

## Target market

| Segment | Who pays | Count `[hypothesis]` |
|---------|----------|----------------------|
| Primary | Independent bar-restaurant owner, Saint-Henri / Plateau / Old Port | ~3,500 Montreal metro |
| Secondary | Restaurant groups with 2–5 locations updating legacy POS | ~200 groups |

**First payer profile:** French-speaking owner of a 40-seat neighbourhood restaurant with a Square or Lightspeed terminal installed before May 2025. Received OPC inspection notice or saw ARQ newsletter about tipping rules.

---

## Cost to build

| Item | Estimate |
|------|----------|
| Developer time | 5 days (~40 hrs) |
| Stack | Next.js, Supabase Storage, Stripe, React-PDF |
| Twilio/SMS | Not needed v1 |
| Cash outlay | ~$50/mo (Vercel + Supabase + Stripe fees) |
| POS vendor fix guides | 8–12 hrs research (public support docs) |

**Concierge fallback:** Manual receipt review via email for $79 while building automated PDF.

---

## Revenue potential (CAD)

```
Month 1 (days 1–30):  15 audits × $79  = $1,185
Month 2 (days 31–60): 25 audits × $79  = $1,975 (+ 3 monitoring @ $199)
─────────────────────────────────────────────
60-day range:         $2,000 – $8,000  [hypothesis]
```

Upside: ARQ newsletter mention could drive 50+ audits in June. Downside: POS vendors eventually ship compliant updates for free.

---

## Go-to-market — first 3 steps

1. **Email ARQ** (or post in member Facebook group) offering 5 free compliance audits in exchange for testimonial — target Saint-Henri / Sud-Ouest restaurants cited in CityNews coverage.
2. **Partner with one POS reseller** (e.g., local Lightspeed dealer) — offer $15 referral fee per audit; they field support calls about tipping configuration.
3. **Publish FR blog post** "Comment vérifier si votre POS respecte la loi sur le pourboire" — SEO for "pourboire avant taxes POS Montréal."

---

## Competitors — Montreal landscape

| Competitor | Presence | Gap |
|------------|----------|-----|
| POS vendor firmware updates | Strong | Slow rollout; some terminals need replacement |
| OPC inspection | N/A | Reactive — fines after non-compliance |
| Accountants | Strong | $150+/hr; not POS-specific |
| Generic compliance SaaS | None | No Quebec tipping-specific tool found |

**Wedge:** Speed + price ($79 vs waiting for OPC) + POS-vendor-specific fix guides in French.

---

## Risks and open questions

| Risk | Severity | Mitigation |
|------|----------|------------|
| POS vendors ship free compliance updates | Medium | Pivot to ongoing monitoring subscription |
| Liability if report is wrong | Medium | Disclaimer: guidance not legal advice; recommend OPC self-check |
| Restaurants won't pay $79 | High `[hypothesis]` | Pre-sell 5 audits before building |
| Manual review doesn't scale | Low | Cap at 10/day; hire part-time reviewer at $20/audit |

**Open questions:**
- Will ARQ officially endorse or block third-party compliance tools?
- Do franchise chains (MTY, Imvescor) handle compliance centrally, shrinking market?

---

## Score breakdown

| Dimension | Score | Weight | Weighted |
|-----------|-------|--------|----------|
| Pain Evidence | 9.0 | 18% | 1.62 |
| Montreal Anchor | 8.0 | 17% | 1.36 |
| 7-Day Ship | 9.0 | 22% | 1.98 |
| Cash Path | 8.0 | 22% | 1.76 |
| Solo Sustainability | 9.0 | 13% | 1.17 |
| GTM Reach | 8.0 | 8% | 0.64 |
| **MOVS Total** | | | **8.5** |
