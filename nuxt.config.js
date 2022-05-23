import { AXIOS_BASE_URL, GOOGLE_ANALYTICS } from './envconfig'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Incosplay - Cosplay & Marketplace ',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Manjari&display=swap"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  styleResources: {
    scss: ['./assets/abstract/*.scss'],
  },

  css: ['./assets/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: AXIOS_BASE_URL,
  },
  googleAnalytics: {
    id: GOOGLE_ANALYTICS
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
