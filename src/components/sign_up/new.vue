<template>
  <div class="hello">
    <h1>Sign up</h1>
    <form action="#" v-on:submit.prevent="onSubmit">
      <label for="">Email</label>
      <input type="text" v-model="user.email">
      <span v-if="errors.email != undefined">{{errors.email.join(', ')}}</span>
      <br>

      <label for="">Nationality</label>
      <select v-model="user.nationality">
        <option v-for="n in nationalities" :key="n">{{n}}</option>
      </select>
      <span v-if="errors.nationality != undefined">{{errors.nationality.join(' ,')}}</span>
      <br>

      <label for="">Resident</label>
      <select v-model="user.country">
        <option v-for="n in countries" :key="n">{{n}}</option>
      </select>
      <span v-if="errors.country != undefined">{{errors.country.join(', ')}}</span>
      <br>

      <label for="" >Password</label>
      <input type="password" v-model="user.password">
      <span v-if="errors.password != undefined">{{errors.password.join(', ')}}</span>
      <br>

      <label for="">Password confirmation</label>
      <input type="password" v-model="user.password_confirmation">
      <span v-if="errors.password_confirmation != undefined">{{errors.password_confirmation.join(', ')}}</span>
      <br>
      <input type="submit" value="SignUp">
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { mapState } from "vuex";

Vue.use(VueAxios, axios, mapState)

export default {
  props: {
    msg: String
  },
  data() {
    return {
      user: {
        email: '',
        nationality: '',
        country: '',
        password: '',
        password_confirmation: ''
      },
      errors: {}
    }
  },
  created() {
    this.$store.dispatch('getCountries')
  },
  computed: {
    ...mapState({
      countries: state => state.countries,
      nationalities: state => state.nationalities
    })
  },
  methods: {
    onSubmit: function() {
      axios.post('http://localhost:3000/api/v1/sign_up.json', { user: this.user }).then(() => {
        window.location.replace("/confirmation-email/" + this.user.email);
      }).catch(error => (
          this.errors = error.response.data
      ))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
