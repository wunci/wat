import PopupPicker from './src/index';

/* istanbul ignore next */
PopupPicker.install = function(Vue) {
  Vue.component(PopupPicker.name, PopupPicker);
};

export default PopupPicker;
