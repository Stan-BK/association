const state = () => {
  return {
    lastRoute: '', // 记录上一页路由
    fromHome: false, // 记录是否从首页跳转，以供Loading组件内部判断
    isBottom: false, // 记录当前加载内容是否足以填充视口到底部
    firstIn: false,
    noMore: false,
    route_catalog: '',
    route_type: '',
    routes: [
      {
        path: '/square/article',
        name: '首页'
      },
      {
        name: '分区',
        child: []
      }
    ],
    isDarkMode: false,
    background: 'http://source.geminikspace.com/background.jpg'
  }
}

const mutations = {
  SET_fromHome(state) {
    state.fromHome = !state.fromHome
  },
  SET_noMore_true(state) {
    state.noMore = true
  },
  SET_noMore_false(state) {
    state.noMore = false
  },
  SET_isBottom_true(state) {
    state.isBottom = true
  },
  SET_isBottom_false(state) {
    state.isBottom = false
  },
  SET_firstIn_true(state) {
    state.firstIn = true
  },
  SET_firstIn_false(state) {
    state.firstIn = false
  },
  SET_ROUTE_CATALOG(state, value) {
    state.route_catalog = value
  },
  SET_ROUTE_TYPE(state, value) {
    state.route_type = value
  },
  SET_LASTROUTE(state, value) {
    state.lastRoute = value
  },
  SET_routeList(state, value) {
    state.routes[1].child.push(...value)
  },
  SET_darkMode(state) {
    state.isDarkMode = !state.isDarkMode
  },
  SET_adminRoute(state) {
    if (state.user.user_role === 2) {
      !state.routes[2] && state.routes.push({ 
        path: state.user.user_id === 1 ? '/super_admin' : '/admin',
        name: '后台'})
    } else {
      state.routes[2] && state.routes.pop()
    }
  },
}

const actions = {
  getRouteList({ commit }) {
    this.$axios.$get('/api/association/list').then(res => {
      commit('SET_routeList', res)
    })
  }
}

export default {
  state,
  mutations,
  actions
}