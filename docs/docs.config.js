export default [
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
    title: 'picker',
    path: '/picker',
    component: () => import('../src/components/picker/picker.md'),
  },
  {
    title: 'popup-picker',
    path: '/popup-picker',
    component: () => import('../src/components/popup-picker/popup-picker.md'),
  },
  {
    title: 'datetime',
    path: '/datetime',
    component: () => import('../src/components/datetime/datetime.md'),
  },
];
