import { Stage, States, Tabs, Text, type Act } from '../../kit'
import { Check, Slider } from '../../halo/parts'
import './halo-masking.css'

// A close-up of Halation › Masking: Halo Pro's control column at 1.4 times
// true size, cropped hard, the way examples/close-up frames one setting.
// Beats: the cursor clicks the Sky Protection checkbox, it turns on, the line
// under it says what that did. Plays once; the still is the payoff.
//
// - The column is scaled with no window chrome, edge to edge in the stage:
//   the Effect | Masking tabs say this is a crop of the app's own panel.
// - The panel runs off the bottom only. The three group headers are whole
//   across; the only thing the crop takes is a filler slider under Color Mask.
// - One group acts. Luminance Range is on, as a reason the panel exists; Color
//   Mask stays off: an accent on filler would be the heaviest mark in frame.
//
// Real strings: Effect, Masking, Luminance Range, Sky Protection,
// Color Mask, and the line that changes (Off, Sky kept clear).

type S = { sky: boolean }

const initial: S = { sky: false }
const poster: S = { sky: true }

async function script(a: Act<S>) {
  await a.wait(900)
  // The checkbox square sits at the left of the Check's box: a box's width is
  // about 0.86 of the line's height, so its center is 0.43 of the height in
  const r = a.rect('sky')
  a.mark('click')
  await a.click({ x: r.x + r.height * 0.43, y: r.y + r.height / 2 })
  a.put({ sky: true })
  // Off the checkbox, so the payoff isn't under the pointer
  await a.wait(500)
  await a.move('rest')
  await a.wait(2100)
}

export default function HaloMasking() {
  return (
    <Stage<S>
      width={400}
      height={340}
      compact={{ below: 400, width: 358, height: 320 }}
      theme="dark"
      fidelity="standard"
      initial={initial}
      poster={poster}
      script={script}
      play="once"
      cursor={{ at: 'rest', style: 'large' }}
      className="look-halo hm"
    >
      {(s) => (
        <div className="hm-zoom">
          <div className="hm-panel">
            <Tabs items={['Effect', 'Masking']} value={1} />

            <div className="hm-group">
              <Check on>Luminance Range</Check>
            </div>
            <Slider label="Luminance Floor" value={0.3} max={1} filler />

            <div className="hm-group">
              <Check on={s.sky} target="sky">Sky Protection</Check>
            </div>
            <div className="hm-line">
              <span className="hm-sky" aria-hidden />
              <States
                value={s.sky ? 'on' : 'off'}
                align="start"
                states={{
                  off: <Text className="hm-state">Off</Text>,
                  on: <Text className="hm-state">Sky kept clear</Text>,
                }}
              />
            </div>

            <div className="hm-group">
              <Check on={false}>Color Mask</Check>
            </div>
            <Slider label="Color Tolerance" value={0.3} max={1} filler />
            <Slider label="Mask Softness" value={0.5} max={1} filler />
          </div>
          <span className="hm-rest" data-target="rest" aria-hidden />
        </div>
      )}
    </Stage>
  )
}
