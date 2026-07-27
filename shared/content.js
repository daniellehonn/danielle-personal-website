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
  "intro": "I work at the intersection of product, AI and engineering — building intelligent tools with clarity and purpose. Currently studying at UCLA.",
  "about": [
    "I'm a product manager and AI engineer based in Los Angeles, studying at UCLA. My work spans product strategy, applied machine learning, and the interfaces that make complex systems feel simple.",
    "I care about shipping — turning research and ambitious ideas into real, useful software that people actually reach for."
  ],
  "story": [
    "Most of what's worth asking an AI lives in formats it can't read — PDFs, scans, transcripts, the open web. For the last two years that has been my problem to solve: not the model, but everything upstream of it that decides whether the model even has a chance.",
    "The work below is one arc, not a list. I co-founded ContextForce to chase accurate extraction, built the pipeline, then got stubborn about proving it worked before shipping it into something people actually use. The same instinct shows up everywhere I build: measure it, then make it feel effortless."
  ],
  "disciplines": [
    "Product Management",
    "AI Engineering",
    "Interface Design",
    "Applied Research"
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
  "linkedin": "https://www.linkedin.com/in/daniellehon/"
};

var PROJECTS = [
  {
    "slug": "lexi",
    "num": "001",
    "title": "LEXI",
    "cat": "AI PRODUCT",
    "code": "LX-24",
    "year": "2024 — 2025",
    "loc": "CONTEXTFORCE",
    "feat": true,
    "ph": "LEXI — SHOT 01",
    "desc": "A Chrome extension that embeds AI into everyday browsing — YouTube insights, GitHub code recognition and webpage extraction, with a configurable prompt manager.",
    "lead": "A Chrome extension that embeds AI into everyday browsing — YouTube insights, GitHub code recognition and webpage content extraction.",
    "sysid": "DH-24-001",
    "role": "PRODUCT + ENG",
    "timeline": "DEC 2024 — PRESENT",
    "stack": "JAVASCRIPT<br>CHROME APIS, LLM APIS",
    "status": "ONGOING",
    "problem": "<p>Using AI while browsing meant constant context-switching: copy a transcript here, paste a GitHub file there, re-describe the page you were already looking at to a model in another tab. The context the model needed was right in front of you, but getting it there was manual, lossy and slow.</p><p>Prompts made it worse. Everyone retyped the same instructions and got inconsistent output, with no way to save or tune what actually worked.</p>",
    "built": "<p>A Chrome extension that embeds AI directly into everyday browsing — pulling insights from YouTube, recognising code on GitHub, and extracting content from arbitrary webpages so it can be handed to a model without copy-paste.</p><p>On top of that sits a configurable prompt management system: users save, customise and tune their own prompts, so the quality of the LLM output is something they control rather than something the extension guesses at.</p>",
    "outcome": "<p>Beyond shipping the extension, LEXI was pushed toward a business: a market analysis to size the opportunity, a competitive pricing model, and API usage tracking wired in as the foundation for monetisation, turning a browser tool into something with a path to revenue.</p>",
    "chips": [
      "CHROME EXTENSION",
      "LLM APIS",
      "PROMPT ENGINEERING",
      "PRODUCT STRATEGY",
      "MARKET ANALYSIS",
      "MONETISATION"
    ],
    "links": []
  },
  {
    "slug": "pdf-extractor-demo",
    "num": "002",
    "title": "PDF Extractor Demo",
    "cat": "APPLIED RESEARCH",
    "code": "CF-24",
    "year": "2024",
    "loc": "CONTEXTFORCE",
    "feat": false,
    "ph": "EXTRACTOR — SHOT 02",
    "desc": "An API demo that ingests webpages, PDFs and YouTube transcripts, parses them into structured data and indexes them in Pinecone for semantic search and RAG.",
    "lead": "An API demo that ingests webpages, PDFs and YouTube transcripts, parses them into structured data and indexes them in Pinecone for semantic search and RAG.",
    "sysid": "DH-24-002",
    "role": "ENGINEERING",
    "timeline": "SEP 2024",
    "stack": "PYTHON, STREAMLIT<br>PINECONE, HUGGINGFACE",
    "status": "SHIPPED",
    "problem": "<p>Most of the knowledge worth asking an LLM about is locked in formats it can't read well — PDFs, scanned documents, transcripts. The text is there, but the structure that makes it meaningful (headers, tables, formulas, forms) is lost the moment you extract it naively, and a model given flattened output answers badly or not at all.</p><p>ContextForce was founded on that gap: the market needed genuinely accurate data extraction for AI applications, and PDFs were where existing tools failed hardest.</p>",
    "built": "<p>An API demo that ingests three messy input types — webpages, PDFs and YouTube transcripts — and parses each into structured data on the far side.</p><p>Parsed content is embedded with HuggingFace and indexed in Pinecone, which turns the corpus into something searchable by meaning rather than keyword. A semantic search retrieves the passages closest to a query and hands them to the model as context — the retrieval half of RAG.</p><p>The demo runs on Streamlit and is model-agnostic by design: the same retrieved context can be routed to OpenAI, Claude, Gemini or Groq — or to a Llama model served locally through Ollama — so the pipeline isn't bet on a single provider.</p>",
    "outcome": "<p>Showcased enterprise legal-tech applications to LegalZoom's Head of Data, positioning the prototype as a foundation for AI-driven knowledge management systems.</p>",
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
    "slug": "pdf-to-markdown",
    "num": "003",
    "title": "PDF to Markdown",
    "cat": "AI ENGINEERING",
    "code": "MD-24",
    "year": "2024",
    "loc": "CONTEXTFORCE",
    "feat": false,
    "ph": "CONVERTER — SHOT 03",
    "desc": "An end-to-end pipeline converting unstructured PDFs to Markdown with AI-powered OCR — headers, tables, links and formulas, with LaTeX output. Shipped as an API and a Python SDK.",
    "lead": "An end-to-end pipeline converting unstructured PDFs into clean Markdown — detecting headers, tables, links and mathematical formulas, with LaTeX output.",
    "sysid": "DH-24-003",
    "role": "ENGINEERING",
    "timeline": "SEP 2024",
    "stack": "PYTHON, GROQ (OCR)<br>CLOUDFLARE WORKERS",
    "status": "SHIPPED",
    "problem": "<p>Most of the knowledge worth asking an LLM about is locked in formats it can't read well — PDFs, scanned documents, transcripts. The text is there, but the structure that makes it meaningful (headers, tables, formulas, forms) is lost the moment you extract it naively, and a model given flattened output answers badly or not at all.</p><p>ContextForce was founded on that gap: the market needed genuinely accurate data extraction for AI applications, and PDFs were where existing tools failed hardest.</p>",
    "built": "<p>An end-to-end pipeline for unstructured PDF-to-Markdown conversion, using AI-powered OCR through GROQ to read the page rather than scrape it. It detects headers, tables, links and mathematical formulas, emitting formulas as LaTeX so the meaning survives the conversion instead of collapsing into loose text.</p><p>The pipeline is deployed as the ContextForce API on Cloudflare Workers — serverless, so it scales without infrastructure to babysit.</p>",
    "outcome": "<p>Published as a Python SDK for public use, so developers could integrate the parser directly rather than reimplementing it — turning an internal tool into something other people could build on.</p>",
    "chips": [
      "PYTHON",
      "OCR",
      "GROQ",
      "LATEX",
      "CLOUDFLARE WORKERS",
      "PYTHON SDK",
      "PROMPT ENGINEERING"
    ],
    "links": []
  },
  {
    "slug": "pdf-parser-test-suite",
    "num": "004",
    "title": "PDF Parser Test Suite",
    "cat": "APPLIED RESEARCH",
    "code": "TS-24",
    "year": "2024",
    "loc": "CONTEXTFORCE",
    "feat": false,
    "ph": "TEST SUITE — SHOT 04",
    "desc": "A benchmark comparing LlamaParse, ContextForce and Jina.ai across text, OCR, table and formula extraction — scored objectively by an LLM judge rather than by eye.",
    "lead": "A test suite that rigorously evaluates and compares leading PDF parsers — LlamaParse, ContextForce and Jina.ai — across text, OCR, table and formula extraction.",
    "sysid": "DH-24-004",
    "role": "ENGINEERING + RESEARCH",
    "timeline": "2024",
    "stack": "PYTHON, POETRY<br>OPENAI, PYTEST",
    "status": "SHIPPED",
    "problem": "<p>Every PDF parser claims to be the most accurate, and none of the claims are checkable. Choosing between LlamaParse, ContextForce and Jina.ai meant trusting marketing copy or eyeballing a handful of documents — neither of which tells you how a parser behaves on the cases that actually break: scanned pages, dense tables, mathematical formulas.</p>",
    "built": "<p>A test suite that benchmarks each parser across the four areas where they diverge: basic text extraction, OCR extraction, table extraction and formula detection. Defining those evaluation criteria was most of the work — deciding what &quot;correct&quot; means for a parsed table is harder than measuring it.</p><p>Testing is automated end-to-end with Pytest, and scoring is handed to an LLM rather than a human, so every parser is judged against the same rubric without the bias that creeps in when you already have a favourite.</p>",
    "outcome": "<p>Produced a corpus of deliberately complex PDFs that differentiates parsers precisely — published so other people can run their own evaluations against the same test data instead of starting from scratch.</p>",
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
    "slug": "ai-vision-benchmark",
    "num": "005",
    "title": "AI Vision Benchmark",
    "cat": "APPLIED RESEARCH",
    "code": "AV-24",
    "year": "2024",
    "loc": "CONTEXTFORCE",
    "feat": false,
    "ph": "BENCHMARK — SHOT 05",
    "desc": "A benchmark for AI vision models — an industry-focused test suite run against many models at once, scored by an LLM judge, deployed serverless on Cloudflare.",
    "lead": "A benchmark for AI vision models with an industry-focused test suite, run against many models at once and scored by an LLM judge.",
    "sysid": "DH-24-005",
    "role": "ENGINEERING + RESEARCH",
    "timeline": "2024",
    "stack": "SVELTE, JAVASCRIPT<br>CLOUDFLARE WORKERS AI",
    "status": "SHIPPED",
    "problem": "<p>Vision models were improving fast and impossible to compare. General benchmarks measure general ability, which tells you very little about whether a model can read an ecommerce listing or a legal document — and running the same test across several models meant wiring each one up by hand.</p>",
    "built": "<p>A benchmark built around three goals: a test suite with an industry focus rather than an academic one, a way to run the same tests against a list of models simultaneously, and an LLM evaluating the results to assign quality scores.</p><p>It covers the tasks vision models are actually asked to do — question answering, object detection, image-to-text description, counting, and generation — with Llava served through Cloudflare Workers AI.</p>",
    "outcome": "<p>Deployed serverless on Cloudflare with a Svelte interface, so the suite runs as a usable demo rather than a script — anyone can run the comparison instead of reading someone else's summary of it.</p>",
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
    "slug": "course-planner",
    "num": "006",
    "title": "Course Planner",
    "cat": "INTERFACE",
    "code": "CP-25",
    "year": "2025",
    "loc": "UCLA",
    "feat": true,
    "ph": "PLANNER — SHOT 06",
    "desc": "A drag-and-drop degree planning tool with an auto-planning algorithm that sequences courses by prerequisite and difficulty. 80% faster in testing with 30+ students.",
    "lead": "A drag-and-drop degree planning tool with an auto-planning algorithm that sequences courses by prerequisite and difficulty.",
    "sysid": "DH-25-006",
    "role": "DESIGN + ENG",
    "timeline": "JUN 2025",
    "stack": "JAVASCRIPT<br>GITHUB PAGES",
    "status": "SHIPPED",
    "problem": "<p>Planning a degree by hand is deceptively hard: prerequisite chains, offering cycles and workload all have to line up, and one ordering mistake can cost a whole quarter. Students end up managing it in spreadsheets, re-checking the same constraints every term, with no fast way to tell whether a plan is even valid.</p>",
    "built": "<p>A drag-and-drop degree planning tool: students arrange courses across terms directly, and the interface holds the constraints so they don't have to. Colour coding shows what's ready to take and dependency lines draw the prerequisite relationships, so an invalid plan looks wrong before it is wrong.</p><p>Behind it runs an auto-planning algorithm that sequences courses by prerequisite chain and difficulty, balancing workload across terms and generating a viable plan rather than leaving the student to solve the ordering by hand. Courses import from a spreadsheet template and plans export for reuse.</p>",
    "outcome": "<p>Reduced scheduling time by <strong>80%</strong> in testing with <strong>30+ students</strong>.</p>",
    "chips": [
      "DRAG & DROP",
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
    "slug": "terralink",
    "num": "007",
    "title": "TerraLink",
    "cat": "AI ENGINEERING",
    "code": "TL-26",
    "year": "2026",
    "loc": "LA HACKS",
    "feat": true,
    "ph": "TERRALINK — SHOT 07",
    "desc": "A multi-agent sustainability advisor built at LA Hacks. Three autonomous Fetch.ai agents fetch live air quality, generate personalised carbon actions, and compose a shareable infographic card.",
    "lead": "An AI-powered local sustainability advisor — three autonomous agents that fetch live air quality, generate personalised carbon-reduction actions, and compose a shareable infographic.",
    "sysid": "DH-26-007",
    "role": "ENGINEERING",
    "timeline": "APR 2026 — 36 HRS",
    "stack": "REACT, TYPESCRIPT<br>FASTAPI, FETCH.AI uAGENTS",
    "status": "PROTOTYPE",
    "problem": "<p>Climate advice is generic where the problem is local. Air quality data exists in public feeds and carbon guidance exists in listicles, but neither is grounded in where you actually are right now — so the advice arrives untethered from the conditions it's meant to respond to, and gets ignored.</p>",
    "built": "<p>You enter a city. Behind that single input, an orchestrator dispatches a pipeline of three autonomous agents, each with one job:</p><p><strong>Emissions Scout</strong> fetches live AQI from EPA AirNow, PM2.5 from Open-Meteo and CO₂ estimates — in parallel, so the slowest feed sets the pace rather than the sum of them. <strong>Action Router</strong> passes that real-time picture to ASI1 Mini and gets back three personalised, actionable recommendations grounded in the actual numbers. <strong>Media Composer</strong> renders the result as an infographic card through Cloudinary URL transformations, so the output is shareable rather than trapped in the app.</p><p>A FastAPI orchestrator coordinates the three over Fetch.ai's uAgents framework, and the front end is a React dashboard with a chat interface, live metrics panels and an action feed.</p>",
    "outcome": "<p>Built at LA Hacks 2026 as a 36-hour prototype: three autonomous agents coordinating over Fetch.ai uAgents to turn a single city into live air-quality data, personalised actions and a shareable infographic card.</p>",
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

// The narrative arc — one obsession, four moves, then range. Each node ties to
// a project slug so the story links straight into the work.
var ARC = [
  { "n":"01", "k":"PROBLEM", "t":"Knowledge machines can't read", "d":"PDFs, scans and transcripts lose their structure the moment you extract them naively.", "ref":"pdf-extractor-demo", "raw":"%PDF-1.7 4 0 obj <</Length", "parsed":"HEADER · TABLE · FORMULA" },
  { "n":"02", "k":"ENGINE", "t":"A pipeline that keeps structure", "d":"AI-OCR to clean Markdown and LaTeX, shipped as an API and a Python SDK.", "ref":"pdf-to-markdown", "raw":"\\begin{tabular}{|c|c|}", "parsed":"# Heading\n| col | col |" },
  { "n":"03", "k":"PROOF", "t":"Measure it, don't trust it", "d":"LLM-as-judge benchmarks that score parsers and vision models against a rubric.", "ref":"pdf-parser-test-suite", "raw":"claims: \"most accurate\"", "parsed":"SCORE 0.91 · VERIFIED" },
  { "n":"04", "k":"PRODUCT", "t":"Into the browser", "d":"LEXI brings AI into everyday browsing, with a real path to revenue.", "ref":"lexi", "raw":"copy → paste → re-explain", "parsed":"EXTRACT → MODEL → ANSWER" },
  { "n":"05", "k":"RANGE", "t":"Beyond the thread", "d":"Course Planner cut planning time 80%; TerraLink orchestrates three autonomous agents.", "ref":"course-planner", "raw":"spreadsheet + guesswork", "parsed":"VALID PLAN · 30+ USERS" }
];

// How I build — the high-level, agentic capabilities, each anchored to a project.
var CAPABILITIES = [
  { "k":"EVAL DESIGN", "t":"LLM-as-judge benchmarks", "d":"Score parsers and vision models against a rubric instead of trusting the marketing.", "code":"TS-24", "ref":"pdf-parser-test-suite" },
  { "k":"AGENT ORCHESTRATION", "t":"Multi-agent systems", "d":"Coordinate autonomous agents over one task with Fetch.ai uAgents behind a FastAPI orchestrator.", "code":"TL-26", "ref":"terralink" },
  { "k":"MODEL-AGNOSTIC", "t":"Provider-independent pipelines", "d":"Route the same retrieved context to OpenAI, Claude, Gemini, Groq, or a local Llama.", "code":"CF-24", "ref":"pdf-extractor-demo" },
  { "k":"PROMPT SYSTEMS", "t":"User-tunable prompting", "d":"Prompt management so output quality is something people control, not something a tool guesses.", "code":"LX-24", "ref":"lexi" },
  { "k":"STRUCTURED EXTRACTION", "t":"Structure-preserving OCR", "d":"AI-OCR that keeps headers, tables and formulas intact as clean Markdown and LaTeX.", "code":"MD-24", "ref":"pdf-to-markdown" }
];

function featured(p){ return p.feat; }
function bySlug(s){
  for (var i=0;i<PROJECTS.length;i++) if (PROJECTS[i].slug===s) return PROJECTS[i];
  return null;
}
