// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
//   app: {
//     baseURL: "/portafolio-csmv/"
// },
ssr: false, //server side rendered enabled //When true
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',]
})
