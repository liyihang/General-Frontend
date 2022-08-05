import { THEME_LIGHT, THEME_DARK } from '@/constants'
import { watch } from 'vue'
import store from '../store'
/**
 * 初始化主题
 */
export default () => {
  watch(
    () => store.getters.themeType,
    (val) => {
      // html className
      let themeClassName = ''
      switch (val) {
        case THEME_LIGHT:
          themeClassName = 'light'
          break;

        case THEME_DARK:
          themeClassName = 'dark'
          break;
      }
      // 修改html 的class
      document.querySelector('html').className = themeClassName
    }), {
    immediate: true
  }
}