const state = () => {
  return {
    user_id: 0,
    user_name: 'wbk',
    user_avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0628%2F29618e08j00qverj7001ec000ci00loc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643185728&t=1679ac48ad20a4975f77b58ecfaad7a5https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0628%2F29618e08j00qverj7001ec000ci00loc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643185728&t=1679ac48ad20a4975f77b58ecfaad7a5',
  }
}

const mutations = {

}

const actions = {
  login({ commit }) {
    this.$axios.$get('/api/user/login').then(res => {
      localStorage.setItem('authorization', res)
    })
  },
  getInfo() {
    this.$axios.$get('/api/user/info').then(res => {
      this._vm.$message({
        type: 'success',
        message: res.toString()
      })
    }).catch(e => {
      console.log(e)
    })
  }
}

export default {
  state,
  mutations,
  actions
}