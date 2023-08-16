import { createRouter, createWebHistory } from "vue-router";
import HomeComponents from "./pages/HomeComponents.vue";

import indexUsers from "./pages/User/UserIndex.vue";
import ShowUser from "./pages/User/ShowUser.vue";
import TempleUser from "./pages/User/TempleUser.vue";

import indexpost from "./pages/Posts/PostIndex.vue";
import Showpost from "./pages/Posts/ShowPost.vue";
import Templepost from "./pages/Posts/TemplePost.vue";
import Createpost from "./pages/Posts/CreatePost.vue";
import editpost from "./pages/Posts/EditPost.vue";

const routes = [
  { path: "/", component: HomeComponents },
  {
    path: "/users",
    name: "temple",
    component: TempleUser,
    children: [
      { path: "", name: "index", component: indexUsers },
      { path: ":id", name: "userid", component: ShowUser },
    ],
  },
  {
    path: "/posts",
    name: "templepost",
    component: Templepost,
    children: [
      { path: "", name: "posts", component: indexpost },
      { path: ":id", name: "postid", component: Showpost },
      { path: "create", name: "createpost", component: Createpost },
      { path: "edit/:id", name: "editpost", component: editpost },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
