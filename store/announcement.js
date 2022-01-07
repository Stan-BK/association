const state = () => {
  return {
    announcements: [],
    noAnnouncement: false,
    announcements_data: [{
      author: '作者',
      title: '公告',
      content: '公告内容'
    }]
  }
}

const mutations = {
  SET_announcements: (state) => {
    state.announcements.push(...state.announcements_data.splice(0, 5))
    if (!state.announcements_data.length)
      state.noAnnouncement = true
  }
}

const actions = {
  getAnnouncements({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('https://www.baidu.com/').then(() => {
        commit('SET_announcements')
        resolve()
      }).catch(() => {
        commit('SET_announcements')
        resolve()
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}