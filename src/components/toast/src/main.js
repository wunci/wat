import Main from './index.vue';
import Vue from 'vue';
let T = Vue.extend(Main);
let instance;
let instances = [];
let idx = 1;
const Toast = options => {
  if (typeof options === 'string') {
    options = {
      text: options,
    };
  }
  let id = 'toast_' + idx++;
  let userOnClose = options.onClose;
  options.onClose = () => {
    Toast.close(id, userOnClose);
  };
  instance = new T({
    data: options,
  });
  let $el = instance.$mount().$el;
  instance.show = true;
  instance.id = id;
  document.body.appendChild($el);
  instances.push(instance);
};

['success', 'fail', 'loading'].forEach(type => {
  Toast[type] = options => {
    options.type = type;
    return Toast(options);
  };
});

['top', 'middle', 'bottom'].forEach(direction => {
  Toast[direction] = options => {
    options = {
      text: options,
      direction,
    };
    return Toast(options);
  };
});

Toast.close = (id, userOnClose) => {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
};
Toast.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

export default Toast;
