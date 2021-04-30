import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '@/views/Profile.vue'
import Logs from '@/views/Logs.vue'

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
    ]
})