<template>
  <v-card class="mx-auto my-12" max-width="374">
    <v-img height="250" v-bind:src="imageUrl"></v-img>
    <v-card-title>{{ name }}</v-card-title>
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
      </v-row>
      <div class="my-4 text-subtitle-1">
        weight: {{ weight }} <br />
        height: {{ height }} <br />
        breed group: {{ breedGroup }} <br />
        life span: {{ lifeSpan }} <br />
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CardDogs",
  props: {
    name: String,
    description: String,
    imageUrl: String,
    weight: String,
    height: String,
    breedGroup: String,
    lifeSpan: String,
  },
};
</script>
