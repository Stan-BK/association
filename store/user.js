const inital = {
  user_id: 0,
  user_role: 0,
  nickname: '',
  avatar: null,
  article_collect: null,
  announcement_collect: null,
  association: {}
}

const state = () => {
  return {
    user_id: 0,
    user_role: 0,
    nickname: '',
    avatar: null,
    article_collect: null,
    announcement_collect: null,
    association: {}
  }
}

const mutations = {
  SET_USERSTATUS(state, content) {
    for (const [key, value] of Object.entries(content)) {
      state[key] = value
    }
  },
  LOGOUT(state) {
    for (const [key, value] of Object.entries(inital)) {
      state[key] = value
    }
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
    return new Promise((resolve, reject) => {
      this.$axios.$get('/api/user/info').then(res => {
        commit('SET_USERSTATUS', res)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}