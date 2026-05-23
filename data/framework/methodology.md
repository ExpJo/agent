# Methodology — Montreal Idea Discovery & Validation

**Framework version:** 1.0.0  
**Audience:** Agents and humans running Phase 2 (collect) and Phase 3 (rank)

## Purpose

This playbook turns raw Montreal market signals into **scored, ranked startup briefs** a solo developer can act on. It combines:

- **Jobs-to-be-Done (JTBD)** for problem framing — what "job" is the customer hiring a product to do?
- **Lean validation** for falsifiable hypotheses — test demand before building
- **Micro-SaaS bootstrapping criteria** for solo-founder feasibility
- **Montreal-specific anchoring** so ideas aren't generic

We explicitly do **not** use a predetermined idea list or a copy-paste VC rubric. Every step below is justified in [research-log.md](./research-log.md).

---

## Phase overview

| Phase | Input | Output | This doc section |
|-------|-------|--------|------------------|
| 1 — Framework | Research | `data/framework/*` | *(complete)* |
| 2 — Collect | Framework + sources | `data/ideas/*` | § Discovery, § Signal taxonomy |
| 3 — Rank | Collected ideas | `data/ranked/index.json`, `briefs/` | § Scoring handoff |
| 4 — Display | Ranked data | UI | *(see ui/)* |

---

## Step 1: Define the search perimeter

Before scanning sources, fix these boundaries (from `PHILOSOPHY.md`):

| Constraint | Implication for search |
|------------|------------------------|
| Montreal, QC | Buyer, regulation, or distribution must tie to MTL metro (incl. Laval, RMR) |
| ~7-day MVP | Skip ideas needing mobile apps, hardware, multi-sided marketplaces, or licensed professions |
| Cash in 30–60 days | Prefer B2B tools with clear ROI, local services with immediate booking, or SaaS with paid beta |
| Solo developer | No ideas requiring sales team, 24/7 ops, or deep domain certifications |

**Idea categories to explore** (not exhaustive):

- B2B micro-SaaS for Montreal SMEs (compliance, ops, hiring, francization)
- Local service enablement (booking, dispatch, trust/escrow — gaps vs Toronto models)
- Seasonal/event B2B (festivals, Palais des congrès, Grand Prix adjacent)
- Borough/SDC merchant tools (rent negotiation, vacancy, foot traffic)
- Quebec regulatory tailwinds (Bill 96, STR permits, tipping rules, environmental reporting)

---

## Step 2: Discovery — where to look

Use the curated list in [data-sources.md](./data-sources.md). Discovery runs in **three passes**:

### Pass A — Pain signals (problems people already express)

Scan for recurring complaints, workarounds, and "does anyone know…" posts.

| Channel type | What to extract | Example signal |
|--------------|-----------------|----------------|
| Reddit (`r/montreal`, `r/Quebec`, `r/entrepreneur`) | Frustration threads, business questions | STR permit confusion |
| Facebook groups (Montreal business, expat, quartier) | Service recommendations, vendor gaps | `[hypothesis]` — verify in Phase 2 |
| Google Reviews / Yelp (MTL businesses) | Operational pain in reviews | Booking, staffing, bilingual service |
| Local news (Gazette, CBC Montreal, MTL Blog, CityNews) | Structural changes affecting SMBs | Commercial rent, bylaw changes |
| Job boards (Indeed, LinkedIn MTL) | Roles companies hire for = pain | "Bill 96 compliance coordinator" postings |

### Pass B — Opportunity signals (money moving, rules changing)

| Channel type | What to extract |
|--------------|-----------------|
| Government (`quebec.ca`, `montreal.ca`, OQLF, PME MTL) | New programs, deadlines, compliance rules |
| Ecosystem (FounderFuel, MTL NewTech, Startupfest, YES Montréal) | Demo day themes, repeated founder complaints |
| Competitor maps | Toronto/NYC/Paris products **not** in Montreal |
| Grant calendars | Who gets funded = validated problem spaces |

### Pass C — Feasibility signals (can one person ship this?)

| Check | Source |
|-------|--------|
| Existing API/tooling | Stripe, Resend, Supabase, Twilio, Google Maps, QBO |
| Comparable MVPs | Indie Hackers, MicroConf talks, "built in a weekend" posts |
| Regulatory barrier | RBQ licenses, OQLF certification needs, professional orders |

**Output of discovery:** Raw notes with URL, date, quote, and signal type (pain / opportunity / feasibility).

---

## Step 3: Signal taxonomy

Tag every signal when logging:

| Tag | Definition | Example |
|-----|------------|---------|
| `pain-verified` | Multiple independent sources, or paid workaround exists | Merchants closing due to rent |
| `pain-anecdotal` | Single thread or interview | One Reddit complaint |
| `regulatory` | Law, bylaw, or program creates demand | Bill 96 francization (June 2025) |
| `seasonal` | Demand varies by MTL calendar | Grand Prix, Igloofest, construction season |
| `import-gap` | Proven elsewhere, weak MTL presence | Escrow marketplace (Toronto: bHyyve) |
| `grant-tailwind` | Customer budgets boosted by subsidies | PME MTL digital transformation |
| `hypothesis` | Plausible but unverified | "Restaurants need X" without sources |

---

## Step 4: Idea crystallization (JTBD)

For each promising signal cluster, write a **job statement**:

> When **[situation]**, Montreal **[persona]** wants to **[motivation]**, so they can **[outcome]**.

Example (illustrative only — not a collected idea):

> When **renewing a commercial lease**, a **Plateau café owner** wants to **benchmark rent against comparable SDC data**, so they can **negotiate without hiring a lawyer**.

Also document:

- **Persona** — be specific (borough, industry, size, language)
- **Current workaround** — spreadsheets, WhatsApp, accountant, nothing
- **Why Montreal** — not replicable in Calgary without change
- **Why now** — regulation, season, competitor entry, economic shift

Write to `data/ideas/{slug}.json` using schema in [output-schema.json](./output-schema.json).

---

## Step 5: Validation before ranking

Even during collection, apply **light validation** to avoid idea pollution:

### 5a. Leap-of-faith assumptions

List 3–5 assumptions that would kill the idea if false. Rank by **falsifiability speed**:

1. Do customers acknowledge the problem? (1 conversation)
2. Will they pay $X? (pre-sale or LOI)
3. Can I reach 10 customers in MTL in 2 weeks? (channel test)
4. Can I build core value in 7 days? (scope check)
5. Is a local incumbent blocking? (competitor scan)

### 5b. Minimum evidence bar (Phase 2)

An idea enters the pool if it has:

- [ ] At least **2 pain signals** OR **1 regulatory/seasonal catalyst** with source URLs
- [ ] A named Montreal persona (not "small businesses")
- [ ] A draft MVP scope that passes [mvp-criteria.md](./mvp-criteria.md)
- [ ] At least **1 competitor or workaround** documented (proves market exists)

Ideas below this bar stay in `data/ideas/_drafts/` or are discarded.

### 5c. Validation experiments (optional in Phase 2, recommended before building)

| Experiment | Time | Pass threshold |
|------------|------|----------------|
| Fake door landing page (FR + EN) | 2 days | 20+ qualified emails from MTL |
| 5 customer interviews | 3 days | 3/5 confirm urgent pain |
| Pre-sale / paid pilot | 3 days | 1+ payment |
| Concierge MVP | 7 days | Customer completes job manually |

Use `hypothesis` status until experiments pass.

---

## Step 6: Hard gates (pre-score)

Before MOVS scoring in Phase 3, **disqualify** ideas that fail any gate:

| Gate | Question | Fail action |
|------|----------|-------------|
| G1 — Montreal | Can you explain why this isn't equally strong in Toronto? | Reject or rework |
| G2 — Build | Can a solo dev ship usable MVP in ≤7 days? (see mvp-criteria) | Reject |
| G3 — Revenue | Is there a credible first-dollar path within 60 days? | Reject |
| G4 — Solo ops | Can one person support 20 customers without burning out? | Reject or scope down |
| G5 — Legal | Does it require a license you can't get in 60 days? | Reject |

Document gate results in each idea's `gates` object.

---

## Step 7: Scoring handoff (Phase 3)

Apply **Montreal Opportunity Velocity Score (MOVS)** from [evaluation-system.md](./evaluation-system.md).

For each surviving idea:

1. Score six dimensions (0–10) with evidence citations
2. Compute weighted total (0–10 scale)
3. Rank by score; break ties with **Cash Path** then **7-Day Ship**
4. Write brief to `data/ranked/briefs/{slug}.md`
5. Update `data/ranked/index.json`

---

## Step 8: Brief structure (for UI)

Each ranked brief is markdown with these sections (UI renders all):

```markdown
# {Title}

## Summary
One paragraph: what it is, for whom, why now in Montreal.

## Problem evidence
- Bullet points with sources
- Tag unverified claims: `[hypothesis]`

## Montreal angle
Why this city, this borough, this regulation.

## Product (MVP scope)
What ships in 7 days vs later.

## Market
- Persona count estimate (with source)
- Competitors / workarounds

## Business model
Pricing, first customer, 30/60/90-day revenue path (CAD).

## Go-to-market
First 10 customers — specific channels (SDC, Meetup, LinkedIn, etc.).

## Build plan
Day-by-day 7-day outline.

## Risks & unknowns
Top 3 kill risks.

## Sources
URLs and dates.
```

---

## Playbook checklist (copy for each agent run)

```
[ ] Read PHILOSOPHY.md + data/framework/
[ ] Refresh data-sources.md (check grant deadlines)
[ ] Pass A/B/C discovery (log signals with taxonomy tags)
[ ] Crystallize ideas (JTBD + persona + why Montreal)
[ ] Light validation (evidence bar)
[ ] Apply hard gates G1–G5
[ ] Score with MOVS
[ ] Write briefs + index.json
[ ] Mark hypothesis vs verified in index status field
```

---

## Anti-patterns (do not do this)

1. **Idea brainstorming without sources** — violates "research before deciding"
2. **Copying "best startup ideas 2026" lists** — not Montreal-specific
3. **Scoring ideas that fail gates** — wastes rank ordering
4. **Optimizing for TAM** — wrong frame for micro-SaaS
5. **English-only research** — Quebec pain often appears in French media first
6. **Ignoring seasonality** — launching STR tooling in October vs May differs

---

## Language note

Montreal ideas often require **bilingual product and GTM**. During discovery:

- Search French and English queries
- Note whether persona is francophone, anglophone, or bilingual
- Bill 96 compliance may require French-primary UX for Quebec customers

See [montreal-context.md](./montreal-context.md) for cultural and seasonal detail.
