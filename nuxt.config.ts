// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // modules: ['@pinia/nuxt',],
  css: ["@/assets/styles/reset.scss", "@/assets/styles/main.scss", "@/assets/styles/theme.scss", "@/assets/files/stylesheet.css"],
  build: {

  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  ssr: false
})
