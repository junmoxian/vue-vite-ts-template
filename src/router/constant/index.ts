// import BlankLayout from '@/layouts/blankLayout/index.vue'
import BaseLayout from '@/layouts/baseLayout/index.vue'
export const CONSTANT_ROUTES = [
  {
    path: '/',
    name: 'Home',
    component: BaseLayout,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/_builtin/login/index.vue'),
  },
]
