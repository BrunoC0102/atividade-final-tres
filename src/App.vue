<template>
  <v-app id="app">
    <ToolBar
      :openDrawer="openDrawer"
      v-bind:title="'Atividade final 2 - ' + titleText"
    />

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item href="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item href="/products">
            <v-list-item-icon>
              <v-icon>mdi-basket</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Produtos</v-list-item-title>
          </v-list-item>

          <v-list-item href="/about">
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item href="/admin">
            <v-list-item-icon>
              <v-icon>mdi-file-cog</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Admin</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import ToolBar from "./components/Toolbar";
export default {
  name: "App",

  components: {
    ToolBar,
  },
  data() {
    return {
      drawer: false,
      group: null,
      titleText: this.$store.state.title,
    };
  },
  methods: {
    openDrawer() {
      this.drawer = true;
    },
  },
};
</script>

<style>
#app {
  background-color: #222222;
}
</style>
