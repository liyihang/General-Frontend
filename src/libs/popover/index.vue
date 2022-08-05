<template>
  <div class="relative" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div ref="referenceTarget">
      <!--named slot  show popover -->
      <slot name="reference"></slot>
    </div>
    <!-- 气泡展示 -->
    <transition name="slide">
      <div
        v-show="isVisible"
        class="absolute p-1 z-20 bg-white dark:bg-zinc-900 border dark:border-zinc-700 rounded-md"
        ref="containerTarget"
        :style="contentStyle"
      >
        <!-- slot show container -->
        <slot />
      </div>
    </transition>
  </div>
</template>
<script>
// 延迟关闭时间
const DELAY_TIME = 100
/**
 * ①气泡位置
 * 左上
 * 左下
 * 右上
 * 右下
 */
const PROP_TOP_LEFT = 'top-left'
const PROP_TOP_RIGHT = 'top-right'
const PROP_BOTTOM_LEFT = 'bottom-left'
const PROP_BOTTOM__RIGHT = 'bottom-right'
const placementEnum = [
  PROP_TOP_LEFT,
  PROP_TOP_RIGHT,
  PROP_BOTTOM_LEFT,
  PROP_BOTTOM__RIGHT,
]
</script>
<script setup>
/**
 * 位置设置
 * ①指定位置常量
 * ②通过props控制位置
 * ③获取dom元素，创建获取元素尺寸的方法
 * ④生成气泡样式对象，控制气泡位置
 * ⑤根据props计算样式
 */

import { nextTick, ref, watch } from 'vue'
//② props定义

const props = defineProps({
  placement: {
    type: String,
    default: PROP_TOP_LEFT,
    validator(val) {
      const res = placementEnum.includes(val)
      if (!res) {
        throw new Error(`placement 必须是${placementEnum.join(',')}中的一个`)
      }
      return res
    },
  },
})
const isVisible = ref(false)
// 鼠标移入触发
let timeout
const onMouseEnter = () => {
  isVisible.value = true
  if (timeout) {
    clearTimeout(timeout)
  }
}
// 鼠标移出触发
const onMouseLeave = () => {
  timeout = setTimeout(() => {
    isVisible.value = false
    timeout = null
  }, DELAY_TIME)
}
// ③计算元素尺寸
const referenceTarget = ref(null)
const containerTarget = ref(null)
const getElementSize = (target) => {
  if (!target) return
  return {
    width: target.offsetWidth,
    height: target.offsetHeight,
  }
}
// ④生成气泡样式对象，计算气泡位置
const contentStyle = ref({
  top: 0,
  left: 0,
})
// ⑤气泡展示时进行计算
watch(isVisible, (val) => {
  if (!val) return
  nextTick(() => {
    switch (props.placement) {
      case PROP_TOP_RIGHT:
        ;(contentStyle.value.top = 0),
          (contentStyle.value.left =
            -getElementSize(containerTarget.value).width + 'px')
        break
      case PROP_TOP_LEFT:
        ;(contentStyle.value.top = 0),
          (contentStyle.value.left =
            getElementSize(referenceTarget.value).width + 'px')
        break
      case PROP_BOTTOM_LEFT:
        ;(contentStyle.value.top =
          getElementSize(referenceTarget.value).width + 'px'),
          (contentStyle.value.left =
            -getElementSize(containerTarget.value).width + 'px')
        break
      case PROP_BOTTOM__RIGHT:
        ;(contentStyle.value.top =
          getElementSize(referenceTarget.value).height + 'px'),
          (contentStyle.value.left =
            getElementSize(referenceTarget.value).width + 'px')
        break
    }
  })
})
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
