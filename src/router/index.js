import { createRouter, createWebHistory } from "vue-router";
import Flights from "../views/FlightsView.vue";

const routes = [
  {
    path: "/",
    name: "flights",
    component: Flights,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
