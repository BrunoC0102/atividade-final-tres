<template>
  <v-row>
    <v-col v-for="(item, i) in products" :key="i" cols="12" md="4">
      <card
        :title="item.title"
        :description="item.description"
        :price="item.price"
        :imageUrl="item.imageUrl"
        :cuisine="item.cuisine"
      />
    </v-col>
  </v-row>
</template>

<style></style>

<script>
import Card from "./Card.vue";
export default {
  name: "ListProducts",
  components: { Card },
  data() {
    return {
      products: this.$store.state.products,
    };
  },
};
</script>
