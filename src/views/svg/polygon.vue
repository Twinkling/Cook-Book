<template>
    <div>
        <div class="mask">
            <svg
                width="100%"
                height="100%"
                viewBox="50 50 50 50"
            >
                <circle
                    cx="50"
                    cy="50"
                    r="50"
                    class="circle"
                />
            </svg>
            <svg
                width="174"
                height="200"
            >
                <polygon
                    fill="#1cf"
                    points="0,0 173.205,100 0,200"
                />
                <polygon
                    fill="#fff"
                    points="0,100 86.602,50 86.602,150"
                />
            </svg>
            <svg
                width="200"
                height="174"
            >
                <polygon
                    fill="#1cf"
                    points="0,173.205 100,0 200,173.205"
                />
                <polygon
                    fill="#fff"
                    points="50,86.602 100,173.205 150,86.602"
                />
            </svg>
            <div
                id="svg"
                style="display: none;"
            >
                <svg
                    width="200"
                    height="174"
                >
                    <polygon
                        fill="#1cf"
                        points="0,173.205 100,0 200,173.205 0,173.205 50,86.602 100,173.205 150,86.602 50,86.602"
                    />
                </svg>
            </div>
            <img
                ref="img"
                :src="svg"
                class="infinite-rotate"
                alt=""
            >
        </div>
    </div>
</template>
<script>
export default {
    name: 'Polygons',
    data() {
        return {
            prefix: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="174">'
                + '<foreignObject width="100%" height="100%">',
            svg: '',
            suffix: '</foreignObject></svg>',
        };
    },
    mounted() {
        this.svgToImg();
    },
    methods: {
        svgToImg() {
            const svg = document.getElementById('svg');
            this.svg = this.prefix + svg.innerHTML + this.suffix;
        },
        download() {
            const canvas = document.createElement('canvas');
            const { img } = this.$refs;
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            const a = document.createElement('a');
            a.href = canvas.toDataURL('image/png');
            a.download = 'img';
            a.click();
        },
    },
};
</script>

<style lang="less">
    .mask {
        width: 100px;
        height: 100px;
        background-color: #1af;
    }
    .circle {
        fill: #5cf;
    }
    .infinite-rotate {
        transform-origin: 50% 50%;
        // animation: infiniteRotate 2s linear infinite;
    }
    @keyframes infiniteRotate {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
