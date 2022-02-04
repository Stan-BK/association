export default function({ $axios, redirect }) {
  $axios.onRequest(config => {
    if (process.env.VUE_ENV === 'client') {
      const authorization = localStorage.getItem('authorization')
      if (authorization) { // token存在则携带于请求头
        config.headers.Authorization = authorization
      }
    }
  })
  $axios.interceptors.response.use((res) => {
    return Promise.resolve(res.data)
  }, (error) => {
    if (error.response.status >= 500) {
      redirect('/sorry')
    } else {
      return Promise.reject(error)
    }
  })
}