import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CustInfoInput from '@/components/CustInfoInput'
import CardSelection from '@/components/CardSelection'
import Apply from '@/components/Apply'
Vue.use(Router)

export default new Router({
  mode: 'history',                      // Gets rid of # from URL (better SEO)
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/info',
      name: 'CustInfoInput',
      component: CustInfoInput
    },
    {
      path: '/selection',
      name: 'CardSelection',
      component: CardSelection
    },
    {
      path: '/apply',
      name: 'Apply',
      component: Apply
    }
  ]
})
