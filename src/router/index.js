import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '@/views/Profile.vue'
import Links from '@/views/Links.vue'

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
            path: '/links',
            name: 'Links',
            component: Links
        },
    ]
})