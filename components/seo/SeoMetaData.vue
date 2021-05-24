<template>
    <div>
     
    </div>
</template>

<script>

// todo list:
// - create if statement : if query array SEOmetaData exist, else dont render component
// - create seperate SEO component for portfolio && items, specify per item. Especially <itemprop> (read: microdata; schema.org )

export default {

 
    props: {
        SEOdata: [Array, Object],
    },

    
    head() { // this works as is

        if (!this.SEOdata.SEOmetaData) {
            return ({
                title: 'false'
            })
        } else {
            let SEOvar = this.SEOdata.SEOmetaData
            return ({
                title: SEOvar.metaTitle,

                meta: [
                    { hid: 'description', name: 'description', content: SEOvar.metaDescription  },
                    { vmid: 'robots', name: 'robots', content: (SEOvar.preventIndexing ? 'noindex, nofollow' : 'index, follow') }, 
                    { hid: 'og:title', property: 'og:title', content: SEOvar.metaTitle },
                    { hid: 'og:image', property: 'og:image', content: SEOvar.shareImage.media.url },
                    { hid: 'og:description', property: 'og:description', content: SEOvar.metaDescription } 
                ]
            })
        }
    } // head

}
</script>

