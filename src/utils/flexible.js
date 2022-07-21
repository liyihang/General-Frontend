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
/**
 * 动态指定rem的值为40px
 * 根据用户屏幕的宽度进行计算，把计算的值赋给跟html作为fontsize的大小
 */
export const useRem = () => {
  const MAX_FONT_SIZE = 40
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
    html.style.fontSize = fontSize + 'px'

  })
}