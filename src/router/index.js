import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/main_page.vue'
import SignUp from '../components/sign_up/new.vue'
import ContactInformation from '../components/sign_up/contact_information.vue'
import Confirmation from '../components/sign_up/confirmation.vue'
import SignIn from '../components/sign_in/new.vue'
import Dashboard from '../components/dashboard/index.vue'
import store from '../store/index'

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
    },
    {
        path: '/contact_information',
        name: 'ContactInformation',
        component: ContactInformation,
        meta: {
            requiresAuth: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.hasLogIn) {
            next()
            return
        }
        next('/sign-in')
    } else {
        next()
    }
})

export default router
