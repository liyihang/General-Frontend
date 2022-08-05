<template>
  <m-popover placement="bottom-left">
    <!--named slot  show popover -->
    <template #reference>
      <m-svg-icon
        :name="svgIconName"
        class="w-4 h-4 p-1 cursor-pointer rounded-sm duration-200 outline-none hover:bg-zinc-100/60 dark:hover:bg-zinc-900"
        fillClass="fill-zinc-900 dark:fill-zinc-300"
      ></m-svg-icon>
    </template>
    <!-- slot show container -->
    <div class="w-[140px] overflow-hidden">
      <div
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800"
        v-for="item in themeArr"
        :key="item.id"
        @click="onItemClick(item)"
      >
        <m-svg-icon
          :name="item.icon"
          class="w-1.5 h-1.5 mr-1"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        ></m-svg-icon>
        <span class="text-zinc-800 text-sm dark:text-zinc-300">{{
          item.name
        }}</span>
      </div>
    </div>
  </m-popover>
</template>

<script setup>
import { useStore } from 'vuex'
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '@/constants'
import { computed } from 'vue'

const store = useStore()
const themeArr = [
  {
    id: '0',
    type: THEME_LIGHT,
    icon: 'theme-light',
    name: '极简白',
  },
  {
    id: '1',
    type: THEME_DARK,
    icon: 'theme-dark',
    name: '极简黑',
  },
  {
    id: '2',
    type: THEME_SYSTEM,
    icon: 'theme-system',
    name: '跟随系统',
  },
]
/**
 * 切换主题颜色功能
 * ①监听切换主题动作
 * ②保存当前主题到vuex中
 * ③根据vuex的主题，展示当前主题
 * ④根据vuex主题，修改html和css
 */
// 切换主题
const onItemClick = (item) => {
  store.commit('theme/changeTheme', item.type)
}
// 获取当前icon
const svgIconName = computed(() => {
  const newTheme = themeArr.find((item) => {
    return item.type === store.getters.themeType
  })
  return newTheme?.icon
})
</script>

<style lang="scss" scoped></style>
