# danielle-personal-website

A personal site built as a publication. One content file, four pages, no
build step: open `index.html` and it runs.

```
shared/content.js     all the copy and every image path
render.js             every page's rendering, one block per section
styles.css            the whole design
index.html            cover + experience + archive + about, one scroll
experience.html       the timeline on its own
archive.html          the project list on its own
about.html            the about page on its own
project.html          a single project, read from ?p=<slug>
assets/shots/         photographs, in folders that decide where they appear
assets/fonts/         Phosphene, the display face
assets/vendor/        lenis.min.js, the only third-party script
design-system/        the design pulled out so other projects can use it
tools/sync-assets.py  rewrites the image paths from what is on disk
resume.pdf
```

On a phone the home page is the cover alone and the nav goes to the real
pages, so the one-page scroll is desktop only.

## Adding photographs

The folder decides which hover a photograph belongs to:

| folder | reveals under |
|---|---|
| `assets/shots/about-me/me` | Danielle Hon |
| `assets/shots/about-me/la` | Los Angeles |
| `assets/shots/about-me/details` | a well-cropped photo |
| `assets/shots/about-me/playlist` | a curated playlist |
| `assets/shots/about-me/pins` | a Pinterest board at 1am |
| `assets/shots/about-me/coffee` | tasting americanos at new cafes |
| `assets/shots/about-me/walk` | on a walk |
| `assets/shots/ucla` | the UCLA entry on the timeline |

Drop a file in, then:

```
python3 tools/sync-assets.py
```

That rewrites the generated block in `shared/content.js` and reports
anything referenced but missing. Do not edit those paths by hand.

## Adding a project

One object in `PROJECTS` in `shared/content.js`. Nothing else: the
archive, the project page and the next-project link all read from it.
Projects whose `loc` matches an experience entry are listed under that
entry on the timeline and left out of the archive, so nothing repeats.

## The flourishes

The scrollwork on the cover is generated, not drawn. Guide circles are
laid down invisibly and every visible stroke is a tangent between two of
them, with control points perpendicular to each radius, so the curve
leaves and arrives along the circle and the whole figure flows as one
hand. It is grown once, hidden, and revealed as the cursor moves or the
page scrolls. `STYLE` at the top of that block is the only thing worth
touching: density, straight lines, flourishes, blank areas, line
thickness, and whether strokes are drawn once or sketched twice.
