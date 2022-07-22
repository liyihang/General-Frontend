<template>
  <mobile-navigation v-if="isMobileTermial" :category="category" />
</template>

<script setup>
import { isMobileTermial } from '@/utils/flexible'
import mobileNavigation from './mobile/index.vue'
import { getCategory } from '@/api/category'
import { ref } from 'vue'
import { ALL_CATEGORY_ITEM } from '@/constants'

const category = ref([])
const getCategoryData = async () => {
  const res = await getCategory()
  console.log(res)
  category.value = res.categorys
  category.value.unshift(ALL_CATEGORY_ITEM)
}
getCategoryData()
</script>

<style lang="scss" scoped>
</style>