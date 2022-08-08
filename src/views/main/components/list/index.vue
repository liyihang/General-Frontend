<template>
  <div>
    <m-waterfall :data="pexelsData" nodeKey="id" :column="5" :picturePreLoading="true">
      <template v-slot="{ item, width }">
        <item-vue :data="item" :width="width"></item-vue>
      </template>
    </m-waterfall>
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
