<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { calculateTheTimeDifference } from '@/utils/date'
import { ref } from 'vue'
const store = useAppStore()
let curTime = ref(new Date())
setInterval(() => {
  curTime.value = Date.now()
  console.log(calculateTheTimeDifference(new Date('2025-12-21'), curTime.value))
}, 1000)
</script>

<template>
  <div class="box">app</div>
</template>

<style lang="scss" scoped>
.box {
  color: var(--color-danger);
}
</style>
