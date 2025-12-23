import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives' // 用于支持 @apply 指令
import transformerVariantGroup from '@unocss/transformer-variant-group' // 用于支持变体组 语法 如 hover:(bg-red-500 text-white)
import presetWind3 from '@unocss/preset-wind3' // 类 Tailwind CSS 的预设

export default defineConfig({
  content: {
    pipeline: {
      exclude: ['node_modules', 'dist'],
    },
  },
  theme: {
    fontSize: {
      'icon-xs': '0.875rem',
      'icon-small': '1rem',
      icon: '1.125rem',
      'icon-large': '1.5rem',
      'icon-xl': '2rem',
    },
  },
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'inline-flex-center': 'inline-flex justify-center items-center',
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [presetWind3()],
})
