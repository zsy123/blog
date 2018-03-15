// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import axios from 'axios'
// import VueResource from 'vue-resource'
// 将 axios 改写为 Vue 的原型属性,使在其它的组件中可以使用 axios
Vue.prototype.$axios = axios
import index from './components/index/index.vue';
import about from './components/about/about.vue';
import github from './components/github/github.vue';
import life from './components/life/life.vue';
import  say from './components/say/say.vue';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueRouter)
Vue.use(ElementUI)
// Vue.use(VueResource)
Vue.config.productionTip = false
const routes=[
  {name:'index',path: '/index',component:index},
  {name:'about',path: '/about',component:about},
  {name:'github',path: '/github', component: github},
  {name:'life',path: '/life', component: life},
  {name:'say',path: '/say', component: say}
]
const router=new VueRouter({
  routes:routes,
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
router.push('./index')
