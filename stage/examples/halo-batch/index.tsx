import { Badge, Bar, Button, Stage, Text } from '../../kit'
import f8 from '../../halo/img/format-super8.jpg'
import f16 from '../../halo/img/format-16mm.jpg'
import f35 from '../../halo/img/format-35mm.jpg'
import f645 from '../../halo/img/format-645.jpg'
import f66 from '../../halo/img/format-6x6.jpg'
import f45 from '../../halo/img/format-4x5.jpg'
import ladder from '../../halo/img/ladder.jpg'
import colours from '../../halo/img/colours.jpg'
import './halo-batch.css'

// Many of one: Halo Pro's Batch Mode as a grid of one small thing, the
// filmstrip of photos open at once, each with its own settings. A still.
//
// Copied from examples/many-of-one: the same 5 x 4 grid of 184px tiles, the
// same offset so every edge cuts a tile by a third or more, one tile in
// focus a column right of centre, forward by depth only (the hero shadow and
// the app's blue selection ring). Every tile is the same anatomy: the photo
// edge to edge, then a name, a status and a preset line under it. The
// sameness is the point; only the name bars vary. The photos are the app's
// own renders of one night street at each Format, and its two light charts,
// repeated as a batch repeats.
//
// Real strings: the focus tile's filename, its status, its preset, and the
// one action, Apply to All, sitting on its lower edge, where the cursor
// rests. The button is a sibling in the grid, placed over that edge, so
// the tile keeps its own padding and the button clears the tile below.

const COLS = 5
const ROWS = 4
const FOCUS = { col: 2, row: 1 }

// Mostly the street at its formats; the two light charts appear once each in view
const PHOTOS = [f35, f16, f645, f8, ladder, f66, f45, f35, colours, f16]
const W = [[96, 64], [80, 52], [104, 70], [72, 58], [90, 46]]

export default function HaloBatch() {
  return (
    <Stage
      width={640}
      height={360}
      compact={{ below: 600, width: 358, height: 360 }}
      theme="dark"
      fidelity="standard"
      className="look-halo hb"
      cursor={{ at: { at: 'apply', x: 0.62, y: 0.58 }, still: true }}
      hover={['apply']}
    >
      {() => (
        <div className="hb-grid">
          {Array.from({ length: ROWS * COLS }, (_, i) => {
            const col = i % COLS
            const row = Math.floor(i / COLS)
            const focus = col === FOCUS.col && row === FOCUS.row
            const [a, b] = W[(i * 3) % W.length]!
            const photo = PHOTOS[(i * 5 + row) % PHOTOS.length]!
            return focus ? (
              <div key={i} className="hb-tile" data-focus>
                <div className="hb-thumb"><img src={f35} alt="" /></div>
                <div className="hb-meta">
                  <Text className="hb-name">IMG_6448.tif</Text>
                  <Badge tone="success" dot>Ready</Badge>
                </div>
                <div className="hb-line"><Text className="hb-preset">Default</Text></div>
              </div>
            ) : (
              <div key={i} className="hb-tile">
                <div className="hb-thumb"><img src={photo} alt="" /></div>
                <div className="hb-meta">
                  <Bar w={a} h={8} r={4} tone={3} />
                  <Bar w={34} h={8} r={4} tone={2} />
                </div>
                <div className="hb-line"><Bar w={b} h={7} r={3.5} tone={2} /></div>
              </div>
            )
          })}
          <Button size="small" className="hb-apply" data-target="apply">Apply to All</Button>
          <span className="hb-rest" data-target="rest" aria-hidden />
        </div>
      )}
    </Stage>
  )
}
