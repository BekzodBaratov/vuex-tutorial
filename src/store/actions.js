export default {
  actions: {
    asyncIncrement(context, payload) {
      setTimeout(function () {
        context.commit("incriment", payload);
      }, 1000);
    },
  },
};
