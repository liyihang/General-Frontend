<template>
  <div class="bg-white dark:bg-zinc-900 sticky top-0 left-0 z-10 duration-500">
    <ul
      ref="ulTarget"
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
    >
      <!-- 折叠菜单 -->
      <!-- 滑块 -->
      <li
        ref="sliderTarget"
        :style="sliderStyle"
        class="absolute h-[22px] bg-zinc-900 dark:bg-zinc-800 rounded-lg duration-200"
      ></li>
      <!-- icon -->
      <li
        class="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white dark:bg-zinc-900 z-20 shadow-l-white dark:shadow-l-zinc"
        @click="onShowPop"
      >
        <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
      </li>
      <li
        :ref="setItemRef"
        v-for="(item, index) in $store.getters.categorys"
        :key="item.id"
        class="shrink-0 p-1.5 py-0.5 z-10 duration-200 last:mr-4"
        @click="onItemClick(index)"
        :class="{ 'text-zinc-100': currentCategoryIndex === index }"
      >
        {{ item.name }}
      </li>
    </ul>
    <m-popup v-model="isVisible">
      <Menu @onItemClick="onItemClick"></Menu>
    </m-popup>
  </div>
</template>

<script setup>
import { onBeforeUpdate, ref, watch } from 'vue'
import { useScroll } from '@vueuse/core'
import Menu from '@/views/main/components/menu/index.vue'
// defineProps({
//   category: {
//     type: Array,
//     required: true
//   }
// })
// slider
const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '52px',
})
// index
const currentCategoryIndex = ref(0)
// get items
let itemRefs = []
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el)
  }
}
// 重置itemRef
onBeforeUpdate(() => {
  itemRefs = []
})
// 获取ul
const ulTarget = ref(null)
const { x: ulScrollLeft } = useScroll(ulTarget)

watch(currentCategoryIndex, (val) => {
  const { left, width } = itemRefs[val].getBoundingClientRect()
  sliderStyle.value = {
    // slider 位置 = ul横向滚动位置+当前元素的left -padding
    transform: `translateX(${ulScrollLeft.value + left - 10}px)`,
    width: width + 'px',
  }
})
// click
const onItemClick = (index) => {
  currentCategoryIndex.value = index
  isVisible.value = false
}
// popup
const isVisible = ref(false)
const onShowPop = () => {
  isVisible.value = true
}
</script>
