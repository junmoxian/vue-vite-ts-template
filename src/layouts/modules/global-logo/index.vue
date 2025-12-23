<template>
  <RouterLink to="/" class="flex-center w-full">
    <Svg-icon name="vite" class="text-36px" />
    <h2 v-show="showTitle" class="pl-8px text-16px text-primary font-bold transition duration-300 ease-in-out">
      后台管理系统
    </h2>
  </RouterLink>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/common/svg-icon.vue'
interface Props {
  showTitle?: boolean
}
defineOptions({
  name: 'GlobalLogo',
})
withDefaults(defineProps<Props>(), {
  showTitle: true,
})
</script>
