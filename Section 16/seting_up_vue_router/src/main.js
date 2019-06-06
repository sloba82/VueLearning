import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {router } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({ router });

new Vue({
  el: '#app',
  render: h => h(App)
})
