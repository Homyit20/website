import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css/animate.min.css'
import '../src/assets/changeNav/download/fonts/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
