const themeConfig = require('./config/themeConfig');

module.exports = {
  theme: 'vdoing',
  title: 'alva-yky',
  description: 'A simple blog',
  markdown: {
    lineNumbers: true,
  },
  themeConfig,
  dest: 'public'
};