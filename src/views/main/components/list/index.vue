<template>
  <div>
    <item-vue v-for="item in pexelsData" :key="item.id" :data="item"></item-vue>
  </div>
</template>

<script setup>
import { getPexelsList } from '@/api/pexels.js'
import { ref } from 'vue'
import itemVue from './item.vue'

/**
 *构建请求参数
 */
let query = {
  page: 1,
  size: 20,
}
const pexelsData = ref([])
const getPexelsData = async () => {
  const res = await getPexelsList(query)
  pexelsData.value = res.list
}
getPexelsData()
</script>
<style lang="scss" scoped>
</style>
