import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'



const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home'),
    redirect: '/home',
    meta: { needLogin: true }
  },
  {
    path: '/home',
    component: () => import('@/views/home'),
    redirect: '/home/main',
    children: [

      {
        path: 'about',
        component: () => import('@/views/about'),
        meta: { needLogin: true }
      },
      {
        path: 'main',
        component: () => import('@/views/main'),
        meta: { needLogin: true }
      },
      {
        path: 'user',
        component: () => import('@/views/user'),
        meta: { needLogin: true }
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login'),
    meta: { needLogin: false }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// const useStore=userStore()
router.beforeEach(async (to,from)=>{

  if(Cookies.get("HAS_LOGIN")=="false" && to.name!=='login'){
    return {name:'login'}
  }
  return true
})

export default router
