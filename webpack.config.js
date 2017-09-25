const path = require('path');


module.exports = function (env) {
	//define entry point
	entry: path.resolve( __dirname, '/assets/js/custom/announcements.js' ),

	//define output point
	output: {
		path: path.resolve( __dirname, '/assets/bundle' ),
		filename: 'announcement-bundle.js'
	}
}
