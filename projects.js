// Single source of truth for the work cards.
// index.html renders [data-show="featured"]; work.html renders [data-show="all"].
var PROJECTS = [
  {"num": "001", "ph": "LEXI — SHOT 01", "cat": "AI PRODUCT", "code": "LX-24", "title": "LEXI", "desc": "A Chrome extension that embeds AI into everyday browsing — YouTube insights, GitHub code recognition and webpage extraction, with a configurable prompt manager.", "year": "2024 — NOW", "loc": "CONTEXTFORCE", "feat": true, "url": "project-001.html"},
  {"num": "002", "ph": "EXTRACTOR — SHOT 02", "cat": "APPLIED RESEARCH", "code": "CF-24", "title": "PDF Extractor Demo", "desc": "An API demo that ingests webpages, PDFs and YouTube transcripts, parses them into structured data and indexes them in Pinecone for semantic search and RAG.", "year": "2024", "loc": "CONTEXTFORCE", "feat": true, "url": "project-002.html"},
  {"num": "003", "ph": "CONVERTER — SHOT 03", "cat": "AI ENGINEERING", "code": "MD-24", "title": "PDF to Markdown", "desc": "An end-to-end pipeline converting unstructured PDFs to Markdown with AI-powered OCR — headers, tables, links and formulas, with LaTeX output. Shipped as an API and a Python SDK.", "year": "2024", "loc": "CONTEXTFORCE", "feat": false, "url": "project-003.html"},
  {"num": "004", "ph": "TEST SUITE — SHOT 04", "cat": "APPLIED RESEARCH", "code": "TS-24", "title": "PDF Parser Test Suite", "desc": "A benchmark comparing LlamaParse, ContextForce and Jina.ai across text, OCR, table and formula extraction — scored objectively by an LLM judge rather than by eye.", "year": "2024", "loc": "CONTEXTFORCE", "feat": true, "url": "project-004.html"},
  {"num": "005", "ph": "BENCHMARK — SHOT 05", "cat": "APPLIED RESEARCH", "code": "AV-24", "title": "AI Vision Benchmark", "desc": "A benchmark for AI vision models — an industry-focused test suite run against many models at once, scored by an LLM judge, deployed serverless on Cloudflare.", "year": "2024", "loc": "CONTEXTFORCE", "feat": true, "url": "project-005.html"},
  {"num": "006", "ph": "PLANNER — SHOT 06", "cat": "INTERFACE", "code": "CP-25", "title": "Course Planner", "desc": "A drag-and-drop degree planning tool with an auto-planning algorithm that sequences courses by prerequisite and difficulty. 80% faster in testing with 30+ students.", "year": "2025", "loc": "UCLA", "feat": true, "url": "project-006.html"},
  {"num": "007", "ph": "TERRALINK — SHOT 07", "cat": "AI ENGINEERING", "code": "TL-26", "title": "TerraLink", "desc": "A multi-agent sustainability advisor built at LA Hacks. Three autonomous Fetch.ai agents fetch live air quality, generate personalised carbon actions, and compose a shareable infographic card.", "year": "2026", "loc": "LA HACKS", "feat": true, "url": "project-007.html"}
];

(function(){
  var host = document.getElementById('cards');
  if (!host) return;
  var list = host.getAttribute('data-show') === 'all'
    ? PROJECTS : PROJECTS.filter(function(p){ return p.feat; });
  list.forEach(function(p){
    var a = document.createElement('a');
    a.className = 'card reveal';
    a.href = p.url;
    a.innerHTML =
      '<div class="imgbox"><span class="num">'+p.num+'</span><span class="imgph">'+p.ph+'</span></div>'+
      '<div class="cmeta"><span>[ '+p.cat+' ]</span><span>'+p.code+'</span></div>'+
      '<h3 class="ctitle">'+p.title+'</h3>'+
      '<p class="cdesc">'+p.desc+'</p>'+
      '<div class="crow"><span>'+p.year+'</span><span>'+p.loc+'</span></div>'+
      '<div class="cfoot"><span class="vc">VIEW CASE</span><span class="accent">+</span></div>';
    host.appendChild(a);
  });
})();
