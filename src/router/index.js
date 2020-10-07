import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/main_page.vue'
import SignUp from '../components/sign_up/new.vue'
import Confirmation from '../components/sign_up/confirmation.vue'
import SignIn from '../components/sign_in/new.vue'


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
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/confirmation-email/:email',
        name: 'Confirmation',
        component: Confirmation,
        props: true
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        props: true
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
