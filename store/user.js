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
  },
  SET_article_collect (state, collect) {
    state.article_collect = collect
  },
  SET_announcement_collect (state, collect) {
    state.announcement_collect = collect
  },
  SET_has_new_notice (state, hasNewNotice) {
    state.hasNewNotice = hasNewNotice
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