const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const {DefinePlugin} = require('webpack');

const env = process.env.NODE_ENV || 'development';

module.exports = {
	entry: './dev/script.js',
	output: {
		path: path.resolve(__dirname, 'site'),
		filename: 'bandle.[chunkhash].js'
	},
	mode: env,
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
				}
			},
			{
				test: /\.scss$/i,
       			use: [
					MiniCssExtractPlugin.loader, 
					{
						loader:'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[local]--[hash:base64:5]',
							}
						}
					},
					'sass-loader',
				],
			},
			{
				test: /\.svg$/,
				use: [
					'babel-loader',
					'svg-react-loader',
				]

			}
		]
	},


	plugins: [
		new Dotenv(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			inject: false,
			template: './dev/template/index.html',
			filename: 'index.html',
		}),
		// new DefinePlugin({

		// }),
		new WebpackMd5Hash(),
		// new CopyWebpackPlugin([
		// 	{
		// 		from: path.resolve('./dev/static'),
		// 		to: path.resolve('./site'),
		// 	}
		// ]),
		new MiniCssExtractPlugin({
			filename: 'style.[chunkhash].css'
		}),
	]
}