'use strict';
const process = require('process');
process.env.NODE_ENV = 'production';

const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Bundler = require('./build_plugins/Bundler');

module.exports = merge.strategy({
	'module.rules': 'prepend',
})(baseConfig, {
	mode: 'production',
	output: {
		filename: 'index.js',
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'main.css',
			chunkFilename: 'main.css',
		}),
		new Bundler(),
	],
	optimization: {
		minimizer: [
			new TerserPlugin({
				cache: true,
				parallel: true,
				sourceMap: false,
				extractComments: false,
				terserOptions: {
					ie8: false,
					mangle: true,
					safari10: false,
					output: {
						comments: false,
						beautify: false,
					},
				},
			}),
		],
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '',
						},
					},
				],
			},
		],
	},
});
