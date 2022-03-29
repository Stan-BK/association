const state = () => {
  return {
    background: ''
  }
}

const mutations = {
  SET_background(state, background) {
    state.background = background
  },
  SET_reset_background(state) {
    state.background = 'http://source.geminikspace.com/background.jpg'
  }
}

export default {
  state,
  mutations
}