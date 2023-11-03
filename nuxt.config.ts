// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxthq/studio', 'nuxt-primevue'],
  primevue: {
    components: {
      prefix: 'Prime'
    }
  },
  css: ['primevue/resources/themes/lara-light-blue/theme.css']
})
