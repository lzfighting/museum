import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path:'/culturaList',
    name:'CulturaList',
    component:()=> import('@/views/culturalList'),
    meta:{
      keepAlive:false,
    },
  },
  {
    path:'/exhibition',
    name:'Exhibition',
    component:()=> import('@/views/exhibition'),
    meta:{
      keepAlive:false,
    },
  },
  {
    path:'/subject',
    name:'Subject',
    component:()=> import('@/views/subject'),
    meta:{
      keepAlive:true,
    },
  },
  {
    path:'/iframe',
    name:'Iframe',
    component:()=> import('@/views/iframe'),
    meta:{
      keepAlive:false,
    },
  },
  {
    path:'/panorama',
    name:'Panorama',
    component:()=> import('@/views/panorama'),
    meta:{
      keepAlive:true,
    },
  },
  {
    path:'/sky',
    name:'Sky',
    component:()=> import('@/views/sky'),
    meta:{
      keepAlive:true,
    },
  }
] 
const router = new VueRouter({
  routes
})

export default router
