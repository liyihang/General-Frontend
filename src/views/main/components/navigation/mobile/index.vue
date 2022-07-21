<template>
  <div class="bg-white sticky top-0 left-0 z-10 ">
    <ul class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden">
      <li v-for="(item, index) in category" :key="item.id" class="shrink-0 p-1.5 py-0.5 z-10 duration-200">{{ item.name
      }}</li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  category: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
</style>