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
        child: [
          {
            path: '/subarea/xiangqi',
            name: '象棋社'
          },
          {
            path: '/subarea/xinli',
            name: '心理协会'
          },
          {
            path: '/subarea/jisuanji',
            name: '计算机协会'
          },
          {
            path: '/subarea/shelian',
            name: '社团联合会'
          },
          {
            path: '/subarea/wushi',
            name: '舞狮队'
          },
          {
            path: '/subarea/wudao',
            name: '舞蹈社'
          },
          {
            path: '/subarea/dianjing',
            name: '电竞社'
          },
          {
            path: '/subarea/nvzi',
            name: '女子协会'
          },
          {
            path: '/subarea/yueyu',
            name: '粤语协会'
          }
        ]
      }
  ]
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
  }
}

export default {
  state,
  mutations
}