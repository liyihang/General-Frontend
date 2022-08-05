import { THEME_LIGHT } from '@/constants'

export default {
  namespaced: true,
  state: () => ({
    themeType: THEME_LIGHT
  }),
  mutations: {
    changeTheme(state, newTheme) {
      state.themeType = newTheme
    }
  }
}