const path = require('path');


module.exports = function (env) {

	const prefix = env.production ? 'min' : 'build';
	//define entry point
	entry: path.resolve( __dirname, '/assets/js/custom/announcements.js' ),

	//define output point
	output: {
		filename: `[name].${prefix}.js`,
		path: path.resolve(__dirname, 'public/assets/js'),
		publicPath: '/assets/js/'
	}
}
