import colors from "vuetify/es5/util/colors";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  components: true,
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "WILKSON CARDOSO | UX | UI | PO ",

    // title: "Wilkson Cardoso",
    htmlAttrs: {
      lang: "pt-br",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Wilkson A Cardoso, Hoje melhor doque ontem, amanhã melhor do que hoje.",
      },
      { name: "format-detection", content: "telephone=no" },
      { name: "author", content: "Wilkson CArdoso" },

      { property: "og:url", content: "https://wilksoncardoso.netlify.app/" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Wilkson Cardoso & Soluções" },
      {
        property: "og:description",
        content: "Hoje melhor doque ontem, amanhã melhor do que hoje.",
      },
      { name: "robots", content: "index,follow" },
      { name: "google", content: "notranslate" },
      { name: "googlebot", content: "index,follow" },
      {
        name: "keywords",
        content:
          "ux design, desenvolvedor vue.js, nuxt.js, ui, ux/ui, design system, javascript, sass, css",
      },
    ],
    link: [
      {
        rel: "preload",
        as: "style",
        media: "all",
        href: "/css/materialdesignicons.css",
        onload:"this.onload=null;this.rel='stylesheet'"
      },

      {
        rel: "icon",
        sizes: "192x192",
        type: "image/png",
        href: "/icon/192X192.png",
      },
      {
        rel: "icon",
        sizes: "32x32",
        type: "image/png",
        href: "/icon/32X32.png",
      },
      {
        rel: "icon",
        sizes: "96x96",
        type: "image/png",
        href: "/icon/96x96.png",
      },
      {
        rel: "icon",
        sizes: "16x16",
        type: "image/png",
        href: "/icon/16x16.png",
      },

      { rel: "apple-touch-icon", sizes: "57x57", href: "/icon/57x57.png" },
      { rel: "apple-touch-icon", sizes: "60x60", href: "/icon/60x60.png" },
      { rel: "apple-touch-icon", sizes: "72x72", href: "/icon/72x72.png" },
      { rel: "apple-touch-icon", sizes: "76x76", href: "/icon/76x76.png" },
      { rel: "apple-touch-icon", sizes: "114x114", href: "/icon/114x114.png" },
      { rel: "apple-touch-icon", sizes: "120x120", href: "/icon/120x120.png" },
      { rel: "apple-touch-icon", sizes: "144x144", href: "/icon/144x144.png" },
      { rel: "apple-touch-icon", sizes: "152x152", href: "/icon/152x152.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/icon/180x180.png" },
      // { rel: "stylesheet", sizes: "font", href: "/font/MYRIADPRO-REGULAR.woff" },
      // { rel: "stylesheet", sizes: "font", href: "/font/MYRIADPRO-BOLDCOND.woff" },
      // { rel: "stylesheet", sizes: "font", href: "/css/materialdesignicons.css" },
    ],
    noscript: [
      {
        link:[
          {
            rel: "stylesheet",
            href: "/css/materialdesignicons.css",
          },
        ]
      },
    ],
  },
  loading: {
    color: "blue",
    height: "5px",
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/google-fonts",
    "@nuxt/image",

  ],


  googleFonts: {
    display: "swap",
    prefetch: true,
    preload: true,
    families: {
      Montserrat: true,
    },
  },
  ssr: false,
  target: "static",
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/http", "@nuxt/image"],
  image: {
    provider: "netlify",
    // storyblok:{
    //   baseURL:'https://a.storyblok.com/f/182555/'
    // }
    // domains: ['http://localhost:8000']
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    defaultAssets: false,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: "#0E58A5",
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: "#0E58A5",
        },
      },
    },
    icons: {
      iconfont: "mdiSvg",
    },
  },
  server: {
    port: 8000, // default: 3000
    host: "0.0.0.0", // default: localhost,
    timing: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.(css|vue)$/,
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
  },
  generate: {
    dir: "dist",
    subFolders: false,
    fallback: "404.html",
    ignore: [
      '.nuxt', // buildDir
      'static', // dir.static
      'dist', // generate.dir
      'node_modules',
      '.**/*',
      '.*',
      'README.md'
    ],
    cache: {
      ignore: ['renovate.json'] // ignore changes applied on this file
    }
  },
};
