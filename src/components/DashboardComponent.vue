<template>
<v-container>

    <div class="container">
      <h1>Dashboard</h1>
      <div class="card">
        <div class="card-body" v-if="user">
          <h3>Hello, {{ user.firstname }}</h3>
          <span>{{ user.lastname }}</span>
          <span>{{user.dateOfBirth }}</span>
        </div>
      </div> 
    </div>
        
</v-container>  
</template>

<script>
import User from "../apis/User";
import { mapState } from "vuex";

export default {
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
