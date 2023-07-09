// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  devtools: { enabled: true },
  extends: [
    'nuxt-seo-kit',
  ],
  fontMetrics: {
    fonts: ['Inter']
  },
  modules: [
    '@nuxthq/ui',
    '@nuxtjs/fontaine',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost',
      siteName: 'Kentucky Stream Team',
      siteDescription: "A supergroup of volunteers helping to monitor Kentucky's most vital resource - water.",
    }
  }
})
