import Components from 'unplugin-vue-components/vite'

export default function setupComponents() {
  return Components({
    dirs: ['src/components'],
    include: [/\.vue$/, /\.vue\?vue/, /\.jsx$/, /\.tsx$/],
    dts: 'types/components.d.ts',
  })
}
