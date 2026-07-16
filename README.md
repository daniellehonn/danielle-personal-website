# danielle-personal-website

One portfolio, several designs. The **content lives once**; each design only
decides how it looks.

```
shared/content.js      ← ALL the copy: PERSON + PROJECTS (incl. case studies)
assets/                ← shared images + the braille ASCII marks
  ascii/               ← swappable hero marks (see assets/ascii/README.md)
tools/make-ascii.py    ← generates a new ASCII mark from any image
index.html             ← the switcher — pick a design

micrographics/         ← design 01: Margiela / Muji, spec-sheet
conceptual-sketch/     ← design 02: notebook, drawn, handwritten
utilitarian/           ← design 03: technical manual, grid, industrial
scrapbook/             ← design 04: collage, tape, Polaroids, ransom-note
rebus/                 ← design 05: clean editorial, words become pictograms
micro-utilitarian/     ← design 06: hybrid — micrographics grid × utilitarian rigor
registry/              ← design 07: package catalogue (pi.dev / npm style)
```

Each design directory is the same three pages and nothing else:

| file | does |
|---|---|
| `index.html` | front page — featured work only |
| `work.html` | the full archive |
| `case.html` | any case study, via `case.html?p=<slug>` |
| `styles.css` | the whole look |
| `render.js` | turns `shared/content.js` into that design's HTML |

## Editing content

Everything is in **`shared/content.js`** — edit it once and both designs update.

- **Add a project**: append an object to `PROJECTS`. No page to write; both
  designs pick it up. Set `feat:false` to keep it in the archive only.
- **Unwritten copy**: wrap it in `<p class="todo">`. Every design styles that
  loudly on purpose so it can't ship by accident.

## Adding a design

Copy a design directory, rewrite `styles.css` and `render.js`, add it to the
switcher in `index.html`. Don't copy the content — read `shared/content.js`.

## Running it

No build step. Open `index.html`, or serve the folder
(`python3 -m http.server`). The designs need a server or `file://` both work.
