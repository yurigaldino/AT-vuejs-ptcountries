import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/lista",
    name: "Lista",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Lista.vue")
  },
  {
    path: "/ptcountries",
    name: "PortugueseCountries",
    component: () => import("../components/PortugueseCountries.vue")
  },

  {
    path: "/ptcountries/:id",
    name: "DetailCountry",
    component: () => import("../components/DetailCountry.vue")
  },

  {
    path: "/ptcountries/:id",
    name: "EditCountry",
    component: () => import("../components/EditCountry.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
