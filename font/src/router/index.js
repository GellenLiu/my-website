import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import education from '../pages/education.vue'

export default new Router({
  routes: [
	  {
		path: '/',
		name: 'index',
		component: (resolve) => require(['../pages/index/index'],resolve)
	  },
	  {
	  	path: '/education',
	  	name: 'education',
	  	component: education
	  }
    ]
})
