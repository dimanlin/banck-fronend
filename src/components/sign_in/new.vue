<template>
  <div class="hello">
    <h1>Sign up</h1>
    <form action="#" v-on:submit.prevent="onSubmit">
      <span v-if="errors.error != undefined">{{errors.error}}</span>
      <br>
      <label for="">Email</label>
      <input type="text" v-model="user.email">
      <span v-if="errors.email != undefined">{{errors.email.join(', ')}}</span>
      <br>

      <label for="" >Password</label>
      <input type="password" v-model="user.password">
      <span v-if="errors.password != undefined">{{errors.password.join(', ')}}</span>
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
  },
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      errors: {}
    }
  },

  methods: {
    onSubmit: function() {
      axios.post('http://localhost:3000/api/v1/sign_in.json', { user: this.user }).then(function (response) {

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
