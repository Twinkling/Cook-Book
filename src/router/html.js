import store from '@/store';
import RouterView from '@/views/router_view';

const sidebarContents = [];
const name = 'HTML';

export default {
    path: '/html',
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
