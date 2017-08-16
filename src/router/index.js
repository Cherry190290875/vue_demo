import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Index from '../page/index'
import Collect from '../page/collect'
import My from '../page/my'
import Auction from '../page/auction.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/collect',
      name: Collect,
      component: Collect
    },
    {
      path: '/my',
      name: My,
      component: My
    },
    {
      path: '/auction',
      name: Auction,
      component: Auction
    }
  ]
})
