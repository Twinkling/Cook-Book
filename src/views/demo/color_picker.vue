<template>
    <div class="color-picker-demo">
        Color Picker Demo
        <sy-color-picker
            :color="color"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            color: 0,
        };
    },
};
</script>

<style>

</style>
