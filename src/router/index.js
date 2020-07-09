import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/About.vue')
    },
    {
        path: '/2020',
        name: '2020',
        component: () => import('../views/2020.vue'),
    },
    {
        path: '/2019',
        name: '2019',
        component: () => import('../views/2019.vue'),
      },
    {
        path: '/2018',
        name: '2018',
        component: () => import('../views/2018.vue'),
    },
    {
        path: '/home-page',
        name: 'Home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/aboutpage',
        name: 'AboutPage',
        component: () => import('../views/AboutPage.vue'),
    },
    {
        path: '/aboutpage',
        name: 'AboutPage',
        component: () => import('../views/AboutPage.vue'),
    },
    {
        path: '/meetthecreator',
        name: 'MeetTheCreator',
        component: () => import('../views/MeetTheCreator.vue'),
    },
    
];

const router = new VueRouter({
    routes
});

export default router;
