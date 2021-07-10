const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "alva-yky",
  description: "A simple blog site",

  dest: "./dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
    }
  },

  themeConfig: {
    logo: "/logo.svg",
    hostname: "https://vuepress-theme-hope-demo.mrhope.site",
    sidebarDepth: 2,
    displayAllHeaders: true,
    author: "alva-yky",

    nav: [
      { text: "主页", link: "/", icon: "home" },
      {
        text: "学习笔记",
        icon: "note",
        link: "/note/",
        items: [{
          text: "基础",
          items: [{
            text: "HTML 笔记", link: "/note/html-note/", icon: "html"
          }, {
            text: "CSS 笔记", link: "/note/css-note/", icon: "css"
          }, {
            text: "JS 笔记", link: "/note/js-note/", icon: "javascript"
          }, {
            text: "VUE 笔记", link: "/note/vue-note/", icon: "vue"
          }]
        }]
      },
      {
        text: "软件工具",
        icon: "tool",
        link: "/tool/"
      },
      { text: "我的项目", link: "/home/", icon: "mini-app" }
    ],

    sidebar: {
      "/": [
        "/",
        {
          title: '学习笔记',
          icon: "note",
          prefix: "note/",
          children: ["","html-note","css-note","js-note","vue-note"]
        },
        {
          title: '软件工具',
          icon: 'tool',
          path: 'tool/'
        },
        "home",
        "slides"
      ],
    },

    blog: {
      intro: "/intro/",
      sidebarDisplay: "mobile",
      roundAvatar: false,
      links: {
        Wechat: "tel:17687902237",
        Email: "mailto:a356510493@hotmail.com",
        Github: "https://github.com/xiaoyang-web/",
      },
    },

    footer: {
      display: true,
      content: "这是页脚呢",
    },

    comment: {
      type: "waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
