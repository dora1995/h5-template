import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: "",
    contactRecordList: [],
    tripList: []
  },
  getters: {},
  mutations: {
    SET_USER_ID: (state, id) => {
      state.userId = id;
    },
    ADD_CONTACT_RECORD: (state, data) => {
      state.contactRecordList.push(data)
    },
    ADD_TRIP: (state, data) => {
      state.tripList.push(data)
    },
    DELETE_CONTACT_RECORD: (state, index) => {
      state.contactRecordList.splice(index, 1)
    },
    DELETE_TRIP: (state, index) => {
      state.tripList.splice(index, 1)
    },
  },
  actions: {},
  modules: {},
});
