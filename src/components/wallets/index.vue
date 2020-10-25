<template>
  <div>
    <navigation></navigation>
    <br>

    <div>Cards</div>
    <h1>Wallets</h1>
    <span>Hello</span>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Nav from "@/components/shared/navigation";


Vue.use(VueAxios, axios)

export default {
  props: {},
  data() {
    return {}
  },
  components: {
    'navigation': Nav
  },
  methods: {

  }
}
</script>
