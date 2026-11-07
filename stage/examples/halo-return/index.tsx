import { Button, Collapse, Icon, Stage, Text, Window, type Act } from '../../kit'
import { Histogram } from '../../halo/parts'
import '../../halo/look.css'
import './halo-return.css'

// A close-up of the Lightroom round trip, as one control. The top of Halo
// Pro's control column at 1.4x: the Preset row as context, the row
// "Export    Save and return" whole across, the histogram's top under it, the
// window running off the bottom and right so only filler is cut. Beats: the
// cursor clicks Save and return; the button's label becomes "Saved" on
// itself with a check arriving (the kit Button animates this); a line opens
// under the row and the histogram moves down with it. Plays once; the still
// is Saved with the line showing.
//
// Real strings: Preset, Default, Export, Save and return, Saved, and the one
// line under the row. 303ms is a figure, so it keeps the app's mono.

type S = { saved: boolean; line: boolean }

const initial: S = { saved: false, line: false }
const poster: S = { saved: true, line: true }

async function script(a: Act<S>) {
  await a.wait(900)
  await a.move('save')
  await a.wait(220)
  a.mark('click')
  await a.click()
  // The button answers on itself first, the line a beat after
  await a.set({ saved: true })
  await a.wait(380)
  a.mark('saved')
  await a.set({ line: true })
  // Off the button, so the payoff isn't under the pointer
  await a.wait(500)
  await a.move('rest')
  await a.wait(2200)
}

export default function HaloReturn() {
  return (
    <Stage<S> width={400} height={300} compact={{ below: 400, width: 358, height: 280 }} theme="dark" initial={initial} poster={poster} script={script} play="once" cursor={{ at: 'rest', style: 'large' }} className="look-halo hr">
      {(s) => (
        <div className="hr-zoom">
          <Window title="Halo Pro" className="hr-win">
            <div className="hr-body">
              <div className="halo-photo hr-pane" />
              <div className="halo-panel hr-panel">
                <div className="halo-panel__preset hr-preset">
                  <Text>Preset:</Text>
                  <b>Default</b>
                  <span className="halo-panel__ms">303ms</span>
                </div>
                <div className="hr-save">
                  <div className="hr-actions">
                    <Button variant="ghost">Export</Button>
                    <Button variant="ghost" data-target="save" icon={s.saved ? <Icon name="check" size={14} stroke={2} /> : undefined}>
                      {s.saved ? 'Saved' : 'Save and return'}
                    </Button>
                  </div>
                  <Collapse open={s.line}>
                    <Text wrap className="hr-note">16-bit TIFF written back to Lightroom Classic</Text>
                  </Collapse>
                </div>
                <Histogram />
              </div>
            </div>
            <span className="hr-rest" data-target="rest" aria-hidden />
          </Window>
        </div>
      )}
    </Stage>
  )
}
