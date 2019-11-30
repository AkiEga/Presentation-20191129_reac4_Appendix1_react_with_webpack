module.exports = {
	mode: 'production',
	entry: __dirname + '/src/index.tsx',
	output: {
	  path: __dirname + '/dist',
	  filename: 'bundle.js'
	},
  
	devtool: 'cheap-eval-source-map',
  
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