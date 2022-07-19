import { createRouter, createWebHashHistory } from 'vue-router'
import { isMobileTermial } from '@/utils/flexible'
import mobileRoutes from './modules/mobile-routes'
import pcRoutes from './modules/pc-routes'
const router = createRouter({
  history: createWebHashHistory(),
  routes: isMobileTermial.value ? mobileRoutes : pcRoutes
})
export default router