<template>
  <div>
    <button class=" text-sm text-center rounded duration-200 flex justify-center items-center"
            :class="[typeEnum[type], sizeEnum[sizeKey].button]"></button>
  </div>
</template>
<script>
// type
const typeEnum = {
  primary: 'text-white bg-zinc-800 hover:bg-zinc-900 active:bg-zinc-800',
  main: 'text-white bg-main hover:bg-hover-main active:bg-main',
  info: 'text-zinc-800 bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-200'
}
// size 
const sizeEnum = {
  // 文字按钮
  default: {
    button: 'w-8 h-4 text-base',
    icon: ''
  },
  // icon 按钮
  'icon-default': {
    button: 'w-4 h-4',
    icon: 'w-1.5 h-1.5'
  },
  small: {
    button: 'w-7 h-3 text-base',
    icon: ''
  },
  'icon-small': {
    button: 'w-3 h-3',
    icon: 'w-1.5 h-1.5'
  },

}
</script>
<script setup>
/**
 * ①type风格和size大小
 * ②让开发者通过props控制按钮
 * ③区分icon button和text button
 * ④依据数据实现视图
 * ⑤处理点击事件
 */

import { computed } from '@vue/reactivity';
const props = defineProps({
  // icon 图标
  icon: String,
  // icon颜色
  iconColor: String,
  // icon 类名（tailwind）
  iconClass: String,
  // 按钮风格
  type: {
    type: String,
    default: 'main',
    validator(val) {
      // 1.获取所有可选项
      const keys = Object.keys(typeEnum)
      const res = keys.includes(val)
      // 2.判断所选风格是否在选项中
      if (!res) {
        throw new Error(`type 类型必须是${key.join(',')}中的一个`)
      }
      return res
    }
  },
  // 尺寸大小
  size: {
    type: String,
    default: 'default',
    validator(val) {
      // 1.获取所有可选项
      const keys = Object.keys(sizeEnum).filter((key) => { !key.includes('icon') })
      const res = keys.includes(val)
      // 2.判断所选风格是否在选项中
      if (!res) {
        throw new Error(`size 类型必须是${key.join(',')}中的一个`)
      }
      return res
    }
  },
  // 点击按钮是是否需要动画
  isActiveAnim: {
    type: Boolean,
    default: true
  },
  // 是否需要loading状态
  isActiveLoading: {
    type: Boolean,
    default: false
  }
})

// props size
const sizeKey = computed(() => {
  return props.icon ? 'icon' + props.size : props.size
})
</script>

<style lang="scss" scoped>
</style>