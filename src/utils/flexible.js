import { computed } from 'vue'
import { PC_DEVICE_WIDTH } from '@/constants'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
/**
 * 判断当前是否是移动端
 */
export const isMobileTermial = computed(() => {
  return width.value < PC_DEVICE_WIDTH
})