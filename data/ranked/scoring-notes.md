# Phase 3 Scoring Notes

**Scored:** 2026-05-23  
**Framework:** MOVS v1.0.0  
**Ideas evaluated:** 20 collected → 20 qualified → 20 ranked

---

## Methodology applied

1. Re-ran hard gates G1–G5 on each idea (Phase 2 pre-scored gates were reviewed, not blindly accepted).
2. Scored six MOVS dimensions with evidence notes per idea.
3. Computed weighted composite; sorted descending.
4. Applied tie-breakers: Cash Path → 7-Day Ship → Montreal Anchor → pain source count.

**Formula:** `MOVS = (Pain × 0.18) + (Anchor × 0.17) + (Ship × 0.22) + (Cash × 0.22) + (Solo × 0.13) + (GTM × 0.08)`

---

## Gate review summary

All 20 ideas passed G1–G5 at collection. Phase 3 review flagged these edge cases but **kept them qualified**:

| Idea | Gate | Notes |
|------|------|-------|
| `grand-prix-hospitality-staff-pool` | G5 | Employment agency licensing unclear `[hypothesis]` — ranked #18; legal review before build |
| `rbq-contractor-check` | G4 | Two-sided marketplace matching risks >15 hrs/week support — ranked #20 |
| `mile-end-bilingual-invoice` | G1 | Quebec-wide product; Mile End is GTM only — passed G1 (useless outside QC) but Anchor scored 5.0 |
| `plateau-freelancer-tax-reserve` | G1 | Same pattern — Quebec tax rules, not Montreal-specific |

**No ideas disqualified.** Closest to disqualification: `rbq-contractor-check` (G4 solo ops) and `grand-prix-hospitality-staff-pool` (G5 legal).

---

## Seasonal timing adjustments (May 23, 2026)

Several ideas lose Cash Path points because the revenue window is closed or closing:

| Idea | Adjustment | Reason |
|------|------------|--------|
| `terrace-permit-renewal-tracker` | Cash 5.0 | April renewal cycle passed; revenue until March 2027 |
| `snow-damage-claim-assistant` | Cash 5.0 | Winter claim season over; next spike November |
| `grand-prix-hospitality-staff-pool` | Cash 5.0 | F1 2026 is June 5–7 — 13 days away; pool cold-start unrealistic |
| `str-summer-permit-navigator` | Cash 8.0 (boost) | June 10 window opens in 18 days — strong timing |
| `juillet-premier-move-coordinator` | Cash 7.0 | July 1 is 39 days out — prime pre-sell window |

---

## Top 5 scoring rationale

### #1 — MTL Tipping Compliance Scanner (8.5)

| Dimension | Score | Evidence |
|-----------|-------|----------|
| Pain | 9.0 | 531 OPC complaints; 97% non-compliance among inspected businesses (CityNews, May 2026) |
| Anchor | 8.0 | Quebec pre-tax rule; Montreal restaurant density amplifies |
| Ship | 9.0 | Checklist + receipt upload + PDF; no POS integration |
| Cash | 8.0 | $79 one-time audit; ARQ channel; 25 sales = $1,975 in 60 days |
| Solo | 9.0 | ~10 min manual review per audit |
| GTM | 8.0 | ARQ newsletter, POS reseller referrals |

**Why #1:** Highest composite. Pain is verified and current. Product ships in 5 days. ARQ gives direct access to 3,500+ Montreal restaurants. Revenue doesn't depend on seasonality.

### #2 — STR Summer Permit Navigator (8.2)

Tie-break winner over Juillet Premier (higher Cash Path: 8.0 vs 7.0). Montreal's June 10–Sept 10 legal window creates urgent demand. Borough-specific bans are genuinely Montreal-specific (Anchor 9.0). GTM weaker (Reddit/FB, no institutional channel).

### #3 — Juillet Premier Move Coordinator (8.2)

Strongest Montreal Anchor in the pool (10.0) — July 1 moving day is Quebec-unique. 115K Montreal movers verified (Gazette). Weakness: GTM requires paid search (score 5.0); B2C at $14.99 needs volume.

### #4 — Resto TFW Francization Kit (8.1)

ARQ explicitly asked Francisation Québec for restaurant-specific TFW programs (CityNews, Oct 2025). Digital product ships in 5 days. ARQ GTM channel (8.0) is a differentiator vs generic compliance tools.

### #5 — OQLF Francization Readiness Kit (8.0)

Framework calibration example scored 8.4 — our score is slightly conservative because Bill 96 employer provisions are 12 months old; urgency may be fading. Still strong B2B pricing ($149–299) and PME MTL distribution.

---

## Ideas deprioritized and why

### Ranked 16–20 (bottom tier)

| Rank | Idea | MOVS | Primary reason for low rank |
|------|------|------|---------------------------|
| 19 | Mile End Bilingual Invoice | 6.4 | Crowded market (Wave/QBO); low Montreal anchor; $15/mo hard to convert |
| 20 | RBQ Contractor Check | 6.3 | Two-sided marketplace; solo ops unsustainable; Quebec-wide not Montreal wedge |
| 18 | Grand Prix Staff Pool | 6.6 | Missed 2026 F1 window; employment agency legal risk; pool cold-start |
| 17 | Plateau Tax Reserve | 6.6 | Quebec-wide tax tool; free spreadsheet workaround; low WTP at $12/mo |
| 16 | Student July 1 Move Kit | 7.2 | Subset of Juillet Premier (#3); students won't pay $10 when free guides exist |

### Mid-tier disappointments (rank 11–15)

- **`sdc-wellington-lease-prep`** — Excellent GTM (SDC Wellington direct) but rent comp cold-start problem and high concierge load (Solo 6.0).
- **`condo-str-violation-log`** — Strong Roccabella case study but B2B syndicate sales cycle slow; niche market (~200 buildings).
- **`palais-congress-restaurant-pulse`** — Clever Montreal angle but no verified willingness-to-pay; restaurants may just check Tourisme Montréal calendar for free.

---

## Score distribution

| MOVS range | Count | Interpretation |
|------------|-------|----------------|
| 8.0–8.5 | 5 | Build-worthy for solo founder |
| 7.2–7.7 | 10 | Viable but timing or GTM weakness |
| 6.3–6.6 | 5 | Deprioritize unless founder has unfair advantage |

**Mean MOVS:** 7.4  
**Median MOVS:** 7.5

---

## Category performance

| Category | Avg MOVS | Best idea |
|----------|----------|-----------|
| compliance-regtech | 7.9 | MTL Tipping Scanner (8.5) |
| consumer | 7.7 | Juillet Premier (8.2) |
| property-real-estate | 7.4 | Commercial Lease Workbook (7.5) |
| b2b-micro-saas | 7.3 | PME Digital Micro-Audit (7.5) |
| hospitality-tourism | 6.9 | Palais Congress Pulse (7.2) |
| local-services | 6.8 | Festival Vendor Deadlines (7.2) |

Compliance/regtech dominates — expected given Montreal's Bill 96, STR bylaws, and municipal complexity.

---

## Status labels assigned

| Status | Count | Criteria |
|--------|-------|----------|
| `verified` | 1 | MTL Tipping Scanner — ≥3 pain URLs, gates passed, regulatory pain current |
| `hypothesis` | 19 | Key revenue or WTP claims unvalidated |

No idea reached `verified` on revenue projections — all 60-day CAD ranges are `[hypothesis]`.

---

## Honest limitations

1. **No customer interviews conducted in Phase 3** — scores rely on Phase 2 sources and framework calibration.
2. **WTP is the weakest dimension across the pool** — most ideas assume SMBs pay $39–199 for checklist tools; this is the biggest validation gap.
3. **French copy quality risk** — several compliance ideas need human-reviewed FR before launch (per mvp-criteria.md).
4. **Duplicate concepts** — Juillet Premier vs Student Move Kit; Commercial Lease Workbook vs SDC Wellington Lease Prep overlap. Consider merging if building.

---

## Recommended validation sequence

If the human picks one idea to build this week:

1. **MTL Tipping Compliance Scanner** — Pre-sell 5 audits ($79) via ARQ contact before writing code.
2. **STR Summer Permit Navigator** — Landing page + Stripe pre-order before June 1; measure conversion from r/montreal and host FB groups.
3. **Resto TFW Francization Kit** — Show PDF sample to 3 Old Port restaurant owners; close 2 kit sales manually.

These three maximize cash path within the next 30 days given today's date (May 23, 2026).
