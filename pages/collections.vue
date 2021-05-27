<template>
    <div>
      <collections v-bind:collections="collections" />
    </div>
</template>

<script>

import collectionsQuery from '~/apollo/queries/collections/collections'

export default {
  data () {
      return {
        collections: [],
      }
  },
  apollo: {
      collections: {
        prefetch:  true,
        query: collectionsQuery,
        variables () {
          return { id: parseInt(this.$route.params.id) }
        }
      }
  },
  head: {
    title: 'moi eem',
    meta: [
       { hid: 'description', name: 'description', content: "description here"  },
                    { vmid: 'robots', name: 'robots', content: "index, follow" }, 
                    { hid: 'og:title', property: 'og:title', content: "text" },
                    { hid: 'og:image', property: 'og:image', content: "text" },
                    { hid: 'og:description', property: 'og:description', content: "text" } 
    ]
  }
}


</script>


<style scoped>


</style>
