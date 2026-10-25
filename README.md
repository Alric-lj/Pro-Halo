# Halo Pro Website

Marketing / launch page for **Halo Pro** — film halation & mist emulation for macOS (Apple Silicon).

- **Live URL:** https://halopro.app
- **Repo:** https://github.com/Alric-lj/Pro-Halo
- **Current:** Version 1.0 launch page, September 2026 (lab-paper theme)

## Structure

```
index.html            # Single page, all sections + inline JS (compare slider, "beyond the slider" demo)
style.css             # All styles. Light "lab paper" theme, ink drawings, stamps
img/                  # Web-optimised images (hero-wave.jpg, ex1/ex2 before/after)
Before after/         # Original comparison JPGs (source for img/)
favicon.svg, apple-touch-icon.png, og-image.png
CNAME, robots.txt, sitemap.xml
_old/                 # Previous (dark, tabbed) site for reference
```

## Sections

1. Hero — v1.0 stamp, wave print, buy / free CTAs
2. No. 01 What halation is — SVG film cross-section (3 emulsion layers) + live canvas "halation lab" (threshold / spread / dye / roll-off)
3. No. 02 Why float — canvas banding comparison (quantised vs continuous, exaggeration slider) + falloff graph
4. Fig. 03 Before / after slider (two examples)
5. No. 04 Use cases — Analog / Realistic / Experimental
6. No. 05 Legroom — interactive "type past the slider" demo + dial drawing
7. No. 06 Processing line — roller-transport processor SVG mapped to the pipeline
8. No. 07 Pricing — Free / €20 / €60 (Gumroad deep links) + honesty box
9. No. 08 Requirements, enlarger SVG, log
9. CTA, footer

## Design

- Paper `#ecebe6` (cool grey-white), ink `#15171a`, halation crimson `#c8323f`, stamp red `#b3202f`, pencil notes `#4d5157`
- Fonts (Google): Source Serif 4 (text), IBM Plex Mono (labels), Caveat (handwritten notes)
- Drawings are inline SVG using the `.ink`, `.ink-thin`, `.ink-dash`, `.glow-stroke` classes
- Subtle animations (rollers, film path, lamp, needle) respect `prefers-reduced-motion`

## Links

| | |
|---|---|
| Gumroad product | https://alriclj.gumroad.com/l/HALO_PRO?layout=profile |
| Pro (€20) | `?variant=Halo%20Pro&wanted=true` |
| Organisation (€60) | `?variant=Halo%20Pro%20-%20Organisation&wanted=true` |
| Free | `?variant=Halo%20Pro%20-%20FREE&wanted=true` |

## Deploy

Push to `main` — GitHub Pages serves it. No build step.

## To update

- Version / date: hero stamps, JSON-LD `softwareVersion`/`datePublished`, footer, log list
- Prices: the three `.tier` cards + JSON-LD offers
- Images: drop new JPGs in `img/` and update `ex` map in the inline script
