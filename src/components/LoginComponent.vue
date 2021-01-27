<template>
  <v-container id="login">
    <v-card id="card" class="mx-auto mt-8" max-width="750"> 
      <h1 class="uppercase text-center mb-8" id="text1">SE CONNECTER</h1>
      <v-form class="" ref="form" v-model="valid" lazy-validation>
        <v-text-field
          prepend-icon="mdi-account"
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          :rules="passwordRules"
          name="input-10-1"
          label="Password"
          hint="At least 8 characters"
          counter
          prepend-icon="mdi-key"
          @click:append="show1 = !show1"
          required
        ></v-text-field>
        <v-container class="pt-12">
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            SE CONNECTER
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset">
            CLEAR
          </v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
/* eslint-disable */
import User from "../apis/User";

export default {
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    },
  },
  data: () => ({
    show1: false,
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "adresse non valide",
      (v) => v.length <= 10 || "adresse non valide",
    ],
  }),

  methods: {
    validate() {
      let form = {
        email: this.email,
        password: this.password,
      };
      this.handleLogin(form);
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async handleLogin(form) {
      User.login(form)
        .then((response) => {
          this.$store.commit("LOGIN", true);
          this.$cookies.set("accessToken", response.data);
          this.$router.push({ name: "dashboard" });
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    },
  },
};
</script>

<style lang="stylus">
#login {
  margin-top: 8rem
}
#card {
  padding: 4rem
}
</style>
