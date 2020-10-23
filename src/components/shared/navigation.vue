<template>
  <div>
    <router-link to="/wallets">Wallets</router-link>
    <br>
    <a href="" v-on:click="logout">Logout</a>
<!--    <router-link to="/payments">Payments</router-link>-->
  </div>
</template>

<script>
export default  {
  methods: {
    logout: function() {
      this.$store.dispatch('logoutUser')
      this.$router.push({name: 'MainPage'})
    }
  }
}
</script>