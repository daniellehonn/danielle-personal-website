# Shot list

Everything on the site is rendered `grayscale(1) contrast(1.3)` with a halftone
screen over it. Colour is thrown away. What survives is **contrast, shape and
composition**. Shoot accordingly: hard light beats soft, texture beats flat,
one clear subject beats a busy frame.

Format: JPEG, quality ~70, longest edge 1600px, under ~300KB.
Drop the file at the exact path and it appears. No code change.

---

## 1. About page hover figures — highest impact, do these first

Eight phrases in the About copy reveal an image when hovered. These are
currently placeholder cats. They are phone photos, not a production shoot.

Plate is **vertical 4:5**. Caption is written by you in `ANNOTATIONS`
(`shared/content.js`) and is the personality, so write it in your voice:
not "coffee" but "Maru, Sawtelle, third americano".

| Phrase in the copy | Wants | Path |
|---|---|---|
| Danielle Hon | 3 portraits. Unposed, working, mid-laugh, from behind. Bad lighting is fine. | `assets/shots/me-01.jpg` … `me-03.jpg` |
| Los Angeles | Your LA, not the postcard. A specific corner, an overpass, your block. | `assets/shots/la-01.jpg` |
| a well-cropped photo | One of your own photographs, the one you are proudest of. | `assets/shots/photo-01.jpg` |
| a curated playlist | Screenshot of a real playlist. Track names visible. | `assets/shots/playlist-01.jpg` |
| a tasteful landing page | Already filled with Forty Pirates and LEXI. Swap if you have better. | *(done)* |
| a Pinterest board at 1am | Screenshot of an actual board. The messier the truer. | `assets/shots/pinterest-01.jpg` |
| tasting americanos at new cafes | The cup, the table, the light. Overhead or three-quarter. | `assets/shots/coffee-01.jpg` |
| on a walk | Something you noticed and stopped for. | `assets/shots/walk-01.jpg` |

**8 files.** Add more per phrase by appending to that phrase's `shots` array;
re-hovering cycles through them.

---

## 2. Project hero plates — three missing

Full-width figure at the top of a project page. **Horizontal 16:10.**
Not a mockup. Abstract or tactile: a close crop, a texture, a detail that
suggests the work without illustrating it.

| Project | Idea | Path |
|---|---|---|
| et al. | Keyboard edge, cable, notebook under raking light. | `assets/shots/et-al-hero.jpg` |
| PDF to Markdown | Paper. A stack, an edge, a shadow across a page. | `assets/shots/pdf-to-markdown-hero.jpg` |
| TerraLink | Sky, haze, a rooftop. Something atmospheric. | `assets/shots/terralink-hero.jpg` |

Forty Pirates, LEXI and Plan My Courses already have theirs.

---

## 3. Project story plates — do the top three only

Each project page has four more slots. Nine projects times four is thirty-six
images, which is not worth it. Do these for **et al., Forty Pirates and
Plan My Courses** and leave the rest as position marks.

All **horizontal 16:10**. Replace `SLUG` with `et-al`, `forty-pirates`,
`course-planner`.

| Slot | Wants | Path |
|---|---|---|
| Research A | Your actual notebook pages. Wireframes, arrows, crossings-out. Shot flat, natural light, notebook edges in frame. | `assets/shots/SLUG-research-a.jpg` |
| Research B | Whatever came before the shipped thing. Rough build, whiteboard, mind map. | `assets/shots/SLUG-research-b.jpg` |
| Design | A detail of the interface, cropped in tight. One interaction, close. Not a full screen. | `assets/shots/SLUG-design.jpg` |
| Engineering | An architecture diagram you draw. Boundaries, data flow, where the agent sits. Export flat on `#F7F6F5`. | `assets/shots/SLUG-arch.jpg` |

**12 files** for three projects.

---

## Priority

1. **The eight About figures.** One afternoon with a phone. Biggest return,
   because it powers the feature that makes the page feel alive.
2. **Three project heroes.** Same afternoon.
3. **et al. architecture diagram.** The single most useful engineering
   image on the site, and you already have the material in the repo README.
4. Everything else, whenever.

## Not on this list, but worth having

A black and white portrait. The About page currently has no photograph of
you at all. The copy is personal enough now that a face would suit it, and
the layout has room in the empty right column.
