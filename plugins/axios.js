export default function({ $axios }) {
  $axios.onRequest(config => {
    if (process.env.VUE_ENV === 'client') {
      const authorization = localStorage.getItem('authorization')
      if (authorization) { // token存在则携带于请求头
        config.headers.Authorization = authorization
      }
    }
  })
}