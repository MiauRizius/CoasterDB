import { createWebHistory, createRouter } from "vue-router";
import { type RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    //Normal pages
    {
        path: '/',
        component: () => import('./views/Home.vue')
    },

    //App
    {
        path: '/app',
        component: () => import('./views/app/App.vue')
    },

    //Redirects

    //Congifuration
    {
        path: '/:pathMatch(.*)*',
        component: () => import("./views/NotFound.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;