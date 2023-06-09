// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'

import 'virtual:windi.css'
import '@/assets/styles/index.scss'

const app = createApp(App)

app.use(createPinia())
  .use(router)
  .use(ElementPlus)
  .mount('#app')
