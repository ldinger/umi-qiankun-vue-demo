export default {
    //   base: '/app1',
    //   publicPath: '/subapps/app1/',

    //   base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/child/app1/',
    // base: '/child/app1',
    // publicPath: '/app1/',
    outputPath: './dist',
    mountElementId: 'app1',
    plugins: [
        ['../../index.js'],
        // ['umi-plugin-model'],
        [
            'umi-plugin-react',
            {
                title: 'app1',
                antd: true,
                dva: {
                    immer: true,
                    hmr: true,
                },
                dynamicImport: true,
                routes: {
                    exclude: [/models\//, /services\//, /model\.(t|j)sx?$/, /service\.(t|j)sx?$/],
                },
            },
        ],
    ],
};
