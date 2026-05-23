# MVP Criteria — 1-Week Build Definition (2026)

**Framework version:** 1.0.0  
**Context:** Solo developer, AI-assisted ("vibe") coding, Montreal market launch

## What "1-week MVP" means here

A **1-week MVP** is the smallest product that lets a real Montreal customer complete the core job **and** pay (or commit to pay). It is not a prototype, not a pitch deck, and not a feature-complete v1.

Research consensus (MicroConf, Fluenta micro-SaaS playbook, 2026 AI-coding guides): the dominant solo-founder failure mode is **building too much**. If core value cannot ship in 7 days, the idea must be rescoped or disqualified (gate G2).

---

## Time budget

Assume **one full-time solo developer for 7 calendar days** (~40–50 focused hours).

| Day | Focus |
|-----|-------|
| 1 | Scope lock, schema, auth stub, landing page (FR + EN if B2B Quebec) |
| 2–3 | Core job-to-be-done flow (the one thing that must work) |
| 4 | Payments (Stripe) or invoicing; email notifications |
| 5 | Admin basics, error handling, deploy to production |
| 6 | Manual test with 1–3 friendly users; fix blockers |
| 7 | Buffer for integrations, polish, GTM prep (outreach list) |

**Rule:** If Day 7 is still feature work with zero users, scope was too large.

---

## Default technical stack (2026)

Use boring, well-documented tools AI assistants handle well:

| Layer | Recommended | Avoid for week 1 |
|-------|-------------|------------------|
| Frontend | Next.js, React + Vite, or Remix | React Native, native mobile |
| Backend | Supabase, Firebase, or Next.js API routes | Custom microservices |
| Auth | Clerk, Supabase Auth, NextAuth | SAML enterprise SSO |
| Payments | Stripe Checkout / Billing | Custom billing logic |
| Email | Resend, Postmark | Self-hosted mail |
| Hosting | Vercel, Railway, Fly.io | Kubernetes |
| PDF/Docs | React-PDF, Puppeteer | Complex document workflows |
| AI features | OpenAI / Anthropic API for **one** focused task | Multi-agent autonomous systems |

**Quebec note:** If customers are francophone, MVP must include **French UI** for core flows — not a post-launch i18n ticket.

---

## In scope for week 1

### Always allowed
- Single-user or single-tenant workflows
- CRUD on ≤5 entity types
- Form → notification → dashboard
- CSV import/export
- Stripe subscription or one-time payment
- Email alerts and basic admin panel
- Google Maps embed / simple geocoding
- Calendar scheduling (Cal.com embed or Calendly)
- PDF generation from templates
- Webhook to Zapier/Make

### Allowed with tight scope
- One third-party OAuth integration (Google, QuickBooks)
- Simple role-based access (admin vs user)
- Bilingual static content (FR/EN toggle)
- Scraping **public** data with clear ToS compliance `[verify legally]`

---

## Out of scope for week 1 (disqualifiers)

| Category | Examples | Why |
|----------|----------|-----|
| Multi-sided marketplaces | Match customers + vendors + payments + disputes | Cold-start + trust infrastructure |
| Native mobile apps | iOS/Android required for core value | App Store delay alone can exceed 7 days |
| Real-time hardware / IoT | Sensors, POS integrations | Logistics and reliability |
| Regulated advice | Legal, medical, accounting conclusions | Liability + certification |
| Heavy ML training | Custom models on proprietary datasets | Data + compute + iteration |
| Offline-first / sync conflict resolution | Field apps without connectivity | Engineering complexity |
| Enterprise procurement | SOC2, SSO, custom MSAs | Sales cycle ≠ 7-day build |
| Marketplace payments + escrow | Hold funds, dispute resolution | Regulatory + fraud (see bHyyve complexity) |
| Licensed professions | RBQ contractor dispatch without partner | License holder must deliver service |

**Rescue pattern:** If the *vision* requires an out-of-scope item, ship a **concierge MVP** — landing page + Stripe + you manually fulfill the job in Notion/Airtable.

---

## MVP scope template

Every collected idea must include this block in `data/ideas/{slug}.json`:

```json
{
  "mvpScope": {
    "coreJob": "One sentence — the job done in the product",
    "mustHave": ["max 5 features"],
    "wontHave": ["explicit cuts for v1"],
    "stack": ["primary tools"],
    "buildDays": 7,
    "conciergeFallback": "How to deliver value manually if build slips"
  }
}
```

---

## Vibe-coding guidelines (2026)

AI-assisted coding compresses build time **only when**:

1. **Scope is locked before prompting** — AI expands scope by default
2. **One repo, one deploy target** — no premature abstraction
3. **Copy existing patterns** — "Stripe subscription like X" beats novel architecture
4. **Human tests payment flow daily** — AI generates plausible but broken checkout
5. **French copy is human-reviewed** — AI French for OQLF-sensitive content is risky

**Realistic AI speedups:**
- Landing page + auth: hours (was days)
- CRUD admin: 1–2 days (was a week)
- Complex integrations: still 2–3 days minimum

**Not accelerated:**
- Customer discovery
- Legal compliance review
- Partner/SDC sales cycles

---

## Definition of "shippable"

Day 7 MVP is shippable when:

- [ ] Deployed to production URL (not localhost)
- [ ] A stranger can sign up without your help
- [ ] Core job completes end-to-end once
- [ ] Payment works (or explicit "invoice me" for B2B pilot)
- [ ] Privacy policy + terms stub exist (required for Stripe)
- [ ] Critical errors logged (Sentry or equivalent)
- [ ] French available if targeting Quebec SMBs `[recommended]`

---

## Revenue-ready vs demo-ready

| Demo-ready | Revenue-ready |
|------------|---------------|
| Works in happy path | Handles bad input gracefully |
| Free access | Stripe live mode OR signed pilot LOI |
| You demo it | Customer uses it alone |
| "Coming soon" payments | Price displayed in CAD |

**Project goal:** Revenue-ready within 30–60 days, not demo-ready forever.

---

## Examples by category (calibration only)

| Idea type | Week-1 MVP | NOT week-1 |
|-----------|------------|------------|
| Compliance checklist SaaS | FR/EN questionnaire → PDF report → Stripe | Automated OQLF filing integration |
| Restaurant staffing tool | SMS shift board + manager login | AI scheduling optimization |
| STR permit helper | Eligibility quiz → document checklist → email reminders | City registry API (if none public) |
| SDC rent benchmark | Form + manual comp table from public leases | Automated lease OCR pipeline |
| Booking for local service | Calendly + Stripe deposit + SMS confirm | Dispatch algorithm + vendor app |

---

## Escalation: when 7 days isn't enough

If honest estimate is 8–14 days:

1. **Cut scope** to concierge MVP (preferred)
2. **Split idea** into "week-1 wedge" + "month-2 platform"
3. **Disqualify** if wedge isn't valuable alone

Do not inflate `sevenDayShip` scores — the ranking depends on honest build estimates.

---

## Checklist for Phase 2 collectors

```
[ ] coreJob is ONE job, not three
[ ] mustHave ≤ 5 items
[ ] wontHave explicitly lists tempting features
[ ] No native mobile requirement
[ ] No marketplace cold-start
[ ] Payment path identified
[ ] French UI planned if B2B Quebec
[ ] conciergeFallback documented
```
