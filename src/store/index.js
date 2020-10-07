import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import Axios from "axios";

Vue.use(Vuex, VueAxios, axios)

export default new Vuex.Store({
  state: {
    countries: [],
    auth: {
      token: localStorage.getItem('authToken') || '',
      code:  localStorage.getItem('authCode')  || '',
    }
  },
  mutations: {
    /**
     * Example usage in Vue components: this.$store.commit('setAuthToken', token);
     * @param {Object} state
     * @param {String} token
     */
    setAuthToken(state, token) {
      localStorage.setItem('authToken', token);
      state.auth.token = token;
    },
    setAuthCode(state, code) {
      localStorage.setItem('authCode', code);
      state.auth.code = code;
    },
    setCountries(state, countries) {
      state.countries = countries
    },
    setNationalities(state, nationalities) {
      state.nationalities = nationalities
    },
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
    authByCode(context, code) {
      context.commit('setAuthCode', code);

      let params = {code: code};
      this.axios.post(`auth-by-code`, params).then(response => {
        if (response.data.success && response.data.token) {
          context.commit('setAuthToken', response.data.token);
        } else {
          context.commit('setAuthToken', '');
        }
      });
    },
  },
  modules: {
  }
})
