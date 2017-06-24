import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import App from './App'
import { store } from './store/index'
import router from './routes/router'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})