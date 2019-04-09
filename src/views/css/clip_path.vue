<template>
    <div class="clip-path-wrap">
        <div class="original">
            original
        </div>
        <div class="clip-path-item">
            <div
                class="circle"
                :style="{'--circle': circle}"
            >
                clip-path circle
            </div>
            <select
                id="circle"
                name="circle"
                @change="changeCircle"
            >
                <option value="20%">
                    20%
                </option>
                <option value="50%">
                    50%
                </option>
                <option value="60%">
                    60%
                </option>
                <option value="70%">
                    70%
                </option>
            </select>
        </div>
        <div class="clip-path-item">
            <div class="inset">
                clip-path inset
            </div>
            <span>inset(lenth{1, 4},[round radius]?), lenth 对应 top, right, bottom, left 且可简写, radius 接受像素和百分比</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ClipPaths',
    data() {
        return {
            circle: '40%',
        };
    },
    methods: {
        changeCircle(e) {
            this.circle = e.target.value;
        },
    },
};
</script>

<style lang="less">
.clip-path-wrap {
    select {
        margin-left: 2em;
        height: 2em;
    }
    .clip-path-item {
        margin-top: 10px;
    }
    .original,
    .circle,
    .inset {
        width: 100px;
        height: 100px;
        text-align: center;
    }
    .original {
        background-color: #F98488;
    }
    .circle {
        --circle: 40%;

        background-color: #F98488;
        clip-path: circle(var(--circle));
    }
    .inset {
        background-color: #F9A193;
        clip-path: inset(20px 10px round 10%);
    }
}
</style>
