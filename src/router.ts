import Artifacts from "./pages/Artifacts.vue";
import Inscription from "./pages/Inscription.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Inscription },
  { path: "/game", component: Artifacts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
