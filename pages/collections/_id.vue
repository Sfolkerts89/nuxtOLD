<template>
  <div>

    <div v-if="$apollo.loading">
      <div class="apollo-loading">
        <h2>Im still loading..</h2>
      </div>
    </div>

    <div v-else>
      ??
      <div v-if="collection" v-bind="collection" class="collection-container">
        <h1>{{ collection.title }}</h1>
        <div class="content">
          <p>{{ collection.content }}</p>
          <p>{{ collection.content_two }}</p>
          <div>
            <img :src="collection.content_image.url" width="300" height="300" />
          </div>
        </div>
      </div>
    </div>
 
  <SeoMetaData v-bind="(collection)" :SEOdata="collection" />

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
    },
  }
}
</script>

<style lang="scss" scoped>

h1 {
  font-size: 20pt;
}

</style>
