const state = () => {
  return {
    articles: [
      // {
      //   title: '文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标文章标题文章标题文章标题题',
      //   content: '文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容',
      //   comment: '评论',
      //   author: '作者',
      //   photo: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0628%2F29618e08j00qverj7001ec000ci00loc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643185728&t=1679ac48ad20a4975f77b58ecfaad7a5https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0628%2F29618e08j00qverj7001ec000ci00loc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643185728&t=1679ac48ad20a4975f77b58ecfaad7a5',
      //   avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0628%2F29618e08j00qverj7001ec000ci00loc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643185728&t=1679ac48ad20a4975f77b58ecfaad7a5https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0628%2F29618e08j00qverj7001ec000ci00loc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643185728&t=1679ac48ad20a4975f77b58ecfaad7a5'
      // },
      // {
      //   title: '文章标题',
      //   content: '文章内容',
      //   comment: '评论',
      //   author: '作者',
      //   photo: '...'
      // },
      // {
      //   title: '文章标题',
      //   content: '文章内容',
      //   comment: '评论',
      //   author: '作者'
      // },
      // {
      //   title: '文章标题',
      //   content: '文章内容',
      //   comment: '评论',
      //   author: '作者'
      // },
      // {
      //   title: '文章标题',
      //   content: '文章内容',
      //   comment: '评论',
      //   author: '作者'
      // },
      // {
      //   title: '文章标题',
      //   content: '文章内容',
      //   comment: '评论',
      //   author: '作者'
      // },
      // {
      //   title: '文章标题',
      //   content: '文章内容',
      //   comment: '评论',
      //   author: '作者'
      // }
    ]
  }
}

const mutations = {
  SET_ARTICLES: (state) => {
    state.articles.push(
      {
        title: '文章标题',
        content: '文章内容',
        comment: '评论',
        author: '作者',
        photo: '...'
      },
      {
        title: '文章标题',
        content: '文章内容',
        comment: '评论',
        author: '作者',
        photo: '...'
      },
      {
        title: '文章标题',
        content: '文章内容',
        comment: '评论',
        author: '作者',
        photo: '...'
      },
      {
        title: '文章标题',
        content: '文章内容',
        comment: '评论',
        author: '作者',
        photo: '...'
      },
      {
        title: '文章标题',
        content: '文章内容',
        comment: '评论',
        author: '作者',
        photo: '...'
      }
    )
  }
}

export default {
  state,
  mutations
}