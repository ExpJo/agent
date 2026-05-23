# Phase 2: Idea Collection

**Status:** Complete  
**Collected:** 2026-05-23  
**Framework version:** 1.0.0  
**Total ideas:** 20

## What this folder contains

Raw candidate startup ideas for Montreal, collected using the Phase 1 methodology in `data/framework/`. Each idea is a JSON file conforming to `data/framework/output-schema.json`.

**These ideas are not ranked.** Phase 3 will apply MOVS scoring and write to `data/ranked/`.

## Collection method

Discovery followed the three-pass playbook in `methodology.md`:

| Pass | Focus | Examples used |
|------|-------|---------------|
| A — Pain | Recurring complaints, closures, labour crisis | Station W rent hike, restaurant TFW cap, OPC tipping non-compliance |
| B — Opportunity | Rules changing, money moving | Bill 96 June 2025, STR summer window, Palais des congrès 2026 calendar |
| C — Feasibility | Solo 7-day build check | Checklist SaaS, SMS tools, PDF reports — no marketplaces or native apps |

Sources were searched in **French and English**. Unverified claims are tagged `hypothesis` in idea files.

## Ideas by category

| Category | Count | IDs |
|----------|-------|-----|
| compliance-regtech | 6 | `oqlf-francization-readiness`, `str-summer-permit-navigator`, `mtl-tipping-compliance-scanner`, `terrace-permit-renewal-tracker`, `resto-tfw-francization-kit`, `bill96-storefront-signage-check` |
| property-real-estate | 4 | `sdc-wellington-lease-prep`, `condo-str-violation-log`, `snow-damage-claim-assistant`, `commercial-lease-renewal-workbook` |
| hospitality-tourism | 2 | `palais-congress-restaurant-pulse`, `grand-prix-hospitality-staff-pool` |
| b2b-micro-saas | 4 | `resto-shift-sms-board`, `plateau-freelancer-tax-reserve`, `mile-end-bilingual-invoice`, `pme-digital-micro-audit` |
| local-services | 2 | `rbq-contractor-check`, `mtl-festival-vendor-deadlines` |
| consumer | 2 | `juillet-premier-move-coordinator`, `student-july1-move-kit` |

## Quality bar applied

Each collected idea has:

- [x] At least 2 pain signals OR 1 regulatory/seasonal catalyst with source URLs
- [x] A named Montreal persona (borough + industry)
- [x] Draft MVP scope passing `mvp-criteria.md` (≤7 build days)
- [x] At least 1 competitor or workaround documented
- [x] Hard gates G1–G5 documented (preliminary — Phase 3 confirms)

Ideas failing any gate were not included.

## Files

- `index.json` — manifest for UI and Phase 3 pipeline
- `{slug}.json` — one file per idea

## Next step

Phase 3: Score all 20 ideas with MOVS and write ranked output to `data/ranked/index.json` and `data/ranked/briefs/`.
