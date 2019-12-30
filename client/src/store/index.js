import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let serverLand = axios.create({
  baseURL: "//localhost:3000/api",
  timeout: 1000
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bug: [],
    note: [],
    activeBug: {},
    activeNote: {}
  },
  mutations: {
    makeBug(state, bug) {
      state.bug.push(bug);
    },

    mutateGetBugs(state, data) {
      state.bug = data;
    }
  },
  actions: {
    async makeBug({ commit, dispatch }, bug) {
      let res = await serverLand.post("bugs", bug);
      commit("makeBug", res.data);
    },

    async getBugs({ commit, dispatch }) {
      let res = await serverLand.get("bugs");
      commit("mutateGetBugs", res.data);
    }
  },
  modules: {}
});
