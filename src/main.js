import Vue from 'vue';
import * as components from '@/components';
import * as SYUI from '@/sy-ui';
import EventBus from '@/services/event_bus';
import App from '@/App';
import router from '@/router';
import store from '@/store';

import '@/styles/index.less';

Vue.config.productionTip = false;

Object.values(components).forEach((component) => {
    Vue.component(component.name, component);
});

Object.values(SYUI).forEach((ui) => {
    Vue.component(ui.name, ui);
});

Vue.prototype.$eventbus = EventBus;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
