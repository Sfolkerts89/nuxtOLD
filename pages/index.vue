<template>
  <div class="container">
  
    {{ home.title }}
    
    {{ home.content }} 

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
