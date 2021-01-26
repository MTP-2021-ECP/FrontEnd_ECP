<template>
  <v-container>
    <v-container id="cardgroup">
      <v-row>
        <v-col>
          <v-card class="mx-auto" dark max-width="400" id="card1">
            <v-card-title>
              <v-icon large left>
                mdi-needle
              </v-icon>
              <span class="title font-weight-light">Vaccination</span>
            </v-card-title>

            <v-card-text class="headline font-weight-bold">
              "En raison d'une très forte demande et d'un stock limité de
              vaccins, les disponibilités dans les centres se font rares. De
              nouveaux créneaux de vaccination sont proposés régulièrement.
              N’hésitez pas à réessayer."
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Round&hairColor=Platinum&facialHairType=BeardLight&facialHairColor=Platinum&clotheType=BlazerSweater&eyeType=EyeRoll&eyebrowType=RaisedExcitedNatural&mouthType=ScreamOpen&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Dr Raoult</v-list-item-title>
                </v-list-item-content>
                <v-row align="center" justify="end">
                  <v-btn color="secondary" elevation="1" outlined rounded small
                    >PRENDRE Rendez-vous</v-btn
                  >
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" color="#26c6da" dark max-width="400">
            <v-card-title>
              <v-icon large left>
                mdi-bacteria-outline
              </v-icon>
              <span class="title font-weight-light"
                >Faites-vous dépister rapidement</span
              >
            </v-card-title>

            <v-card-text class="headline font-weight-bold">
              "Réservez en ligne un test PCR rapidement et proche de chez vous.
              Ce test est pris en charge à 100% par l’Assurance Maladie et ne
              requiert pas d'ordonnance. Les résultats sont généralement
              accessibles sous 48 heures".<br />"
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Dr House</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-icon class="mr-1">
                    mdi-heart
                  </v-icon>
                  <span class="subheading mr-2">256</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">
                    mdi-share-variant
                  </v-icon>
                  <span class="subheading">45</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" id="card1" dark max-width="400">
            <v-card-title>
              <v-icon large left>
                mdi-reddit
              </v-icon>
              <span class="title font-weight-light">Twitter</span>
            </v-card-title>

            <v-card-text class="headline font-weight-bold ">
              "Privilégiez la consultation vidéo/chat 💡 Ce mode de consultation
              vous permet de consulter de chez vous et est recommandé
              actuellement. Pensez-y pour obtenir des réponses sur la
              vaccination contre le COVID-19."
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Round&facialHairType=BeardLight&facialHairColor=Platinum&clotheType=Overall&clotheColor=Heather&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Tongue&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Dr Dolittle</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-icon class="mr-1">
                    mdi-heart
                  </v-icon>
                  <span class="subheading mr-2">256</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">
                    mdi-share-variant
                  </v-icon>
                  <span class="subheading">45</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container id="timeline">
      <v-timeline>
        <v-timeline-item large class="pt-12">
          <template v-slot:icon>
            <v-avatar>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQE_cXFll_sQDA/profile-displayphoto-shrink_200_200/0/1609610405664?e=1616630400&v=beta&t=TaGBjUiwL-ogvXqvmYYtD7IKANT2nvtL_A9yKYUV13k"
              />
            </v-avatar>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">
              <p>
                <span class="deep-orange--text font-weight-medium"
                  >Docteur</span
                >
                Manmohan Gargani
              </p>
            </v-card-title>
            <v-card-text class="font-italic"
              >“Le docteur Manmohan Gargani est médecin urgentiste. Chef de
              service des Urgences de l'Hôpital Paris-Saint Joseph, il a exercé
              en médecine d'urgence et médecine de catastrophe toute sa
              carrière. Il a de nombreuses expériences en humanitaire, en
              assistance de raid de sports extrêmes et en réorganisation
              d'hôpitaux.”</v-card-text
            >
          </v-card>
        </v-timeline-item>
        <v-timeline-item large class="pt-12">
          <template v-slot:icon>
            <v-avatar>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D35AQGPMjMsO66aSw/profile-framedphoto-shrink_200_200/0/1608037839691?e=1611262800&v=beta&t=_swwQy5RTMBA0hnVfxLSfdl25eZJaS0LFhIkgRDImUU"
              />
            </v-avatar>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">
              <p>
                <span class="deep-orange--text font-weight-medium"
                  >Docteur</span
                >
                Sharif Lewis-Lambert
              </p>
            </v-card-title>
            <v-card-text class="font-italic"
              >“Le Dr Sharif Lewis-Lambert est médecin urgentiste à l'Hôtel-Dieu
              de Paris, diplômé en médecine de catastrophe et expert auprès des
              tribunaux. Il est l'auteur de nombreux ouvrages et études
              scientifiques. Passionné de communication et de vulgarisation
              médicale, il est chroniqueur à la télévision.”</v-card-text
            >
          </v-card>
        </v-timeline-item>
        <v-timeline-item large class="pt-12">
          <template v-slot:icon>
            <v-avatar>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQFZ7Sb3XoKnrw/profile-displayphoto-shrink_100_100/0/1610358339089?e=1616630400&v=beta&t=YaSsSvH8_Qd9DdjZbbXz38Xmi_-xj0-zsCLbmWVsl-E"
              />
            </v-avatar>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">
              <p>
                <span class="deep-orange--text font-weight-medium"
                  >Docteur</span
                >
                Di Fazio Marco
              </p>
            </v-card-title>
            <v-card-text class="font-italic"
              >“Le Dr Di Fazio Marco est médecin nutritionniste, praticien
              attaché à l'hôpital de la Pitié-Salpétrière (Paris). Il exerce la
              majeure partie du temps au centre médical Saint-Michel accueillant
              des patients concernés par des problèmes de poids. Il est
              spécialisé dans la prévention de l'obésité et les troubles du
              comportement alimentaire en général.”</v-card-text
            >
          </v-card>
        </v-timeline-item>
        <v-timeline-item large class="pt-12">
          <template v-slot:icon>
            <v-avatar>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D35AQH_vA-6bkGfdg/profile-framedphoto-shrink_200_200/0/1604514022374?e=1611421200&v=beta&t=CaO5lvik4U268XBBusNYijOPPsZZBGO_bp2il28js4g"
              />
            </v-avatar>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">
              <p>
                <span class="deep-orange--text font-weight-medium"
                  >Docteur</span
                >
                Alexis Resses
              </p>
            </v-card-title>
            <v-card-text class="font-italic"
              >“Le Dr Alexis Resses est responsable du département
              interdisciplinaire d’organisation des parcours patients (DIOPP) à
              Gustave Roussy. Oncologue médical et titulaire d’un doctorat de
              sciences en éthique médicale, il est un spécialiste national et
              international des soins de support, il est vice-président de l’
              Association francophone pour les soins oncologiques de support
              (AFSOS), membre du comité directeur de la Multinational
              Association for Supportive Care in Cancer (MASCC) et du comité
              scientifique de l’ European Society of Medical Oncology
              (ESMO).”</v-card-text
            >
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    //
  }),
};
</script>

<style>
#card1 {
  background: rgb(255, 171, 145);
  background: linear-gradient(
    7deg,
    rgba(255, 171, 145, 1) 0%,
    rgba(255, 138, 101, 1) 50%,
    rgba(255, 112, 67, 1) 100%
  );
}
#timeline {
  padding-top: 6rem;
}
#cardgroup {
  padding-top: 5rem;
}
</style>
