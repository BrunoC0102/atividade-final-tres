<template>
  <v-row>
    <v-col v-for="(item, i) in listDogs" :key="i" cols="12" md="4">
      <card-dogs
        :name="item.name"
        :imageUrl="item.image.url"
        :weight="item.weight.metric"
        :height="item.height.metric"
        :description="item.description"
        :breedGroup="item.breed_group"
        :lifeSpan="item.life_span"
      />
    </v-col>
  </v-row>
</template>

<style></style>

<script>
import CardDogs from "./CardDogs.vue";
export default {
  name: "ListDogs",
  components: { CardDogs },
  computed: {
    listDogs() {
      return this.$store.state.dogsBreeds;
    },
  },
  methods: {
    fetchDogs() {
      this.$store.dispatch("fetchDogsBreeds");
    },
  },
  async created() {
    this.fetchDogs();
  },
};
</script>
