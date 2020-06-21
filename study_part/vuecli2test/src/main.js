// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// const cpn = {
//   template: '<div>{{message}}</div>',
//   data () {
//     return {
//       message: 'hello'
//     }
//   }
// }

new Vue({
  el: '#app',
  // 这里的h是指createElement
  render (h) {
    return h(App)
  }
})

// .vue中的template是由vue-template-compiler来解析成对象
// 使用runtime-only进行开发时就是使用.vue进行开发的
