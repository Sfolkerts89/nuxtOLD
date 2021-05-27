<template>
  <div class="collections-container">

    <div class="title">
      <h1>collections hallo</h1>
    </div>

    <div v-if="$apollo.loading">
      <div class="apollo-loading">
        <h2>Im still loading..</h2>
      </div>
    </div>

    <div v-else>
    <div class="container">
       <div v-for="collection in collections" :key="collection" class="collection-container">
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
    </div> <!-- / container -->
    </div> <!-- END v-else -->

  </div><!-- collections-container -->

</template>

<script>

import collectionsQuery from '~/apollo/queries/collections/collections'

export default {
  apollo: {
    collections: {
      prefetch: true,
      query: collectionsQuery
    }
  },
  props: {
    collections: Array
  },
  head() {
    return {
      title: 'collections',
      meta: [
          { hid: 'description', name: 'description', content: "text"  },
          { vmid: 'robots', name: 'robots', content: "index, follow" }, 
          { hid: 'og:title', property: 'og:title', content: "text" },
          { hid: 'og:image', property: 'og:image', content: "text" },
          { hid: 'og:description', property: 'og:description', content: "text" } 
      ]
    }
  }
}
</script>


<style lang="scss" scoped>

h1 {
  font-size: 40pt;
  padding-bottom: 40px;
}

.collection-container {
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
