<template>
  <div ref="ContainerTarget" class="group relative p-0.5 rounded-xl border-white duration-500 hover:bg-red-100/40">
    <div>
      <!-- search icon -->
      <m-svg-icon class="w-1.5 h-1.5 absolute translate-y-[-50%] top-[50%] left-2" name="search" color="#707070">
      </m-svg-icon>
      <!-- 输入框 -->
      <input class="block w-full h-[44px] pl-4 outline-0 bg-zinc-100 caret-zinc-400 rounded-xl text-zinc-900 tracking-wide text-sm font-semibold border border-zinc-100 duration-500 focus:border-red-300 group-hover:bg-white group-hover:border-zinc-200"
             placeholder="搜索" type="text" v-model="inputValue" @keyup.enter="onSearchHandle" @focus="onFocusHandle"
             @blur="onBlurHandle" />
      <!-- 删除图标 -->
      <m-svg-icon v-show="inputValue" name="input-delete"
                  class="w-1.5 h-1.5 absolute translate-y-[-50%] top-[50%] right-9 cursor-pointer duration-500"
                  @click="onCleanClick">
      </m-svg-icon>
      <!-- 分割线 -->
      <div
           class="opacity-0 h-1.5 w-[1px] absolute translate-y-[-50%] top-[50%] right-[62px] duration-500 bg-zinc-200 group-hover:opacity-100">
      </div>
      <!-- 按钮 -->
      <m-button class="opacity-0 absolute translate-y-[-50%] top-[50%] right-1 rounded-full group-hover:opacity-100"
                icon="search" iconColor="#ffffff" @click="onSearchHandle">
      </m-button>
    </div>
    <!-- 下拉区 -->
    <transition name="slide" mode="">
      <div v-if="$slots.dropdown" v-show="isFocus"
           class="max-h-[368px] w-full text-base overflow-auto bg-white absolute z-20 left-0 top-[56px] p-2 rounded border border-zinc-200 duration-200 hover:shadow-2xl">
        <slot name="dropdown" />
      </div>
    </transition>
  </div>
</template>
<script>
const EMIT_UPDATE_MODELVALUE = 'update:modelValue'
const EMIT_SEARCH = 'search'
const EMIT_CLEAR = 'clear'
const EMIT_INPUT = 'input'
const EMIT_FOCUS = 'focus'
const EMIT_BLUR = 'blur'
</script>
<script setup>
/**
 * 1.输入内容实现数据双向绑定
 * 2.搜索按钮在hover时展示
 * 3.一键清空文本功能
 * 4.控制下拉区的展示
 * 5.事件处理
 */

import { useVModel, onClickOutside } from '@vueuse/core'
import { ref, watch } from 'vue';
const props = defineProps({
  modelValue: {
    required: true,
    type: String,
  },
})
const emits = defineEmits([EMIT_UPDATE_MODELVALUE, EMIT_SEARCH, EMIT_CLEAR, EMIT_FOCUS, EMIT_BLUR, EMIT_INPUT])
const inputValue = useVModel(props)
// 监听输入
watch(inputValue, (val) => {
  emits(EMIT_INPUT, val)
})
// 清空input
const onCleanClick = () => {
  inputValue.value = ''
  emits(EMIT_CLEAR, '')
}
// 搜索
const onSearchHandle = () => {
  emits(EMIT_SEARCH, inputValue.value)
  console.log(inputValue.value)
}
// focus
const isFocus = ref(false)
const onFocusHandle = () => {
  isFocus.value = true
  emits(EMIT_FOCUS)
}
// blur
const onBlurHandle = () => {
  emits(EMIT_BLUR)
}
// 点击区域外消失弹窗
const ContainerTarget = ref(null)
onClickOutside(ContainerTarget, () => {
  isFocus.value = false
})
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>
