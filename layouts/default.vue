<template>
  <div class="site-wrapper">
    <NavBar />
    <div class="content page">
      <Nuxt /> 
    </div>
    <Footer />
  </div>
</template>

<script>
  
</script>

<style lang="scss">
html * {
  font-family: $font;
}

h1, h2, h3 {
  font-family: $font-one;
}


.page {
  padding: 10% 5%;
  max-width: 70%;
}

</style>
