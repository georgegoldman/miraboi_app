import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueLazyload from 'vue-lazyload'
import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'



Vue.use(VueLazyload)
Vue.use(VueMaterial)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/undraw_server_down_s4lk.png',
  loading: 'dist/undraw_Loading_re_5axr.png',
  attempt: 1,
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
  listenEvents: ['scroll'],
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
