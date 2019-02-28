import Vue from 'vue';
import Demo from './Demo';
import Toast from '../src/components/toast/index';
import Dialog from '../src/components/dialog/index';
import router from './router.js';
import 'highlight.js/styles/atom-one-dark.css';
Vue.config.productionTip = false;
Vue.use(Toast);
Vue.use(Dialog);
new Vue({
  router,
  render: h => h(Demo),
}).$mount('#app');
