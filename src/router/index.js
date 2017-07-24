import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import First from "@/views/First"
import Last from '@/views/Last'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/first/:id',
      name: 'first',
      component: First
    },
    {
      path:'/last/:id',
      name:'last',
      component:Last
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})
