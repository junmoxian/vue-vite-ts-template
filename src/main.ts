import { createApp } from 'vue'
import '@/styles/index.scss'
import App from './App.vue'
import SetupStore from '@/stores'
import SetupRouter from '@/router'
// 引入svg图标注册脚本
import 'virtual:svg-icons-register'
// 引入unocss 样式
import 'uno.css'
const app = createApp(App)
SetupStore(app)
SetupRouter(app)
app.mount('#app')
