# Research Log — Framework Design (Phase 1)

**Date:** 2026-05-23  
**Agent task:** Design evaluation framework before collecting ideas  
**Constraint:** No idea collection or ranking in this phase

## Research questions addressed

1. How do idea scouts and early-stage investors evaluate opportunities?
2. What Montreal/Quebec data sources reveal real problems?
3. What metrics matter for fast-build, fast-revenue solo-founder plays?
4. What output format serves humans and the UI?
5. What is a realistic 1-week MVP with AI-assisted coding in 2026?

## Sources consulted

### Evaluation frameworks (general)

| Source | Takeaway for this project |
|--------|---------------------------|
| [6 T's VC scorecard](https://luisllorens.substack.com/p/from-pre-seed-to-series-a-what-investors) | Pre-seed weighting favors problem + team; we substitute **solo operability** for team and **7-day ship** for product maturity |
| [Lean validation (2026)](https://gonogo.team/validate-startup-idea/lean-method) | Build-Measure-Learn cycles compress to days with no-code + AI; measure willingness-to-pay, not signups |
| [Business validation phases (GitHub)](https://github.com/vishalp-dev24/business-validation-phases) | JTBD + pretotyping for problem phase; 40%+ willing-to-pay threshold for solution phase |
| [Micro-SaaS playbook (Fluenta)](https://fluenta.space/resources/playbooks/micro-saas-playbook-niche-to-5k-mrr-90-days) | Only ~13% of ideas hit solo + boring-profit + MVP-speed; **MVP speed is the #1 failure mode** |
| [MicroConf 5-criteria](https://orbilontech.com/build-a-profitable-micro-saas-2026/) | Can build, will pay, demand exists, can reach customers, unit economics work |
| [Indie Hackers niche research](https://entrepreneurloop.com/bootstrapped-saas-niches-solo-founders/) | $29–$199/mo sweet spot; micro-segments within crowded markets |

### Montreal / Quebec market

| Source | Signal extracted |
|--------|------------------|
| [Statistique Québec — active businesses Dec 2025](https://statistique.quebec.ca/fr/document/nombre-entreprises-actives-quebec) | ~279K employer businesses in QC; **50.1% in Montreal CMA** → ~140K local B2B targets |
| [ISED Key Small Business Statistics 2025](https://ised-isde.canada.ca/site/sme-research-statistics/en/key-small-business-statistics/key-small-business-statistics-2025) | 228,622 small employer businesses in Quebec (1–99 employees) |
| [Bill 96 / OQLF francization](https://educaloi.qc.ca/en/capsules/francization-rules-for-employers/) | 25+ employee threshold (June 2025); compliance tooling opportunity |
| [Commercial rent crisis — Montreal Gazette](https://montrealgazette.com/news/verdun-station-w-closing-rent-hike/) | Independent merchants under lease pressure; SDC/borough programs emerging |
| [STR bylaw — Montreal](https://www.thecanadianpressnews.ca/quebec/despite-pushback-montreal-forges-ahead-with-strict-new-short-term-rental-rules/article_589ff38f-cd8c-5cbf-9fb8-1fffd4c76867.html) | 9-month STR ban on principal residences; permit/compliance tooling gap |
| [PME MTL financing](https://pmemtl.com/en/blog/financing-provided-pme-mtl) | Fonds PME MTL up to $300K; Fonds Jeunes Entreprises; Créavenir for under-35 |
| [Business tourism 2025](https://www.newswire.ca/news-releases/business-tourism-2025-a-remarkable-performance-for-montreal-and-quebec-884981338.html) | 477 events, $438M spinoffs — seasonal B2B hospitality demand |
| [Toronto→Montreal gap: bHyyve vs Aidiway](https://techbeat.ca/featured/bhyyve-sagar-malik-marketplace-toronto/) | Escrow/trust models in Toronto home services; Quebec-local alternatives still fragmented |

## Framework synthesis process

```
Investor frameworks          Micro-SaaS bootstrapping        Montreal signals
        │                              │                            │
        ▼                              ▼                            ▼
   Problem, Timing,              Solo fit, MVP speed,         Bill 96, STR rules,
   Competition, GTM              Cash velocity, Boring         rent crisis, tourism,
                                 profit niches                  140K local SMEs
        │                              │                            │
        └──────────────┬───────────────┴────────────────────────────┘
                       ▼
              Hard gates (disqualifiers)
                       ▼
         Montreal Opportunity Velocity Score (MOVS)
                       ▼
              output-schema.json + brief template
```

## What we deliberately excluded

- **Generic SWOT or Business Model Canvas** as primary scoring — useful for briefs, not comparable metrics
- **TAM/SAM/SOM** at venture scale — irrelevant for micro-SaaS targeting 100–500 Montreal customers
- **Team quality scoring** — solo founder context makes this N/A
- **Pre-built idea lists** — Phase 1 is framework only

## Confidence levels

| Claim | Confidence |
|-------|------------|
| MVP speed predicts solo-founder success | **High** — multiple independent micro-SaaS sources agree |
| Montreal CMA has ~50% of QC employer businesses | **High** — Statistique Québec Dec 2025 |
| Bill 96 creates compliance demand for 25+ employee firms | **High** — law in force June 2025 |
| Commercial lease regulation will pass soon | **Low (hypothesis)** — political pressure but no law as of May 2026 |
| Specific Reddit pain points | **Medium** — requires Phase 2 primary research |

## Reproducibility

Future agent runs should:

1. Re-read `PHILOSOPHY.md` and this folder before collecting ideas
2. Refresh `data-sources.md` URLs and grant deadlines (quarterly)
3. Check for new Montreal bylaws and provincial regulations
4. Use the same MOVS dimensions unless research surfaces a better fit
5. Log deviations in a dated addendum to this file
