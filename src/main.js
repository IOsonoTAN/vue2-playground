import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import { store } from './store/index'

Vue.use(VueRouter);

new Vue({
  el: '#app',
	store,
	render: h => h(App)
})