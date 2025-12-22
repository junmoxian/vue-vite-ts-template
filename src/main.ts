import { createApp } from 'vue'
import '@/styles/index.scss'
import App from './App.vue'
import SetupStore from '@/stores'
const app = createApp(App)
SetupStore(app)
app.mount('#app')
