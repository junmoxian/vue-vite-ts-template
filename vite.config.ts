import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
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
