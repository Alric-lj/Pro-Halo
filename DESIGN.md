# Halo Pro — identity (Returned light, November 2026)

The rules the site and everything around the app follow. Written after the owner's brief of 8 Nov 2026: adult,
honest, warm where the light is warm, purpose clear at a glance, not current design fashion.

## Purpose

Halo Pro puts film halation into a digital photograph the way film forms it: from the lights already in the
picture, each glow in that light's colour and strength, instead of a red blur laid over everything bright.

Promise a buyer can hold us to: every glow comes from a light in the photo; a warm light glows warm, a blue one
does not, the dark beside them stays dark; the glow grows about twice per stop above white; a 32-bit float TIFF
keeps the light above white (unless a LUT after mist, or Bloom, clips it).

Audience: photographers who finish their own files for paid work, on an Apple Silicon Mac. Enemy: the red blur.

## Colour

One ground, one text colour, one warm colour that is only ever the glow.

| token | value | use |
| --- | --- | --- |
| `--bg` | `#0b0a09` | the ground, everywhere |
| `--bg-2` / `--bg-3` | `#121110` / `#191816` | a card or table only where a surface is needed |
| `--fg` | `#e8e3da` | text |
| `--fg-2` / `--fg-3` | `#a69f95` / `#837c73` | secondary text; captions and labels (5:1 on the ground) |
| `--line` / `--line-2` | `rgba(232,227,218,.1 / .2)` | hairlines |
| `--red` | `#c27a3e` | the glow: brass sampled from the chrome strip's halo. The mark, the selected state, errors. Never a block of colour, never decoration. |
| `--amber` | `#f2b37a` | the hot core of a glow, inside figures only |
| `--hot` | `#f4efe6` | a light source in a figure |

No neon, no glow on type, no gradients for decoration. Blue and green appear only where a figure shows light of
that colour. Photographs are the only other colour on the page.

## Type

One face at regular weight, display to body: **Source Serif 4** (optical sizes, 400; 500 for the wordmark and
buttons). **IBM Plex Mono** 13 px, sentence case, for captions, figure data and control names only. No light
weights, no italic accent words, no spaced capitals, nothing under 13 px.

Six sizes (`--t-small` 14, `--t-body` 17, `--t-lead` 21, `--t-head` 24–30, `--t-section` 30–46, `--t-display`
34–58). Every heading fits two lines at 390 px.

## Layout

One reading column (about 34 em for prose, 1280 max for plates). Order: purpose, buttons, the photograph; then
what it does with the real window; then one short section per thing the app does, text beside the app; then the
physics (light path, scale, controls, float); then price with the limits said once beside it; then the story and
a dated development list behind Read more.

A plate is one photograph or figure on the ground with a mono caption under it. No tiles, no cards for content,
no counters, no stat set large unless it is a physical quantity that decides something. Hairlines only where a
figure needs a baseline. Long parts fold behind "Read more" (`details.more`).

Live demos (the stageshow kit, built into `stage-build/`) stay only where they prove a claim: the window with the
Amount and Format story, Masking, Format, Batch, Save and return. The app's own look inside them is the app's,
not the site's. On phones a demo is its poster plus the one control the story drags.

## The mark

A bar of light, hot at the left and fading along its length, and the glow that stands off its hot end: an arc in
brass, upstream of the bar, with the core hottest in the middle. It says what the engine does: the return comes
from the bright part only, it lands at a distance from the light, and the dark beside it gets nothing.
Asymmetric; no ring, no dot, no circle. `favicon.svg` (with its plate), inline in the nav of both pages (no plate),
`apple-touch-icon.png`, and the wordmark "Halo Pro" in Source Serif 4 at 500 beside it.

## Voice

A photographer explaining his tool to another photographer with the file open. Short declarative sentences,
real nouns from the physics and the file, a number only where the number is the point, no adjective where a fact
will do. Say what it does not do in the same breath as what it does. Limits once, beside the price; the full
list in the technical note. Never: powerful, seamless, stunning, unlock, next-generation; no "not X, it's Y"
flourish, no tricolons, no filler line before the concrete one. Never call a photograph the owner's unless he has
said so. Blue gets no glow because film's top layer and yellow filter stop it, not because of the base. Save and
return writes a 16-bit TIFF; only a 32-bit float export keeps light above white.

## Not this

Bento grids, glow type, neon red on black, dark-mode SaaS chrome, gradient blobs, darkroom props, paper textures,
cream/terracotta pages, spaced capitals, section numbers, small labels that repeat the heading, stat tiles,
animated counters, ring-and-dot marks, lens flares, stars, sparkles.
