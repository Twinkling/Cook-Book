import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Home from '@/views/home';
import NoFound from '@/views/404';
import Polygon from '@/views/svg/polygon';
import RouterView from '@/views/router_view';

Vue.use(Router);

const contents = {
    home: [{ pathName: 'CSS', text: 'CSS' }, { pathName: 'SVG', text: 'SVG' }, { pathName: 'JS', text: 'JS' }],
    svg: [{ pathName: 'Polygon', text: 'polygon' }],
    css: [{ pathName: 'ClipPath', text: 'clip-path' }],
    js: [],
};

const beforeEnter = (to, from, next) => {
    const name = to.matched[0].name.toLowerCase(); // 只获取匹配到的第一级路由
    const data = contents[name];
    store.commit('updateSidebar', data);
    next();
};

const svg = {
    path: '/svg',
    name: 'SVG',
    redirect: { name: 'Polygon' },
    beforeEnter,
    component: RouterView,
    children: [{
        path: 'polygon',
        name: 'Polygon',
        component: Polygon,
    }],
};

const css = {
    path: '/css',
    name: 'CSS',
    redirect: { name: 'ClipPath' },
    beforeEnter,
    component: RouterView,
    children: [{
        path: 'clip-path',
        name: 'ClipPath',
        component: () => import(/* webpackChunkName: "css" */ '@/views/css/clip_path'),
    }],
};

const js = {
    path: '/js',
    name: 'JS',
    beforeEnter,
    component: RouterView,
};

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            beforeEnter,
        },
        svg,
        css,
        js,
        {
            path: '*',
            name: '404',
            component: NoFound,
        },
    ],
});
