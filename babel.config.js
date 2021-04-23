module.exports = api => {
    const isTest = api.env('test');

    return {
        presets: [
            [
                '@babel/env',
                {
                    modules: isTest ? `commonjs` : false,
                    shippedProposals: true,
                    targets: {
                        node: '10.13.0',
                    },
                },
            ],
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic',
                },
            ],
        ],
        plugins: ['@babel/plugin-transform-runtime'],
    };
};