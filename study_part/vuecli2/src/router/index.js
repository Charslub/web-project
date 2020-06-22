// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

// 配置路由相关信息
import VueRouter from 'vue-router'

// 通过Vue.use(插件)， 安装插件
Vue.use(VueRouter)

// 创建vuerouter对象
const routes = [

]

const router = new VueRouter({
  // 配置路由和组件之间的引用关系
  routes
})

// 将router对象传入到vue实例
export default router