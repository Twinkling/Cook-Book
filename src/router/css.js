import store from '@/store';
import RouterView from '@/views/router_view';

const sidebarContents = [
    { pathName: 'ClipPath', text: 'clip-path' },
    { pathName: 'Element', text: 'element()' },
    { pathName: 'Gradient', text: 'gradient' },
];
const name = 'CSS';

export default {
    path: '/css',
    name,
    redirect: { name: 'ClipPath' },
    beforeEnter(to, from, next) {
        const routerName = to.matched[0].name.toLowerCase(); // 只获取匹配到的第一级路由
        if (routerName === name.toLowerCase()) {
            store.commit('updateSidebar', sidebarContents);
        }
        next();
    },
    component: RouterView,
    children: [{
        path: 'clip-path',
        name: 'ClipPath',
        component: () => import(/* webpackChunkName: "css" */ '@/views/css/clip_path'),
    }, {
        path: 'element()',
        name: 'Element',
        component: () => import(/* webpackChunkName: "css" */ '@/views/css/element()'),
    }, {
        path: 'gradient',
        name: 'Gradient',
        component: () => import(/* webpackChunkName: "css" */ '@/views/css/gradient'),
    }],
};
