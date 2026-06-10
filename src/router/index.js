import { createRouter, createWebHistory } from "vue-router";
import { useResponseStore } from "@/stores/responseStore";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/valentine/",
      redirect: "/valentine/question",
    },
    {
      path: "/valentine/question",
      component: () => import("@/Layouts/QuestionLayout.vue"),
    },
    {
      path: "/valentine/",
      component: () => import("@/Layouts/AppLayout.vue"),
      children: [
        {
          path: "/valentine/her",
          name: "her",
          component: () => import("@/views/HerView.vue"),
        },
        {
          path: "/valentine/bands",
          name: "bands",
          component: () => import("@/views/BandsView.vue"),
        },
        {
          path: "/valentine/foods",
          name: "foods",
          component: () => import("@/views/FoodsView.vue"),
        },
        {
          path: "/valentine/characters",
          name: "characters",
          component: () => import("@/views/CharactersView.vue"),
        },
        {
          path: "/valentine/his",
          name: "his",
          component: () => import("@/views/HisView.vue"),
        },
      ],
    },
  ],
});
beforeEnter: (to, from, next) => {
  const responseStore = useResponseStore();
  if (!responseStore.answered) {
    next("/valentine/question");
  } else {
    next();
  }
};
export default router;
