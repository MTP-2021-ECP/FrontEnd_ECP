<template>
 <div class="d-flex pt-12">
    <v-card class="mx-auto" width="600px" height="500px">
      <h1 class="text-center pt-12">Bienvenue {{ user.lastname }}</h1>
      <p class="text-center">{{user.dateOfBirth}}</p>
      <p class="text-center">{{user.zipCode}}</p>
      <p class="text-center">{{user.address}}</p>
      <p class="text-center">{{user.phoneNumber}}</p>
      <p class="text-center">{{user.email}}</p>
      <v-container class="text-center">
      <v-btn class="error mr-6">Supprimer</v-btn>
      <v-btn class="success">Modifier</v-btn>
      </v-container>
    </v-card>
</div>    
</template>

<script>
import User from "../apis/User";
import { mapState } from "vuex";

export default {
  data() {
    return {
      items: [
        { title: "Gérer mon compte", icon: "mdi-view-dashboard", route: "/"  },
        { title: "Mes rendez-vous", icon: "mdi-calendar"  },
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
