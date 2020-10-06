import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../components/sign_up/new.vue'
import MainPage from '../components/main_page.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
