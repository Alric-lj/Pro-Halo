import { Badge, Bar, Button, Stage, Text } from '../../kit'
import b6448 from '../../halo/img/batch-6448.jpg'
import b0997 from '../../halo/img/batch-0997.jpg'
import b1578 from '../../halo/img/batch-1578.jpg'
import b2145 from '../../halo/img/batch-2145.jpg'
import b7736 from '../../halo/img/batch-7736.jpg'
import b4259 from '../../halo/img/batch-4259.jpg'
import b1345 from '../../halo/img/batch-1345.jpg'
import b9094 from '../../halo/img/batch-9094.jpg'
import b4000 from '../../halo/img/batch-4000.jpg'
import b9921 from '../../halo/img/batch-9921.jpg'
import b5212 from '../../halo/img/batch-5212.jpg'
import './halo-batch.css'

// Many of one: Halo Pro's Batch Mode as a grid of one small thing, the
// filmstrip of photos open at once, each with its own settings. A still.
//
// Copied from examples/many-of-one: the same 5 x 4 grid of 184px tiles, the
// same offset so every edge cuts a tile by a third or more, one tile in
// focus a column right of centre, forward by depth only (the hero shadow and
// the app's blue selection ring). Every tile is the same anatomy: the photo
// edge to edge, then a name, a status and a preset line under it. The
// sameness is the point; only the name bars vary. The photos are the owner's
// own, each one Halo Pro's export at Default, repeated as a batch repeats.
//
// Real strings: the focus tile's filename, its status, its preset, and the
// one action, Apply to All, sitting on its lower edge, where the cursor
// rests. The button is a sibling in the grid, placed over that edge, so
// the tile keeps its own padding and the button clears the tile below.

const COLS = 5
const ROWS = 4
const FOCUS = { col: 2, row: 1 }

const PHOTOS = [b0997, b1578, b2145, b7736, b4259, b1345, b9094, b4000, b9921, b5212]
const W = [[96, 64], [80, 52], [104, 70], [72, 58], [90, 46]]

export default function HaloBatch() {
  return (
    <Stage
      width={792}
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
            // ponytail: a stride of 7 spreads ten photos over nineteen tiles with no repeat in a row
            const photo = PHOTOS[(i * 7 + row * 3) % PHOTOS.length]!
            return focus ? (
              <div key={i} className="hb-tile" data-focus>
                <div className="hb-thumb"><img src={b6448} alt="" /></div>
                <div className="hb-meta">
                  <Text className="hb-name">_MG_6448.tif</Text>
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
