import { createStore } from 'vuex';
import getters from './getters'
import category from './modules/category'
import theme from './modules/theme'
import createPersistedState from 'vuex-persistedstate'
const store = createStore({
  getters,
  modules: {
    category,
    theme
  },
  plugins: [createPersistedState({
    key: 'cate',
    paths: ['category', 'theme']
  })]

})

export default store