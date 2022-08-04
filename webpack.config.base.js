'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
	target: 'web',
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		alias: {
			'@': path.resolve(__dirname, 'src/js/'),
			'@ui': path.resolve(__dirname, 'src/js/components/ui/'),
			'lodash': path.resolve(__dirname, 'src/js/modules/minidash'),
			'@audio': path.resolve(__dirname, 'src/audio'),
		},
		symlinks: false,
	},
	output: {
		path: path.resolve(__dirname, 'dist/assets/'),
		publicPath: 'assets/',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					cacheDirectory: true,
				},
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					{
						loader: 'postcss-loader',
					},
				],
			},
			{
				test: /\.(png|jpg|gif|svg|ttf|eot|woff(2)?|mp4|ogg|webm|aac|opus)$/,
				loader: 'file-loader',
				options: {
					esModule: false,
				},
			},
		],
	},
	plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
};
