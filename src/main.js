import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
import VueRouter from 'vue-router'
import router from './router'



Vue.use(VueRouter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
