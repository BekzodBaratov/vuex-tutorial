import { createStore } from "vuex";

import actions from "./actions";
import mutations from "./mutations";
import cart from "./modules/cart";
import product from "./modules/product";

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

  modules: {
    actions,
    mutations,
  },
});
