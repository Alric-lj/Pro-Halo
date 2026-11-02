# Halo Pro Website

Marketing page for **Halo Pro**: film halation and mist for macOS (Apple Silicon).

- **Live URL:** https://halopro.app (GitHub Pages from `main`)
- **Repo:** https://github.com/Alric-lj/Pro-Halo (public)
- **Current work:** v4 on branch `redesign-v4`: a page that shows the real app, updated for Halo Pro 2.2 beta. See `HANDOFF.md`.

## Structure

```
index.html     # Single page, all sections + inline JS
style.css      # All styles; tokens in :root
img/app/       # Real Halo Pro 2.2 screenshots and exports
img/light/     # Light rendered through Halo Pro 2.2 (hero lettering, light bars)
gumroad/       # The Gumroad product landing page (source, images, build script)
img/           # Older images (unused by v4)
Before after/  # Original example photos (source for the screenshots)
_old/          # Previous site versions, reference only
favicon.svg, apple-touch-icon.png, og-image.png, CNAME, robots.txt, sitemap.xml
```

## Sections (v4)

1. Hero: canvas of light returning through film; Buy Pro / Free; a one-line Free vs Pro
2. 01 Result: before/after of real exports (snow, Saab) + two mask views
3. 02 The app: the Lightroom Mode window with four callouts; a switcher for the five panels
4. 03 Light path: scroll diagram + remjet toggle; each step names its control
5. 04 Scale: halo size vs frame size
6. 05 Controls: film mechanism → app control (with app paths), three recipes
7. 06 Precision & files: banding demo, typed-value demo, what goes into the file
8. 07 Pro & pricing: licence, Lightroom Mode, Batch Mode; the three tiers; requirements
9. 08 Development: dated tracker, 2.x and what is next, ideas
10. Closing, footer

## Design

Black, quiet, precise. Inter Tight + IBM Plex Mono. One accent: halation red, with a soft glow on display-size
red type. Graphics explain; they don't decorate.

## Links

| | |
|---|---|
| Gumroad product | https://alriclj.gumroad.com/l/HALO_PRO?layout=profile |
| Pro (€20) | `?variant=Halo%20Pro&wanted=true` |
| Organisation (€60) | `?variant=Halo%20Pro%20-%20Organisation&wanted=true` |
| Free | `?variant=Halo%20Pro%20-%20FREE&wanted=true` |

## Preview and deploy

`python3 -m http.server 8000`, check 1440 and 390 px. Push to `main` to publish (owner's OK only).

## Screenshots

The images in `img/app/` are regenerated from the app with `tools/website_shots/run.sh` in the private app repo.
