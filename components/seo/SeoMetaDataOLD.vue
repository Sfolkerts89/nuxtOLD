<template>

</template>

<script>

// todo list:
// - fix robots boolean #DONE
// - create if statement : if query array SEOmetaData exist, else dont render component

// - create seperate SEO component for portfolio && items, specify per item. Especially <itemprop> (read: microdata; schema.org )

export default {

    props: {
        SEOdata: [Array, Object],

    },

    data() {
        return {
            SEOvar: this.SEOdata.SEOmetaData,
        }
    },

    head() {
        return {
            title: this.SEOvar.metaTitle,            
            meta: [
                //// Default
                { hid: 'description', name: 'description', content: this.SEOvar.metaDescription },
                { vmid: 'robots', name: 'robots', content: (this.SEOvar.preventIndexing ? 'noindex, nofollow' : 'index, follow') }, // change API boolean into string usiung method?


                //// Socials
                // OpenGraph data (Most widely used)
                { property: 'og:title', content: this.SEOvar.metaTitle },
                // Disabled till global variable is build
                // { property: 'og:site_name', content: },
                //
                // The list of types is available here: http://ogp.me/#types
                // disabled till needed 
                // { property: 'og:type', content: },
                //
                // Should the the same as your canonical link, see below.
                // Disabled till global variable is build
                // { property: 'og:url', content: },
                //
                { property: 'og:image', content: this.SEOvar.shareImage.media.url },
                // Often the same as your meta description, but not always.
                { property: 'og:description', content: this.SEOvar.metaDescription }

                //// Twitter card
                // Disabled, can just use OG for now
                // { name: 'twitter:card', content: 'summary' },
                // { name: 'twitter:site', content: },
                // { name: 'twitter:title', content: this.SEOvar.metaTitle },
                // { name: 'twitter:description', content: },
                // // Your twitter handle, if you have one.
                // // If creator exists: {name: 'twitter:creator', content: '@alligatorio'}
                // { name: 'twitter:image:src', content: },
                
            ]
        
            
        }
    }
}
</script>

<style>

</style>