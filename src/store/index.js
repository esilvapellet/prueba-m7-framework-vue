import { createStore } from 'vuex'

export default createStore({
  state() {
    return { counter: 0 }
  },
  getters: {
  },
  mutations: {
    INCREASE(state) {
      state.counter++
    },
    DECREASE(state) {
      state.counter--
    }
  },
  actions: {
    increaseValue({ commit }) {
      commit('INCREASE')
    },
    decreaseValue({ commit }) {
      commit('DECREASE')
    }
  },
  modules: {
  }
})