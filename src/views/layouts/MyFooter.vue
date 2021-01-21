<template>
  <v-card id="footer" class="overflow-hidden">
    <v-footer color="primary lighten-1" padless app inset>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
          :gradient="gradient"
        >
          {{ new Date().getFullYear() }} — <strong>FreeCovid by epitech</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
    gradient: "to top, #1867c0, #5cbbf6",
  }),
};
</script>

<style lang="stylus"></style>
