import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '@/views/Profile.vue'
import Logs from '@/views/Logs.vue'
import Works from '@/views/Works.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'hash',
    routes: [{
            path: '/',
            redirect: '/profile'
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/logs',
            name: 'Logs',
            component: Logs
        },
        {
            path: '/works',
            name: 'Works',
            component: Works
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        },
    ]
})
