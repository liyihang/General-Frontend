<template>
  <div>
    <teleport to="body">
      <!-- 蒙版 -->
      <transition name="fade">
        <div class=" w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"></div>
      </transition>
      <!-- 内容 -->
      <transition name="pop-down-up">
        <div v-bind="$attrs" class=" w-screen bg-white z-50 fixed bottom-0">
          <slot></slot>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.pop-down-up-enter-active,
.pop-down-up-leave-active {
  transition: all 0.3s;
}

.pop-down-up-enter-from,
.pop-down-up-enter-to {
  transform: translateY(100%);
}
</style>