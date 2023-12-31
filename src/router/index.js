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
        name: ' signup',
        component: () => import('@/views/user/signup')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/user/home')
    },
    {
        path:'/score',
        name: 'score',
        component:() => import('@/views/user/score')
    },
    {
        path: '/me',
        name: 'me',
        component: () => import('@/views/user/me')
    },
    {
        path: '/bookList',
        name: 'bookList',
        component: () => import('@/views/user/bookList')
    },
    {
        path: '/exam',
        name: 'exam',
        component: () => import('@/views/user/exam')
    },
    {
        path: '/finish',
        name: 'finish',
        component: () => import('@/views/user/finish')
    },
]

const createRouter = () => new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
    mode: 'hash'
})

const router = createRouter()

export default router