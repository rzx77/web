import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () => import('../components/home')
const prod = () => import('../components/production/prod')
const solve = () => import('../components/solution/solve')
const cloud = () => import('../components/cloud/cloud')
const news = () => import('../components/news/news')
const support = () => import('../components/support/support')
const contact = () => import('../components/support/contact')
const about = () => import('../components/about/about')
const detail = () => import('../components/production/detail')
const custom = () => import('../components/production/custom')
const apply = () => import('../components/production/apply')
const sale = () => import('../components/solution/industrial/sale.vue')
const door = () => import('../components/solution/industrial/door.vue')
const car = () => import('../components/solution/industrial/car.vue')

Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/home'},//路由重定向 
  {
    path:'/home',
    component:home,
  },
  {
    path:'/prod',
    component:prod,
  },
  {
    path:'/solve',
    component:solve,
  },
  {
    path:'/cloud',
    component:cloud,
  },
  {
    path:'/news',
    component:news,
  },
  {
    path:'/support',
    component:support,
    
  },
  {
    path:'/contact',
    component:contact,
  },
  {
    path:'/about',
    component:about,
  },
  {
    path:'/detail/:id',
    component:detail,
  },
  {
    path:'/sale',
    component:sale,
  },
  {
    path:'/door',
    component:door,
  },
  {
    path:'/car',
    component:car,
  },
  {
    path:'/custom',
    component:custom,
  },
  {
    path:'/apply',
    component:apply,
  },
]

const router = new VueRouter({
  routes,
  // mode:'history'
})
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
export default router
