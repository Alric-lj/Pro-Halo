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
2. ~~Update the Gumroad landing page to 2.2~~ Done: republished 2 Nov 2026.
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

## Technical note and design deep dive (2 Nov 2026, evening)

**New page: `notes.html`, "Halation, measured"**, a short paper on how Halo Pro 2.2 forms halation. Linked from the
nav ("Technical note") and from the light-bars figure. 13 figures, every setting printed:
- Test charts as 32-bit float TIFFs (light from 2 stops under to 5 over white): brightness, colour, size, where the
  glow starts, shape/Roll-off, Green return, Landing. Format Super 8 so the glow shows at web size (said so).
- Three Blender scenes rendered as linear light (lamps 40-120x white): night street, nine neon rings, window with
  candles and a lamp; each at the Default and at 16 mm / Amount 1.5.
- Three measured plots: glow vs brightness on a log axis against film's proportional line (from an unclipped 32-bit
  export: 2.3x at +1 stop, 42x at +5, i.e. doubling per stop), glow by colour (blue 0, green/cyan about a fifth of
  white), and the profile with Roll-off 0 / 0.5 / 1. Data tables under each plot.
- Limits stated: no pinpoint ring yet, the Default matched to an established film-emulation look, clipped files,
  colour spaces, beta limits.
Everything is made by the private pipeline in the app repo, `tools/website_shots/note/` (README there).

**Deep dive** (six reviewers + synthesis; the full ranked list is in the app repo, `docs/designs/website-deep-dive-2026-11-02.md`). Done:
physics corrected on the main page and in the note (a fixed share of every tone reaches the base, so halation is
proportional to light; orange cores from red filling first; rings fill in to a core and tail around real lights);
a "What Halo Pro follows / Not modelled yet" block after Light path; the Default's provenance stated plainly
(hero, meta, Controls intro, note); the phone slider no longer moves when you scroll past it; the rendered night
street opens the before/after (labelled "not a photograph"); nav Result / Light path / Controls / Pricing /
Technical note; Scale lists all six formats with a note on real bases; 44 px touch targets; dev/footer wording.

**Decisions for you (from the deep dive):**
- Provenance wording: the page and note now say the Default's width, strength, colour and start were "matched to a
  look I made in an established film-emulation plug-in, measured from its exported pictures, not derived from a
  base thickness" (no tool named; first person, your voice). Keep, reword, or re-fit the Default to a physical model
  (then the sentence can say so).
- Red glowing second line on every section heading: keep everywhere, or only where red is the subject (Light path,
  Scale, Controls)?
- Closing call to action: make "Download free" the solid button and "Buy Pro" the link (try first, then buy)?
- The rendered street opens the before/after until your night photo exists. OK?

**Photos to shoot** (each proves something specific; keep the raws; for film note stock, lab, scanner):
1. The key pair: a wet night street with sodium and white-LED lamps, tail lights and headlights, on CineStill 800T
   and on digital (raw) from the same tripod spot, same lens, minutes apart. Shows whether the glow matches film.
2. A point source on film: a pinhole LED or distant bare bulb in a dark room on CineStill, bracketed, plus a frosted
   bulb in the same frame. Shows the ring (and lets us measure its radius) and how it fills in around a wider light.
3. The same scene on Portra 400 (has an anti-halation layer) next to the CineStill frame: backing vs no backing.
4. A colour wall: red, blue and white neon or LED signs and a green signal in one frame at night.
5. A tungsten interior: bare bulbs, a table lamp, candles, faces lit by them.
6. A backlit portrait: sun or window behind the head, rim-lit hair, a white shirt or dress; we process it at
   Landing 0.05 and 1 with a 100 % face crop.
7. Sun through bare branches, and blinds or a window grille behind a person (Smooth wide glow, Soft fall-off, and
   the known moiré limit).
8. A brightness bracket: a street lamp next to a white wall at -2 / 0 / +2 stops, plus a merged 32-bit HDR.
9. A format pair: the same lit scene on 35 mm and 120 (6x7), framed alike.
10. A mist pair: the same scene through a real 1/4 Black Pro-Mist and without it.

**Still open from the deep dive** (not done tonight): a 1:1 loupe and "halation only / pushed" states on the
before/after; a film scan as Fig. 0 (needs shots 1-3); regrouping the Controls rows; redrawing the light-path diagram
larger (with sub-critical rays escaping, ~4 % returning); one shared figure component for both pages; a portrait
bars image for phones; the Scale SVG at 102 mm for 4x5 and the format strip under it; shorter Development section;
a fuller Sources list (Kodak data sheets, AHU, patents); recipes with pictures; a Mist picture; image weights
(srcset/WebP); the banding demo rebuilt as a real 8-bit vs float comparison; type-size tokens; testers' photos.
In the note: a film-model figure (ring around a point vs the app's glow), a backing-shape figure, a mist vs
halation scene, and a downloadable test-chart pack.

## Gumroad product page (live since 2 Nov 2026)

`https://alriclj.gumroad.com/l/HALO_PRO` now shows a custom landing page (Gumroad product `btgaby`) instead of the
old 1.0 description. It describes **2.2 beta** (republished 2 Nov), with real 2.2 exports (startup look) and the 2.2 window.
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
