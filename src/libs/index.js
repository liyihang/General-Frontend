// import svgIcon from './svg-icon/index.vue'
// import popup from './popup/index.vue'
import { defineAsyncComponent } from 'vue'


export default {
  install(app) {
    // 自动注册
    // 1.获取当前路径下的所有index.vue
    const components = import.meta.glob('./*/index.vue')
    // 2.遍历组件
    for (const [fullPath, fn] of Object.entries(components)) {
      const componentName = 'm-' + fullPath.replace('./', '').split('/')[0]
      // 3.利用app.components
      app.component(componentName, defineAsyncComponent(fn))
    }
  }
} 