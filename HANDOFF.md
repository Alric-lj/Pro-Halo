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
- Provenance: **decided 2 Nov: re-fit the Default to a physical model** of a 35 mm base. Brief for the app chat:
  app repo `docs/designs/default-refit-to-physics-brief.md`. Until it ships the page and note keep today's wording
  ("matched to a look I made in an established film-emulation plug-in …"); then the Controls intro, the "Not
  modelled yet" list and the note's abstract, method and limits change, and the note's figures get re-rendered.
- Red glowing second line on section headings: decided 2 Nov, hero and Light path only (see the taste-skill pass).
- Closing call to action: make "Download free" the solid button and "Buy Pro" the link (try first, then buy)?
- The rendered street opens the before/after until your night photo exists. OK?

**Fixing the note's five limits** (ring, matched Default, clipped files, colour spaces, diagonal stripes): owner
asked for it on 2 Nov; brief for the app chat in the app repo, `docs/designs/limits-deep-dive-brief.md` (the Default
re-fit has its own, `default-refit-to-physics-brief.md`). When each ships, update the note's Limits, the main page's
"Not modelled yet" block and re-render the note's figures.

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
(srcset/WebP); the banding demo rebuilt as a real 8-bit vs float comparison; testers' photos.
In the note: a film-model figure (ring around a point vs the app's glow), a backing-shape figure, a mist vs
halation scene, and a downloadable test-chart pack.

## Halo Pro 2.3 beta on the site (5 Nov 2026)

From the app session (build 19c8c75 on `limits-m2-landing-share`; DMG `releases/Halo-Pro-2.3.0-beta-2026-11-05.dmg`,
release notes `docs/release-notes-2.3.md` in the app repo). Done on this branch, in its own commit so it can be held back:
- Version labels say 2.3 beta (nav, hero line, JSON-LD 2.3.0 beta, footer). Picture captions still say "made in 2.2",
  which is true. Gumroad page source (`gumroad/landing.src.html`) says 2.3 too, **not republished**.
- Owner-approved sentences used: one working colour space (glow and mist the same in sRGB, Display P3, Adobe RGB,
  ProPhoto; sRGB unchanged) and crop/mirror (glow no longer shifts; square gaps beside lights and neon gone). Both are
  "Done · 2.3" cards in Development; the Colour spec line and the Controls "Colour in" row now say one working space;
  "same glow colour in every colour space" left the Next card.
- Beta facts: Strong Effect (1.0 preset) still differs a little on ProPhoto. Upgrading: from 2.2, looks on P3, Adobe RGB
  and ProPhoto photos change towards the sRGB result.
- Note, Limits: colour spaces marked fixed in 2.3. Stripes, big glows, ring, matched Default, clipped files stay.

**Before going live:** merge only after the notarised 2.3 DMG is on Gumroad (then republish the Gumroad page).
Neon (checked by the app session and here): 2.3 removes the square notches inside the neon rings, but a faint
speckled band can still show just inside green, cyan and blue rings at strong settings, so the note's limit is
softened, not removed, and Fig. 10 keeps its strong setting out. Fig. 10's Default image is now a 2.3 render (Method
says so); the other figures are 2.2 (2.3 moves sRGB edges by a few levels; Fringing is off in the Default). The note's
share image (`og-note.jpg`) was the strong 2.2 neon with those edges; it is now the 2.3 strong street render.
**Waiting:** the Fringing sentence (not approved yet, so not on the site); the
website brief's app facts (CLAUDE.md) still describe 2.2; the milestone-1 test pictures in
`~/Documents/HaloPro-work/website-candidates/` need clean re-renders before use (IMG_6303 is private, never on the site).

## Design pass with the taste-skill (2 Nov 2026, late)

Owner's request: use github.com/Leonxlnx/taste-skill to make smarter design decisions. The skill is a rule set
distilled from 247 award-gallery sites plus its author's own taste. Read that way: its **study-backed** findings were
applied; where only **its author's taste** speaks and it contradicts this site's brief (monospace labels, hairlines),
the brief wins. Its scripts were not run (downloaded code); the same checks were measured in the browser instead.

Done, both pages, measured at 1440 and 390 px:
- **Type scale:** 20 font sizes became 6 tokens (`--t-small` 14, `--t-body` 17/16, `--t-lead` 21/18, `--t-head`,
  `--t-section`, `--t-display`; mono labels 13). Nothing under 13 px (was 187 text elements at 10-12 px).
- **No spaced capitals:** about 180 tracked uppercase labels are now sentence case. Mono kept for short labels and
  figure data; nav, buttons, toggles and caption sentences moved to Inter Tight. Diagram labels too, sized for phones.
- **No numbering or repeated labels:** the "01 Result … 08 Development" section numbers (the "03" the owner asked
  about) and the "01 / Entry" step numbers are gone; so are small labels that only repeated the heading under them
  (Mask views, The panels, Files, Pro ×2, Free, Studios, the hero's and closing's top lines). "One person" moved into
  the price line. Section headings now start on the page margin.
- **Two-line headings on phones:** four ran to three lines. The red second sentence runs on inline at phone width,
  and two headings got shorter: "Into the emulsion. Back off the base.", "Try it on the photo you're thinking of.";
  note title "Halation, measured. What the glow does."
- **Note charts on phones:** their text was 4.5 px. `plots.py narrow` now draws a 400-wide version of each chart
  (horizontal bars for colour, axis title above the plot), shown at 900 px and below; desktop chart text 11 → 13 px.
  Pipeline: app repo `tools/website_shots/note/plots.py` + `insert_narrow.py`.
- The before/after slider no longer throws if a pointer event arrives without an active pointer.

Not taken, and why: the skill bans monospace, hairlines and the red glow outright; the brief asks for them. It also
wants running text in full white (ours is soft grey at about 8:1 contrast, kept for a long dark page) and shorter
pages (about 600 words); the note now carries the detail, so a shorter main page is a later, content decision.

**Red headings, decided 2 Nov:** the red glowing second line stays on the hero and the Light path heading (where red
is the subject); the other seven section headings are white (`#physics .s-title em` in `style.css`). The note's title
keeps its red line, as that page's hero.

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
