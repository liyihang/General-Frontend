<template>
  <div>
    <button
      class="text-sm text-center rounded-xl duration-200 flex justify-center items-center"
      :class="
        ([typeEnum[type], sizeEnum[sizeKey].button],
        { 'active:scale-105': isActiveAnim })
      "
      @click="onBtnClick"
    >
      <!-- loading -->
      <m-svg-icon
        v-if="loading"
        name="loading"
        class="h-2 w-2 animate-spin mr-1"
      ></m-svg-icon>
      <!-- icon 按钮 -->
      <m-svg-icon
        v-if="icon"
        :name="icon"
        class="m-auto"
        :class="sizeEnum[sizeKey].icon"
        :color="iconColor"
        :fillClass="iconClass"
      >
      </m-svg-icon>
      <!-- 文字按钮 -->
      <slot v-else />
    </button>
  </div>
</template>
<script>
const EMITS_CLICK = 'click'

// type
const typeEnum = {
  primary:
    'text-white bg-zinc-800 dark:bg-zinc-900 hover:bg-zinc-900 dark:hover:bg-zinc-700 active:bg-zinc-800 dark:active:bg-zinc-700',
  main: 'text-white bg-main dark:bg-zinc-900  hover:bg-hover-main  dark:hover:bg-zinc-700 active:bg-main dark:active:bg-zinc-700',
  info: 'text-zinc-800 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 active:bg-zinc-200 dark:active:bg-zinc-700',
}
// size
const sizeEnum = {
  // 文字按钮
  default: {
    button: 'w-8 h-4 text-base',
    icon: '',
  },
  // icon 按钮
  'icon-default': {
    button: 'w-4 h-4',
    icon: 'w-1.5 h-1.5',
  },
  small: {
    button: 'w-7 h-3 text-base',
    icon: '',
  },
  'icon-small': {
    button: 'w-3 h-3',
    icon: 'w-1.5 h-1.5',
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

import { computed } from '@vue/reactivity'
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
    },
  },
  // 尺寸大小
  size: {
    type: String,
    default: 'default',
    validator(val) {
      // 1.获取所有可选项
      const keys = Object.keys(sizeEnum).filter((key) => !key.includes('icon'))
      const res = keys.includes(val)
      // 2.判断所选风格是否在选项中
      if (!res) {
        throw new Error(`size 类型必须是${key.join(',')}中的一个`)
      }
      return res
    },
  },
  // 点击按钮是是否需要动画
  isActiveAnim: {
    type: Boolean,
    default: true,
  },
  // 是否需要loading状态
  loading: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits([EMITS_CLICK])
// props size
const sizeKey = computed(() => {
  return props.icon ? 'icon-' + props.size : props.size
})
// btn click
const onBtnClick = () => {
  if (props.loading) return
  emits(EMITS_CLICK)
}
</script>

<style lang="scss" scoped></style>
