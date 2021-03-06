// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import store from './store/Auth'
import router from './router'
import LayoutHeader from './components/layout/Header'
import LayoutNavbar from './components/layout/Navbar'
import LayoutNavbarvisit from './components/layout/Navbarvisit'
import loader from '@/components/loader'
import Toasted from 'vue-toastr'
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import './assets/plugins/fontawesome/css/fontawesome.min.css'
import './assets/plugins/fontawesome/css/all.min.css'
require('./assets/css/style.css');
Vue.config.productionTip = false
//globally registered components
Vue.component('layout-header', LayoutHeader);
Vue.component('layout-navbar', LayoutNavbar);
Vue.component('layout-navbarvisit', LayoutNavbarvisit);
Vue.component('loader', loader);
Vue.use(Toasted, {
    position: 'bottom-center',
    duration: 1000,
    theme: "bubble",
    type: "error",
    iconPack: "fontawesome"
    });

/* eslint-disable no-new */
new Vue({ //i need to look into what is happening here
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'

})