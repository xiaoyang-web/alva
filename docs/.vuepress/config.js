const head = require('./config/head');
const themeConfig = require('./config/themeConfig');
const plugins = require('./config/plugins');

module.exports = {
  theme: require.resolve('../../theme-vdoing'),
  title: 'alva-yky',
  description: 'A simple blog',
  // markdown: {
  //   lineNumbers: true,
  // },

  head,
  plugins,
  themeConfig,
  dest: 'public'
};