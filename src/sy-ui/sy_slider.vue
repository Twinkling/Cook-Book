<template>
    <div
        class="sy-ui sy-slider"
        :style="{'width': `${width}px`, '--slider-width': `${currPos}px`}"
        @click="update"
    >
        <div class="sy-slider-progress" />
        <div
            ref="sliderThumb"
            class="sy-slider-thumb"
            :aria-label="ariaLabel"
            :class="[showTip ? `sy-${tipPos} sy-tool-tip` : '']"
            @click.stop
            @mousedown="mouseDown"
        />
    </div>
</template>

<script>
const unitMap = {
    percent: '%',
    number: '',
};
const { max: Max, min: Min, round: Round } = Math;

export default {
    name: 'SySlider',
    props: {
        min: {
            type: Number,
            default: 50,
        },
        max: {
            type: Number,
            default: 100,
        },
        step: {
            type: Number,
            default: 1,
        },
        value: {
            type: Number,
            default: 0,
        },
        width: {
            type: Number,
            default: 100,
        },
        type: {
            type: String,
            default: 'percent', // percent, number
        },
        showTip: {
            type: Boolean,
            default: true,
        },
        tipPos: {
            type: String,
            default: 'top', // top, right, bottom, left
        },
    },
    data() {
        return {
            currPos: 0,
            prevPos: 0,
        };
    },
    computed: {
        ariaLabel() {
            return Round(this.currPos / this.width * 100) + unitMap[this.type];
        },
        sliderThumbDom() {
            return this.$refs.sliderThumb;
        },
    },
    watch: {
        currPos(val) {
            const ratio = val / this.width;
            const res = Round((ratio * (this.max - this.min) + this.min) / this.step);
            this.$emit('update:value', res * this.step);
        },
    },
    mounted() {
        this.setValue();
    },
    methods: {
        setValue() {
            const dis = this.value - this.min;
            const percent = dis / (this.max - this.min);
            this.currPos = Round(this.width * percent);
        },
        update(e) {
            const { offsetX } = e;
            this.currPos = offsetX;
        },
        mouseDown(e) {
            document.addEventListener('mousemove', this.mouseMove);
            document.addEventListener('mouseup', this.mouseUp);
            this.prevPos = e.clientX;
        },
        mouseMove(e) {
            const { clientX } = e;
            const realDis = clientX - this.prevPos;
            const res = Min(this.width, Max(this.currPos + realDis, 0));
            const dis = this.currPos - res;
            this.prevPos -= dis;
            this.currPos = res;
        },
        mouseUp() {
            document.removeEventListener('mousemove', this.mouseMove);
            document.removeEventListener('mouseup', this.mouseUp);
        },
    },
};
</script>

<style lang="less">
.sy-slider {
    position: relative;
    margin: 8px 0;
    width: 100%;
    height: 3px;
    background-color: var(--ui-bg-color);

    &:hover {
        .sy-slider-thumb {
            width: 16px;
            height: 16px;
        }
    }

    cursor: pointer;
    .sy-slider-progress {
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        width: var(--slider-width);
        background-color: var(--ui-main-color);
    }
    .sy-slider-thumb {
        position: absolute;
        top: 50%;
        left: var(--slider-width);
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        background-color: var(--ui-main-color);
        border-radius: 50%;
        transition: width .2s linear, height .2s linear;
    }
}
</style>
