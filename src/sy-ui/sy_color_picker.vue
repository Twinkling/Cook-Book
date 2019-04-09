<template>
    <div class="sy-color-picker">
        <div class="sy-color-container">
            <div class="sy-color-picker-ball" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'SyColorPicker',
    data() {
        return {
            hue: 0,
            saturation: 0,
            lightness: 0,
        };
    },
};
</script>

<style>

</style>
