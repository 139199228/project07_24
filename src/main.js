// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './lib/css/font-awesome.css'
import store from './store'
import axios from 'axios'
import './lib/lodash.min'
// console.log(json)
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created(){
    this.$ajax('static/data/data.json').then(data=>{
      this.$store.dispatch("render1",data)
    })

  }
})
