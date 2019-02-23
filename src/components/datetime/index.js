import DateTime from './src/index';

/* istanbul ignore next */
DateTime.install = function(Vue) {
  Vue.component(DateTime.name, DateTime);
};

export default DateTime;
