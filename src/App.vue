<template>
    <div id="app">
        <SideBar :data="sidebar" />
        <router-view
            class="main"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'App',
    data() {
        return {};
    },
    computed: {
        ...mapState(['sidebar']),
    },
};
</script>

<style lang="less">
html,
body,
#app {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    min-width: 1200px;
    font-size: 12px;
    background-color: #fff;
}
#app {
    display: flex;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.main {
    padding: 10px 15px;
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>
