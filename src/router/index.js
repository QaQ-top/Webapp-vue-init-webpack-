import Vue from 'vue'
import Router from 'vue-router';

let push = Router.prototype.push;
Router.prototype.push = function (config) {
    push.call(this,config).catch(err=>err)
}

let webpackContext = require.context("@/view",true,/\.js$/);
let paths = webpackContext.keys();
let routes = paths.map(i=>{
  let exd = require('../view'+i.replace('./','/'))
  return exd.default;
})

Vue.use(Router)

export default new Router({
  routes
})
