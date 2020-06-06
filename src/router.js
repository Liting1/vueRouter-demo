import Vue from 'vue'
import Router from 'vue-router'
import html5 from './views/HTML5'
import css3 from './views/CSS3'
import vue from './views/Vue.vue'
import nodejs from './views/nodejs'
import php from './views/php.vue'
import javascript from './views/JavaScript.vue'
import notFound from './views/404page.vue'
// import vueRouter from './components/vueRouter.vue'
// import vuexs from './components/vuex.vue'
// import axioss from './components/axios.vue'
// import vueCli from './components/vueCli.vue'
// import vueLoader from './components/vueLoader.vue'
// import vueHome from './components/vueHome.vue'

import left from './components/left.vue'
import right from './components/right.vue'


Vue.use(Router)


export default new Router({
  base: '/vue/prod/',
  mode: 'history',
  scrollBehavior(to, from, savedPosition){
    return {x: 0, y: 0} // 滚动到顶部
  },
  routes: [
    {
      path: '/',
      // 重定向
      redirect: '/html5'
    },
    {
      name: 'html5',
      path: '/html5',
      component: html5
    },
    {
      name: 'css3',
      path: '/css3',
      component: css3
    },
    {
      path: '/css3/:id',
      component: css3,
      props: true // 表示动态路径的参数可以使用该组件的props属性形式接受
    },
    {
      path: '/vue',
      component: vue,
      // 局部路由守卫
      beforeEnter(to, from, next){
        console.log("局部路由守卫");
        next();
      },
      children: [{
        path: 'vueRouter',
        // 路由懒加载
        component: () => import('./components/vueRouter.vue')
      }, {
        path: 'vuex',
        component: () => import('./components/vuex.vue')
      }, {
        path: 'axios',
        component: () => import('./components/axios.vue')
      }, {
        path: 'vueCli',
        component: () => import('./components/vueCli.vue')
      }, {
        path: 'vueLoader',
        component: () => import('./components/vueLoader.vue')
      }, {
        path: '',
        component: () => import('./components/vueHome.vue')
      }]
    },
    {
      path: '/nodejs',
      component: nodejs
    },
    {
      path: '/php',
      component: php,
      children: [{
        path: 'demo',
        components:{
          left,
          right
        }
      }]
    },
    {
      name: 'JS',
      path: '/javascript',
      component: javascript
    },
    {
      path: '*',
      component: notFound
    }
  ]
});
