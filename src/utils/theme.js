import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '@/constants'
import { watch } from 'vue'
import store from '../store'
// 监听系统主题变更

let matchMedia;
const watchSystemThemeChange = () => {
  if (matchMedia) return
  matchMedia = window.matchMedia('prefers_color_scheme:dark')
  // 监听主题变化
  matchMedia.onchange = () => {
    changeTheme(THEME_SYSTEM)
  }
}

// change theme   theme 主题的标记📌
const changeTheme = (theme) => {
  let themeClassName = ''
  switch (theme) {
    case THEME_LIGHT:
      themeClassName = 'light'
      break;

    case THEME_DARK:
      themeClassName = 'dark'
      break;
    case THEME_SYSTEM:
      watchSystemThemeChange()
      themeClassName = matchMedia.matches ? 'dark' : 'light'
      break;
  }
  document.querySelector('html').className = themeClassName
}
/**
 * 初始化主题
 */
export default () => {
  watch(
    () => store.getters.themeType,
    // html className
    changeTheme,
    // 修改html 的class
    {
      immediate: true
    }
  )
}