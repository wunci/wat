import Vue from 'vue'
import Toast from "./components/toast/src/main";
import Dialog from "./components/dialog/src/main";
import './style/common.less';
const install = function(Vue, opts = {}) {
  if (install.installed) return;
  Vue.prototype.$dialog = Dialog;
  Vue.prototype.$toast = Toast;

};

/* auto install */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
    install,
    Toast,
    Dialog
}
export default API;