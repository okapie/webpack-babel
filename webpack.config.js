module.exports = {
	context: __dirname + '/src',
	entry: {
		'application': './test/application',
	},
	output: {
		path: __dirname + '/dist/js',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query:{
					presets: ['es2015']
				}
			}
		]
	}
};