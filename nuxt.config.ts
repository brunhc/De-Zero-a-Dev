import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/css/global.css', // Importa o CSS global
  ],
  app: {
    baseURL: '/De-Zero-a-Dev/', // Substitua pelo nome do seu repositório no GitHub
  },
});
