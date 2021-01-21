<template>
  <div>
    <v-card id="card" class="mx-auto mt-8" max-width="750">
      <h1 class="uppercase text-center mb-8" id="text1">
        Nouveau sur FreeCovid ? Saisissez vos informations pour continuer.
      </h1>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="Nom"
                prepend-icon="mdi-account"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Prenom"
                prepend-icon="mdi-account"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="8">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                prepend-icon="mdi-mail"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="birthday"
                    label="Birthday date"
                    prepend-icon="mdi-calendar"
                    readonly
                    :rules="birthdayRules"
                    v-bind="attrs"
                    v-on="on"
                    required
                  ></v-text-field>
                </template>
                <v-date-picker
                  ref="picker"
                  v-model="birthday"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="save"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="adresse"
                :rules="adressRules"
                label="Adresse"
                prepend-icon="mdi-city"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <validation-provider
                v-slot="{ errors }"
                name="cp"
                :rules="{
                  required: true,
                  digits: 5,
                  regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$',
                }"
              >
                <v-text-field
                  v-model="cp"
                  :counter="5"
                  :error-messages="errors"
                  :rules="cpRules"
                  label="Code postal"
                  prepend-icon="mdi-city"
                  required
                ></v-text-field>
              </validation-provider>
            </v-col>
            <v-col cols="12" md="4">
              <validation-provider
                v-slot="{ errors }"
                name="phoneNumber"
                :rules="{
                  required: true,
                  digits: 5,
                  regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$',
                }"
              >
                <v-text-field
                  v-model="phoneNumber"
                  :counter="5"
                  :error-messages="errors"
                  label="N° téléphone"
                  prepend-icon="mdi-phone"
                  required
                  :rules="phoneNumberRules"
                ></v-text-field>
              </validation-provider>
            </v-col>
            <v-col cols="12" md="12">
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
            </v-col>
            <v-col md="12">
              <v-text-field
                block
                v-model="verify"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                :rules="confirmPasswordRules"
                name="input-10-1"
                label="Confirm Password"
                counter
                prepend-icon="mdi-key"
                @click:append="show1 = !show1"
                required
              ></v-text-field>
              <v-container class="text-center pt-6">
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
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { regex, digits } from "vee-validate/dist/rules";
import { ValidationProvider, extend } from "vee-validate";

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
}),
  extend("digits", {
    ...digits,
    message: "{_field_} needs to be {length} digits. ({_value_})",
  });

export default {
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    },
  },
  components: {
    ValidationProvider,
  },
  data: () => ({
    valid: true,
    firstname: "",
    lastname: "",
    email: "",
    birthday: "",
    adresse: "",
    cp: "",
    phoneNumber: "",
    password: "",
    verify: "",
    show1: false,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    adressRules: [
      (v) => !!v || "adresse non valide",
      (v) => v.length <= 20 || "adresse non valide",
    ],
    birthdayRules: [
      (v) => !!v || "adresse non valide",
      (v) => v.length <= 20 || "adresse non valide",
    ],
    cpRules: [
      (v) => !!v || "adresse non valide",
      (v) => v.length <= 20 || "adresse non valide",
    ],
    phoneNumberRules: [
      (v) => !!v || "adresse non valide",
      (v) => v.length <= 10 || "adresse non valide",
    ],
    passwordRules: [
      (v) => !!v || "adresse non valide",
      (v) => v.length <= 10 || "adresse non valide",
    ],
    confirmPasswordRules: [
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
  },
};
</script>

<style lang="stylus">
#login {
  margin-top: 8rem
}
#card {
  margin-left: 2rem;
  padding-left: 60px;
  margin-bottom: 9rem
}
.v-icon.v-icon {
  color: #FF7043
}
#text1 {
  font-family: 'Roboto', sans-serif;
  color: #435f71;
}
</style>
