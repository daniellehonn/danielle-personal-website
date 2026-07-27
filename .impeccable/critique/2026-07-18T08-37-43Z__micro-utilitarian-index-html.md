---
target: micro-utilitarian/index.html
total_score: 36
p0_count: 0
p1_count: 1
timestamp: 2026-07-18T08-37-43Z
slug: micro-utilitarian-index-html
---
Method: dual-agent (A: design review · B: detector + browser evidence)

# Critique (re-run) — Micro-Utilitarian Portfolio

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | Live UTC clock, blinking AVAILABLE stamp, OPEN status — the metaphor pulls its weight. |
| 2 | Match System / Real World | 4 | Data-sheet grammar consistent; body copy plain and human. |
| 3 | User Control and Freedom | 4 | Nav, back-to-index, next-project; bad `?p=` slug redirects to work.html. |
| 4 | Consistency and Standards | 4 | One of the tightest token systems reviewed. |
| 5 | Error Prevention | 3 | Bad slug handled, but silently. |
| 6 | Recognition Rather Than Recall | 4 | Persistent nav, labeled specs. |
| 7 | Flexibility and Efficiency | 3 | No filter/search, but a 7-item catalogue doesn't need it. |
| 8 | Aesthetic and Minimalist Design | 4 | Strong; docked slightly for the duplicative gallery filler. |
| 9 | Error Recovery | 3 | The 404 → work.html redirect is silent, no message. |
| 10 | Help and Documentation | 3 | Largely n/a for a portfolio. |
| **Total** | | **36/40** | **Excellent — up from 31. Remaining drag is product imagery + a couple of curation nits.** |

## Anti-Patterns Verdict — Does this look AI-generated? **No.**

Both assessments independently confirm a genuine point of view. Cool grey paper (not cream), no gradient text, no identical card grid (cards share hairline borders into one modular plate), no SaaS hero. Tracked mono eyebrows are *systematized* as data-sheet labels (SYS. ID, FIG 01, REV 1.0, UTC clock), not decoration. Rust is genuinely scarce. Reads as "precise, clever, understated."

**Detector** (`detect.mjs`, exit 2 — 4 findings): `overused-font` ×3 (Space Grotesk, on the reflex-reject list — but committed identity, so identity-preservation applies) + `numbered-section-markers` ×1 (advisory; deliberate here — 001/002 part-numbers and [02] section index are the schematic conceit, not editorial scaffold). Rendered DOM also carries **8 em-dashes** in body prose — borderline stylistic, down from 17 after the placeholder-label removal. No gradient text, no stripe backgrounds, no ghost-cards, no huge radii.

## Progress since the last run (31 → 36)

Every fix verified live by both assessments:
- **Contrast** — all pass now. `.ccode` metadata **4.77:1** (was 3.11), rust `.stamp` **4.68:1** (was 4.23), teal labels 5.48, body 10–15:1. (Two clear 4.5 marginally at small sizes.)
- **Hero CTA** — `mailto:daniellehon@gmail.com` present above the fold on both the stamp and the "Get in touch →" line; footer too. Recruiter <30s now gets name, role, AVAILABLE, and a working email above the fold.
- **Empty state** — zero "missing image" reads: card slots render a STACK spec plate, case covers an engineering title block. The stripe placeholders (a codex tell) are gone entirely.
- **Case copy** — **0 `todo` blocks** render; all problem/built/outcome fields written.
- **Hero ceiling** — `<h1>` computes exactly **96px** at desktop (at the ceiling, not over).
- **M×U codename** dropped → "REV 1.0". No horizontal overflow at any width.

## Overall Impression

The design system is now excellent and the credibility gap has narrowed sharply. The one honest remaining weakness is unchanged in kind: **there is not a single product visual anywhere.** The spec-plate solution converts that absence into a deliberate, elegant motif — good enough to mask it on a skim — but a skeptical engineering leader who clicks in to *see* LEXI or Course Planner gets a rendered monogram, not the product. Everything else is now curation polish.

## What's Working

1. **The spec-plate solution to empty slots.** Card slots show STACK + tech; case covers show the project code as a title block. Zero "missing image" reads — the absence of photography became a data-sheet motif. (Both agents flagged this as the standout.)
2. **One-Stamp restraint.** The rotated AVAILABLE stamp is the single loud element on the hero; everything else is ink/teal on paper.
3. **Deliberately engineered contrast.** Source comments show `--faint` .48→.62 and rust #C1432A→#B83C24 specifically to clear 4.5:1 — small mono metadata is legible, not washed-out.

## Priority Issues

**[P1] No product visuals anywhere; the case gallery duplicates the spec row.**
- *Why it matters:* For "an AI engineer with product taste," recruiters (and especially eng leaders) want to see shipped UI. Worse, the case-page gallery FIG 02 / FIG 03 currently just re-print ROLE and TIMELINE already shown ~200px above in the specs row — pure filler introduced by the plate treatment.
- *Fix:* Add one real screenshot per shipped project (Course Planner and LEXI have live/extension UIs). If a real image genuinely isn't available, make FIG 02/03 *additive* — an architecture sketch or a metric callout (Course Planner's "80% faster / 30+ students") — instead of restating specs.
- *Command:* `$impeccable delight` (metric/architecture plates) or supply screenshots + `$impeccable polish`.

**[P2] Home card numbering has a visible gap (001, 002, 004…).**
- *Why it matters:* Archived project 003 is hidden but the fixed `num` leaves a hole a detail-oriented recruiter parses as "something's missing," not "curated."
- *Fix:* Render a display index independent of the archive `num`, or keep 003 visible in Selected Work.
- *Command:* `$impeccable layout` (or a small render.js change).

**[P2] "Selected Work" is 6 of 7 — an inventory, not a selection.**
- *Why it matters:* Featuring everything-but-one undercuts the "selected/curated" claim and dilutes the strongest work.
- *Fix:* Feature the 3 strongest (LEXI, Course Planner with the 80% metric, TerraLink); archive the rest to Full Index.
- *Command:* `$impeccable distill`.

**[P3] Redundant dual email CTAs in the hero.**
- *Why it matters:* The stamp and "Get in touch" both `mailto:` the same address, and the stamp doesn't visually read as clickable. Mild ambiguity.
- *Fix:* Make the stamp a status indicator (non-link) and keep the one explicit email CTA, or give them distinct jobs (e.g., stamp = status, link = email).
- *Command:* `$impeccable clarify`.

**[P3] Silent 404 handling.** Invalid `?p=` redirects to work.html with no message. Low impact; consider a brief "case not found" note.

## Persona Red Flags

**Recruiter <30s:** Wins now — name, role, AVAILABLE, and a working email are all above the fold; the spec panel delivers the résumé summary at a glance. The only drag: clicking a project for proof yields a code plate, not the product.

**Riley (stress tester):** Notices the 001→002→004 numbering gap immediately and the FIG 02/03 gallery repeating the specs row; clocks that there are zero product screenshots.

**Jordan (first-timer):** The stamp-as-link plus two email CTAs may briefly muddy "where do I click"; otherwise the giant name + intro orient instantly. Low risk.

**Casey (mobile):** Clean. Single-column collapse works, email CTA above the fold (~374px), no horizontal overflow, sysbar/sysid correctly hidden. No red flags. (Verified at 500px effective, not true 390px — tooling floor.)

## Minor Observations

- Hero name computes exactly 96px at desktop (at the ceiling, compliant); 46px mobile.
- The `.todo` guardrail style now exists in CSS but is unused — nothing unwritten ships.
- Cycling ink-cat respects `prefers-reduced-motion` (holds cat01).
- 9–10px mono metadata is small but legible given the data-sheet conceit.

## Questions to Consider

1. A portfolio for an AI engineer with *product taste* contains no product — can the cases survive a recruiter who wants to *see* the thing, or is the data-sheet metaphor an elegant way around never taking a screenshot?
2. If "Selected Work" is 6 of 7, is it a selection or an inventory with one thing hidden — what does featuring everything say about editorial confidence?
3. The gallery restates ROLE and TIMELINE from 200px above. In a system this disciplined, why leave the one instance of duplication — scaffolding never removed, or a belief it earns its space?
