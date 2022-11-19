export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
    externalVue: true,
  },
  app: {
    head: {
      title: '移动端Nuxt3模版',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,height=device-height,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
        { name: 'description', content: '只是一个管理后台' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
      style: [],
      script: [],
    },
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  vite: {},
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    storageKey: 'color-mode',
  },
})
