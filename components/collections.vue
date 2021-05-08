<template>
  <div v-if="!$apollo.loading" class="collections-container">

    <div class="title">
      <h1>collections</h1>
    </div>

    <div>

       <div v-for="collection in collections" class="collection-container">
       <router-link v-bind="collection" 
          :to="{ name: 'collections-id', params: {id: collection.id} }" 
          class="" :key="collection.id">

          <!--
          <img
              class="w-full"
              :src="'http://localhost:1337' + collection.cover.url" alt="" width="300" height="300" 
          />
          -->
      
          <div>
            <div><h2>{{ collection.title }}</h2></div>

            {{ collection.content_two}}
            <!--
            <div>
              <img :src="api_url + collection.content_image.url" width="300" height="300" />
            </div>
           -->
            <p>{{ collection.content }}</p>
         
          </div> 

        </router-link>
        </div>

        

    </div> <!-- / container -->

  </div><!-- collection-container -->
  <div v-else>Loading</div>
</template>

<script>

import collectionsQuery from '~/apollo/queries/collections/collections'

export default {
  data() {
    return {
      api_url: process.env.strapiBaseUri
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
