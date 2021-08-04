import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path : '/',
        redirect : '/technique'
    },
    {
        path : '/technique',
        component : () => import('../views/technique.vue')
    },
    {
        path : '/login',
        component : () => import('../views/login.vue'),
        children : [
            {
                path : '/login/contact',
                component : () => import('../components/content/contact.vue')
            }
        ]
    }
]

const router = new VueRouter({
    routes,
})

export default router;