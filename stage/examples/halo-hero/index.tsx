import { Stage, Window, type Act } from '../../kit'
import { EffectPanel } from '../../halo/parts'
import src from '../../halo/img/facade-src.jpg'
import glow16 from '../../halo/img/facade-16mm.jpg'
import glowS8 from '../../halo/img/facade-s8.jpg'
import './hero.css'

// The window: Halo Pro's own window with the page's first photograph open in
// it (a lit facade at dusk; the layers are its exports with halation only,
// Amount 1, at Format 16 mm and Super 8). Beats: the cursor takes the Amount
// knob from 0 to 1 and the lit edges grow their red halos as it goes; it
// opens Format and picks Super 8, and they widen;
// the result holds; Format back to 16 mm and the knob dragged to 0 put it back.
// Real strings: the controls the story touches (Amount, Format, Super 8,
// Preset Default); the rest of the panel is the app's real anatomy with
// placeholder values.

type S = { amount: number; format: '16 mm' | 'Super 8'; menu: boolean; preset: boolean }

const initial: S = { amount: 0, format: '16 mm', menu: false, preset: false }
const poster: S = { amount: 1, format: 'Super 8', menu: false, preset: false }

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
  await a.click('fmt-s8')
  a.mark('format')
  await a.set({ menu: false, format: 'Super 8' })
  await a.move('rest')
  await a.wait(2400)
  // Back the way it came, as the app would: Format to 16 mm, then the Amount knob dragged to 0
  await a.move('format')
  await a.wait(200)
  await a.click()
  await a.set({ menu: true })
  await a.wait(450)
  await a.click('fmt-16')
  await a.set({ menu: false, format: '16 mm' })
  await a.wait(500)
  const k2 = a.rect('amount-knob'), tr2 = a.rect('amount')
  await a.move({ x: k2.x + k2.width / 2, y: k2.y + k2.height / 2 })
  await a.wait(200)
  await a.drag({ x: tr2.x, y: k2.y + k2.height / 2 }, (_at, _from, t) => a.put({ amount: Math.round((1 - t) * 100) / 100 }), { duration: 900 })
  await a.set({ ...initial })
  await a.move('rest')
  await a.wait(600)
}

const FORMATS = ['Super 8', '16 mm', '35 mm', '645', '6x6 / 6x7', '4x5']

export default function HaloHero() {
  return (
    <Stage<S> width={1200} height={700} compact={{ below: 760, width: 358, height: 340 }} theme="dark" fidelity="standard" initial={initial} poster={poster} script={script} cursor={{ at: 'rest' }} className="look-halo hh">
      {(s, _rect, layout) => (
        <Window title={layout === 'compact' ? undefined : 'Halo Pro'} className="hh-win">
          <div className="hh-body" data-layout={layout}>
            <div className="halo-photo hh-photo">
              <img src={src} alt="" />
              <img src={glow16} alt="" data-layer style={{ opacity: s.format === '16 mm' ? s.amount : 0 }} />
              <img src={glowS8} alt="" data-layer style={{ opacity: s.format === 'Super 8' ? s.amount : 0 }} />
            </div>
            <div className="hh-panel">
              <EffectPanel
                amount={s.amount}
                format={s.format}
                compact={layout === 'compact'}
                short
                presetTarget="preset"
                formatMenu={
                  <div className="hh-menu" role="presentation" data-open={s.menu || undefined}>
                    {FORMATS.map(f => (
                      <div key={f} className="hh-menu__item" data-on={f === s.format || undefined} data-target={f === 'Super 8' ? 'fmt-s8' : f === '16 mm' ? 'fmt-16' : undefined} data-cursor="pointer">{f}</div>
                    ))}
                  </div>
                }
                presetMenu={
                  <div className="hh-menu" role="presentation" data-open={s.preset || undefined}>
                    {['Default', 'Last Edit', 'Facade'].map(p => (
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
