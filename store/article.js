const state = () => {
  return {
    articles: [],
    noArticle: false,
    articles_data: [{
      title: '文章标题',
      content: '文章内容',
      comment: '评论',
      author: '作者',
      avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0628%2F29618e08j00qverj7001ec000ci00loc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643185728&t=1679ac48ad20a4975f77b58ecfaad7a5https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0628%2F29618e08j00qverj7001ec000ci00loc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643185728&t=1679ac48ad20a4975f77b58ecfaad7a5',
      photo: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0628%2F29618e08j00qverj7001ec000ci00loc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643185728&t=1679ac48ad20a4975f77b58ecfaad7a5https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0628%2F29618e08j00qverj7001ec000ci00loc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643185728&t=1679ac48ad20a4975f77b58ecfaad7a5'
    },
    {
      title: '文章标题',
      content: '文章内容',
      comment: '评论',
      author: '作者',
      avatar: '',
      photo: '...'
    },
    {
      title: '文章标题',
      content: '文章内容',
      comment: '评论',
      author: '作者',
      avatar: '',
      photo: '...'
    },
    {
      title: '文章标题',
      content: '文章内容',
      comment: '评论',
      author: '作者',
      avatar: '',
      photo: '...'
    },
    {
      title: '文章标题',
      content: '文章内容',
      comment: '评论',
      author: '作者',
      avatar: '',
      photo: '...'
    },
    {
      title: '文章标题',
      content: '文章内容',
      comment: '评论',
      author: '作者',
      avatar: '',
      photo: '...'
    },
    {
      title: '文章标题',
      content: '文章内容',
      comment: '评论',
      author: '作者',
      avatar: '',
      photo: '...'
    },
    {
      title: '文章标题',
      content: '文章内容',
      comment: '评论',
      author: '作者',
      avatar: '',
      photo: '...'
    },
    {
      title: '文章标题',
      content: '文章内容',
      comment: '评论',
      author: '作者',
      avatar: '',
      photo: '...'
    },
    {
      title: '文章标题',
      content: '文章内容',
      comment: '评论',
      author: '作者',
      avatar: '',
      photo: '...'
    },
    {
      title: '文章标题',
      content: '文章内容',
      comment: '评论',
      author: '作者',
      avatar: '',
      photo: '...'
    },
    {
      title: '文章标题',
      content: '文章内容',
      comment: '评论',
      author: '作者',
      avatar: '',
      photo: '...'
    },
    {
      title: '文章标题',
      content: '文章内容',
      comment: '评论',
      author: '作者',
      avatar: '',
      photo: '...'
    },
    {
      title: '文章标题',
      content: '文章内容',
      comment: '评论',
      author: '作者',
      avatar: '',
      photo: '...'
    },
    {
      title: '文章标题',
      content: '文章内容',
      comment: '评论',
      author: '作者',
      avatar: '',
      photo: '...'
    },
    {
      title: '文章标题',
      content: '文章内容',
      comment: '评论',
      author: '作者',
      avatar: '',
      photo: '...'
    },
    {
      title: '文章标题',
      content: '文章内容',
      comment: '评论',
      author: '作者',
      avatar: '',
      photo: '...'
    },
    {
      title: '文章标题',
      content: '文章内容',
      comment: '评论',
      author: '作者',
      avatar: '',
      photo: '...'
    },
    {
      title: '文章标题',
      content: '文章内容',
      comment: '评论',
      author: '作者',
      avatar: '',
      photo: '...'
    }]
  }
}

const mutations = {
  SET_articles: (...args) => {
    const [ state ] = args
    state.articles.push(...state.articles_data.splice(0, 8))
    if (!state.articles_data.length)
      state.noArticle = true
  }
}

const actions = {
  getArticles({ state, commit }) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('https://www.baidu.com/').then(() => {
        commit('SET_articles')
        if (!state.articles_data.length) {
          commit('SET_noMore_true', undefined, {
            root: true
          })
        }
        resolve()
      }).catch(() => {
        commit('SET_articles')
        if (!state.articles_data.length) {
          commit('SET_noMore_true', undefined, {
            root: true
          })
        }
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