module.exports = {
  base: '/toast',
  title: 'Wat',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      {
        text: '组件',
        items: [
          { text: 'dialog', link: '/dialog' },
          { text: 'toast', link: '/toast' },
          { text: 'picker', link: '/picker' },
          { text: 'popup-picker', link: '/popup-picker' },
          { text: 'datetime', link: '/datetime' },
        ],
      },
    ],
    sidebar: 'auto',
    displayAllHeaders: true,
  },
};
