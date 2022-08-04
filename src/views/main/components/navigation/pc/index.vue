<template>
  <div class="bg-white sticky top-0 left-0 w-full z-10">
    <ul
      class="w-[800px] relative flex flex-wrap justify-center overflow-x-auto px-[10px] py-1 text-xs text-zinc-600 duration-200 overflow-auto mx-auto"
    >
      <!-- 箭头 -->
      <div
        class="absolute right-1 bottom-1 z-20 p-1 rounded cursor-pointer duration-200 hover:bg-zinc-200"
      >
        <m-svg-icon name="unfold" fillClass="fill-zinc-900"></m-svg-icon>
      </div>
      <!-- item -->
      <li></li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped></style>
