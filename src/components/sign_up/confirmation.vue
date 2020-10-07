<template>
  <div class="hello">
    <h1>Confirmation</h1>
    <span>{{email}}</span>
    <br>
    <a href="#" v-on:click.prevent="resend">Resend</a>
  </div>
</template>

<script>

import axios from "axios";

export default {
  props: ['email'],
  data() {
    return {

    }
  },
  created() {
    console.log(this)

  },
  methods: {
    resend() {
      axios.post('http://localhost:3000/api/v1/resend_invitation.json',
                { user: {email: this.email }})
          .then(function (response) {
            console.log(response)
      }).catch(error => (
          // TODO make alert abiutn problem with connection
          this.errors = error.response.data
      ))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
