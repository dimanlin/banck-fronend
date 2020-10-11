<template>
  <div>
    <h1>Dashboard</h1>
    <span>Hello</span>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import { mapState } from 'vues'


Vue.use(VueAxios, axios)

export default {
  props: {},
  data() {
    return {}
  },

  methods: {
    // ...mapState({
    //
    // })
  }
}
</script>
