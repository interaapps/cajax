const windowConfig = {
	entry: './src/index.js',
	output: {
		filename: './cajax.min.js',
		libraryTarget: 'window'
	}
};

const upmConfig = {
	entry: './src/index.js',
	output: {
		filename: './main.js',
		libraryTarget: 'umd'
	}
};

module.exports = [upmConfig, windowConfig];
