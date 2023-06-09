import { defineConfig } from 'vite'

import setupVitePliguns from './vite/plugins'
import alias from './vite/alias'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: setupVitePliguns(),
  resolve: {
    alias,
  },
})
