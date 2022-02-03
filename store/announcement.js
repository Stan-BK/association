const state = () => {
  return {
    count: 0,
    noAnnouncement: false,
    announcements: [],
    isRequest: false // 判断当前存在请求变量--防止用户快速切换路由引起的多次相同请求
  }
}

const mutations = {
  SET_COUNT: (state, count) => {
    state.count = count
  },
  SET_ANNOUNCEMENTS: (state, content) => {
    state.announcements = !content.isReset ? state.announcements.concat(content.announcements) : []
  },
  SET_ISREQUEST_true: (state) => {
    state.isRequest = true
  },
  SET_ISREQUEST_false: (state) => {
    state.isRequest = false
  }
}

const actions = {
  getAnnouncements({ state, commit }) {
    return new Promise((resolve, reject) => {
      if (!state.isRequest) {
        commit('SET_ISREQUEST_true') // 当前正处于请求状态
        this.$axios.$get(`/api/announcement?count=${state.count}`).then(res => {
          commit('SET_ISREQUEST_false') // 请求完毕，现处于未有请求的状态
          const announcements = res.data

          if (!announcements.length) {
            commit('SET_noMore_true', undefined, {
              root: true
            })
          } else {
            commit('SET_COUNT', state.count + announcements.length)
            commit('SET_ANNOUNCEMENTS', { announcements })
          }
          resolve(announcements.length)
        }).catch(error => {
          commit('SET_ISREQUEST_false') // 请求完毕，现处于未有请求的状态
          reject(error)
        })
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}