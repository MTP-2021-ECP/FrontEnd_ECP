import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import CovidCases from "../views/CovidCases.vue";
import Map from "../views/Map.vue";
import Calendrier from "../views/Calendrier.vue";
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/contact", name: "about", component: Contact },
  { path: "/login", name: "login", component: Login,meta: { guestOnly: true }},
  { path: "/register", name: "register", component: Register },
  { path: "/CovidCases", name: "CovidCases", component: CovidCases },
  { path: "/map", name: "map", component: Map },
  { path: "/calendrier", name: "calendrier", component: Calendrier, meta: { guestOnly: true }},
  { path: "/dashboard", name: "dashboard", component: Dashboard, meta: { authOnly: true } }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

function isLoggedIn() {
  return window.$cookies.get("accessToken");
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn()) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (isLoggedIn()) {
      next({
        path: "/dashboard",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
