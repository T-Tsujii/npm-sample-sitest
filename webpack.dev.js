const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: `npm-sample-sitest.js`,
    library: {
      type: 'commonjs',
    },
  },
});
