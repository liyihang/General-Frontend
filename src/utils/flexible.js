import { computed } from 'vue'
import { PC_DEVICE_WIDTH } from '../constants'

/**
 * 判断当前是否是移动端
 */
export const isMobileTermial = computed(() => {
  return document.documentElement.clientWidth < PC_DEVICE_WIDTH
})