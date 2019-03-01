import Vue from 'vue';
import Mobile from './Mobile.vue';
import Toast from '../src/components/toast/index';
import Dialog from '../src/components/dialog/index';
import router from './router.js';
import '../src/style/common.less';
Vue.config.productionTip = false;
Vue.use(Toast);
Vue.use(Dialog);
new Vue({
  router,
  render: h => h(Mobile),
}).$mount('#app');
