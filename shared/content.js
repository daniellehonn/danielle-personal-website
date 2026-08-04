// ─────────────────────────────────────────────────────────────────────
// THE CONTENT. Every design reads from this file — edit copy here once
// and it lands in all of them.
//
// Each design owns only presentation: its HTML shell, CSS and render.js.
// Adding a project = one object in PROJECTS. There is no page to write.
//
//   feat:false            archive only; hidden from a design's front page
//   <p class="todo">...   unwritten copy. Every design styles this loudly
//                         on purpose so it can't ship by accident.
// ─────────────────────────────────────────────────────────────────────

var PERSON = {
  "name": "Danielle Hon",
  "initials": "D.H",
  "role": "AI-Native Product Engineer",
  "thesis": "I design and build agentic, context-aware software from prototype to production.",
  "intro": "Danielle is an AI-native product engineer based in Los Angeles.",
  "about": [
      "Hi! My name is Danielle Hon. I'm an AI-native product engineer, born and raised in Los Angeles, CA. I sit somewhere between product manager and engineer, close to whichever one the work needs that day.",
      "I have a love for all things beautiful: a well-cropped photo, a curated playlist, a tasteful landing page. I think software should be as fun as it is useful, so I start with how something feels before I let myself near a system diagram. My strength was never in grinding out code for twelve hours straight; it's in holding the big picture, knowing what a person actually needs, saying it plainly, and making the small calls that decide whether a product feels alive or just functions. I don't think being effective and keeping the humanity in the work are in conflict. Usually the second one gets you the first.",
      "It's also why I love building AI-native. It frees up the hours I'd otherwise lose to long implementation cycles, so I can spend them where I actually add value: product thinking, design judgment, the shape of an experience. Curating is the through-line in most of what I do, whether that's a roadmap, a playlist, or a Pinterest board at 1am; it's always the same instinct, knowing what belongs and what quietly needs to go. I'm currently studying computer science at UCLA, and alongside that I'm co-founder and founding engineer at ContextForce, where I get to do both: build the thing and decide what it should be.",
      "When I'm not working, I'm probably on a walk, hunting down new music (current rotation: Kevin Abstract, BROCKHAMPTON, Love Spells, The Neighbourhood, fakemink, LAUNDRY DAY, Malcolm Todd), noticing the small things worth a photo, tasting americanos at new cafes, or gone for an embarrassing number of hours on Pinterest."
  ],
  "interests": [
      "product & graphic design",
      "AI-native development",
      "music discovery and playlist curation",
      "photography",
      "good coffee",
      "Pinterest"
  ],
  "base": [
    "Los Angeles, CA",
    "34.0689° N",
    "118.4452° W"
  ],
  "since": "2023",
  "available": true,
  "email": "daniellehon@gmail.com",
  "github": "https://github.com/daniellehonn",
  "linkedin": "https://www.linkedin.com/in/daniellehon/",
  "instagram": "https://www.instagram.com/daniellehonn/"
};

// Roles and affiliations — the résumé spine behind the project work.
var EXPERIENCE = [
  {
    "org": "ContextForce",
    "role": "Co-Founder & Founding AI Engineer",
    "loc": "Los Angeles, CA",
    "period": "JUL 2023 — PRESENT",
    "code": "CF",
    "bullets": [
      "Improved execution reliability across 20+ production AI workflows with a multi-provider routing layer. Model fallback, API-key failover and retries stopped runs from dying on a single non-response.",
      "Engineered tool-calling travel agents that search flights, hotels, activities and points of interest through MCP, then convert results into structured, validated responses and interactive UI components.",
      "Built an automated LLM evaluation framework to compare models and prevent workflow-quality regressions. It uses weighted rubrics, latency and cost benchmarks, and regression fixtures.",
      "Led product and pricing strategy across the portfolio. I translated enterprise discovery feedback into requirements for the extraction platform."
    ]
  },
  {
    "org": "Creative Labs @ UCLA",
    "role": "Tech Board Member",
    "loc": "Los Angeles, CA",
    "period": "OCT 2025 — PRESENT",
    "code": "CL",
    "bullets": [
      "Migrated project data for 40+ external project teams from hardcoded JSON to Supabase.",
      "Co-developed a membership portal that integrates GitHub activity, project administration and task delegation."
    ]
  },
  {
    "org": "University of California, Los Angeles",
    "role": "B.S. Computer Science",
    "loc": "Los Angeles, CA",
    "period": "EXPECTED JUN 2029",
    "code": "UCLA",
    "bullets": [
      "Coursework: Data Structures & Algorithms, Computer Organization, Discrete Structures, Algorithms & Complexity.",
      "NCWIT Award for Aspirations in Computing, won in 2024 while still in high school."
    ]
  }
];

var PROJECTS = [
  {
    "slug": "et-al",
    "num": "001",
    "title": "et al.",
    "sub": "Personal Operating System",
    "img": "",
    "cat": "AGENT SYSTEMS",
    "code": "EA-26",
    "year": "2026",
    "loc": "PERSONAL",
    "feat": true,
    "ph": "ET AL. — SHOT 01",
    "desc": "My personal operating system. Workspaces, objectives, tasks, documents and decisions that any AI agent can read and operate over MCP. et al. means “and others”: a thought never arrives alone.",
    "lead": "A second mind you can actually see. Send anything to the inbox mid-scroll, let an agent digest it, and keep the whole workspace readable and operable by any AI over MCP.",
    "sysid": "DH-26-001",
    "role": "ARCHITECTURE + ENG",
    "timeline": "JUL 2026 — PRESENT",
    "metric": "SHARE IT MID-SCROLL<br>SEARCH IT MONTHS LATER",
    "stack": "TYPESCRIPT, HONO, ZOD<br>CLOUDFLARE WORKERS / D1 / R2 / VECTORIZE, WORKERS AI",
    "status": "ONGOING",
    "problem": "<p>I lose things at the exact moment I find them. Something good goes past mid-scroll, a tool or an argument or a half-formed idea, and every way of saving it costs me the scroll. Switch apps. Pick a folder. Invent a title. Decide where it belongs. So most of it goes nowhere, and the ideas I would have wanted a month later are gone.</p><p>What I wanted was a clean, clear ecosystem for my own workflow. The thing people reach for there is a second brain. I think the concept is right and the ergonomics are backwards. You can shape an AI into an extension of how you think; that part works. But the tools for feeding that second mind still make you do all the filing by hand, and if tending it is work, you stop tending it. Why can't nurturing a second mind be as easy as adding to it?</p><p>Underneath sits an architectural problem. Most &quot;AI apps&quot; bolt a model into the backend, so the app owns a key, owns a prompt, and quietly becomes a wrapper around whichever model it picked. I wanted the opposite: something that owns my context and lets any agent come to it.</p>",
    "built": "<p><strong>Capture first.</strong> Anything I hit on my phone shares straight into et al.'s inbox and lands as a <strong>Source</strong>. No folder, no title, no decision. A queue fetches, parses and embeds it in the background, and an agent digests it into typed records. The thing I saved mid-scroll comes back months later as something I can search.</p><p>Everything lives in a workspace tree that doubles as the default AI context. It holds <strong>Objectives</strong> (why), <strong>Tasks</strong> (what), <strong>Documents</strong>, <strong>Sources</strong>, <strong>Insights</strong> and <strong>Decisions</strong>, wired together by typed relationship edges. A thought never arrives alone. It comes with the note that prompted it, the project it belongs to, the person who said it. <em>et al.</em> means &quot;and others&quot;; the name is the whole premise.</p><p>The MCP surface has two layers: raw data tools, and intent tools like <code>build_context</code>, <code>suggest_daily3</code> and <code>weekly_review</code>. Reads are free. Writes execute immediately but carry the calling client as their actor, so the audit trail always names who did what. Documents are the deliberate exception. An agent reaches them only through <code>propose_document_patch</code>, which surfaces as Accept or Reject in the app. On top sits the <strong>Daily 3</strong>: exactly three committed tasks a day, locked on confirm.</p><p>It runs on Cloudflare. A Hono Worker with D1 for records, R2 for the vault, Vectorize plus Workers AI for semantic search, a queue for ingest, and Zod validating every boundary. The design is written down as a constitution, tagged <code>[SPINE]</code> for what is load-bearing and <code>[DEFER]</code> for what can wait.</p>",
    "outcome": "<p>The architectural decision is the product. The Worker is deterministic. It fetches, parses, embeds, stores and searches, and holds no model key at all. Every piece of reasoning happens in an agent connecting from outside, and everything it touches is attributed. Swapping which AI I use is a client change, not a migration.</p><p>I use it daily, which is the only test I trust for a tool like this. Still building. The block-editable web app is the next phase; the data layer and MCP surface are live.</p>",
    "chips": [
      "MCP",
      "AGENT TOOLING",
      "TYPESCRIPT",
      "CLOUDFLARE WORKERS",
      "D1",
      "R2",
      "VECTORIZE",
      "WORKERS AI",
      "HONO",
      "ZOD",
      "SEMANTIC SEARCH"
    ],
    "links": [
      {
        "label": "SOURCE",
        "url": "https://github.com/daniellehonn/et-al"
      }
    ]
  },
  {
    "slug": "forty-pirates",
    "num": "002",
    "title": "Forty Pirates",
    "sub": "Social Video to Itinerary",
    "img": "assets/shots/forty-pirates.jpg",
    "cat": "MOBILE PRODUCT",
    "code": "FP-26",
    "year": "2025 — PRESENT",
    "loc": "CONTEXTFORCE",
    "feat": true,
    "ph": "FORTY PIRATES — SHOT 02",
    "desc": "A ContextForce product that turns travel videos into real itineraries. Paste a reel, get the places, food and activities on a map. I built the mobile app and the integration layer under it.",
    "lead": "A travel planner that reads social video. Paste a reel and it extracts the places, food and activities onto an interactive map, then helps you plan and book around them. A ContextForce team product. I built the mobile app and the integration layer beneath it.",
    "sysid": "DH-26-002",
    "role": "MOBILE APP + INTEGRATION",
    "timeline": "2025 — PRESENT",
    "metric": "LIVE AT FORTYPIRATES.COM<br>WEB + MOBILE",
    "stack": "REACT NATIVE, EXPO<br>TYPESCRIPT, MAPLIBRE GL, BETTER-AUTH",
    "status": "LIVE",
    "problem": "<p>People plan trips out of screenshots. The restaurant is in a saved reel, the neighbourhood is in a friend's story, the itinerary is in a notes app. All of it unstructured, none of it on a map, and re-finding any single place means scrolling back through everything you ever saved.</p><p>Forty Pirates goes at that for Japan specifically. Paste the video, get the locations, food, products and activities out of it with citations back to the source, then plan and price a trip around them. My job was the layer that turns extraction into something you can hold: the app, the auth, and the plumbing between them.</p>",
    "built": "<p>I built the <strong>mobile app</strong> in React Native and Expo, and integrated the multimodal extraction backend into its capture workflow. Content saved on a phone comes back as structured locations, recommendations, tasks and trip plans rendered on MapLibre GL.</p><p>I implemented Google, Apple and email/password authentication, where the memorable bug lived. Sign-in kept failing for reasons neither service would explain. The cause turned out to be redirect parameters being silently dropped between providers, which only showed up by tracing the request across both ends of the handoff.</p><p>On top of that: persistent trip and itinerary planning wired to third-party activity booking data, and the first-time onboarding flow, the screen that decides whether any of the rest gets seen.</p>",
    "outcome": "<p>Live at <strong>fortypirates.com</strong> on web and mobile, with a connected graph of Japan videos, places, creators and activities behind it.</p><p>I also set up automated CI validation before deployment and ran iterative QA cycles with two testers. We verified features, reproduced defects and locked in regression fixes, so releases stopped depending on someone remembering to check.</p>",
    "chips": [
      "REACT NATIVE",
      "EXPO",
      "TYPESCRIPT",
      "MAPLIBRE GL",
      "BETTER-AUTH",
      "OAUTH",
      "MULTIMODAL EXTRACTION",
      "CI/CD",
      "QA"
    ],
    "links": [
      {
        "label": "VIEW LIVE",
        "url": "https://fortypirates.com"
      }
    ]
  },
  {
    "slug": "lexi",
    "num": "003",
    "title": "LEXI",
    "sub": "Context-Aware Browsing",
    "img": "assets/shots/lexi.jpg",
    "cat": "AI PRODUCT",
    "code": "LX-24",
    "year": "2024 — 2025",
    "loc": "CONTEXTFORCE",
    "feat": true,
    "ph": "LEXI — SHOT 03",
    "desc": "A published Chrome extension. “Your AI, Your Workflow, Your Control.” Highlight anything, run your own saved prompts on it, and keep the results in a personal knowledge base that never leaves your machine.",
    "lead": "A Chrome extension that puts AI where you already are. Highlight on any page, run your own prompts, and build a searchable knowledge base stored locally. A ContextForce product I worked on across product and engineering.",
    "sysid": "DH-24-003",
    "role": "PRODUCT + ENG",
    "timeline": "DEC 2024 — 2025",
    "metric": "PUBLISHED ON THE<br>CHROME WEB STORE",
    "stack": "JAVASCRIPT<br>CHROME EXTENSION APIS, LLM APIS",
    "status": "PUBLISHED",
    "problem": "<p>Using AI while browsing meant constant context-switching. Copy a transcript here, paste a file there, re-describe the page you were already looking at to a model in another tab. The context the model needed was right in front of you, and getting it there was manual, lossy and slow.</p><p>Prompts made it worse. Everyone retyped the same instructions, got inconsistent output, and had no way to save or tune what actually worked. And the usual fix, a tool that ships your reading to someone else's server, trades one problem for a worse one.</p>",
    "built": "<p>An extension that embeds AI into the pages you already use, with actions built into <strong>YouTube, GitHub, Gmail, X.com, Google and Stack Overflow</strong> rather than parked in a side panel. Highlight something and act on it in place.</p><p>Two systems make it more than a chat box. A <strong>prompt manager</strong> lets people save, organise and tune their own prompts, so output quality is something they control rather than something the tool guesses at. A <strong>personal knowledge base</strong> keeps what you capture, with tagging and retrieval so it's findable later.</p><p>The architecture is privacy-first by design. State lives in IndexedDB on the user's own machine, with a metered usage system tracking API consumption. That is the whole promise in the tagline: <em>your AI, your workflow, your control.</em></p>",
    "outcome": "<p>Published on the Chrome Web Store and live for anyone to install.</p><p>Beyond shipping, I pushed it toward being a business. A market analysis to size the opportunity, a competitive pricing model, and the metered usage tracking wired in as the foundation for monetisation.</p>",
    "chips": [
      "CHROME EXTENSION",
      "GITHUB CODE RECOGNITION",
      "LLM APIS",
      "INDEXEDDB",
      "PRIVACY-FIRST",
      "PROMPT ENGINEERING",
      "PRODUCT STRATEGY",
      "MARKET ANALYSIS",
      "MONETISATION"
    ],
    "links": [
      {
        "label": "CHROME WEB STORE",
        "url": "https://chromewebstore.google.com/detail/lexi-your-ai-your-workflo/iknkiofjpadlbanhkdnojnkdgiodbfek"
      }
    ]
  },
  {
    "slug": "course-planner",
    "num": "004",
    "title": "Plan My Courses",
    "sub": "Degree Planning System",
    "img": "assets/shots/plan-my-courses.jpg",
    "cat": "INTERFACE",
    "code": "CP-25",
    "year": "2025",
    "loc": "UCLA",
    "feat": true,
    "ph": "PLANNER — SHOT 04",
    "desc": "An interactive degree planner that models prerequisites as a dependency graph. Students I tested with went from a multi-hour enrolment ritual to planning a full quarter in under 15 minutes.",
    "lead": "An interactive degree planner. Prerequisites modelled as a dependency graph, eligible courses ranked by a priority-scoring algorithm, and measured against how long students actually spent before it.",
    "sysid": "DH-25-004",
    "role": "DESIGN + ENG",
    "timeline": "JUN 2025 — PRESENT",
    "metric": "UNDER 15 MIN TO PLAN A QUARTER<br>UNDER A SECOND TO REPLAN",
    "stack": "JAVASCRIPT, GRAPH ALGORITHMS<br>GITHUB PAGES",
    "status": "SHIPPED",
    "problem": "<p>Planning a degree by hand is deceptively hard. Prerequisite chains, offering cycles and workload all have to line up, and one ordering mistake can cost a whole quarter. Students end up managing it in spreadsheets, re-checking the same constraints every term, with no fast way to tell whether a plan is even valid.</p>",
    "built": "<p>An interactive planner where students arrange courses across terms directly and the interface holds the constraints. Prerequisites are modelled as a <strong>dependency graph</strong>. Colour coding shows what's ready to take and dependency lines draw the relationships, so an invalid plan looks wrong before it is wrong.</p><p>Behind it, a priority-scoring algorithm ranks eligible courses and sequences them by prerequisite chain and difficulty, generating a viable plan instead of leaving the ordering to the student. Validation covers prerequisites, corequisites, unit limits and graduation feasibility. Multi-plan generation lets alternative schedules be compared side by side.</p>",
    "outcome": "<p>I measured it rather than assumed it. First I polled students on how long enrolment planning usually takes them each cycle, to get a baseline. Then I had them use the planner and <strong>time themselves</strong>, and report the number back.</p><p>Across <strong>30+ UCLA students</strong>, the result was roughly an <strong>82% drop</strong> in time spent. Under 15 minutes to set up the planner and plan the following quarter, against a baseline measured in hours.</p><p>The more interesting finding was where the time actually goes. Setup is the whole cost: entering your history and constraints once. After that, auto-planning runs in <strong>under a second</strong> and can be re-run as many times as you like, so the second quarter, and every quarter after it, is effectively free. That reframed the product for me. The thing worth optimising wasn't the algorithm. It was onboarding.</p>",
    "chips": [
      "GRAPH ALGORITHMS",
      "DEPENDENCY MODELLING",
      "ALGORITHM DESIGN",
      "INTERFACE DESIGN",
      "USER TESTING",
      "JAVASCRIPT"
    ],
    "links": [
      {
        "label": "VIEW LIVE",
        "url": "https://daniellehonn.github.io/planmycourses"
      },
      {
        "label": "SOURCE",
        "url": "https://github.com/daniellehonn/planmycourses"
      }
    ]
  },
  {
    "slug": "pdf-to-markdown",
    "num": "005",
    "title": "PDF to Markdown",
    "sub": "Document Structure Engine",
    "img": "",
    "cat": "AI ENGINEERING",
    "code": "MD-24",
    "year": "2024",
    "loc": "CONTEXTFORCE",
    "feat": true,
    "ph": "CONVERTER — SHOT 05",
    "desc": "An end-to-end pipeline converting unstructured PDFs to Markdown with OCR and vision-language models. It keeps headers, tables, links and formulas intact, with LaTeX output. Shipped as an API and a Python SDK.",
    "lead": "An end-to-end pipeline converting unstructured PDFs into clean Markdown. It detects headers, tables, links and mathematical formulas, with LaTeX output.",
    "sysid": "DH-24-005",
    "role": "ENGINEERING",
    "timeline": "SEP 2024",
    "metric": "RELEASED AS A PUBLIC<br>PYTHON SDK",
    "stack": "PYTHON, GROQ<br>VISION-LANGUAGE MODELS, CLOUDFLARE WORKERS",
    "status": "SHIPPED",
    "problem": "<p>Most of the knowledge worth asking an LLM about is locked in formats it can't read well. PDFs, scanned documents, transcripts. The text is there, but the structure that makes it meaningful gets lost the moment you extract it naively, and a model given flattened output answers badly or not at all.</p><p>This is the gap I picked up first. PDFs were where every existing tool failed hardest, so that is where I started. Not because the parsing was glamorous, but because nothing downstream of it works until it is right.</p>",
    "built": "<p>A PDF-to-Markdown API that combines OCR with vision-language models to read the page rather than scrape it. It preserves document structure, including headers, tables, links and mathematical formulas, and emits formulas as LaTeX so meaning survives the conversion instead of collapsing into loose text.</p><p>Deployed on Cloudflare Workers, so it scales without infrastructure to babysit.</p>",
    "outcome": "<p>Released as a Python SDK for programmatic use. Developers could integrate the parser directly rather than reimplementing it, which turned an internal tool into something other people could build on.</p>",
    "chips": [
      "PYTHON",
      "OCR",
      "VISION-LANGUAGE MODELS",
      "GROQ",
      "LATEX",
      "CLOUDFLARE WORKERS",
      "PYTHON SDK",
      "PROMPT ENGINEERING"
    ],
    "links": []
  },
  {
    "slug": "terralink",
    "num": "006",
    "title": "TerraLink",
    "sub": "Multi-Agent Advisor",
    "img": "",
    "cat": "AI ENGINEERING",
    "code": "TL-26",
    "year": "2026",
    "loc": "LA HACKS",
    "feat": true,
    "ph": "TERRALINK — SHOT 06",
    "desc": "A multi-agent sustainability advisor built at LA Hacks. Three autonomous Fetch.ai agents fetch live air quality, generate personalised carbon actions, and compose a shareable infographic card.",
    "lead": "An AI-powered local sustainability advisor. Three autonomous agents fetch live air quality, generate personalised carbon-reduction actions, and compose a shareable infographic.",
    "sysid": "DH-26-006",
    "role": "ENGINEERING",
    "timeline": "APR 2026 — 36 HRS",
    "metric": "3 AUTONOMOUS AGENTS<br>BUILT IN 36 HOURS",
    "stack": "REACT, TYPESCRIPT<br>FASTAPI, FETCH.AI uAGENTS",
    "status": "PROTOTYPE",
    "problem": "<p>Climate advice is generic where the problem is local. Air quality data exists in public feeds and carbon guidance exists in listicles, but neither is grounded in where you actually are right now. The advice arrives untethered from the conditions it's meant to respond to, and gets ignored.</p>",
    "built": "<p>You enter a city. Behind that single input, an orchestrator dispatches a pipeline of three autonomous agents, each with one job.</p><p><strong>Emissions Scout</strong> fetches live AQI from EPA AirNow, PM2.5 from Open-Meteo and CO₂ estimates, in parallel, so the slowest feed sets the pace rather than the sum of them. <strong>Action Router</strong> passes that real-time picture to ASI1 Mini and gets back three personalised, actionable recommendations grounded in the actual numbers. <strong>Media Composer</strong> renders the result as an infographic card through Cloudinary URL transformations, so the output is shareable rather than trapped in the app.</p><p>A FastAPI orchestrator coordinates the three over Fetch.ai's uAgents framework. The front end is a React dashboard with a chat interface, live metrics panels and an action feed.</p>",
    "outcome": "<p>Built at LA Hacks 2026 as a 36-hour prototype. Three autonomous agents coordinating over Fetch.ai uAgents turn a single city into live air-quality data, personalised actions and a shareable infographic card.</p>",
    "chips": [
      "MULTI-AGENT SYSTEMS",
      "FETCH.AI uAGENTS",
      "ASI1 MINI",
      "AGENT ORCHESTRATION",
      "FASTAPI",
      "REACT 19",
      "TYPESCRIPT",
      "CLOUDINARY",
      "EPA AIRNOW",
      "DOCKER"
    ],
    "links": [
      {
        "label": "SOURCE",
        "url": "https://github.com/daniellehonn/terralinkk"
      }
    ]
  },
  {
    "slug": "pdf-parser-test-suite",
    "num": "007",
    "title": "PDF Parser Test Suite",
    "sub": "Parser Benchmark",
    "img": "",
    "cat": "APPLIED RESEARCH",
    "code": "TS-24",
    "year": "2024",
    "loc": "CONTEXTFORCE",
    "feat": false,
    "ph": "TEST SUITE — SHOT 07",
    "desc": "A benchmark comparing LlamaParse, ContextForce and Jina.ai across text, OCR, table and formula extraction. Scored by an LLM judge rather than by eye.",
    "lead": "A test suite that evaluates and compares leading PDF parsers, including LlamaParse, ContextForce and Jina.ai, across text, OCR, table and formula extraction.",
    "sysid": "DH-24-007",
    "role": "ENGINEERING + RESEARCH",
    "timeline": "2024",
    "metric": "3 PARSERS SCORED ACROSS<br>4 EXTRACTION AXES",
    "stack": "PYTHON, POETRY<br>OPENAI, PYTEST",
    "status": "SHIPPED",
    "problem": "<p>Every PDF parser claims to be the most accurate, and none of the claims are checkable. Choosing between LlamaParse, ContextForce and Jina.ai meant trusting marketing copy or eyeballing a handful of documents. Neither tells you how a parser behaves on the cases that actually break: scanned pages, dense tables, mathematical formulas.</p>",
    "built": "<p>A test suite that benchmarks each parser across the four areas where they diverge: basic text extraction, OCR extraction, table extraction and formula detection. Defining those evaluation criteria was most of the work. Deciding what &quot;correct&quot; means for a parsed table is harder than measuring it.</p><p>Testing is automated end-to-end with Pytest. Scoring is handed to an LLM rather than a human, so every parser is judged against the same rubric without the bias that creeps in when you already have a favourite.</p>",
    "outcome": "<p>Produced a corpus of deliberately complex PDFs that differentiates parsers precisely. I published it so other people can run their own evaluations against the same test data instead of starting from scratch.</p>",
    "chips": [
      "BENCHMARKING",
      "LLM-AS-JUDGE",
      "EVALUATION DESIGN",
      "PYTEST",
      "POETRY",
      "OPENAI",
      "PYTHON"
    ],
    "links": [
      {
        "label": "SOURCE",
        "url": "https://github.com/daniellehonn/pdf-parser-test-suite"
      }
    ]
  },
  {
    "slug": "pdf-extractor-demo",
    "num": "008",
    "title": "PDF Extractor Demo",
    "sub": "Retrieval Pipeline",
    "img": "",
    "cat": "APPLIED RESEARCH",
    "code": "CF-24",
    "year": "2024",
    "loc": "CONTEXTFORCE",
    "feat": false,
    "ph": "EXTRACTOR — SHOT 08",
    "desc": "An API demo that ingests webpages, PDFs and YouTube transcripts, parses them into structured data and indexes them in Pinecone for semantic search and RAG.",
    "lead": "An API demo that ingests webpages, PDFs and YouTube transcripts, parses them into structured data and indexes them in Pinecone for semantic search and RAG.",
    "sysid": "DH-24-008",
    "role": "ENGINEERING",
    "timeline": "SEP 2024",
    "metric": "DEMOED TO LEGALZOOM'S<br>HEAD OF DATA",
    "stack": "PYTHON, STREAMLIT<br>PINECONE, HUGGINGFACE",
    "status": "SHIPPED",
    "problem": "<p>Most of the knowledge worth asking an LLM about is locked in formats it can't read well. PDFs, scanned documents, transcripts. The text is there, but the structure that makes it meaningful gets lost the moment you extract it naively, and a model given flattened output answers badly or not at all.</p><p>Before betting on any single piece of the pipeline, I wanted to watch the whole loop run end to end, from ingest to structure to retrieval to answer, and find out where it actually broke.</p>",
    "built": "<p>An API demo that ingests three messy input types, webpages, PDFs and YouTube transcripts, and parses each into structured data on the far side.</p><p>Parsed content is embedded with HuggingFace and indexed in Pinecone, which turns the corpus into something searchable by meaning rather than keyword. A semantic search retrieves the passages closest to a query and hands them to the model as context, the retrieval half of RAG.</p><p>The demo runs on Streamlit and is model-agnostic by design. The same retrieved context can be routed to OpenAI, Claude, Gemini or Groq, or to a Llama model served locally through Ollama, so the pipeline isn't bet on a single provider.</p>",
    "outcome": "<p>I presented the enterprise legal-tech applications to LegalZoom's Head of Data, positioning the prototype as a foundation for AI-driven knowledge management systems.</p>",
    "chips": [
      "RAG",
      "PINECONE",
      "HUGGINGFACE EMBEDDINGS",
      "SEMANTIC SEARCH",
      "STREAMLIT",
      "OPENAI",
      "CLAUDE",
      "GEMINI",
      "GROQ",
      "OLLAMA",
      "PYTHON"
    ],
    "links": [
      {
        "label": "SOURCE",
        "url": "https://github.com/daniellehonn/cf-pdf-demo"
      }
    ]
  },
  {
    "slug": "ai-vision-benchmark",
    "num": "009",
    "title": "AI Vision Benchmark",
    "sub": "Vision Model Benchmark",
    "img": "",
    "cat": "APPLIED RESEARCH",
    "code": "AV-24",
    "year": "2024",
    "loc": "CONTEXTFORCE",
    "feat": false,
    "ph": "BENCHMARK — SHOT 09",
    "desc": "A benchmark for AI vision models. An industry-focused test suite run against many models at once, scored by an LLM judge, deployed serverless on Cloudflare.",
    "lead": "A benchmark for AI vision models with an industry-focused test suite, run against many models at once and scored by an LLM judge.",
    "sysid": "DH-24-009",
    "role": "ENGINEERING + RESEARCH",
    "timeline": "2024",
    "metric": "MANY MODELS, ONE RUBRIC<br>DEPLOYED SERVERLESS",
    "stack": "SVELTE, JAVASCRIPT<br>CLOUDFLARE WORKERS AI",
    "status": "SHIPPED",
    "problem": "<p>Vision models were improving fast and impossible to compare. General benchmarks measure general ability, which tells you very little about whether a model can read an ecommerce listing or a legal document. Running the same test across several models meant wiring each one up by hand.</p>",
    "built": "<p>A benchmark built around three goals: a test suite with an industry focus rather than an academic one, a way to run the same tests against a list of models simultaneously, and an LLM evaluating the results to assign quality scores.</p><p>It covers the tasks vision models are actually asked to do, including question answering, object detection, image-to-text description, counting and generation, with Llava served through Cloudflare Workers AI.</p>",
    "outcome": "<p>Deployed serverless on Cloudflare with a Svelte interface, so the suite runs as a usable demo rather than a script. Anyone can run the comparison instead of reading someone else's summary of it.</p>",
    "chips": [
      "BENCHMARKING",
      "LLM-AS-JUDGE",
      "COMPUTER VISION",
      "CLOUDFLARE WORKERS AI",
      "LLAVA",
      "SVELTE",
      "JAVASCRIPT"
    ],
    "links": [
      {
        "label": "SOURCE",
        "url": "https://github.com/daniellehonn/ai-vision-benchmark"
      }
    ]
  }
];



// ─────────────────────────────────────────────────────────────────────
// ANNOTATIONS. Phrases in the About copy that reveal a photograph on
// hover. `phrase` must appear verbatim in PERSON.about. A print is
// pulled at random from the set each time, so no two sweeps match.
//
// The FILENAME decides which phrase a photo belongs to: me-*, la-*,
// photo-*, playlist-*, pin-*, coffee-*, walk-*. Add a file with the
// right prefix and it joins that hover. Nothing else to edit.
//
// Captions are the exception. One is only written where the photo
// cannot say it itself: a place you would not recognise, a product
// you could not name. Portraits carry none.
// ─────────────────────────────────────────────────────────────────────
var ANNOTATIONS = [
  { "phrase":"Danielle Hon", "shots":[
    { "src":"assets/shots/me-01.jpg", "cap":"" },
    { "src":"assets/shots/me-02.jpg", "cap":"" },
    { "src":"assets/shots/me-03.jpg", "cap":"" },
    { "src":"assets/shots/me-04.jpg", "cap":"" },
    { "src":"assets/shots/me-05.jpg", "cap":"" }
  ]},
  { "phrase":"Los Angeles", "shots":[
    { "src":"assets/shots/la-02.jpg", "cap":"" },
    { "src":"assets/shots/la-03.jpg", "cap":"the Getty" },
    { "src":"assets/shots/la-04.jpg", "cap":"the Getty" },
    { "src":"assets/shots/la-05.jpg", "cap":"Santa Monica" }
  ]},
  { "phrase":"a well-cropped photo", "shots":[
    { "src":"assets/shots/photo-01.jpg", "cap":"" },
    { "src":"assets/shots/photo-02.jpg", "cap":"" },
    { "src":"assets/shots/photo-03.jpg", "cap":"" }
  ]},
  { "phrase":"a curated playlist", "shots":[
    { "src":"assets/shots/playlist-01.jpg", "cap":"" }
  ]},
  { "phrase":"a tasteful landing page", "shots":[
    { "src":"assets/shots/forty-pirates.jpg", "cap":"Forty Pirates" },
    { "src":"assets/shots/lexi.jpg", "cap":"LEXI" },
    { "src":"assets/shots/plan-my-courses.jpg", "cap":"Plan My Courses" }
  ]},
  { "phrase":"a Pinterest board at 1am", "shots":[
    { "src":"assets/shots/pin-01.jpg", "cap":"" },
    { "src":"assets/shots/pin-02.jpg", "cap":"" },
    { "src":"assets/shots/pin-03.jpg", "cap":"" }
  ]},
  { "phrase":"tasting americanos at new cafes", "shots":[
    { "src":"assets/shots/coffee-01.jpg", "cap":"" },
    { "src":"assets/shots/coffee-02.jpg", "cap":"" },
    { "src":"assets/shots/coffee-04.jpg", "cap":"" }
  ]},
  { "phrase":"on a walk", "shots":[
    { "src":"assets/shots/walk-01.jpg", "cap":"" },
    { "src":"assets/shots/walk-02.jpg", "cap":"" }
  ]}
];

function featured(p){ return p.feat; }
function bySlug(s){
  for (var i=0;i<PROJECTS.length;i++) if (PROJECTS[i].slug===s) return PROJECTS[i];
  return null;
}
