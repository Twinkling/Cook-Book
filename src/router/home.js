import store from '@/store';
import Home from '@/views/home';

const sidebarContents = [
    { pathName: 'CSS', text: 'CSS' },
    { pathName: 'SVG', text: 'SVG' },
    { pathName: 'JS', text: 'JS' },
    { pathName: 'DEMO', text: 'demo' },
];
const name = 'HOME';

export default {
    path: '/',
    name,
    beforeEnter(to, from, next) {
        const routerName = to.matched[0].name.toLowerCase(); // 只获取匹配到的第一级路由
        if (routerName === name.toLowerCase()) {
            store.commit('updateSidebar', sidebarContents);
        }
        next();
    },
    component: Home,
};
