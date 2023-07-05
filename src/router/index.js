import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const constantRoutes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/user/login')
    },
    {
        path: '/signup',
        name:' signup',
        component: () => import('@/views/user/signup')
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('@/views/user/main')
    }
]

const createRouter = () => new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
    mode: 'history'
})

const router = createRouter()

export default router