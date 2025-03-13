import Vue from "vue";
import VueRouter from "vue-router";
import SharkComponent from "../components/Shark.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/shark",
    name: "Shark",
    component: SharkComponent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
