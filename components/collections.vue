<template>
  <div class="page-container">

    <div class="title">
      <h1>collections hallo</h1>
    </div>

    <div v-if="$apollo.loading">
      Im loading!
    </div>

    <div v-else v-for="collection in collections" :key="collection" class="collection-container">

      <router-link v-bind="collection" 
        :to="{ name: 'collections-id', params: {id: collection.id} }" 
        class="" :key="collection.id">
        <div>
          <div><h2>{{ collection.title }}</h2></div>
          {{ collection.content_two}}
          <div>
            <img :src="collection.content_image.url" width="300" height="300" />
          </div>
          <p>{{ collection.content }}</p>
        </div> 
      </router-link>

    </div> <!-- /collection-container -->

  </div><!-- page-container -->
</template>

<script>

import collectionsQuery from '~/apollo/queries/collections/collections'

export default {
  data() {
    return {
    
    }
  },
  apollo: {
    collections: {
      prefetch: true,
      query: collectionsQuery
    }
  },
  props: {
    collections: Array
  }
}
</script>


<style lang="scss" scoped>

h1 {
  font-size: 40pt;
  padding-bottom: 40px;
}

.page-container {
  margin: 50px 0;
  background-color: $base-color;
  padding: 1em;
  a {
      color: $white;
      text-decoration: none;
  }
  &:hover {
    padding-right: 0;
    border-right: 1em solid #333;
    transition: 300ms ease-in-out;
  }
}
</style>
