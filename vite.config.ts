import { defineConfig } from 'vite'
import { resolve, join } from 'path'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders' // 用于从文件系统加载图标
import Components from 'unplugin-vue-components/vite'
const collectionName = 'icon-local'.replace(`icon-`, '') // 自定义图标集合名称 ===> local
const localIconPath = join(process.cwd(), 'src/assets/svg') // 自定义图标文件夹路径
console.log(localIconPath, 'localIconPath')
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // svg 图标插件
    createSvgIconsPlugin({
      // 指定要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
      //指定 symbolId 格式
      symbolId: 'icon-[dir]-[name]',
      // 插入位置
      inject: 'body-last',
      // 仅为本地 svg 图标设置唯一 id，防止和其他 svg 图标 id 冲突
      customDomId: '__SVG_ICON_LOCAL__',
    }),
    // 自动导入插件
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/typings/auto-imports.d.ts',
      // eslintrc: {
      //   enabled: true,
      // },
    }),
    // unocss 插件
    UnoCSS(),
    Components({
      dts: 'src/typings/components.d.ts',
      types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
      resolvers: [
        // auto import Element Plus components。 full import to see /src/plugins/ui.ts
        IconsResolver({
          customCollections: [collectionName],
          componentPrefix: 'icon',
        }),
      ],
    }),
    // Icons 插件
    Icons({
      scale: 1, // Scale of icons against 1em
      compiler: 'vue3', // 'vue2', 'vue3', 'jsx'
      autoInstall: true, // 自动安装图标包
      customCollections: {
        [collectionName]: FileSystemIconLoader(localIconPath, (svg) =>
          svg.replace(/^<svg\s/, '<svg width="1em" height="1em" '),
        ),
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname, './'),
    },
  },
  // css: {
  //     preprocessorOptions: {
  //         scss: {
  //             additionalData: ``,
  //         },
  //     },
  // },
})
