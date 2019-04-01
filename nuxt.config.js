let webpack = require('webpack');
const pkg = require('./package');

module.exports = {
    mode: 'universal',
    srcDir: 'client/',
    head: {
        meta: [
            {charset: 'utf-8'},
            // {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {name: 'keyword', content: '推介、推荐、足球、网球、赛马、冰球、篮球、大小球、亚盘、竞彩、单场、串关、彩票、足彩、博彩、滚球、单关、中奖、365、188、赚钱、大小分、胜负、胜平负'},
            {hid: 'description', name: 'description', content: '投注推荐 - 提供足球、网球、赛马、冰球、篮球等投注推荐，大小球，亚盘，竞彩，单场，串关等推荐'}
        ],
        script: [
            {src: 'https://hm.baidu.com/hm.js?55793606f61907382b8c16e2fb96fb69'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '~/static/favicon.ico'}
        ]
    },
    loading: {color: '#ca7c2e'},
    // loading: '~/components/lib/loading.vue',
    css: [
        '~/assets/style/base.less',
        '~/assets/style/theme-thind/index.css'
    ],
    plugins: [
        {src: '~/plugins/element-ui', ssr: true},
        {src: '~/plugins/echarts', ssr: true},
        {src: '~/plugins/uploader', ssr: true},
        {src: '~/plugins/axios', ssr: true},
        {src: '~/plugins/filters'},
        {src: '~/plugins/mixins'},
        {src: '~/plugins/components', ssr: true}
    ],
    modules: [
        '@nuxtjs/axios'
    ],
    axios: {
        proxy: true
    },
    proxy: {
        '/public': {
            target: 'http://127.0.0.1:8300'
        },
        '/api/ams': {
            // target: 'http://pregz.guoke.map.baidu.com'
            target: 'http://bjyz-ivince.epc.baidu.com:8081/',
            pathRewrite: {
                '^/api': ''
            }
        },
        '/api/fileserver': {
            target: 'http://nj02-map-rd-neiye12.nj02.baidu.com:8060/',
        },
        '/api': {
            target: 'http://pregz.guoke.map.baidu.com'
        },
        '/thindApi': {
            target: 'http://127.0.0.1:8532'
        }
    },
    build: {
        extractCSS: true,
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })
        ],
        extend(config, ctx) {
            if (ctx.isDev) { // && ctx.isClient
                config.devtool = 'inline-source-map';
            }
        }
    },
    router: {
        base: getRouterBase()
        // middleware: ['stats']
    }
};

function getRouterBase() {
    let env = process.env.NODE_ENV;
    if (env === 'development') {
        return '/';
    }
    else if (env === 'production') {
        return '/tips';
    }
}
