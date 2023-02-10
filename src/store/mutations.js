export default {
  mutations: {
    incriment(state, payload) {
      state.counter += payload.value;
    },
  },
};
