import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    messages: []
  },
  getters: {

  },
  mutations: {
    setMessages(state, messages) {
      state.messages = messages
    }
  },
  actions: {

  }
})

export default store