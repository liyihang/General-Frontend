<template>
  <div>
    <div class=" relative" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <div>
        <!--named slot  show popover -->
        <slot name="reference"></slot>
      </div>
    </div>
    <!-- 气泡展示 -->
    <transition name="slide">
      <div v-show="isVisible" class=" absolute p-1 z-20 bg-white border rounded-md">
        <!-- slot show container -->
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isVisible = ref(false)
// 鼠标移入触发
const onMouseEnter = () => {
  isVisible.value = true
}
// 鼠标移出触发
const onMouseLeave = () => {
  isVisible.value = false

}
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