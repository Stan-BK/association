export default function({  store, route }) {
  const routeArr = route.name.split('-')
  // 获取路由范围值：square或subarea
  if (routeArr[0]) {
    store.commit('SET_ROUTE_CATALOG', routeArr[0])
  }
  // 获取路由展示类型：article或announcement
  if (routeArr[0] === 'square' && routeArr[1]) {
    store.commit('SET_ROUTE_TYPE', routeArr[1])
  } else if (routeArr[0] === 'subarea' && routeArr[2]) {
    store.commit('SET_ROUTE_TYPE', routeArr[2])
  }
  store.commit('SET_firstIn_true')
  store.commit('SET_noMore_false')
}