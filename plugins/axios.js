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
    if (res.data.code === 200) {
      return Promise.resolve(res.data)
    } else {
      return Promise.reject(res.data)
    }
  }, (error) => {
    if (error.response.status >= 500) {
      redirect('/sorry')
    } else {
      return Promise.reject(error)
    }
  })
}