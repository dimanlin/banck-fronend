<template>
  <div class="hello">
    <h1>SignIn</h1>
    <span v-if="confirm">You email address has been successfully confirmed.</span>
    <form action="#" v-on:submit.prevent="onSubmit">
      <span v-if="errors.error != undefined">{{errors.error}}</span>
      <br>
      <label for="">Email</label>
      <input type="text" v-model="sign_in.email">
      <span v-if="errors.email != undefined">{{errors.email.join(', ')}}</span>
      <br>

      <label for="" >Password</label>
      <input type="password" v-model="sign_in.password">
      <span v-if="errors.password != undefined">{{errors.password.join(', ')}}</span>
      <br>
      <span v-if="errors.length > 0">{{errors.error}}</span>
      <input type="submit" value="SignIn">
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { mapState } from "vuex";


Vue.use(VueAxios, axios)

export default {
  props: ['confirm'],
  data() {
    return {
      sign_in: {
        email: '',
        password: '',
      },
      errors: {}
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    onSubmit: function() {
      axios.post('http://localhost:3000/api/v1/sign_in.json', { user: this.sign_in }).then((response) => {
        this.$store.dispatch('setUser', response.data).then(() => {
          if(response.data.enough_contact_information == true) {
            this.$router.push({ name: 'ContactInformation' });
          } else {
            this.$router.push({ name: 'Dashboard' });
          }
        })
      }).catch(error => (
          console.log(error.response.data),
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
