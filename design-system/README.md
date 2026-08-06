# Builder archive

The design system behind danielle-personal-website, pulled out so it can be
dropped into another project. Open `index.html` to see every piece rendered.

## Files

| File | What it holds |
| --- | --- |
| `tokens.css` | Variables, reset, type scale. No components. |
| `patterns.css` | 19 components, all reading from the tokens. |
| `index.html` | Live specimen page. Also the reference for markup. |

Load them in that order, then your own project stylesheet:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://api.fontshare.com">
<link rel="preconnect" href="https://cdn.fontshare.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500&family=IBM+Plex+Mono:wght@400;500&display=swap">
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600&display=swap">
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="patterns.css">
```

Add `class="js"` to `<body>` if you want the reveal-on-scroll, and drop
`<div class="grain">` and `<div class="gridlines">` in as the first two
elements.

## The idea

A page that reads as a publication rather than a portfolio. The reference is
cognition.com, measured rather than guessed at: headlines at 36px weight 400,
serif body under grotesk headings, a column grid drawn as visible hairlines,
a fixed sidebar, sections numbered in the margin, one warm paper, one accent
used only on links and live states.

## Rules

These are the parts that are not in the CSS.

**Restraint carries the hierarchy.** Headings are weight 400. If something is
not standing out, make it bigger or give it more space. Do not make it bolder.

**One accent, one job.** Cobalt marks what is live: links, hovers, the current
nav item, an active marker. It is never decoration. A page where the accent
appears in four unrelated places has lost the thread.

**Photographs are the system.** Type on grain is a beige page. The plates are
what make it a publication. If a project has no images, this system will look
unfinished, and the fix is images rather than more texture. That is the one
thing that reliably goes wrong.

**Metadata is mono, answers are serif.** A `.meta` label and a `.val` under it.
Mono never carries a sentence.

**Motion is felt, not watched.** One curve, nothing over 0.7s, nothing that
bounces or spins. Every effect is decoration over a page that already works,
which is why `prefers-reduced-motion` can remove all of it safely.

**Anchor overlays to the document.** Anything positioned near text, like the
photo prints, must be `position:absolute` against the page. `fixed` pins it to
the glass, so it sits still while the page scrolls underneath and drifts over
whatever arrives next.

**Never animate a metric on inline text.** Size, weight and font are off limits
for anything inside a paragraph. They reflow the line under the reader. Colour,
`background-size` and border colour are safe.

## Breakpoints

Three, each with a reason.

| Width | What changes |
| --- | --- |
| 900px | The drawn grid goes, the sidebar becomes a horizontal bar, content loses its offset. Six columns stop meaning anything below this. |
| 860px | Two-up collapses to one column. |
| 760px | Phone. Margin drops to 18px, the bar becomes a mark plus a menu button, metadata grows to 11.5px, taps get real padding. |

Sizes are clamps, so nothing between those points needs its own rule.

## Writing

The copy is part of the design. Sentence case headings, bold for labels only,
no em dashes. Direct and specific over impressive. Say "is", not "serves as".
Cut any sentence that only announces what the next one will say.

## Before you ship

- **Replace the display face.** `tokens.css` points at Phosphene, which has no
  licence metadata in this repo. Verify it or swap it. Deleting the `@font-face`
  and `.display` block loses nothing structural.
- **Check the accent against your paper.** Cobalt on `#F7F6F5` passes for body
  text. A lighter accent on the same ground will not.
- **Resize the photographs.** Plates render at a few hundred pixels. Shipping
  originals is how the home page reached 27MB in this project before they were
  cut to 800px and 1400px.
