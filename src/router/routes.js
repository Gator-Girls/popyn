const routes = [
  {
    path: "/",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [
      {
        path: "/home",
        component: () => import("src/pages/Home.vue"),
        name: "Home",
      },
      {
        path: "/profile",
        component: () => import("src/pages/Profile.vue"),
        name: "Profile",
      },
      {
        path: "/search",
        component: () => import("src/pages/SearchPage.vue"),
        name: "Search",
      },
      {
        path: "/reviews",
        component: () => import("src/pages/SelectedLocReviews.vue"),
        name: "Reviews",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
