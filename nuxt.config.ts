// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    'nuxt-icon'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: "JS Challenges",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      meta: [
        { name: 'description', content: "Discover my JavaScript journey! Dive into my collection of challenging JavaScript projects, showcasing my progress and achievements." },
        { name: 'msapplication-TileColor', content: "#fafafa" },
        { name: 'theme-color', content: "#fafafa" },
      ],
      link: [
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"},
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"},
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: "icon", type:"image/png", sizes: "32x32", href: "/favicon-32x32.png"},
        { rel: "icon", type:"image/png", sizes: "316x16", href: "/favicon-16x16.png"},
        { rel: "manifest", href: "/site.webmanifest"},
      ]
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
