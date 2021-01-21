import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import CovidCases from '../views/CovidCases.vue'

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/contact", name: "about", component: Contact },
  { path: "/login", name: "login", component: Login },
  { path: "/register", name: "register", component: Register},
  { path: "/CovidCases", name: "CovidCases", component: CovidCases},

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
