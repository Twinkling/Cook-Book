import store from '@/store';
import Polygon from '@/views/svg/polygon';
import RouterView from '@/views/router_view';

const sidebarContents = [
    { pathName: 'Polygon', text: 'polygon' },
];
const name = 'SVG';

export default {
    path: '/svg',
    name,
    redirect: { name: 'Polygon' },
    beforeEnter(to, from, next) {
        const routerName = to.matched[0].name.toLowerCase(); // 只获取匹配到的第一级路由
        if (routerName === name.toLowerCase()) {
            store.commit('updateSidebar', sidebarContents);
        }
        next();
    },
    component: RouterView,
    children: [{
        path: 'polygon',
        name: 'Polygon',
        component: Polygon,
    }],
};
