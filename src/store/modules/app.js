import { login as loginApi } from '@/api/login'
import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    }
  },
  actions: {
    // 登录
    login({ commit }, userinfo) {
      return new Promise((resolve, reject) => {
        loginApi(userinfo)
          .then((res) => {
            commit('setToken', res.token)
            router.replace('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
