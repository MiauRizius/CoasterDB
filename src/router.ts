import { createWebHistory, createRouter } from "vue-router";
import { type RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    //Normal pages
    {
        path: '/',
        component: () => import('./views/Home.vue')
    },
    {
        path: '/docs',
        component: () => import('./views/app/Documentation.vue')
    },
    {
        path: '/help',
        component: () => import('./views/app/Help.vue')
    },

    //App
    {
        path: '/app',
        component: () => import('./views/app/App.vue')
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