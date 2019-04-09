import store from '@/store';
import RouterView from '@/views/router_view';

const sidebarContents = [];
const name = 'JS';

export default {
    path: '/js',
    name,
    beforeEnter(to, from, next) {
        const routerName = to.matched[0].name.toLowerCase(); // 只获取匹配到的第一级路由
        if (routerName === name.toLowerCase()) {
            store.commit('updateSidebar', sidebarContents);
        }
        next();
    },
    component: RouterView,
    children: [],
};
