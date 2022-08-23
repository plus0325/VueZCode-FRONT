<template>
  <v-carousel hide-delimiters show-arrows="hover" height="600" cycle interval="8000" vertical  vertical-delimiters class="carousel">
    <v-carousel-item
      v-for="(item,i) in data.items"
      :key="i"
      :src="item.src"
      cover
      class="pa-0"
    >
      <!-- <span
                class=" white--text pl-4 pt-4 d-inline-block text-caption"
                style="
                font-size: 300px;
                "
                v-text="item.slideA"
      ></span> -->
      <v-sheet color="rgba(0, 0, 0, 0.2)" class="d-flex justify-start justify-md-center align-center h-100 ps-5">
        <div class="d-flex flex-column" id="text">
          <div class="text-h1 font-weight-black">
            {{ item.slideA }}
          </div>
          <div class="text-h2 font-weight-regular" style="font-family: 'Fira Code' !important;">
            {{ item.slideB }}
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { reactive, ref } from 'vue'

const data = reactive({
  items: [
    {
      src: 'https://images.unsplash.com/photo-1495651779359-881fde1808a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      slideA: 'Hello World',
      slideB: '1'
    },
    {
      src: 'https://images.unsplash.com/photo-1612729829113-59e5c3a3d107?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      slideA: 'Hello World',
      slideB: '2'
    },
    {
      src: 'https://images.unsplash.com/photo-1503528108408-87b0d1c2b785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1865&q=80',
      slideA: 'Hello World',
      slideB: '3'
    },
    {
      src: 'https://images.unsplash.com/photo-1534435147492-fa0d8d53eb9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1217&q=80',
      slideA: 'Hello World',
      slideB: '4'
    }
  ]
})

</script>

<style scoped>
.text-h1 {
  font-size: 300px;
  font-family: 'Fira Code' !important;
}

#carouselHero .v-carousel-item:nth-child(2) .text-h2  {
  color:red;
}
/* #carouselHero .v-carousel {
  height: 200px !important;
} */

@media screen and (max-width: 767px) {
  .carousel {
    height: 450px !important;
  }
}
</style>
