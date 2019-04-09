<template>
    <div class="sidebar-wrapper">
        <router-link
            to="/"
            class="logo"
        >
            <Icon name="logo" />
        </router-link>
        <ul class="sidebar-content">
            <li
                v-for="(item, index) in data"
                :key="index"
                class="sidebar-content-item"
                :class="{'active': $route.name === item.pathName}"
            >
                <router-link :to="{name: item.pathName}">
                    {{ item.text }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    props: {
        data: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    data() {
        return {};
    },
};
</script>

<style lang="less">
.sidebar-wrapper {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 150px;
    box-shadow: 0 0 10px 0 var(--assist-color);
}
.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    box-shadow: 0 0 5px 0 var(--assist-color);
    color: var(--main-color);
    .icon {
        width: 50px;
    }
}
.sidebar-content {
    height: 100%;
    text-align: right;
    .sidebar-content-item {
        padding-right: 15px;
        height: 40px;
        line-height: 40px;
        &:hover,
        &.active {
            background-color: var(--hover-bg-color);
            background-clip: padding-box;
            a {
                color: var(--hover-text-color);
            }
        }
        &:not(:first-child) {
            border-top: 1px solid transparent;
        }
    }
    a {
        display: block;
        color: var(--text-color);
    }
}
</style>
