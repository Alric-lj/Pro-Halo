# halopro.app — brief for Claude Code

Static marketing site for **Halo Pro**, a macOS app that emulates film halation (and mist) in 32-bit float.
Owner: Alric Ljunghager (photographer, Stockholm). Hosted on GitHub Pages from `main` (CNAME halopro.app). No build step.

## Positioning (read first)
- Halo Pro is **not** an analog-mimic / "film look" app. It's a halation application that models how halation physically forms.
- The site's job: prove a deep understanding of the physics, then show it maps to the app's controls. Honest, friend-to-friend tone. No hype words.
- Art direction: a senior Scandinavian art director. Black, quiet, precise. Large light-weight grotesk, mono micro-labels, hairlines, one accent (halation red). Graphics explain; they never decorate.
- **Do not** bring back: darkroom/processing machines, roller processors, enlargers, dials, paper textures, stamps, tape, handwritten fonts, cream/terracotta palettes.
- Visual references: a single beam of light entering a layered film cross-section, reflecting off the back of the base, red glow spreading in the layers (dark background, grain, red/orange/white-hot).

## Physics the site must get right
1. Colour negative: blue-sensitive layer on top, yellow filter (stops blue), green-sensitive, red-sensitive closest to the base.
2. Light the emulsion can't absorb scatters into the clear base (~0.13 mm triacetate for 35 mm still film).
3. At the back of the base (base→air or pressure plate) light steeper than the critical angle θc ≈ 41.8° (n ≈ 1.5) is totally internally reflected.
4. Returning light enters the emulsion from below and hits the **red** layer first → red halo; strongest returns reach green → orange cores. Ring radius r ≈ 2·t·tan θc ≈ 0.23 mm.
5. Anti-halation layer (still film) / **remjet** (carbon black on the back of motion-picture base, removed in ECN-2) absorb this. Cinestill = remjet removed → strong halation.
6. Halo size is a property of the film, not the frame → relatively larger on 35 mm than on 6×7 or 4×5.
7. Mist (diffusion filter) acts in front of the lens — a different mechanism from halation.
Sources: lomography.com articles on the anti-halation layer, remjet, ECN-2 (linked in the footer).

## What the app actually does (don't overclaim)
Source code lives in `~/Documents/HALOPRO3 mythos 1` (PyQt5, Metal; private repo). The site describes the app repo's
**`main` branch** (1.0.0 + milestone 1). Facts checked against that code in October 2026:
- Pipeline: Exposure/Contrast → LUT if "Apply before halation" → Halation → Mist → LUT if not → Grain/Bloom.
  **One** LUT, before halation or after mist. float32 pixels throughout.
- The halation and mist blends keep values within white (0–1). Don't claim "values above white survive".
- Window: tabs Halation · Mist · Edit · Settings; Halation and Mist each have Effect | Masking panels.
  Simple mode: Glow, Color, Threshold, Highlight Roll-off. Use the app's exact labels (e.g. "Glow Size", "Color Shift").
- Glow Size is a percentage of the short side (slider 0–3.00). Typed values go up to **10×** the slider's end
  (halation/mist sliders only), decimal comma accepted.
- On main, several controls misbehave (fixed on the unreleased milestone-2 branch): "Anti-Halation: Removed" works
  backwards, Glow Threshold doesn't gate the glow, Visibility in Shadows, Soft Light/Overlay, Contrast < 1, Gamma > 1,
  Mist Softness. Don't present these as working; the page says so once, plainly.
- Mask views on keys 0–9 (Halation) and 0–2 (Mist). They are approximations on main; exact on milestone 2.
- I/O: 16-bit TIFF/PNG read at full depth (LZW TIFF reads at 8-bit); JPEG/BMP/WebP 8-bit; limits 100 MP / 500 MB
  per file. Export TIFF 8/16/32f, PNG 8/16, JPEG q95. The source ICC profile follows the pixels (no output choice;
  ProPhoto can be kept, converted to sRGB, or bypassed). EXIF/IPTC/XMP via bundled ExifTool.
- **No Lightroom plug-in.** "Lightroom Mode": a TIFF from Lightroom Classic's Edit In; "Save and return" writes a
  16-bit TIFF back. Pro-only. Batch Mode (2+ images, up to 500) is the other Pro gate. Everything else is in Free.
- macOS 14 Sonoma or later (true for the milestone-1 build; see HANDOFF.md before publishing), Apple Silicon only,
  notarized. v1.0 shipped 8 Sep 2026 (beta Feb 2026, started 2024).
- The app does NOT simulate base thickness, TIR rings or format size directly — the site explains physics, then maps it to controls.
- Screenshots in `img/app/` come from the real app; the capture tools live in the private app repo
  (`tools/website_shots/`) because they unlock Pro in memory. Never copy them into this public repo.

## Pricing (Gumroad, one-time)
Free €0 (personal use, no Lightroom Mode, no Batch Mode) · Halo Pro €20+ (paid work) · Organisation €60+ (studios). No refunds.
Links: `https://alriclj.gumroad.com/l/HALO_PRO?variant=<Halo%20Pro | Halo%20Pro%20-%20FREE | Halo%20Pro%20-%20Organisation>&wanted=true`

## Files
- `index.html` — single page, inline JS (hero canvas, before/after, panel switcher, light-path scroll steps + remjet toggle, scale figure, banding canvases, typed-value demo, menu).
  v4 order: Result → The app → Light path → Scale → Controls → Precision & files → Pro & pricing → Development.
- `style.css` — tokens in `:root`. Fonts: Inter Tight + IBM Plex Mono (Google Fonts). Red glow (`--glow`) only on display-size red type (owner's request).
- `img/app/` — real app screenshots and exports. `img/ex*`, `hero-wave.jpg` — older images, unused by v4. `_old/` — previous versions, reference only.
- `HANDOFF.md` — state of the v4 redesign, open decisions, publish checklist.
- The two SVG figures (light path, formats) were generated with a small Python script; edit the inline SVG directly now.

## Working rules
- Preview with `python3 -m http.server 8000`, check 1440px and 390px widths, no horizontal scroll, no console errors.
- Respect `prefers-reduced-motion`. Keep it a static site (no framework, no bundler).
- Don't push to `main` without Alric's OK — that publishes halopro.app.
