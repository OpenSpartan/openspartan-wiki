const { description } = require('../../package')
const fs = require("fs");
const path = require("path");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'OpenSpartan Wiki',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#385638' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/media/icon/apple-icon-57x57.png'}],
    ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/media/icon/apple-icon-60x60.png'}],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/media/icon/apple-icon-72x72.png'}],
    ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/media/icon/apple-icon-76x76.png'}],
    ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/media/icon/apple-icon-114x114.png'}],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/media/icon/apple-icon-120x120.png'}],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/media/icon/apple-icon-144x144.png'}],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/media/icon/apple-icon-152x152.png'}],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/media/icon/apple-icon-180x180.png'}],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/media/icon/android-icon-192x192.png'}],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/media/icon/android-icon-32x32.png'}],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/media/icon/android-icon-96x96.png'}],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/media/icon/android-icon-16x16.png'}],
    ['link', { rel: 'manifest', href: '/media/icon/manifest.json'}],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff'}],
    ['meta', { name: 'msapplication-TileImage', content: '/media/icon/ms-icon-144x144.png'}],
    ['meta', { name: 'theme-color', content: '#ffffff'}]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/dend/openspartan-wiki',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: "Contribute to this page",
    docsDir: 'osw/docs/src',
    lastUpdated: true,
    nav: [
      {
        text: 'Get Started',
        link: '/introduction/',
      },
      {
        text: 'OpenSpartan Project',
        link: 'https://openspartan.com'
      }
    ],
    sidebar: {
      "/introduction/": getSideBar("introduction", "Getting Started"),
      "/halo-infinite/": getSideBar("halo-infinite", "Halo Infinite API")
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

function getSideBar(folder, title) {
  const extension = [".md"];

  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      (item) =>
        item.toLowerCase() != "readme.md" &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
        extension.includes(path.extname(item))
    );

  return [{ title: title, children: ["", ...files] }];
}
