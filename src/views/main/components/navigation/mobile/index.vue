<template>
  <div>
    <ul>
      <li v-for="(item, index) in category" :key="item.id">{{ item.name }}</li>
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