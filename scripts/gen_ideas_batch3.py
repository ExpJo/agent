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
        "id": "condo-str-violation-log",
        "title": "Condo STR Violation Log",
        "tagline": "Track and document illegal STR listings for Montreal condo syndicates.",
        "category": "property-real-estate",
        "jtbd": {
            "situation": "When tenants rent Roccabella units on Airbnb against co-ownership rules",
            "persona": "Building operations director at downtown Montreal condo tower",
            "motivation": "log violations and build evidence packages for syndicate legal action",
            "outcome": "stop illegal STR and recover damages like the $53K Roccabella judgment",
            "statement": "When tenants violate STR bans, a downtown condo director wants violation logs so they can pursue syndicate legal remedies.",
        },
        "montrealAngle": "Roccabella syndicate won $53K+ from Airbnb tenants; Montreal STR bylaw + syndicate rules stack. Downtown towers (Ville-Marie, Plateau) highest STR pressure.",
        "whyNow": "Summer STR window increases violations; city expanded inspectors; syndicates lack tooling.",
        "persona": {"name": "Condo building operations manager, 100+ units", "borough": "Ville-Marie", "language": "bilingual", "estimatedCount": 200, "countSource": "[hypothesis] large Montreal condos with STR bans"},
        "competitors": [{"name": "GardaWorld private investigators", "montrealPresence": "strong", "notes": "Roccabella paid for undercover ops; $$$ not scalable."}, {"name": "Spreadsheet + email", "montrealPresence": "strong", "notes": "Current workaround."}],
        "mvpScope": {
            "coreJob": "Log STR sightings, upload evidence, generate syndicate board report",
            "mustHave": ["Violation entry form", "Photo/link attachment", "Timeline export PDF", "Resident anonymous tip form", "FR/EN"],
            "wontHave": ["Undercover booking", "Legal filing automation", "Airbnb API"],
            "stack": ["Next.js", "Supabase", "React-PDF"],
            "buildDays": 6,
            "conciergeFallback": "Notion template + manual PDF for syndicate",
        },
        "businessModel": {"pricingCAD": "$99/mo per building or $999/yr", "firstCustomer": "Condo admin firm managing 3+ towers [hypothesis]", "revenue60Day": {"low": 500, "high": 3000}},
        "gtm": {"firstTenCustomers": ["Condo Stratégis blog readers", "MC Finance-type admin firms", "Roccabella-case press outreach"], "channels": ["Condo admin firms", "Direct outreach"]},
        "assumptions": [{"statement": "Syndicates pay $99/mo vs hiring investigators", "confidence": "hypothesis", "testMethod": "3 syndicate manager interviews"}],
        "sources": [
            src("https://www.montrealgazette.com/news/article227395.html", "Gazette Roccabella Airbnb judgment", "B", "pain-verified"),
            src("https://condostrategis.ca/en/blogue/airbnb-condominium-montreal-short-term-rental-regulations-quebec-condominium-syndicate-rights-airbnb-impact-on-neighborhood-condominium-management-and-rental/", "Condo Stratégis STR regulations", "B", "regulatory"),
            src("https://thelogic.co/news/montreal-airbnb-crackdown-short-term-rentals/", "The Logic STR crackdown", "B", "regulatory"),
        ],
        "gates": gates("Downtown Montreal condo STR conflict unique density.", "CRUD + PDF = 6 days.", "3-5 buildings at $99/mo.", "Syndicate managers self-serve.", "Evidence tool not legal services."),
        "status": "collected",
    },
    {
        "id": "terrace-permit-renewal-tracker",
        "title": "Terrace Permit Renewal Tracker",
        "tagline": "Borough-specific café-terrasse permit deadlines for Montreal restaurants.",
        "category": "compliance-regtech",
        "jtbd": {
            "situation": "When April 1 terrace renewal deadline approaches across different borough rules",
            "persona": "Plateau restaurant owner operating public-property terrace",
            "motivation": "track borough-specific renewal dates and document checklist",
            "outcome": "open terrace on time for May-Oct revenue peak",
            "statement": "When terrace season starts, a Plateau owner wants borough renewal reminders so they open on time.",
        },
        "montrealAngle": "Montreal has 19 boroughs with different terrace periods (Apr 15-Nov 15 vs May 1-Oct 15); some ban public terraces entirely. Ville-Marie fees $545 analysis + $63 issuance.",
        "whyNow": "Annual renewal cycle; terrace revenue critical post-staffing crisis; April-May prep window.",
        "persona": {"name": "Restaurant with public terrace, 30-80 seats", "borough": "Plateau-Mont-Royal", "language": "fr", "estimatedCount": 600, "countSource": "[hypothesis] Montreal restaurants with seasonal terraces"},
        "competitors": [{"name": "montreal.ca terrace pages", "url": "https://montreal.ca/en/how-to/build-commercial-terrace-public-property", "montrealPresence": "strong", "notes": "Static info; no reminders or borough quiz."}],
        "mvpScope": {
            "coreJob": "Borough quiz + renewal checklist + email reminders",
            "mustHave": ["Borough rule lookup", "Document checklist", "Renewal date reminders", "Stripe $39/season", "French UI"],
            "wontHave": ["Permit submission API", "Insurance broker integration"],
            "stack": ["Next.js", "Supabase", "Resend", "Stripe"],
            "buildDays": 5,
            "conciergeFallback": "Spreadsheet reminder service for $39",
        },
        "businessModel": {"pricingCAD": "$39-59/season per terrace", "firstCustomer": "Mile End terrasse owner via ARQ", "revenue60Day": {"low": 800, "high": 4000}},
        "gtm": {"firstTenCustomers": ["ARQ members pre-April", "SDC Plateau merchant email", "Restaurant supplier co-marketing"], "channels": ["ARQ", "SDC"]},
        "assumptions": [{"statement": "Owners pay $39 for deadline tracking", "confidence": "hypothesis", "testMethod": "Pre-sell in March"}],
        "sources": [
            src("https://montreal.ca/en/how-to/build-commercial-terrace-public-property", "Ville de Montréal terrace rules", "A", "regulatory"),
            src("https://montreal.ca/en/how-to/renew-permit-to-build-commercial-terrace-public-property", "Terrace renewal by borough", "A", "regulatory"),
        ],
        "gates": gates("19-borough complexity is Montreal-specific.", "Static borough data + reminders = 5 days.", "20-50 subscriptions at $39.", "Automated emails.", "Info service with disclaimer."),
        "status": "collected",
    },
    {
        "id": "snow-damage-claim-assistant",
        "title": "Snow Damage Claim Assistant",
        "tagline": "15-day claim tracker for Montreal property managers after snow removal damage.",
        "category": "property-real-estate",
        "jtbd": {
            "situation": "When city snow removal damages condo parking lot curbs and landscaping",
            "persona": "Property manager overseeing 12-building CDN portfolio",
            "motivation": "document damage and file claims within 15-day city deadline",
            "outcome": "recover repair costs from responsible snow contractor",
            "statement": "When snow ops damage property, a CDN property manager wants claim documentation so they meet the 15-day deadline.",
        },
        "montrealAngle": "Montreal 311 received 5000+ snow complaints Feb 2025; claims forwarded to contractors. Info-Neige GPS failures added tow risk.",
        "whyNow": "Recurring winter pain; repair season starts after May 15 for lawn damage per city rules.",
        "persona": {"name": "Residential property manager, 5-20 buildings", "borough": "CDN-NDG", "language": "bilingual", "estimatedCount": 300, "countSource": "[hypothesis] Montreal property management firms"},
        "competitors": [{"name": "montreal.ca claim forms", "url": "https://montreal.ca/en/topics/claims", "montrealPresence": "strong", "notes": "Manual PDF process; no portfolio tracking."}],
        "mvpScope": {
            "coreJob": "Photo-document damage, track 15-day deadline, generate claim package",
            "mustHave": ["Damage photo upload", "15-day countdown per incident", "Claim form pre-fill", "Portfolio dashboard", "FR/EN"],
            "wontHave": ["311 API integration", "Legal representation"],
            "stack": ["Next.js", "Supabase Storage", "React-PDF"],
            "buildDays": 6,
            "conciergeFallback": "Manual claim prep for $149/incident",
        },
        "businessModel": {"pricingCAD": "$49/mo portfolio or $149/incident", "firstCustomer": "CDN property manager post-winter 2025", "revenue60Day": {"low": 1000, "high": 4500}},
        "gtm": {"firstTenCustomers": ["APCIQ member outreach [hypothesis]", "Property mgmt LinkedIn", "Nov-Mar seasonal marketing"], "channels": ["Direct sales", "LinkedIn"]},
        "assumptions": [{"statement": "Managers pay to avoid missed 15-day deadline", "confidence": "pain-verified", "testMethod": "Interview 5 property managers after winter"}],
        "sources": [
            src("https://montrealgazette.com/news/montreals-help-line-flooded-with-5000-complaints-over-snow-clearing", "Gazette 5000 snow complaints", "B", "pain-verified"),
            src("https://montreal.ca/en/topics/claims", "Ville de Montréal claims", "A", "regulatory"),
            src("https://montreal.ca/en/how-to/report-property-damage-caused-snow-removal-vehicle", "Snow damage reporting", "A", "regulatory"),
        ],
        "gates": gates("Montreal snow ops scale and 311 volume unique.", "Upload + countdown + PDF = 6 days.", "10 incidents or 5 subscriptions.", "Self-serve with seasonal spike.", "Claim prep not legal advice."),
        "status": "collected",
    },
    {
        "id": "mtl-festival-vendor-deadlines",
        "title": "MTL Festival Vendor Deadline Hub",
        "tagline": "Permit and application calendar for Montreal pop-up vendors and food trucks.",
        "category": "local-services",
        "jtbd": {
            "situation": "When Fierté Marché Arc-en-ciel application closes May 15 and tam-tams opens April 1",
            "persona": "Mile End queer artisan selling at summer festivals",
            "motivation": "track borough and festival vendor deadlines in one calendar",
            "outcome": "secure pop-up spots without missing $600 SDC Village fees deadline",
            "statement": "When festival season approaches, a Mile End artisan wants deadline tracking so they don't miss vendor applications.",
        },
        "montrealAngle": "Montreal festival density (Fierté, tam-tams, Jazz, Grand Prix) with fragmented borough rules; tam-tams 40 spots first-come; Arc-en-ciel $600+tx.",
        "whyNow": "Fierté 2026 recenters on Village Aug 7-10; Arc-en-ciel May 15 deadline; summer vendor season starting.",
        "persona": {"name": "2SLGBTQIA+ pop-up vendor / food truck operator", "borough": "Le Plateau-Mont-Royal", "language": "bilingual", "estimatedCount": 500, "countSource": "[hypothesis] Montreal seasonal pop-up vendors"},
        "competitors": [{"name": "Individual festival Airtable forms", "montrealPresence": "strong", "notes": "Fragmented; no unified calendar."}],
        "mvpScope": {
            "coreJob": "Curated festival deadline calendar with email alerts and requirement checklists",
            "mustHave": ["Festival deadline database", "Email alerts", "Per-event checklist", "Stripe $19/season", "FR/EN"],
            "wontHave": ["Application submission", "Payment processing for festivals"],
            "stack": ["Next.js", "Supabase", "Resend", "Stripe"],
            "buildDays": 5,
            "conciergeFallback": "Google Calendar + newsletter for $19",
        },
        "businessModel": {"pricingCAD": "$19-29/season subscription", "firstCustomer": "Marché Arc-en-ciel applicant via M.A.D. Collectif network", "revenue60Day": {"low": 400, "high": 2000}},
        "gtm": {"firstTenCustomers": ["Fierté vendor alumni", "Tam-tams seller Facebook groups", "Food truck FB open letter community"], "channels": ["Facebook", "Festival networks"]},
        "assumptions": [{"statement": "Vendors pay $19 for deadline aggregation", "confidence": "hypothesis", "testMethod": "100-email waitlist from festival groups"}],
        "sources": [
            src("https://airtable.com/apprLNxyVNxyMYIia/pagFrRDxr9SjMnYpV/form", "Marché Arc-en-ciel 2026 application", "B", "seasonal"),
            src("https://montreal.ca/en/applying-vendor-permit-sunday-tam-tams", "Tam-tams vendor permit", "A", "regulatory"),
            src("https://www.fugues.com/2026/05/20/fierte-montreal-une-nouvelle-vision-plus-inclusive-et-recentree-sur-le-village/", "Fugues Fierté 2026 Village focus", "B", "seasonal"),
        ],
        "gates": gates("Montreal festival/vendor permit fragmentation.", "Curated calendar + email = 5 days.", "50-100 subs at $19.", "Low-touch newsletter model.", "Information aggregation only."),
        "status": "collected",
    },
    {
        "id": "juillet-premier-move-coordinator",
        "title": "Juillet Premier Move Coordinator",
        "tagline": "July 1 moving checklist + service booking for Montreal lease-change households.",
        "category": "consumer",
        "jtbd": {
            "situation": "When 115000 Montrealers move July 1 amid 70% rent increases since 2019",
            "persona": "Young couple moving from Plateau to Verdun on fixed budget",
            "motivation": "coordinate truck, cleaners, and address changes in one timeline",
            "outcome": "complete move without double-booking or missing TAL rent disclosure",
            "statement": "When July 1 move day arrives, a Montreal couple wants a coordinated checklist so they move without chaos.",
        },
        "montrealAngle": "Quebec unique July 1 moving day; 115K Montreal movers; 270+ households sought city help 2025; OMHM 607 reference requests by June 2025.",
        "whyNow": "Annual cycle; 2025 rent crisis made moves harder; SARL active June 20-July 5.",
        "persona": {"name": "Renter household moving on July 1", "borough": "Multiple", "language": "bilingual", "estimatedCount": 115000, "countSource": "Montreal Gazette — city estimate 115K movers"},
        "competitors": [{"name": "U-Haul direct booking", "montrealPresence": "strong", "notes": "Truck only; no Quebec-specific checklist."}, {"name": "311 relocation help", "url": "https://montreal.ca/", "montrealPresence": "strong", "notes": "Emergency only; not planning tool."}],
        "mvpScope": {
            "coreJob": "Personalized July 1 move timeline with affiliate service booking links",
            "mustHave": ["Move date countdown", "QC-specific checklist (TAL, Hydro, etc.)", "Cleaner/truck affiliate links", "Stripe $14.99 guide", "FR/EN"],
            "wontHave": ["Full marketplace dispatch", "Housing search"],
            "stack": ["Next.js", "Stripe", "Resend"],
            "buildDays": 5,
            "conciergeFallback": "Notion template sold via Gumroad",
        },
        "businessModel": {"pricingCAD": "$14.99 guide + affiliate revenue", "firstCustomer": "Google ad 'déménagement 1er juillet Montréal' May traffic", "revenue60Day": {"low": 2000, "high": 10000}},
        "gtm": {"firstTenCustomers": ["May-June Google/FB ads", "r/montreal moving threads", "OMHM-adjacent content SEO"], "channels": ["Paid search", "Reddit", "SEO"]},
        "assumptions": [{"statement": " Movers pay $15 for QC-specific planner", "confidence": "pain-verified", "testMethod": "Landing page test in May"}],
        "sources": [
            src("https://montrealgazette.com/news/five-things-renters-should-know-before-they-move/", "Gazette July 1 moving guide", "B", "seasonal", "115000 Montrealers move July 1."),
            src("https://www.cbc.ca/news/canada/montreal/quebec-moving-day-housing-1.7573206", "CBC moving day housing crisis", "B", "pain-verified"),
            src("https://www.omhm.qc.ca/fr/actualites/operation-1er-juillet-les-demandes-augmentent", "OMHM Opération 1er juillet", "B", "pain-verified", "607 reference requests since Jan 2025."),
        ],
        "gates": gates("July 1 moving day is Quebec-specific cultural anchor.", "Static checklist + affiliates = 5 days.", "May-June traffic spike; 100+ sales at $15.", "Fully automated.", "No brokerage licence for checklist product."),
        "status": "collected",
    },
]

for idea in IDEAS:
    idea["frameworkVersion"] = FW
    idea["collectedAt"] = COLLECTED_AT
    (OUT / f"{idea['id']}.json").write_text(json.dumps(idea, indent=2, ensure_ascii=False) + "\n")
    print(idea["id"])
