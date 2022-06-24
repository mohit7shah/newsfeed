import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/careers",
      name: "Careers",
      component: () => import("../views/Careers.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/Contact.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/additem",
      name: "addItem",
      component: () => import("../views/AddItem.vue"),
    },
    {
      path: "/edititem",
      name: "editItem",
      component: () => import("../views/EditItem.vue"),
    },
  ],
});

export default router;
