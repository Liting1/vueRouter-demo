/**
 *  main.js 为vue脚手架的入口文件
 *  也是webpack的入口文件
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.config.devtools = false

/*
	全局前置守卫
	to: 即将要进入的目标
	from: 当前导航正要离开的路由
	next: 进行管道中的下一个钩子。
	常用于页面拦截
*/
router.beforeEach((to, from, next)=>{
	// console.log("全局前置守卫")
	next();
});

/**
 * 	全局后置钩子
 * 	在路由前置守卫执行路由后调用此钩子
 */

router.afterEach((to, from)=>{
	// console.log("全局后置钩子")
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
