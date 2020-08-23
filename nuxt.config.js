import Sass from 'sass'
import Fiber from 'fibers'
import {
  alphabetRaw,
  permuteWithRepetitions,
} from './src/assets/script/store/settings.js'

const detailPages = permuteWithRepetitions(alphabetRaw, 5).map(
  (paramName) => `/detail/${paramName}`
)
const routesList = [...['/', '/about', '/list'], ...detailPages]

const routerBase = process.env.BASE_DIR
  ? {
      router: {
        base: process.env.BASE_DIR,
      },
      generate: {
        fallback: true,
        dir: 'public',
        routes: routesList,
      },
    }
  : {}

export default {
  head() {
    const siteName = '命名の助（メイメイノスケ）'
    const siteDescription =
      '子供の名前を響きから考える人向けの、ブラウザで動作するサポートツールです。50音を組み合わせて名前をつくりましょう。'
    const siteUrl = 'https://t--takai.github.io/helper-of-godmother/'
    const siteImage = `${process.env.BASE_DIR || '/'}sns-card.png`
    return {
      titleTemplate(titleChunk) {
        return titleChunk ? `${titleChunk} - ${siteName}` : siteName
      },
      htmlAttrs: { prefix: 'og: http://ogp.me/ns#' },
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: siteDescription,
        },
        { hid: 'title', name: 'title', content: siteName },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: siteUrl },
        { hid: 'ogTitle', property: 'og:title', content: siteName },
        {
          hid: 'ogDescription',
          property: 'og:description',
          content: siteDescription,
        },
        { property: 'og:image', content: siteImage },
        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitterUrl', property: 'twitter:url', content: siteUrl },
        { hid: 'twitterTitle', property: 'twitter:title', content: siteName },
        {
          hid: 'twitterDescription',
          property: 'twitter:description',
          content: siteDescription,
        },
        { property: 'twitter:image', content: siteImage },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: `${process.env.BASE_DIR || '/'}favicon.ico`,
        },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap&subset=japanese',
        },
      ],
    }
  },
  loading: { color: '#ddd' },
  css: ['@/assets/style/global.scss'],
  plugins: [],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // DOC: https://github.com/nuxt-community/analytics-module
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-167991011-1',
      },
    ],
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  axios: {},
  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },
  server: {
    port: 4000, // default: 3000
    host: 'localhost', // default: localhost
  },
  /**
   * configuration-srcDir
   * DOC: https://ja.nuxtjs.org/api/configuration-srcdir/#__layout
   */
  srcDir: 'src/',
  build: {
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 },
            },
          ],
        ]
      },
    },
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
        additionalData: "@use '@/assets/style/_not-actual-styles' as base;",
      },
    },
  },
  ...routerBase,
}
