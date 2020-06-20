// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;
import 'amfe-flexible';

import axios from './api/index';
import './components/index';
Vue.prototype.$api = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  created() {
    this.$router.push({
      path:'/card'
    })
  },
  components: { App },
  template: '<App/>'
})
