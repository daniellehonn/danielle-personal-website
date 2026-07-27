---
target: micro-utilitarian/index.html
total_score: 31
p0_count: 1
p1_count: 3
timestamp: 2026-07-17T09-35-49Z
slug: micro-utilitarian-index-html
---
Method: dual-agent (A: design review · B: detector + browser evidence)

# Critique — Micro-Utilitarian Portfolio (home + work + case)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | Live UTC clock, blinking status dot, hover feedback. Excellent for a static site. |
| 2 | Match System / Real World | 3 | Instrument/data-sheet metaphor is consistent, but decorative jargon (SYS. ID, M×U / REV 1.0, DOC — INDEX) means nothing to a recruiter. |
| 3 | User Control and Freedom | 3 | Clear nav, case back-link, next-case loop. Adequate at this scale. |
| 4 | Consistency and Standards | 4 | Rigorously consistent type/border/color system across all pages. |
| 5 | Error Prevention | 3 | Largely n/a; `case.html` redirects unknown slugs to work.html — a real guard. |
| 6 | Recognition Rather Than Recall | 3 | Card numbers/codes aid scanning, but "SHOT 01" placeholders ask the viewer to imagine the product. |
| 7 | Flexibility and Efficiency | 3 | "Full Index →" shortcut, direct email link. No search, fine here. |
| 8 | Aesthetic and Minimalist Design | 4 | Strong restraint, clear hierarchy. The register's peak — dampened only by contrast misses. |
| 9 | Error Recovery | 2 | n/a for a content site. |
| 10 | Help and Documentation | 2 | n/a; About + specs serve as orientation. |
| **Total** | | **31/40** | **Good (upper end — held back by placeholder content + a few contrast misses, not by the design)** |

## Anti-Patterns Verdict

**Does this look AI-generated? No.** This is a confident, human-authored register that actively evades every anti-reference: cool #E7EAEC paper (not cream), no gradient text, no floating identical card grid (cards share a zero-gutter hairline grid — an anti-template move), and a specific, coherent "atelier catalogue / instrument panel" concept (registration crosses, vertical SYS. ID, live UTC clock, document codes, a rotated rust rubber stamp, cycling ink cats). The One Stamp Rule is genuinely honored. A discerning reviewer says "someone with taste made this."

**Deterministic scan** (`detect.mjs`, exit 2 — 4 findings): `overused-font` ×3 (Space Grotesk via Google Fonts, on the reflex-reject list) at index/work/case:13; `numbered-section-markers` ×1 (advisory) at index.html. Because render.js injects the body at runtime, the static scan under-counts — the rendered DOM also carries em-dash overuse (17), tracked-uppercase teal eyebrows, heavy numbered markers, `repeating-linear-gradient` stripe placeholders, and a decorative dot-grid/grain body texture.

**Reading the scan honestly:** most of what the detector flags — numbered markers, tracked mono labels, the dot-grid texture, the stripe boxes — are *deliberate, on-register* choices for a data-sheet aesthetic, not slop. Two are worth acting on: the **17 em-dashes** (a genuine AI-cadence copy tell, easy to trim) and, more importantly, the **contrast misses** the browser pass surfaced (below). Space Grotesk is a committed part of the existing identity, so identity-preservation applies — note it, don't churn it.

**Contrast evidence (browser, vs paper #E7EAEC):**
- `--faint` mono metadata (`.ccode`, 10px) — **3.11:1, FAIL** (worst offender; tiny text).
- Rust stamp text (11px) — **4.23:1, FAIL (narrow)**.
- Rust `.todo` blocks (14px) — **4.23:1, FAIL (narrow)**.
- Passing comfortably: `.hintro` 12.9, `.cdesc` 10.6, `.hspec .v` 15.1, teal `.k`/`.ctag` 5.5.

No horizontal overflow at desktop or mobile; hero `<h1>` now renders at **96px** (ceiling fix confirmed live).

## Overall Impression

The design system is genuinely excellent — distinctive, disciplined, on-brief for "precise, clever, understated." The gap is not craft, it's **credibility of content**: six striped placeholder boxes stand in for all project imagery, and visible unwritten-copy `todo` blocks ship on the flagship case study. A recruiter who skims the home page leaves impressed; a recruiter who clicks into LEXI (card 001) hits a rust italic "Only you can write this…" and leaves uncertain. The single biggest opportunity: make the work *look shipped* (imagery + finished copy) so the design's confidence is backed by proof.

## What's Working

1. **Instrument-panel hero + One Stamp Rule.** Rust is scarce and therefore powerful; the "AVAILABLE — NEW PROJECTS" stamp is the loudest element and the most useful recruiter signal. Restraint doing real work.
2. **Zero-gutter shared-hairline modular grid.** Cards, specs, and the about table read as one engineered sheet — structurally distinctive, and it degrades cleanly to a single column on mobile with the same border logic.
3. **Content-driven architecture with a real safety rail.** All copy lives in `shared/content.js`; `todo` blocks are styled loudly in rust so unwritten copy "can't ship by accident" — a clever self-disciplining decision (currently shipping anyway, which is exactly why the rail exists).

## Priority Issues

**[P0] Placeholder diagonal-stripe boxes stand in for all project imagery.**
- *Why it matters:* On a brand-register portfolio the work imagery IS the proof. Six empty boxes on the home grid + a full-bleed empty cover on every case page make shipped work look unbuilt — the biggest gap between "looks designed" and "is credible."
- *Fix:* Add real screenshots/exports for at least the 6 featured projects (one strong hero shot per card transforms the grid). If imagery genuinely isn't ready, replace stripes with a richer empty state — a project-colored mono diagram or the key metric as a callout — so an empty slot still communicates.
- *Command:* `$impeccable polish` (or `$impeccable delight` for the empty-state treatment).

**[P1] Visible `todo` unwritten-copy blocks on live case studies.**
- *Why it matters:* LEXI's Problem and Outcome, TerraLink's Outcome, and Course Planner's Problem render as rust italic "Only you can write this…" on the live site. The flagship case reads as a draft — undermines "an AI engineer with product taste." (They also fail contrast at 4.23:1.)
- *Fix:* Write the four missing blocks (surrounding copy already implies the answers — market analysis/pricing/usage-tracking for LEXI, the LA Hacks result for TerraLink). Better still, have render.js refuse to render (or hide) a case that still contains a `todo`, so the discipline is enforced, not just styled.
- *Command:* `$impeccable clarify`.

**[P1] No email CTA above the fold.**
- *Why it matters:* Primary conversion per PRODUCT.md is email, but it appears only in the footer. A <30s recruiter never scrolls there. The most confident moment — the "AVAILABLE — NEW PROJECTS" stamp — is a dead end (not a link).
- *Fix:* Make the stamp a `mailto:` link, or add a hairline "→ daniellehon@gmail.com" affordance beside it in the hero. Also confirm the address: `PERSON.email` is daniellehon@gmail.com while your global config lists rayhon1014@gmail.com.
- *Command:* `$impeccable onboard` (or `$impeccable clarify`).

**[P1] Low-contrast faint metadata.**
- *Why it matters:* The `--faint` mono metadata (card codes, footer meta) is 10px at **3.11:1** — below the 4.5:1 body threshold and hard to read, especially on the recruiter's fast skim. The rust stamp/todo text also sit narrowly under (4.23:1).
- *Fix:* Darken `--faint` from `rgba(23,21,15,.48)` toward ~`.62` (or a solid ~#5A5750) to clear 4.5:1; nudge rust for text use to ~#B23C25 so the stamp clears 4.5:1 without leaving the hue.
- *Command:* `$impeccable audit` (or `$impeccable colorize`).

**[P2] Decorative valleys and inside-baseball codes.**
- *Why it matters:* The case-study `.cover` is `clamp(220px,32vw,420px)` of striped nothing — the tallest element carries zero information and pushes real content down. Separately, exposing the internal design-system codename "M×U / REV 1.0" to recruiters adds parse cost with no payoff.
- *Fix:* Until imagery exists, shrink the cover or fold the first real screenshot / a headline metric (LEXI usage, "80% faster / 30+ students") into it. Rename or drop "M×U / REV 1.0"; keep the atmospheric codes that support the concept.
- *Command:* `$impeccable layout` (valley) + `$impeccable quieter` (codes).

## Persona Red Flags

**Recruiter skimming <30s (project persona):** Gets name, role, "AVAILABLE," and six credible project titles with real tech — good. But finds **no clickable contact above the fold**, **no imagery** to confirm the work is real, and if she clicks the top project she hits a TODO. Likely leaves without emailing because the CTA never met her where she was looking.

**Jordan (first-timer):** Hits "SYS. ID — DH-26-001", "M×U / REV 1.0", "DOC — INDEX" with no idea what they mean; sees six striped boxes and wonders if the site is still loading.

**Riley (stress tester):** Clicks LEXI (001) → "DROP COVER IMAGE" + a rust "Only you can write this…" TODO → concludes the portfolio is unfinished. The "Next case" element loops 007 → 001 endlessly with no index escape on that control.

**Casey (mobile):** Single-column degrade is clean and borders hold, but the sysbar and vertical rust sys-id are `display:none`, so mobile loses some of the concept, and six striped placeholders stack into a long empty scroll before any real proof or the footer email.

## Minor Observations

- Home grid numbers read 001, 002, **004**, 005, 006, 007 — featured sequence skips 003 (archive-only). Reads as a gap to a careful viewer; renumber featured cards contiguously or embrace the catalogue-with-gaps logic explicitly.
- Two blinking dots (header + stamp) — fine, but watch the One Stamp Rule doesn't drift into "one twitch too many."
- Good a11y baseline: `prefers-reduced-motion` holds cat01 static; decorative marks are `aria-hidden`.
- Email address mismatch between `shared/content.js` and global config — confirm the canonical one.

## Questions to Consider

1. What if the "AVAILABLE" rust stamp *were* the primary CTA — a mailto that reacts on hover? The most confident element currently does nothing.
2. If design IS the product here, do striped placeholders ship the opposite message? Would one real screenshot per card do more than any grid refinement?
3. Should render.js simply refuse to render a case that still contains a `todo` — so the discipline is enforced, not just styled?
4. Could the biggest empty valley (the case cover) become where a metric lives — turning dead space into the strongest proof point?
