import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    countdown: state => 100 - state.counter
  },
  mutations: {
    increment: state => state.counter++,
    decrement: state => state.counter--,
    reset: state => state.counter = 0
  },
  actions: {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    reset: ({ commit }, duration) => {
      setTimeout(() => commit('reset'), duration * 1000)
    }
  }
});
