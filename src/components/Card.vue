<template>
  <v-card class="mx-auto my-12" max-width="374">
    <v-img height="250" v-bind:src="imageUrl"></v-img>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">4.5 (413)</div>
      </v-row>
      <div class="my-4 text-subtitle-1">
        R$ {{ formatMoney(price) }} • {{ cuisine }}
      </div>
      <div class="my-4">
        {{ description }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    description: String,
    imageUrl: Image,
    price: Number,
    cuisine: String,
  },
  methods: {
    formatMoney(value) {
      return new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
    },
  },
};
</script>
