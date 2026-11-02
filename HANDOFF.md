# Handoff: halopro.app v4, updated for Halo Pro 2.2 beta (2 Nov 2026)

Branch `redesign-v4` (built on `redesign-v3`). Nothing is pushed; `main` (the live site) is untouched.

## What v4 is

A page that shows the real app instead of describing it. Order:

1. **Result**: before/after of real 2.2 exports (Saab, snow) at the Default look with Mist off, plus two mask views.
2. **The app**: the actual window in Lightroom Mode, four callouts, and a switcher for the five panels.
3. **Light path**: the scroll diagram and remjet switch, each step naming its control.
4. **Scale**, 5. **Controls** (film mechanism → app control, with app paths; three recipes),
6. **Precision & files**, 7. **Pro & pricing** (licence, Lightroom Mode, Batch Mode, tiers, requirements),
8. **Development**: the tracker is back, dated, honest about what is fixed and what isn't.

Red text has a soft red glow (your request), on headings only.

Every factual line was checked against the app's `main` branch by independent reviewers (see "How it was made").
On 2 Nov 2026 the page was brought to **2.2.0 beta**: every picture re-shot or re-rendered from 2.2 (window, panels,
exports, mask views, light bars, hero lettering, og-image), copy and controls rewritten to the 2.2 panel, beta and
known limits stated, a note for 1.x owners. Spec and reviews: app repo `docs/designs/website-2.2.md`.

## View it

```
python3 -m http.server 8000
```

Then http://localhost:8000 on the Mac, or http://<Mac's Wi-Fi IP>:8000 on your phone (same Wi-Fi).

## Before you publish (merge to main and push)

The page describes **Halo Pro 2.2.0 beta** (`releases/Halo-Pro-2.2.0-beta-2026-11-02.dmg` in the app repo). It says
"2.2 beta" in the nav, hero, structured data and closing line, and "2.2 is a free update in your Gumroad library".

1. Put the 2.2 beta DMG on Gumroad (the file there, "Halo Pro.dmg", 205.7 MB, matched no release on 2 Nov).
2. Update the Gumroad landing page from 2.1 to 2.2 (`gumroad/`, see below) and republish it.
3. Buy Pro once yourself and check that the key on the Gumroad download page unlocks Lightroom Mode and Batch Mode
   on a clean Mac.
4. Decide about the Patreon line inside the app (Halation panel and manual: "Support development at
   patreon.com/Halo_Pro"); the site has no Patreon.
5. Then merge `redesign-v4` into `main` and push.

More detail, including things that shouldn't sit in this public repo, is in the app repo:
`docs/website-v4-private-notes.md`.

## Decisions for you

- **No refunds** next to a beta. The page states the beta and its known limits next to the prices and keeps pushing
  people to try Free first; consider a refund window anyway.
- **Physics vs the engine.** The page explains the film ring (03) and says plainly in 05 that 2.2's glow is a core
  and tail tuned against measured reference looks, with a true ring on the roadmap. Change that line when the ring
  ships.
- **Old roadmap ideas** (online presets, grain, ProRes, DaVinci, Windows, Intel) are listed as "Idea, not
  scheduled". Remove any you don't want public.
- **Licence terms**: the page says "one person", "for a studio or company", "licensed for paid work", "free
  updates in your Gumroad library". Add Macs per licence or seats if you have a rule.

## Gumroad product page (live since 2 Nov 2026)

`https://alriclj.gumroad.com/l/HALO_PRO` now shows a custom landing page (Gumroad product `btgaby`) instead of the
old 1.0 description. It describes **2.1 beta**, with real 2.1 exports (startup look) and the 2.1 window.
- Source: `gumroad/landing.src.html` + `gumroad/img/`; `python3 gumroad/build.py` inlines the images into
  `gumroad/landing.html` (Gumroad's limit is 500,000 characters; it is ~400 KB).
- Gumroad CLI (`brew install antiwork/cli/gumroad`, signed in): preview without publishing
  `gumroad products page preview btgaby ./gumroad/landing.html --json --no-input --non-interactive` (check
  `.sanitization_report`, must be 0 removed), publish with `page publish`, undo with `page clear btgaby --yes`.
- Prices and buy buttons are Gumroad fields: variants "Halo Pro", "Halo Pro - FREE", "Halo Pro - Organisation".
  Verified: Get Halo Pro and Download Free open checkout with the right variant (`?wanted=true&variant=…`).
  Cloudflare's human check stopped the test before the checkout form: click through once yourself.
- **Open:** the DMG on Gumroad ("Halo Pro.dmg", 205.7 MB) matches no release in the app repo; make sure it is the
  2.1 beta the page describes. The product is renamed "Halo Pro" (2 Nov); its short summary still reads
  "PRO HALO 1.0 Beta" (`gumroad products update btgaby --custom-summary "…"`).

## Things only you can add

- A wedding/editorial example with skin, white fabric and practical lights (the strongest ask from the reviews).
- One real Lightroom Classic Edit In → Save and return run, to confirm the 16-bit round trip end to end.
- A line or a frame from another working photographer, if you want peer proof.

## How it was made

- Research: five readers mapped the app (UI, engine, pro workflow, status, site history); every claim was
  fact-checked by a separate agent against the source.
- Elephant-Goldfish: a spec, eight zero-context reviewers, resolutions, then the build, then six reviewers on
  the built page, then a final claims and QA check. The spec and review log live in the app repo
  (`docs/designs/website-v4.md`), not here.
- Screenshots: `img/app/` comes from the real app window and real exports. Redo them with
  `tools/website_shots/run.sh` in the app repo (keep that folder out of this repo: it unlocks Pro in memory).

## Known leftovers

- No-JS: on phones the menu needs JavaScript (desktop nav links show without it).
- The light-path SVG labels are small at 1440 px (about 9 px).
- The scale section's "× 1.00" factors have no starting Glow Size.
- `img/ex*.jpg` and `img/hero-wave.jpg` are no longer used; delete when you like.
- The example look leaves a faint warm cast away from the lights (1.0's threshold); milestone 2 may change it.
