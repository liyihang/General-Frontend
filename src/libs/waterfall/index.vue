 <template>
  <div class=" relative" ref="containertarget" :style="{ height: containerHeight + 'px' }">
    <!-- 数据渲染 -->
    <template v-if="columnWidth && data.length">
      <div v-for="(item, index) in data" :key="nodeKey ? item[nodeKey] : index"
        class="m-water-full-item absolute duration-200" :style="{
          width: columnWidth + 'px',
          left: item._style.left + 'px',
          top: item._style.top + 'px'
        }">
        <slot :item="item" :width="columnWidth" :index="index" />
      </div>
    </template>
  </div>
</template>
 
 <script setup>
import { ref } from 'vue';

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
const containerHeight = ref(0)
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
const containertarget = ref(0)
// 容器总宽度
const containerWidth = ref(0)
</script>
 
 <style lang="scss" scoped>
 </style>