<template>
    <div>

        <h2>This is just an array pulled from the parent!!</h2>
        <!-- to test receiving data from parent in this component props -->
        <!-- this works {{ SEOdata }} -->
        <br />
        <!-- {{ SEOdata }} -->

        {{ SEOvar.metaDescription }}

        {{ SEOvar }}

        
        

        <br />
        <br />
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

    props: {
        SEOdata: [Object, Array, Boolean],

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
                { name: 'robots', content: (this.SEOvar.preventIndexing ? 'noindex, nofollow' : 'index, follow') }, // change API boolean into string usiung method?
                
            ]
        
            
        }
    }
}
</script>

<style>

</style>