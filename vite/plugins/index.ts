import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import WindiCSS from 'vite-plugin-windicss'
import setupAutoImport from './auto-import'
import setupComponents from './components'

export default function setupVitePliguns() {
  const plugins: PluginOption[] = [vue(), vueJsx(), WindiCSS()]
  plugins.push(setupAutoImport())
  plugins.push(setupComponents())
  return plugins
}
