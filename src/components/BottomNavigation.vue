<template>

  <v-bottom-navigation grow height="56" min-width="0">
      <v-btn to="/" value="home" variant="outlined">
        <v-icon>mdi-home</v-icon>
        <span>Home</span>
      </v-btn>

      <v-btn to="/artist" value="artist" variant="outlined" min-width="0">
        <v-icon>mdi-account-star</v-icon>
        <span>Artist</span>
      </v-btn>

      <v-btn value="timetable" variant="outlined" min-width="0">
        <v-icon>mdi-calendar-clock</v-icon>
        <span>Time</span>
      </v-btn>

      <v-btn value="favorites" variant="outlined" min-width="0">
        <v-icon>mdi-map-marker</v-icon>
        <span>Map</span>
      </v-btn>

      <v-btn to="/goods" value="goods" variant="outlined" min-width="0">
        <v-icon>mdi-gift</v-icon>
        <span>Goods</span>
      </v-btn>

  </v-bottom-navigation>

</template>

<style scoped>
</style>
