<template>
  <div class=" w-full bg-white border-b border-b-zinc-200 px-1 py-2">
    <div class=" flex items-center">
      <img class=" h-4 cursor-pointer mr-2" src="https://www.imooc.com/static/img/index/logo2020.png" alt=""
           @click="onToHome">
      <header-search class=" mr-1"></header-search>
      <header-theme-vue class=" mr-1"></header-theme-vue>
      <header-my-vue></header-my-vue>
    </div>
  </div>
</template>

<script setup>
import headerSearch from './header-search/index.vue'
import headerMyVue from './header-my.vue'
import headerThemeVue from './header-theme.vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const onToHome = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped>
</style>