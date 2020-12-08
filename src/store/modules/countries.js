import axios from "axios";

const state = {
  countries: []
};

const getters = {
  //getter AllUsers pega todo o state e tem como saída a lista de objetos users
  getCountries: state => state.countries
};

const actions = {
  //actions comita na mutations
  getPortugueseCountries({ commit }) {
    const options = {
      method: "GET",
      url: "https://restcountries-v1.p.rapidapi.com/lang/pt",
      headers: {
        "x-rapidapi-key": "5a1537dec4mshfb7a57b8cd3b432p16c7c7jsnf7be749e645d",
        "x-rapidapi-host": "restcountries-v1.p.rapidapi.com"
      }
    };

    axios.request(options).then(response => {
      commit("getPortugueseCountries", response.data);
    });
  },
  deleteCountry({ commit }, alpha2Code) {
    commit("deleteCountry", alpha2Code);
  },
  addCountry({ commit }, country) {
    country.alpha2Code = "CUSTOM";
    commit("addCountry", country);
  }
};

const mutations = {
  //apenas o mutatations pode mutar o state!
  getPortugueseCountries: (state, data) => (state.countries = data),
  deleteCountry: (state, alpha2Code) =>
    (state.countries = state.countries.filter(
      c => c.alpha2Code !== alpha2Code
    )),
  addCountry: (state, data) => state.countries.push(data)
};

export default {
  state,
  actions,
  getters,
  mutations
};

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
