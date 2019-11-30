module.exports = {
	mode: 'development',
	entry: __dirname + '/src/index.tsx',
	output: {
	  path: __dirname + '/dist',
	  filename: 'bundle.js'
	},
  
	devtool: 'source-map',
  
	resolve: {
	  extensions: ['.ts', '.tsx', '.js']
	},
  
	module: {
	  rules: [
		{
		  test: /\.tsx?$/,
		  use: [
			{loader: 'ts-loader'}
		  ]
		}
	  ]
	}
  };