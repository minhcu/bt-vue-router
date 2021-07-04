import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Blog from "../views/Blog.vue";
import Login from "../views/Login.vue";
import BlogView from "../views/BlogView.vue";
import Dashboard from "../views/Dashboard.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/blogs",
    name: "Blog",
    component: Blog
  },
  {
    path:"/blogs/:id",
    component: BlogView,
  },
  {
    path: "/auth/login",
    name: "Login",
    component: Login,
    meta: {
      layout: 'unauth'
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      layout: 'secret'
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
