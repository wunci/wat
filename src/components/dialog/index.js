import Dialog from './src/main';

const install = Vue => {
  Vue.prototype.$dialog = Dialog;
};

export default install;
