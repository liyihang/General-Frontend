/**
 * 处理navigator中的category数据
 */
import { ALL_CATEGORY_ITEM, CATEGORY_DATA } from '@/constants'
import { getCategory } from '@/api/category'

export default {
  namespaced: true,
  state: () => {
    return {
      category: [CATEGORY_DATA]
    }
  },
  mutations: {
    setCategory(state, newCategory) {
      state.category = [ALL_CATEGORY_ITEM, ...newCategory]
    }
  },
  actions: {
    // 获取category数据保存到vuex中
    async useCategory(context) {
      const { categorys } = await getCategory()
      console.log(categorys);
      context.commit('setCategory', categorys)
    }
  }
}