const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
		entry: './static_src/index.js',
		output: {
				path: path.resolve(__dirname, 'dist'),
				filename: 'js/app.js'
		},
		mode: 'development',
		devServer: {
				contentBase: './dist',
				port: 3000,
				hot: true
		},
		module: {
				rules: [
						{
								test: /\.(js|jsx)$/,
								exclude: '/node_modules/',
								loader: 'babel-loader',
								options: {
										presets: ["@babel/preset-env", "@babel/preset-react"],
										plugins: [
												[
														"@babel/plugin-proposal-class-properties",
														{
																"loose": true
														}
												]
										]
								}

						},
						{
								test: /\.css$/,
								use: [
										{
												loader: MiniCssExtractPlugin.loader,
												options: {
														hmr: process.env.NODE_ENV === 'development',
												},
										},
										'css-loader', ]
						},
						{
								test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
								use: [
										{
												loader: 'file-loader',
												options: {
														name: '[name].[ext]',
														outputPath: 'fonts/'
												}
										}
								]
						},
				]
		},
		plugins: [
				new MiniCssExtractPlugin({
						filename: 'css/style.css',
				}),
				new HtmlWebpackPlugin({
						filename: 'index.html',
						template: 'static_src/index.html'
				})
		]
}