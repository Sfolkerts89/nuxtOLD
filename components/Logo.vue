<template>
  <img class="logo logo-animate" src="@/assets/2.6.3-white.svg" />
</template>

<style scoped>
.logo {
  width:60px;
  height:auto;
}
.logo-animate {
  animation: 2s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
