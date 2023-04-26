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
        path: "/backyardreviews",
        component: () => import("src/pages/Reviews/BackyardReviews.vue"),
        name: "BackyardReviews",
      },
      {
        path: "/dtfreviews",
        component: () => import("src/pages/Reviews/DownFatsReviews.vue"),
        name: "PageDTFReviews",
      },
      {
        path: "/fatdaddyreviews",
        component: () => import("src/pages/Reviews/FatDaddysReviews.vue"),
        name: "PageFatDReviews",
      },
      {
        path: "/barcadereviews",
        component: () => import("src/pages/Reviews/ArcadeReviews.vue"),
        name: "PageArcadeReviews",
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
        path: "/signupform",
        component: () => import("src/pages/SignupForm.vue"),
        name: "SignupForm",
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
      {
        path: "/backyardcomments",
        component: () => import("src/pages/Comments/BackyardComments.vue"),
        name: "BackyardComments",
      },
      {
        path: "/dtfcomments",
        component: () => import("src/pages/Comments/DownFatsComments.vue"),
        name: "PageDTFComments",
      },
      {
        path: "/mybackyardcomments",
        component: () => import("src/pages/MyBackyardComments.vue"),
        name: "MyBackyardComments",
      },
      {
        path: "/mapcontainer",
        component: () => import("src/pages/MapContainer.vue"),
        name: "MapContainer",
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
