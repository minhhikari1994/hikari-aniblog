// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui'],
  css: [
    'primeflex/primeflex.css',
    '~/assets/css/main.css',
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
