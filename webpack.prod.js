const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'npm-sample-sitest.min.js',
    library: {
      type: 'window',
    },
  },
});
