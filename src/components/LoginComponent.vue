<template>
  <v-container id="login">
    <v-card id="card">
      <h1 cclass="uppercase text-center mb-8" id="text1">J'ai déjà un compte FreeCovid</h1>
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
          Validate
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
          Reset Form
        </v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    },
  },
  data: () => ({
    show1: false,
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "adresse non valide",
      (v) => v.length <= 10 || "adresse non valide",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
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
#text1 {
  font-family: 'Roboto', sans-serif;
  color: #435f71;
}
</style>
