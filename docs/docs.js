import Vue from 'vue';
import Docs from './Docs.vue';
import router from './router.js';
import '../src/style/common.less';
import 'highlight.js/styles/atom-one-dark.css';
import Toast from '../src/components/toast/index';
import Dialog from '../src/components/dialog/index';
Vue.config.productionTip = false;
Vue.use(Toast);
Vue.use(Dialog);
new Vue({
  router,
  render: h => h(Docs),
}).$mount('#app');
