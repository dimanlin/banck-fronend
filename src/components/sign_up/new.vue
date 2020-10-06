<template>
  <div class="hello">
    <h1>Sign up</h1>
    <form action="#" v-on:submit.prevent="onSubmit">
      <label for="">Email</label>
      <input type="text" v-model="user.email">
      <br>
      <label for="">Nationality</label>
      <select name="" v-model="user.nationality">
        <input type="Russia">
      </select>
      <br>
      <label for="">Resident</label>
      <select name="" v-model="user.country">
        <input type="text">
      </select>
      <br>
      <label for="" >Password</label>
      <input type="password" v-model="user.password">
      <br>
      <label for="">Password confirmation</label>
      <input type="password" v-model="user.password_confirmation">
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
      }
    }
  },
  created() {
    axios.post('http://localhost:3000/api/v1/sign_up.json', { user: this.user })
  },
  methods: {
    onSubmit: function() {
      // axios.post('http://localhost:3000/api/v1/sign_up.json', { user: this.user })
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
