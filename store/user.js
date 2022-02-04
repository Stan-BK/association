const state = () => {
  return {
    user_id: 0,
    user_role: 1,
    nickname: 'wbk',
    avatar: null,
    article_collect: null,
    announcement_collect: null
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
    }).catch(error => {
      this._vm.$message({
        type: 'error',
        message: error.data
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}