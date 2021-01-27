import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
import VueGeolocation from "vue-browser-geolocation";
import VueSocialauth from 'vue-social-auth'

Vue.use(VueAxios, axios);

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
Vue.use(VueGeolocation);

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDxTV3a6oL6vAaRookXxpiJhynuUpSccjY",
  },
});
Vue.use(VueSocialauth, {
  providers: {
    google: {
      clientId:
        "766753341061-g0u5d45aj8k41uauv940kgg158uvhc92.apps.googleusercontent.com",
      redirectUri: "http://localhost:8080/login/google/callback", // Your client app URL
    },
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
