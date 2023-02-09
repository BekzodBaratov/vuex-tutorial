import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
  },
  getters: {
    getCounterduble(state) {
      return state.counter * 2;
    },
    getCountercheck(state, getters) {
      if (getters.getCounterduble > 100) return 2;
      return state.counter * 2;
    },
  },
  mutations: {
    incriment(state, payload) {
      state.counter += payload.value;
    },
  },
  actions: {
    asyncIncrement(context, payload) {
      setTimeout(function () {
        context.commit("incriment", payload);
      }, 1000);
    },
  },
  modules: {},
});
