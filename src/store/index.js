import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import Axios from "axios";

Vue.use(Vuex, VueAxios, axios)

export default new Vuex.Store({
  state: {
    countries: [],
    nationalities: [],
    user: {}
  },
  getters: {
    hasLogIn: () => {
      return !!localStorage.getItem('authentication_token');
    }
  },
  mutations: {
    /**
     * Example usage in Vue components: this.$store.commit('setAuthToken', token);
     * @param {Object} state
     * @param {String} token
     */
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('authentication_token', user.authentication_token);
    },
    logoutUser(state) {
      state.user = {};
      console.log('33333333333333333333333')
      localStorage.removeItem('authentication_token');
    },
    setCountries(state, countries) {
      state.countries = countries
    },
    setNationalities(state, nationalities) {
      state.nationalities = nationalities
    },
    // REMOVE

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
    },
    updateCurrentUser(context) {
      Axios.get(`http://localhost:3000/api/v1/users/info.json`).then(response => {
        context.commit('setUser', response.data)
      });
    },
    logoutUser(context) {
      context.commit('logoutUser')
    }
  },
  modules: {
  }
})
