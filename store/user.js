const state = () => {
  return {
    user_id: 0,
    nickname: 'wbk',
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0628%2F29618e08j00qverj7001ec000ci00loc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643185728&t=1679ac48ad20a4975f77b58ecfaad7a5https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0628%2F29618e08j00qverj7001ec000ci00loc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643185728&t=1679ac48ad20a4975f77b58ecfaad7a5',
  }
}

const mutations = {
  SET_USERSTATUS(state, content) {
    for (const [key, value] of Object.entries(content)) {
      state[key] = value
    }
    console.log(state)
  }
}

const actions = {
  login() {
    this.$axios.$get('/api/user/login').then(res => {
      localStorage.setItem('authorization', res)
      this._vm.$message({
        type: 'success',
        message: '登录成功！'
      })
    })
  },
  getInfo({ commit }) {
    this.$axios.$get('/api/user/info').then(res => {
      commit('SET_USERSTATUS', res[0])
    }).catch(() => {
      this._vm.$message({
        type: 'error',
        message: '获取用户信息失败'
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}