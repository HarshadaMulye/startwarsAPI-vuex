import Vue from "vue";
import Vuex from "vuex";
import people from "./module/people.js"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    people:people
  }
});
