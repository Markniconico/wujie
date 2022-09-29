import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import vue from "../views/vue.vue";
import react from "../views/react.vue";

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: "/home",
    name: 'home',
    component: () => import("@/views/home.vue"),
}, {
    path: "/vue",
    component: vue,
}, {
    path: "/react",
    component: react,
}];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});


export default router;