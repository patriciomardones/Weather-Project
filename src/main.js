import Vue from 'vue'
import App from './App.vue'
//import Vuesax from 'vuesax'

//import 'vuesax/dist/vuesax.css' //Vuesax styles
//Vue.use(Vuesax)
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  el: '#app',
  render: h => h(App)
})
