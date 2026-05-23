#!/usr/bin/env python3
import json
from pathlib import Path

COLLECTED_AT = "2026-05-23T18:00:00Z"
FW = "1.0.0"
OUT = Path(__file__).resolve().parent.parent / "data" / "ideas"

def src(url, title, grade, signal, quote=None):
    s = {"url": url, "title": title, "accessedAt": COLLECTED_AT, "grade": grade, "signalType": signal}
    if quote:
        s["quote"] = quote
    return s

def gates(g1, g2, g3, g4, g5):
    return {
        "g1_montrealAnchor": {"passed": True, "notes": g1},
        "g2_sevenDayShip": {"passed": True, "notes": g2},
        "g3_cashPath": {"passed": True, "notes": g3},
        "g4_soloOps": {"passed": True, "notes": g4},
        "g5_legal": {"passed": True, "notes": g5},
        "allPassed": True,
    }

IDEAS = [
    {
        "id": "sdc-wellington-lease-prep",
        "title": "SDC Wellington Lease Renewal Prep",
        "tagline": "Rent comps and negotiation prep for Verdun merchants facing commercial lease renewal.",
        "category": "property-real-estate",
        "jtbd": {
            "situation": "When a commercial lease renewal arrives with a proposed 60% rent hike",
            "persona": "Independent café owner on Wellington Street, Verdun",
            "motivation": "benchmark rent against corridor peers and prepare negotiation talking points",
            "outcome": "negotiate a survivable lease or decide to relocate before signing",
            "statement": "When facing a Wellington St lease renewal, a Verdun café owner wants corridor rent benchmarks so they can negotiate without a commercial lawyer.",
        },
        "montrealAngle": "Station W closure (May 2026) renewed calls for commercial lease reform; SDC Wellington cited the case. Quebec has no commercial rent tribunal.",
        "whyNow": "High-profile Verdun closure May 2026; Québec Solidaire pushing commercial lease register.",
        "persona": {"name": "SDC Wellington independent merchant", "borough": "Verdun", "language": "bilingual", "estimatedCount": 150, "countSource": "[hypothesis] SDC Wellington merchant count"},
        "competitors": [{"name": "Commercial lawyer", "montrealPresence": "strong", "notes": "$300-500/hr; no self-serve Verdun benchmark tool."}],
        "mvpScope": {
            "coreJob": "Collect anonymous rent comps and generate renewal negotiation brief",
            "mustHave": ["Rent comp submission form", "Corridor median dashboard", "Renewal reminders", "PDF brief export", "French-primary UI"],
            "wontHave": ["Legal representation", "Lease OCR", "Provincial register API"],
            "stack": ["Next.js", "Supabase", "React-PDF"],
            "buildDays": 7,
            "conciergeFallback": "Manual comp research + PDF for $199",
        },
        "businessModel": {"pricingCAD": "$99-199 per brief", "firstCustomer": "SDC Wellington merchant post-Station W news", "revenue60Day": {"low": 1000, "high": 5000}},
        "gtm": {"firstTenCustomers": ["SDC Wellington outreach", "Verdun merchant association", "Local press engagement"], "channels": ["SDC", "Direct outreach"]},
        "assumptions": [{"statement": "Merchants share anonymous rent data", "confidence": "hypothesis", "testMethod": "SDC meeting + 10 interviews"}],
        "sources": [
            src("https://montrealgazette.com/news/verdun-station-w-closing-rent-hike/", "Gazette Station W closing", "B", "pain-verified", "60% rent hike forced closure."),
            src("https://montreal.citynews.ca/2026/05/09/verdun-cafe-closing-commercial-rent/", "CityNews Verdun rent", "B", "pain-verified"),
            src("https://www.cbc.ca/news/canada/montreal/ville-emard-commercial-rent-increases-1.7490193", "CBC Ville-Émard rent", "B", "pain-verified"),
        ],
        "gates": gates("Wellington corridor hyper-local pain.", "Form + dashboard + PDF = 7 days.", "10 briefs at $99-199.", "Concierge early, automate later.", "Data only, not legal advice."),
        "status": "collected",
    },
    {
        "id": "palais-congress-restaurant-pulse",
        "title": "Palais des Congrès Restaurant Pulse",
        "tagline": "Convention-week demand forecasts for downtown Montreal restaurants.",
        "category": "hospitality-tourism",
        "jtbd": {
            "situation": "When a 6000-delegate conference books the Palais des congrès",
            "persona": "Operations manager at a René-Lévesque restaurant",
            "motivation": "staff and inventory for delegate surges",
            "outcome": "capture convention spillover revenue without over-staffing",
            "statement": "When a major Palais convention arrives, a downtown restaurant manager wants delegate forecasts so they can staff correctly.",
        },
        "montrealAngle": "Palais hosted 281 events in 2025 ($277M spinoffs); 17K+ summer delegates. Downtown F&B depends on convention calendar.",
        "whyNow": "2026 events include Salon international alimentation (20K), ASHG (6K), Goldschmidt (4.5K).",
        "persona": {"name": "Downtown restaurant ops manager", "borough": "Ville-Marie", "language": "bilingual", "estimatedCount": 400, "countSource": "[hypothesis] restaurants within 1km of Palais"},
        "competitors": [{"name": "Tourisme Montréal calendar", "montrealPresence": "strong", "notes": "Macro only; no staffing recommendations."}],
        "mvpScope": {
            "coreJob": "Weekly convention impact email digest with staffing tips",
            "mustHave": ["Public event calendar feed", "Delegate estimates", "FR/EN email digest", "Stripe $29/mo", "Impact score"],
            "wontHave": ["POS integration", "Hotel PMS", "Real-time reservations"],
            "stack": ["Next.js", "Supabase", "Resend", "Stripe"],
            "buildDays": 7,
            "conciergeFallback": "Manual weekly email to 5 pilots",
        },
        "businessModel": {"pricingCAD": "$29-49/mo per location", "firstCustomer": "Palais-adjacent restaurant via ARQ", "revenue60Day": {"low": 500, "high": 3000}},
        "gtm": {"firstTenCustomers": ["ARQ downtown members", "Hotel F&B referrals", "May-Sept convention outreach"], "channels": ["ARQ", "Email"]},
        "assumptions": [{"statement": "Restaurants pay $29/mo for convention intel", "confidence": "hypothesis", "testMethod": "4-week free pilot"}],
        "sources": [
            src("https://www.newswire.ca/news-releases/business-tourism-2025-a-remarkable-performance-for-montreal-and-quebec-884981338.html", "Newswire business tourism 2025", "B", "seasonal"),
            src("https://www.newswire.ca/news-releases/more-than-17-000-international-business-tourists-expected-at-the-palais-des-congres-de-montreal-this-summer-803199751.html", "Newswire 17K summer delegates", "B", "seasonal"),
            src("https://montreal.citynews.ca/2025/10/05/quebec-restaurants-immigration-worker-cap/", "CityNews restaurant staffing", "B", "pain-verified"),
        ],
        "gates": gates("Palais uniquely Montreal convention hub.", "Calendar + email = 7 days.", "10 x $29/mo by day 60.", "Automated digest.", "Public data only."),
        "status": "collected",
    },
    {
        "id": "mtl-tipping-compliance-scanner",
        "title": "MTL Tipping Compliance Scanner",
        "tagline": "Audit POS tipping for Quebec pre-tax rule — built for Montreal restaurants.",
        "category": "compliance-regtech",
        "jtbd": {
            "situation": "When OPC finds 179 of 185 inspected restaurants non-compliant",
            "persona": "Saint-Henri bar-restaurant owner with legacy POS",
            "motivation": "verify tipping prompts use pre-tax amounts",
            "outcome": "pass inspection before OPC fines",
            "statement": "When OPC tipping inspections intensify, a Saint-Henri owner wants to audit POS tipping so they comply before being fined.",
        },
        "montrealAngle": "531 OPC complaints since May 2025; Le Saint-Bock owner publicly compliant; ARQ notes POS vendor delays.",
        "whyNow": "Rule effective May 7 2025; 97% non-compliance among inspected businesses through Feb 2026.",
        "persona": {"name": "Independent bar-restaurant owner", "borough": "Le Sud-Ouest", "language": "fr", "estimatedCount": 3500, "countSource": "[hypothesis] Montreal metro restaurant count"},
        "competitors": [{"name": "POS vendor updates", "montrealPresence": "strong", "notes": "Free but slow; some need new terminals."}],
        "mvpScope": {
            "coreJob": "Self-audit checklist + receipt photo review for pre-tax compliance",
            "mustHave": ["POS vendor fix guides", "Receipt photo upload", "Compliance PDF", "Stripe $79", "French UI"],
            "wontHave": ["POS integration", "Terminal sales"],
            "stack": ["Next.js", "Supabase Storage", "Stripe"],
            "buildDays": 5,
            "conciergeFallback": "Manual receipt review via email",
        },
        "businessModel": {"pricingCAD": "$79/audit; $199/yr monitoring", "firstCustomer": "ARQ member post-inspection", "revenue60Day": {"low": 2000, "high": 8000}},
        "gtm": {"firstTenCustomers": ["ARQ newsletter", "POS resellers", "Restaurant FB groups"], "channels": ["ARQ", "POS partners"]},
        "assumptions": [{"statement": "Owners pay $79 vs waiting for OPC", "confidence": "pain-verified", "testMethod": "Pre-sell to 5 restaurants"}],
        "sources": [
            src("https://montreal.citynews.ca/2026/05/01/montrealers-businesses-follow-new-tipping-rules/", "CityNews 531 OPC complaints", "B", "regulatory"),
            src("https://montreal.citynews.ca/2025/05/06/new-quebec-tipping-rules-start-may-7/", "CityNews tipping rules May 7", "B", "regulatory"),
        ],
        "gates": gates("Montreal restaurant density + OPC volume.", "Checklist + upload = 5 days.", "25 x $79 in 60 days.", "10 min manual review/audit.", "Guidance not legal advice."),
        "status": "collected",
    },
    {
        "id": "resto-shift-sms-board",
        "title": "Resto Shift SMS Board",
        "tagline": "Last-minute shift coverage via SMS for Montreal restaurants hit by labour shortages.",
        "category": "b2b-micro-saas",
        "jtbd": {
            "situation": "When a cook calls in sick on a Grand Prix weekend shift",
            "persona": "Manager at Old Port restaurant relying on TFW staff",
            "motivation": "blast available shifts to trusted part-time pool via SMS",
            "outcome": "stay open without cutting hours Fri-Sun",
            "statement": "When staff call in sick, an Old Port manager wants SMS shift blasts so they keep weekend service open.",
        },
        "montrealAngle": "ARQ warns restaurants may open Fri-Sun only due to 10% TFW cap; Kwizinn Old Port uses 20% TFW for stability.",
        "whyNow": "Federal TFW cap + Quebec immigration cuts hitting Montreal hospitality Oct 2025.",
        "persona": {"name": "Restaurant manager, 20-60 seats, TFW-dependent", "borough": "Ville-Marie", "language": "bilingual", "estimatedCount": 800, "countSource": "[hypothesis] Montreal full-service restaurants"},
        "competitors": [{"name": "WhatsApp groups", "montrealPresence": "strong", "notes": "Free but chaotic; no audit trail or shift tracking."}, {"name": "7shifts", "url": "https://www.7shifts.com/", "montrealPresence": "weak", "notes": "Full scheduling suite; overkill for 7-day MVP wedge."}],
        "mvpScope": {
            "coreJob": "Post open shift, notify staff pool via SMS, first-accept wins",
            "mustHave": ["Manager login", "Staff phone list", "SMS blast via Twilio", "Shift accept link", "FR/EN UI"],
            "wontHave": ["Full scheduling", "Payroll", "TFW compliance"],
            "stack": ["Next.js", "Supabase", "Twilio", "Stripe"],
            "buildDays": 7,
            "conciergeFallback": "Manager texts manually; product tracks acceptances in Airtable",
        },
        "businessModel": {"pricingCAD": "$49/mo per location", "firstCustomer": "Kwizinn or similar Old Port resto", "revenue60Day": {"low": 500, "high": 2500}},
        "gtm": {"firstTenCustomers": ["ARQ member outreach", "Old Port restaurant walk-ins", "PME MTL hospitality advisors"], "channels": ["ARQ", "Direct sales"]},
        "assumptions": [{"statement": "Managers pay $49/mo vs WhatsApp chaos", "confidence": "hypothesis", "testMethod": "3-restaurant pilot during festival season"}],
        "sources": [
            src("https://montreal.citynews.ca/2025/10/05/quebec-restaurants-immigration-worker-cap/", "CityNews TFW cap restaurants", "B", "pain-verified"),
            src("https://montreal.citynews.ca/2025/10/02/temporary-workers-quebec-ottawa/", "CityNews ARQ brief on TFW", "B", "pain-verified"),
        ],
        "gates": gates("Montreal hospitality labour crisis acute vs other cities.", "SMS + simple UI = 7 days.", "5-10 locations at $49/mo.", "Low support; SMS automated.", "No employment agency licensing needed."),
        "status": "collected",
    },
    {
        "id": "rbq-contractor-check",
        "title": "RBQ Contractor Check + Booking",
        "tagline": "Verify RBQ licence then book licensed Montreal renovators for spring season.",
        "category": "local-services",
        "jtbd": {
            "situation": "When hiring a contractor for spring renovation after residential strike delays",
            "persona": "Rosemont homeowner burned by unlicensed Kijiji contractor",
            "motivation": "verify RBQ licence and book vetted contractor with deposit",
            "outcome": "complete renovation with financial guarantee protection",
            "statement": "When hiring a spring renovator, a Rosemont homeowner wants RBQ verification and booking so they avoid unlicensed contractors.",
        },
        "montrealAngle": "RBQ registry is public but UX-poor; CCQ forecasts 16K worker shortage 2025-29; Montreal key region. Residential strike May 2025 increased homeowner anxiety.",
        "whyNow": "Spring construction season + RBQ processing delays (regular apps from Feb 2026 per RBQ site).",
        "persona": {"name": "Montreal Island homeowner, $5-30K renovation", "borough": "Rosemont-La Petite-Patrie", "language": "fr", "estimatedCount": 50000, "countSource": "[hypothesis] Montreal Island homeowners doing annual renovations"},
        "competitors": [{"name": "RBQ licence registry", "url": "https://www.rbq.gouv.qc.ca/vous-etes/citoyen/verifier-la-licence-dun-entrepreneur/", "montrealPresence": "strong", "notes": "Lookup only; no booking."}, {"name": "Aidiway", "url": "https://www.aidiway.com/", "montrealPresence": "weak", "notes": "Broad home services; RBQ verification not core wedge."}],
        "mvpScope": {
            "coreJob": "Lookup RBQ licence number and request quote from pre-vetted contractors",
            "mustHave": ["RBQ number lookup embed", "Quote request form", "Contractor onboarding (5 pilots)", "Stripe deposit hold", "FR UI"],
            "wontHave": ["Dispatch algorithm", "Contractor mobile app", "Full marketplace"],
            "stack": ["Next.js", "Supabase", "Stripe", "Cal.com"],
            "buildDays": 7,
            "conciergeFallback": "Manual RBQ check + email intro to contractor",
        },
        "businessModel": {"pricingCAD": "$29 lead fee to contractor or 5% deposit", "firstCustomer": "Renovco-type contractor partner [hypothesis]", "revenue60Day": {"low": 1500, "high": 6000}},
        "gtm": {"firstTenCustomers": ["Rosemont Facebook groups", "Salon National Habitation follow-up", "RBQ-licensed contractor partnerships"], "channels": ["Facebook", "Contractor partners"]},
        "assumptions": [{"statement": "Homeowners pay/trust RBQ-verified booking wedge", "confidence": "hypothesis", "testMethod": "10 homeowner interviews + 3 contractor LOIs"}],
        "sources": [
            src("https://www.rbq.gouv.qc.ca/vous-etes/citoyen/verifier-la-licence-dun-entrepreneur/", "RBQ licence verification", "A", "regulatory"),
            src("https://montreal.citynews.ca/2025/06/25/ccq-quebec-construction-workers/", "CCQ 16000 workers needed", "B", "pain-verified"),
            src("https://www.cbc.ca/news/canada/montreal/construction-strike-residential-1.7545644", "CBC residential construction strike", "B", "seasonal"),
        ],
        "gates": gates("RBQ is Quebec-wide but Montreal renovation volume highest.", "Lookup + form + 5 contractors = 7 days.", "20 leads at $29-75 fee.", "Concierge matching early.", "Contractors must hold RBQ licence; platform doesn't perform work."),
        "status": "collected",
    },
]

for idea in IDEAS:
    idea["frameworkVersion"] = FW
    idea["collectedAt"] = COLLECTED_AT
    path = OUT / f"{idea['id']}.json"
    path.write_text(json.dumps(idea, indent=2, ensure_ascii=False) + "\n")
    print(path.name)
