import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// One script and one stylesheet for the static site, with the demos' images as
// hashed files beside them. Served from /stage-build/ on halopro.app.
export default defineConfig({
  plugins: [react()],
  base: '/stage-build/',
  build: {
    target: 'es2022',
    outDir: resolve(__dirname, '../../stage-build'),
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: resolve(__dirname, 'main.tsx'),
      output: { entryFileNames: 'halo-stage.js', chunkFileNames: 'chunk-[hash].js', assetFileNames: (a) => a.name && a.name.endsWith('.css') ? 'halo-stage.css' : '[name]-[hash][extname]' },
    },
  },
  resolve: { dedupe: ['react', 'react-dom'] },
})
