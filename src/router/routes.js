const routes = [
  {
    path: "/",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [
      {
        path: "/home",
        component: () => import("src/pages/HomePage.vue"),
        name: "HomePage",
      },
      {
        path: "/profile",
        component: () => import("src/pages/ProfilePage.vue"),
        name: "ProfilePage",
      },
      {
        path: "/search",
        component: () => import("src/pages/SearchPage.vue"),
        name: "SearchPage",
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
