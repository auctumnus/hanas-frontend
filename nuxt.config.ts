import theme from './theme.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    internalKratosURL: 'localhost:4433'
  },
  devtools: { enabled: true },
  modules: [
    'halcyon-vue/nuxt',
    '@nuxtjs/eslint-module',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],
  css: ['~/assets/css/main.scss', '~/assets/css/typography.scss'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  halcyon: {
    halcyon: { theme }
  },
  googleFonts: {
    families: {
      'Noto Sans': {
        wght: [400, 500, 700]
      },
      'Roboto Flex': [400, 500, 700]
    }
  }
})
