// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import LayoutHeader from './components/layout/Header'
import LayoutNavbar from './components/layout/Navbar'
import LayoutNavbarvisit from './components/layout/Navbarvisit'
import loader from '@/components/loader'
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import './assets/plugins/fontawesome/css/fontawesome.min.css'
import './assets/plugins/fontawesome/css/all.min.css'
require('./assets/css/style.css');
Vue.config.productionTip = false
Vue.component('layout-header', LayoutHeader);
Vue.component('layout-navbar', LayoutNavbar);
Vue.component('layout-navbarvisit', LayoutNavbarvisit);
Vue.component('loader', loader);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
