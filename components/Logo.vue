<template>
  <img class="logo logo-animate" src="/Logo-min.svg" />
</template>

<style scoped>
.logo {
  width: 150px;
  height: auto;
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
