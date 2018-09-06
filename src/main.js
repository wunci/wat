import Vue from 'vue'
import App from './App.vue'
import Toast from "./components/toast/index";
import Dialog from "./components/dialog/index";
import router from './router.js'
Vue.config.productionTip = false
Vue.use(Toast)
Vue.use(Dialog)
// Vue.prototype.$toast = Toast
new Vue({
    router,
  render: h => h(App)
}).$mount('#app')
