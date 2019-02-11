import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sidebar: [],
    },
    mutations: {
        updateSidebar(state, sidebar) {
            if (Array.isArray(sidebar)) {
                state.sidebar = sidebar;
            }
        },
    },
    actions: {

    },
});
