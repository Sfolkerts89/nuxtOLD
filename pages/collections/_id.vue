<template>
  <div v-if="$apollo.loading">
    <div class="apollo-loading">
      <h2>Im still loading..</h2>
    </div>
  </div>
  <div v-else>
    <div v-if="collection" v-bind="collection" class="collection-container">
      <h1>{{ collection.title }}</h1>
      <div class="content">
        {{ collection.content }}
        <div>
          <img :src="collection.content_image.url" width="300" height="300" />
        </div>
        {{ collection.content_two }}
        <br />
        {{ collection.SEOmetaData.metaDescription }}
      </div>
    </div>
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
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.collection.SEOmetaData.metaDescription
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

h1 {
  font-size: 20pt;
}

</style>
