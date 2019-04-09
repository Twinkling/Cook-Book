<template>
    <div>
        <div class="no-element">
            当前浏览器不支持CSS element(), 请更换 FireFox 浏览器
        </div>
        <p>CSS函数<code>element()</code>将一个元素用作另一个元素的背景</p>
        <h2>原始元素</h2>
        <div id="ele">
            <p>Hello World! how're you?<br>I'm not doing that<br>great. Got a cold &#x1F637;</p>
        </div>
        <h2>将原元素用于背景之后</h2>
        <div id="eleImg" />
    </div>
</template>
<script>
export default {
    name: 'CSSElementFunction',
    data() {
        return {};
    },
    mounted() {
        const ele = document.getElementById('ele');
        const eleImg = document.getElementById('eleImg');
        const { width, height } = ele.getBoundingClientRect();
        const { width: mW } = eleImg.getBoundingClientRect();
        eleImg.style.height = `${(mW * height) / width}px`;
    },
};
</script>

<style>
#eleImg {
    width: 500px;
    background: -moz-element(#ele) no-repeat center / contain;
}
.no-element {
    color: red;
}
@supports(background: element(#ele)) or (background: -moz-element(#ele)) {
    .no-element {
        display: none;
    }
}
</style>
