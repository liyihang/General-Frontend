<template>
  <m-popover class="flex items-center" placement="bottom-left">
    <template #reference>
      <div
        class="relative flex items-center px-0.5 rounded-sm cursor-pointer duration-200 outline-none hover:bg-zinc-100 dark:hover:bg-zinc-900"
      >
        <!-- 头像 -->
        <img class="w-3 h-3 rounded-sm" src="/src/assets/images/logo.png" />
        <!-- <img class="w-3 h-3 rounded-sm"
             src="https://himg.bdimg.com/sys/portrait/item/wise.1.120c85cf.v7-qnE5vKdlp63X3ya5uuA.jpg" /> -->
        <!-- 下箭头 -->
        <m-svg-icon
          name="down-arrow"
          class="w-1.5 h-1.5 ml-0.5"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        ></m-svg-icon>
        <m-svg-icon
          name="vip"
          class="w-1.5 h-1.5 absolute right-[16px] bottom-0"
        ></m-svg-icon>
      </div>
    </template>
    <div class="w-[140px] overflow-hidden">
      <div
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-900"
        v-for="item in menuArr"
        :key="item.id"
      >
        <m-svg-icon
          :name="item.icon"
          class="w-1.5 h-1.5 mr-1"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        >
        </m-svg-icon>
        <span class="text-zinc-900 text-sm dark:text-zinc-300">{{
          item.title
        }}</span>
      </div>
    </div>
  </m-popover>
</template>

<script setup>
// 构建menu数据源
const menuArr = [
  {
    id: 0,
    title: '个人资料',
    icon: 'profile',
    path: '/profile',
  },
  {
    id: 1,
    title: '升级VIP',
    icon: 'vip-profile',
    path: '/member',
  },
  {
    id: 2,
    title: '退出登录',
    icon: 'logout',
    path: '',
  },
]
</script>

<style lang="scss" scoped></style>
