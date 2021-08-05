import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/technique',
        component: () => import('../views/technique.vue')
    },
    {
        path: '/login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/home',
        component: () => import('../views/Home.vue'),
    },{
        path : 'contact',
        component : () => import('../components/content/contact.vue')
    }
]

const router = new VueRouter({
    routes,
    mode : 'history'
})

export default router;