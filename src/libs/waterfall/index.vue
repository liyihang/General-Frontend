 <template>
  <div class=" relative" ref="containertarget" :style="{ height: containerHeight + 'px' }">
    <!-- 数据渲染 -->
    <template v-if="columnWidth && data.length">
      <div v-for="(item, index) in data" :key="nodeKey ? item[nodeKey] : index"
        class="m-waterfall-item absolute duration-200"
        :style="{ width: columnWidth + 'px', left: item._style?.left + 'px', top: item._style?.top + 'px' }">
        <slot :item="item" :width="columnWidth" :index="index" />
      </div>
    </template>
    <div v-else>加载中……</div>
  </div>
</template>
 
 <script setup>
import { computed, onMounted, ref } from 'vue';

const props = defineProps({
  // 数据源
  data: {
    type: Object,
    required: true
  },
  // 唯一标识
  nodeKey: {
    type: String
  },
  // 列数
  column: {
    default: 2,
    type: Number
  },
  // 列间距
  columnSpacing: {
    default: 20,
    type: Number
  },
  // 行间距
  rowSpacing: {
    default: 20,
    type: Number
  },
  // 图片预读取
  picturePreLoading: {
    type: Boolean,
    default: true
  }
})

// 容器高度
const containerHeight = ref(240)
// 记录每列高度的容器 key 所在列， val 列高
const columnHeightObj = ref({})
// 记录每列高度对象
const useColumnHeightObj = () => {
  columnHeightObj.value = {}
  for (let i = 0; i < props.length; i++) {
    columnHeightObj.value[i] = {}

  }
}
// 容器实例
const containertarget = ref(null)
// 容器总宽度
const containerWidth = ref(0)
// 容器左侧距离
const containerLeft = ref(0)
// 计算容器宽度
const useContainerWidth = () => {
  const { paddingLeft, paddingRight } = getComputedStyle(containertarget.value, null)
  // 容器左边距
  containerLeft.value = parseFloat(paddingLeft)
  // 容器宽度
  containerWidth.value = containertarget.value.offsetWidth - parseFloat(paddingLeft) - parseFloat(paddingRight)
}
// 列宽
const columnWidth = ref(0)
// 列间距总计
const columnSpacingWidth = computed(() => {
  return (props.column - 1) * (props.columnSpacing)
})
// 列宽总计
const useColumnWidth = () => {
  // 计算容器宽度
  useContainerWidth()
  // console.log(containerWidth.value);
  // console.log(columnSpacingWidth.value);
  // 计算列宽
  columnWidth.value = (containerWidth.value - columnSpacingWidth.value) / props.column
}
onMounted(() => {
  useColumnWidth()
  console.log(containerHeight.value);
})

</script>
 
 <style lang="scss" scoped>
 </style>