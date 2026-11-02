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
Source code lives in `~/Documents/HALOPRO3 mythos 1` (PyQt5, Metal; private repo). The site describes **Halo Pro 2.2.0
beta** (app `main`, 2 Nov 2026; DMG in its `releases/`). Facts checked against that code and its manual
(`halo_pro/resources/manual.html`); the change spec and reviews are in the app repo `docs/designs/website-2.2.md`.
- Pipeline: Exposure/Contrast → LUT if "Apply before halation" → Halation → Mist → LUT if not → Bloom/Grain.
  **One** LUT. float32 throughout. The glow is measured on the photo as opened (Exposure/LUT don't move it).
- Halation 2.x: worked out in linear light with the file's own tone curve (the file's own primaries, so not yet the
  same glow colour in every colour space); adds light only where the glow spreads past a bright area; tight core +
  soft tail (a bell, not a TIR ring); blue light makes no glow. Default width/strength were tuned against measured
  reference looks (don't name or headline the comparison). The Default look also has Warmth on highlights 1
  (bright surfaces a touch warmer, blue down up to ~6/255) and Mist on at Density 0.30.
- 32-bit float TIFF export keeps light above white, unless the LUT after mist, or Bloom, clips it; 8/16-bit clip.
  Fringing and Lens Smear work on the halation glow itself; Mist, Grain and Bloom are separate stages.
- Window: tabs Halation · Mist · Edit · Settings; Halation and Mist each have Effect | Masking panels. Halation ›
  Effect: Glow (Amount 0–2, Size 0.25–16, Format menu Super 8, 16 mm, 35 mm, 645, "6x6 / 6x7" (one entry), 4x5,
  Roll-off), Start (Starts at, stops below white, default 1.9; Softness of start), Color & Landing (Green return,
  Landing, Warmth on highlights, Glow color, Color mix, Glow saturation). Advanced: Secondary Glow, Smooth wide glow,
  Soft fall-off, Fringing (Distance, Direction, Softness), Lens Smear, masking groups. Use the exact labels.
- Gone since 1.x: Glow Threshold, Color Shift, Glow Boost, Anti-Halation, Highlight Cutoff (halation), Visibility in
  Shadows, Blend Mode, Edges. No backing control: Amount sets how much light comes back.
- Format sizes (short side): Super 8 4.01, 16 mm 7.49, 35 mm 24, 645 41.5, 6x6/6x7 56, 4x5 102 mm.
- Views: Halation 0–8 (1 Source, 2 Energy, 3 Luminance Range, 4 Sky, 5 Color, 6 Final, 7 Glow Preview, 8 Smear),
  Mist 0–2; exact, preview only. Halation glow controls stop at their slider range; most others take 10x typed.
- I/O: JPEG, PNG, TIFF, BMP, WebP up to 100 MP / 500 MB; 16-bit TIFF/PNG at 16 bits; 32-bit and half-float TIFF open;
  no raw/HEIC, no transparency. Export TIFF 8/16/32f, PNG 8/16, JPEG q95 full chroma; 8-bit dithered. Source ICC kept;
  ProPhoto kept or converted to sRGB on import. EXIF/IPTC/XMP via ExifTool (says when a file's could not be copied).
- Preview glows like the export at any size; Accurate (P) renders full resolution (true 1:1 only with it on).
- Speed: a 12 MP export about 0.9 s on an M3 Max since 2.1 (2.0: ~1.1 s; 1.x: 1.2–1.7 s). GPU for glow, mist and LUT.
- **No Lightroom plug-in.** "Lightroom Mode": a TIFF from Lightroom Classic's Edit In; "Save and return" writes a
  16-bit TIFF back. Pro-only. Batch Mode (2+ images, up to 500; loading stops below 1.5 GB free RAM) is the other
  Pro gate. Everything else is in Free (with a licence screen at launch). Key: on the Gumroad download page.
- macOS 14 or later, Apple Silicon only, notarized. v1.0 8 Sep 2026; 2.0 beta 31 Oct, 2.1 1 Nov, 2.2 2 Nov 2026.
  Known limits (say them): fine diagonal stripes can band; Size above ~5 can land unevenly on faces and trees.
- Coming next (release notes): new control panel with Film/Creative sections and starting looks; a better big glow,
  a halation ring, light streaks, oval glow, white bloom; colour management (same glow colour everywhere, EXR,
  HEIC, raw). Frame streaks/oval/bloom as creative tools, not physics.
- Screenshots in `img/app/` and light renders in `img/light/` come from the real app; the capture tools live in the
  private app repo (`tools/website_shots/`) because they unlock Pro in memory. Never copy them into this public repo.

## Pricing (Gumroad, one-time)
Free €0 (personal use, no Lightroom Mode, no Batch Mode) · Halo Pro €20 (paid work) · Organisation €60 (studios). No refunds.
No pay-what-you-want wording on the site (owner, 2 Nov 2026), although Gumroad shows its own "+".
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
