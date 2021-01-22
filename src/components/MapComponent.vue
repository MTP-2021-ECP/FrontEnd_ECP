<template>
  <v-container>
    <v-container>
      <h1 id="text1">RENDEZ VOUS</h1>
    </v-container>
    <v-row justify="mt-12" style="min-height: 160px;">
      <v-col md="5">
        <v-card class="pa-2" outlined elevation="2" shaped>
          <GmapMap
            :center="myCoordinates"
            :zoom="zoom"
            style="width:700px; height:800px; margin: auto auto;"
            ref="mapRef"
            @dragend="handleDrag"
          ></GmapMap>
        </v-card>
      </v-col>
      <v-col class="shrink mr-12" md="6" id="card3">
        <v-container class="container text-center">
          <v-btn
            class="ma-2 mt-6"
            color="secondary"
            @click="findCloseBuyButtonPressed()"
            disable
          >
            <v-icon>mdi-phone</v-icon>
          </v-btn>
          <v-btn
            class="ma-2 mt-6 mr-8"
            color="secondary"
            @click="expand2 = !expand2"
          >
            afficher les centres medical sur montpellier
          </v-btn>
        </v-container>
        <v-card
          v-scroll.self="onScroll"
          class="overflow-y-auto"
          max-height="700"
          id="navbar"
        >
          <v-banner sticky dark class="text-center">
            Liste des centres medical

            <span class="font-weight-bold" v-text="scrollInvoked"></span>

            times
          </v-banner>

          <v-expand-x-transition>
            <v-card
              class="mx-auto mt-12"
              max-width="2000"
              id="navbar"
              elevation="2"
              shaped
              v-show="expand2"
              dark
            >
              <v-list-item three-line v-for="(place, i) in places" :key="i">
                <v-list-item-content>
                  <v-container>
                    <v-list-item-title>{{ place.name }}</v-list-item-title>
                    <v-list-item-subtitle>
                      {{ place.vicinity }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle class="text-right mb-12">
                      <v-btn class="deep-orange lighten-1"
                        >Prendre rendez vous</v-btn
                      >
                    </v-list-item-subtitle>
                    <v-divider class="pt-4"></v-divider>
                  </v-container>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-expand-x-transition>
        </v-card>
      </v-col>
    </v-row>
    <v-container class="pt-15">
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item color="purple lighten-2" fill-dot right>
          <v-card class="mx-auto">
            <v-card-title class="purple lighten-2" id="navbar">
              <v-icon dark size="42" class="mr-4">
                mdi-magnify
              </v-icon>
              <h2 class="display-1 white--text font-weight-light">
                Title 1
              </h2>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="10">
                  <v-img
                    src="https://www.doctolib.fr/webpack/3713f422bb9dbe5213c25b7435c6356b.png"
                    height="250px"
                    width="800px"
                  ></v-img>
                  <p class="text-center pt-5" id="text1">
                    Libérez du temps médical grâce à la prise de rendez-vous en
                    ligne et un logiciel moderne
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="amber lighten-1" fill-dot left small>
          <v-card>
            <v-card-title class="amber lighten-1 justify-end" id="navbar1">
              <h2 class="display-1 mr-4 white--text font-weight-light">
                Title 2
              </h2>
              <v-icon dark size="42">
                mdi-home-outline
              </v-icon>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="10">
                  <v-img
                    src="https://www.doctolib.fr/webpack/d3c702f77b131e3923c93351634acb23.png"
                    height="250px"
                    width="800px"
                  ></v-img>
                  Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                  scaevola imperdiet nec ut, sed euismod convenire principes at.
                  Est et nobis iisque percipit.
                </v-col>
                <v-col cols="12" md="10">
                  Lorem ipsum dolor sit amet, no nam oblique veritus.
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="cyan lighten-1" fill-dot right>
          <v-card>
            <v-card-title class="cyan lighten-1" id="navbar">
              <v-icon class="mr-4" dark size="42">
                mdi-email-outline
              </v-icon>
              <h2 class="display-1 white--text font-weight-light">
                Title 3
              </h2>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="10">
                  <v-img
                    src="https://www.doctolib.fr/webpack/cbd6d813afcb1456ee026d27c9335288.png"
                    height="200px"
                    width="800px"
                  ></v-img>
                  Lorem ipsum dolor sit amet, no nam oblique veritus no nam
                  oblique.
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="red lighten-1" fill-dot left small>
          <v-card>
            <v-card-title class="red lighten-1 justify-end" id="navbar1">
              <h2 class="display-1 mr-4 white--text font-weight-light">
                Title 4
              </h2>
              <v-icon dark size="42">
                mdi-account-multiple-outline
              </v-icon>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col class="hidden-sm-and-down" cols="12" md="10">
                  <v-img
                    src="https://www.doctolib.fr/webpack/eb06b2b2a48c6fb351ae8ed3eaa14fda.png"
                    height="250px"
                    width="800px"
                  ></v-img>
                </v-col>
                <v-col cols="12" md="10">
                  Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                  scaevola imperdiet nec ut, sed euismod convenire principes at.
                  Est et nobis iisque percipit, an vim zril disputando
                  voluptatibus.
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="green lighten-1" fill-dot right>
          <v-card>
            <v-card-title class="green lighten-1" id="navbar">
              <v-icon class="mr-4" dark size="42">
                mdi-phone-in-talk
              </v-icon>
              <h2 class="display-1 white--text font-weight-light">
                Title 5
              </h2>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="10">
                  <v-img
                    src="https://www.doctolib.fr/webpack/242884fdb7eb9359106cfc5d4ba33576.png"
                    height="200px"
                    width="800px"
                  ></v-img>
                  Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                  scaevola imperdiet nec ut, sed euismod convenire principes at.
                  Est et nobis iisque percipit, an vim zril disputando
                  voluptatibus, vix an salutandi sententiae.
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  name: "MapComponent",
  data: () => {
    return {
      items: "",
      expand2: false,
      radius: 10,
      places: [],
      map: null,
      myCoordinates: {
        lat: 0,
        lng: 0,
      },
      zoom: 7,
    };
  },
  created() {
    // does the user have a saved center? use it instead of the default
    if (localStorage.center) {
      this.myCoordinates = JSON.parse(localStorage.center);
    } else {
      // get user's coordinates from browser request
      this.$getLocation({})
        .then((coordinates) => {
          this.myCoordinates = coordinates;
        })
        .catch((error) => alert(error));
    }
    // does the user have a saved zoom? use it instead of the default
    if (localStorage.zoom) {
      this.zoom = parseInt(localStorage.zoom);
    }
  },
  mounted() {
    // add the map to a data object
    this.$refs.mapRef.$mapPromise.then((map) => (this.map = map));
  },
  methods: {
    handleDrag() {
      // get center and zoom level, store in localstorage
      let center = {
        lat: this.map.getCenter().lat(),
        lng: this.map.getCenter().lng(),
      };
      let zoom = this.map.getZoom();
      localStorage.center = JSON.stringify(center);
      localStorage.zoom = zoom;
    },
    findCloseBuyButtonPressed() {
      const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.62911949003441,3.85003257424938&type=hospital&radius=${this
        .radius * 1000}&key=AIzaSyDxTV3a6oL6vAaRookXxpiJhynuUpSccjY`;
      axios
        .get(URL)
        .then((response) => {
          this.places = response.data.results;
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
  computed: {
    mapCoordinates() {
      if (!this.map) {
        return {
          lat: 0,
          lng: 0,
        };
      }
      return {
        lat: this.map
          .getCenter()
          .lat()
          .toFixed(4),
        lng: this.map
          .getCenter()
          .lng()
          .toFixed(4),
      };
    },
  },
};
</script>

<style lang="stylus">
#newcol {
  padding-top: 150px
}
#card3 {
  padding-left: 10rem;
}
#navbar1 {
  background: rgb(255,112,67)
  background: linear-gradient(0deg, rgba(255,112,67,1) 0%, rgba(255,204,188,1) 100%)
}
</style>
