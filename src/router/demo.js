import store from '@/store';
import RouterView from '@/views/router_view';

const sidebarContents = [
    { pathName: 'Slider', text: 'slider' },
    { pathName: 'ColorPicker', text: 'color-picker' },
];
const name = 'DEMO';

export default {
    path: '/demo',
    name,
    beforeEnter(to, from, next) {
        const routerName = to.matched[0].name.toLowerCase(); // 只获取匹配到的第一级路由
        if (routerName === name.toLowerCase()) {
            store.commit('updateSidebar', sidebarContents);
        }
        next();
    },
    component: RouterView,
    children: [{
        path: 'slider',
        name: 'Slider',
        component: () => import(/* webpackChunkName: "demo" */ '@/views/demo/slider'),
    }, {
        path: 'color-picker',
        name: 'ColorPicker',
        component: () => import(/* webpackChunkName: "demo" */ '@/views/demo/color_picker'),
    }],
};
