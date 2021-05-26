<template>
  <!-- <div v-if="!$apollo.loading">
    <div v-bind="collection" class="collection-container">
      <h1>{{ collection.title }}</h1>
      <div class="content">
        {{ collection.content }}
        {{ collection.content_two }}
        {{ collection.content_image.url }}
        <div>
          <img :src="collection.content_image.url" />
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="apollo-loading">
      <h2>Im still loading..</h2>
    </div>
  </div> -->
  <div>
    {{ collection }}
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
    props: {
      collection: Array
    }
  }
}
</script>

<style lang="scss" scoped>

h1 {
  font-size: 20pt;
}

</style>
