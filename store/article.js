const state = () => {
  return {
    count: 0,
    noArticle: false,
    articles: []
  }
}

const mutations = {
  SET_COUNT: (state, count) => {
    state.count = count
  },
  SET_ARTICLES: (state, content) => {
    state.articles = !content.isReset ? state.articles.concat(content.articles) : []
  }
}

const actions = {
  getArticles({ state, commit }) {
    return new Promise((resolve, reject) => {
      this.$axios.$get(`/api/article?count=${state.count}`).then(res => {
        const articles = res.data

        if (!articles.length) {
          commit('SET_noMore_true', undefined, {
            root: true
          })
        } else {
          commit('SET_COUNT', state.count + articles.length)
          commit('SET_ARTICLES', { articles })
        }
        resolve(articles.length)
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