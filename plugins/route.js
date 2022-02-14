export default ({ app, store }) => {
  store.dispatch('getRouteList') // 获取社团路由表
  // 添加路由守卫
  app.router.beforeEach((to, from, next) => {
    store.commit('SET_LASTROUTE', from.path)
    next()
  })
}