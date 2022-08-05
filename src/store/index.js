import { createStore } from 'vuex';
import getters from './getters'
import category from './modules/category'
import createPersistedState from 'vuex-persistedstate'
const store = createStore({
  getters,
  modules: {
    category
  },
  plugins: [createPersistedState({
    key: 'cate',
    paths: ['category']
  })]

})

export default store