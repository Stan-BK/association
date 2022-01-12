const state = () => {
  return {
    announcements: [],
    noAnnouncement: false,
    announcements_data: [{
      author: '作者',
      title: '公告',
      content: '公告内容'
    },{
      author: '作者',
      title: '公告',
      content: '公告内容'
    } ]
  }
}

const mutations = {
  SET_announcements: (state) => {
    state.announcements.push(...state.announcements_data.splice(0, 6))
    if (!state.announcements_data.length)
      state.noAnnouncement = true
  }
}

const actions = {
  getAnnouncements({ state, commit }) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('https://www.baidu.com/').then(() => {
        commit('SET_announcements')
        if (!state.announcements_data.length) {
          commit('SET_noMore_true', undefined, {
            root: true
          })
        }
        resolve(state.noAnnouncement)
      }).catch(() => {
        commit('SET_announcements')
        if (!state.announcements_data.length) {
          commit('SET_noMore_true', undefined, {
            root: true
          })
        }
        resolve(state.noAnnouncement)
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}