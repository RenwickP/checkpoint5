import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";

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
    },

    makeActiveBug(state, bug) {
      state.activeBug = bug;
    },
    /////////////notes///////////

    makeNote(state, note) {
      state.note.push(note);
    },
    //// changed form active note
    makeActiveNote(state, note) {
      state.activeNote = note;
    }
    ///////
  },
  actions: {
    async makeNote({ commit, dispatch }, note) {
      // debugger;
      let res = await serverLand.post("notes", note);
      commit("makeNote", res.data);
      console.log("from create", res.data);
      dispatch("getNotesById", res.data.bug);
      ////
    },

    async getNotesById({ commit, dispatch }, id) {
      let res = await serverLand.get("bugs/" + id + "/notes");
      // console.log("id from mount", id);
      console.log("from store", res.data);
      commit("makeActiveNote", res.data);
    },

    async deleteNote({ commit, dispatch }, note) {
      console.log("from delete note", note);
      let res = await serverLand.delete("notes/" + note.noteId);
      // console.log("delete note", res);
      dispatch("getNotesById", note.bugId);

      // commit("makeActiveNote", res);

      // dispatch("getNotesById", res.data);
    },

    ////////bugs////////
    ///edit///

    // async editBugs({ commit, dispatch }, id, edit) {
    //   let res = await serverLand.put("bugs/" + id, edit);
    //   commit("mutateGetBugs", res.data);
    // },

    ////////

    async makeBug({ commit, dispatch }, bug) {
      let res = await serverLand.post("bugs", bug);
      commit("makeBug", res.data);
      router.push({ path: "/bugs/" + res.data.id });
    },

    async getBugs({ commit, dispatch }) {
      let res = await serverLand.get("bugs");
      commit("mutateGetBugs", res.data);
    },
    async getById({ commit, dispatch }, id) {
      let res = await serverLand.get("bugs/" + id);
      commit("makeActiveBug", res.data);
    },

    async delete({ commit, dispatch }, id) {
      let res = await serverLand.delete("bugs/" + id);
      dispatch("getById", id);
    },

    // async edit({ commit, dispatch }, id, edit) {
    //   console.log("from edit in store", edit, id);
    //   let res = await serverLand.put("bugs/" + id, edit);
    //   commit("makeBug", res.data);
    //   dispatch("getById", id);
    // }

    async edit({ commit, dispatch }, edit) {
      console.log("from edit in store", edit);
      let res = await serverLand.put("bugs/" + edit.id, edit);
      commit("makeBug", res.data);
      dispatch("getById", edit.id);
    }
  },
  modules: {}
});
