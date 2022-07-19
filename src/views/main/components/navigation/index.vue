<template>
  <mobile-navigation v-if="isMobileTermial" />
</template>

<script setup>
import { isMobileTermial } from '@/utils/flexible'
import mobileNavigation from './mobile/index.vue'
</script>

<style lang="scss" scoped>
</style>