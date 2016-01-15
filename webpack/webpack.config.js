var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './index.js',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    library: 'VelocityReact',
    path: __dirname + '/build',
    filename: 'velocity-react.js'
  },
  externals: [
    {
      'react': 'var React',
      'react-dom': 'var ReactDOM',
      'react-addons-transition-group': 'var React.addons.TransitionGroup',
      './lib/velocity-animate-shim': 'var $.Velocity'
    }
  ],
  module: {
    loaders: [
    ]
  },
  plugins: [
  ], 
};
