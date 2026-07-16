# Hero ASCII marks

Each file here is one braille-ASCII mark. Exactly one is used at a time.

## Switching

Change the filename in **one line** of `index.html`, near the bottom:

```html
<script src="assets/ascii/cat-outline.js"></script>
```

Swap `cat-outline` for any name below and reload. Nothing else changes.

| file | what it is |
|---|---|
| `cat-outline.js` | **current** — traced from `cat01.png` (the clean vector cat). Crispest lines. |
| `cat-brush.js` | traced from `cat02.png`. Softer, wobblier — the brush character survives. |
| `cat-pencil.js` | traced from `cat03.png`. Sketchier, whiskers more prominent. |
| `cat-solid.js` | filled rather than traced. Reads as grey mush — see below. |
| `clover.js` | the original hero mark, kept for reference. |

## Adding a new one

```bash
python3 tools/make-ascii.py assets/some-image.png my-mark --mode outline
```

Then point the `<script src>` at `assets/ascii/my-mark.js`.

Flags: `--mode outline|solid`, `--res 96` (dot grid), `--thresh 140` (0–255 ink cutoff;
lower catches only darker pixels). macOS only — it shells out to `sips`.

## Two things worth knowing

**Use `outline`, not `solid`.** A braille cell is dots with gaps between them, so a
"filled" area only reaches about 50% ink coverage and renders as grey texture rather
than black. Braille draws lines well and masses badly. `cat-solid.js` is kept only to
show the difference.

**Source images with transparency need flattening.** `cat02.png` and `cat03.png` are
transparent PNGs, and `sips` composites alpha onto *black* when writing a BMP — which
inverts the whole image into an ink field and traces a frame around the border. The
tool routes through JPEG first to flatten onto white. If a new mark comes out as a
framed rectangle of noise, that's the cause.

## Sizing

`.markwrap` hugs the mark horizontally, so any width fits — the current set renders
213–320px wide at 12px IBM Plex Mono (~8.2px per column). Its height is fixed at 300px
so swapping marks doesn't shift the hero vertically; keep marks under ~22 rows.

A much wider mark will squeeze the name column beside it — the hero grid gives the mark
its min-content width. If that happens, drop `--res` or lower `.catascii`'s font-size in
`styles.css`.

The mark is hidden below 1240px, so it never has to survive a phone.
