import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import Axios from "axios";

Vue.use(Vuex, VueAxios, axios)

export default new Vuex.Store({
  state: {
    countries: [],
    user: {}
  },
  mutations: {
    /**
     * Example usage in Vue components: this.$store.commit('setAuthToken', token);
     * @param {Object} state
     * @param {String} token
     */
    setUser(state, user) {
      state.user = user;
    },
    // setAuthCode(state, code) {
    //   localStorage.setItem('authCode', code);
    //   state.auth.code = code;
    // },
    setCountries(state, countries) {
      state.countries = countries
    },
    setNationalities(state, nationalities) {
      state.nationalities = nationalities
    },
    // setAuthToken(stat, token) {
    //   state
    // }
  },
  actions: {
    /**
     * Example usage in Vue components: store.dispatch('setAuthToken', token);
     * @param {Store} context Signature: context.state, context.commit, etc..
     * @param {String} code
     */
    getCountries(context) {
      Axios.get(`http://localhost:3000/api/v1/countries.json`).then(response => {
        context.commit('setCountries', response.data);
        context.commit('setNationalities', response.data);
      });
    },
    setUser(context, user) {
      context.commit('setUser', user)
    }
  },
  modules: {
  }
})
