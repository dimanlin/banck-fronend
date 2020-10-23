<template>
  <div id="app">

    <router-view :key="$route.fullPath"/>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {

  },
  created: function () {
    axios.interceptors.response.use((response) => {
      return response;
    }, (error) => {
      if(error.response.status === 401) {
        this.$router.push({ name: 'SignIn' })
      }
      // if (error.response && error.response.data) {
      //   return Promise.reject(error.response.data);
      // }
      return Promise.reject(error);
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
