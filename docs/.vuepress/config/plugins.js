module.exports = [
  'element-ui',
  'vuepress-plugin-element-tabs',
  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
      copyMessage: '复制成功',
      duration: 1000,
      showInMobile: false
    }
  ],
  [
    'photo-swipe',
    {
      container: '.theme-container',
      selector: 'p img'
    }
  ]
]