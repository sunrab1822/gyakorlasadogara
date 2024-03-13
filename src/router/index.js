import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Whiskeys from "../views/Whiskeys.vue";
import WhiskeyDetail from "../views/WhiskeyDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/whiskeys",
      name: "mobilok",
      component: Whiskeys,
    },
    {
      path: "/whiskey/:id",
      name: "whiskeyDetail",
      component: WhiskeyDetail,
    },
  ],
});

export default router;
