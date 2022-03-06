import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: "",
  },
  getters: {},
  mutations: {
    SET_USER_ID: (state, id) => {
      state.userId = id;
    },
  },
  actions: {},
  modules: {},
});
