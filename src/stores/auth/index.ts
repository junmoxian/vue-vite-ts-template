import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const user = ref<{ id: number; name: string } | null>(null)

  function login(userInfo: { id: number; name: string }) {
    isAuthenticated.value = true
    user.value = userInfo
  }

  function logout() {
    isAuthenticated.value = false
    user.value = null
  }

  return {
    isAuthenticated,
    user,
    login,
    logout,
  }
})
