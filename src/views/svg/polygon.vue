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
            <span>多 polygon</span>
            <svg
                width="200"
                height="174"
            >
                <polygon
                    fill="#1cf"
                    points="0,173.205 100,0 200,173.205"
                />
                <circle
                    cx="100"
                    cy="115.47"
                    r="57.735"
                    fill="#fcc737"
                />
                <polygon
                    fill="#fff"
                    points="50,86.602 100,173.205 150,86.602"
                />
            </svg>
            <span>单 polygon</span>
            <div id="svg">
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
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1600 900"
        >
            <polygon
                fill="#f5b680"
                points="957 450 539 900 1396 900"
            /><polygon
                fill="#ed5109"
                points="957 450 872.9 900 1396 900"
            /><polygon
                fill="#fabe91"
                points="-60 900 398 662 816 900"
            /><polygon
                fill="#ef5f0a"
                points="337 900 398 662 816 900"
            /><polygon
                fill="#f2c29d"
                points="1203 546 1552 900 876 900"
            /><polygon
                fill="#f16d0b"
                points="1203 546 1552 900 1162 900"
            /><polygon
                fill="#ebcaa9"
                points="641 695 886 900 367 900"
            /><polygon
                fill="#f4790d"
                points="587 900 641 695 886 900"
            /><polygon
                fill="#ebd4b9"
                points="1710 900 1401 632 1096 900"
            /><polygon
                fill="#ef8d0f"
                points="1710 900 1401 632 1365 900"
            /><polygon
                fill="#eadacb"
                points="1210 900 971 687 725 900"
            /><polygon
                fill="#fd9212"
                points="943 900 1210 900 971 687"
            />
        </svg>
        <svg
            width="300px"
            height="100px"
        >
            <rect
                x="0"
                y="0"
                width="300"
                height="100"
                stroke="black"
                stroke-width="1"
            />
            <rect
                x="0"
                y="0"
                width="20"
                height="20"
                fill="blue"
                stroke="black"
                stroke-width="1"
            >
                <animateMotion
                    path="M 250,80 H 50 Q 30,80 30,50 Q 30,20 50,20 H 250 Q 280,20,280,50 Q 280,80,250,80Z"
                    dur="3s"
                    repeatCount="indefinite"
                    rotate="auto"
                />
            </rect>
        </svg>

        <svg
            width="500px"
            height="500px"
        >
            <circle
                cx="200"
                cy="200"
                r="2"
            />
            <circle
                cx="400"
                cy="400"
                r="2"
            />
            <rect
                x="250"
                y="250"
                width="50"
                height="50"
                fill="#4bc0c8"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    begin="0s"
                    dur="10s"
                    from="0 200 200"
                    to="360 400 400"
                    repeatCount="indefinite"
                />
            </rect>
        </svg>

        <svg
            width="350"
            height="160"
        >
            <g
                class="layer"
                transform="translate(60,10)"
            >
                <circle
                    r="5"
                    cx="0"
                    cy="105"
                />
                <circle
                    r="5"
                    cx="90"
                    cy="90"
                />
                <circle
                    r="5"
                    cx="180"
                    cy="60"
                />
                <circle
                    r="5"
                    cx="270"
                    cy="0"
                />

                <g class="y axis">
                    <line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="120"
                    />
                    <text
                        x="-40"
                        y="105"
                        dy="5"
                    >
                        $10
                    </text>
                    <text
                        x="-40"
                        y="0"
                        dy="5"
                    >
                        $80
                    </text>
                </g>
                <g
                    class="x axis"
                    transform="translate(0, 120)"
                >
                    <line
                        x1="0"
                        y1="0"
                        x2="270"
                        y2="0"
                    />
                    <text
                        x="-30"
                        y="20"
                    >
                        January 2014
                    </text>
                    <text
                        x="240"
                        y="20"
                    >
                        April
                    </text>
                </g>
            </g>
        </svg>
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
        background-color: #ffc9a3;
        background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'><polygon fill='#f5b680' points='957 450 539 900 1396 900'/><polygon fill='#ed5109' points='957 450 872.9 900 1396 900'/><polygon fill='#fabe91' points='-60 900 398 662 816 900'/><polygon fill='#ef5f0a' points='337 900 398 662 816 900'/><polygon fill='#f2c29d' points='1203 546 1552 900 876 900'/><polygon fill='#f16d0b' points='1203 546 1552 900 1162 900'/><polygon fill='#ebcaa9' points='641 695 886 900 367 900'/><polygon fill='#f4790d' points='587 900 641 695 886 900'/><polygon fill='#ebd4b9' points='1710 900 1401 632 1096 900'/><polygon fill='#ef8d0f' points='1710 900 1401 632 1365 900'/><polygon fill='#eadacb' points='1210 900 971 687 725 900'/><polygon fill='#fd9212' points='943 900 1210 900 971 687'/></svg>");
        background-attachment: fixed;
        background-size: cover
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
    // vK!9h[P!3FuEzPgq
</style>
