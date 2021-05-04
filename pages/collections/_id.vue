<template>
  <div>

      <div v-if="collection" v-bind="collection" class="collection-container">

        <h1>{{ collection.title }}</h1>
 
        <div class="content">
          {{ collection.content }}
        </div>
      </div>

      <p v-else>Loading..</p>

  </div>
</template>

<script>
import collectionQuery from '~/apollo/queries/collections/collection'

export default {
  data() {
    return {
      collection: [],
    }
  },
  apollo: {
    collection: {
      prefetch: true,
      query: collectionQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

h1 {
  font-size: 20pt;
}

</style>
