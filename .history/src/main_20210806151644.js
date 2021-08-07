import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import 'animate.css/animate.min.css'
Vue.use(VueCookies)
// Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router,
  VueCookies,
  render: h => h(App),
}).$mount('#app')