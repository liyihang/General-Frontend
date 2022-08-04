/**
 * 处理navigator中的category数据
 */
import { ALL_CATEGORY_ITEM } from '@/constants'
import { getCategory } from '@/api/category'

export default {
  namespaced: true,
  state: () => {
    return {
      category: [ALL_CATEGORY_ITEM]
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