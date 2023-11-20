import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("@/views/Product.vue"),
  },
  {
    path: "/catalogue",
    name: "Catalogue",
    component: () => import("@/views/Catalogue.vue"),
  },
  {
    path: "/factory_equipment",
    name: "Factory Equipment",
    component: () => import("@/views/FactoryEquipment.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
