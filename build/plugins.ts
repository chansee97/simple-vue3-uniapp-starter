import uni from '@dcloudio/vite-plugin-uni'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
import AutoImport from 'unplugin-auto-import/vite'

export default async () => {
  const UnoCSS = await import('unocss/vite').then(i => i.default)

  return [
    uni(),
    UniManifest(),
    UnoCSS(),
    AutoImport({
      imports: ['uni-app', 'vue', 'pinia'],
      dirs: ['src/hooks'],
      dts: 'src/types/auto-imports.d.ts',
      vueTemplate: true,
    }),

  ]
}
