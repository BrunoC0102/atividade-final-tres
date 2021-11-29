<template>
  <div class="products">
    <v-container fluid>
      <list-products />
    </v-container>
  </div>
</template>

<script>
import ListProducts from "../components/ListProducts.vue";
export default {
  name: "Products",
  components: { ListProducts },
};
</script>
