<template>
  <div class="dogs">
    <v-container fluid>
      <list-dogs />
    </v-container>
  </div>
</template>

<script>
import ListDogs from "../components/ListDogs.vue";
export default {
  name: "Dogs",
  components: { ListDogs },
};
</script>
