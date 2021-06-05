import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import photo from '../pages/photo.vue'

export default new Router({
  routes: [
	  {
		path: '/',
		name: 'index',
		component: (resolve) => require(['../pages/index/index'],resolve)
	  },
	  {
	  	path: '/photo',
	  	name: 'photo',
	  	component: photo
	  },
	  {
	  	path: '/blog',
	  	name: 'blog',
	  	component: (resolve) => require(['../pages/blog'],resolve)
	  },
	  {
	  	path: '/project',
	  	name: 'project',
	  	component: (resolve) => require(['../pages/project'],resolve)
	  },
	  {
	  	path: '/resume',
	  	name: 'resume',
	  	component: (resolve) => require(['../pages/resume'],resolve)
	  }
    ]
})
