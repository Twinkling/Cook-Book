<template>
    <div class="gradient">
        <ol>
            <li class="line-gradient">
                <span>线性渐变</span>
                <div class="linear line" />
                <div class="linear hue eight" />
                <div class="linear hue six" />
                <div class="linear rgb six" />
            </li>
            <li class="radial-gradient">
                <span>径向渐变</span>
                <div class="circle radial" />
                <div class="circle closest radial" />
                <div class="ellipse closest radial" />
                <div class="ellipse farthest radial" />
            </li>
            <li class="repeat-linear">
                <span>重复线性渐变</span>
                <div class="repeat linear" />
            </li>
            <li class="repeat-radial">
                <span>重复径向渐变</span>
                <div class="repeat radial" />
            </li>
            <li>
                <span>例子: 多重渐变</span>
                <div
                    class="double-linear"
                    data-content="双重线性渐变"
                />
            </li>
        </ol>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="less">
.gradient {
    li {
        list-style: decimal;
    }
}
.linear,
.circle,
.ellipse,
.repeat .linear,
.repeat .radial{
    margin-bottom: 5px;
}

.linear {
    width: 300px;
    height: 20px;
    border-radius: 2px;
}
.line {
    background: linear-gradient(to right, blue, hsl(20, 100%, 50%));
}
.hue.eight {
    background: linear-gradient(to right, hsl(0, 100%, 50%), hsl(45, 100%, 50%) 12.5%, hsl(90, 100%, 50%) 25%, hsl(135, 100%, 50%) 37.5%, hsl(180, 100%, 50%) 50%, hsl(225, 100%, 50%) 62.5%, hsl(270, 100%, 50%) 75%, hsl(315, 100%, 50%) 87.5%, hsl(360, 100%, 50%));
}
.hue.six {
    background: linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%) 17%, hsl(120, 100%, 50%) 33%, hsl(180, 100%, 50%) 50%, hsl(240, 100%, 50%) 67%, hsl(300, 100%, 50%) 83%, hsl(360, 100%, 50%));
}
.rgb.six {
    background: linear-gradient(90deg,red,#ff0,#0f0,#0ff,#00f,#f0f,red);
}

.circle {
    width: 100px;
    height: 100px;
    &.radial {
        background: radial-gradient(red, yellow, green);
    }
    &.closest {
        width: 200px;
        background: radial-gradient(circle closest-side, red, yellow, green);
    }
}
.ellipse {
    width: 200px;
    height: 100px;
    &.radial.closest {
        background: radial-gradient(ellipse closest-side, red, yellow, green);
    }
    &.radial.farthest {
        background: radial-gradient(ellipse farthest-corner, red, yellow, green);
    }
}

.repeat {
    width: 100px;
    height: 100px;
    &.linear {
        background: repeating-linear-gradient(45deg, yellow, yellow 5px, white 5px, white 10px);
    }
    &.radial {
        background: repeating-radial-gradient(yellow, yellow 5px, red 5px, red 10px);
    }
}

.double-linear {
    width: 260px;
    height: 260px;
    border: 2px solid #b3b3b3;
    background: linear-gradient(to bottom, transparent, black), linear-gradient(to right, white, transparent), #f00;
}
</style>
