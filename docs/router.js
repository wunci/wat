import Vue from 'vue';
import Router from 'vue-router';
import Dialog from '../src/components/dialog/demo';
import Toast from '../src/components/toast/demo';
import Picker from '../src/components/picker/demo';
import PopupPicker from '../src/components/popup-picker/demo';
import Datetime from '../src/components/datetime/demo';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      title: 'dialog',
      path: '/dialog',
      component: () => import('../src/components/dialog/dialog.md'),
    },
    {
      title: 'toast',
      path: '/toast',
      component: () => import('../src/components/toast/toast.md'),
    },
    {
      title: 'dialog-demo',
      path: '/demo/dialog',
      component: Dialog,
    },
    {
      title: 'toast-demo',
      path: '/demo/toast',
      component: Toast,
    },
    {
      title: 'picker-demo',
      path: '/demo/picker',
      component: Picker,
    },
    {
      title: 'popup-picker-demo',
      path: '/demo/popup-picker',
      component: PopupPicker,
    },
    {
      title: 'datetime-demo',
      path: '/demo/datetime',
      component: Datetime,
    },
  ],
});
