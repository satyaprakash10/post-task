import Vue from "vue";
import VueRouter from "vue-router";
import Posts from "../views/Posts.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import CreatePost from "../views/CreatePost.vue";
import Secret from "../views/Secret.vue";

import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "post",
    component: Posts
  },
  {
    path: "/secret",
    name: "secret",
    component: Secret,
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost
     
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  console.log("isauthenticated", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
