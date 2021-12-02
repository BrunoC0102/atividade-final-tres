<template>
  <v-app>
    <v-row>
      <v-col v-for="(item, i) in dogsBreeds" :key="i" cols="12" md="4">
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
  </v-app>
</template>

<style>
#select-quant-itens {
  width: 100px;
  align-self: center;
  background-color: white;
  border-radius: 5px;
  padding: 5px;
}
</style>

<script>
import CardDogs from "./CardDogs.vue";
export default {
  name: "ListDogs",
  components: { CardDogs },
  data() {
    return {
      dogsBreeds: this.$store.state.dogsBreeds,
      limit: 50,
      page: 1,
      order: "Desc",
    };
  },
  methods: {
    fetchDogs() {
      console.log(this.dogsBreeds.name);
    },
  },
  async created() {
    this.$store.dispatch("fetchDogsBreeds", {
      limit: this.limit,
      page: this.page,
      order: this.order,
    });
  },
};
</script>
