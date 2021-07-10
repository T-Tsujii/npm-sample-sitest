const path = require('path');

module.exports = {
  entry: './src/npm-sample-sitest.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
};
