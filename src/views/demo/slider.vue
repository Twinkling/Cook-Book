<template>
    <div class="slider-demo">
        Slider Demo
        <sy-slider
            tip-pos="bottom"
            :width="100"
            :value.sync="value"
        />
        <span>{{ value }}</span>
        <div class="color-picker">
            <sy-slider
                :show-tip="false"
                :min="0"
                :max="360"
                :width="200"
                :value.sync="color"
            />
            <span
                :style="{'color': `hsl(${color}, 100%, 50%)`}"
            >
                当前颜色 hsl({{ color }}, 100%, 50%)
            </span>
            <sy-slider
                :min="0"
                :max="1"
                :step="0.01"
                :width="200"
                :value.sync="opacity"
            />
            <span
                :style="{'opacity': opacity}"
            >
                当前透明度 opacity: {{ opacity }}
            </span>
            <sy-slider
                :min="0"
                :max="100"
                :step="5"
                :width="200"
                :value.sync="number"
            />
            <span>
                当前数值 number: {{ number }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 0,
            color: 60,
            opacity: 0.5,
            number: 20,
        };
    },
    computed: {
    },
};
</script>

<style lang="less">
.slider-demo {
    .sy-slider {
        height: 3px;
    }
    .color-picker {
        .sy-slider {
            height: 10px;
            background: linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%) 17%, hsl(120, 100%, 50%) 33%, hsl(180, 100%, 50%) 50%, hsl(240, 100%, 50%) 67%, hsl(300, 100%, 50%) 83%, hsl(360, 100%, 50%));
            .sy-slider-thumb,
            &:hover .sy-slider-thumb {
                width: 16px;
                height: 16px;
                background-color: #fff;
            }
            .sy-slider-progress {
                background: transparent;
            }
        }
    }
}
</style>
