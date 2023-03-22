const routes = [
  {
    path: "/",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [
      {
        path: "/home",
        component: () => import("src/pages/Trending.vue"),
        name: "Home",
      },
      {
        path: "/nearby",
        component: () => import("src/pages/Nearby.vue"),
        name: "Nearby",
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
        path: "/login",
        component: () => import("src/pages/Login.vue"),
        name: "Login",
      },
      {
        path: "/signup",
        component: () => import("src/pages/Signup.vue"),
        name: "Signup",
      },
      {
        path: "/mypops",
        component: () => import("src/pages/MyPops.vue"),
        name: "MyPops",
      },
      {
        path: "/mycomments",
        component: () => import("src/pages/MyComments.vue"),
        name: "MyComments",
      },
      {
        path: "/createpop",
        component: () => import("src/pages/CreatePop.vue"),
        name: "CreatePop",
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
