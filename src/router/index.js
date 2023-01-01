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
        component: () => import('@/components/home/about'),
        meta: { needLogin: true }
      },
      {
        path: 'main',
        component: () => import('@/components/home/main'),
        meta: { needLogin: true }
      },
      {
        path: 'user',
        component: () => import('@/components/home/user'),
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
  {
    name: 'createCommitment',
    path: '/createCommitment',
    component: () => import('@/views/createCommitment'),
    meta: { needLogin: true }
  },
  {
    name:'commitDetail',
    path:'/commitDetail/:id',
    component:()=>import('@/views/commitmentDetail')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(async (to,from)=>{

  if(Cookies.get("HAS_LOGIN")=="false" && to.name!=='login'){
    return {name:'login'}
  }
  return true
})

export default router
