import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/login/contact'
    },
    {
        path: '/technique',
        component: () => import('../views/technique.vue')
    },
    {
        path: '/develop',
        component: () => import('../views/develop.vue')
    },
    {
        path: '/enter',
        component: () => import('../views/enter.vue')
    },
    {
        path: '/login',
        component: () => import('../views/login.vue'),
        redirect: '/login/loginform',
        children: [{
            path: '/login/loginform',
            component: () => import('../components/content/loginform.vue')
        },
        {
            path: '/login/contact',
            component: () => import('../components/content/contact.vue'),
            meta: {
                islogin: true
            }
        }
        ]
    },
    {
        path: '/home',
        component: () => import('../views/Home.vue'),
    }, {
        path: '/background',
        component: () => import('../views/background.vue'),
    }
]

const router = new VueRouter({
    routes
})

export default router;
