import router from './index'
import store from '@/store'

const whiteList = ['/login'] // 不需要登录及可以访问的页面

router.beforeEach((to, from, next) => {
  // 判断是否登录(token是否存在)
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
