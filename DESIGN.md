---
name: Micro-Utilitarian — Danielle Hon Portfolio
description: A precision atelier catalogue — hard modular grid and giant numerals drawn in hairlines on cool off-white paper, with one rust stamp.
colors:
  rust: "#B83C24"
  teal: "#43616D"
  ink: "#17150F"
  paper: "#E7EAEC"
  panel: "#DFE3E5"
  body-soft: "#26241C"
  line: "#17150FE6"
  hair: "#17150F26"
  faint: "#17150F9E"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(46px, 8.4vw, 96px)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(18px, 2.4vw, 26px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "0"
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "0"
  body:
    fontFamily: "Switzer, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  none: "0px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "15px"
  gutter: "clamp(16px, 3vw, 52px)"
components:
  button-primary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "8px 14px"
  button-primary-hover:
    backgroundColor: "{colors.rust}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "8px 14px"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "5px 11px"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 15px"
  card-hover:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 15px"
  nav-link:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 15px"
  nav-link-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.rust}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 15px"
---

# Design System: Micro-Utilitarian — Danielle Hon Portfolio

## 1. Overview

**Creative North Star: "The Atelier Catalogue"**

This is a maker's specimen catalogue: the work numbered, coded, and filed the way Margiela files a garment or Muji files a product — as a specification, not an advertisement. Utilitarian's hard modular grid and giant Space Grotesk numerals are drawn in micrographics' hairlines on cool off-white paper, so the page reads like a precision data sheet produced by someone with an atelier's restraint. Structure is visible everywhere — a shared hairline grid, registration crosses in the corners, vertical system IDs running up the margins — but nothing shouts. The character comes from the paper and the craft, never from decoration.

The voice is **precise, clever, understated** (from PRODUCT.md). Cleverness lives in the details — a catalogue number, a rubber-stamp status, a monospace readout — not in effects that slow the reader down. Every project is a filed entry with a code (`DH-24-001`), a status, and a spec table; the format itself is the argument that this maker sweats the details.

This system explicitly rejects the four anti-references named in PRODUCT.md: the **generic template portfolio** (hero photo, three identical cards, buzzwords), **AI-generated slop** (cream-and-gradient, tracked eyebrows on every section, gradient text), the **corporate/SaaS landing page** (big-metric hero, feature grids, enterprise blue), and anything **overdesigned or try-hard** where motion and effects get in the way of the work.

**Key Characteristics:**
- Hard modular grid with shared hairline borders; sections divided by full-weight rules
- Cool off-white paper (`#E7EAEC`) with a barely-there fibre-grain + plotting-dot texture
- Three-voice type system: giant Space Grotesk numerals, IBM Plex Mono labels, Switzer body
- Rust (`#B83C24`) as a scarce accent — the one stamp, status, hover, and key CTA
- Flat by default; depth from line weight, with only a subtle hover lift
- Zero border-radius everywhere except the status dot

## 2. Colors

A cool off-white paper base carrying a structural teal and a single hot rust accent — restraint with one point of heat.

### Primary
- **Signal Rust** (`#B83C24`): The one hot mark. Used scarcely and deliberately — the rotated rubber-stamp status, the blinking status dot, link/nav hover, vertical system IDs, the `todo` unwritten-copy note, and key CTAs. It is allowed slightly more reach than a pure "one mark per view" doctrine, but it stays a clear minority color; its scarcity is what gives it force.

### Secondary
- **Structural Teal** (`#43616D`): The cool voice of structure. Carries every mono label, section kicker, spec-table key, and category tag. It organizes; it never decorates.

### Neutral
- **Cool Paper** (`#E7EAEC`): The body surface. A cool off-white — tinted very slightly toward the brand's teal, not toward warmth — carrying a very low-contrast fibre-grain + plotting-dot texture so it reads as paper, not screen.
- **Panel** (`#DFE3E5`): One step down from paper. The hover fill for cards and next-project rows — a tonal shift, not a shadow.
- **Ink** (`#17150F`): Near-black primary text and the source hue for every structural line.
- **Body Soft** (`#26241C`): Slightly lifted ink for long intros and case leads, so large body text sits a touch softer than headline ink.
- **Grid Line** (`#17150F` @ 90%, `#17150FE6`): The full-weight modular grid between sections. Present, but never a black slab.
- **Hairline** (`#17150F` @ 15%, `#17150F26`): Internal dividers, card borders, chip strokes — micrographics delicacy.
- **Faint** (`#17150F` @ 62%, `#17150F9E`): Metadata, codes, and footer readouts that must recede (raised from 48% to clear 4.5:1).

### Named Rules
**The One Stamp Rule.** Rust is a stamp, not a theme. It may carry the status mark, hover states, system IDs, and key CTAs — but if rust starts filling backgrounds or coloring body text, it has stopped being a stamp. Keep it a minority voice on every screen.

**The Line-Not-Slab Rule.** Structure is drawn in ink at 90% or lighter, never pure `#000`. The grid should feel etched, not printed as a black bar.

## 3. Typography

**Display Font:** Space Grotesk (fallback: sans-serif) — the utilitarian numerals and uppercase titles.
**Body Font:** Switzer (fallback: 'Helvetica Neue', Arial, sans-serif) — the humanist reading voice.
**Label/Mono Font:** IBM Plex Mono (monospace) — every label, code, spec, and readout.

**Character:** A three-voice split with real contrast on the axis, not three sans-serifs pretending to differ. Space Grotesk is the loud structural numeral; Switzer is the calm humanist paragraph; IBM Plex Mono is the instrument readout. Each font does exactly one job and never trades roles.

### Hierarchy
- **Display** (Space Grotesk 700, `clamp(46px, 8.4vw, 96px)`, line-height 0.9, letter-spacing -0.025em): The hero name and big case titles, uppercase. Capped at 96px — see the rule below.
- **Headline** (Space Grotesk 700, `clamp(18px, 2.4vw, 26px)`, uppercase): Section titles. Card numerals (`30px`) are the same voice at fixed size.
- **Title** (Space Grotesk 700, `20px`, line-height 1.05): Card and project-block titles.
- **Body** (Switzer 400, `15px`–`17px`, line-height 1.55–1.7): Reading copy; intros and case leads step up to `17`–`18px` in Body Soft ink. Max line length held near 65ch via `max-width: 520–680px`.
- **Label** (IBM Plex Mono 400/500, `10`–`11px`, letter-spacing 0.14–0.16em, uppercase, teal): Kickers, codes, nav, spec keys, chips, footer meta.

### Named Rules
**The 96px Ceiling Rule.** Display type never exceeds 96px (6rem) at its clamp max. Above that the page is shouting, not designing. (The current hero name clamps to 104px — bring it to 96px on the next pass.)

**The One-Job Rule.** Space Grotesk numbers, Plex Mono labels, Switzer prose. A label never appears in Switzer; body copy never appears in mono. The three voices stay in their lanes.

## 4. Elevation

Flat by default. Depth is conveyed entirely through the shared hairline grid and border weight — full-weight rules (`Grid Line`) separate major sections, hairlines (`Hairline`) divide interior cells. There are no resting drop shadows anywhere in the system. The single exception to pure flatness is the sticky header, which uses a translucent paper background (`rgba(231,234,236,.9)`) with `backdrop-filter: blur(6px)` so content passes softly beneath it, and a light hover lift on interactive surfaces.

### Named Rules
**The Flat-With-a-Lift Rule.** Surfaces are flat at rest — depth comes from lines, not shadows. State is allowed to lift: cards and next-project rows shift to `Panel` on hover, and a small `translateY` on interactive elements is permitted. Any resting `box-shadow` on a card, button, or input is forbidden; if a surface looks lifted while idle, the shadow is wrong.

## 5. Components

### Buttons
The system has no filled "button" primitive; calls to action are bordered monospace links (case-study links, the stamp).
- **Shape:** Hard corners, zero radius (`0px`).
- **Primary:** A `1px` `Grid Line` border, transparent/paper fill, IBM Plex Mono uppercase label, padding `8px 14px`. Adjacent links share edges via negative margins (`margin: 0 -1px -1px 0`) so they tile into the grid.
- **Hover / Focus:** Fill flips to `Signal Rust`, text to `Cool Paper`, border to rust. A clean state flip, no glow.
- **Stamp variant:** The status marker — a `1.5px` rust border, rust text, uppercase mono, rotated `-1.4deg` with a blinking rust dot. One per hero.

### Chips
- **Style:** `1px` `Hairline` border, paper fill, IBM Plex Mono `10px` uppercase, padding `5px 11px`. Tiled with negative margins so a chip cluster reads as a single ruled block.
- **State:** Static tags; no selected/unselected filter states in this system.

### Cards / Containers
- **Corner Style:** Hard corners, zero radius.
- **Background:** `Cool Paper` at rest, `Panel` on hover.
- **Shadow Strategy:** None — see Elevation. Depth is the shared `Hairline` grid (`border-right` + `border-bottom` on each cell, so the grid draws itself).
- **Border:** Hairline cell borders; a giant Space Grotesk numeral top-left, mono code top-right.
- **Internal Padding:** `12–15px`; footer row separated by a top hairline.
- **Media slot (empty state):** No photo placeholder and never diagonal stripes. The image slot renders a **schematic spec plate** — a teal `STACK` label over the project's tech stack in mono. On a case cover the same idea scales to an engineering **title block** (the drawing code big, then class · year) centered on a faint registration crosshair. An empty slot must communicate real project data, so it reads as intentional, not "missing image".

### Inputs / Fields
No form inputs exist in this system. If added, follow the doctrine: hard corners, `1px` `Grid Line` stroke, paper fill, and a border shift to `Signal Rust` on focus (never a glow or ring).

### Navigation
- **Style:** A thin sticky instrument bar — brand wordmark left, mono nav right, each nav link separated by a `Hairline` left-border.
- **Typography:** IBM Plex Mono `11px`, uppercase, letter-spacing 0.14em.
- **States:** Default ink; hover flips to `Signal Rust`. Sticky with blurred translucent paper background.
- **Mobile:** The centre system-status bar hides below 720px; brand + nav remain.

### Signature Component — The Data Plate Hero
A two-column hero (`2fr / 1fr`): the left "main" cell holds the index number, giant uppercase name, intro, and rotated rust stamp; the right "side" column stacks mono spec rows (`ROLE`, `BASE`, etc.) divided by hairlines, plus a mark image. A vertical rust system ID (`writing-mode: vertical-rl`) runs up the right margin. Registration crosses tick the corners. This plate is the system's identity in miniature — reuse its structure for section heroes.

## 6. Do's and Don'ts

### Do:
- **Do** draw structure with lines: full-weight `Grid Line` (`#17150FE6`) between sections, `Hairline` (`#17150F26`) within them. The grid is the design.
- **Do** keep `Signal Rust` (`#B83C24`) a minority accent — stamp, status dot, hover, system IDs, key CTAs — and let its scarcity carry the weight.
- **Do** keep every corner at `0px` radius (the status dot is the only exception).
- **Do** hold body measure near 65ch with `max-width: 520–680px`.
- **Do** keep the three type voices in their lanes: Space Grotesk numerals, IBM Plex Mono labels, Switzer body.
- **Do** convey state with a tonal shift to `Panel` and a small hover lift — never a resting shadow.

### Don't:
- **Don't** let this drift into a **generic template portfolio** — hero photo over three identical cards with buzzwords. The catalogue format is the anti-template.
- **Don't** ship **AI slop tells**: gradient text, cream-plus-gradient palettes, or tracked all-caps eyebrows above every section. (The mono kicker here is a deliberate, single, named system — not per-section scaffolding.)
- **Don't** turn this into a **corporate/SaaS landing page**: no big-metric hero template, no repeated feature-card grids, no enterprise blue.
- **Don't** **overdesign** — no decorative animation, glassmorphism as default, or effects that slow the reader. Motion is the blinking status dot and the hover lift, nothing more.
- **Don't** exceed `96px` on display type, and never tighten display letter-spacing past `-0.04em`.
- **Don't** add a resting `box-shadow` to any card, button, or input; if a surface looks lifted while idle, remove the shadow.
- **Don't** color body text or fill backgrounds with rust; it is a stamp, not a theme.
- **Don't** use `repeating-linear-gradient` diagonal stripes or "DROP IMAGE" boxes as media placeholders; render a schematic spec plate (stack readout / title block) instead.
