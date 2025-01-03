// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/css/global.css', // Importa o CSS global
  ],
  app: {
    baseURL: '/De-Zero-a-Dev/', // Nome do repositório no GitHub
  },
})
