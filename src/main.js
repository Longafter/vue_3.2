import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import SvgICon from '@/icons'
import 'element-plus/dist/index.css'
import '@/router/permission'

const app = createApp(App)
SvgICon(app)
app.use(store).use(router).mount('#app')
