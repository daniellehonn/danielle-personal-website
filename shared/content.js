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
  // the hero, set as three deliberate lines
  "hero": ["Danielle is an", "AI-native Product Engineer", "studying CS @ UCLA."],
  "about": [
      "Hi! My name is Danielle Hon. I'm an AI-native product engineer, born and raised in Los Angeles, CA. I sit somewhere between product manager and engineer, close to whichever one the work needs that day.",
      "I have a love for all things beautiful: a well-cropped photo, a curated playlist, a tasteful landing page. I think software should be as fun as it is useful, so I start with how something feels before I let myself near a system diagram. My strength was never in grinding out code for twelve hours straight; it's in holding the big picture, knowing what a person actually needs, saying it plainly, and making the small calls that decide whether a product feels alive or just functions. I don't think being effective and keeping the humanity in the work are in conflict. Usually the second one gets you the first.",
      "It's also why I love building AI-native. It frees up the hours I'd otherwise lose to long implementation cycles, so I can spend them where I actually add value: product thinking, design judgment, the shape of an experience. Curating is the through-line in most of what I do, whether that's a roadmap, a playlist, or a Pinterest board at 1am; it's always the same instinct, knowing what belongs and what quietly needs to go. I'm currently studying computer science at UCLA, and alongside that I'm co-founder and founding engineer at ContextForce, where I get to do both: build the thing and decide what it should be.",
      "When I'm not working, I'm probably on a walk, hunting down new music (current rotation: Kevin Abstract, BROCKHAMPTON, Love Spells, The Neighbourhood, fakemink, LAUNDRY DAY, Malcolm Todd), noticing the small things worth a photo, tasting americanos at new cafes, or gone for an embarrassing number of hours on Pinterest."
  ],
  "interests": [
      "product & graphic design",
      "AI-native development",
      "discovering new AI tools",
      "music discovery and playlist curation",
      "photography",
      "finding cute new cafes",
      "going on walks"
  ],
  "email": "daniellehon@gmail.com",
  "github": "https://github.com/daniellehonn",
  "linkedin": "https://www.linkedin.com/in/daniellehon/",
  "instagram": "https://www.instagram.com/daniellehonn/"
};

// ─────────────────────────────────────────────────────────────────────
// EXPERIENCE. Rendered as a timeline, so the order is chronological:
// oldest at the top, time running down the page. `year` is the marker
// on the rule.
// ─────────────────────────────────────────────────────────────────────
var EXPERIENCE = [
  {
    "year": "2023",
    "org": "ContextForce",
    "workTag": "CONTEXTFORCE",
    "role": "Co-Founder & Founding AI Engineer",
    "loc": "Los Angeles, CA",
    "period": "JUL 2023 — PRESENT",
    "note": "Started as a junior in high school. An idea first, the engineering after.",
    "bullets": [
      "Improved execution reliability across 20+ production AI workflows with a multi-provider routing layer. Model fallback, API-key failover and retries stopped runs from dying on a single non-response.",
      "Engineered tool-calling travel agents that search flights, hotels, activities and points of interest through MCP, then convert results into structured, validated responses and interactive UI components.",
      "Built an automated LLM evaluation framework to compare models and prevent workflow-quality regressions. It uses weighted rubrics, latency and cost benchmarks, and regression fixtures.",
      "Led product and pricing strategy across the portfolio. I translated enterprise discovery feedback into requirements for the extraction platform."
    ]
  },
  {
    "year": "2025",
    "org": "University of California, Los Angeles",
    "shots": [
      { "src":"assets/shots/ucla/ucla-01.jpg", "cap":"" },
      { "src":"assets/shots/ucla/ucla-02.jpg", "cap":"" }
    ],
    "role": "B.S. Computer Science",
    "loc": "Los Angeles, CA",
    "period": "2025 — EXPECTED JUN 2029",
    "note": "",
    "bullets": [
      "Coursework: Data Structures & Algorithms, Computer Organization, Discrete Structures, Algorithms & Complexity."
    ]
  },
  {
    "year": "2025",
    "org": "Creative Labs @ UCLA",
    "role": "Tech Board Member",
    "loc": "Los Angeles, CA",
    "period": "OCT 2025 — PRESENT",
    "note": "",
    "bullets": [
      "Migrated project data for 40+ external project teams from hardcoded JSON to Supabase.",
      "Co-developed a membership portal that integrates GitHub activity, project administration and task delegation."
    ]
  }
];

var PROJECTS = [
  {
    "slug": "et-al",
    "num": "001",
    "title": "et al.",
    "sub": "Personal Operating System",
    "img": "assets/shots/projects/et-al/et-al-01.jpg",
    "imgs": [
      "assets/shots/projects/et-al/et-al-01.jpg",
      "assets/shots/projects/et-al/et-al-logo.jpg"
    ],
    "cat": "AGENT SYSTEMS",
    "year": "2026",
    "loc": "PERSONAL",
    "desc": "My personal operating system. Workspaces, objectives, tasks, documents and decisions that any AI agent can read and operate over MCP. et al. means “and others”: a thought never arrives alone.",
    "lead": "A second mind you can actually see. Send anything to the inbox mid-scroll, and keep the whole workspace readable and operable by any AI.",
    "role": "ARCHITECTURE + ENG",
    "timeline": "JUL 2026 — PRESENT",
    "status": "ONGOING",
    "problem": "<p>I lose things at the exact moment I find them. Something good goes past mid-scroll, a tool or an argument or a half-formed idea, and every way of saving it costs me the scroll. Switch apps. Pick a folder. Invent a title. Decide where it belongs. So most of it goes nowhere, and the ideas I would have wanted a month later are gone.</p><p>The thing people reach for is a second brain. I think the concept is right and the ergonomics are backwards: you can shape an AI into an extension of how you think, but the tools for feeding that second mind still make you do all the filing by hand. If tending it is work, you stop tending it.</p>",
    "built": "<p><strong>Capture first.</strong> Anything I hit on my phone shares straight into et al.'s inbox and lands as a <strong>Source</strong>. No folder, no title, no decision. A queue fetches, parses and embeds it in the background, and an agent digests it into typed records. The thing I saved mid-scroll comes back months later as something I can search.</p><p>Everything lives in a workspace tree that doubles as the default AI context, holding <strong>Objectives</strong>, <strong>Tasks</strong>, <strong>Documents</strong>, <strong>Sources</strong>, <strong>Insights</strong> and <strong>Decisions</strong>, wired together by typed edges. A thought never arrives alone. It comes with the note that prompted it, the project it belongs to, the person who said it. <em>et al.</em> means &quot;and others&quot;; the name is the whole premise.</p><p>Agents reach it over two layers of MCP tools: raw data, and intent like <code>build_context</code> or <code>weekly_review</code>. Writes execute immediately but carry the calling client as their actor, so the audit trail always names who did what. Documents are the deliberate exception, reached only through <code>propose_document_patch</code>, which surfaces as Accept or Reject.</p>",
    "outcome": "<p>It is not an AI app. The backend holds no model key at all: it fetches, parses, embeds, stores and searches, and every piece of reasoning happens in an agent connecting from outside. Swapping which AI I use is a client change, not a migration.</p><p>I use it daily, which is the only test I trust for a tool like this. The data layer and MCP surface are live; the block-editable web app is next.</p>",
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
    "img": "assets/shots/projects/contextforce/forty-pirates/forty-pirates-landing.jpg",
    "cat": "MOBILE PRODUCT",
    "year": "2025 — PRESENT",
    "loc": "CONTEXTFORCE",
    "desc": "A ContextForce product that turns travel videos into real itineraries. Paste a reel, get the places, food and activities on a map. I built the mobile app and the integration layer under it.",
    "lead": "A travel planner that reads social video. Paste a reel and it lifts the places, food and activities onto a map you can plan and book around.",
    "role": "MOBILE APP + INTEGRATION",
    "timeline": "2025 — PRESENT",
    "status": "LIVE",
    "problem": "<p>People plan trips out of screenshots. The restaurant is in a saved reel, the neighbourhood is in a friend's story, the itinerary is in a notes app. All of it unstructured, none of it on a map, and re-finding any single place means scrolling back through everything you ever saved.</p>",
    "built": "<p>Paste a video and the extraction backend returns the locations, food, products and activities inside it, with citations back to the source, rendered on a map you can plan and price a trip around.</p><p>I built the mobile app and the layer between it and that backend, plus persistent trip planning wired to third-party booking data and the first-time onboarding flow, the screen that decides whether any of the rest gets seen.</p><p>The memorable bug was in sign-in. It kept failing for reasons neither Google nor Apple would explain; the cause was redirect parameters being silently dropped between providers, which only showed up by tracing the request across both ends of the handoff.</p>",
    "outcome": "<p>Live at <strong>fortypirates.com</strong> on web and mobile, with a connected graph of Japan videos, places, creators and activities behind it.</p>",
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
    "img": "assets/shots/projects/contextforce/lexi/lexi-logo.jpg",
    "cat": "AI PRODUCT",
    "year": "2024 — 2025",
    "loc": "CONTEXTFORCE",
    "desc": "A published Chrome extension. “Your AI, Your Workflow, Your Control.” Highlight anything, run your own saved prompts on it, and keep the results in a personal knowledge base that never leaves your machine.",
    "lead": "A Chrome extension that puts AI where you already are. Highlight on any page, run your own prompts, and keep what you find in a knowledge base that never leaves your machine.",
    "role": "PRODUCT + ENG",
    "timeline": "DEC 2024 — 2025",
    "status": "PUBLISHED",
    "problem": "<p>Using AI while browsing meant constant context-switching. Copy a transcript here, paste a file there, re-describe the page you were already looking at to a model in another tab. The context the model needed was right in front of you, and getting it there was manual, lossy and slow.</p><p>Prompts made it worse: everyone retyped the same instructions and got inconsistent output. And the usual fix, a tool that ships your reading to someone else's server, trades one problem for a worse one.</p>",
    "built": "<p>An extension that embeds AI into the pages you already use, with actions built into <strong>YouTube, GitHub, Gmail, X.com, Google and Stack Overflow</strong> rather than parked in a side panel. Highlight something and act on it in place.</p><p>Two systems make it more than a chat box. A <strong>prompt manager</strong> lets people save and tune their own prompts, so output quality is something they control rather than something the tool guesses at. A <strong>personal knowledge base</strong> keeps what you capture, tagged and searchable.</p><p>Everything is stored on the user's own machine. That is the whole promise in the tagline: <em>your AI, your workflow, your control.</em></p>",
    "outcome": "<p>Published on the Chrome Web Store and live for anyone to install. I also sized the market, built a competitive pricing model, and wired in metered usage as the foundation for charging.</p>",
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
    "img": "assets/shots/projects/plan-my-courses/plan-my-courses-ui.jpg",
    "cat": "INTERFACE",
    "year": "2025",
    "loc": "UCLA",
    "desc": "An interactive degree planner that models prerequisites as a dependency graph. Students I tested with went from a multi-hour enrolment ritual to planning a full quarter in under 15 minutes.",
    "lead": "An interactive degree planner that models prerequisites as a dependency graph, and was measured against how long students actually spent before it.",
    "role": "DESIGN + ENG",
    "timeline": "JUN 2025 — PRESENT",
    "status": "SHIPPED",
    "problem": "<p>Planning a degree by hand is deceptively hard. Prerequisite chains, offering cycles and workload all have to line up, and one ordering mistake can cost a whole quarter. Students end up managing it in spreadsheets, re-checking the same constraints every term, with no fast way to tell whether a plan is even valid.</p>",
    "built": "<p>Prerequisites are modelled as a <strong>dependency graph</strong>. Colour coding shows what is ready to take and dependency lines draw the relationships, so an invalid plan looks wrong before it is wrong.</p><p>Behind it, a priority-scoring algorithm ranks eligible courses and sequences them by prerequisite chain and difficulty, generating a viable plan instead of leaving the ordering to the student. Validation covers prerequisites, corequisites, unit limits and graduation feasibility, and alternative schedules can be compared side by side.</p>",
    "outcome": "<p>I measured it rather than assumed it: first polling students on how long enrolment planning usually takes them, then having them use the planner and <strong>time themselves</strong>.</p><p>Across <strong>30+ UCLA students</strong>, roughly an <strong>82% drop</strong> — under 15 minutes against a baseline in hours.</p><p>The more interesting finding was where the time goes. Setup is the whole cost; after that, auto-planning runs in <strong>under a second</strong> and can be re-run freely, so every quarter after the first is effectively free. That reframed the product for me. The thing worth optimising was never the algorithm. It was onboarding.</p>",
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
    "year": "2024",
    "loc": "CONTEXTFORCE",
    "desc": "An end-to-end pipeline converting unstructured PDFs to Markdown with OCR and vision-language models. It keeps headers, tables, links and formulas intact, with LaTeX output. Shipped as an API and a Python SDK.",
    "lead": "An end-to-end pipeline converting unstructured PDFs into clean Markdown. It detects headers, tables, links and mathematical formulas, with LaTeX output.",
    "role": "ENGINEERING",
    "timeline": "SEP 2024",
    "status": "SHIPPED",
    "problem": "<p>Everything worth asking an LLM about lives in formats it reads badly. The text of a PDF is there, but the structure that makes it meaningful — headers, tables, formulas — is lost the moment you extract it naively, and a model given flattened output answers badly or not at all.</p><p>This is the gap I picked up first, because nothing downstream of it works until it is right.</p>",
    "built": "<p>An API that combines OCR with vision-language models to read the page rather than scrape it, preserving headers, tables, links and mathematical formulas. Formulas come out as LaTeX, so the meaning survives the conversion instead of collapsing into loose text.</p>",
    "outcome": "<p>Released as a Python SDK, so developers could integrate the parser directly rather than reimplementing it. An internal tool became something other people could build on.</p>",
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
    "year": "2026",
    "loc": "LA HACKS",
    "desc": "A multi-agent sustainability advisor built at LA Hacks. Three autonomous Fetch.ai agents fetch live air quality, generate personalised carbon actions, and compose a shareable infographic card.",
    "lead": "An AI-powered local sustainability advisor. Three autonomous agents fetch live air quality, generate personalised carbon-reduction actions, and compose a shareable infographic.",
    "role": "ENGINEERING",
    "timeline": "APR 2026 — 36 HRS",
    "status": "PROTOTYPE",
    "problem": "<p>Climate advice is generic where the problem is local. Air-quality data sits in public feeds and carbon guidance sits in listicles, but neither is grounded in where you actually are, so the advice arrives untethered from the conditions it is meant to respond to and gets ignored.</p>",
    "built": "<p>You enter a city. Behind that single input, an orchestrator dispatches three autonomous agents, each with one job.</p><p><strong>Emissions Scout</strong> fetches live AQI, PM2.5 and CO₂ estimates in parallel, so the slowest feed sets the pace rather than the sum of them. <strong>Action Router</strong> passes that picture to a model and gets back three recommendations grounded in the actual numbers. <strong>Media Composer</strong> renders the result as an infographic card, so the output is shareable rather than trapped in the app.</p>",
    "outcome": "<p>Built at LA Hacks 2026 in 36 hours.</p>",
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
    "year": "2024",
    "loc": "CONTEXTFORCE",
    "desc": "A benchmark comparing LlamaParse, ContextForce and Jina.ai across text, OCR, table and formula extraction. Scored by an LLM judge rather than by eye.",
    "lead": "A test suite that evaluates and compares leading PDF parsers, including LlamaParse, ContextForce and Jina.ai, across text, OCR, table and formula extraction.",
    "role": "ENGINEERING + RESEARCH",
    "timeline": "2024",
    "status": "SHIPPED",
    "problem": "<p>Every PDF parser claims to be the most accurate and none of the claims are checkable. Choosing between LlamaParse, ContextForce and Jina.ai meant trusting marketing copy or eyeballing a handful of documents, neither of which tells you how a parser behaves on the cases that actually break: scanned pages, dense tables, formulas.</p>",
    "built": "<p>A suite that benchmarks each parser across the four areas where they diverge: text, OCR, tables and formula detection. Defining the criteria was most of the work — deciding what &quot;correct&quot; means for a parsed table is harder than measuring it.</p><p>Scoring is handed to an LLM rather than a human, so every parser is judged against the same rubric without the bias that creeps in once you have a favourite.</p>",
    "outcome": "<p>The useful output was a corpus of deliberately difficult PDFs that separates parsers precisely. I published it, so anyone can run their own evaluation against the same data instead of starting from scratch.</p>",
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
    "img": "assets/shots/projects/contextforce/pdf-extractor-demo/pdf-extract-demo-01.jpg",
    "cat": "APPLIED RESEARCH",
    "year": "2024",
    "loc": "CONTEXTFORCE",
    "desc": "An API demo that ingests webpages, PDFs and YouTube transcripts, parses them into structured data and indexes them in Pinecone for semantic search and RAG.",
    "lead": "An API demo that ingests webpages, PDFs and YouTube transcripts, parses them into structured data and indexes them in Pinecone for semantic search and RAG.",
    "role": "ENGINEERING",
    "timeline": "SEP 2024",
    "status": "SHIPPED",
    "problem": "<p>Before betting on any single piece of an extraction pipeline, I wanted to watch the whole loop run end to end — ingest, structure, retrieval, answer — and find out where it actually broke.</p>",
    "built": "<p>A demo that ingests three messy input types, webpages, PDFs and YouTube transcripts, and parses each into structured data. Parsed content is embedded and indexed, which makes the corpus searchable by meaning rather than keyword; a semantic search then hands the closest passages to the model as context — the retrieval half of RAG.</p><p>It is model-agnostic by design. The same context routes to any provider, or to a model served locally, so the pipeline is never bet on one of them.</p>",
    "outcome": "<p>I presented the enterprise legal-tech applications to LegalZoom's Head of Data, positioning it as a foundation for AI-driven knowledge management.</p>",
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
    "img": "assets/shots/projects/contextforce/ai-vision-benchmark/ai-vision-benchmark-01.jpg",
    "cat": "APPLIED RESEARCH",
    "year": "2024",
    "loc": "CONTEXTFORCE",
    "desc": "A benchmark for AI vision models. An industry-focused test suite run against many models at once, scored by an LLM judge, deployed serverless on Cloudflare.",
    "lead": "A benchmark for AI vision models with an industry-focused test suite, run against many models at once and scored by an LLM judge.",
    "role": "ENGINEERING + RESEARCH",
    "timeline": "2024",
    "status": "SHIPPED",
    "problem": "<p>Vision models were improving fast and impossible to compare. General benchmarks measure general ability, which tells you very little about whether a model can read an ecommerce listing or a legal document — and running the same test across several of them meant wiring each one up by hand.</p>",
    "built": "<p>A benchmark with an industry focus rather than an academic one: the same tests run against a list of models at once, with an LLM scoring the results. It covers what vision models are actually asked to do — question answering, object detection, description, counting and generation.</p>",
    "outcome": "<p>Deployed serverless with a web interface, so it runs as a usable demo rather than a script. Anyone can run the comparison instead of reading someone else's summary of it.</p>",
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
// hover. `phrase` must appear verbatim in PERSON.about. Hovering shows
// one print; moving within the phrase flips through its set.
//
// GENERATED by tools/sync-assets.py from assets/shots/about-me/<folder>.
// Drop a file into a folder and re-run it; do not edit this by hand.
// ─────────────────────────────────────────────────────────────────────
var ANNOTATIONS = [
  { "phrase":"Danielle Hon", "shots":[
    { "src":"assets/shots/about-me/me/me-01.jpg", "cap":"" },
    { "src":"assets/shots/about-me/me/me-02.jpg", "cap":"" },
    { "src":"assets/shots/about-me/me/me-03.jpg", "cap":"" },
    { "src":"assets/shots/about-me/me/me-04.jpg", "cap":"" },
    { "src":"assets/shots/about-me/me/me-05.jpg", "cap":"" }
  ]},
  { "phrase":"Los Angeles", "shots":[
    { "src":"assets/shots/about-me/la/la-01.jpg", "cap":"" },
    { "src":"assets/shots/about-me/la/la-02.jpg", "cap":"" },
    { "src":"assets/shots/about-me/la/la-03.jpg", "cap":"" },
    { "src":"assets/shots/about-me/la/la-04.jpg", "cap":"" },
    { "src":"assets/shots/about-me/la/la-05.jpg", "cap":"" }
  ]},
  { "phrase":"a well-cropped photo", "shots":[
    { "src":"assets/shots/about-me/details/photo-01.jpg", "cap":"" },
    { "src":"assets/shots/about-me/details/photo-02.jpg", "cap":"" },
    { "src":"assets/shots/about-me/details/photo-03.jpg", "cap":"" },
    { "src":"assets/shots/about-me/details/photo-04.jpg", "cap":"" },
    { "src":"assets/shots/about-me/details/photo-05.jpg", "cap":"" }
  ]},
  { "phrase":"a curated playlist", "shots":[
    { "src":"assets/shots/about-me/playlist/blush-album-cover.jpg", "cap":"" },
    { "src":"assets/shots/about-me/playlist/playlist-01.jpg", "cap":"" },
    { "src":"assets/shots/about-me/playlist/saturation-3-album-cover.jpg", "cap":"" }
  ]},
  { "phrase":"a tasteful landing page", "shots":[
    { "src":"assets/shots/projects/et-al/et-al-01.jpg", "cap":"et al." },
    { "src":"assets/shots/projects/et-al/et-al-logo.jpg", "cap":"et al." },
    { "src":"assets/shots/projects/contextforce/forty-pirates/forty-pirates-landing.jpg", "cap":"Forty Pirates" },
    { "src":"assets/shots/projects/contextforce/lexi/lexi-logo.jpg", "cap":"LEXI" },
    { "src":"assets/shots/projects/plan-my-courses/plan-my-courses-ui.jpg", "cap":"Plan My Courses" },
    { "src":"assets/shots/projects/contextforce/ai-vision-benchmark/ai-vision-benchmark-01.jpg", "cap":"AI Vision Benchmark" },
    { "src":"assets/shots/projects/contextforce/pdf-extractor-demo/pdf-extract-demo-01.jpg", "cap":"PDF Extractor Demo" }
  ]},
  { "phrase":"a Pinterest board at 1am", "shots":[
    { "src":"assets/shots/about-me/pins/pin-01.jpg", "cap":"" },
    { "src":"assets/shots/about-me/pins/pin-02.jpg", "cap":"" },
    { "src":"assets/shots/about-me/pins/pin-03.jpg", "cap":"" }
  ]},
  { "phrase":"tasting americanos at new cafes", "shots":[
    { "src":"assets/shots/about-me/coffee/coffee-01.jpg", "cap":"" },
    { "src":"assets/shots/about-me/coffee/coffee-02.jpg", "cap":"" },
    { "src":"assets/shots/about-me/coffee/coffee-03.jpg", "cap":"" }
  ]},
  { "phrase":"on a walk", "shots":[
    { "src":"assets/shots/about-me/walk/walk-01.jpg", "cap":"" },
    { "src":"assets/shots/about-me/walk/walk-02.jpg", "cap":"" }
  ]}
];


// ── generated block ends ──────────────────────────────────────────
