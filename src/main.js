import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { useRem } from './utils/flexible'
import mLibs from './libs'
import './style/index.scss'
// 注册svg
import 'virtual:svg-icons-register'
useRem()
createApp(App).use(router).use(store).use(mLibs).mount('#app')
