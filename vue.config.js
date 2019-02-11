const path = require('path');

const vueConfig = {
    publicPath: process.env.NODE_ENV === 'production' ? '/Cook-Book/' : '/',

    chainWebpack(config) {
        const svgRule = config.module.rule('svg');
        svgRule.uses.clear();
        svgRule
            .include
            .add(path.resolve('src/assets/icons'))
            .end()
            .use('svg')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]',
            });
    },
    devServer: {
        port: '8888',
        stats: 'minimal',
        disableHostCheck: true,
        noInfo: true,
    },
};

module.exports = vueConfig;
