export default ({ app, store }) => {
  // 添加路由守卫
  app.router.beforeEach((to, from, next) => {
    store.commit('SET_LASTROUTE', from.path)
    next()
  })
}