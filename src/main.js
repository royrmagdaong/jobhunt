import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from './plugins/axios'
import store from './state/index'
import VueRouter from 'vue-router'
import router from './routes'

Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
  vuetify,
  axios,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
