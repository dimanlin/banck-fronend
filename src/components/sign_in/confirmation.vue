<template>
  <div class="hello">
    <h1>SignIn</h1>
    <auth_form>
      <span>Confirmed!</span>
    </auth_form>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AuthForm from "@/components/shared/auth_form";
Vue.use(VueAxios, axios)

export default {
  components: {
    'auth_form': AuthForm
  }
}

</script>
