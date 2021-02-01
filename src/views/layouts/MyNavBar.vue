<template>
  <nav id="navbar">
    <v-card class="overflow-hidden">
      <v-toolbar id="navbar" dark flat inset fixed-header width="auto">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-btn
          class="ma-2"
          text
          icon
          v-if="!isLoggedIn"
          :to="{ name: 'login' }"
        >
          <v-icon class="ma-2 deep-white--text text--lighten-1" router
            >mdi-account</v-icon
          >
        </v-btn>
        <v-tooltip v-if="isLoggedIn" bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="ma-2"
              v-bind="attrs"
              v-on="on"
              text
              icon
              @click.prevent="logout"
              ><v-icon>mdi-exit-to-app </v-icon></v-btn
            >
          </template>
          <span>Se déconnecter</span>
        </v-tooltip>
        <v-btn
          class="ma-2"
          text
          icon
          v-if="!isLoggedIn"
          :to="{ name: 'register' }"
        >
          <v-icon class="ma-2 deep-white--text text--lighten-1"
            >mdi-account-plus</v-icon
          >
        </v-btn>
        <v-menu v-if="isLoggedIn" bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="white" rounded text v-bind="attrs" v-on="on">
              <v-icon class="ma-2 deep-white--text text--lighten-1"
                >mdi-view-dashboard</v-icon
              >
              Mon compte
            </v-btn>
          </template>
          <v-list class="grey lighten-3">
            <v-list-item>
              <v-list-item-title class="text-center">
                <v-btn
                  rounded
                  text
                  block
                  color="orange"
                  :to="{ name: 'dashboard' }"
                  >Gérer mon compte</v-btn
                >
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="text-center">
                <v-btn rounded text color="orange" :to="{ name: 'calendrier' }"
                  >Mes rendez-vous</v-btn
                >
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="text-center">
                <v-btn
                  rounded
                  text
                  color="orange"
                  :to="{ name: 'deleteaccount' }"
                  >Supprimer mon compte</v-btn
                >
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
    </v-card>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>
        <v-divider></v-divider>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="deep-orange--text text--lighten-1">{{
              link.icon
            }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title
              class="mr-12 black--text text--accent-4 text-uppercase"
              >{{ link.text }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
/* eslint-disable */
import { mapGetters } from "vuex";
// import User from "/apis/User.js";

export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-home", text: "Home", route: "/" },
        { icon: "mdi-chart-box", text: "Stats COVID", route: "/CovidCases" },
        { icon: "mdi-map", text: "Rendez-vous", route: "/map" },
        { icon: "mdi-phone", text: "Contact", route: "/contact" },
      ],
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    logout() {
      console.log(this.$cookies.remove("accessToken"));
      this.$store.commit("LOGIN", false);
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style>
#navbar {
  background: rgb(24, 103, 192);
  background: linear-gradient(
    0deg,
    rgba(24, 103, 192, 1) 0%,
    rgba(92, 187, 246, 1) 100%
  );
}
</style>
