<template>
    <svg
        :class="id"
        :viewBox="viewBox"
        v-bind="$attrs"
        class="icon"
        v-on="$listeners"
    >
        <use :xlink:href="`#${id}`" />
    </svg>
</template>

<script>
const req = require.context('@/assets/icons', false, /[a-z-_]+\.svg$/);
const icons = req.keys().reduce((result, filePath) => {
    const [, name] = filePath.match(/.*?([a-z-_]+)\.svg/);
    const { id, viewBox } = req(filePath).default;
    return {
        ...result,
        [name]: { id, viewBox },
    };
}, {});

export default {
    name: 'Icon',

    props: {
        name: {
            type: String,
            required: true,
        },
    },

    computed: {
        icon() {
            return icons[this.name];
        },

        id() {
            return this.icon ? this.icon.id : '';
        },

        viewBox() {
            return this.icon ? this.icon.viewBox : null;
        },
    },
};
</script>

<style>
.icon {
    display: inline-block;
    vertical-align: middle;
    width: 1em;
    fill: currentColor;
}
</style>
