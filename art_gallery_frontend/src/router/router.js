import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("../pages/Home.vue"),
        },
        {
          path: "artworks",
          name: "artworks",
          component: () => import("../pages/Artworks.vue"),
        },
        {
          path: "/artworks/:id",
          name: "artworksDetails",
          component: () => import("../pages/ArtworksDetails.vue"),
          props: true,
        },
        {
          path: "artists",
          name: "artists",
          component: () => import("../pages/Artists.vue"),
        },
        {
          path: "artist/:id",
          name: "artistDetails",
          component: () => import("../pages/ArtistsDetails.vue"),
        },
        {
          path: "upload",
          name: "upload",
          component: () => import("../pages/Upload.vue"),
        },
        {
          path: "/profile",
          name: "profile",
          component: () => import("../pages/Profile.vue"),
        },
      ],

    },

    {
      path: "/signin",
      name: "signIn",
      component: () => import("../pages/SignIn.vue"),
    },
    {
      path: "/signUp",
      name: "signUp",
      component: () => import("../pages/SignUp.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("../pages/NotFound.vue"),
    },
  ],
});

export default router;

