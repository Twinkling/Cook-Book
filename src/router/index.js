import Vue from 'vue';
import Router from 'vue-router';
import NoFound from '@/views/404';
import homeRouter from './home';
import jsRouter from './js';
import cssRouter from './css';
import htmlRouter from './html';
import svgRouter from './svg';
import demoRouter from './demo';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        homeRouter,
        jsRouter,
        cssRouter,
        htmlRouter,
        svgRouter,
        demoRouter,
        {
            path: '*',
            name: '404',
            component: NoFound,
        },
    ],
});
