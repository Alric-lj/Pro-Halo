import { Icon, Menu, Popover, Roll, Stage, Text, type Act } from '../../kit'
import { Section, Slider } from '../../halo/parts'
import f35 from '../../halo/img/building-35mm.jpg'
import f45 from '../../halo/img/building-4x5.jpg'
import './halo-format.css'

// A close-up of one control: Halo Pro's Format menu, the app's own panes at
// 1.4x with no window chrome, edge to edge and running off the bottom. Beats: the cursor clicks the
// Format value, the menu opens over the Glow section (Super 8 to 4×5, 35 mm
// checked), picks 4×5; the value rolls to 4×5 on its own row, the menu fades
// out and the photo (the owner's lit facade at dusk, Halo Pro's own exports)
// crossfades to the tighter 4×5 glow.
// Plays once; the poster is the menu open with 4×5 under the cursor.
//
// Real strings: Format, the six menu items (35 mm and 4×5 among them). Amount
// and Size above it are the app's own sliders with placeholder labels, there
// so the row reads as the Glow section's third control, not a lone menu.

type S = { format: '35 mm' | '4×5'; menu: boolean }

const initial: S = { format: '35 mm', menu: false }
const poster: S = { format: '35 mm', menu: true }

const FORMATS = ['Super 8', '16 mm', '35 mm', '645', '6×6 / 6×7', '4×5'] as const

async function script(a: Act<S>) {
  await a.wait(900)
  await a.move('format')
  await a.wait(220)
  await a.click()
  await a.set({ menu: true })
  await a.wait(650)
  await a.move('fmt-4x5')
  a.mark('open')
  await a.wait(600)
  await a.click()
  // The tick moves to 4×5 and the row's value rolls first; the menu closes a beat later
  await a.set({ format: '4×5' })
  await a.wait(180)
  await a.set({ menu: false })
  a.mark('picked')
  await a.wait(450)
  await a.move('rest')
  await a.wait(2200)
}

export default function HaloFormat() {
  return (
    <Stage<S>
      width={400}
      height={320}
      compact={{ below: 400, width: 358, height: 320 }}
      theme="dark"
      fidelity="standard"
      initial={initial}
      poster={poster}
      hover={['fmt-4x5']}
      script={script}
      play="once"
      cursor={{ at: 'rest', style: 'large' }}
      className="look-halo hf">
      {(s, _rect, layout) => (
        <div className="hf-zoom">
          <div className="hf-body">
            <div className="hf-pane">
              <div className="halo-photo hf-photo">
                <img src={f35} alt="" />
                <img src={f45} alt="" data-layer style={{ opacity: s.format === '4×5' ? 1 : 0 }} />
              </div>
              <span className="hf-rest" data-target="rest" aria-hidden />
            </div>
            <div className="halo-panel hf-panel">
              <Section>Glow</Section>
              <Slider label="Amount" value={1} max={2} filler={layout === 'compact'} />
              <Slider label="Size" value={1} max={16} min={0.25} filler={layout === 'compact'} />
              <span className="halo-menu halo-anchor hf-format">
                <Text>Format</Text>
                <b className="hf-value" data-target="format">
                  <Roll align="start">{s.format}</Roll>
                </b>
              </span>
              <Slider label="Roll-off" value={0} max={1} filler={layout === 'compact'} />
            </div>
            {/* The menu is its own surface over the column, not a child of it, as a menu is */}
            <Popover show={s.menu} origin="bottom left" className="hf-menu">
              <Menu
                items={FORMATS.map((f) => (
                  <>
                    <span className="hf-tick" data-on={f === s.format || undefined}>
                      <Icon name="check" size={12} stroke={2.4} />
                    </span>
                    <Text>{f}</Text>
                  </>
                ))}
                targets={FORMATS.map((f) => (f === '4×5' ? 'fmt-4x5' : undefined))}
              />
            </Popover>
          </div>
        </div>
      )}
    </Stage>
  )
}
