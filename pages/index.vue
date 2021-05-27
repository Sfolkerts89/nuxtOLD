<template>
  <div class="container">
    <div v-if="!$apollo.loading">
      ??
    </div>
    <div v-else>
      else
    </div>
    
    {{ home.title }}
    
    {{ home.content }} 

    <!-- <SeoMetaData :someData="SEOquery" />  ( WORKS )-->
    <SeoMetaData v-bind="(home)" :SEOdata="home" />
  </div>
</template>


<style>

</style>

<script>
import homeQuery from '~/apollo/queries/pages/home'

export default {

  data() {
     return {
       home: [],       
     }
  },
  
  apollo: {
    home: {
      prefetch: true,
      query: homeQuery
    }
  }, 

}
</script>
