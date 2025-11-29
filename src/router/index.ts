import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import AboutUs from '@/components/AboutUs.vue'


const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: AboutUs },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
