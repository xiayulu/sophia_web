export default [
  {
    path: "/course/:courseid/",
    component: () => import("@/views/Course/Course.vue"),
    children: [
      {
        path: "/",
        component: () => import("@/views/Course/Introduction.vue"),
      },
      {
        path: "contents",
        component: () => import("@/views/Course/Contents.vue"),
      },
      {
        path: "discuss",
        component: () => import("@/views/Course/Discuss.vue"),
      },
      {
        path: "discuss/:discussid",
        component: () => import("@/views/Course/Dialog.vue"),
      },
      {
        path: "exercise",
        component: () => import("@/views/Course/Exercise.vue"),
      },
      {
        path:"exercise/id",
        component:()=>import("@/views/Course/Problem.vue")
      },
    ],
  },
];
