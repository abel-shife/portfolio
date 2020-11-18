import Vue from "vue";
import VueRouter from "vue-router";
import home from "../screens/home";
import myWorks from "../screens/myWorks";
import websites from "../screens/websites";
import RESTfulAPI from "../screens/RESTfulAPI";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/myWorks",
    name: "myWorks",
    component: myWorks,
  },
  {
    path: "/websites",
    name: "websites",
    component: websites,
  },
  {
    path: "/RESTfulAPI",
    name: "RESTfulAPI",
    component: RESTfulAPI,
  }
];

const router = new VueRouter({
  routes
});

export default router;
