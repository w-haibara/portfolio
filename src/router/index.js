
import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '@/views/Profile.vue'
import Works from '@/views/Works.vue'
import Slides from '@/views/Slides.vue'
import Contact from '@/views/Contact.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/profile'
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/works',
            name: 'Works',
            component: Works
        },
        {
            path: '/slides',
            name: 'Slides',
            component: Slides
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
    ]
})