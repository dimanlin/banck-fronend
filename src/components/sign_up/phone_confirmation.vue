<template>
  <form v-on:submit="Submit">
    <input ref="number1" v-model='number1' type="text">
    <input ref="number2" v-model='number2' type="text">
    <input ref="number3" v-model='number3' type="text">
    <input ref="number4" v-model='number4' type="text">
    <input ref="number5" v-model='number5' type="text">
    <input ref="number6" v-model='number6' type="text">
    <br>
    <span>{{error}}</span>
    <br>
    <input ref='send_code' v-on:click='Submit' type="button" value="Send code">
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      number1: '',
      number2: '',
      number3: '',
      number4: '',
      number5: '',
      number6: '',
      error: ''
    }
  },
  watch: {
    number1: function(val) {
      if(val.length > 1) {
        this.number1 = val[1]
      }
      if(val.length > 0) {
        this.$refs.number2.focus()
      }
    },
    number2: function(val) {
      if(val.length > 1) {
        this.number2 = val[1]
      }
      if(val.length > 0) {
        this.$refs.number3.focus()
      }
    },
    number3: function(val) {
      if(val.length > 1) {
        this.number3 = val[1]
      }
      if(val.length > 0) {
        this.$refs.number4.focus()
      }
    },
    number4: function(val) {
      if(val.length > 1) {
        this.number4 = val[1]
      }
      if(val.length > 0) {
        this.$refs.number5.focus()
      }
    },
    number5: function(val) {
      if(val.length > 1) {
        this.number5 = val[1]
      }
      if(val.length > 0) {
        this.$refs.number6.focus()
      }
    },
    number6: function(val) {
      if(val.length > 1) {
        this.number6 = val[1]
      }
      if(val.length > 0) {
        this.$refs.send_code.focus()
      }
    }
  },
  computed: {
    code: function() {
      return this.number1 + this.number2 + this.number3 + this.number4 + this.number5 + this.number6
    }
  },
  methods: {
    Submit: function() {
      axios.post('http://localhost:3000/api/v1/users/confirm_phone_number.json',
          { confirmation_code: this.code } ,
          { headers: {'X-User-Token': localStorage.getItem('authentication_token'),
              'X-User-Email': localStorage.getItem('email'),
              'Content-Type': 'application/json'}})
          .then(() => {
            this.$router.push({name: 'Dashboard'})
          }).catch(error => (
              this.error = error.response.data.code
      ))
    }
  }
}
</script>

<style scoped>
input[type=text] {
  width:20px
}
</style>
