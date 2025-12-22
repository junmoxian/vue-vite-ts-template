import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const sidebarOpened = ref(true)
  const device = ref<'desktop' | 'mobile'>('desktop')

  function toggleSidebar() {
    sidebarOpened.value = !sidebarOpened.value
  }

  function closeSidebar() {
    sidebarOpened.value = false
  }

  function setDevice(newDevice: 'desktop' | 'mobile') {
    device.value = newDevice
  }
  return {
    sidebarOpened,
    device,
    toggleSidebar,
    closeSidebar,
    setDevice,
  }
})
