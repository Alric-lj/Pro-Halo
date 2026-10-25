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
Source code lives in `~/Documents/HALOPRO3 mythos 1` (PyQt5, Metal). Facts used on the site:
- Pipeline: Exposure → LUT (optional) → Halation → Mist → LUT (optional). Float32 throughout, stage cache.
- Halation controls: threshold + feather, spread (default **percentage of the short side**), dye base → dye target shift, highlight roll-off, secondary glow, shadow visibility, blend (screen/soft light/overlay), fringing, lens smear, edge detection, luminance range, sky protection, colour mask. Simple/Advanced mode.
- Any slider value can be typed past the slider range (click the value label).
- Mist: density, spread, softness, tint, turbulence (seeded), own threshold.
- I/O: TIFF/PNG 16-bit read at full depth, JPEG; export TIFF 8/16/32f, PNG 8/16, JPEG; ICC embedded; EXIF/IPTC/XMP via bundled ExifTool; sRGB/Adobe RGB/ProPhoto.
- Lightroom Classic Edit In round-trip; batch up to 500 images.
- macOS 12+, Apple Silicon M1–M5, notarized. v1.0 September 2026 (beta Feb 2026, started 2024).
- The app does NOT simulate base thickness, TIR rings or format size directly — the site explains physics, then maps it to controls.

## Pricing (Gumroad, one-time)
Free €0 (personal, no LR plug-in, no batch) · Halo Pro €20+ (one user, commercial) · Organisation €60+.
Links: `https://alriclj.gumroad.com/l/HALO_PRO?variant=<Halo%20Pro | Halo%20Pro%20-%20FREE | Halo%20Pro%20-%20Organisation>&wanted=true`

## Files
- `index.html` — single page, inline JS (hero canvas, light-path scroll steps + remjet toggle, scale figure, before/after, banding canvases, legroom demo).
- `style.css` — tokens in `:root`. Fonts: Inter Tight + IBM Plex Mono (Google Fonts).
- `img/` — before/after pairs. `_old/` — previous versions, reference only.
- The two SVG figures (light path, formats) were generated with a small Python script; edit the inline SVG directly now.

## Working rules
- Preview with `python3 -m http.server 8000`, check 1440px and 390px widths, no horizontal scroll, no console errors.
- Respect `prefers-reduced-motion`. Keep it a static site (no framework, no bundler).
- Don't push to `main` without Alric's OK — that publishes halopro.app.
