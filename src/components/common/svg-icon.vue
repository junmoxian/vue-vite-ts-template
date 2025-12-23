<template>
  <!-- 设置 1em 会让 SVG 继承父元素的字体大小 -->
  <svg aria-hidden="true" width="1em" height="1em" class="svg-icon">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#333',
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    return { symbolId }
  },
})
</script>

<style lang="scss" scoped>
.svg-icon {
  display: inline-block;
  vertical-align: middle;
  fill: currentColor;
}
</style>
