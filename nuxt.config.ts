// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  css: [
    '~/assets/css/main.css',
    'primeflex/primeflex.css',
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
  }
})
