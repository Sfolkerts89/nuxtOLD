<template>
    <div>

        <h2>This is just an array pulled from the parent!!</h2>
        <!-- to test receiving data from parent in this component props -->
        <!-- this works {{ SEOdata }} -->
        
        <!-- {{ SEOdata }} -->

        {{ SEOvar.metaDescription }}

        {{ SEOvar }}

        
        

      
        <p style="font-weight: bold; color: red;"> 
            {{ SEOvar.preventIndexing }}
        </p>
    </div>
</template>

<script>

// todo list:
// - fix robots boolean
// - create if statement : if query array SEOmetaData exist, else dont render component

export default {

    /*

    SOURCE: https://www.advancedwebranking.com/blog/meta-tags-important-in-seo/
    
    Needed tags:
    - Title
    - description
    - robots 

    Optional tags:
    
    - Share image (for social media)
        - image url
        - image alt
        - prevent indexing (boolean)



    Social media:
        <meta property=”og:type” content=”article” />
        <meta property=”og:title” content=”TITLE OF YOUR POST OR PAGE” />
        <meta property=”og:description” content=”DESCRIPTION OF PAGE CONTENT” />
        <meta property=”og:image” content=”LINK TO THE IMAGE FILE” />
        <meta property=”og:url” content=”PERMALINK” />
        <meta property=”og:site_name” content=”SITE NAME” />

        Twitter:
        <meta name=”twitter:title” content=”TITLE OF POST OR PAGE”>
        <meta name=”twitter:description” content=”DESCRIPTION OF PAGE CONTENT”>
        <meta name=”twitter:image” content=”LINK TO IMAGE”>
        <meta name=”twitter:site” content=”@USERNAME”>
        <meta name=”twitter:creator” content=”@USERNAME”>
    */


   ///
   ///
   ///
   ///

    ///// SOURCE: https://www.digitalocean.com/community/tutorials/vuejs-vue-seo-tips
    // // OpenGraph data (Most widely used)
    // {property: 'og:title', content: 'My Page Title ← My Site'},
    // {property: 'og:site_name', content: 'My Site'},
    // // The list of types is available here: http://ogp.me/#types
    // {property: 'og:type', content: 'website'},
    // // Should the the same as your canonical link, see below.
    // {property: 'og:url', content: 'https://www.my-site.com/my-special-page'},
    // {property: 'og:image', content: 'https://www.my-site.com/my-special-image.jpg'},
    // // Often the same as your meta description, but not always.
    // {property: 'og:description', content: 'I have things here on my site.'}

    // // Twitter card
    // {name: 'twitter:card', content: 'summary'},
    // {name: 'twitter:site', content: 'https://www.my-site.com/my-special-page'},
    // {name: 'twitter:title', content: 'My Page Title ← My Site'},
    // {name: 'twitter:description', content: 'I have things here on my site.'},
    // // Your twitter handle, if you have one.
    // {name: 'twitter:creator', content: '@alligatorio'}
    // {name: 'twitter:image:src', content: 'https://www.my-site.com/my-special-image.jpg'},

    // // Google / Schema.org markup:
    // {itemprop: 'name', content: 'My Page Title ← My Site'},
    // {itemprop: 'description', content: 'I have things here on my site.'},
    // {itemprop: 'image', content: 'https://www.my-site.com/my-special-image.jpg'}



    props: {
        SEOdata: [Array, Object],

    },

    data() {
        return {
            SEOvar: this.SEOdata.SEOmetaData,
        }
    },

    // computed: {
    //     robots: function () {
    //         return this.SEOvar.SEOmetaData
    //     }
    // },

    // methods: {
    //     robots: function(retRob) {

    //         if (this.SEOdata.preventIndexing) return 'true';
    //         return 'false;';
    //     }
    // },


    head() {
        return {
            title: this.SEOvar.metaTitle,            
            meta: [
                { hid: 'description', name: 'description', content: this.SEOvar.metaDescription },
                { vmid: 'robots', name: 'robots', content: (this.SEOvar.preventIndexing ? 'noindex, nofollow' : 'index, follow') }, // change API boolean into string usiung method?
                
            ]
        
            
        }
    }
}
</script>

<style>

</style>