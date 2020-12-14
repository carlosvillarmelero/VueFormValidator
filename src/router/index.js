import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/AddToMongo",
    name: "Mongo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddToMongo.vue")
  }];

  const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    //base: 'adm',
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    props: 'true',
    routes
  });
  
  export default router;
  