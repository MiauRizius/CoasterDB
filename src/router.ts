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
    {
        path: '/app/stats',
        component: () => import('./views/Stats.vue')
    },
    {
        path: '/app/technical-information',
        component: () => import('./views/TechnicalInformation.vue')
    },
    {
        path: '/app/docs',
        component: () => import('./views/app/Documentation.vue')
    },
    {
        path: '/app/help',
        component: () => import('./views/app/Help.vue')
    },

    //Coaster pages
    {
        path: '/app/coasters',
        component: () => import('./views/app/coasters/Coasters.vue')
    },
    {
        path: '/app/coaster/:coasterId',
        component: () => import('./views/app/coasters/Coaster.vue')
    },

    //Park pages
    {
        path: '/app/parks',
        component: () => import('./views/app/parks/Parks.vue')
    },
    {
        path: '/app/park/:parkId',
        component: () => import('./views/app/parks/Park.vue')   
    },

    //Redirects

    //Configuration
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