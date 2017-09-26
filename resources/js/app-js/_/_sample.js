var ConstructorName = (function() {
	'use strict';

	function ConstructorName(args) {
		// enforces new
		if (!(this instanceof ConstructorName)) {
			return new ConstructorName(args);
		}
		// constructor body
	}

	ConstructorName.prototype.methodName = function(args) {
		// method body
	};

	return ConstructorName;
}());

var moduleName = (function() {
	'use strict';

	var moduleName = {
		init: {

		}
	};

	return moduleName;
}());

var name = (function() {
	'use strict';

	var instance;

	name = function(args) {
		if (instance) {
			return instance;
		}

		instance = this;

		// your code goes here
	};

	return name;
}());

class Classname {
	constructor(a, b) {
		// code
		var res = a + b;

		this.res = res;
	}
	// methods
}




var human = {
	species: "human",
	create: function (values){
		var instance = Object.create( this );
		//
			console.log(this);
		//
		Object.keys(values).forEach( function( key ) {
			// statements
		});
		return instance;
	},
	saySpecies: function () {
		console.log(this.species);
	},
	sayName: function () {
		console.log(this.species);
	}
};


var will = human.create( "Will" );


var will = Object.create(musician);
will.name = "Will";
will.instruments = "Drums";

