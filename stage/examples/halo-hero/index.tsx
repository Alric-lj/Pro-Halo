import { Stage, Window, type Act } from '../../kit'
import { EffectPanel } from '../../halo/parts'
import src from '../../halo/img/street-src.jpg'
import glow35 from '../../halo/img/street-35mm.jpg'
import glow16 from '../../halo/img/street-16mm.jpg'
import './hero.css'

// The hero: Halo Pro's own window, a night scene open in it. Beats: the
// cursor takes the Amount knob from 0 to 1 and the lamps grow their red
// halos as it goes; it opens Format and picks 16 mm, and the halos widen;
// the result holds; Preset › Default is the seen cause that puts it back.
// Real strings: the controls the story touches (Amount, Format, 16 mm,
// Preset Default); the rest of the panel is the app's real anatomy with
// placeholder values.

type S = { amount: number; format: '35 mm' | '16 mm'; menu: boolean; preset: boolean }

const initial: S = { amount: 0, format: '35 mm', menu: false, preset: false }
const poster: S = { amount: 1, format: '16 mm', menu: false, preset: false }

async function script(a: Act<S>) {
  const compact = a.layout === 'compact'
  await a.wait(800)
  const knob = a.rect('amount-knob'), track = a.rect('amount')
  await a.move({ x: knob.x + knob.width / 2, y: knob.y + knob.height / 2 })
  await a.wait(250)
  a.mark('amount')
  await a.drag({ x: track.x + track.width / 2, y: knob.y + knob.height / 2 }, (_at, _from, t) => a.put({ amount: Math.round(t * 100) / 100 }), { duration: 1400 })
  await a.set({ amount: 1 })
  if (compact) {
    // The phone column tells the first beat only; dragging the knob back is the seen cause of the reset
    await a.move('rest')
    await a.wait(2400)
    const k = a.rect('amount-knob'), tr = a.rect('amount')
    await a.move({ x: k.x + k.width / 2, y: k.y + k.height / 2 })
    await a.wait(200)
    await a.drag({ x: tr.x, y: k.y + k.height / 2 }, (_at, _from, t) => a.put({ amount: Math.round((1 - t) * 100) / 100 }), { duration: 900 })
    await a.set({ ...initial })
    await a.move('rest')
    await a.wait(500)
    return
  }
  await a.wait(900)
  await a.move('format')
  await a.wait(200)
  await a.click()
  await a.set({ menu: true })
  await a.wait(500)
  await a.click('fmt-16')
  a.mark('format')
  await a.set({ menu: false, format: '16 mm' })
  await a.move('rest')
  await a.wait(2400)
  // Preset › Default: the seen cause that returns the frame
  await a.move('preset')
  await a.wait(200)
  await a.click()
  await a.set({ preset: true })
  await a.wait(450)
  await a.click('preset-default')
  await a.set({ ...initial })
  await a.move('rest')
  await a.wait(600)
}

const FORMATS = ['Super 8', '16 mm', '35 mm', '645', '6×6 / 6×7', '4×5']

export default function HaloHero() {
  return (
    <Stage<S> width={1200} height={640} compact={{ below: 760, width: 358, height: 340 }} theme="dark" fidelity="standard" initial={initial} poster={poster} script={script} cursor={{ at: 'rest' }} className="look-halo hh">
      {(s, _rect, layout) => (
        <Window title={layout === 'compact' ? undefined : 'Halo Pro'} className="hh-win">
          <div className="hh-body" data-layout={layout}>
            <div className="halo-photo hh-photo">
              <img src={src} alt="" />
              <img src={glow35} alt="" data-layer style={{ opacity: s.format === '35 mm' ? s.amount : 0 }} />
              <img src={glow16} alt="" data-layer style={{ opacity: s.format === '16 mm' ? s.amount : 0 }} />
            </div>
            <div className="hh-panel">
              <EffectPanel
                amount={s.amount}
                format={s.format}
                compact={layout === 'compact'}
                presetTarget="preset"
                formatMenu={
                  <div className="hh-menu" role="presentation" data-open={s.menu || undefined}>
                    {FORMATS.map(f => (
                      <div key={f} className="hh-menu__item" data-on={f === s.format || undefined} data-target={f === '16 mm' ? 'fmt-16' : undefined} data-cursor="pointer">{f}</div>
                    ))}
                  </div>
                }
                presetMenu={
                  <div className="hh-menu" role="presentation" data-open={s.preset || undefined}>
                    {['Default', 'Last Edit', 'Night street'].map(p => (
                      <div key={p} className="hh-menu__item" data-on={p === 'Default' || undefined} data-target={p === 'Default' ? 'preset-default' : undefined} data-cursor="pointer">{p}</div>
                    ))}
                  </div>
                }
              />
            </div>
          </div>
          <span className="hh-rest" data-target="rest" aria-hidden />
        </Window>
      )}
    </Stage>
  )
}
