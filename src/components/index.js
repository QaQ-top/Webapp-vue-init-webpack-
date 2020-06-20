import Vue from 'vue'
let webpackContext = require.context("./", true, /\.vue$/);
let paths = webpackContext.keys();
paths.map(i => {
    let exd = require('' + i)
    Vue.component(exd.default.name,exd.default)
})