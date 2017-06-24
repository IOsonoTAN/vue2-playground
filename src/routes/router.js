import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Homepage from '../components/Homepage'
import Comments from '../components/Comments'
import Registration from '../components/Registration'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Homepage,
    }, {
      path: '/comments',
      component: Comments,
    }, {
      path: '/registration',
      component: Registration,
    },
  ],
})
