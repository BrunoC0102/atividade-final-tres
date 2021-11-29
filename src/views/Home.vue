<template>
  <v-container fluid>
    <carousel />
    <products />
  </v-container>
</template>

<script>
import Carousel from "../components/Carousel";
import Products from "./Products";

export default {
  name: "Home",

  components: {
    Carousel,
    Products,
  },
};
</script>
