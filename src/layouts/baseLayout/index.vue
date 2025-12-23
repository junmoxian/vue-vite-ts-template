<template>
  <!--  <div>baseLayout</div>-->
  <GlobalHeader />
  <GlobalLogo :show-title="show" />
  <button @click="show = !show">点击隐藏</button>
</template>

<script setup lang="ts">
import GlobalHeader from '@/layouts/modules/global-header/index.vue'
import GlobalLogo from '@/layouts/modules/global-logo/index.vue'

const show = ref(true)
</script>
