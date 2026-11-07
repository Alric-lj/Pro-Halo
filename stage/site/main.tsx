import { createRoot } from 'react-dom/client'
import { StrictMode, type ComponentType } from 'react'

// The site's demos. index.html puts <div data-stage="halo-hero"></div> where a
// demo goes; this mounts the matching example into it. Built by
// `npm run build:site` into ../../stage-build/, which the static site loads.
const demos = import.meta.glob<{ default: ComponentType }>('../examples/halo-*/index.tsx')

for (const el of document.querySelectorAll<HTMLElement>('[data-stage]')) {
  const id = el.dataset.stage!
  const load = demos[`../examples/${id}/index.tsx`]
  if (!load) { console.warn(`stage: no demo named ${id}`); continue }
  load().then(({ default: Demo }) => {
    createRoot(el).render(<StrictMode><Demo /></StrictMode>)
  })
}
