import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SvgICon from '@/icons'
import '@/styles/index.scss'
import 'element-plus/dist/index.css'
import '@/router/permission'

const app = createApp(App)
SvgICon(app)
app.use(store).use(router).mount('#app')
