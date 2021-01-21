<template>
<v-container>
  <v-card id="card2">
    <v-list >
      <v-subheader>LIVE REPORTS</v-subheader>
      <v-list-item-group v-model="selectedItem">
        <v-list-item v-for="(liveStat, i) in liveStats" :key="i">
          <v-list-item-icon>
            <v-icon v-text="country">France</v-icon>
          </v-list-item-icon>
          <v-list-item-content
            >Active
            <v-list-item-title v-text="liveStat.Active"></v-list-item-title>
            <v-divider></v-divider>
            <br />
          </v-list-item-content>
          <v-list-item-content
            >Confirmed
            <v-list-item-title v-text="liveStat.Confirmed"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-content
            >Date
            <v-list-item-title v-text="liveStat.Date"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-container>
          <v-img
      :aspect-ratio="16/9"
      :width="width"
      src="https://i.ibb.co/GkgFRrC/k3oa3t8w.png"
    ></v-img>
    </v-container>
  </v-card>
  <v-container>
    <v-card>
      <v-row>
        <v-col>
         <p>test</p>
         <br>
        </v-col>
                <v-col>
                     
         <p>test</p>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</v-container>  
</template>

<script>
export default {
  name: "Stats",

  data: () => ({
    liveStats: [],
  }),

  created() {
    this.$axios
      .get("https://api.covid19api.com/live/country/france/status/confirmed")
      .then((response) => {
        this.liveStats = response.data.filter(function(el) {
          return el.Province <= 1;
        });
      });
  },
};
</script>

<style lang="stylus">
#card2 {
  margin-left: 2rem
  padding-left: 100px
  padding-right: 100px
  margin-top: 4rem
  margin-bottom: 9rem
}
</style>
