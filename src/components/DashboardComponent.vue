<template>
  <v-container>
    <h1 class="text1 text-center pt-12">GESTION DU COMPTE</h1>
    <div class="d-flex pt-12">
      <v-card v-if="user" class="mx-auto" width="600px" height="500px">
        <h1 class="text-center pt-12">Bienvenue {{ user.lastname }}</h1>
        <p class="text-center">{{ user.dateOfBirth }}</p>
        <p class="text-center">{{ user.zipCode }}</p>
        <p class="text-center">{{ user.address }}</p>
        <p class="text-center">{{ user.phoneNumber }}</p>
        <p class="text-center">{{ user.email }}</p>
        <v-container class="text-center">
          <v-row class="justify-center">
            <v-col class="pt-4" cols="8" sm="8">
              <v-btn
                :to="{ name: 'calendrier' }"
                class="pa-2"
                color="deep-orange lighten-3"
                id="navbar1"
                dark
                tile
              >
                Gérer Mes rendez-vous
              </v-btn>
              <v-btn
                :to="{ name: 'deleteaccount' }"
                class="pa-2 mt-4 error"
                tile
              >
                Supprimer mon compte
              </v-btn>
              <v-btn
                :to="{ name: 'Home' }"
                class="pa-2 mt-4"
                id="navbar"
                dark
                rounde
                tile
              >
                Retour à l'accueil
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
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
      pId: "",
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },

  mounted() {
    User.auth().then((response) => {
      console.log(response.data)
      this.$store.commit("AUTH_USER", response.data);
    });
  },
};
</script>
