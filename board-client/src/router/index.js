import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import ErrorPage from '../pages/ErrorPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      name: 'ErrorPage',
      component: ErrorPage
    }
  ]
})
