<template>
    <div>
     
    </div>
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

    data() {  // this works for pages with SEOmetaData defined, but not if SEOdata array is NULL
        return {
            SEOvar: this.SEOdata.SEOmetaData,
        }
    },

    // data() // Work in progress
    //     if (this.SEOdata === undefined || this.SEOdata.length == 0) {
    //         // do nothing
    //     } else {
    //         return ({
    //             SEOvar: this.SEOdata.SEOmetaData,
    //         })
    //     }
    // },
  
    head() { // this works as is

        if (this.SEOdata === undefined || this.SEOdata.length == 0) {
            return ({
                // Do nothing, serve default nuxt.config data
            })
        } else {
            return ({
                title: this.SEOvar.metaTitle,

                meta: [
                    { hid: 'description', name: 'description', content: this.SEOvar.metaDescription  },
                    { vmid: 'robots', name: 'robots', content: (this.SEOvar.preventIndexing ? 'noindex, nofollow' : 'index, follow') }, 
                    { property: 'og:title', content: this.SEOvar.metaTitle },
                    { property: 'og:image', content: this.SEOvar.shareImage.media.url },
                    { property: 'og:description', content: this.SEOvar.metaDescription } 
                ]
            })
        }
    }
}
</script>

