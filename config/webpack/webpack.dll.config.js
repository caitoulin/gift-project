const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'redux', 'react-redux'],
    },
    output: {
        filename: '[name].dll.js', // name指的就是vendor
        library: '[name]_library',
        path: path.join(__dirname, '..', '..', '/app/view/dist/dll'),
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_library',
            path: path.join(
                __dirname,
                '..',
                '..',
                '/app/view/dist/dll/[name].manifest.json'
            ),
        }),
    ],
};
