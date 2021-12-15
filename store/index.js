const state = () => {
  return {
    fromHome: false, // 记录是否从首页跳转
    routes: [{
      path: '/square',
      name: '首页'
    }, {
      name: '分区',
      child: [
        {
          path: '/subarea',
          name: '象棋社'
        },
        {
          path: '/subarea',
          name: '心理协会'
        },
        {
          path: '/subarea',
          name: '计算机协会'
        },
        {
          path: '/subarea',
          name: '社团联合会'
        },
        {
          path: '/subarea',
          name: '舞狮队'
        },
        {
          path: '/subarea',
          name: '舞蹈社'
        },
        {
          path: '/subarea',
          name: '电竞社'
        },
        {
          path: '/subarea',
          name: '女子协会'
        },
        {
          path: '/subarea',
          name: '粤语协会'
        }
      ]
    },{
      path: '/square',
      name: '首页'
    },
  ]
  }
}

const mutations = {
  SET_FROMHOME(state) {
    state.fromHome = !state.fromHome
  }
}

export default {
  state,
  mutations
}