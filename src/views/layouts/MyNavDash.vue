<template>
  <v-container class="flex">
    <v-navigation-drawer permanent height="800" width="256">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Mon Compte
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ user.lastname }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-container class="text-center">
      <h1>SALUT</h1>
    </v-container>
  </v-container>
</template>

<script>
import User from "../apis/User";
import { mapState } from "vuex";

export default {
  data() {
    return {
      items: [
        { title: "Gérer mon compte", icon: "mdi-view-dashboard", route: "/" },
        { title: "Mes rendez-vous", icon: "mdi-calendar" },
        { title: "Supprimer mon compte", icon: "mdi-cancel" },
      ],
      right: null,
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },

  mounted() {
    User.auth().then((response) => {
      this.$store.commit("AUTH_USER", response.data);
    });
  },
};
</script>
