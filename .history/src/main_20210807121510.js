import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueCookies from 'vue-cookies'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import 'animate.css/animate.min.css'
// Vue.use(VueCookies)
// Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

//报名成功或者已报名才可进入二维码页面
router.beforeEach((to, from, next) => {
  //判断是否显示导航
  if(to.path == '/enter' || to.path =='/login/contact'){
    this.$store.commmit('navhidden')
  }else{
    this.$store.commmit('navview')
  }
  //路由导航
  if (to.meta.islogin) {
    if (store.state.success == 1) {
      next()
    } else {
      next({
        path: from.path
      })
    }
  } else {

    if (to.meta.islogin) {
      if (store.state.success == 1) {
        next()
      } else {
        next({
          path: from.path
        })
      }
    } else {
      next()
    }
  }
})