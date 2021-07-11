const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: 'alva-yky',
  description: 'A simple blog',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: "home" }
    ],
  },
  dest: 'public'
});