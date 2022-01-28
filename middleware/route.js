export default function({  store, $axios }) {
  if (process.env.VUE_ENV === 'client') {
    if (localStorage.getItem('authorization') && !store.state.user_id) {
      $axios.$get('/api/user/info?name=wbk').then(data => console.log(data))
    }
  }
  store.commit('SET_firstIn_true')
  store.commit('SET_noMore_false')
}