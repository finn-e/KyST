// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/css/tailwind.css',
    '@radial-color-picker/vue-color-picker/dist/vue-color-picker.min.css',
],
  devtools: { enabled: true },
  extends: [
    'nuxt-seo-kit',
    'nuxt-lego',
  ],
  fontMetrics: {
    fonts: ['Inter']
  },
  headlessui: {
    prefix: 'H',
  },
  modules: [
    '@nuxthq/ui',
    '@nuxtjs/fontaine',
    'nuxt-headlessui',
    '@nuxtjs/critters',
    '@unocss/nuxt',
    '@vueuse/nuxt',
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
