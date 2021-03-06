import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from 'views/home/recommend/Recommend'
import List from 'views/home/list/List'
import Rank from 'views/home/rank/Rank'
import Home from 'views/home/Home'
import Personal from 'views/personal/Personal'
import MV from 'views/mv/MV'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home', component: Home, redirect: '/home/recommend', children: [
      { path: 'recommend', component: Recommend },
      { path: 'list', component: List },
      { path: 'rank', component: Rank },
    ]
  },
  { path: '/personal', component: Personal },
  { path: '/mv', component: MV }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
