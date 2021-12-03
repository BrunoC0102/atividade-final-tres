import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "af2",
    products: [
      {
        id: 1,
        title: "Pizza - Frango Catupiry",
        description: "Pizza de frango rechada com catupiry",
        imageUrl: require("@/assets/images/carousel/pizza_frango_requeijao.jpg"),
        price: 43.5,
        cuisine: "Italiana",
        active: true,
      },
      {
        id: 2,
        title: "Pizza - Americana",
        description: "Tradicional pizza americana",
        imageUrl: require("@/assets/images/carousel/pizza-americana.jpg"),
        price: 35.47,
        cuisine: "Italiana",
        active: true,
      },
      {
        id: 3,
        title: "Pizza - Bauru",
        description: "Tradicional pizza Bauru",
        imageUrl: require("@/assets/images/carousel/pizza-bauru.jpg"),
        price: 40.0,
        cuisine: "Italiana",
        active: true,
      },
      {
        id: 4,
        title: "Pizza - Brigadeiro",
        description: "Pizza de brigadeiro com morango",
        imageUrl: require("@/assets/images/carousel/pizza-de-brigadeiro.jpg"),
        price: 50.0,
        cuisine: "Italiana",
        active: true,
      },
      {
        id: 5,
        title: "Pizza - Lombo",
        description: "Tradicional pizza de lombo",
        imageUrl: require("@/assets/images/carousel/pizza-de-lombo.jpg"),
        price: 60.0,
        cuisine: "Italiana",
        active: true,
      },
      {
        id: 6,
        title: "Pizza - Palmito",
        description: "Tradicional pizza de palmito",
        imageUrl: require("@/assets/images/carousel/pizza-de-palmito.jpg"),
        price: 50.0,
        cuisine: "Italiana",
        active: true,
      },
      {
        id: 7,
        title: "Pizza - Portuguesa",
        description: "Tradicional pizza portuguesa",
        imageUrl: require("@/assets/images/carousel/pizza-portuguesa.jpg"),
        price: 55.0,
        cuisine: "Italiana",
        active: true,
      },
      {
        id: 8,
        title: "Pizza - Brocolis",
        description: "Tradicional pizza de brocolis",
        imageUrl: require("@/assets/images/carousel/pizza-brocolis.jpg"),
        price: 55.0,
        cuisine: "Italiana",
        active: true,
      },
    ],
    carousel: [
      {
        src: require("@/assets/images/carousel/pizza-americana.jpg"),
      },
      {
        src: require("@/assets/images/carousel/pizza-bauru.jpg"),
      },
      {
        src: require("@/assets/images/carousel/pizza-de-lombo.jpg"),
      },
      {
        src: require("@/assets/images/carousel/pizza-portuguesa.jpg"),
      },
    ],
    dogsBreeds: [],
  },
  mutations: {
    SET_DOGS(state, payload) {
      state.dogsBreeds = payload;
    },
  },
  actions: {
    fetchDogsBreeds({ commit }) {
      axios
        .get(`https://api.thedogapi.com/v1/breeds`)
        .then((res) => {
          const payload = res.data;
          commit("SET_DOGS", payload);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  getters: {
    bigTitle(state) {
      return state.title.toUpperCase();
    },
  },
});
