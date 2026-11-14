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

## Live (5 Nov 2026)

`redesign-v4` was fast-forwarded into `main` and pushed on Alric's go ("ok, now make it live"): halopro.app now shows
the v4 site for Halo Pro 2.3 beta. Gumroad serves the 2.3 file ("Halo Pro 2.3", 193,295,980 bytes, the notarised DMG);
the old "Halo Pro" file (205.7 MB) is still attached beside it. The custom Gumroad landing page was republished for 2.3
on 5 Nov 2026 (Alric's OK; picture captions no longer carry a version).

## Before you publish (kept for reference; done 5 Nov 2026)

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

## Copy pass (5 Nov 2026)

Owner: update the website copy with what was learned. Read top to bottom as a visitor and tightened it: the menu is
now Why Halo Pro · Compare · Light path · Pricing · Technical note; the share description uses the new positioning;
"32-bit float" is no longer explained five times (the opening, the four facts and Precision carry it); the mask views
no longer mention a red blur before it is introduced; the red-first light-path step lost its wavelength detail;
small fixes ("a tuned starting point", "they are for checking").

## The cook page (14 Nov 2026, branch `cook-site`, live on halopro.app)

Built with the cook method (github.com/Leonxlnx/cook): reference screens of strong product sites as the bar (Final Cut
Pro, Pixelmator Pro, Hasselblad, Halide, Linear, Teenage Engineering; kept in the local, ignored `cook/` folder), eight
rounds of build, stills and zero-context critics. Ledger: `cook/ROUNDS.md` (local).

- Files: `index.html` (built from a data block; edit it directly now) and `home.css` (Inter Tight, black, pill switches).
  `style.css` stays for `notes.html`. Pictures in `img/cook/`.
- Sections: hero (facade, halation only, 16 mm, Roll-off 0.5) · the real window (light trails) and three facts · Made with
  Halo Pro (fjord, lights, column, water; one switch) · Bright areas keep their colour (ridge: as opened, red blur, Halo Pro;
  backlit hair) · Beside Lightroom's Halation (each test bar, Lightroom 10.0 Spread 0 beside Halo Pro Super 8, three measured
  numbers) · Mist · Workflow chain and rows · Price.
- Owner, 14 Nov: the bars are enough for Lightroom (no photo needed); campaign photos, lamps, a 32-bit file and mist come later.
- Critic averages levelled at about 6.5/10 (imagery about 5); every reader asked for those missing photographs.

## The shown page (10 Nov 2026, branch `shown-page`, not live)

Alric's verdict on the argument page: "I don't think it makes sense. It's hard to follow, and the examples are not good
and some are not even relevant." An audit (my read and two readers with no context) agreed: in every comparison the Halo
Pro picture looked like the original, the photographs had no light sources, lab charts stood in for pictures, the same
comparison ran three times, 11 sections and 17,000 px. He said "Rebuild it".

What the page is now (seven sections, about 9,500 px at 1440, three folds; rules in `DESIGN.md`):
1. **The look.** "Halo Pro is a halation emulator for still images.", one paragraph, terms and two links beside it, then
   the facade at dusk as opened / Halo Pro (Format 16 mm), in the first screen on desktop and phone.
2. **How the glow forms, and how you set it.** The physics in three sentences; a full-size detail of lights on black as
   opened / Format 35 mm / Format 16 mm; the live window demo (facade; Amount 0 to 1, then Format to Super 8); the light
   path in its fold (`#physics`, which the note links to; a link to a fold opens it).
3. **Bright areas keep their colour.** A detail of the ridge photograph as opened / red blur / Halo Pro at Format 35 mm;
   the backlit portrait as opened / Halo Pro at full width; one link to the note.
4. **Mist, chosen after the shoot.** Lights on black, Mist off / on (Density 1.00, Spread 50, Softness 1.00), the one
   frame in the bank where mist shows: it changes 59 % of pixels by more than 8 levels there, 13 % on the skiers against
   the sun, under 1 % at the Default 0.30 on anything.
5. **Further than film.** Light trails at three settings beside the text; a type graphic as saved / Halo Pro; masks in
   one sentence.
6. **Where it sits in a workflow.** Four rows; set-up and file specs in the fold.
7. **Licence and limits.** The three licence rows, Requires and Beta rows in the same table, closing links, a fold with
   install, upgrading, bug reports, coming next and the release cards.

How it was made, so the next round is shorter:
- **Render first.** 22 bank photographs through the real app at five looks each, then the strongest again halation only.
  At Format 35 mm the glow is a hairline on these 2,048 px files, and Mist at the Default 0.30 changes almost no pixel
  by more than 8 levels; visible pictures are Format 16 mm (said in each caption) or shown as a full-size detail.
- **Comparisons** are `.flip` figures: renders stacked in register, labels over the frame, alternating while untouched
  and in view. `style.css`, the block "The shown page"; the script is at the end of `index.html`.
- **Cold reads.** Three rounds of readers with no context (colour grader, photographer, designer, a phone reader, an
  owner stand-in) on screenshots of every state, plus fact, voice and layout checks. Rounds two and three scored 6 out of 10
  from the four outside readers (5 from the owner stand-in in round three). By round three every comparison showed a
  change except mist. A last pass followed and was checked by eye only, not re-read: mist moved to the lights frame at
  the app's maximum, the window demo drawn whole, Further than film as one block, shorter copy. What holds the score
  down is in "Not done" below: the readers want faces, lamps and a campaign frame.
- The window demo now opens the facade (`stage/halo/img/facade-*.jpg`), is a whole window (stage 1200 × 700, the panel
  ends on the Start group: `short` on `EffectPanel`), resets by Format and Amount, and passes the gate at 1280 and 390. The Masking, Format, Save and return and Batch demos are off the page (readers called panel fragments
  decoration); their sources stay in `stage/examples/` and still build.
- Shot lists, the red blur and the contact sheets are in the session scratchpad, not in this repo. The page builder was
  `build_show.py` there; edit `index.html` directly from now on.
- Removed from the repo: `img/pro/`, `img/why-*`, four unused demo posters, the Saab layers. `notes.html` no longer says
  "Try Halo Pro" in its nav. `CLAUDE.md` now describes 2.3.0 (it still said 2.2).

Not done, or only Alric can supply:
- The bank has no night street, lamp or neon, no face lit by a light source, no campaign frame with clothes and greys
  beside a light, and no 32-bit file with light above white (the seven in `small 32HDR` peak at 1.0 to 1.4 on a few
  pixels). So skin, eyes, clothes and "a shirt is not a lamp" are said, not shown.
- Mist is subtle in this app at any setting on a real scene. A real diffusion-filter pair, or a dark scene with point
  lights, would make that section.
- A real film frame with halation, beside the emulation.
- The technical note still measures the Saab and the snow photo, not the page's new pictures; its design and the
  Gumroad landing page are on the earlier headline.
- The page shows the app as one drawn window. A real capture of the window, and of Glow Preview, is a small job.

## The argument page (night to 10 Nov 2026, branch `pro-argument`; rejected by the owner on 10 Nov, replaced by the shown page)

Owner, 10 Nov: the Returned-light site is "more adult and pro" but "not smart or inspiring", "the software is not
represented through the design", and "try it on your photos" reads like a phone-app ad. He wants it to explain how well
it does halation and why that matters to professionals in their workflows. I interviewed him (his answers are in the
memory note `positioning-interview`): "I don't want a filter, I want an emulator"; wrong halation tints sky, grey and
clothes on campaign work, reddens eyes, treats a T-shirt like the sun; with Halo Pro it can sit anywhere in a chain;
mist is the poetry; the audience is colour graders, serious and analogue photographers, designers.

What was built overnight (he said "Build it" to the plan, then went to bed):
- Order: 1 "Halo Pro is a halation emulator for still images." (export + Glow Preview side by side, terms as fact, text
  links, no "try it") · 2 What halation is (light path folded) · 3 What a red blur does to a photograph (three of his
  photos: as opened / our red blur / Halo Pro, measured captions; comparison table folded) · 4 How Halo Pro reads the
  file (the app's own views 0, 1, 2, 7 of the hero photo; colour chart; controls map folded) · 5 A white shirt is not a
  lamp (ladder chart, lamp and shirt) · 6 What it leaves alone (crops with sampled values; Default look named; limits)
  · 7 Mist · 8 Further than film (window demo, Masking and Format demos, glow colour, type; formats folded) · 9 Where
  it sits in a chain (four chains as rows, Save and return and Batch demos, how-to folded) · 10 Files, speed and limits
  · 11 Licence, and who made it (tiers, coming next and the release list folded).
- Rules from the judging: one settings sheet for the argument plates (halation only: Default preset, Mist off, Warmth
  on highlights 0, Format 35 mm, Amount 1, masks off); every picture's caption starts with what it is (Export, View,
  Photograph, our render, Demo); limits sit beside the claim they qualify; the glow cannot be exported alone, said once.
- Assets in `img/pro/`, all from the real app through `tools/website_shots/appshots.py` with scratch shot lists (kept
  in the session scratchpad, not in this public repo): `plates.py` (halation-only exports, views by number key, mist,
  glow colour, type) and the generic red blur from `tools/website_shots/note/redblur.py` (sigma 14, strength 1.6).
  Photos used from his bank (`~/Desktop/Halo Pro – Dehancer charts/small 16`): `_MG_0158-Edit` (hero and views),
  `_MG_5212`, `_MG_5228`, `_MG_9094` (comparison plates), `_MG_0997` (glow colour). He may swap them.
- Measured on those files (8-bit, means over the named area): grey sky +20 red under the blur, 0.0 under Halo Pro; white
  sky +17 vs −0.5; face crop 163 161 172 → 183 167 173 (blur) → 166 162 172 (Halo Pro); white jacket +7 vs +3.
- Copy: eleven sections drafted, fact- and voice-checked and revised by a workflow; then a five-lens review of the
  built page (facts, voice, desktop, phone, the owner's criteria) with each finding verified before fixing.
- Review round (10 Nov, early morning): 44 verified findings from five reviewers, applied. The hero's second plate is now a
  full-size crop pair at the sun (as opened / export) so the halation is seen on the first screen; "What halation is" has
  a still of the cross-section; the comparison plates carry their labels on every image; views are 2 x 2; the pricing
  cards became three plain licence rows; no "try it" is left; repeated caveats were cut; export depth for the mid-grade
  chain is stated as the setting it is (Bit Depth 32-bit Float, default 16-bit); the type plate (glow type) was removed;
  the shirt-and-lamp chart was re-rendered on black; demos carry the app's real labels (placeholders only on rows that
  run off the edge or at phone zoom, as the kit requires).
- **Capture bug found and fixed in the scratch shot list:** in 2.3 there is no "Mist" checkbox, so `check('Mist', False)`
  does nothing and the Default preset's Mist (Density 0.30) stays on. Every plate was re-captured with
  `w.mist_settings.is_enabled = False`. The same call is in the app repo's `tools/website_shots/light.py`, so renders made
  with it since 2.3 (the Saab, facade and Batch images of 7 Nov in `stage/halo/img/`) have Mist on at 0.30; their captions
  make no Mist claim, but fix light.py before the next render. Mist itself is subtle: at Density 0.30 it changes about
  1 % of pixels by more than 4 levels on these photos, which is why the Mist plate is a 1:1 crop at 0.30 and 0.80.
- Not done: a real film frame or a real Pro-Mist pair for comparison (asked him; the judges want it); Capture One is
  untested and not named; "composite the glow" is not promised; the Gumroad landing and the note still carry the
  earlier headline.

## Returned light: the identity revisit (8 Nov 2026; live on halopro.app since 8 Nov 23:10, main = dc6a7e6; Gumroad page not republished)

Owner, 02:30: "revisit the design in all seriousness"; the circle is not the achievement; what he liked in the old orange
H touch icon was its colour, adultness and honesty against the "trendy" current language; the copy the same; the purpose
unclear. "Surprise me. Make it smarter than I could."

What was done (see `DESIGN.md` for the rules):
- Two workflows: six designers x two marks, adversarially checked, three judges (contact sheet in the session scratchpad);
  four strategists on purpose, four designers on direction, a fashion critic, three judges. The judges' merge became the
  system: one reading column on near-black, one warm colour that is only ever the glow, serif at regular weight (Source
  Serif 4, the H's adultness without the H), product noun + price + Download in the first screen, limits once by the price.
- Mark: a bar of light hot at the left and a brass arc standing off its hot end (`favicon.svg`, inline in both navs,
  `apple-touch-icon.png`, `og-image.png` rebuilt from the Saab export). Runners-up kept in the sheet: "Stem and return"
  (a beam folding at the critical angle), "Ceiling" (a bar past the white line; reads as a cross at 16 px).
- Tokens: `--bg #0b0a09`, `--fg #e8e3da`, `--red #c27a3e` (brass, the one warm colour), `--amber #f2b37a` (core, figures
  only), `--glow: none`; type sizes a step quieter; every `font-weight: 300` is now 400.
- Page: hero = purpose line, sub, Download free / Buy Pro, then the Saab plate (as shot, Halo Pro's export fades in once);
  then "What it does" with the live window; "Choose where it glows", "The glow belongs to the film" (text beside the app);
  "Your look before the glow, or after"; why / compare (table folded) / light path / scale / controls / float / pro /
  development (2.x cards folded). The bento grid, the glow headline, the beam and the red second lines are gone.
- Copy: product noun in the headline; blue gets no glow because the top layer and yellow filter stop it; Save and return
  writes 16-bit; meta descriptions and titles rewritten.
- Demos: re-skinned by a subagent (stage ground `#0b0a09`, no window chrome on the four tiles, posters re-filmed).
- Owner approved the direction (8 Nov, 23:00). Sweep done: figure glow colours on the system tokens, toggles squared, the
  Gumroad landing source re-skinned and rebuilt (`gumroad/landing.html`, needs republishing on Gumroad with his OK). The
  note shares the tokens. Still open: the app icon in the app repo, a fresh-eye review of the built page (the reviewer was
  cut off by the weekly limit), and going live (fast-forward `main`, then Gumroad).

## Identity redesign with stageshow (7 Nov 2026; live on halopro.app since 7 Nov evening, main = b61ad06)

Owner: "we just need to redesign the whole thing again", with github.com/benjitaylor/skills/tree/main/stageshow, a React
kit for faux product UI (windows, cursor stories, bento tiles) with filming and a rehearsal gate. The site now shows the
app as a believable product instead of screenshots in boxes.

- `stage/`: the kit (MIT, `LICENSE-stageshow`), `halo/look.css` + `halo/parts.tsx` (Halo Pro's look mapped from the real
  app: black pane, #121214 column, white labels, white knobs, blue checks, orange swatch, 4px radii; its own Slider,
  Check, Section, MenuValue, PanelTop, PanelTabs, EffectPanel), `examples/halo-*` (the demos), `site/` (the bundle entry),
  `playground/` (the kit's preview). `npm install` there (Node 20.19+; use `--cache $TMPDIR/npm-cache` if ~/.npm is
  read-only).
- Preview: `.claude/launch.json` → `stage` (Vite on 5173; `?capture=halo-hero`). Build: `npm run build:site` →
  `stage-build/` (committed; index.html loads `stage-build/halo-stage.js` + `.css`). Each `<figure data-stage="id">`
  on the page mounts that demo; the `<img class="stage-poster">` inside is what shows until it mounts and under
  reduced motion (filmed with `--still` into `img/stage/`).
- Filming: `CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" node scripts/film.mjs
  "http://127.0.0.1:5173/?capture=<id>" --select '#example' --gate` (and `--width 390`). Chrome and Vite cannot bind
  inside the Bash sandbox: film with the sandbox off; run Vite through the app's preview runner.
- Demos: `halo-hero` (1200×640, compact 358×340: the Amount knob dragged up and the halos rise; Format → 16 mm
  widens them; Preset › Default resets; phone: Amount only, dragged back as the reset), `halo-format` (Format menu
  close-up), `halo-masking` (Sky Protection switched on), `halo-batch` (many-of-one grid, Apply to All),
  `halo-return` (Save and return → Saved, written back to Lightroom Classic). All pass the gate at 1280/1440 and 390
  unless noted below.
- Page order now: hero (copy + live window) → Built for professional files (bento: batch 2/3 + 42× stat; format |
  colour statement | masking) → What a red blur gets wrong → How it compares → Light path → Scale → Controls →
  Precision → Pro (Lightroom Mode with `halo-return`, pricing, coming next, the story) → Development. Dropped: the
  before/after slider (and its Saab/snow photos, rights unclear) and the screenshot tour.
- The story under the price is the 7 Nov draft (four drafts, sentence-checked, judged by photographer readers); it
  claims no photo as Alric's.
- Fresh-eye review of the built page (7 Nov, from stills). Fixed: posters had a 16px white border from the capture
  (cropped with sips); the 42× stat said "doubles per stop" (42× at +5 stops is the note's measured figure, film's
  32× is the proportional line); "Batch Exp" → Export All (the app's button); the story pointed at the street but
  described a chrome strip; hero spacing tightened so the lit street shows at 1440×900. Open, for the owner: the
  first screen is still mostly copy (the photo starts at ~770px; the fix would be copy beside the window, bleeding
  off the right); the street is a render and reads as one; window chrome four times (hero, Format, Masking,
  Return — crop the tiles to their control?); picture tiles and filled tiles are two frame families; the Pro
  section's right column is a dead corner; Format poster highlights 4×5 while the field reads 35 mm; Masking has a
  cursor resting on nothing.
- Photos (7 Nov, evening): the owner found the Blender street ugly and asked for the Saab, the skier or his image bank
  (`~/Desktop/Halo Pro – Dehancer charts/small 16`, 25 sRGB 16-bit TIFFs at 2048 px). Now: hero = the Saab
  (`Before after/…Exampel 1 BEFORE.jpg`), Format tile = `_MG_0997` (lit facade), Batch grid = eleven bank photos.
  Every glow is the real app's export (tools/website_shots/light.py in the app repo, LOOKS=1:1, Mist off, FORMAT
  35mm / 16mm / 4x5), reduced to `stage/halo/img/*.jpg` by a scratch script; re-render the same way if the engine
  changes. Posters are `film.mjs --still --pad 0` of `#example .ss-stage` (pad 0, or a white border is baked in).
- Owner's second look (7 Nov, night): "Halation is light that comes back" is not a good sentence, the glowing red
  type looked cheap, the light-bars figure is what looks premium. Hero now: plain white H1 "Halation from the light
  in the photo." (top of a 4-writer, 3-judge panel), a sub in his words, and a single bar of light under the copy
  (`img/light/beam.png`: a fading white bar drawn in PIL, exported through the app at Amount 2 · Size 1 · Super 8 ·
  Warmth 0 · Mist off like the figure, made transparent by light_to_web.py). `comes-back.png` is gone. The remjet
  toggle buttons are gone; the figure still switches to remjet at step 5 and the caption follows. The 42× stat tile
  became "Your look before the glow, or after." (LUT order: ticked = look first, glow on top, the default; unticked =
  the LUT grades the finished picture; 32-bit float export keeps light above white). The 42× line moved into the
  float section's intro. Fact caught by the checker and worth remembering: the glow is measured on the photo as
  opened, so the LUT never changes where it glows; only what grades what.
- Phone pass (7 Nov, late; 38 screens at 390 by a headless-Chrome script): the compact hero's Amount slider sat 19px
  below the stage edge (photo pane now 2:1 with tighter padding; gate passes at 390), a step still said "flip it
  back" to the removed toggle, and the hero left a 200px black gap before the grid on phones (32px foot now).
  Everything else held: no horizontal scroll, no three-line headings, no console errors.

## Comparison, coming next, lamp vs shirt (5 Nov 2026)

- `#compare` "How it compares.": a dated table of halation tools (Halo Pro, Lightroom Classic, Lightroom, Photoshop /
  Camera Raw, Dehancer, DaVinci Resolve Studio, FilmConvert Halation, Filmbox, VSCO) from each maker's own pages,
  checked 5 Nov 2026, with sources in a fold and an invitation to report changes. Research note: others are NOT all
  8-bit (Resolve documents 32-bit, Dehancer floating point), so the page never says so. Safe claims used: no other
  documents a glow worked out from the light's colour; Dehancer's photo plug-in is sRGB in and out; Lightroom and
  Lightroom Classic have no halation tool (release notes to Sep 2026; Camera Raw 18.6 has a Halation glow style, so
  recheck); free version plus €20 once. Recheck the table before big launches.
- "A lamp is not a white shirt." (moved the same day, owner: keep the top light, detail for the curious; now a
  "Read more" fold in Precision, `#float`): a scene with a white T-shirt and a lamp four stops over white
  (`shirtlamp.py` in the app repo) through 2.3, from a 32-bit file and from a clipped one. Measured: the lamp's halo is
  about 3.3 times stronger from the 32-bit file; the shirt's rim is the same in both.
- "Coming next. Updates are free." beside pricing: starting looks, more creative glow, RAW/DNG/HEIC, lamps vs shirts
  in JPEGs (the clipped-file estimate from the limits brief), a Default fitted to film.

## What Halo Pro is (5 Nov 2026)

Owner: say what Halo Pro actually is, next-generation halation for professionals: wide-gamut colour, 32-bit float,
quality kept across the pipeline where alternatives are 8-bit. Done: the hero line now says it, the meta description
too, and a new first section (`#what`, "Built for professional files.") gives four facts: formed like film, 32-bit
float end to end, wide gamut with one look, made for real work. The 8-bit comparison is put as what happens to a glow
worked out in 8 bits, not as a claim about every other product (not verified).

## Hero image (5 Nov 2026)

Owner supplied the hero picture (a red-orange streak of light on black, `img/hero.webp`, 1232 × 928, 22 KB as sent
in chat). It replaces the animated point of light (canvas and its script removed). It sits in the lower 70 % of the
hero (48 % on phones) with its top faded into the page, so the headline and text stay clear. The caption no longer
mentions the point of light. If there is a larger original, swap it in at the same path for sharper big screens.
Owner, same day: grain back "like before" (a 200 px random grey tile at 6 % over the hero, jumping five times a second
with CSS, still under reduced motion) and the picture dimmed to 55 % brightness so the text reads.
Then still unreadable on a 1280 × 720 laptop (the streak rose behind the line under the buttons): the hero is now a
column, and the picture has its own space (`.hero-light`, at least 300 px, 260 on phones) directly under the text, so it
can never sit behind the words at any size. On short screens it starts just below the fold.

## Before/after order (5 Nov 2026)

Owner: the rendered night street is the weakest of the three, so the before/after now opens on the Saab, then
Snow, with the street last. (Reverses the 2 Nov choice of opening on the street.)

## Panel tour, remjet toggle, format frames (5 Nov 2026)

- "What's in each panel." rebuilt: panel tabs as chips beside the heading; the panel screenshot left; right a
  headline, a short pitch and the controls in groups (`dl.tour-groups`), checked against the manual. New selling
  points: presets keep the loaded LUT inside, a LUT never moves the glow, Mist runs after halation, every shortcut
  on one page. Edit says it is still growing (the new control panel is next).
- Remjet toggle: owner found it confusing (the halo just vanished). Now "No backing" / "With remjet" with a live line
  under it saying what each state shows (light comes back as the halo, CineStill / the black coat absorbs it, no
  halo, how motion-picture film is made).
- Scale: owner felt the nested frames were too big for one point; the figure is now at most 420 px wide with the
  format list taking the wider column, labels readable (13 px).

## Why it's different, and Read more (5 Nov 2026)

- New section after Result, "What a red blur gets wrong." (`#why`): the note's 32-bit colour and brightness charts
  through a generic red blur (bright areas above 75 % grey blurred, tinted red-orange, screened on; made by us, not a
  product; `tools/website_shots/note/redblur.py` in the app repo) next to Halo Pro. Shows that a blur keys on
  brightness (red light barely glows, all lights above white look the same) where Halo Pro follows colour and
  brightness. Images: `img/why-*.jpg`, cropped to the band of lights.
- Third row, at the owner's request ("highlights and contrast glow, not surfaces changing colour"): a surfaces chart
  (flat white, greys, skin, sky blue, warm yellow, small lights between; `surfaces.py` in the app repo's
  `tools/website_shots/note/`) run through Halo Pro 2.3 at Warmth on highlights 0. Measured: every surface within half
  a level of the original in Halo Pro; the red blur shifts the white surface about 24 levels towards peach and warms
  the yellow and blue. The mask-views text now points at the same difference.
- Owner asked for long parts to fold away: native `<details class="more">` ("Read more: …", "Show less"), no script.
  Folded: mask views (Result), the last five Controls rows and the three uses, Files/colour/speed (Precision), and the
  road from 2024 plus Ideas (Development, where 2.x now comes first). Page about 19,600 px tall at 1440 with folds shut.

## Selling, not hedging (5 Nov 2026)

Owner: "you are underselling it ... We want to sell this app, not scare people." The rule now: **the main page
leads with what Halo Pro does; real limits are said once, by the download (the Beta line in Pricing); the technical
note keeps the full method and limits.** Done:
- Gone from the main page: the "Not modelled yet" list (now one list, "What Halo Pro follows from the film", with
  the measured doubling per stop added), the Default's provenance in the Controls intro (still in the note's Method
  and Limits; this reverses the 2 Nov wording decision for the main page only), "doesn't trace rays", "a smooth glow,
  not a ring", "no backing control/switch", "a look choice", "real bases differ", "To be straight about it", "not a
  photograph" (the toggle still says "Night street, rendered"), "Not halation" (now "Beyond halation"), "Planned, not
  promised" (now "Where it's at. What's next."), the Strong Effect/ProPhoto note, and version numbers on picture
  captions.
- Said positively instead: Amount from none (a full backing) to twice the built-in look; Green return gives the
  orange cores; raw users get the 16-bit TIFF / Lightroom Mode (Pro) route, raw and HEIC on the roadmap; float keeps
  glows fading to black without steps; "four 2.x releases in its first week"; the 1.x check and the memory card no
  longer run the app down.
- A zero-context review then pulled back five overclaims: steps are "built in or" have a control; the Result
  intro says Mist off; doubling per stop is "in a 32-bit file"; Amount 0 is "a perfect backing"; the formula box
  says Halo Pro draws the filled-in shape and the pinpoint ring is on the roadmap; Scale keeps "ratios assume one
  base thickness"; the note's abstract names the ring it doesn't draw yet.
- Fringing sentence approved by Alric and added as a "Done · 2.3" card.
- The note's abstract ends on "where it still differs from film is listed at the end" instead of two negatives.

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
**Waiting:** the
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
