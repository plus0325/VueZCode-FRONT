<template>
      <h1 class="title my-md-10 mt-5"><slot name="text"></slot></h1>
      <v-divider thickness="1px" color="white" class="my-10"></v-divider>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style scoped>

.title {
  font-size: 70px;
  font-weight: 900;
}
/* @media screen and (max-width: 767px) {
  .title {
    font-size: calc(1.2rem + (1.3 - 1.2) * ((100vw - 600px) / (1200 - 600)));
  }
} */
@media screen and (min-width: 767px) {
  .title {
    font-size: 120px;
  }
}
</style>
