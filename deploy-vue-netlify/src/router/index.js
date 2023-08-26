import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "../views/WelcomeView.vue";
import EnrolmentView from "../views/EnrolmentView.vue";
import RecordAttendance from "../views/RecordAttendance.vue";
import ReviewAttendance from "../views/ReviewAttendance.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/welcome",
      name: "welcome",
      component: WelcomeView,
    },
  ],
});

export default router;
