<template>
  <div class="container">
  
    <h1>{{ contact.title }}</h1>
    
    <p>{{ contact.content }}</p>


 
    <SeoMetaData v-bind="(contact)" :SEOdata="contact" /> 
  </div>
</template>


<style>

</style>

<script>
import contactQuery from '~/apollo/queries/pages/contact'

export default {

  data() {
     return {
       contact: [],       
     }
  },
  
  apollo: {
    contact: {
      prefetch: true,
      query: contactQuery
    }
  }, 

}
</script>
