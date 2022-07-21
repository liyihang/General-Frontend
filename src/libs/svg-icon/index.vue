<template>
  <svg aria-hidden="true">
    <use :class="fillClass" :xlink:href="symbolId" :fill="color"> </use>
  </svg>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  // 要显示的svg
  name: {
    type: String,
    required: true
  },
  // svg颜色
  color: {
    type: String
  },
  // tailwind 指定的类名
  fillClass: {
    type: String
  }
})
// 真实svg图标名
const symbolId = computed(() => `#icon-${props.name}`)
</script>

<style lang="scss" scoped>
</style>