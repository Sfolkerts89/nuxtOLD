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
        query: collectionsQuery,
        variables () {
          return { id: parseInt(this.$route.params.id) }
        }
      }
  },
  head: {
    title: 'moi eem',
    meta: [
      {
        hid: 'description', name: 'description', content: 'yooooo'
      }
    ]
  }
}


</script>


<style scoped>


</style>
