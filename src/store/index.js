// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

import Vuex from "vuex";
import Vue from "vue";
import countries from "./modules/countries";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    countries
  }
});
