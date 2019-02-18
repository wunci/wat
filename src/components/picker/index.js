import Picker from './src/index';

/* istanbul ignore next */
Picker.install = function(Vue) {
  Vue.component(Picker.name, Picker);
};

export default Picker;
