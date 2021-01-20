<template>
  <v-container>
    <v-row id="row" >
    <v-img
      max-height="250"
      max-width="420"
      src="https://i.ibb.co/SmHbLNB/FREE-COVID-1.png"
    ></v-img>
    </v-row>
    <v-divider></v-divider>
    <v-row id="row">
      <v-col cols="2" class="mr-6">
        <v-img
          height="200px"
          src="https://www.doctolib.fr/webpack/a5e17c72213e53ab835eea70b6973a89.png"
        >
        </v-img>
        <div>
          <p class="text-center pt-6">Accédez aux disponibilités de <span class="deep-orange--text font-weight-medium">dizaines de milliers</span> de professionnels de santé.</p>
        </div>
      </v-col>
      <v-col cols="2" class="mr-6">
        <v-img
          height="200px"
          src="https://www.doctolib.fr/webpack/4aa6dbff428e055632e565f5025f5f73.png"
        >
        </v-img>
        <div>
          <p class="text-center pt-6">Prenez rendez vous en ligne, <span class="deep-orange--text font-weight-medium">24h/24 et 7j/7</span>, pour une consultation physique ou vidéo.</p>
        </div>
      </v-col>
      <v-col cols="2" class="mr-6">
        <v-img
          height="200px"
          src="https://www.doctolib.fr/webpack/7062ba839841984630220fe782b10dd2.png"
        >
        </v-img>
        <div>
          <p class="text-center pt-6">Recevez des <span class="deep-orange--text font-weight-medium">rappels automatiques</span> par SMS ou par email.</p>
        </div>
      </v-col>
      <v-col cols="2" class="mr-6">
        <v-img
          height="200px"
          src="https://www.doctolib.fr/webpack/7a4d2de37b3f8cecee2aec582cc7273f.png"
        >
        </v-img>
        <div>
          <p class="text-center pt-6">Retrouvez <span class="deep-orange--text font-weight-medium">votre historique</span> de rendez-vous et <span class="deep-orange--text font-weight-medium">vos documents médicaux.</span></p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>

<style lang="stylus">
#row {
  padding-top: 4rem;
  justify-content: center;
}
</style>
