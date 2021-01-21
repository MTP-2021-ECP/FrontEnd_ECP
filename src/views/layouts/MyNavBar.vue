<template>
  <nav id="navbar">
    <v-card class="overflow-hidden">
    <v-toolbar id="navbar"  dark flat inset app width="auto">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <router-link :to="{ name: 'login'}">
      <v-btn class="ma-2" text icon>
        <v-icon class="ma-2 deep-white--text text--lighten-1" router :to="Home">mdi-account</v-icon>
      </v-btn>
      </router-link>
      <router-link :to="{name: 'register'}">
      <v-btn class="ma-2" text icon>
        <v-icon class="ma-2 deep-white--text text--lighten-1">mdi-account-plus</v-icon>
      </v-btn>
      </router-link>
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
      items:[
        {icon: "mdi-home", route: "/"}
      ]
    };
  },
};
</script>

<style>
#navbar {
  background: rgb(24,103,192);
  background: linear-gradient(0deg, rgba(24,103,192,1) 0%, rgba(92,187,246,1) 100%); 
}
</style>
