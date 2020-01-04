const windowConfig = {
	entry: './src/index.js',
	output: {
		filename: './neocajax.min.js',
		libraryTarget: 'window'
	}
};

const umdConfig = {
	entry: './src/index.js',
	output: {
		filename: './main.js',
		libraryTarget: 'umd'
	}
};

module.exports = [umdConfig, windowConfig];
