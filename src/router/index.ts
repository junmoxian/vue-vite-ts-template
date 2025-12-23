import { createRouter } from 'vue-router'
import { createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
import { CONSTANT_ROUTES } from './constant'
const routes = createRouter({
  history: createWebHashHistory(),
  routes: [...CONSTANT_ROUTES],
})

export default (app: App) => {
  app.use(routes)
}
