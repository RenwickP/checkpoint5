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
    path: "/bugs/:id",
    name: "bugs",
    component: Bug
  }
];

const router = new VueRouter({
  routes
});

export default router;
