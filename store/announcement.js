const state = () => {
  return {
    count: 0,
    noAnnouncement: false,
    announcements: []
  }
}

const mutations = {
  SET_COUNT: (state, count) => {
    state.count = count
  },
  SET_ANNOUNCEMENTS: (state, content) => {
    state.announcements = !content.isReset ? state.announcements.concat(content.announcements) : []
  }
}

const actions = {
  getAnnouncements({ state, commit }) {
    return new Promise((resolve, reject) => {
      this.$axios.$get(`/api/announcement?count=${state.count}`).then(res => {
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