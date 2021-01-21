<template>
  <v-card
    class="mx-auto"
    tile
  >
    <v-list dense>
      <v-subheader>LIVE REPORTS</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(liveStat, i) in liveStats"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="country">France</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Active
            <v-list-item-title v-text="liveStat.Active"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>Confirmed
            <v-list-item-title v-text="liveStat.Confirmed"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>Date
            <v-list-item-title v-text="liveStat.Date"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "Stats",

  data: () => ({
      liveStats: [],
  }),
  
created() {
  this.$axios
  .get('https://api.covid19api.com/live/country/france/status/confirmed')
  .then((response) => {
      this.liveStats = response.data.filter(function (el) {
          return el.Province <= 1;
      });
  })
},
};
</script>
