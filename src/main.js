import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from 'axios';
import VueAxios from 'vue-axios'
import VueGeolocation from "vue-browser-geolocation";

Vue.use(VueAxios, axios)

Vue.prototype.$axios = axios

Vue.config.productionTip = false;
Vue.use(VueGeolocation);

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps,  {
  load: {
    key: "AIzaSyDxTV3a6oL6vAaRookXxpiJhynuUpSccjY"
  },

});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
