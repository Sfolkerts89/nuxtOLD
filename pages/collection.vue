<template>
    <div class="container">
    <div class="title">
      <h1>Welcome to my collection</h1>
    </div>
    <div class="container">
      <div  v-for="collection in filteredList" v-bind:key="collection" class="max-w-sm rounded overflow-hidden shadow-lg p-1">
       
        <!-- <img
          class="w-full"
          :src="'http://localhost:1337' + album.image[0].url" alt="" width="300" height="300" 
        /> -->
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ collections.title }}</div>
          <p
            class="text-gray-700 text-base"
          >{{ collections.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import collectionsQuery from "~/apollo/queries/collection/collections";
export default {
  data() {
    return {
      collections: [],
      query: ""
    };
  },
  apollo: {
    collections: {
      prefetch: true,
      query: collectionsQuery
    }
  },
};
</script>

<style scoped>

</style>
