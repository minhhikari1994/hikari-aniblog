import {resolve} from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxthq/studio',
    'nuxt-cron',
    'nuxt-simple-robots',
    '@nuxtjs/sitemap'
  ],
  css: [
    'primeflex/primeflex.min.css',
    'primeflex/themes/primeone-light.css',
    '~/assets/css/main.css'
  ],
  app: {
    head: {
      script: [
        { src: '/js/jquery.min.js', body: true },
        { src: '/js/browser.min.js', body: true },
        { src: '/js/breakpoints.min.js', body: true },
        { src: '/js/util.js', body: true },
        { src: '/js/main.js', body: true }
      ]
    }
  },
  i18n: {
    vueI18n: './i18n/i18n.config.ts',
    locales: ['vi', 'en']
  },
  content: {
    documentDriven: true,
    sources: {
      content: {
        driver: 'fs',
        prefix: '/en',
        base: resolve(__dirname, 'content-en')
      },
      vi: {
        prefix: '/vi',
        driver: 'fs',
        base: resolve(__dirname, 'content')
      }
    }
  }
})