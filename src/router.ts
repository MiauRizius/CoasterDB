import { createWebHistory, createRouter } from "vue-router";
import { type RouteRecordRaw } from "vue-router";

import App from "./App.vue";
import HomeVue from "./views/Home.vue";
import NotFoundVue from "./views/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
    //Normal pages
    {
        path: '/',
        component: HomeVue
    },

    //Redirects

    //Congifuration
    {
        path: '/:pathMatch(.*)*',
        component: NotFoundVue
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;