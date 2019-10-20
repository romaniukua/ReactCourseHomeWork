const path = require('path');

module.exports = {
	entry: './dev/script.js',
	output: {
		path: path.resolve(__dirname, 'site'),
		filename: 'bundle.js'
	},
	mode: 'development',
	watch: true,
	devServer: {
		contentBase: path.resolve(__dirname, 'site'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', 
								  '@babel/preset-react',
								  {
									'plugins': ['@babel/plugin-proposal-class-properties']
								  }
								]
					}
				}
			}
		]
	}
}