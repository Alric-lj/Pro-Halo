import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'
import { Bar, Tabs, Text } from '../kit'
import './look.css'

// Halo Pro's own controls, drawn as the app draws them. Every stage of Halo
// Pro uses these plus the kit's frames, so the app looks like one product
// across the site. Labels are the app's exact labels.

/** "Amount: 1.00" over a track with a white knob. `target` names it for the cursor. */
export function Slider({ label, value, max, min = 0, decimals = 2, target, filler, className, ...rest }: HTMLAttributes<HTMLDivElement> & {
  label: string; value: number; max: number; min?: number; decimals?: number; target?: string; filler?: boolean
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div {...rest} className={`halo-slider${className ? ` ${className}` : ''}`} data-filler={filler || undefined}>
      <span className="halo-slider__label">
        {filler ? <Bar w={Math.round(label.length * 6.5)} h={7} tone={3} /> : <><Text>{label + ':'}</Text><b>{value.toFixed(decimals)}</b></>}
      </span>
      <span className="halo-slider__track" data-target={target} data-cursor={target ? 'pointer' : undefined}>
        <span className="halo-slider__knob" data-target={target ? `${target}-knob` : undefined} style={{ left: `${pct}%` }} />
      </span>
    </div>
  )
}

/** A section name between two hairlines: "Glow", "Start", "Color & Landing". */
export function Section({ children }: { children: string }) {
  return <div className="halo-sec"><Text>{children}</Text></div>
}

/** A macOS checkbox with its label: Processed, Accurate, Advanced, Halation. */
export function Check({ on, children, target }: { on: boolean; children: string; target?: string }) {
  return (
    <span className="halo-check" data-off={!on || undefined} data-target={target}>
      <i aria-hidden />
      <Text>{children}</Text>
    </span>
  )
}

/** "Format   35 mm": a label and the chosen menu item. */
export function MenuValue({ label, value, target, menu }: { label: string; value: string; target?: string; menu?: ReactNode }) {
  return (
    <span className="halo-menu halo-anchor" data-target={target} data-cursor={target ? 'pointer' : undefined}>
      <Text>{label}</Text>
      <b>{value}</b>
      {menu}
    </span>
  )
}

/** The histogram: one quiet filled shape with the app's dashed guides. */
export function Histogram() {
  return (
    <svg className="halo-hist" viewBox="0 0 200 64" aria-hidden>
      <path d="M0 64 L0 40 C 12 30, 20 10, 40 12 C 60 14, 75 10, 95 16 C 115 22, 125 26, 140 20 C 160 14, 175 30, 190 36 L200 40 L200 64 Z" />
      <line x1="50" y1="4" x2="50" y2="64" /><line x1="100" y1="4" x2="100" y2="64" /><line x1="150" y1="4" x2="150" y2="64" />
    </svg>
  )
}

/** The top of the control column: preset, timing, Export and Save and return. */
export function PanelTop({ preset = 'Default', ms = 303, lightroom, target, menu }: { preset?: string; ms?: number; lightroom?: boolean; target?: string; menu?: ReactNode }) {
  return (
    <>
      <div className="halo-panel__top">
        <span className="halo-panel__preset halo-anchor" data-target={target} data-cursor={target ? 'pointer' : undefined}><Text>Preset:</Text><b>{preset}</b>{menu}</span>
        <span className="halo-panel__ms">{ms}ms</span>
      </div>
      <div className="halo-panel__actions">
        <Text>Export</Text>
        {lightroom ? <Text>Save and return</Text> : <Bar w={70} h={8} tone={2} />}
      </div>
      <Histogram />
      <div className="halo-panel__checks">
        <Check on>Processed</Check>
        <Check on={false}>Accurate</Check>
        <Check on>Advanced</Check>
      </div>
    </>
  )
}

/** The four tabs and the Effect | Masking pair, as in the app. */
export function PanelTabs({ tab = 0, panel = 0 }: { tab?: number; panel?: number }) {
  return (
    <>
      <Tabs items={['Halation', 'Mist', 'Edit', 'Settings']} value={tab} />
      <Tabs items={['Effect', 'Masking']} value={panel} />
    </>
  )
}

/** The Halation › Effect panel at its real anatomy; pass values for the ones the story moves. */
export function EffectPanel({ amount = 1, size = 1, format = '35 mm', rolloff = 0, startsAt = 1.9, compact, presetTarget, presetMenu, formatMenu, children, style }: {
  amount?: number; size?: number; format?: string; rolloff?: number; startsAt?: number; compact?: boolean; presetTarget?: string; presetMenu?: ReactNode; formatMenu?: ReactNode; children?: ReactNode; style?: CSSProperties
}) {
  // The phone column shows the panel's top rows only: the Halation switch, Glow and Amount
  if (compact) {
    return (
      <div className="halo-panel halo-panel--compact" style={style}>
        <Section>Glow</Section>
        <Slider label="Amount" value={amount} max={2} target="amount" />
        {children}
      </div>
    )
  }
  return (
    <div className="halo-panel" style={style}>
      <PanelTop lightroom target={presetTarget} menu={presetMenu} />
      <PanelTabs />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}><Check on>Halation</Check></div>
      <Section>Glow</Section>
      <Slider label="Amount" value={amount} max={2} target="amount" />
      <Slider label="Size" value={size} max={16} min={0.25} target="size" />
      <MenuValue label="Format" value={format} target="format" menu={formatMenu} />
      <Slider label="Roll-off" value={rolloff} max={1} target="rolloff" />
      <Section>Start</Section>
      <Slider label="Starts at" value={startsAt} max={6} target="starts" />
      <Slider label="Softness of start" value={1} max={2} filler />
      <Section>Color &amp; Landing</Section>
      <Slider label="Green return" value={1} max={2} filler />
      <Slider label="Landing" value={0.05} max={1} filler />
      {children}
    </div>
  )
}
