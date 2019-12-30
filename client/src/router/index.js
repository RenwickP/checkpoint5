import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Bug from "../views/Bug.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },

  {
    path: "/bugs",
    name: "bugs",
    component: Bug
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
