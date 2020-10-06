<template>
  <div class="hello">
    <h1>Sign up</h1>
    <form action="#" v-on:submit.prevent="onSubmit">
      <label for="">Email</label>
      <input type="text" v-model="user.email">
      <span v-if="errors.email.length > 0">{{errors.email.join(', ')}}</span>
      <br>

      <label for="">Nationality</label>
      <select name="" v-model="user.nationality">
        <input type="Russia">
      </select>
      <span v-if="errors.nationality.length > 0">{{errors.nationality.join(' ,')}}</span>
      <br>

      <label for="">Resident</label>
      <select name="" v-model="user.country">
        <input type="text">
      </select>
      <span v-if="errors.country.length > 0">{{errors.country.join(', ')}}</span>
      <br>

      <label for="" >Password</label>
      <input type="password" v-model="user.password">
      <span v-if="errors.password.length > 0">{{errors.password.join(', ')}}</span>
      <br>

      <label for="">Password confirmation</label>
      <input type="password" v-model="user.password_confirmation">
      <span v-if="errors.password_confirmation && errors.password_confirmation.length > 0">{{errors.password_confirmation.join(', ')}}</span>
      <br>
      <input type="submit" value="SignIn">
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

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
      errors: {
        email: [],
        nationality: [],
        country: [],
        password: [],
        password_confirmation: []
      }
    }
  },
  created() {

  },
  methods: {
    onSubmit: function() {
      axios.post('http://localhost:3000/api/v1/sign_up.json', { user: this.user }).then(function (response) {
        console.log(response);
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
