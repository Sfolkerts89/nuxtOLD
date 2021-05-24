export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'robots', content: 'index, follow'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { 
        rel: 'stylesheet', 
        href: 'https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&family=Roboto&display=swap', 
      },
    ],
  },

 // Global CSS (https://go.nuxtjs.dev/config-css)
 css: [
  'normalize.css/normalize.css',
  '~/assets/scss/main.scss'
],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],


  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
   
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    '@nuxtjs/apollo',

    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  /*
  env: {
    strapiBaseUri: process.env.BACKEND_URL || "http://localhost:1337"
  },
*/

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  apollo: {  
    clientConfigs: {
      default: {
<<<<<<< HEAD
        httpEndpoint: process.env.BACKEND_URL || 
=======
        httpEndpoint: process.env.BACKEND_URL ||
>>>>>>> dev
        // "http://localhost:1337/graphql"
        "https://sailsnake-strapi-test-two.herokuapp.com/graphql"
      }
    }
  },

  target: 'static',
}
