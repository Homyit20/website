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
        component: () => import('../views/login.vue'),
        redirect : '/login/loginform',
        children : [{
            path : '/login/loginform',
            component : () => import('../components/content/loginform.vue')
        },
        {
            path : '/login/contact',
            component : () => import('../components/content/contact.vue'),
            beforeEnter(to,from,next){
                console.log(this.name);
                next()
            }
        }
    ]
    },
    {
        path: '/home',
        component: () => import('../views/Home.vue'),
    }
]

const router = new VueRouter({
    routes
})

export default router;