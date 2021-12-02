<template>
  <v-container fluid>
    <!-- <carousel /> -->
    <dogs />
  </v-container>
</template>

<script>
// import Carousel from "../components/Carousel";

import Dogs from "./Dogs.vue";

export default {
  name: "Home",

  components: {
    Dogs,
  },
  methods: {},
};
</script>
