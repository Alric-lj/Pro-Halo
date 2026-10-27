# Handoff: halopro.app v4 (26 Oct 2026)

Branch `redesign-v4` (built on `redesign-v3`). Nothing is pushed; `main` (the live site) is untouched.

## What v4 is

A page that shows the real app instead of describing it. Order:

1. **Result**: before/after of real exports from Halo Pro (snow, Saab) at printed settings, plus two mask views.
2. **The app**: the actual window in Lightroom Mode, four callouts, and a switcher for the five panels.
3. **Light path**: the scroll diagram and remjet switch, each step naming its control.
4. **Scale**, 5. **Controls** (film mechanism → app control, with app paths; three recipes),
6. **Precision & files**, 7. **Pro & pricing** (licence, Lightroom Mode, Batch Mode, tiers, requirements),
8. **Development**: the tracker is back, dated, honest about what is fixed and what isn't.

Red text has a soft red glow (your request), on headings only.

Every factual line was checked against the app's `main` branch by independent reviewers (see "How it was made").

## View it

```
python3 -m http.server 8000
```

Then http://localhost:8000 on the Mac, or http://<Mac's Wi-Fi IP>:8000 on your phone (same Wi-Fi).

## Before you publish (merge to main and push)

The page is written to go live **together with the milestone-1 build released as 1.0.1**. It says:
"macOS 14 Sonoma or later", "Files you can trust: Done · 1.0.1", "1.0.1 is a free update in your Gumroad
library", batch never overwrites, typed values up to 10x. Those are true for the milestone-1 build, not for
the September 1.0.0 download.

1. In the app repo, set `__version__ = "1.0.1"` in `halo_pro/version.py` on `main` (it feeds the bundle version and
   the "Halo Pro v…" tag written into exported files) and replace the hard-coded "v1.0" in the About text
   (`working_window.py`, Settings › About) with the version constant. Rebuild and notarise.
2. Release that build on Gumroad as 1.0.1. The page says 1.0.1 in the nav, the structured data, the tracker and the
   closing line; if you pick another name, search the page for "1.0.1".
3. Buy Pro once yourself and check that the key arrives and unlocks Lightroom Mode and Batch Mode on a clean Mac.
4. Decide about the app's startup screen ("currently in BETA… Patreon") and the Gumroad product text
   ("1.0 BETA", "Lightroom plugin", "Intel", "Windows coming soon"); both disagree with the site.
5. Then merge `redesign-v4` into `main` and push.

More detail, including things that shouldn't sit in this public repo, is in the app repo:
`docs/website-v4-private-notes.md`.

## Decisions for you

- **Version name** for the milestone-1 build (the page assumes 1.0.1).
- **No refunds** sits next to a tracker that lists 1.0's problems. Consider a refund window, or keep pushing
  people to try Free first (the page already says so under the prices).
- **Glow Threshold**: the page says it isn't a hard cut-off and that whether 1.1 makes it one is still being decided. Update when you choose.
- **The app's main moved on (27 Oct).** Milestone 2 (strict Glow Threshold, Anti-Halation fixed, same look at any
  size) and m2b are merged into the app's `main` since this page was written for the milestone-1 build. Pick the build
  the site launches with, then update the "until 1.1" caveats, the Glow Threshold line above and the screenshots.
- **"Light through Halo Pro" figure** (Controls, `img/light/light-bars.png`): you judged it inaccurate, and a bench
  showed the engine itself is off (red lights get no glow, the glow follows a threshold instead of the light, no
  ring). Take it down or replace it until the engine is rebuilt; the brief for that is in the app repo
  (`docs/halation-physics-brief.md`). The hero lettering is app output too ("back." barely glows).
- **Physics copy, small updates**: "roughly 0.13 mm" is right for 35 mm acetate, but Portra 400 moved to a 0.10 mm
  Estar base in 2025; Kodak is replacing remjet on Vision3; orange cores are better explained as the green and red
  layers overlapping around 585 nm plus red saturating first.
- **Old roadmap ideas** (online presets, grain, ProRes, DaVinci, Windows, Intel) are listed as "Idea, not
  scheduled". Remove any you don't want public.
- **Licence terms**: the page says "one person", "for a studio or company", "licensed for paid work", "free
  updates in your Gumroad library". Add Macs per licence or seats if you have a rule.

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
