import './style/common.less';
import Toast from './components/toast/src/main';
import Dialog from './components/dialog/src/main';
import Picker from './components/picker/index';
const components = [Picker];
const install = function(Vue, opts = {}) {
  if (install.installed) return;
  Vue.prototype.$dialog = Dialog;
  Vue.prototype.$toast = Toast;

  components.forEach(component => {
    Vue.component(component.name, component);
  });
};
/* auto install */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  install,
  Toast,
  Dialog,
  Picker,
};
export default API;
