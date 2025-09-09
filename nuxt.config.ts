// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'vue3-carousel-nuxt',
    'vuetify-nuxt-module',
    'nuxt-svgo',
    '@nuxtjs/i18n',
  ],

  vuetify: {
    moduleOptions: {
      /* outras opções específicas do módulo */
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            colors: {
              primary: '#000000',
              secondary: '#000000',
              accent: '#82B1FF',
              error: '#FF5252',
              info: '#2196F3',
              success: '#4CAF50',
              warning: '#FFC107',
              grey500: '#4E4E4E',
              grey300: '#868C98',
              grey200: '#CFCFCF',
              grey150: '#ECECEC',
              grey100:'#F7F7F7',
              white: '#FFFFFF',
            }
          },
          dark: {
            colors: {
              primary: '#2196F3',
              secondary: '#FF5722'
            }
          }
        }
      }
    }
  },

  i18n: {
    defaultLocale: 'pt-br',
    locales: [
      { code: 'pt-br', name: 'Português', file: 'pt-br.json' },
    ]
  },

  vite: {
    css: {
      preprocessorOptions: {
          scss: {additionalData: `@import "@/assets/styles/main.scss";`}
      }
    }
  },
})