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
    --main-color: #1cf;
    --second-color: #fff;
    --assist-color: #d6d6d6;
    --bg-color: var(--second-color);
    --border-color: var(--second-color);
    --text-color: var(--main-color);
    --hover-bg-color: var(--main-color);
    --hover-text-color: var(--second-color);
    --hover-border-color: var(--second-color);

    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    min-width: 1000px;
    font-size: 16px;
    background-color: var(--bg-color);
}
#app {
    display: flex;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.main {
    padding: 10px 15px;
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>
