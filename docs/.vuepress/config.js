const head = require('./config/head');
const themeConfig = require('./config/themeConfig');

module.exports = {
  theme: require.resolve('../../theme-vdoing'),
  title: 'alva-yky',
  description: 'A simple blog',
  markdown: {
    lineNumbers: true,
  },

  head,
  themeConfig,
  dest: 'public'
};