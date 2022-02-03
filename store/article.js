const state = () => {
  return {
    count: 0,
    noArticle: false,
    articles: [],
    isRequest: false  // 判断当前存在请求变量--防止用户快速切换路由引起的多次相同请求
  }
}

const mutations = {
  SET_COUNT: (state, count) => {
    state.count = count
  },
  SET_ARTICLES: (state, content) => {
    state.articles = !content.isReset ? state.articles.concat(content.articles) : []
  },
  SET_ISREQUEST_true: (state) => {
    state.isRequest = true
  },
  SET_ISREQUEST_false: (state) => {
    state.isRequest = false
  }
}

const actions = {
  getArticles({ state, commit }) {
    return new Promise((resolve, reject) => {
      if (!state.isRequest) {
        commit('SET_ISREQUEST_true') // 当前正处于请求状态
        this.$axios.$get(`/api/article?count=${state.count}`).then(res => {
          commit('SET_ISREQUEST_false') // 请求完毕，现处于未有请求的状态
          const articles = res
  
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