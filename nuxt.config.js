export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'javascript技术分享',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'javascript技术分享,本网站专注开发技术分享,定期分享一些最新的javascript技术，前端教程，后端教程，以及一些资源的分享,致力于书写心得,分享感悟。' },
      { hid: 'keywords', name: 'keywords', content: 'javascript技术分享,js技术,vuejs,web前端开发,前端面试,web开发,dsiab,个人博客' },
      // { name: 'referrer', content: 'no-referrer-when-downgrade' }, // 解决其他开启网站防盗链功能,全局会导致百度统计失效

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server: {
    port: 3000
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    './assets/css/common.css',
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui',
    {src: './plugins/bdtongji.js'}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/proxy',

    '@nuxtjs/component-cache',
    // 缓存配置选项
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 1000 * 60 * 60
    }]
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/bootService/': {
      target: 'http://admin.dsiab.com/bootService/'
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  }
}
