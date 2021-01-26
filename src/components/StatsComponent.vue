<template>
  <v-container>
    <h1 id="text1" class="text--center">LIVE REPORTS</h1>
    <v-card id="card2" class="mx-auto" max-width="1000">
      <v-list>
        <v-list-item-group v-model="selectedItem">
          <v-list-item v-for="(liveStat, i) in liveStats" :key="i">
            <v-list-item-icon class="pr-12">
              <v-icon v-text="country">France</v-icon>
              <v-list-item-title v-text="liveStat.Province"></v-list-item-title>
            </v-list-item-icon>
            <v-list-item-content
              ><span class="red--text">Active</span>
              <v-list-item-title v-text="liveStat.Active"></v-list-item-title>
              <br />
            </v-list-item-content>
            <v-list-item-content
              ><span class="green--text">Confirmer</span>
              <v-list-item-title
                v-text="liveStat.Confirmed"
              ></v-list-item-title>
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
          :aspect-ratio="16 / 9"
          :width="width"
          src="https://www.doctolib.fr/webpack/eb06b2b2a48c6fb351ae8ed3eaa14fda.png"
        ></v-img>
      </v-container>
    </v-card>
    <v-container class="d-flex justify-start mb-6">
      <v-row class="mb-6" no-gutters>
        <v-col cols="6" md="4">
          <v-card class="pa-2">
            <v-img
              aspect-ratio="1.6"
              src="https://www.santepubliquefrance.fr/var/site/storage/images/3/6/7/0/2670763-235-fre-FR/infog_coronavirus_200121.jpg"
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="8">
          <v-card class="pa-2">
            <h2 class="pt-3 text--center " id="text1">
              Coronavirus (COVID-19) Chiffres clés, interviews d'experts,
              questions-réponses, outils de prévention...tout savoir sur le
              coronavirus (SARS-CoV-2), COVID-19, son évolution en France et
              dans le Monde, et l’action de Santé publique France
            </h2>
            <p class="text-center" style="padding: 3.75rem;">
              En semaine 01 (du 04 au 10 janvier 2021), les indicateurs
              épidémiologiques de suivi de l’épidémie de COVID-19 montraient une
              progression de la circulation du SARS-CoV-2 à un niveau élevé en
              France, suite aux rassemblements festifs de fin d’année. De plus,
              l’émergence de variants pourrait conduire à une accélération de
              l’épidémie et nécessite une vigilance accrue et un renforcement du
              respect des mesures d’isolement en cas de symptômes ou de cas de
              COVID-19 dans l’entourage. Au niveau national, le taux d’incidence
              était en augme
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-diveder></v-diveder>
    <v-container class="d-flex justify-start mb-6 pt-15">
      <v-row class="mb-6" no-gutters>
        <v-col cols="12" sm="6" md="8">
          <v-card class="pa-2">
            <h2 class="pt-3 text-center " id="text1">
              Coronavirus (COVID-19) Chiffres clés, interviews d'experts,
              questions-réponses, outils de prévention...tout savoir sur le
              coronavirus (SARS-CoV-2), COVID-19, son évolution en France et
              dans le Monde, et l’action de Santé publique France
            </h2>
            <p class="text-center" style="padding: 3.75rem;">
              En semaine 01 (du 04 au 10 janvier 2021), les indicateurs
              épidémiologiques de suivi de l’épidémie de COVID-19 montraient une
              progression de la circulation du SARS-CoV-2 à un niveau élevé en
              France, suite aux rassemblements festifs de fin d’année. De plus,
              l’émergence de variants pourrait conduire à une accélération de
              l’épidémie et nécessite une vigilance accrue et un renforcement du
              respect des mesures d’isolement en cas de symptômes ou de cas de
              COVID-19 dans l’entourage. Au niveau national, le taux d’incidence
              était en augme
            </p>
          </v-card>
        </v-col>
        <v-col cols="6" md="4">
          <v-card class="pa-2">
            <v-img
              aspect-ratio="1.6"
              src="https://www.vendeehabitat.fr/wp-content/mediafiles/2020/03/communication_covid-19_gestes-barrieres-2-750x468.jpg"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="d-flex justify-start mb-6 pt-15">
      <v-row class="mb-6" no-gutters>
        <v-col cols="6" md="4">
          <v-card class="pa-2">
            <v-img
              aspect-ratio="1.6"
              src="https://i.ytimg.com/vi/8Taoxq0xTns/maxresdefault.jpg"
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="8">
          <v-card class="pa-2">
            <h2 class="pt-3 text--center " id="text1">
              Coronavirus (COVID-19) Chiffres clés, interviews d'experts,
              questions-réponses, outils de prévention...tout savoir sur le
              coronavirus (SARS-CoV-2), COVID-19, son évolution en France et
              dans le Monde, et l’action de Santé publique France
            </h2>
            <p class="text-center" style="padding: 3.75rem;">
              En semaine 01 (du 04 au 10 janvier 2021), les indicateurs
              épidémiologiques de suivi de l’épidémie de COVID-19 montraient une
              progression de la circulation du SARS-CoV-2 à un niveau élevé en
              France, suite aux rassemblements festifs de fin d’année. De plus,
              l’émergence de variants pourrait conduire à une accélération de
              l’épidémie et nécessite une vigilance accrue et un renforcement du
              respect des mesures d’isolement en cas de symptômes ou de cas de
              COVID-19 dans l’entourage. Au niveau national, le taux d’incidence
              était en augme
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </v-container>
</template>

<script>
/* eslint-disable */
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

<style scoped>
#card2 {
  margin-left: 2rem;
  padding-left: 100px;
  padding-right: 100px;
  margin-top: 4rem;
  margin-bottom: 9rem;
}
#paragraphe {
  padding: 2, 65rem;
}
</style>
