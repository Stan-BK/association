const state = () => {
  return {
    user_name: 'wbk',
    user_avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0628%2F29618e08j00qverj7001ec000ci00loc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643185728&t=1679ac48ad20a4975f77b58ecfaad7a5https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0628%2F29618e08j00qverj7001ec000ci00loc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643185728&t=1679ac48ad20a4975f77b58ecfaad7a5',
    fromHome: false, // 记录是否从首页跳转
    firstIn: false, // 记录当前路由是否第一次进入，该属性提供给IntersectionObserver
    routes: [
      {
      path: '/square',
      name: '首页'
      },
      {
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
      },
      {
        path: '/square',
        name: '首页'
      },
  ]
  }
}

const mutations = {
  SET_FROMHOME(state) {
    state.fromHome = !state.fromHome
  },
  SET_FIRSTIN_TRUE(state) {
    state.firstIn = true
  },
  SET_FIRSTIN_FALSE(state) {
    state.firstIn = false
  }
}

export default {
  state,
  mutations
}