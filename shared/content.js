// ─────────────────────────────────────────────────────────────────────
// THE CONTENT. Every design reads from this file — edit copy here once
// and it lands in all of them.
//
// Each design owns only presentation: its HTML shell, CSS and render.js.
// Adding a project = one object in PROJECTS. There is no page to write.
// Project numbers are assigned by render.js in reading order (the
// timeline's projects first, then the archive), so they never skip.
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
// on the rule. Projects whose `loc` matches `workTag` (or the org) are
// listed under the entry.
// ─────────────────────────────────────────────────────────────────────
var EXPERIENCE = [
  {
    "year": "2023",
    "org": "ContextForce",
    "workTag": "CONTEXTFORCE",
    "role": "Co-Founder & Founding AI Engineer",
    "loc": "Los Angeles, CA",
    "period": "JUL 2023 — PRESENT",
    "note": "Started in my junior year of high school. An idea first, the engineering after.",
    "bullets": [
      "Co-own the Forty Pirates roadmap with my co-founder: PRDs and user stories, a success metric before anything is built, and a product review before each launch.",
      "Shipped the web app and iOS app through the App Store launch, with a catalog of 6,800+ places from 2,500+ creators' videos.",
      "Built the agents behind it: a conductor that routes travel requests to tool-calling agents, and SKILL.md playbooks that let agents run our data pipeline end to end.",
      "Built the evals the company's AI runs on: a harness that scores every prompt across models, and a regression test that caught a live bug in production."
    ]
  },
  {
    "year": "2025",
    "org": "University of California, Los Angeles",
    "shots": [
      {
        "src": "assets/shots/ucla/ucla-01.jpg",
        "cap": ""
      },
      {
        "src": "assets/shots/ucla/ucla-02.jpg",
        "cap": ""
      }
    ],
    "role": "B.S. Computer Science",
    "loc": "Los Angeles, CA",
    "period": "2025 — PRESENT",
    "note": "",
    "bullets": [
      "Coursework: Data Structures & Algorithms, Algorithms & Complexity, Discrete Structures, Computer Organization, Software Construction.",
      "Activities: Creative Labs @ UCLA tech board, LA Hacks 2026."
    ]
  },
  {
    "year": "2025",
    "org": "Creative Labs @ UCLA",
    "role": "Tech Board Director",
    "loc": "Los Angeles, CA",
    "period": "OCT 2025 — PRESENT",
    "note": "",
    "bullets": [
      "Lead and mentor 7 developers across 2 concurrent projects, running weekly sprint planning, design reviews and code review.",
      "Built a membership portal with a product manager and the design team, now used by 100+ members."
    ]
  }
];

var PROJECTS = [
  {
    "slug": "forty-pirates",
    "title": "Forty Pirates",
    "sub": "Social Video to Itinerary",
    "img": "assets/shots/projects/contextforce/forty-pirates/forty-pirates-landing.jpg",
    "cat": "CONSUMER PRODUCT",
    "year": "2025 — PRESENT",
    "loc": "CONTEXTFORCE",
    "desc": "Turns creators' travel videos into places on a map, on web and iOS. A ContextForce product: I co-own the roadmap and build the apps and the agents behind them.",
    "lead": "A travel planner that reads social video. Paste a reel and it lifts the places, food and activities onto a map you can plan around, each one credited to the creator who found it.",
    "role": "PRODUCT + MOBILE + AGENTS",
    "timeline": "2025 — PRESENT",
    "status": "LIVE",
    "problem": "<p>People plan trips out of screenshots: a restaurant in a saved reel, a neighborhood in a friend's story, none of it on a map.</p>",
    "built": "<p>Share a TikTok, YouTube or Instagram video and Forty Pirates pulls out the places, food and activities, maps them, and credits the creator. AI agents find new videos and grow the catalog region by region.</p>",
    "outcome": "<p>Live on the web and the <strong>App Store</strong>, with <strong>6,800+ places</strong> from <strong>2,500+ videos</strong> by 1,700+ creators.</p>",
    "chips": [
      "PRODUCT",
      "AI AGENTS",
      "MCP",
      "REACT",
      "REACT NATIVE",
      "SWIFTUI",
      "CLOUDFLARE WORKERS"
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
    "title": "LEXI",
    "sub": "Context-Aware Browsing",
    "img": "assets/shots/projects/contextforce/lexi/lexi-logo.jpg",
    "cat": "AI PRODUCT",
    "year": "2024 — 2025",
    "loc": "CONTEXTFORCE",
    "desc": "A published Chrome extension that brings AI to the page you're on: highlight anything, run your own saved prompts, and keep the results on your own machine.",
    "lead": "A Chrome extension that puts AI where you already are. Highlight on any page, run your own prompts, and keep what you find on your own machine.",
    "role": "PRODUCT + ENG",
    "timeline": "DEC 2024 — 2025",
    "status": "PUBLISHED",
    "problem": "<p>Using AI while browsing meant copying context into another tab and retyping the same prompts.</p>",
    "built": "<p>LEXI adds AI actions to YouTube, GitHub, Gmail and X, with a library of your own prompts and a knowledge base stored locally.</p>",
    "outcome": "<p>Published on the Chrome Web Store. I also sized the market, built a competitive pricing model, and wired in metered usage as the foundation for charging.</p>",
    "chips": [
      "CHROME EXTENSION",
      "LLM APIS",
      "PROMPT MANAGEMENT",
      "INDEXEDDB",
      "PRIVACY-FIRST"
    ],
    "links": [
      {
        "label": "CHROME WEB STORE",
        "url": "https://chromewebstore.google.com/detail/lexi-your-ai-your-workflo/iknkiofjpadlbanhkdnojnkdgiodbfek"
      }
    ]
  },
  {
    "slug": "pdf-to-markdown",
    "title": "PDF to Markdown",
    "sub": "Document Structure Engine",
    "img": "",
    "cat": "AI ENGINEERING",
    "year": "2024",
    "loc": "CONTEXTFORCE",
    "desc": "ContextForce's API that turns PDFs into Markdown with headers, tables and formulas intact. I added the LLM-based OCR.",
    "lead": "An API that turns PDFs into clean Markdown a model can actually read, with headers, tables, links and formulas intact.",
    "role": "ENGINEERING",
    "timeline": "AUG — OCT 2024",
    "status": "SHIPPED",
    "problem": "<p>Naive PDF extraction flattens the tables and formulas that make a document meaningful, and models answer badly from it.</p>",
    "built": "<p>The pipeline reads each page with OCR and vision-language models and outputs structured Markdown, with formulas as LaTeX. I added Gemini-based OCR with pages processed in parallel.</p>",
    "outcome": "<p>Shipped in ContextForce's API and Python SDK.</p>",
    "chips": [
      "PYTHON",
      "FASTAPI",
      "OCR",
      "VISION-LANGUAGE MODELS",
      "GEMINI"
    ],
    "links": []
  },
  {
    "slug": "pdf-parser-test-suite",
    "title": "PDF Parser Test Suite",
    "sub": "Parser Benchmark",
    "img": "",
    "cat": "APPLIED RESEARCH",
    "year": "2024",
    "loc": "CONTEXTFORCE",
    "desc": "A benchmark comparing LlamaParse, ContextForce and Jina.ai across text, OCR, table and formula extraction, scored by an LLM judge rather than by eye.",
    "lead": "A test suite that evaluates and compares leading PDF parsers, including LlamaParse, ContextForce and Jina.ai, across text, OCR, table and formula extraction.",
    "role": "ENGINEERING + RESEARCH",
    "timeline": "2024",
    "status": "SHIPPED",
    "problem": "<p>Every PDF parser claims to be the most accurate, and none of the claims are checkable.</p>",
    "built": "<p>A suite that benchmarks LlamaParse, ContextForce and Jina.ai on text, OCR, tables and formulas, scored by an LLM judge against one rubric.</p>",
    "outcome": "<p>Published with a corpus of deliberately difficult PDFs that anyone can run their own evaluation against.</p>",
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
    "problem": "<p>Before betting on any one piece of an extraction pipeline, I wanted to see the whole loop run end to end.</p>",
    "built": "<p>Ingests webpages, PDFs and YouTube transcripts, parses them into structured data, and indexes them in Pinecone for semantic search and RAG, with any model provider swappable.</p>",
    "outcome": "<p>I presented its enterprise legal-tech applications to LegalZoom's Head of Data, positioning it as a foundation for AI-driven knowledge management.</p>",
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
    "problem": "<p>Vision models were improving fast and impossible to compare on real industry tasks.</p>",
    "built": "<p>Runs the same industry-focused tests (question answering, detection, counting, description) against many models at once, scored by an LLM judge.</p>",
    "outcome": "<p>Deployed serverless on Cloudflare with a web interface anyone can use.</p>",
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
  },
  {
    "slug": "et-al",
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
    "desc": "My open-source knowledge base for AI agents. Save anything mid-scroll; agents like Claude Code file it, search it and manage tasks, with every edit waiting for my approval.",
    "lead": "A second mind you can actually see. Send anything to the inbox mid-scroll, and keep the whole workspace readable and operable by any AI.",
    "role": "PRODUCT + ENG",
    "timeline": "JUL 2026 — PRESENT",
    "status": "ONGOING",
    "problem": "<p>I lose things at the exact moment I find them. Every way of saving something mid-scroll costs me the scroll, so most of it goes nowhere.</p><p>The thing people reach for is a second brain. I think the concept is right and the ergonomics are backwards: the tools for feeding that second mind still make you do all the filing by hand, and if tending it is work, you stop tending it.</p>",
    "built": "<p>Anything I share from my phone lands in an inbox with no filing required. AI agents read and organize the workspace over MCP, and any change to my notes waits as a diff until I approve it.</p><p>It is not an AI app. The backend holds no model key at all: every piece of reasoning happens in an agent connecting from outside, so swapping which AI I use is a client change, not a migration.</p>",
    "outcome": "<p>Open source and used daily with Claude Code. Its own eval raised extraction recall from <strong>62% to 79–85%</strong>.</p>",
    "chips": [
      "MCP",
      "AI AGENTS",
      "TYPESCRIPT",
      "CLOUDFLARE WORKERS",
      "VECTORIZE",
      "NEXT.JS"
    ],
    "links": [
      {
        "label": "SOURCE",
        "url": "https://github.com/daniellehonn/et-al"
      }
    ]
  },
  {
    "slug": "course-planner",
    "title": "Plan My Courses",
    "sub": "Degree Planning System",
    "img": "assets/shots/projects/plan-my-courses/plan-my-courses-ui.jpg",
    "cat": "INTERFACE",
    "year": "2025",
    "loc": "UCLA",
    "desc": "An interactive degree planner that models prerequisites as a dependency graph. Students I tested with went from a multi-hour enrollment ritual to planning a full quarter in under 15 minutes.",
    "lead": "An interactive degree planner that models prerequisites as a dependency graph, measured against how long students actually spent before it.",
    "role": "DESIGN + ENG",
    "timeline": "JUN 2025 — PRESENT",
    "status": "SHIPPED",
    "problem": "<p>Planning a degree by hand means juggling prerequisite chains and unit limits in a spreadsheet, where one ordering mistake can cost a quarter.</p>",
    "built": "<p>Import your course history and the planner models prerequisites as a dependency graph, then generates a valid multi-quarter plan in under a second. No accounts: a plan fits in a share link.</p>",
    "outcome": "<p>Tested with <strong>30+ UCLA students</strong>: planning a quarter dropped by about <strong>80%</strong>, from hours to under 15 minutes.</p>",
    "chips": [
      "USER TESTING",
      "INTERFACE DESIGN",
      "GRAPH ALGORITHMS",
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
    "slug": "pagewise",
    "title": "Pagewise",
    "sub": "Cited Answers over Web Pages",
    "img": "",
    "cat": "AI ENGINEERING",
    "year": "2026",
    "loc": "PERSONAL",
    "desc": "A Java service that answers questions about any web page using only what the page says, with its sources cited.",
    "lead": "Ask a question about any web page and get an answer built only from what the page says, with its sources cited.",
    "role": "ENGINEERING",
    "timeline": "OCT 2026",
    "status": "COMPLETE",
    "problem": "<p>Ask a model about a web page and it answers whether or not the page says so.</p>",
    "built": "<p>Give it a URL and it strips the boilerplate, indexes the real content, and answers from the retrieved passages alone, citing each one. Embeddings run locally, so indexing is free.</p>",
    "outcome": "<p>Removing boilerplate cut the indexed chunks on a sample page by about two-thirds.</p>",
    "chips": [
      "RAG",
      "JAVA",
      "SPRING BOOT",
      "LANGCHAIN4J",
      "PGVECTOR"
    ],
    "links": [
      {
        "label": "SOURCE",
        "url": "https://github.com/daniellehonn/pagewise"
      }
    ]
  },
  {
    "slug": "terralink",
    "title": "TerraLink",
    "sub": "Multi-Agent Advisor",
    "img": "",
    "cat": "AGENT SYSTEMS",
    "year": "2026",
    "loc": "LA HACKS",
    "desc": "A multi-agent sustainability advisor built at LA Hacks. Three autonomous Fetch.ai agents fetch live air quality, generate personalized carbon actions, and compose a shareable infographic card.",
    "lead": "An AI-powered local sustainability advisor. Three autonomous agents fetch live air quality, generate personalized carbon-reduction actions, and compose a shareable infographic.",
    "role": "ENGINEERING",
    "timeline": "APR 2026 — 36 HRS",
    "status": "PROTOTYPE",
    "problem": "<p>Climate advice is generic, while air quality is local.</p>",
    "built": "<p>Enter a city and three autonomous agents take over: one fetches live air quality, one turns it into three personalized carbon-reduction actions, and one renders a shareable infographic.</p>",
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
