webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("bNAW");
__webpack_require__("7t+N");
__webpack_require__("Zgw8");
__webpack_require__("9yHG");
__webpack_require__("dDPC");
module.exports = __webpack_require__("Wesl");


/***/ }),

/***/ "7t+N":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "9yHG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_popper_js__ = __webpack_require__("Zgw8");
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.1.5
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var DEFAULT_OPTIONS = {
  container: false,
  delay: 0,
  html: false,
  placement: 'top',
  title: '',
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  trigger: 'hover focus',
  offset: 0
};

var Tooltip = function () {
  /**
   * Create a new Tooltip.js instance
   * @class Tooltip
   * @param {HTMLElement} reference - The DOM node used as reference of the tooltip (it can be a jQuery element).
   * @param {Object} options
   * @param {String} options.placement=bottom
   *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -end),
   *      left(-start, -end)`
   * @param {HTMLElement|String|false} options.container=false - Append the tooltip to a specific element.
   * @param {Number|Object} options.delay=0
   *      Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type.
   *      If a number is supplied, delay is applied to both hide/show.
   *      Object structure is: `{ show: 500, hide: 100 }`
   * @param {Boolean} options.html=false - Insert HTML into the tooltip. If false, the content will inserted with `innerText`.
   * @param {String|PlacementFunction} options.placement='top' - One of the allowed placements, or a function returning one of them.
   * @param {String} [options.template='<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>']
   *      Base HTML to used when creating the tooltip.
   *      The tooltip's `title` will be injected into the `.tooltip-inner` or `.tooltip__inner`.
   *      `.tooltip-arrow` or `.tooltip__arrow` will become the tooltip's arrow.
   *      The outermost wrapper element should have the `.tooltip` class.
   * @param {String|HTMLElement|TitleFunction} options.title='' - Default title value if `title` attribute isn't present.
   * @param {String} [options.trigger='hover focus']
   *      How tooltip is triggered - click, hover, focus, manual.
   *      You may pass multiple triggers; separate them with a space. `manual` cannot be combined with any other trigger.
   * @param {HTMLElement} options.boundariesElement
   *      The element used as boundaries for the tooltip. For more information refer to Popper.js'
   *      [boundariesElement docs](https://popper.js.org/popper-documentation.html)
   * @param {Number|String} options.offset=0 - Offset of the tooltip relative to its reference. For more information refer to Popper.js'
   *      [offset docs](https://popper.js.org/popper-documentation.html)
   * @param {Object} options.popperOptions={} - Popper options, will be passed directly to popper instance. For more information refer to Popper.js'
   *      [options docs](https://popper.js.org/popper-documentation.html)
   * @return {Object} instance - The generated tooltip instance
   */
  function Tooltip(reference, options) {
    classCallCheck(this, Tooltip);

    _initialiseProps.call(this);

    // apply user options over default ones
    options = _extends({}, DEFAULT_OPTIONS, options);

    reference.jquery && (reference = reference[0]);

    // cache reference and options
    this.reference = reference;
    this.options = options;

    // get events list
    var events = typeof options.trigger === 'string' ? options.trigger.split(' ').filter(function (trigger) {
      return ['click', 'hover', 'focus'].indexOf(trigger) !== -1;
    }) : [];

    // set initial state
    this._isOpen = false;

    // set event listeners
    this._setEventListeners(reference, events, options);
  }

  //
  // Public methods
  //

  /**
   * Reveals an element's tooltip. This is considered a "manual" triggering of the tooltip.
   * Tooltips with zero-length titles are never displayed.
   * @method Tooltip#show
   * @memberof Tooltip
   */


  /**
   * Hides an element’s tooltip. This is considered a “manual” triggering of the tooltip.
   * @method Tooltip#hide
   * @memberof Tooltip
   */


  /**
   * Hides and destroys an element’s tooltip.
   * @method Tooltip#dispose
   * @memberof Tooltip
   */


  /**
   * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
   * @method Tooltip#toggle
   * @memberof Tooltip
   */


  //
  // Defaults
  //


  //
  // Private methods
  //

  createClass(Tooltip, [{
    key: '_create',


    /**
     * Creates a new tooltip node
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} reference
     * @param {String} template
     * @param {String|HTMLElement|TitleFunction} title
     * @param {Boolean} allowHtml
     * @return {HTMLelement} tooltipNode
     */
    value: function _create(reference, template, title, allowHtml) {
      // create tooltip element
      var tooltipGenerator = window.document.createElement('div');
      tooltipGenerator.innerHTML = template.trim();
      var tooltipNode = tooltipGenerator.childNodes[0];

      // add unique ID to our tooltip (needed for accessibility reasons)
      tooltipNode.id = 'tooltip_' + Math.random().toString(36).substr(2, 10);

      // set initial `aria-hidden` state to `false` (it's visible!)
      tooltipNode.setAttribute('aria-hidden', 'false');

      // add title to tooltip
      var titleNode = tooltipGenerator.querySelector(this.innerSelector);
      if (title.nodeType === 1) {
        // if title is a node, append it only if allowHtml is true
        allowHtml && titleNode.appendChild(title);
      } else if (isFunction(title)) {
        // if title is a function, call it and set innerText or innerHtml depending by `allowHtml` value
        var titleText = title.call(reference);
        allowHtml ? titleNode.innerHTML = titleText : titleNode.innerText = titleText;
      } else {
        // if it's just a simple text, set innerText or innerHtml depending by `allowHtml` value
        allowHtml ? titleNode.innerHTML = title : titleNode.innerText = title;
      }

      // return the generated tooltip node
      return tooltipNode;
    }
  }, {
    key: '_show',
    value: function _show(reference, options) {
      // don't show if it's already visible
      if (this._isOpen) {
        return this;
      }
      this._isOpen = true;

      // if the tooltipNode already exists, just show it
      if (this._tooltipNode) {
        this._tooltipNode.style.display = '';
        this._tooltipNode.setAttribute('aria-hidden', 'false');
        this.popperInstance.update();
        return this;
      }

      // get title
      var title = reference.getAttribute('title') || options.title;

      // don't show tooltip if no title is defined
      if (!title) {
        return this;
      }

      // create tooltip node
      var tooltipNode = this._create(reference, options.template, title, options.html);

      // Add `aria-describedby` to our reference element for accessibility reasons
      reference.setAttribute('aria-describedby', tooltipNode.id);

      // append tooltip to container
      var container = this._findContainer(options.container, reference);

      this._append(tooltipNode, container);

      var popperOptions = _extends({}, options.popperOptions, {
        placement: options.placement
      });

      popperOptions.modifiers = _extends({}, popperOptions.modifiers, {
        arrow: {
          element: this.arrowSelector
        }
      });

      if (options.boundariesElement) {
        popperOptions.modifiers.preventOverflow = {
          boundariesElement: options.boundariesElement
        };
      }

      this.popperInstance = new __WEBPACK_IMPORTED_MODULE_0_popper_js__["default"](reference, tooltipNode, popperOptions);

      this._tooltipNode = tooltipNode;

      return this;
    }
  }, {
    key: '_hide',
    value: function _hide() /*reference, options*/{
      // don't hide if it's already hidden
      if (!this._isOpen) {
        return this;
      }

      this._isOpen = false;

      // hide tooltipNode
      this._tooltipNode.style.display = 'none';
      this._tooltipNode.setAttribute('aria-hidden', 'true');

      return this;
    }
  }, {
    key: '_dispose',
    value: function _dispose() {
      var _this = this;

      if (this._tooltipNode) {
        this._hide();

        // destroy instance
        this.popperInstance.destroy();

        // remove event listeners
        this._events.forEach(function (_ref) {
          var func = _ref.func,
              event = _ref.event;

          _this.reference.removeEventListener(event, func);
        });
        this._events = [];

        // destroy tooltipNode
        this._tooltipNode.parentNode.removeChild(this._tooltipNode);
        this._tooltipNode = null;
      }
      return this;
    }
  }, {
    key: '_findContainer',
    value: function _findContainer(container, reference) {
      // if container is a query, get the relative element
      if (typeof container === 'string') {
        container = window.document.querySelector(container);
      } else if (container === false) {
        // if container is `false`, set it to reference parent
        container = reference.parentNode;
      }
      return container;
    }

    /**
     * Append tooltip to container
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} tooltip
     * @param {HTMLElement|String|false} container
     */

  }, {
    key: '_append',
    value: function _append(tooltipNode, container) {
      container.appendChild(tooltipNode);
    }
  }, {
    key: '_setEventListeners',
    value: function _setEventListeners(reference, events, options) {
      var _this2 = this;

      var directEvents = [];
      var oppositeEvents = [];

      events.forEach(function (event) {
        switch (event) {
          case 'hover':
            directEvents.push('mouseenter');
            oppositeEvents.push('mouseleave');
            break;
          case 'focus':
            directEvents.push('focus');
            oppositeEvents.push('blur');
            break;
          case 'click':
            directEvents.push('click');
            oppositeEvents.push('click');
            break;
        }
      });

      // schedule show tooltip
      directEvents.forEach(function (event) {
        var func = function func(evt) {
          if (_this2._isOpen === true) {
            return;
          }
          evt.usedByTooltip = true;
          _this2._scheduleShow(reference, options.delay, options, evt);
        };
        _this2._events.push({ event: event, func: func });
        reference.addEventListener(event, func);
      });

      // schedule hide tooltip
      oppositeEvents.forEach(function (event) {
        var func = function func(evt) {
          if (evt.usedByTooltip === true) {
            return;
          }
          _this2._scheduleHide(reference, options.delay, options, evt);
        };
        _this2._events.push({ event: event, func: func });
        reference.addEventListener(event, func);
      });
    }
  }, {
    key: '_scheduleShow',
    value: function _scheduleShow(reference, delay, options /*, evt */) {
      var _this3 = this;

      // defaults to 0
      var computedDelay = delay && delay.show || delay || 0;
      window.setTimeout(function () {
        return _this3._show(reference, options);
      }, computedDelay);
    }
  }, {
    key: '_scheduleHide',
    value: function _scheduleHide(reference, delay, options, evt) {
      var _this4 = this;

      // defaults to 0
      var computedDelay = delay && delay.hide || delay || 0;
      window.setTimeout(function () {
        if (_this4._isOpen === false) {
          return;
        }
        if (!document.body.contains(_this4._tooltipNode)) {
          return;
        }

        // if we are hiding because of a mouseleave, we must check that the new
        // reference isn't the tooltip, because in this case we don't want to hide it
        if (evt.type === 'mouseleave') {
          var isSet = _this4._setTooltipNodeEvent(evt, reference, delay, options);

          // if we set the new event, don't hide the tooltip yet
          // the new event will take care to hide it if necessary
          if (isSet) {
            return;
          }
        }

        _this4._hide(reference, options);
      }, computedDelay);
    }
  }]);
  return Tooltip;
}();

/**
 * Placement function, its context is the Tooltip instance.
 * @memberof Tooltip
 * @callback PlacementFunction
 * @param {HTMLElement} tooltip - tooltip DOM node.
 * @param {HTMLElement} reference - reference DOM node.
 * @return {String} placement - One of the allowed placement options.
 */

/**
 * Title function, its context is the Tooltip instance.
 * @memberof Tooltip
 * @callback TitleFunction
 * @return {String} placement - The desired title.
 */


var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.show = function () {
    return _this5._show(_this5.reference, _this5.options);
  };

  this.hide = function () {
    return _this5._hide();
  };

  this.dispose = function () {
    return _this5._dispose();
  };

  this.toggle = function () {
    if (_this5._isOpen) {
      return _this5.hide();
    } else {
      return _this5.show();
    }
  };

  this.arrowSelector = '.tooltip-arrow, .tooltip__arrow';
  this.innerSelector = '.tooltip-inner, .tooltip__inner';
  this._events = [];

  this._setTooltipNodeEvent = function (evt, reference, delay, options) {
    var relatedreference = evt.relatedreference || evt.toElement;

    var callback = function callback(evt2) {
      var relatedreference2 = evt2.relatedreference || evt2.toElement;

      // Remove event listener after call
      _this5._tooltipNode.removeEventListener(evt.type, callback);

      // If the new reference is not the reference element
      if (!reference.contains(relatedreference2)) {
        // Schedule to hide tooltip
        _this5._scheduleHide(reference, options.delay, options, evt2);
      }
    };

    if (_this5._tooltipNode.contains(relatedreference)) {
      // listen to mouseleave on the tooltip element to be able to hide the tooltip
      _this5._tooltipNode.addEventListener(evt.type, callback);
      return true;
    }

    return false;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);
//# sourceMappingURL=tooltip.js.map


/***/ }),

/***/ "DuR2":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "W2nU":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "Wesl":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {(function($){
	function saveRange(target){
		var opts = $.data(target, 'texteditor').options;
		opts.selectedRange = null;
		if (window.getSelection){
			var sel = window.getSelection();
			if (sel.getRangeAt && sel.rangeCount){
				var range = sel.getRangeAt(0);
				var pnode = range.commonAncestorContainer.parentNode;
				if ($(pnode).closest('.texteditor')[0] == $(target).parent()[0]){
					opts.selectedRange = range;
				}
			}
		} else if (document.selection && document.selection.createRange){
			var range = document.selection.createRange();
			var pnode = range.parentElement();
			if ($(pnode).closest('.texteditor')[0] == $(target).parent()[0]){
				opts.selectedRange = range;
			}
		}
	}

	function restoreRange(target){
		var opts = $.data(target, 'texteditor').options;
		var range = opts.selectedRange;
		if (window.getSelection){
			var sel = window.getSelection();
			sel.removeAllRanges();
			if (range){
				sel.addRange(range);
			}
		} else if (document.selection){
			document.selection.empty();
			if (range && range.select){
				range.select();
			}
		}
	}

	function insertContent(target, html){
		var opts = $.data(target, 'texteditor').options;
		if (opts.selectedRange){
			if (window.getSelection){
				opts.selectedRange.collapse(false);
				opts.selectedRange.insertNode($(html)[0]);
			} else if (document.selection && opts.selectedRange.select){
				opts.selectedRange.collapse(false);
				opts.selectedRange.pasteHTML($(html)[0]);
			}
		}
	}

	function updateToolbar(target){
		var opts = $.data(target, 'texteditor').options;
		opts.dlgToolbar.find('.l-btn').each(function(){
			var cmd = $(this).attr('cmd');
			if (document.queryCommandState(cmd)){
				$(this).linkbutton('select');
			} else {
				$(this).linkbutton('unselect');
			}
		});
		opts.dlgToolbar.find('.combobox-f').each(function(){
			var cmd = $(this).attr('cmd');
			var value = String(document.queryCommandValue(cmd)||'');
			value = value.replace(/['"]/g,'').toLowerCase();
			var copts = $(this).combo('options');
			var onChange = copts.onChange;
			copts.onChange = function(){};
			var data = $(this).combobox('getData');
			if ($.easyui.indexOfArray(data, copts.valueField, value) >= 0){
				$(this).combobox('setValue', value);
			} else {
				$(this).combobox('clear');
			}
			copts.onChange = onChange;
		});
	}

	function buildEditor(target){
		var opts = $.data(target, 'texteditor').options;
		$(opts.dlgToolbar).panel('clear').remove();
		opts.dlgToolbar = $('<div></div>');
		for(var i=0; i<opts.toolbar.length; i++){
			var tool = opts.toolbar[i];
			if (tool == '-'){
				$('<span class="dialog-tool-separator"></span>').appendTo(opts.dlgToolbar);
			} else {
				var cmd = opts.commands[tool];
				if (cmd){
					cmd.type = cmd.type || 'linkbutton';
					cmd.plain = cmd.plain || true;
					var btn = $('<a href="javascript:;"></a>').appendTo(opts.dlgToolbar);
					btn.attr('cmd', tool);
					btn[cmd.type](cmd);
					if (cmd.onInit){
						cmd.onInit.call(btn[0]);
					}
				}
			}
		}
		$(target).dialog($.extend({}, opts, {
			toolbar: opts.dlgToolbar
		}));
		$(target).attr('contenteditable', true);
		var input = $(target).dialog('dialog').children('.texteditor-value');
		if (!input.length){
			input = $('<textarea class="texteditor-value" style="display:none"></textarea>').insertAfter(target);
		}
		input.attr('name', opts.name || $(target).attr('name'));
		$(target).unbind('.texteditor').bind('mouseup.texteditor keyup.texteditor',function(){
			saveRange(target);
			updateToolbar(target);
		}).bind('blur.texteditor', function(e){
			input.val($(target).html());
		});
		input.val($(target).html());
	}

	function buildColorPanel(mb){
		var opts = $(mb).menubutton('options');
		if (!opts.menu){
			opts.menu = $('<div class="menu-content texteditor-color"></div>');
		}
		opts.menu.menu({
			onShow: function(){
				if ($(this).is(':empty')){
					var colors = [
						"0,0,0","68,68,68","102,102,102","153,153,153","204,204,204","238,238,238","243,243,243","255,255,255",
						"244,204,204","252,229,205","255,242,204","217,234,211","208,224,227","207,226,243","217,210,233","234,209,220",
						"234,153,153","249,203,156","255,229,153","182,215,168","162,196,201","159,197,232","180,167,214","213,166,189",
						"224,102,102","246,178,107","255,217,102","147,196,125","118,165,175","111,168,220","142,124,195","194,123,160",
						"204,0,0","230,145,56","241,194,50","106,168,79","69,129,142","61,133,198","103,78,167","166,77,121",
						"153,0,0","180,95,6","191,144,0","56,118,29","19,79,92","11,83,148","53,28,117","116,27,71",
						"102,0,0","120,63,4","127,96,0","39,78,19","12,52,61","7,55,99","32,18,77","76,17,48"
					];
					for(var i=0; i<colors.length; i++){
						var a = $('<a class="texteditor-colorcell"></a>').appendTo(this);
						a.css('backgroundColor', 'rgb('+colors[i]+')');
					}
				}
			}
		});
		opts.menu.bind('click', function(e){
			if ($(e.target).hasClass('texteditor-colorcell')){
				var color = $(e.target).css('backgroundColor');
				opts.onClick.call(mb, color);
				opts.menu.menu('hide');
			}
		});
		$(mb).menubutton({menu:opts.menu});	// attach the menu
	}

	$.fn.texteditor = function(options, param){
		if (typeof options == 'string'){
			var method = $.fn.texteditor.methods[options];
			if (method){
				return method(this, param);
			} else {
				return this.dialog(options, param);
			}
		}
		options = options || {};
		return this.each(function(){
			var state = $.data(this, 'texteditor');
			if (state){
				$.extend(state.options, options);
			} else {
				state = $.data(this, 'texteditor', {
					options: $.extend({}, $.fn.texteditor.defaults, $.fn.texteditor.parseOptions(this), options)
				});
			}
			buildEditor(this);
		});
	};

	$.fn.texteditor.methods = {
		options: function(jq){
			return jq.data('texteditor').options;
		},
		execCommand: function(jq, cmd){
			return jq.each(function(){
				var a = cmd.split(' ');
				var c = a.shift();
				restoreRange(this);
				document.execCommand(c, false, a.join(' ')||null);
				updateToolbar(this);
				saveRange(this);
			});
		},
		getEditor: function(jq){
			return jq.closest('.texteditor').children('.texteditor-body');
		},
		insertContent: function(jq, html){
			return jq.each(function(){
				insertContent(this, html);
				$(this).dialog('dialog').children('.texteditor-value').val($(this).html());
			});
		},
		destroy: function(jq){
			return jq.each(function(){
				var opts = $(this).texteditor('options');
				$(opts.dlgToolbar).panel('clear');
				$(this).dialog('destroy');
			});
		},
		getValue: function(jq){
			return jq.dialog('dialog').children('.texteditor-value').val();
		},
		setValue: function(jq, html){
			return jq.each(function(){
				$(this).html(html);
				$(this).dialog('dialog').children('.texteditor-value').val($(this).html());
			});
		}
	};

	$.fn.texteditor.parseOptions = function(target){
		return $.extend({}, $.fn.dialog.parseOptions(target), {

		});
	};

	$.fn.texteditor.defaults = $.extend({}, $.fn.dialog.defaults, {
		title: null,
		cls: 'texteditor',
		bodyCls: 'texteditor-body',
		draggable: false,
		shadow: false,
		closable: false,
		inline: true,
		border: 'thin',
		name: '',
		toolbar: ['bold','italic','strikethrough','underline','-','justifyleft','justifycenter','justifyright','justifyfull','-','insertorderedlist','insertunorderedlist','outdent','indent','-','forecolor','backcolor','-','formatblock','fontname','fontsize'],
		commands: {
			'bold': {
				type: 'linkbutton',
				iconCls: 'icon-bold',
				onClick: function(){
					$(this).texteditor('getEditor').texteditor('execCommand','bold');
				}
			},
			'italic': {
				type: 'linkbutton',
				iconCls: 'icon-italic',
				onClick: function(){
					$(this).texteditor('getEditor').texteditor('execCommand','italic');
				}
			},
			'strikethrough': {
				type: 'linkbutton',
				iconCls: 'icon-strikethrough',
				onClick: function(){
					$(this).texteditor('getEditor').texteditor('execCommand','strikethrough');
				}
			},
			'underline': {
				type: 'linkbutton',
				iconCls: 'icon-underline',
				onClick: function(){
					$(this).texteditor('getEditor').texteditor('execCommand','underline');
				}
			},
			'justifyleft': {
				type: 'linkbutton',
				iconCls: 'icon-justifyleft',
				onClick: function(){
					$(this).texteditor('getEditor').texteditor('execCommand','justifyleft');
				}
			},
			'justifycenter': {
				type: 'linkbutton',
				iconCls: 'icon-justifycenter',
				onClick: function(){
					$(this).texteditor('getEditor').texteditor('execCommand','justifycenter');
				}
			},
			'justifyright': {
				type: 'linkbutton',
				iconCls: 'icon-justifyright',
				onClick: function(){
					$(this).texteditor('getEditor').texteditor('execCommand','justifyright');
				}
			},
			'justifyfull': {
				type: 'linkbutton',
				iconCls: 'icon-justifyfull',
				onClick: function(){
					$(this).texteditor('getEditor').texteditor('execCommand','justifyfull');
				}
			},
			'insertorderedlist': {
				type: 'linkbutton',
				iconCls: 'icon-insertorderedlist',
				onClick: function(){
					$(this).texteditor('getEditor').texteditor('execCommand','insertorderedlist');
				}
			},
			'insertunorderedlist': {
				type: 'linkbutton',
				iconCls: 'icon-insertunorderedlist',
				onClick: function(){
					$(this).texteditor('getEditor').texteditor('execCommand','insertunorderedlist');
				}
			},
			'outdent': {
				type: 'linkbutton',
				iconCls: 'icon-outdent',
				onClick: function(){
					$(this).texteditor('getEditor').texteditor('execCommand','outdent');
				}
			},
			'indent': {
				type: 'linkbutton',
				iconCls: 'icon-indent',
				onClick: function(){
					$(this).texteditor('getEditor').texteditor('execCommand','indent');
				}
			},
			'forecolor': {
				type: 'menubutton',
				iconCls: 'icon-forecolor',
				width: 26,
				onInit: function(){
					buildColorPanel(this);
				},
				onClick: function(color){
					$(this).texteditor('getEditor').texteditor('execCommand','forecolor '+color);
				}
			},
			'backcolor': {
				type: 'menubutton',
				iconCls: 'icon-backcolor',
				width: 26,
				onInit: function(){
					buildColorPanel(this);
				},
				onClick: function(color){
					$(this).texteditor('getEditor').texteditor('execCommand','backcolor '+color);
				}
			},
			'formatblock': {
				type: 'combobox',
				width: 100,
				prompt: 'Font Format',
				editable: false,
				panelHeight: 'auto',
				data: [
					{value: 'p',text:'p'},
					{value: 'pre',text:'pre'},
					{value: 'h6',text:'h6'},
					{value: 'h5',text:'h5'},
					{value: 'h4',text:'h4'},
					{value: 'h3',text:'h3'},
					{value: 'h2',text:'h2'},
					{value: 'h1',text:'h1'}
				],
				formatter: function(row){
					return '<'+row.value+' style="margin:0;padding:0">'+row.text+'</'+row.value+'>';
				},
				onChange: function(value){
					$(this).texteditor('getEditor').texteditor('execCommand','formatblock '+value);
				}
			},
			'fontname': {
				type: 'combobox',
				width: 100,
				prompt: 'Font Family',
				editable: false,
				panelHeight: 'auto',
				data: [
					{value:'arial',text:'Arial'},
					{value:'comic sans ms',text:'Comic Sans'},
					{value:'courier new',text:'Courier New'},
					{value:'georgia',text:'Georgia'},
					{value:'helvetica',text:'Helvetica'},
					{value:'impact',text:'Impact'},
					{value:'times new roman',text:'Times'},
					{value:'trebuchet ms',text:'Trebuchet'},
					{value:'verdana',text:'Verdana'}
				],
				formatter: function(row){
					return '<font face="'+row.value+'">'+row.text+'</font>';
				},
				onChange: function(value){
					$(this).texteditor('getEditor').texteditor('execCommand','fontname '+value);
				}
			},
			'fontsize': {
				type: 'combobox',
				width: 100,
				prompt: 'Font Size',
				editable: false,
				panelHeight: 'auto',
				data: [
					{value:1,text:'Size 1'},
					{value:2,text:'Size 2'},
					{value:3,text:'Size 3'},
					{value:4,text:'Size 4'},
					{value:5,text:'Size 5'},
					{value:6,text:'Size 6'}
				],
				formatter: function(row){
					return '<font size="'+row.value+'">'+row.text+'</font>';
				},
				onChange: function(value){
					$(this).texteditor('getEditor').texteditor('execCommand','fontsize '+value);
				}
			}
		}

	});

	$.parser.plugins.push('texteditor');
})(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("7t+N")))

/***/ }),

/***/ "Ygqm":
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__("sOR5")

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {String} str
 * @return {Array}
 */
function parse (str) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var suffix = res[6]
    var asterisk = res[7]

    var repeat = suffix === '+' || suffix === '*'
    var optional = suffix === '?' || suffix === '*'
    var delimiter = prefix || '/'
    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      pattern: escapeGroup(pattern)
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {String}   str
 * @return {Function}
 */
function compile (str) {
  return tokensToFunction(parse(str))
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^' + tokens[i].pattern + '$')
    }
  }

  return function (obj) {
    var path = ''
    var data = obj || {}

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encodeURIComponent(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = encodeURIComponent(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {String} str
 * @return {String}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {String} group
 * @return {String}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {RegExp} re
 * @param  {Array}  keys
 * @return {RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {String}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {RegExp} path
 * @param  {Array}  keys
 * @return {RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {Array}  path
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {String} path
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function stringToRegexp (path, keys, options) {
  var tokens = parse(path)
  var re = tokensToRegExp(tokens, options)

  // Attach keys back to the regexp.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] !== 'string') {
      keys.push(tokens[i])
    }
  }

  return attachKeys(re, keys)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {Array}  tokens
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function tokensToRegExp (tokens, options) {
  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''
  var lastToken = tokens[tokens.length - 1]
  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = token.pattern

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (prefix) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithSlash ? '' : '(?=\\/|$)'
  }

  return new RegExp('^' + route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(String|RegExp|Array)} path
 * @param  {Array}                 [keys]
 * @param  {Object}                [options]
 * @return {RegExp}
 */
function pathToRegexp (path, keys, options) {
  keys = keys || []

  if (!isarray(keys)) {
    options = keys
    keys = []
  } else if (!options) {
    options = {}
  }

  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys, options)
  }

  if (isarray(path)) {
    return arrayToRegexp(path, keys, options)
  }

  return stringToRegexp(path, keys, options)
}


/***/ }),

/***/ "Zgw8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.5
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var nativeHints = ['native code', '[object MutationObserverConstructor]'];

/**
 * Determine if a function is implemented natively (as opposed to a polyfill).
 * @method
 * @memberof Popper.Utils
 * @argument {Function | undefined} fn the function to check
 * @returns {Boolean}
 */
var isNative = (function (fn) {
  return nativeHints.some(function (hint) {
    return (fn || '').toString().indexOf(hint) > -1;
  });
});

var isBrowser = typeof window !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var scheduled = false;
  var i = 0;
  var elem = document.createElement('span');

  // MutationObserver provides a mechanism for scheduling microtasks, which
  // are scheduled *before* the next task. This gives us a way to debounce
  // a function but ensure it's called *before* the next paint.
  var observer = new MutationObserver(function () {
    fn();
    scheduled = false;
  });

  observer.observe(elem, { attributes: true });

  return function () {
    if (!scheduled) {
      scheduled = true;
      elem.setAttribute('x-index', i);
      i = i + 1; // don't use compund (+=) because it doesn't get optimized in V8
    }
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

// It's common for MutationObserver polyfills to be seen in the wild, however
// these rely on Mutation Events which only occur when an element is connected
// to the DOM. The algorithm used in this module does not use a connected element,
// and so we must ensure that a *native* MutationObserver is available.
var supportsNativeMutationObserver = isBrowser && isNative(window.MutationObserver);

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsNativeMutationObserver ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element || ['HTML', 'BODY', '#document'].indexOf(element.nodeName) !== -1) {
    return window.document.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return window.document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return window.document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = window.document.documentElement;
    var scrollingElement = window.document.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return +styles['border' + sideA + 'Width'].split('px')[0] + +styles['border' + sideB + 'Width'].split('px')[0];
}

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;

var isIE10$1 = function () {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = window.document.body;
  var html = window.document.documentElement;
  var computedStyle = isIE10$1() && window.getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var isIE10 = isIE10$1();
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = +styles.borderTopWidth.split('px')[0];
  var borderLeftWidth = +styles.borderLeftWidth.split('px')[0];

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = +styles.marginTop.split('px')[0];
    var marginLeft = +styles.marginLeft.split('px')[0];

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = window.document.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(popper));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = window.document.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = window.document.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier.function) {
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier.function || modifier.fn;
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length - 1; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof window.document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? window : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  window.addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  window.removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    window.cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var popperMarginSide = getStyleComputedProperty(data.instance.popper, 'margin' + sideCapitalized).replace('px', '');
  var sideValue = center - getClientRect(data.offsets.popper)[side] - popperMarginSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = {};
  data.offsets.arrow[side] = Math.round(sideValue);
  data.offsets.arrow[altSide] = ''; // make sure to unset any eventual altSide value from the DOM node

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference.jquery ? reference[0] : reference;
    this.popper = popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("DuR2")))

/***/ }),

/***/ "bNAW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {  /* globals require, module */

  

  /**
   * Module dependencies.
   */

  var pathtoRegexp = __webpack_require__("Ygqm");

  /**
   * Module exports.
   */

  module.exports = page;

  /**
   * Detect click event
   */
  var clickEvent = ('undefined' !== typeof document) && document.ontouchstart ? 'touchstart' : 'click';

  /**
   * To work properly with the URL
   * history.location generated polyfill in https://github.com/devote/HTML5-History-API
   */

  var location = ('undefined' !== typeof window) && (window.history.location || window.location);

  /**
   * Perform initial dispatch.
   */

  var dispatch = true;


  /**
   * Decode URL components (query string, pathname, hash).
   * Accommodates both regular percent encoding and x-www-form-urlencoded format.
   */
  var decodeURLComponents = true;

  /**
   * Base path.
   */

  var base = '';

  /**
   * Running flag.
   */

  var running;

  /**
   * HashBang option
   */

  var hashbang = false;

  /**
   * Previous context, for capturing
   * page exit events.
   */

  var prevContext;

  /**
   * Register `path` with callback `fn()`,
   * or route `path`, or redirection,
   * or `page.start()`.
   *
   *   page(fn);
   *   page('*', fn);
   *   page('/user/:id', load, user);
   *   page('/user/' + user.id, { some: 'thing' });
   *   page('/user/' + user.id);
   *   page('/from', '/to')
   *   page();
   *
   * @param {string|!Function|!Object} path
   * @param {Function=} fn
   * @api public
   */

  function page(path, fn) {
    // <callback>
    if ('function' === typeof path) {
      return page('*', path);
    }

    // route <path> to <callback ...>
    if ('function' === typeof fn) {
      var route = new Route(/** @type {string} */ (path));
      for (var i = 1; i < arguments.length; ++i) {
        page.callbacks.push(route.middleware(arguments[i]));
      }
      // show <path> with [state]
    } else if ('string' === typeof path) {
      page['string' === typeof fn ? 'redirect' : 'show'](path, fn);
      // start [options]
    } else {
      page.start(path);
    }
  }

  /**
   * Callback functions.
   */

  page.callbacks = [];
  page.exits = [];

  /**
   * Current path being processed
   * @type {string}
   */
  page.current = '';

  /**
   * Number of pages navigated to.
   * @type {number}
   *
   *     page.len == 0;
   *     page('/login');
   *     page.len == 1;
   */

  page.len = 0;

  /**
   * Get or set basepath to `path`.
   *
   * @param {string} path
   * @api public
   */

  page.base = function(path) {
    if (0 === arguments.length) return base;
    base = path;
  };

  /**
   * Bind with the given `options`.
   *
   * Options:
   *
   *    - `click` bind to click events [true]
   *    - `popstate` bind to popstate [true]
   *    - `dispatch` perform initial dispatch [true]
   *
   * @param {Object} options
   * @api public
   */

  page.start = function(options) {
    options = options || {};
    if (running) return;
    running = true;
    if (false === options.dispatch) dispatch = false;
    if (false === options.decodeURLComponents) decodeURLComponents = false;
    if (false !== options.popstate) window.addEventListener('popstate', onpopstate, false);
    if (false !== options.click) {
      document.addEventListener(clickEvent, onclick, false);
    }
    if (true === options.hashbang) hashbang = true;
    if (!dispatch) return;
    var url = (hashbang && ~location.hash.indexOf('#!')) ? location.hash.substr(2) + location.search : location.pathname + location.search + location.hash;
    page.replace(url, null, true, dispatch);
  };

  /**
   * Unbind click and popstate event handlers.
   *
   * @api public
   */

  page.stop = function() {
    if (!running) return;
    page.current = '';
    page.len = 0;
    running = false;
    document.removeEventListener(clickEvent, onclick, false);
    window.removeEventListener('popstate', onpopstate, false);
  };

  /**
   * Show `path` with optional `state` object.
   *
   * @param {string} path
   * @param {Object=} state
   * @param {boolean=} dispatch
   * @param {boolean=} push
   * @return {!Context}
   * @api public
   */

  page.show = function(path, state, dispatch, push) {
    var ctx = new Context(path, state);
    page.current = ctx.path;
    if (false !== dispatch) page.dispatch(ctx);
    if (false !== ctx.handled && false !== push) ctx.pushState();
    return ctx;
  };

  /**
   * Goes back in the history
   * Back should always let the current route push state and then go back.
   *
   * @param {string} path - fallback path to go back if no more history exists, if undefined defaults to page.base
   * @param {Object=} state
   * @api public
   */

  page.back = function(path, state) {
    if (page.len > 0) {
      // this may need more testing to see if all browsers
      // wait for the next tick to go back in history
      history.back();
      page.len--;
    } else if (path) {
      setTimeout(function() {
        page.show(path, state);
      });
    }else{
      setTimeout(function() {
        page.show(base, state);
      });
    }
  };


  /**
   * Register route to redirect from one path to other
   * or just redirect to another route
   *
   * @param {string} from - if param 'to' is undefined redirects to 'from'
   * @param {string=} to
   * @api public
   */
  page.redirect = function(from, to) {
    // Define route from a path to another
    if ('string' === typeof from && 'string' === typeof to) {
      page(from, function(e) {
        setTimeout(function() {
          page.replace(/** @type {!string} */ (to));
        }, 0);
      });
    }

    // Wait for the push state and replace it with another
    if ('string' === typeof from && 'undefined' === typeof to) {
      setTimeout(function() {
        page.replace(from);
      }, 0);
    }
  };

  /**
   * Replace `path` with optional `state` object.
   *
   * @param {string} path
   * @param {Object=} state
   * @param {boolean=} init
   * @param {boolean=} dispatch
   * @return {!Context}
   * @api public
   */


  page.replace = function(path, state, init, dispatch) {
    var ctx = new Context(path, state);
    page.current = ctx.path;
    ctx.init = init;
    ctx.save(); // save before dispatching, which may redirect
    if (false !== dispatch) page.dispatch(ctx);
    return ctx;
  };

  /**
   * Dispatch the given `ctx`.
   *
   * @param {Context} ctx
   * @api private
   */
  page.dispatch = function(ctx) {
    var prev = prevContext,
      i = 0,
      j = 0;

    prevContext = ctx;

    function nextExit() {
      var fn = page.exits[j++];
      if (!fn) return nextEnter();
      fn(prev, nextExit);
    }

    function nextEnter() {
      var fn = page.callbacks[i++];

      if (ctx.path !== page.current) {
        ctx.handled = false;
        return;
      }
      if (!fn) return unhandled(ctx);
      fn(ctx, nextEnter);
    }

    if (prev) {
      nextExit();
    } else {
      nextEnter();
    }
  };

  /**
   * Unhandled `ctx`. When it's not the initial
   * popstate then redirect. If you wish to handle
   * 404s on your own use `page('*', callback)`.
   *
   * @param {Context} ctx
   * @api private
   */
  function unhandled(ctx) {
    if (ctx.handled) return;
    var current;

    if (hashbang) {
      current = base + location.hash.replace('#!', '');
    } else {
      current = location.pathname + location.search;
    }

    if (current === ctx.canonicalPath) return;
    page.stop();
    ctx.handled = false;
    location.href = ctx.canonicalPath;
  }

  /**
   * Register an exit route on `path` with
   * callback `fn()`, which will be called
   * on the previous context when a new
   * page is visited.
   */
  page.exit = function(path, fn) {
    if (typeof path === 'function') {
      return page.exit('*', path);
    }

    var route = new Route(path);
    for (var i = 1; i < arguments.length; ++i) {
      page.exits.push(route.middleware(arguments[i]));
    }
  };

  /**
   * Remove URL encoding from the given `str`.
   * Accommodates whitespace in both x-www-form-urlencoded
   * and regular percent-encoded form.
   *
   * @param {string} val - URL component to decode
   */
  function decodeURLEncodedURIComponent(val) {
    if (typeof val !== 'string') { return val; }
    return decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, ' ')) : val;
  }

  /**
   * Initialize a new "request" `Context`
   * with the given `path` and optional initial `state`.
   *
   * @constructor
   * @param {string} path
   * @param {Object=} state
   * @api public
   */

  function Context(path, state) {
    if ('/' === path[0] && 0 !== path.indexOf(base)) path = base + (hashbang ? '#!' : '') + path;
    var i = path.indexOf('?');

    this.canonicalPath = path;
    this.path = path.replace(base, '') || '/';
    if (hashbang) this.path = this.path.replace('#!', '') || '/';

    this.title = document.title;
    this.state = state || {};
    this.state.path = path;
    this.querystring = ~i ? decodeURLEncodedURIComponent(path.slice(i + 1)) : '';
    this.pathname = decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);
    this.params = {};

    // fragment
    this.hash = '';
    if (!hashbang) {
      if (!~this.path.indexOf('#')) return;
      var parts = this.path.split('#');
      this.path = parts[0];
      this.hash = decodeURLEncodedURIComponent(parts[1]) || '';
      this.querystring = this.querystring.split('#')[0];
    }
  }

  /**
   * Expose `Context`.
   */

  page.Context = Context;

  /**
   * Push state.
   *
   * @api private
   */

  Context.prototype.pushState = function() {
    page.len++;
    history.pushState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
  };

  /**
   * Save the context state.
   *
   * @api public
   */

  Context.prototype.save = function() {
    history.replaceState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
  };

  /**
   * Initialize `Route` with the given HTTP `path`,
   * and an array of `callbacks` and `options`.
   *
   * Options:
   *
   *   - `sensitive`    enable case-sensitive routes
   *   - `strict`       enable strict matching for trailing slashes
   *
   * @constructor
   * @param {string} path
   * @param {Object=} options
   * @api private
   */

  function Route(path, options) {
    options = options || {};
    this.path = (path === '*') ? '(.*)' : path;
    this.method = 'GET';
    this.regexp = pathtoRegexp(this.path,
      this.keys = [],
      options);
  }

  /**
   * Expose `Route`.
   */

  page.Route = Route;

  /**
   * Return route middleware with
   * the given callback `fn()`.
   *
   * @param {Function} fn
   * @return {Function}
   * @api public
   */

  Route.prototype.middleware = function(fn) {
    var self = this;
    return function(ctx, next) {
      if (self.match(ctx.path, ctx.params)) return fn(ctx, next);
      next();
    };
  };

  /**
   * Check if this route matches `path`, if so
   * populate `params`.
   *
   * @param {string} path
   * @param {Object} params
   * @return {boolean}
   * @api private
   */

  Route.prototype.match = function(path, params) {
    var keys = this.keys,
      qsIndex = path.indexOf('?'),
      pathname = ~qsIndex ? path.slice(0, qsIndex) : path,
      m = this.regexp.exec(decodeURIComponent(pathname));

    if (!m) return false;

    for (var i = 1, len = m.length; i < len; ++i) {
      var key = keys[i - 1];
      var val = decodeURLEncodedURIComponent(m[i]);
      if (val !== undefined || !(hasOwnProperty.call(params, key.name))) {
        params[key.name] = val;
      }
    }

    return true;
  };


  /**
   * Handle "populate" events.
   */

  var onpopstate = (function () {
    var loaded = false;
    if ('undefined' === typeof window) {
      return;
    }
    if (document.readyState === 'complete') {
      loaded = true;
    } else {
      window.addEventListener('load', function() {
        setTimeout(function() {
          loaded = true;
        }, 0);
      });
    }
    return function onpopstate(e) {
      if (!loaded) return;
      if (e.state) {
        var path = e.state.path;
        page.replace(path, e.state);
      } else {
        page.show(location.pathname + location.hash, undefined, undefined, false);
      }
    };
  })();
  /**
   * Handle "click" events.
   */

  function onclick(e) {

    if (1 !== which(e)) return;

    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    if (e.defaultPrevented) return;



    // ensure link
    // use shadow dom when available
    var el = e.path ? e.path[0] : e.target;
    while (el && 'A' !== el.nodeName) el = el.parentNode;
    if (!el || 'A' !== el.nodeName) return;



    // Ignore if tag has
    // 1. "download" attribute
    // 2. rel="external" attribute
    if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;

    // ensure non-hash for the same path
    var link = el.getAttribute('href');
    if (!hashbang && el.pathname === location.pathname && (el.hash || '#' === link)) return;



    // Check for mailto: in the href
    if (link && link.indexOf('mailto:') > -1) return;

    // check target
    if (el.target) return;

    // x-origin
    if (!sameOrigin(el.href)) return;



    // rebuild path
    var path = el.pathname + el.search + (el.hash || '');

    // strip leading "/[drive letter]:" on NW.js on Windows
    if (typeof process !== 'undefined' && path.match(/^\/[a-zA-Z]:\//)) {
      path = path.replace(/^\/[a-zA-Z]:\//, '/');
    }

    // same page
    var orig = path;

    if (path.indexOf(base) === 0) {
      path = path.substr(base.length);
    }

    if (hashbang) path = path.replace('#!', '');

    if (base && orig === path) return;

    e.preventDefault();
    page.show(orig);
  }

  /**
   * Event button.
   */

  function which(e) {
    e = e || window.event;
    return null === e.which ? e.button : e.which;
  }

  /**
   * Check if `href` is the same origin.
   */

  function sameOrigin(href) {
    var origin = location.protocol + '//' + location.hostname;
    if (location.port) origin += ':' + location.port;
    return (href && (0 === href.indexOf(origin)));
  }

  page.sameOrigin = sameOrigin;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("W2nU")))

/***/ }),

/***/ "dDPC":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/**
 * EasyUI for jQuery 1.5.3
 *
 * Copyright (c) 2009-2017 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: http://www.jeasyui.com/license_freeware.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
(function($){
$.easyui={indexOfArray:function(a,o,id){
for(var i=0,_1=a.length;i<_1;i++){
if(id==undefined){
if(a[i]==o){
return i;
}
}else{
if(a[i][o]==id){
return i;
}
}
}
return -1;
},removeArrayItem:function(a,o,id){
if(typeof o=="string"){
for(var i=0,_2=a.length;i<_2;i++){
if(a[i][o]==id){
a.splice(i,1);
return;
}
}
}else{
var _3=this.indexOfArray(a,o);
if(_3!=-1){
a.splice(_3,1);
}
}
},addArrayItem:function(a,o,r){
var _4=this.indexOfArray(a,o,r?r[o]:undefined);
if(_4==-1){
a.push(r?r:o);
}else{
a[_4]=r?r:o;
}
},getArrayItem:function(a,o,id){
var _5=this.indexOfArray(a,o,id);
return _5==-1?null:a[_5];
},forEach:function(_6,_7,_8){
var _9=[];
for(var i=0;i<_6.length;i++){
_9.push(_6[i]);
}
while(_9.length){
var _a=_9.shift();
if(_8(_a)==false){
return;
}
if(_7&&_a.children){
for(var i=_a.children.length-1;i>=0;i--){
_9.unshift(_a.children[i]);
}
}
}
}};
$.parser={auto:true,onComplete:function(_b){
},plugins:["draggable","droppable","resizable","pagination","tooltip","linkbutton","menu","menubutton","splitbutton","switchbutton","progressbar","tree","textbox","passwordbox","filebox","combo","combobox","combotree","combogrid","combotreegrid","tagbox","numberbox","validatebox","searchbox","spinner","numberspinner","timespinner","datetimespinner","calendar","datebox","datetimebox","slider","layout","panel","datagrid","propertygrid","treegrid","datalist","tabs","accordion","window","dialog","form"],parse:function(_c){
var aa=[];
for(var i=0;i<$.parser.plugins.length;i++){
var _d=$.parser.plugins[i];
var r=$(".easyui-"+_d,_c);
if(r.length){
if(r[_d]){
r.each(function(){
$(this)[_d]($.data(this,"options")||{});
});
}else{
aa.push({name:_d,jq:r});
}
}
}
if(aa.length&&window.easyloader){
var _e=[];
for(var i=0;i<aa.length;i++){
_e.push(aa[i].name);
}
easyloader.load(_e,function(){
for(var i=0;i<aa.length;i++){
var _f=aa[i].name;
var jq=aa[i].jq;
jq.each(function(){
$(this)[_f]($.data(this,"options")||{});
});
}
$.parser.onComplete.call($.parser,_c);
});
}else{
$.parser.onComplete.call($.parser,_c);
}
},parseValue:function(_10,_11,_12,_13){
_13=_13||0;
var v=$.trim(String(_11||""));
var _14=v.substr(v.length-1,1);
if(_14=="%"){
v=parseFloat(v.substr(0,v.length-1));
if(_10.toLowerCase().indexOf("width")>=0){
v=Math.floor((_12.width()-_13)*v/100);
}else{
v=Math.floor((_12.height()-_13)*v/100);
}
}else{
v=parseInt(v)||undefined;
}
return v;
},parseOptions:function(_15,_16){
var t=$(_15);
var _17={};
var s=$.trim(t.attr("data-options"));
if(s){
if(s.substring(0,1)!="{"){
s="{"+s+"}";
}
_17=(new Function("return "+s))();
}
$.map(["width","height","left","top","minWidth","maxWidth","minHeight","maxHeight"],function(p){
var pv=$.trim(_15.style[p]||"");
if(pv){
if(pv.indexOf("%")==-1){
pv=parseInt(pv);
if(isNaN(pv)){
pv=undefined;
}
}
_17[p]=pv;
}
});
if(_16){
var _18={};
for(var i=0;i<_16.length;i++){
var pp=_16[i];
if(typeof pp=="string"){
_18[pp]=t.attr(pp);
}else{
for(var _19 in pp){
var _1a=pp[_19];
if(_1a=="boolean"){
_18[_19]=t.attr(_19)?(t.attr(_19)=="true"):undefined;
}else{
if(_1a=="number"){
_18[_19]=t.attr(_19)=="0"?0:parseFloat(t.attr(_19))||undefined;
}
}
}
}
}
$.extend(_17,_18);
}
return _17;
}};
$(function(){
var d=$("<div style=\"position:absolute;top:-1000px;width:100px;height:100px;padding:5px\"></div>").appendTo("body");
$._boxModel=d.outerWidth()!=100;
d.remove();
d=$("<div style=\"position:fixed\"></div>").appendTo("body");
$._positionFixed=(d.css("position")=="fixed");
d.remove();
if(!window.easyloader&&$.parser.auto){
$.parser.parse();
}
});
$.fn._outerWidth=function(_1b){
if(_1b==undefined){
if(this[0]==window){
return this.width()||document.body.clientWidth;
}
return this.outerWidth()||0;
}
return this._size("width",_1b);
};
$.fn._outerHeight=function(_1c){
if(_1c==undefined){
if(this[0]==window){
return this.height()||document.body.clientHeight;
}
return this.outerHeight()||0;
}
return this._size("height",_1c);
};
$.fn._scrollLeft=function(_1d){
if(_1d==undefined){
return this.scrollLeft();
}else{
return this.each(function(){
$(this).scrollLeft(_1d);
});
}
};
$.fn._propAttr=$.fn.prop||$.fn.attr;
$.fn._size=function(_1e,_1f){
if(typeof _1e=="string"){
if(_1e=="clear"){
return this.each(function(){
$(this).css({width:"",minWidth:"",maxWidth:"",height:"",minHeight:"",maxHeight:""});
});
}else{
if(_1e=="fit"){
return this.each(function(){
_20(this,this.tagName=="BODY"?$("body"):$(this).parent(),true);
});
}else{
if(_1e=="unfit"){
return this.each(function(){
_20(this,$(this).parent(),false);
});
}else{
if(_1f==undefined){
return _21(this[0],_1e);
}else{
return this.each(function(){
_21(this,_1e,_1f);
});
}
}
}
}
}else{
return this.each(function(){
_1f=_1f||$(this).parent();
$.extend(_1e,_20(this,_1f,_1e.fit)||{});
var r1=_22(this,"width",_1f,_1e);
var r2=_22(this,"height",_1f,_1e);
if(r1||r2){
$(this).addClass("easyui-fluid");
}else{
$(this).removeClass("easyui-fluid");
}
});
}
function _20(_23,_24,fit){
if(!_24.length){
return false;
}
var t=$(_23)[0];
var p=_24[0];
var _25=p.fcount||0;
if(fit){
if(!t.fitted){
t.fitted=true;
p.fcount=_25+1;
$(p).addClass("panel-noscroll");
if(p.tagName=="BODY"){
$("html").addClass("panel-fit");
}
}
return {width:($(p).width()||1),height:($(p).height()||1)};
}else{
if(t.fitted){
t.fitted=false;
p.fcount=_25-1;
if(p.fcount==0){
$(p).removeClass("panel-noscroll");
if(p.tagName=="BODY"){
$("html").removeClass("panel-fit");
}
}
}
return false;
}
};
function _22(_26,_27,_28,_29){
var t=$(_26);
var p=_27;
var p1=p.substr(0,1).toUpperCase()+p.substr(1);
var min=$.parser.parseValue("min"+p1,_29["min"+p1],_28);
var max=$.parser.parseValue("max"+p1,_29["max"+p1],_28);
var val=$.parser.parseValue(p,_29[p],_28);
var _2a=(String(_29[p]||"").indexOf("%")>=0?true:false);
if(!isNaN(val)){
var v=Math.min(Math.max(val,min||0),max||99999);
if(!_2a){
_29[p]=v;
}
t._size("min"+p1,"");
t._size("max"+p1,"");
t._size(p,v);
}else{
t._size(p,"");
t._size("min"+p1,min);
t._size("max"+p1,max);
}
return _2a||_29.fit;
};
function _21(_2b,_2c,_2d){
var t=$(_2b);
if(_2d==undefined){
_2d=parseInt(_2b.style[_2c]);
if(isNaN(_2d)){
return undefined;
}
if($._boxModel){
_2d+=_2e();
}
return _2d;
}else{
if(_2d===""){
t.css(_2c,"");
}else{
if($._boxModel){
_2d-=_2e();
if(_2d<0){
_2d=0;
}
}
t.css(_2c,_2d+"px");
}
}
function _2e(){
if(_2c.toLowerCase().indexOf("width")>=0){
return t.outerWidth()-t.width();
}else{
return t.outerHeight()-t.height();
}
};
};
};
})(jQuery);
(function($){
var _2f=null;
var _30=null;
var _31=false;
function _32(e){
if(e.touches.length!=1){
return;
}
if(!_31){
_31=true;
dblClickTimer=setTimeout(function(){
_31=false;
},500);
}else{
clearTimeout(dblClickTimer);
_31=false;
_33(e,"dblclick");
}
_2f=setTimeout(function(){
_33(e,"contextmenu",3);
},1000);
_33(e,"mousedown");
if($.fn.draggable.isDragging||$.fn.resizable.isResizing){
e.preventDefault();
}
};
function _34(e){
if(e.touches.length!=1){
return;
}
if(_2f){
clearTimeout(_2f);
}
_33(e,"mousemove");
if($.fn.draggable.isDragging||$.fn.resizable.isResizing){
e.preventDefault();
}
};
function _35(e){
if(_2f){
clearTimeout(_2f);
}
_33(e,"mouseup");
if($.fn.draggable.isDragging||$.fn.resizable.isResizing){
e.preventDefault();
}
};
function _33(e,_36,_37){
var _38=new $.Event(_36);
_38.pageX=e.changedTouches[0].pageX;
_38.pageY=e.changedTouches[0].pageY;
_38.which=_37||1;
$(e.target).trigger(_38);
};
if(document.addEventListener){
document.addEventListener("touchstart",_32,true);
document.addEventListener("touchmove",_34,true);
document.addEventListener("touchend",_35,true);
}
})(jQuery);
(function($){
function _39(e){
var _3a=$.data(e.data.target,"draggable");
var _3b=_3a.options;
var _3c=_3a.proxy;
var _3d=e.data;
var _3e=_3d.startLeft+e.pageX-_3d.startX;
var top=_3d.startTop+e.pageY-_3d.startY;
if(_3c){
if(_3c.parent()[0]==document.body){
if(_3b.deltaX!=null&&_3b.deltaX!=undefined){
_3e=e.pageX+_3b.deltaX;
}else{
_3e=e.pageX-e.data.offsetWidth;
}
if(_3b.deltaY!=null&&_3b.deltaY!=undefined){
top=e.pageY+_3b.deltaY;
}else{
top=e.pageY-e.data.offsetHeight;
}
}else{
if(_3b.deltaX!=null&&_3b.deltaX!=undefined){
_3e+=e.data.offsetWidth+_3b.deltaX;
}
if(_3b.deltaY!=null&&_3b.deltaY!=undefined){
top+=e.data.offsetHeight+_3b.deltaY;
}
}
}
if(e.data.parent!=document.body){
_3e+=$(e.data.parent).scrollLeft();
top+=$(e.data.parent).scrollTop();
}
if(_3b.axis=="h"){
_3d.left=_3e;
}else{
if(_3b.axis=="v"){
_3d.top=top;
}else{
_3d.left=_3e;
_3d.top=top;
}
}
};
function _3f(e){
var _40=$.data(e.data.target,"draggable");
var _41=_40.options;
var _42=_40.proxy;
if(!_42){
_42=$(e.data.target);
}
_42.css({left:e.data.left,top:e.data.top});
$("body").css("cursor",_41.cursor);
};
function _43(e){
if(!$.fn.draggable.isDragging){
return false;
}
var _44=$.data(e.data.target,"draggable");
var _45=_44.options;
var _46=$(".droppable:visible").filter(function(){
return e.data.target!=this;
}).filter(function(){
var _47=$.data(this,"droppable").options.accept;
if(_47){
return $(_47).filter(function(){
return this==e.data.target;
}).length>0;
}else{
return true;
}
});
_44.droppables=_46;
var _48=_44.proxy;
if(!_48){
if(_45.proxy){
if(_45.proxy=="clone"){
_48=$(e.data.target).clone().insertAfter(e.data.target);
}else{
_48=_45.proxy.call(e.data.target,e.data.target);
}
_44.proxy=_48;
}else{
_48=$(e.data.target);
}
}
_48.css("position","absolute");
_39(e);
_3f(e);
_45.onStartDrag.call(e.data.target,e);
return false;
};
function _49(e){
if(!$.fn.draggable.isDragging){
return false;
}
var _4a=$.data(e.data.target,"draggable");
_39(e);
if(_4a.options.onDrag.call(e.data.target,e)!=false){
_3f(e);
}
var _4b=e.data.target;
_4a.droppables.each(function(){
var _4c=$(this);
if(_4c.droppable("options").disabled){
return;
}
var p2=_4c.offset();
if(e.pageX>p2.left&&e.pageX<p2.left+_4c.outerWidth()&&e.pageY>p2.top&&e.pageY<p2.top+_4c.outerHeight()){
if(!this.entered){
$(this).trigger("_dragenter",[_4b]);
this.entered=true;
}
$(this).trigger("_dragover",[_4b]);
}else{
if(this.entered){
$(this).trigger("_dragleave",[_4b]);
this.entered=false;
}
}
});
return false;
};
function _4d(e){
if(!$.fn.draggable.isDragging){
_4e();
return false;
}
_49(e);
var _4f=$.data(e.data.target,"draggable");
var _50=_4f.proxy;
var _51=_4f.options;
_51.onEndDrag.call(e.data.target,e);
if(_51.revert){
if(_52()==true){
$(e.data.target).css({position:e.data.startPosition,left:e.data.startLeft,top:e.data.startTop});
}else{
if(_50){
var _53,top;
if(_50.parent()[0]==document.body){
_53=e.data.startX-e.data.offsetWidth;
top=e.data.startY-e.data.offsetHeight;
}else{
_53=e.data.startLeft;
top=e.data.startTop;
}
_50.animate({left:_53,top:top},function(){
_54();
});
}else{
$(e.data.target).animate({left:e.data.startLeft,top:e.data.startTop},function(){
$(e.data.target).css("position",e.data.startPosition);
});
}
}
}else{
$(e.data.target).css({position:"absolute",left:e.data.left,top:e.data.top});
_52();
}
_51.onStopDrag.call(e.data.target,e);
_4e();
function _54(){
if(_50){
_50.remove();
}
_4f.proxy=null;
};
function _52(){
var _55=false;
_4f.droppables.each(function(){
var _56=$(this);
if(_56.droppable("options").disabled){
return;
}
var p2=_56.offset();
if(e.pageX>p2.left&&e.pageX<p2.left+_56.outerWidth()&&e.pageY>p2.top&&e.pageY<p2.top+_56.outerHeight()){
if(_51.revert){
$(e.data.target).css({position:e.data.startPosition,left:e.data.startLeft,top:e.data.startTop});
}
$(this).triggerHandler("_drop",[e.data.target]);
_54();
_55=true;
this.entered=false;
return false;
}
});
if(!_55&&!_51.revert){
_54();
}
return _55;
};
return false;
};
function _4e(){
if($.fn.draggable.timer){
clearTimeout($.fn.draggable.timer);
$.fn.draggable.timer=undefined;
}
$(document).unbind(".draggable");
$.fn.draggable.isDragging=false;
setTimeout(function(){
$("body").css("cursor","");
},100);
};
$.fn.draggable=function(_57,_58){
if(typeof _57=="string"){
return $.fn.draggable.methods[_57](this,_58);
}
return this.each(function(){
var _59;
var _5a=$.data(this,"draggable");
if(_5a){
_5a.handle.unbind(".draggable");
_59=$.extend(_5a.options,_57);
}else{
_59=$.extend({},$.fn.draggable.defaults,$.fn.draggable.parseOptions(this),_57||{});
}
var _5b=_59.handle?(typeof _59.handle=="string"?$(_59.handle,this):_59.handle):$(this);
$.data(this,"draggable",{options:_59,handle:_5b});
if(_59.disabled){
$(this).css("cursor","");
return;
}
_5b.unbind(".draggable").bind("mousemove.draggable",{target:this},function(e){
if($.fn.draggable.isDragging){
return;
}
var _5c=$.data(e.data.target,"draggable").options;
if(_5d(e)){
$(this).css("cursor",_5c.cursor);
}else{
$(this).css("cursor","");
}
}).bind("mouseleave.draggable",{target:this},function(e){
$(this).css("cursor","");
}).bind("mousedown.draggable",{target:this},function(e){
if(_5d(e)==false){
return;
}
$(this).css("cursor","");
var _5e=$(e.data.target).position();
var _5f=$(e.data.target).offset();
var _60={startPosition:$(e.data.target).css("position"),startLeft:_5e.left,startTop:_5e.top,left:_5e.left,top:_5e.top,startX:e.pageX,startY:e.pageY,width:$(e.data.target).outerWidth(),height:$(e.data.target).outerHeight(),offsetWidth:(e.pageX-_5f.left),offsetHeight:(e.pageY-_5f.top),target:e.data.target,parent:$(e.data.target).parent()[0]};
$.extend(e.data,_60);
var _61=$.data(e.data.target,"draggable").options;
if(_61.onBeforeDrag.call(e.data.target,e)==false){
return;
}
$(document).bind("mousedown.draggable",e.data,_43);
$(document).bind("mousemove.draggable",e.data,_49);
$(document).bind("mouseup.draggable",e.data,_4d);
$.fn.draggable.timer=setTimeout(function(){
$.fn.draggable.isDragging=true;
_43(e);
},_61.delay);
return false;
});
function _5d(e){
var _62=$.data(e.data.target,"draggable");
var _63=_62.handle;
var _64=$(_63).offset();
var _65=$(_63).outerWidth();
var _66=$(_63).outerHeight();
var t=e.pageY-_64.top;
var r=_64.left+_65-e.pageX;
var b=_64.top+_66-e.pageY;
var l=e.pageX-_64.left;
return Math.min(t,r,b,l)>_62.options.edge;
};
});
};
$.fn.draggable.methods={options:function(jq){
return $.data(jq[0],"draggable").options;
},proxy:function(jq){
return $.data(jq[0],"draggable").proxy;
},enable:function(jq){
return jq.each(function(){
$(this).draggable({disabled:false});
});
},disable:function(jq){
return jq.each(function(){
$(this).draggable({disabled:true});
});
}};
$.fn.draggable.parseOptions=function(_67){
var t=$(_67);
return $.extend({},$.parser.parseOptions(_67,["cursor","handle","axis",{"revert":"boolean","deltaX":"number","deltaY":"number","edge":"number","delay":"number"}]),{disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.draggable.defaults={proxy:null,revert:false,cursor:"move",deltaX:null,deltaY:null,handle:null,disabled:false,edge:0,axis:null,delay:100,onBeforeDrag:function(e){
},onStartDrag:function(e){
},onDrag:function(e){
},onEndDrag:function(e){
},onStopDrag:function(e){
}};
$.fn.draggable.isDragging=false;
})(jQuery);
(function($){
function _68(_69){
$(_69).addClass("droppable");
$(_69).bind("_dragenter",function(e,_6a){
$.data(_69,"droppable").options.onDragEnter.apply(_69,[e,_6a]);
});
$(_69).bind("_dragleave",function(e,_6b){
$.data(_69,"droppable").options.onDragLeave.apply(_69,[e,_6b]);
});
$(_69).bind("_dragover",function(e,_6c){
$.data(_69,"droppable").options.onDragOver.apply(_69,[e,_6c]);
});
$(_69).bind("_drop",function(e,_6d){
$.data(_69,"droppable").options.onDrop.apply(_69,[e,_6d]);
});
};
$.fn.droppable=function(_6e,_6f){
if(typeof _6e=="string"){
return $.fn.droppable.methods[_6e](this,_6f);
}
_6e=_6e||{};
return this.each(function(){
var _70=$.data(this,"droppable");
if(_70){
$.extend(_70.options,_6e);
}else{
_68(this);
$.data(this,"droppable",{options:$.extend({},$.fn.droppable.defaults,$.fn.droppable.parseOptions(this),_6e)});
}
});
};
$.fn.droppable.methods={options:function(jq){
return $.data(jq[0],"droppable").options;
},enable:function(jq){
return jq.each(function(){
$(this).droppable({disabled:false});
});
},disable:function(jq){
return jq.each(function(){
$(this).droppable({disabled:true});
});
}};
$.fn.droppable.parseOptions=function(_71){
var t=$(_71);
return $.extend({},$.parser.parseOptions(_71,["accept"]),{disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.droppable.defaults={accept:null,disabled:false,onDragEnter:function(e,_72){
},onDragOver:function(e,_73){
},onDragLeave:function(e,_74){
},onDrop:function(e,_75){
}};
})(jQuery);
(function($){
function _76(e){
var _77=e.data;
var _78=$.data(_77.target,"resizable").options;
if(_77.dir.indexOf("e")!=-1){
var _79=_77.startWidth+e.pageX-_77.startX;
_79=Math.min(Math.max(_79,_78.minWidth),_78.maxWidth);
_77.width=_79;
}
if(_77.dir.indexOf("s")!=-1){
var _7a=_77.startHeight+e.pageY-_77.startY;
_7a=Math.min(Math.max(_7a,_78.minHeight),_78.maxHeight);
_77.height=_7a;
}
if(_77.dir.indexOf("w")!=-1){
var _79=_77.startWidth-e.pageX+_77.startX;
_79=Math.min(Math.max(_79,_78.minWidth),_78.maxWidth);
_77.width=_79;
_77.left=_77.startLeft+_77.startWidth-_77.width;
}
if(_77.dir.indexOf("n")!=-1){
var _7a=_77.startHeight-e.pageY+_77.startY;
_7a=Math.min(Math.max(_7a,_78.minHeight),_78.maxHeight);
_77.height=_7a;
_77.top=_77.startTop+_77.startHeight-_77.height;
}
};
function _7b(e){
var _7c=e.data;
var t=$(_7c.target);
t.css({left:_7c.left,top:_7c.top});
if(t.outerWidth()!=_7c.width){
t._outerWidth(_7c.width);
}
if(t.outerHeight()!=_7c.height){
t._outerHeight(_7c.height);
}
};
function _7d(e){
$.fn.resizable.isResizing=true;
$.data(e.data.target,"resizable").options.onStartResize.call(e.data.target,e);
return false;
};
function _7e(e){
_76(e);
if($.data(e.data.target,"resizable").options.onResize.call(e.data.target,e)!=false){
_7b(e);
}
return false;
};
function _7f(e){
$.fn.resizable.isResizing=false;
_76(e,true);
_7b(e);
$.data(e.data.target,"resizable").options.onStopResize.call(e.data.target,e);
$(document).unbind(".resizable");
$("body").css("cursor","");
return false;
};
function _80(e){
var _81=$(e.data.target).resizable("options");
var tt=$(e.data.target);
var dir="";
var _82=tt.offset();
var _83=tt.outerWidth();
var _84=tt.outerHeight();
var _85=_81.edge;
if(e.pageY>_82.top&&e.pageY<_82.top+_85){
dir+="n";
}else{
if(e.pageY<_82.top+_84&&e.pageY>_82.top+_84-_85){
dir+="s";
}
}
if(e.pageX>_82.left&&e.pageX<_82.left+_85){
dir+="w";
}else{
if(e.pageX<_82.left+_83&&e.pageX>_82.left+_83-_85){
dir+="e";
}
}
var _86=_81.handles.split(",");
_86=$.map(_86,function(h){
return $.trim(h).toLowerCase();
});
if($.inArray("all",_86)>=0||$.inArray(dir,_86)>=0){
return dir;
}
for(var i=0;i<dir.length;i++){
var _87=$.inArray(dir.substr(i,1),_86);
if(_87>=0){
return _86[_87];
}
}
return "";
};
$.fn.resizable=function(_88,_89){
if(typeof _88=="string"){
return $.fn.resizable.methods[_88](this,_89);
}
return this.each(function(){
var _8a=null;
var _8b=$.data(this,"resizable");
if(_8b){
$(this).unbind(".resizable");
_8a=$.extend(_8b.options,_88||{});
}else{
_8a=$.extend({},$.fn.resizable.defaults,$.fn.resizable.parseOptions(this),_88||{});
$.data(this,"resizable",{options:_8a});
}
if(_8a.disabled==true){
return;
}
$(this).bind("mousemove.resizable",{target:this},function(e){
if($.fn.resizable.isResizing){
return;
}
var dir=_80(e);
$(e.data.target).css("cursor",dir?dir+"-resize":"");
}).bind("mouseleave.resizable",{target:this},function(e){
$(e.data.target).css("cursor","");
}).bind("mousedown.resizable",{target:this},function(e){
var dir=_80(e);
if(dir==""){
return;
}
function _8c(css){
var val=parseInt($(e.data.target).css(css));
if(isNaN(val)){
return 0;
}else{
return val;
}
};
var _8d={target:e.data.target,dir:dir,startLeft:_8c("left"),startTop:_8c("top"),left:_8c("left"),top:_8c("top"),startX:e.pageX,startY:e.pageY,startWidth:$(e.data.target).outerWidth(),startHeight:$(e.data.target).outerHeight(),width:$(e.data.target).outerWidth(),height:$(e.data.target).outerHeight(),deltaWidth:$(e.data.target).outerWidth()-$(e.data.target).width(),deltaHeight:$(e.data.target).outerHeight()-$(e.data.target).height()};
$(document).bind("mousedown.resizable",_8d,_7d);
$(document).bind("mousemove.resizable",_8d,_7e);
$(document).bind("mouseup.resizable",_8d,_7f);
$("body").css("cursor",dir+"-resize");
});
});
};
$.fn.resizable.methods={options:function(jq){
return $.data(jq[0],"resizable").options;
},enable:function(jq){
return jq.each(function(){
$(this).resizable({disabled:false});
});
},disable:function(jq){
return jq.each(function(){
$(this).resizable({disabled:true});
});
}};
$.fn.resizable.parseOptions=function(_8e){
var t=$(_8e);
return $.extend({},$.parser.parseOptions(_8e,["handles",{minWidth:"number",minHeight:"number",maxWidth:"number",maxHeight:"number",edge:"number"}]),{disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.resizable.defaults={disabled:false,handles:"n, e, s, w, ne, se, sw, nw, all",minWidth:10,minHeight:10,maxWidth:10000,maxHeight:10000,edge:5,onStartResize:function(e){
},onResize:function(e){
},onStopResize:function(e){
}};
$.fn.resizable.isResizing=false;
})(jQuery);
(function($){
function _8f(_90,_91){
var _92=$.data(_90,"linkbutton").options;
if(_91){
$.extend(_92,_91);
}
if(_92.width||_92.height||_92.fit){
var btn=$(_90);
var _93=btn.parent();
var _94=btn.is(":visible");
if(!_94){
var _95=$("<div style=\"display:none\"></div>").insertBefore(_90);
var _96={position:btn.css("position"),display:btn.css("display"),left:btn.css("left")};
btn.appendTo("body");
btn.css({position:"absolute",display:"inline-block",left:-20000});
}
btn._size(_92,_93);
var _97=btn.find(".l-btn-left");
_97.css("margin-top",0);
_97.css("margin-top",parseInt((btn.height()-_97.height())/2)+"px");
if(!_94){
btn.insertAfter(_95);
btn.css(_96);
_95.remove();
}
}
};
function _98(_99){
var _9a=$.data(_99,"linkbutton").options;
var t=$(_99).empty();
t.addClass("l-btn").removeClass("l-btn-plain l-btn-selected l-btn-plain-selected l-btn-outline");
t.removeClass("l-btn-small l-btn-medium l-btn-large").addClass("l-btn-"+_9a.size);
if(_9a.plain){
t.addClass("l-btn-plain");
}
if(_9a.outline){
t.addClass("l-btn-outline");
}
if(_9a.selected){
t.addClass(_9a.plain?"l-btn-selected l-btn-plain-selected":"l-btn-selected");
}
t.attr("group",_9a.group||"");
t.attr("id",_9a.id||"");
var _9b=$("<span class=\"l-btn-left\"></span>").appendTo(t);
if(_9a.text){
$("<span class=\"l-btn-text\"></span>").html(_9a.text).appendTo(_9b);
}else{
$("<span class=\"l-btn-text l-btn-empty\">&nbsp;</span>").appendTo(_9b);
}
if(_9a.iconCls){
$("<span class=\"l-btn-icon\">&nbsp;</span>").addClass(_9a.iconCls).appendTo(_9b);
_9b.addClass("l-btn-icon-"+_9a.iconAlign);
}
t.unbind(".linkbutton").bind("focus.linkbutton",function(){
if(!_9a.disabled){
$(this).addClass("l-btn-focus");
}
}).bind("blur.linkbutton",function(){
$(this).removeClass("l-btn-focus");
}).bind("click.linkbutton",function(){
if(!_9a.disabled){
if(_9a.toggle){
if(_9a.selected){
$(this).linkbutton("unselect");
}else{
$(this).linkbutton("select");
}
}
_9a.onClick.call(this);
}
});
_9c(_99,_9a.selected);
_9d(_99,_9a.disabled);
};
function _9c(_9e,_9f){
var _a0=$.data(_9e,"linkbutton").options;
if(_9f){
if(_a0.group){
$("a.l-btn[group=\""+_a0.group+"\"]").each(function(){
var o=$(this).linkbutton("options");
if(o.toggle){
$(this).removeClass("l-btn-selected l-btn-plain-selected");
o.selected=false;
}
});
}
$(_9e).addClass(_a0.plain?"l-btn-selected l-btn-plain-selected":"l-btn-selected");
_a0.selected=true;
}else{
if(!_a0.group){
$(_9e).removeClass("l-btn-selected l-btn-plain-selected");
_a0.selected=false;
}
}
};
function _9d(_a1,_a2){
var _a3=$.data(_a1,"linkbutton");
var _a4=_a3.options;
$(_a1).removeClass("l-btn-disabled l-btn-plain-disabled");
if(_a2){
_a4.disabled=true;
var _a5=$(_a1).attr("href");
if(_a5){
_a3.href=_a5;
$(_a1).attr("href","javascript:;");
}
if(_a1.onclick){
_a3.onclick=_a1.onclick;
_a1.onclick=null;
}
_a4.plain?$(_a1).addClass("l-btn-disabled l-btn-plain-disabled"):$(_a1).addClass("l-btn-disabled");
}else{
_a4.disabled=false;
if(_a3.href){
$(_a1).attr("href",_a3.href);
}
if(_a3.onclick){
_a1.onclick=_a3.onclick;
}
}
};
$.fn.linkbutton=function(_a6,_a7){
if(typeof _a6=="string"){
return $.fn.linkbutton.methods[_a6](this,_a7);
}
_a6=_a6||{};
return this.each(function(){
var _a8=$.data(this,"linkbutton");
if(_a8){
$.extend(_a8.options,_a6);
}else{
$.data(this,"linkbutton",{options:$.extend({},$.fn.linkbutton.defaults,$.fn.linkbutton.parseOptions(this),_a6)});
$(this).removeAttr("disabled");
$(this).bind("_resize",function(e,_a9){
if($(this).hasClass("easyui-fluid")||_a9){
_8f(this);
}
return false;
});
}
_98(this);
_8f(this);
});
};
$.fn.linkbutton.methods={options:function(jq){
return $.data(jq[0],"linkbutton").options;
},resize:function(jq,_aa){
return jq.each(function(){
_8f(this,_aa);
});
},enable:function(jq){
return jq.each(function(){
_9d(this,false);
});
},disable:function(jq){
return jq.each(function(){
_9d(this,true);
});
},select:function(jq){
return jq.each(function(){
_9c(this,true);
});
},unselect:function(jq){
return jq.each(function(){
_9c(this,false);
});
}};
$.fn.linkbutton.parseOptions=function(_ab){
var t=$(_ab);
return $.extend({},$.parser.parseOptions(_ab,["id","iconCls","iconAlign","group","size","text",{plain:"boolean",toggle:"boolean",selected:"boolean",outline:"boolean"}]),{disabled:(t.attr("disabled")?true:undefined),text:($.trim(t.html())||undefined),iconCls:(t.attr("icon")||t.attr("iconCls"))});
};
$.fn.linkbutton.defaults={id:null,disabled:false,toggle:false,selected:false,outline:false,group:null,plain:false,text:"",iconCls:null,iconAlign:"left",size:"small",onClick:function(){
}};
})(jQuery);
(function($){
function _ac(_ad){
var _ae=$.data(_ad,"pagination");
var _af=_ae.options;
var bb=_ae.bb={};
var _b0=$(_ad).addClass("pagination").html("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tr></tr></table>");
var tr=_b0.find("tr");
var aa=$.extend([],_af.layout);
if(!_af.showPageList){
_b1(aa,"list");
}
if(!_af.showPageInfo){
_b1(aa,"info");
}
if(!_af.showRefresh){
_b1(aa,"refresh");
}
if(aa[0]=="sep"){
aa.shift();
}
if(aa[aa.length-1]=="sep"){
aa.pop();
}
for(var _b2=0;_b2<aa.length;_b2++){
var _b3=aa[_b2];
if(_b3=="list"){
var ps=$("<select class=\"pagination-page-list\"></select>");
ps.bind("change",function(){
_af.pageSize=parseInt($(this).val());
_af.onChangePageSize.call(_ad,_af.pageSize);
_b9(_ad,_af.pageNumber);
});
for(var i=0;i<_af.pageList.length;i++){
$("<option></option>").text(_af.pageList[i]).appendTo(ps);
}
$("<td></td>").append(ps).appendTo(tr);
}else{
if(_b3=="sep"){
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
}else{
if(_b3=="first"){
bb.first=_b4("first");
}else{
if(_b3=="prev"){
bb.prev=_b4("prev");
}else{
if(_b3=="next"){
bb.next=_b4("next");
}else{
if(_b3=="last"){
bb.last=_b4("last");
}else{
if(_b3=="manual"){
$("<span style=\"padding-left:6px;\"></span>").html(_af.beforePageText).appendTo(tr).wrap("<td></td>");
bb.num=$("<input class=\"pagination-num\" type=\"text\" value=\"1\" size=\"2\">").appendTo(tr).wrap("<td></td>");
bb.num.unbind(".pagination").bind("keydown.pagination",function(e){
if(e.keyCode==13){
var _b5=parseInt($(this).val())||1;
_b9(_ad,_b5);
return false;
}
});
bb.after=$("<span style=\"padding-right:6px;\"></span>").appendTo(tr).wrap("<td></td>");
}else{
if(_b3=="refresh"){
bb.refresh=_b4("refresh");
}else{
if(_b3=="links"){
$("<td class=\"pagination-links\"></td>").appendTo(tr);
}else{
if(_b3=="info"){
if(_b2==aa.length-1){
$("<div class=\"pagination-info\"></div>").appendTo(_b0);
}else{
$("<td><div class=\"pagination-info\"></div></td>").appendTo(tr);
}
}
}
}
}
}
}
}
}
}
}
}
if(_af.buttons){
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
if($.isArray(_af.buttons)){
for(var i=0;i<_af.buttons.length;i++){
var btn=_af.buttons[i];
if(btn=="-"){
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
var a=$("<a href=\"javascript:;\"></a>").appendTo(td);
a[0].onclick=eval(btn.handler||function(){
});
a.linkbutton($.extend({},btn,{plain:true}));
}
}
}else{
var td=$("<td></td>").appendTo(tr);
$(_af.buttons).appendTo(td).show();
}
}
$("<div style=\"clear:both;\"></div>").appendTo(_b0);
function _b4(_b6){
var btn=_af.nav[_b6];
var a=$("<a href=\"javascript:;\"></a>").appendTo(tr);
a.wrap("<td></td>");
a.linkbutton({iconCls:btn.iconCls,plain:true}).unbind(".pagination").bind("click.pagination",function(){
btn.handler.call(_ad);
});
return a;
};
function _b1(aa,_b7){
var _b8=$.inArray(_b7,aa);
if(_b8>=0){
aa.splice(_b8,1);
}
return aa;
};
};
function _b9(_ba,_bb){
var _bc=$.data(_ba,"pagination").options;
_bd(_ba,{pageNumber:_bb});
_bc.onSelectPage.call(_ba,_bc.pageNumber,_bc.pageSize);
};
function _bd(_be,_bf){
var _c0=$.data(_be,"pagination");
var _c1=_c0.options;
var bb=_c0.bb;
$.extend(_c1,_bf||{});
var ps=$(_be).find("select.pagination-page-list");
if(ps.length){
ps.val(_c1.pageSize+"");
_c1.pageSize=parseInt(ps.val());
}
var _c2=Math.ceil(_c1.total/_c1.pageSize)||1;
if(_c1.pageNumber<1){
_c1.pageNumber=1;
}
if(_c1.pageNumber>_c2){
_c1.pageNumber=_c2;
}
if(_c1.total==0){
_c1.pageNumber=0;
_c2=0;
}
if(bb.num){
bb.num.val(_c1.pageNumber);
}
if(bb.after){
bb.after.html(_c1.afterPageText.replace(/{pages}/,_c2));
}
var td=$(_be).find("td.pagination-links");
if(td.length){
td.empty();
var _c3=_c1.pageNumber-Math.floor(_c1.links/2);
if(_c3<1){
_c3=1;
}
var _c4=_c3+_c1.links-1;
if(_c4>_c2){
_c4=_c2;
}
_c3=_c4-_c1.links+1;
if(_c3<1){
_c3=1;
}
for(var i=_c3;i<=_c4;i++){
var a=$("<a class=\"pagination-link\" href=\"javascript:;\"></a>").appendTo(td);
a.linkbutton({plain:true,text:i});
if(i==_c1.pageNumber){
a.linkbutton("select");
}else{
a.unbind(".pagination").bind("click.pagination",{pageNumber:i},function(e){
_b9(_be,e.data.pageNumber);
});
}
}
}
var _c5=_c1.displayMsg;
_c5=_c5.replace(/{from}/,_c1.total==0?0:_c1.pageSize*(_c1.pageNumber-1)+1);
_c5=_c5.replace(/{to}/,Math.min(_c1.pageSize*(_c1.pageNumber),_c1.total));
_c5=_c5.replace(/{total}/,_c1.total);
$(_be).find("div.pagination-info").html(_c5);
if(bb.first){
bb.first.linkbutton({disabled:((!_c1.total)||_c1.pageNumber==1)});
}
if(bb.prev){
bb.prev.linkbutton({disabled:((!_c1.total)||_c1.pageNumber==1)});
}
if(bb.next){
bb.next.linkbutton({disabled:(_c1.pageNumber==_c2)});
}
if(bb.last){
bb.last.linkbutton({disabled:(_c1.pageNumber==_c2)});
}
_c6(_be,_c1.loading);
};
function _c6(_c7,_c8){
var _c9=$.data(_c7,"pagination");
var _ca=_c9.options;
_ca.loading=_c8;
if(_ca.showRefresh&&_c9.bb.refresh){
_c9.bb.refresh.linkbutton({iconCls:(_ca.loading?"pagination-loading":"pagination-load")});
}
};
$.fn.pagination=function(_cb,_cc){
if(typeof _cb=="string"){
return $.fn.pagination.methods[_cb](this,_cc);
}
_cb=_cb||{};
return this.each(function(){
var _cd;
var _ce=$.data(this,"pagination");
if(_ce){
_cd=$.extend(_ce.options,_cb);
}else{
_cd=$.extend({},$.fn.pagination.defaults,$.fn.pagination.parseOptions(this),_cb);
$.data(this,"pagination",{options:_cd});
}
_ac(this);
_bd(this);
});
};
$.fn.pagination.methods={options:function(jq){
return $.data(jq[0],"pagination").options;
},loading:function(jq){
return jq.each(function(){
_c6(this,true);
});
},loaded:function(jq){
return jq.each(function(){
_c6(this,false);
});
},refresh:function(jq,_cf){
return jq.each(function(){
_bd(this,_cf);
});
},select:function(jq,_d0){
return jq.each(function(){
_b9(this,_d0);
});
}};
$.fn.pagination.parseOptions=function(_d1){
var t=$(_d1);
return $.extend({},$.parser.parseOptions(_d1,[{total:"number",pageSize:"number",pageNumber:"number",links:"number"},{loading:"boolean",showPageList:"boolean",showPageInfo:"boolean",showRefresh:"boolean"}]),{pageList:(t.attr("pageList")?eval(t.attr("pageList")):undefined)});
};
$.fn.pagination.defaults={total:1,pageSize:10,pageNumber:1,pageList:[10,20,30,50],loading:false,buttons:null,showPageList:true,showPageInfo:true,showRefresh:true,links:10,layout:["list","sep","first","prev","sep","manual","sep","next","last","sep","refresh","info"],onSelectPage:function(_d2,_d3){
},onBeforeRefresh:function(_d4,_d5){
},onRefresh:function(_d6,_d7){
},onChangePageSize:function(_d8){
},beforePageText:"Page",afterPageText:"of {pages}",displayMsg:"Displaying {from} to {to} of {total} items",nav:{first:{iconCls:"pagination-first",handler:function(){
var _d9=$(this).pagination("options");
if(_d9.pageNumber>1){
$(this).pagination("select",1);
}
}},prev:{iconCls:"pagination-prev",handler:function(){
var _da=$(this).pagination("options");
if(_da.pageNumber>1){
$(this).pagination("select",_da.pageNumber-1);
}
}},next:{iconCls:"pagination-next",handler:function(){
var _db=$(this).pagination("options");
var _dc=Math.ceil(_db.total/_db.pageSize);
if(_db.pageNumber<_dc){
$(this).pagination("select",_db.pageNumber+1);
}
}},last:{iconCls:"pagination-last",handler:function(){
var _dd=$(this).pagination("options");
var _de=Math.ceil(_dd.total/_dd.pageSize);
if(_dd.pageNumber<_de){
$(this).pagination("select",_de);
}
}},refresh:{iconCls:"pagination-refresh",handler:function(){
var _df=$(this).pagination("options");
if(_df.onBeforeRefresh.call(this,_df.pageNumber,_df.pageSize)!=false){
$(this).pagination("select",_df.pageNumber);
_df.onRefresh.call(this,_df.pageNumber,_df.pageSize);
}
}}}};
})(jQuery);
(function($){
function _e0(_e1){
var _e2=$(_e1);
_e2.addClass("tree");
return _e2;
};
function _e3(_e4){
var _e5=$.data(_e4,"tree").options;
$(_e4).unbind().bind("mouseover",function(e){
var tt=$(e.target);
var _e6=tt.closest("div.tree-node");
if(!_e6.length){
return;
}
_e6.addClass("tree-node-hover");
if(tt.hasClass("tree-hit")){
if(tt.hasClass("tree-expanded")){
tt.addClass("tree-expanded-hover");
}else{
tt.addClass("tree-collapsed-hover");
}
}
e.stopPropagation();
}).bind("mouseout",function(e){
var tt=$(e.target);
var _e7=tt.closest("div.tree-node");
if(!_e7.length){
return;
}
_e7.removeClass("tree-node-hover");
if(tt.hasClass("tree-hit")){
if(tt.hasClass("tree-expanded")){
tt.removeClass("tree-expanded-hover");
}else{
tt.removeClass("tree-collapsed-hover");
}
}
e.stopPropagation();
}).bind("click",function(e){
var tt=$(e.target);
var _e8=tt.closest("div.tree-node");
if(!_e8.length){
return;
}
if(tt.hasClass("tree-hit")){
_146(_e4,_e8[0]);
return false;
}else{
if(tt.hasClass("tree-checkbox")){
_10d(_e4,_e8[0]);
return false;
}else{
_189(_e4,_e8[0]);
_e5.onClick.call(_e4,_eb(_e4,_e8[0]));
}
}
e.stopPropagation();
}).bind("dblclick",function(e){
var _e9=$(e.target).closest("div.tree-node");
if(!_e9.length){
return;
}
_189(_e4,_e9[0]);
_e5.onDblClick.call(_e4,_eb(_e4,_e9[0]));
e.stopPropagation();
}).bind("contextmenu",function(e){
var _ea=$(e.target).closest("div.tree-node");
if(!_ea.length){
return;
}
_e5.onContextMenu.call(_e4,e,_eb(_e4,_ea[0]));
e.stopPropagation();
});
};
function _ec(_ed){
var _ee=$.data(_ed,"tree").options;
_ee.dnd=false;
var _ef=$(_ed).find("div.tree-node");
_ef.draggable("disable");
_ef.css("cursor","pointer");
};
function _f0(_f1){
var _f2=$.data(_f1,"tree");
var _f3=_f2.options;
var _f4=_f2.tree;
_f2.disabledNodes=[];
_f3.dnd=true;
_f4.find("div.tree-node").draggable({disabled:false,revert:true,cursor:"pointer",proxy:function(_f5){
var p=$("<div class=\"tree-node-proxy\"></div>").appendTo("body");
p.html("<span class=\"tree-dnd-icon tree-dnd-no\">&nbsp;</span>"+$(_f5).find(".tree-title").html());
p.hide();
return p;
},deltaX:15,deltaY:15,onBeforeDrag:function(e){
if(_f3.onBeforeDrag.call(_f1,_eb(_f1,this))==false){
return false;
}
if($(e.target).hasClass("tree-hit")||$(e.target).hasClass("tree-checkbox")){
return false;
}
if(e.which!=1){
return false;
}
var _f6=$(this).find("span.tree-indent");
if(_f6.length){
e.data.offsetWidth-=_f6.length*_f6.width();
}
},onStartDrag:function(e){
$(this).next("ul").find("div.tree-node").each(function(){
$(this).droppable("disable");
_f2.disabledNodes.push(this);
});
$(this).draggable("proxy").css({left:-10000,top:-10000});
_f3.onStartDrag.call(_f1,_eb(_f1,this));
var _f7=_eb(_f1,this);
if(_f7.id==undefined){
_f7.id="easyui_tree_node_id_temp";
_12d(_f1,_f7);
}
_f2.draggingNodeId=_f7.id;
},onDrag:function(e){
var x1=e.pageX,y1=e.pageY,x2=e.data.startX,y2=e.data.startY;
var d=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
if(d>3){
$(this).draggable("proxy").show();
}
this.pageY=e.pageY;
},onStopDrag:function(){
for(var i=0;i<_f2.disabledNodes.length;i++){
$(_f2.disabledNodes[i]).droppable("enable");
}
_f2.disabledNodes=[];
var _f8=_183(_f1,_f2.draggingNodeId);
if(_f8&&_f8.id=="easyui_tree_node_id_temp"){
_f8.id="";
_12d(_f1,_f8);
}
_f3.onStopDrag.call(_f1,_f8);
}}).droppable({accept:"div.tree-node",onDragEnter:function(e,_f9){
if(_f3.onDragEnter.call(_f1,this,_fa(_f9))==false){
_fb(_f9,false);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
$(this).droppable("disable");
_f2.disabledNodes.push(this);
}
},onDragOver:function(e,_fc){
if($(this).droppable("options").disabled){
return;
}
var _fd=_fc.pageY;
var top=$(this).offset().top;
var _fe=top+$(this).outerHeight();
_fb(_fc,true);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
if(_fd>top+(_fe-top)/2){
if(_fe-_fd<5){
$(this).addClass("tree-node-bottom");
}else{
$(this).addClass("tree-node-append");
}
}else{
if(_fd-top<5){
$(this).addClass("tree-node-top");
}else{
$(this).addClass("tree-node-append");
}
}
if(_f3.onDragOver.call(_f1,this,_fa(_fc))==false){
_fb(_fc,false);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
$(this).droppable("disable");
_f2.disabledNodes.push(this);
}
},onDragLeave:function(e,_ff){
_fb(_ff,false);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
_f3.onDragLeave.call(_f1,this,_fa(_ff));
},onDrop:function(e,_100){
var dest=this;
var _101,_102;
if($(this).hasClass("tree-node-append")){
_101=_103;
_102="append";
}else{
_101=_104;
_102=$(this).hasClass("tree-node-top")?"top":"bottom";
}
if(_f3.onBeforeDrop.call(_f1,dest,_fa(_100),_102)==false){
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
return;
}
_101(_100,dest,_102);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
}});
function _fa(_105,pop){
return $(_105).closest("ul.tree").tree(pop?"pop":"getData",_105);
};
function _fb(_106,_107){
var icon=$(_106).draggable("proxy").find("span.tree-dnd-icon");
icon.removeClass("tree-dnd-yes tree-dnd-no").addClass(_107?"tree-dnd-yes":"tree-dnd-no");
};
function _103(_108,dest){
if(_eb(_f1,dest).state=="closed"){
_13e(_f1,dest,function(){
_109();
});
}else{
_109();
}
function _109(){
var node=_fa(_108,true);
$(_f1).tree("append",{parent:dest,data:[node]});
_f3.onDrop.call(_f1,dest,node,"append");
};
};
function _104(_10a,dest,_10b){
var _10c={};
if(_10b=="top"){
_10c.before=dest;
}else{
_10c.after=dest;
}
var node=_fa(_10a,true);
_10c.data=node;
$(_f1).tree("insert",_10c);
_f3.onDrop.call(_f1,dest,node,_10b);
};
};
function _10d(_10e,_10f,_110,_111){
var _112=$.data(_10e,"tree");
var opts=_112.options;
if(!opts.checkbox){
return;
}
var _113=_eb(_10e,_10f);
if(!_113.checkState){
return;
}
var ck=$(_10f).find(".tree-checkbox");
if(_110==undefined){
if(ck.hasClass("tree-checkbox1")){
_110=false;
}else{
if(ck.hasClass("tree-checkbox0")){
_110=true;
}else{
if(_113._checked==undefined){
_113._checked=$(_10f).find(".tree-checkbox").hasClass("tree-checkbox1");
}
_110=!_113._checked;
}
}
}
_113._checked=_110;
if(_110){
if(ck.hasClass("tree-checkbox1")){
return;
}
}else{
if(ck.hasClass("tree-checkbox0")){
return;
}
}
if(!_111){
if(opts.onBeforeCheck.call(_10e,_113,_110)==false){
return;
}
}
if(opts.cascadeCheck){
_114(_10e,_113,_110);
_115(_10e,_113);
}else{
_116(_10e,_113,_110?"1":"0");
}
if(!_111){
opts.onCheck.call(_10e,_113,_110);
}
};
function _114(_117,_118,_119){
var opts=$.data(_117,"tree").options;
var flag=_119?1:0;
_116(_117,_118,flag);
if(opts.deepCheck){
$.easyui.forEach(_118.children||[],true,function(n){
_116(_117,n,flag);
});
}else{
var _11a=[];
if(_118.children&&_118.children.length){
_11a.push(_118);
}
$.easyui.forEach(_118.children||[],true,function(n){
if(!n.hidden){
_116(_117,n,flag);
if(n.children&&n.children.length){
_11a.push(n);
}
}
});
for(var i=_11a.length-1;i>=0;i--){
var node=_11a[i];
_116(_117,node,_11b(node));
}
}
};
function _116(_11c,_11d,flag){
var opts=$.data(_11c,"tree").options;
if(!_11d.checkState||flag==undefined){
return;
}
if(_11d.hidden&&!opts.deepCheck){
return;
}
var ck=$("#"+_11d.domId).find(".tree-checkbox");
_11d.checkState=["unchecked","checked","indeterminate"][flag];
_11d.checked=(_11d.checkState=="checked");
ck.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");
ck.addClass("tree-checkbox"+flag);
};
function _115(_11e,_11f){
var pd=_120(_11e,$("#"+_11f.domId)[0]);
if(pd){
_116(_11e,pd,_11b(pd));
_115(_11e,pd);
}
};
function _11b(row){
var c0=0;
var c1=0;
var len=0;
$.easyui.forEach(row.children||[],false,function(r){
if(r.checkState){
len++;
if(r.checkState=="checked"){
c1++;
}else{
if(r.checkState=="unchecked"){
c0++;
}
}
}
});
if(len==0){
return undefined;
}
var flag=0;
if(c0==len){
flag=0;
}else{
if(c1==len){
flag=1;
}else{
flag=2;
}
}
return flag;
};
function _121(_122,_123){
var opts=$.data(_122,"tree").options;
if(!opts.checkbox){
return;
}
var node=$(_123);
var ck=node.find(".tree-checkbox");
var _124=_eb(_122,_123);
if(opts.view.hasCheckbox(_122,_124)){
if(!ck.length){
_124.checkState=_124.checkState||"unchecked";
$("<span class=\"tree-checkbox\"></span>").insertBefore(node.find(".tree-title"));
}
if(_124.checkState=="checked"){
_10d(_122,_123,true,true);
}else{
if(_124.checkState=="unchecked"){
_10d(_122,_123,false,true);
}else{
var flag=_11b(_124);
if(flag===0){
_10d(_122,_123,false,true);
}else{
if(flag===1){
_10d(_122,_123,true,true);
}
}
}
}
}else{
ck.remove();
_124.checkState=undefined;
_124.checked=undefined;
_115(_122,_124);
}
};
function _125(_126,ul,data,_127,_128){
var _129=$.data(_126,"tree");
var opts=_129.options;
var _12a=$(ul).prevAll("div.tree-node:first");
data=opts.loadFilter.call(_126,data,_12a[0]);
var _12b=_12c(_126,"domId",_12a.attr("id"));
if(!_127){
_12b?_12b.children=data:_129.data=data;
$(ul).empty();
}else{
if(_12b){
_12b.children?_12b.children=_12b.children.concat(data):_12b.children=data;
}else{
_129.data=_129.data.concat(data);
}
}
opts.view.render.call(opts.view,_126,ul,data);
if(opts.dnd){
_f0(_126);
}
if(_12b){
_12d(_126,_12b);
}
for(var i=0;i<_129.tmpIds.length;i++){
_10d(_126,$("#"+_129.tmpIds[i])[0],true,true);
}
_129.tmpIds=[];
setTimeout(function(){
_12e(_126,_126);
},0);
if(!_128){
opts.onLoadSuccess.call(_126,_12b,data);
}
};
function _12e(_12f,ul,_130){
var opts=$.data(_12f,"tree").options;
if(opts.lines){
$(_12f).addClass("tree-lines");
}else{
$(_12f).removeClass("tree-lines");
return;
}
if(!_130){
_130=true;
$(_12f).find("span.tree-indent").removeClass("tree-line tree-join tree-joinbottom");
$(_12f).find("div.tree-node").removeClass("tree-node-last tree-root-first tree-root-one");
var _131=$(_12f).tree("getRoots");
if(_131.length>1){
$(_131[0].target).addClass("tree-root-first");
}else{
if(_131.length==1){
$(_131[0].target).addClass("tree-root-one");
}
}
}
$(ul).children("li").each(function(){
var node=$(this).children("div.tree-node");
var ul=node.next("ul");
if(ul.length){
if($(this).next().length){
_132(node);
}
_12e(_12f,ul,_130);
}else{
_133(node);
}
});
var _134=$(ul).children("li:last").children("div.tree-node").addClass("tree-node-last");
_134.children("span.tree-join").removeClass("tree-join").addClass("tree-joinbottom");
function _133(node,_135){
var icon=node.find("span.tree-icon");
icon.prev("span.tree-indent").addClass("tree-join");
};
function _132(node){
var _136=node.find("span.tree-indent, span.tree-hit").length;
node.next().find("div.tree-node").each(function(){
$(this).children("span:eq("+(_136-1)+")").addClass("tree-line");
});
};
};
function _137(_138,ul,_139,_13a){
var opts=$.data(_138,"tree").options;
_139=$.extend({},opts.queryParams,_139||{});
var _13b=null;
if(_138!=ul){
var node=$(ul).prev();
_13b=_eb(_138,node[0]);
}
if(opts.onBeforeLoad.call(_138,_13b,_139)==false){
return;
}
var _13c=$(ul).prev().children("span.tree-folder");
_13c.addClass("tree-loading");
var _13d=opts.loader.call(_138,_139,function(data){
_13c.removeClass("tree-loading");
_125(_138,ul,data);
if(_13a){
_13a();
}
},function(){
_13c.removeClass("tree-loading");
opts.onLoadError.apply(_138,arguments);
if(_13a){
_13a();
}
});
if(_13d==false){
_13c.removeClass("tree-loading");
}
};
function _13e(_13f,_140,_141){
var opts=$.data(_13f,"tree").options;
var hit=$(_140).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
return;
}
var node=_eb(_13f,_140);
if(opts.onBeforeExpand.call(_13f,node)==false){
return;
}
hit.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded");
hit.next().addClass("tree-folder-open");
var ul=$(_140).next();
if(ul.length){
if(opts.animate){
ul.slideDown("normal",function(){
node.state="open";
opts.onExpand.call(_13f,node);
if(_141){
_141();
}
});
}else{
ul.css("display","block");
node.state="open";
opts.onExpand.call(_13f,node);
if(_141){
_141();
}
}
}else{
var _142=$("<ul style=\"display:none\"></ul>").insertAfter(_140);
_137(_13f,_142[0],{id:node.id},function(){
if(_142.is(":empty")){
_142.remove();
}
if(opts.animate){
_142.slideDown("normal",function(){
node.state="open";
opts.onExpand.call(_13f,node);
if(_141){
_141();
}
});
}else{
_142.css("display","block");
node.state="open";
opts.onExpand.call(_13f,node);
if(_141){
_141();
}
}
});
}
};
function _143(_144,_145){
var opts=$.data(_144,"tree").options;
var hit=$(_145).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-collapsed")){
return;
}
var node=_eb(_144,_145);
if(opts.onBeforeCollapse.call(_144,node)==false){
return;
}
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
hit.next().removeClass("tree-folder-open");
var ul=$(_145).next();
if(opts.animate){
ul.slideUp("normal",function(){
node.state="closed";
opts.onCollapse.call(_144,node);
});
}else{
ul.css("display","none");
node.state="closed";
opts.onCollapse.call(_144,node);
}
};
function _146(_147,_148){
var hit=$(_148).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
_143(_147,_148);
}else{
_13e(_147,_148);
}
};
function _149(_14a,_14b){
var _14c=_14d(_14a,_14b);
if(_14b){
_14c.unshift(_eb(_14a,_14b));
}
for(var i=0;i<_14c.length;i++){
_13e(_14a,_14c[i].target);
}
};
function _14e(_14f,_150){
var _151=[];
var p=_120(_14f,_150);
while(p){
_151.unshift(p);
p=_120(_14f,p.target);
}
for(var i=0;i<_151.length;i++){
_13e(_14f,_151[i].target);
}
};
function _152(_153,_154){
var c=$(_153).parent();
while(c[0].tagName!="BODY"&&c.css("overflow-y")!="auto"){
c=c.parent();
}
var n=$(_154);
var ntop=n.offset().top;
if(c[0].tagName!="BODY"){
var ctop=c.offset().top;
if(ntop<ctop){
c.scrollTop(c.scrollTop()+ntop-ctop);
}else{
if(ntop+n.outerHeight()>ctop+c.outerHeight()-18){
c.scrollTop(c.scrollTop()+ntop+n.outerHeight()-ctop-c.outerHeight()+18);
}
}
}else{
c.scrollTop(ntop);
}
};
function _155(_156,_157){
var _158=_14d(_156,_157);
if(_157){
_158.unshift(_eb(_156,_157));
}
for(var i=0;i<_158.length;i++){
_143(_156,_158[i].target);
}
};
function _159(_15a,_15b){
var node=$(_15b.parent);
var data=_15b.data;
if(!data){
return;
}
data=$.isArray(data)?data:[data];
if(!data.length){
return;
}
var ul;
if(node.length==0){
ul=$(_15a);
}else{
if(_15c(_15a,node[0])){
var _15d=node.find("span.tree-icon");
_15d.removeClass("tree-file").addClass("tree-folder tree-folder-open");
var hit=$("<span class=\"tree-hit tree-expanded\"></span>").insertBefore(_15d);
if(hit.prev().length){
hit.prev().remove();
}
}
ul=node.next();
if(!ul.length){
ul=$("<ul></ul>").insertAfter(node);
}
}
_125(_15a,ul[0],data,true,true);
};
function _15e(_15f,_160){
var ref=_160.before||_160.after;
var _161=_120(_15f,ref);
var data=_160.data;
if(!data){
return;
}
data=$.isArray(data)?data:[data];
if(!data.length){
return;
}
_159(_15f,{parent:(_161?_161.target:null),data:data});
var _162=_161?_161.children:$(_15f).tree("getRoots");
for(var i=0;i<_162.length;i++){
if(_162[i].domId==$(ref).attr("id")){
for(var j=data.length-1;j>=0;j--){
_162.splice((_160.before?i:(i+1)),0,data[j]);
}
_162.splice(_162.length-data.length,data.length);
break;
}
}
var li=$();
for(var i=0;i<data.length;i++){
li=li.add($("#"+data[i].domId).parent());
}
if(_160.before){
li.insertBefore($(ref).parent());
}else{
li.insertAfter($(ref).parent());
}
};
function _163(_164,_165){
var _166=del(_165);
$(_165).parent().remove();
if(_166){
if(!_166.children||!_166.children.length){
var node=$(_166.target);
node.find(".tree-icon").removeClass("tree-folder").addClass("tree-file");
node.find(".tree-hit").remove();
$("<span class=\"tree-indent\"></span>").prependTo(node);
node.next().remove();
}
_12d(_164,_166);
}
_12e(_164,_164);
function del(_167){
var id=$(_167).attr("id");
var _168=_120(_164,_167);
var cc=_168?_168.children:$.data(_164,"tree").data;
for(var i=0;i<cc.length;i++){
if(cc[i].domId==id){
cc.splice(i,1);
break;
}
}
return _168;
};
};
function _12d(_169,_16a){
var opts=$.data(_169,"tree").options;
var node=$(_16a.target);
var data=_eb(_169,_16a.target);
if(data.iconCls){
node.find(".tree-icon").removeClass(data.iconCls);
}
$.extend(data,_16a);
node.find(".tree-title").html(opts.formatter.call(_169,data));
if(data.iconCls){
node.find(".tree-icon").addClass(data.iconCls);
}
_121(_169,_16a.target);
};
function _16b(_16c,_16d){
if(_16d){
var p=_120(_16c,_16d);
while(p){
_16d=p.target;
p=_120(_16c,_16d);
}
return _eb(_16c,_16d);
}else{
var _16e=_16f(_16c);
return _16e.length?_16e[0]:null;
}
};
function _16f(_170){
var _171=$.data(_170,"tree").data;
for(var i=0;i<_171.length;i++){
_172(_171[i]);
}
return _171;
};
function _14d(_173,_174){
var _175=[];
var n=_eb(_173,_174);
var data=n?(n.children||[]):$.data(_173,"tree").data;
$.easyui.forEach(data,true,function(node){
_175.push(_172(node));
});
return _175;
};
function _120(_176,_177){
var p=$(_177).closest("ul").prevAll("div.tree-node:first");
return _eb(_176,p[0]);
};
function _178(_179,_17a){
_17a=_17a||"checked";
if(!$.isArray(_17a)){
_17a=[_17a];
}
var _17b=[];
$.easyui.forEach($.data(_179,"tree").data,true,function(n){
if(n.checkState&&$.easyui.indexOfArray(_17a,n.checkState)!=-1){
_17b.push(_172(n));
}
});
return _17b;
};
function _17c(_17d){
var node=$(_17d).find("div.tree-node-selected");
return node.length?_eb(_17d,node[0]):null;
};
function _17e(_17f,_180){
var data=_eb(_17f,_180);
if(data&&data.children){
$.easyui.forEach(data.children,true,function(node){
_172(node);
});
}
return data;
};
function _eb(_181,_182){
return _12c(_181,"domId",$(_182).attr("id"));
};
function _183(_184,id){
return _12c(_184,"id",id);
};
function _12c(_185,_186,_187){
var data=$.data(_185,"tree").data;
var _188=null;
$.easyui.forEach(data,true,function(node){
if(node[_186]==_187){
_188=_172(node);
return false;
}
});
return _188;
};
function _172(node){
node.target=$("#"+node.domId)[0];
return node;
};
function _189(_18a,_18b){
var opts=$.data(_18a,"tree").options;
var node=_eb(_18a,_18b);
if(opts.onBeforeSelect.call(_18a,node)==false){
return;
}
$(_18a).find("div.tree-node-selected").removeClass("tree-node-selected");
$(_18b).addClass("tree-node-selected");
opts.onSelect.call(_18a,node);
};
function _15c(_18c,_18d){
return $(_18d).children("span.tree-hit").length==0;
};
function _18e(_18f,_190){
var opts=$.data(_18f,"tree").options;
var node=_eb(_18f,_190);
if(opts.onBeforeEdit.call(_18f,node)==false){
return;
}
$(_190).css("position","relative");
var nt=$(_190).find(".tree-title");
var _191=nt.outerWidth();
nt.empty();
var _192=$("<input class=\"tree-editor\">").appendTo(nt);
_192.val(node.text).focus();
_192.width(_191+20);
_192._outerHeight(18);
_192.bind("click",function(e){
return false;
}).bind("mousedown",function(e){
e.stopPropagation();
}).bind("mousemove",function(e){
e.stopPropagation();
}).bind("keydown",function(e){
if(e.keyCode==13){
_193(_18f,_190);
return false;
}else{
if(e.keyCode==27){
_197(_18f,_190);
return false;
}
}
}).bind("blur",function(e){
e.stopPropagation();
_193(_18f,_190);
});
};
function _193(_194,_195){
var opts=$.data(_194,"tree").options;
$(_195).css("position","");
var _196=$(_195).find("input.tree-editor");
var val=_196.val();
_196.remove();
var node=_eb(_194,_195);
node.text=val;
_12d(_194,node);
opts.onAfterEdit.call(_194,node);
};
function _197(_198,_199){
var opts=$.data(_198,"tree").options;
$(_199).css("position","");
$(_199).find("input.tree-editor").remove();
var node=_eb(_198,_199);
_12d(_198,node);
opts.onCancelEdit.call(_198,node);
};
function _19a(_19b,q){
var _19c=$.data(_19b,"tree");
var opts=_19c.options;
var ids={};
$.easyui.forEach(_19c.data,true,function(node){
if(opts.filter.call(_19b,q,node)){
$("#"+node.domId).removeClass("tree-node-hidden");
ids[node.domId]=1;
node.hidden=false;
}else{
$("#"+node.domId).addClass("tree-node-hidden");
node.hidden=true;
}
});
for(var id in ids){
_19d(id);
}
function _19d(_19e){
var p=$(_19b).tree("getParent",$("#"+_19e)[0]);
while(p){
$(p.target).removeClass("tree-node-hidden");
p.hidden=false;
p=$(_19b).tree("getParent",p.target);
}
};
};
$.fn.tree=function(_19f,_1a0){
if(typeof _19f=="string"){
return $.fn.tree.methods[_19f](this,_1a0);
}
var _19f=_19f||{};
return this.each(function(){
var _1a1=$.data(this,"tree");
var opts;
if(_1a1){
opts=$.extend(_1a1.options,_19f);
_1a1.options=opts;
}else{
opts=$.extend({},$.fn.tree.defaults,$.fn.tree.parseOptions(this),_19f);
$.data(this,"tree",{options:opts,tree:_e0(this),data:[],tmpIds:[]});
var data=$.fn.tree.parseData(this);
if(data.length){
_125(this,this,data);
}
}
_e3(this);
if(opts.data){
_125(this,this,$.extend(true,[],opts.data));
}
_137(this,this);
});
};
$.fn.tree.methods={options:function(jq){
return $.data(jq[0],"tree").options;
},loadData:function(jq,data){
return jq.each(function(){
_125(this,this,data);
});
},getNode:function(jq,_1a2){
return _eb(jq[0],_1a2);
},getData:function(jq,_1a3){
return _17e(jq[0],_1a3);
},reload:function(jq,_1a4){
return jq.each(function(){
if(_1a4){
var node=$(_1a4);
var hit=node.children("span.tree-hit");
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
node.next().remove();
_13e(this,_1a4);
}else{
$(this).empty();
_137(this,this);
}
});
},getRoot:function(jq,_1a5){
return _16b(jq[0],_1a5);
},getRoots:function(jq){
return _16f(jq[0]);
},getParent:function(jq,_1a6){
return _120(jq[0],_1a6);
},getChildren:function(jq,_1a7){
return _14d(jq[0],_1a7);
},getChecked:function(jq,_1a8){
return _178(jq[0],_1a8);
},getSelected:function(jq){
return _17c(jq[0]);
},isLeaf:function(jq,_1a9){
return _15c(jq[0],_1a9);
},find:function(jq,id){
return _183(jq[0],id);
},select:function(jq,_1aa){
return jq.each(function(){
_189(this,_1aa);
});
},check:function(jq,_1ab){
return jq.each(function(){
_10d(this,_1ab,true);
});
},uncheck:function(jq,_1ac){
return jq.each(function(){
_10d(this,_1ac,false);
});
},collapse:function(jq,_1ad){
return jq.each(function(){
_143(this,_1ad);
});
},expand:function(jq,_1ae){
return jq.each(function(){
_13e(this,_1ae);
});
},collapseAll:function(jq,_1af){
return jq.each(function(){
_155(this,_1af);
});
},expandAll:function(jq,_1b0){
return jq.each(function(){
_149(this,_1b0);
});
},expandTo:function(jq,_1b1){
return jq.each(function(){
_14e(this,_1b1);
});
},scrollTo:function(jq,_1b2){
return jq.each(function(){
_152(this,_1b2);
});
},toggle:function(jq,_1b3){
return jq.each(function(){
_146(this,_1b3);
});
},append:function(jq,_1b4){
return jq.each(function(){
_159(this,_1b4);
});
},insert:function(jq,_1b5){
return jq.each(function(){
_15e(this,_1b5);
});
},remove:function(jq,_1b6){
return jq.each(function(){
_163(this,_1b6);
});
},pop:function(jq,_1b7){
var node=jq.tree("getData",_1b7);
jq.tree("remove",_1b7);
return node;
},update:function(jq,_1b8){
return jq.each(function(){
_12d(this,$.extend({},_1b8,{checkState:_1b8.checked?"checked":(_1b8.checked===false?"unchecked":undefined)}));
});
},enableDnd:function(jq){
return jq.each(function(){
_f0(this);
});
},disableDnd:function(jq){
return jq.each(function(){
_ec(this);
});
},beginEdit:function(jq,_1b9){
return jq.each(function(){
_18e(this,_1b9);
});
},endEdit:function(jq,_1ba){
return jq.each(function(){
_193(this,_1ba);
});
},cancelEdit:function(jq,_1bb){
return jq.each(function(){
_197(this,_1bb);
});
},doFilter:function(jq,q){
return jq.each(function(){
_19a(this,q);
});
}};
$.fn.tree.parseOptions=function(_1bc){
var t=$(_1bc);
return $.extend({},$.parser.parseOptions(_1bc,["url","method",{checkbox:"boolean",cascadeCheck:"boolean",onlyLeafCheck:"boolean"},{animate:"boolean",lines:"boolean",dnd:"boolean"}]));
};
$.fn.tree.parseData=function(_1bd){
var data=[];
_1be(data,$(_1bd));
return data;
function _1be(aa,tree){
tree.children("li").each(function(){
var node=$(this);
var item=$.extend({},$.parser.parseOptions(this,["id","iconCls","state"]),{checked:(node.attr("checked")?true:undefined)});
item.text=node.children("span").html();
if(!item.text){
item.text=node.html();
}
var _1bf=node.children("ul");
if(_1bf.length){
item.children=[];
_1be(item.children,_1bf);
}
aa.push(item);
});
};
};
var _1c0=1;
var _1c1={render:function(_1c2,ul,data){
var _1c3=$.data(_1c2,"tree");
var opts=_1c3.options;
var _1c4=$(ul).prev(".tree-node");
var _1c5=_1c4.length?$(_1c2).tree("getNode",_1c4[0]):null;
var _1c6=_1c4.find("span.tree-indent, span.tree-hit").length;
var cc=_1c7.call(this,_1c6,data);
$(ul).append(cc.join(""));
function _1c7(_1c8,_1c9){
var cc=[];
for(var i=0;i<_1c9.length;i++){
var item=_1c9[i];
if(item.state!="open"&&item.state!="closed"){
item.state="open";
}
item.domId="_easyui_tree_"+_1c0++;
cc.push("<li>");
cc.push("<div id=\""+item.domId+"\" class=\"tree-node\">");
for(var j=0;j<_1c8;j++){
cc.push("<span class=\"tree-indent\"></span>");
}
if(item.state=="closed"){
cc.push("<span class=\"tree-hit tree-collapsed\"></span>");
cc.push("<span class=\"tree-icon tree-folder "+(item.iconCls?item.iconCls:"")+"\"></span>");
}else{
if(item.children&&item.children.length){
cc.push("<span class=\"tree-hit tree-expanded\"></span>");
cc.push("<span class=\"tree-icon tree-folder tree-folder-open "+(item.iconCls?item.iconCls:"")+"\"></span>");
}else{
cc.push("<span class=\"tree-indent\"></span>");
cc.push("<span class=\"tree-icon tree-file "+(item.iconCls?item.iconCls:"")+"\"></span>");
}
}
if(this.hasCheckbox(_1c2,item)){
var flag=0;
if(_1c5&&_1c5.checkState=="checked"&&opts.cascadeCheck){
flag=1;
item.checked=true;
}else{
if(item.checked){
$.easyui.addArrayItem(_1c3.tmpIds,item.domId);
}
}
item.checkState=flag?"checked":"unchecked";
cc.push("<span class=\"tree-checkbox tree-checkbox"+flag+"\"></span>");
}else{
item.checkState=undefined;
item.checked=undefined;
}
cc.push("<span class=\"tree-title\">"+opts.formatter.call(_1c2,item)+"</span>");
cc.push("</div>");
if(item.children&&item.children.length){
var tmp=_1c7.call(this,_1c8+1,item.children);
cc.push("<ul style=\"display:"+(item.state=="closed"?"none":"block")+"\">");
cc=cc.concat(tmp);
cc.push("</ul>");
}
cc.push("</li>");
}
return cc;
};
},hasCheckbox:function(_1ca,item){
var _1cb=$.data(_1ca,"tree");
var opts=_1cb.options;
if(opts.checkbox){
if($.isFunction(opts.checkbox)){
if(opts.checkbox.call(_1ca,item)){
return true;
}else{
return false;
}
}else{
if(opts.onlyLeafCheck){
if(item.state=="open"&&!(item.children&&item.children.length)){
return true;
}
}else{
return true;
}
}
}
return false;
}};
$.fn.tree.defaults={url:null,method:"post",animate:false,checkbox:false,cascadeCheck:true,onlyLeafCheck:false,lines:false,dnd:false,data:null,queryParams:{},formatter:function(node){
return node.text;
},filter:function(q,node){
var qq=[];
$.map($.isArray(q)?q:[q],function(q){
q=$.trim(q);
if(q){
qq.push(q);
}
});
for(var i=0;i<qq.length;i++){
var _1cc=node.text.toLowerCase().indexOf(qq[i].toLowerCase());
if(_1cc>=0){
return true;
}
}
return !qq.length;
},loader:function(_1cd,_1ce,_1cf){
var opts=$(this).tree("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_1cd,dataType:"json",success:function(data){
_1ce(data);
},error:function(){
_1cf.apply(this,arguments);
}});
},loadFilter:function(data,_1d0){
return data;
},view:_1c1,onBeforeLoad:function(node,_1d1){
},onLoadSuccess:function(node,data){
},onLoadError:function(){
},onClick:function(node){
},onDblClick:function(node){
},onBeforeExpand:function(node){
},onExpand:function(node){
},onBeforeCollapse:function(node){
},onCollapse:function(node){
},onBeforeCheck:function(node,_1d2){
},onCheck:function(node,_1d3){
},onBeforeSelect:function(node){
},onSelect:function(node){
},onContextMenu:function(e,node){
},onBeforeDrag:function(node){
},onStartDrag:function(node){
},onStopDrag:function(node){
},onDragEnter:function(_1d4,_1d5){
},onDragOver:function(_1d6,_1d7){
},onDragLeave:function(_1d8,_1d9){
},onBeforeDrop:function(_1da,_1db,_1dc){
},onDrop:function(_1dd,_1de,_1df){
},onBeforeEdit:function(node){
},onAfterEdit:function(node){
},onCancelEdit:function(node){
}};
})(jQuery);
(function($){
function init(_1e0){
$(_1e0).addClass("progressbar");
$(_1e0).html("<div class=\"progressbar-text\"></div><div class=\"progressbar-value\"><div class=\"progressbar-text\"></div></div>");
$(_1e0).bind("_resize",function(e,_1e1){
if($(this).hasClass("easyui-fluid")||_1e1){
_1e2(_1e0);
}
return false;
});
return $(_1e0);
};
function _1e2(_1e3,_1e4){
var opts=$.data(_1e3,"progressbar").options;
var bar=$.data(_1e3,"progressbar").bar;
if(_1e4){
opts.width=_1e4;
}
bar._size(opts);
bar.find("div.progressbar-text").css("width",bar.width());
bar.find("div.progressbar-text,div.progressbar-value").css({height:bar.height()+"px",lineHeight:bar.height()+"px"});
};
$.fn.progressbar=function(_1e5,_1e6){
if(typeof _1e5=="string"){
var _1e7=$.fn.progressbar.methods[_1e5];
if(_1e7){
return _1e7(this,_1e6);
}
}
_1e5=_1e5||{};
return this.each(function(){
var _1e8=$.data(this,"progressbar");
if(_1e8){
$.extend(_1e8.options,_1e5);
}else{
_1e8=$.data(this,"progressbar",{options:$.extend({},$.fn.progressbar.defaults,$.fn.progressbar.parseOptions(this),_1e5),bar:init(this)});
}
$(this).progressbar("setValue",_1e8.options.value);
_1e2(this);
});
};
$.fn.progressbar.methods={options:function(jq){
return $.data(jq[0],"progressbar").options;
},resize:function(jq,_1e9){
return jq.each(function(){
_1e2(this,_1e9);
});
},getValue:function(jq){
return $.data(jq[0],"progressbar").options.value;
},setValue:function(jq,_1ea){
if(_1ea<0){
_1ea=0;
}
if(_1ea>100){
_1ea=100;
}
return jq.each(function(){
var opts=$.data(this,"progressbar").options;
var text=opts.text.replace(/{value}/,_1ea);
var _1eb=opts.value;
opts.value=_1ea;
$(this).find("div.progressbar-value").width(_1ea+"%");
$(this).find("div.progressbar-text").html(text);
if(_1eb!=_1ea){
opts.onChange.call(this,_1ea,_1eb);
}
});
}};
$.fn.progressbar.parseOptions=function(_1ec){
return $.extend({},$.parser.parseOptions(_1ec,["width","height","text",{value:"number"}]));
};
$.fn.progressbar.defaults={width:"auto",height:22,value:0,text:"{value}%",onChange:function(_1ed,_1ee){
}};
})(jQuery);
(function($){
function init(_1ef){
$(_1ef).addClass("tooltip-f");
};
function _1f0(_1f1){
var opts=$.data(_1f1,"tooltip").options;
$(_1f1).unbind(".tooltip").bind(opts.showEvent+".tooltip",function(e){
$(_1f1).tooltip("show",e);
}).bind(opts.hideEvent+".tooltip",function(e){
$(_1f1).tooltip("hide",e);
}).bind("mousemove.tooltip",function(e){
if(opts.trackMouse){
opts.trackMouseX=e.pageX;
opts.trackMouseY=e.pageY;
$(_1f1).tooltip("reposition");
}
});
};
function _1f2(_1f3){
var _1f4=$.data(_1f3,"tooltip");
if(_1f4.showTimer){
clearTimeout(_1f4.showTimer);
_1f4.showTimer=null;
}
if(_1f4.hideTimer){
clearTimeout(_1f4.hideTimer);
_1f4.hideTimer=null;
}
};
function _1f5(_1f6){
var _1f7=$.data(_1f6,"tooltip");
if(!_1f7||!_1f7.tip){
return;
}
var opts=_1f7.options;
var tip=_1f7.tip;
var pos={left:-100000,top:-100000};
if($(_1f6).is(":visible")){
pos=_1f8(opts.position);
if(opts.position=="top"&&pos.top<0){
pos=_1f8("bottom");
}else{
if((opts.position=="bottom")&&(pos.top+tip._outerHeight()>$(window)._outerHeight()+$(document).scrollTop())){
pos=_1f8("top");
}
}
if(pos.left<0){
if(opts.position=="left"){
pos=_1f8("right");
}else{
$(_1f6).tooltip("arrow").css("left",tip._outerWidth()/2+pos.left);
pos.left=0;
}
}else{
if(pos.left+tip._outerWidth()>$(window)._outerWidth()+$(document)._scrollLeft()){
if(opts.position=="right"){
pos=_1f8("left");
}else{
var left=pos.left;
pos.left=$(window)._outerWidth()+$(document)._scrollLeft()-tip._outerWidth();
$(_1f6).tooltip("arrow").css("left",tip._outerWidth()/2-(pos.left-left));
}
}
}
}
tip.css({left:pos.left,top:pos.top,zIndex:(opts.zIndex!=undefined?opts.zIndex:($.fn.window?$.fn.window.defaults.zIndex++:""))});
opts.onPosition.call(_1f6,pos.left,pos.top);
function _1f8(_1f9){
opts.position=_1f9||"bottom";
tip.removeClass("tooltip-top tooltip-bottom tooltip-left tooltip-right").addClass("tooltip-"+opts.position);
var left,top;
var _1fa=$.isFunction(opts.deltaX)?opts.deltaX.call(_1f6,opts.position):opts.deltaX;
var _1fb=$.isFunction(opts.deltaY)?opts.deltaY.call(_1f6,opts.position):opts.deltaY;
if(opts.trackMouse){
t=$();
left=opts.trackMouseX+_1fa;
top=opts.trackMouseY+_1fb;
}else{
var t=$(_1f6);
left=t.offset().left+_1fa;
top=t.offset().top+_1fb;
}
switch(opts.position){
case "right":
left+=t._outerWidth()+12+(opts.trackMouse?12:0);
top-=(tip._outerHeight()-t._outerHeight())/2;
break;
case "left":
left-=tip._outerWidth()+12+(opts.trackMouse?12:0);
top-=(tip._outerHeight()-t._outerHeight())/2;
break;
case "top":
left-=(tip._outerWidth()-t._outerWidth())/2;
top-=tip._outerHeight()+12+(opts.trackMouse?12:0);
break;
case "bottom":
left-=(tip._outerWidth()-t._outerWidth())/2;
top+=t._outerHeight()+12+(opts.trackMouse?12:0);
break;
}
return {left:left,top:top};
};
};
function _1fc(_1fd,e){
var _1fe=$.data(_1fd,"tooltip");
var opts=_1fe.options;
var tip=_1fe.tip;
if(!tip){
tip=$("<div tabindex=\"-1\" class=\"tooltip\">"+"<div class=\"tooltip-content\"></div>"+"<div class=\"tooltip-arrow-outer\"></div>"+"<div class=\"tooltip-arrow\"></div>"+"</div>").appendTo("body");
_1fe.tip=tip;
_1ff(_1fd);
}
_1f2(_1fd);
_1fe.showTimer=setTimeout(function(){
$(_1fd).tooltip("reposition");
tip.show();
opts.onShow.call(_1fd,e);
var _200=tip.children(".tooltip-arrow-outer");
var _201=tip.children(".tooltip-arrow");
var bc="border-"+opts.position+"-color";
_200.add(_201).css({borderTopColor:"",borderBottomColor:"",borderLeftColor:"",borderRightColor:""});
_200.css(bc,tip.css(bc));
_201.css(bc,tip.css("backgroundColor"));
},opts.showDelay);
};
function _202(_203,e){
var _204=$.data(_203,"tooltip");
if(_204&&_204.tip){
_1f2(_203);
_204.hideTimer=setTimeout(function(){
_204.tip.hide();
_204.options.onHide.call(_203,e);
},_204.options.hideDelay);
}
};
function _1ff(_205,_206){
var _207=$.data(_205,"tooltip");
var opts=_207.options;
if(_206){
opts.content=_206;
}
if(!_207.tip){
return;
}
var cc=typeof opts.content=="function"?opts.content.call(_205):opts.content;
_207.tip.children(".tooltip-content").html(cc);
opts.onUpdate.call(_205,cc);
};
function _208(_209){
var _20a=$.data(_209,"tooltip");
if(_20a){
_1f2(_209);
var opts=_20a.options;
if(_20a.tip){
_20a.tip.remove();
}
if(opts._title){
$(_209).attr("title",opts._title);
}
$.removeData(_209,"tooltip");
$(_209).unbind(".tooltip").removeClass("tooltip-f");
opts.onDestroy.call(_209);
}
};
$.fn.tooltip=function(_20b,_20c){
if(typeof _20b=="string"){
return $.fn.tooltip.methods[_20b](this,_20c);
}
_20b=_20b||{};
return this.each(function(){
var _20d=$.data(this,"tooltip");
if(_20d){
$.extend(_20d.options,_20b);
}else{
$.data(this,"tooltip",{options:$.extend({},$.fn.tooltip.defaults,$.fn.tooltip.parseOptions(this),_20b)});
init(this);
}
_1f0(this);
_1ff(this);
});
};
$.fn.tooltip.methods={options:function(jq){
return $.data(jq[0],"tooltip").options;
},tip:function(jq){
return $.data(jq[0],"tooltip").tip;
},arrow:function(jq){
return jq.tooltip("tip").children(".tooltip-arrow-outer,.tooltip-arrow");
},show:function(jq,e){
return jq.each(function(){
_1fc(this,e);
});
},hide:function(jq,e){
return jq.each(function(){
_202(this,e);
});
},update:function(jq,_20e){
return jq.each(function(){
_1ff(this,_20e);
});
},reposition:function(jq){
return jq.each(function(){
_1f5(this);
});
},destroy:function(jq){
return jq.each(function(){
_208(this);
});
}};
$.fn.tooltip.parseOptions=function(_20f){
var t=$(_20f);
var opts=$.extend({},$.parser.parseOptions(_20f,["position","showEvent","hideEvent","content",{trackMouse:"boolean",deltaX:"number",deltaY:"number",showDelay:"number",hideDelay:"number"}]),{_title:t.attr("title")});
t.attr("title","");
if(!opts.content){
opts.content=opts._title;
}
return opts;
};
$.fn.tooltip.defaults={position:"bottom",content:null,trackMouse:false,deltaX:0,deltaY:0,showEvent:"mouseenter",hideEvent:"mouseleave",showDelay:200,hideDelay:100,onShow:function(e){
},onHide:function(e){
},onUpdate:function(_210){
},onPosition:function(left,top){
},onDestroy:function(){
}};
})(jQuery);
(function($){
$.fn._remove=function(){
return this.each(function(){
$(this).remove();
try{
this.outerHTML="";
}
catch(err){
}
});
};
function _211(node){
node._remove();
};
function _212(_213,_214){
var _215=$.data(_213,"panel");
var opts=_215.options;
var _216=_215.panel;
var _217=_216.children(".panel-header");
var _218=_216.children(".panel-body");
var _219=_216.children(".panel-footer");
var _21a=(opts.halign=="left"||opts.halign=="right");
if(_214){
$.extend(opts,{width:_214.width,height:_214.height,minWidth:_214.minWidth,maxWidth:_214.maxWidth,minHeight:_214.minHeight,maxHeight:_214.maxHeight,left:_214.left,top:_214.top});
}
_216._size(opts);
if(!_21a){
_217._outerWidth(_216.width());
}
_218._outerWidth(_216.width());
if(!isNaN(parseInt(opts.height))){
if(_21a){
if(opts.header){
var _21b=$(opts.header)._outerWidth();
}else{
_217.css("width","");
var _21b=_217._outerWidth();
}
var _21c=_217.find(".panel-title");
_21b+=Math.min(_21c._outerWidth(),_21c._outerHeight());
var _21d=_216.height();
_217._outerWidth(_21b)._outerHeight(_21d);
_21c._outerWidth(_217.height());
_218._outerWidth(_216.width()-_21b-_219._outerWidth())._outerHeight(_21d);
_219._outerHeight(_21d);
_218.css({left:"",right:""}).css(opts.halign,(_217.position()[opts.halign]+_21b)+"px");
opts.panelCssWidth=_216.css("width");
if(opts.collapsed){
_216._outerWidth(_21b+_219._outerWidth());
}
}else{
_218._outerHeight(_216.height()-_217._outerHeight()-_219._outerHeight());
}
}else{
_218.css("height","");
var min=$.parser.parseValue("minHeight",opts.minHeight,_216.parent());
var max=$.parser.parseValue("maxHeight",opts.maxHeight,_216.parent());
var _21e=_217._outerHeight()+_219._outerHeight()+_216._outerHeight()-_216.height();
_218._size("minHeight",min?(min-_21e):"");
_218._size("maxHeight",max?(max-_21e):"");
}
_216.css({height:(_21a?undefined:""),minHeight:"",maxHeight:"",left:opts.left,top:opts.top});
opts.onResize.apply(_213,[opts.width,opts.height]);
$(_213).panel("doLayout");
};
function _21f(_220,_221){
var _222=$.data(_220,"panel");
var opts=_222.options;
var _223=_222.panel;
if(_221){
if(_221.left!=null){
opts.left=_221.left;
}
if(_221.top!=null){
opts.top=_221.top;
}
}
_223.css({left:opts.left,top:opts.top});
_223.find(".tooltip-f").each(function(){
$(this).tooltip("reposition");
});
opts.onMove.apply(_220,[opts.left,opts.top]);
};
function _224(_225){
$(_225).addClass("panel-body")._size("clear");
var _226=$("<div class=\"panel\"></div>").insertBefore(_225);
_226[0].appendChild(_225);
_226.bind("_resize",function(e,_227){
if($(this).hasClass("easyui-fluid")||_227){
_212(_225);
}
return false;
});
return _226;
};
function _228(_229){
var _22a=$.data(_229,"panel");
var opts=_22a.options;
var _22b=_22a.panel;
_22b.css(opts.style);
_22b.addClass(opts.cls);
_22b.removeClass("panel-hleft panel-hright").addClass("panel-h"+opts.halign);
_22c();
_22d();
var _22e=$(_229).panel("header");
var body=$(_229).panel("body");
var _22f=$(_229).siblings(".panel-footer");
if(opts.border){
_22e.removeClass("panel-header-noborder");
body.removeClass("panel-body-noborder");
_22f.removeClass("panel-footer-noborder");
}else{
_22e.addClass("panel-header-noborder");
body.addClass("panel-body-noborder");
_22f.addClass("panel-footer-noborder");
}
_22e.addClass(opts.headerCls);
body.addClass(opts.bodyCls);
$(_229).attr("id",opts.id||"");
if(opts.content){
$(_229).panel("clear");
$(_229).html(opts.content);
$.parser.parse($(_229));
}
function _22c(){
if(opts.noheader||(!opts.title&&!opts.header)){
_211(_22b.children(".panel-header"));
_22b.children(".panel-body").addClass("panel-body-noheader");
}else{
if(opts.header){
$(opts.header).addClass("panel-header").prependTo(_22b);
}else{
var _230=_22b.children(".panel-header");
if(!_230.length){
_230=$("<div class=\"panel-header\"></div>").prependTo(_22b);
}
if(!$.isArray(opts.tools)){
_230.find("div.panel-tool .panel-tool-a").appendTo(opts.tools);
}
_230.empty();
var _231=$("<div class=\"panel-title\"></div>").html(opts.title).appendTo(_230);
if(opts.iconCls){
_231.addClass("panel-with-icon");
$("<div class=\"panel-icon\"></div>").addClass(opts.iconCls).appendTo(_230);
}
if(opts.halign=="left"||opts.halign=="right"){
_231.addClass("panel-title-"+opts.titleDirection);
}
var tool=$("<div class=\"panel-tool\"></div>").appendTo(_230);
tool.bind("click",function(e){
e.stopPropagation();
});
if(opts.tools){
if($.isArray(opts.tools)){
$.map(opts.tools,function(t){
_232(tool,t.iconCls,eval(t.handler));
});
}else{
$(opts.tools).children().each(function(){
$(this).addClass($(this).attr("iconCls")).addClass("panel-tool-a").appendTo(tool);
});
}
}
if(opts.collapsible){
_232(tool,"panel-tool-collapse",function(){
if(opts.collapsed==true){
_252(_229,true);
}else{
_243(_229,true);
}
});
}
if(opts.minimizable){
_232(tool,"panel-tool-min",function(){
_258(_229);
});
}
if(opts.maximizable){
_232(tool,"panel-tool-max",function(){
if(opts.maximized==true){
_25b(_229);
}else{
_242(_229);
}
});
}
if(opts.closable){
_232(tool,"panel-tool-close",function(){
_244(_229);
});
}
}
_22b.children("div.panel-body").removeClass("panel-body-noheader");
}
};
function _232(c,icon,_233){
var a=$("<a href=\"javascript:;\"></a>").addClass(icon).appendTo(c);
a.bind("click",_233);
};
function _22d(){
if(opts.footer){
$(opts.footer).addClass("panel-footer").appendTo(_22b);
$(_229).addClass("panel-body-nobottom");
}else{
_22b.children(".panel-footer").remove();
$(_229).removeClass("panel-body-nobottom");
}
};
};
function _234(_235,_236){
var _237=$.data(_235,"panel");
var opts=_237.options;
if(_238){
opts.queryParams=_236;
}
if(!opts.href){
return;
}
if(!_237.isLoaded||!opts.cache){
var _238=$.extend({},opts.queryParams);
if(opts.onBeforeLoad.call(_235,_238)==false){
return;
}
_237.isLoaded=false;
if(opts.loadingMessage){
$(_235).panel("clear");
$(_235).html($("<div class=\"panel-loading\"></div>").html(opts.loadingMessage));
}
opts.loader.call(_235,_238,function(data){
var _239=opts.extractor.call(_235,data);
$(_235).panel("clear");
$(_235).html(_239);
$.parser.parse($(_235));
opts.onLoad.apply(_235,arguments);
_237.isLoaded=true;
},function(){
opts.onLoadError.apply(_235,arguments);
});
}
};
function _23a(_23b){
var t=$(_23b);
t.find(".combo-f").each(function(){
$(this).combo("destroy");
});
t.find(".m-btn").each(function(){
$(this).menubutton("destroy");
});
t.find(".s-btn").each(function(){
$(this).splitbutton("destroy");
});
t.find(".tooltip-f").each(function(){
$(this).tooltip("dispose");
});
t.children("div").each(function(){
$(this)._size("unfit");
});
t.empty();
};
function _23c(_23d){
$(_23d).panel("doLayout",true);
};
function _23e(_23f,_240){
var opts=$.data(_23f,"panel").options;
var _241=$.data(_23f,"panel").panel;
if(_240!=true){
if(opts.onBeforeOpen.call(_23f)==false){
return;
}
}
_241.stop(true,true);
if($.isFunction(opts.openAnimation)){
opts.openAnimation.call(_23f,cb);
}else{
switch(opts.openAnimation){
case "slide":
_241.slideDown(opts.openDuration,cb);
break;
case "fade":
_241.fadeIn(opts.openDuration,cb);
break;
case "show":
_241.show(opts.openDuration,cb);
break;
default:
_241.show();
cb();
}
}
function cb(){
opts.closed=false;
opts.minimized=false;
var tool=_241.children(".panel-header").find("a.panel-tool-restore");
if(tool.length){
opts.maximized=true;
}
opts.onOpen.call(_23f);
if(opts.maximized==true){
opts.maximized=false;
_242(_23f);
}
if(opts.collapsed==true){
opts.collapsed=false;
_243(_23f);
}
if(!opts.collapsed){
_234(_23f);
_23c(_23f);
}
};
};
function _244(_245,_246){
var _247=$.data(_245,"panel");
var opts=_247.options;
var _248=_247.panel;
if(_246!=true){
if(opts.onBeforeClose.call(_245)==false){
return;
}
}
_248.find(".tooltip-f").each(function(){
$(this).tooltip("hide");
});
_248.stop(true,true);
_248._size("unfit");
if($.isFunction(opts.closeAnimation)){
opts.closeAnimation.call(_245,cb);
}else{
switch(opts.closeAnimation){
case "slide":
_248.slideUp(opts.closeDuration,cb);
break;
case "fade":
_248.fadeOut(opts.closeDuration,cb);
break;
case "hide":
_248.hide(opts.closeDuration,cb);
break;
default:
_248.hide();
cb();
}
}
function cb(){
opts.closed=true;
opts.onClose.call(_245);
};
};
function _249(_24a,_24b){
var _24c=$.data(_24a,"panel");
var opts=_24c.options;
var _24d=_24c.panel;
if(_24b!=true){
if(opts.onBeforeDestroy.call(_24a)==false){
return;
}
}
$(_24a).panel("clear").panel("clear","footer");
_211(_24d);
opts.onDestroy.call(_24a);
};
function _243(_24e,_24f){
var opts=$.data(_24e,"panel").options;
var _250=$.data(_24e,"panel").panel;
var body=_250.children(".panel-body");
var _251=_250.children(".panel-header");
var tool=_251.find("a.panel-tool-collapse");
if(opts.collapsed==true){
return;
}
body.stop(true,true);
if(opts.onBeforeCollapse.call(_24e)==false){
return;
}
tool.addClass("panel-tool-expand");
if(_24f==true){
if(opts.halign=="left"||opts.halign=="right"){
_250.animate({width:_251._outerWidth()+_250.children(".panel-footer")._outerWidth()},function(){
cb();
});
}else{
body.slideUp("normal",function(){
cb();
});
}
}else{
if(opts.halign=="left"||opts.halign=="right"){
_250._outerWidth(_251._outerWidth()+_250.children(".panel-footer")._outerWidth());
}
cb();
}
function cb(){
body.hide();
opts.collapsed=true;
opts.onCollapse.call(_24e);
};
};
function _252(_253,_254){
var opts=$.data(_253,"panel").options;
var _255=$.data(_253,"panel").panel;
var body=_255.children(".panel-body");
var tool=_255.children(".panel-header").find("a.panel-tool-collapse");
if(opts.collapsed==false){
return;
}
body.stop(true,true);
if(opts.onBeforeExpand.call(_253)==false){
return;
}
tool.removeClass("panel-tool-expand");
if(_254==true){
if(opts.halign=="left"||opts.halign=="right"){
body.show();
_255.animate({width:opts.panelCssWidth},function(){
cb();
});
}else{
body.slideDown("normal",function(){
cb();
});
}
}else{
if(opts.halign=="left"||opts.halign=="right"){
_255.css("width",opts.panelCssWidth);
}
cb();
}
function cb(){
body.show();
opts.collapsed=false;
opts.onExpand.call(_253);
_234(_253);
_23c(_253);
};
};
function _242(_256){
var opts=$.data(_256,"panel").options;
var _257=$.data(_256,"panel").panel;
var tool=_257.children(".panel-header").find("a.panel-tool-max");
if(opts.maximized==true){
return;
}
tool.addClass("panel-tool-restore");
if(!$.data(_256,"panel").original){
$.data(_256,"panel").original={width:opts.width,height:opts.height,left:opts.left,top:opts.top,fit:opts.fit};
}
opts.left=0;
opts.top=0;
opts.fit=true;
_212(_256);
opts.minimized=false;
opts.maximized=true;
opts.onMaximize.call(_256);
};
function _258(_259){
var opts=$.data(_259,"panel").options;
var _25a=$.data(_259,"panel").panel;
_25a._size("unfit");
_25a.hide();
opts.minimized=true;
opts.maximized=false;
opts.onMinimize.call(_259);
};
function _25b(_25c){
var opts=$.data(_25c,"panel").options;
var _25d=$.data(_25c,"panel").panel;
var tool=_25d.children(".panel-header").find("a.panel-tool-max");
if(opts.maximized==false){
return;
}
_25d.show();
tool.removeClass("panel-tool-restore");
$.extend(opts,$.data(_25c,"panel").original);
_212(_25c);
opts.minimized=false;
opts.maximized=false;
$.data(_25c,"panel").original=null;
opts.onRestore.call(_25c);
};
function _25e(_25f,_260){
$.data(_25f,"panel").options.title=_260;
$(_25f).panel("header").find("div.panel-title").html(_260);
};
var _261=null;
$(window).unbind(".panel").bind("resize.panel",function(){
if(_261){
clearTimeout(_261);
}
_261=setTimeout(function(){
var _262=$("body.layout");
if(_262.length){
_262.layout("resize");
$("body").children(".easyui-fluid:visible").each(function(){
$(this).triggerHandler("_resize");
});
}else{
$("body").panel("doLayout");
}
_261=null;
},100);
});
$.fn.panel=function(_263,_264){
if(typeof _263=="string"){
return $.fn.panel.methods[_263](this,_264);
}
_263=_263||{};
return this.each(function(){
var _265=$.data(this,"panel");
var opts;
if(_265){
opts=$.extend(_265.options,_263);
_265.isLoaded=false;
}else{
opts=$.extend({},$.fn.panel.defaults,$.fn.panel.parseOptions(this),_263);
$(this).attr("title","");
_265=$.data(this,"panel",{options:opts,panel:_224(this),isLoaded:false});
}
_228(this);
$(this).show();
if(opts.doSize==true){
_265.panel.css("display","block");
_212(this);
}
if(opts.closed==true||opts.minimized==true){
_265.panel.hide();
}else{
_23e(this);
}
});
};
$.fn.panel.methods={options:function(jq){
return $.data(jq[0],"panel").options;
},panel:function(jq){
return $.data(jq[0],"panel").panel;
},header:function(jq){
return $.data(jq[0],"panel").panel.children(".panel-header");
},footer:function(jq){
return jq.panel("panel").children(".panel-footer");
},body:function(jq){
return $.data(jq[0],"panel").panel.children(".panel-body");
},setTitle:function(jq,_266){
return jq.each(function(){
_25e(this,_266);
});
},open:function(jq,_267){
return jq.each(function(){
_23e(this,_267);
});
},close:function(jq,_268){
return jq.each(function(){
_244(this,_268);
});
},destroy:function(jq,_269){
return jq.each(function(){
_249(this,_269);
});
},clear:function(jq,type){
return jq.each(function(){
_23a(type=="footer"?$(this).panel("footer"):this);
});
},refresh:function(jq,href){
return jq.each(function(){
var _26a=$.data(this,"panel");
_26a.isLoaded=false;
if(href){
if(typeof href=="string"){
_26a.options.href=href;
}else{
_26a.options.queryParams=href;
}
}
_234(this);
});
},resize:function(jq,_26b){
return jq.each(function(){
_212(this,_26b);
});
},doLayout:function(jq,all){
return jq.each(function(){
_26c(this,"body");
_26c($(this).siblings(".panel-footer")[0],"footer");
function _26c(_26d,type){
if(!_26d){
return;
}
var _26e=_26d==$("body")[0];
var s=$(_26d).find("div.panel:visible,div.accordion:visible,div.tabs-container:visible,div.layout:visible,.easyui-fluid:visible").filter(function(_26f,el){
var p=$(el).parents(".panel-"+type+":first");
return _26e?p.length==0:p[0]==_26d;
});
s.each(function(){
$(this).triggerHandler("_resize",[all||false]);
});
};
});
},move:function(jq,_270){
return jq.each(function(){
_21f(this,_270);
});
},maximize:function(jq){
return jq.each(function(){
_242(this);
});
},minimize:function(jq){
return jq.each(function(){
_258(this);
});
},restore:function(jq){
return jq.each(function(){
_25b(this);
});
},collapse:function(jq,_271){
return jq.each(function(){
_243(this,_271);
});
},expand:function(jq,_272){
return jq.each(function(){
_252(this,_272);
});
}};
$.fn.panel.parseOptions=function(_273){
var t=$(_273);
var hh=t.children(".panel-header,header");
var ff=t.children(".panel-footer,footer");
return $.extend({},$.parser.parseOptions(_273,["id","width","height","left","top","title","iconCls","cls","headerCls","bodyCls","tools","href","method","header","footer","halign","titleDirection",{cache:"boolean",fit:"boolean",border:"boolean",noheader:"boolean"},{collapsible:"boolean",minimizable:"boolean",maximizable:"boolean"},{closable:"boolean",collapsed:"boolean",minimized:"boolean",maximized:"boolean",closed:"boolean"},"openAnimation","closeAnimation",{openDuration:"number",closeDuration:"number"},]),{loadingMessage:(t.attr("loadingMessage")!=undefined?t.attr("loadingMessage"):undefined),header:(hh.length?hh.removeClass("panel-header"):undefined),footer:(ff.length?ff.removeClass("panel-footer"):undefined)});
};
$.fn.panel.defaults={id:null,title:null,iconCls:null,width:"auto",height:"auto",left:null,top:null,cls:null,headerCls:null,bodyCls:null,style:{},href:null,cache:true,fit:false,border:true,doSize:true,noheader:false,content:null,halign:"top",titleDirection:"down",collapsible:false,minimizable:false,maximizable:false,closable:false,collapsed:false,minimized:false,maximized:false,closed:false,openAnimation:false,openDuration:400,closeAnimation:false,closeDuration:400,tools:null,footer:null,header:null,queryParams:{},method:"get",href:null,loadingMessage:"Loading...",loader:function(_274,_275,_276){
var opts=$(this).panel("options");
if(!opts.href){
return false;
}
$.ajax({type:opts.method,url:opts.href,cache:false,data:_274,dataType:"html",success:function(data){
_275(data);
},error:function(){
_276.apply(this,arguments);
}});
},extractor:function(data){
var _277=/<body[^>]*>((.|[\n\r])*)<\/body>/im;
var _278=_277.exec(data);
if(_278){
return _278[1];
}else{
return data;
}
},onBeforeLoad:function(_279){
},onLoad:function(){
},onLoadError:function(){
},onBeforeOpen:function(){
},onOpen:function(){
},onBeforeClose:function(){
},onClose:function(){
},onBeforeDestroy:function(){
},onDestroy:function(){
},onResize:function(_27a,_27b){
},onMove:function(left,top){
},onMaximize:function(){
},onRestore:function(){
},onMinimize:function(){
},onBeforeCollapse:function(){
},onBeforeExpand:function(){
},onCollapse:function(){
},onExpand:function(){
}};
})(jQuery);
(function($){
function _27c(_27d,_27e){
var _27f=$.data(_27d,"window");
if(_27e){
if(_27e.left!=null){
_27f.options.left=_27e.left;
}
if(_27e.top!=null){
_27f.options.top=_27e.top;
}
}
$(_27d).panel("move",_27f.options);
if(_27f.shadow){
_27f.shadow.css({left:_27f.options.left,top:_27f.options.top});
}
};
function _280(_281,_282){
var opts=$.data(_281,"window").options;
var pp=$(_281).window("panel");
var _283=pp._outerWidth();
if(opts.inline){
var _284=pp.parent();
opts.left=Math.ceil((_284.width()-_283)/2+_284.scrollLeft());
}else{
opts.left=Math.ceil(($(window)._outerWidth()-_283)/2+$(document).scrollLeft());
}
if(_282){
_27c(_281);
}
};
function _285(_286,_287){
var opts=$.data(_286,"window").options;
var pp=$(_286).window("panel");
var _288=pp._outerHeight();
if(opts.inline){
var _289=pp.parent();
opts.top=Math.ceil((_289.height()-_288)/2+_289.scrollTop());
}else{
opts.top=Math.ceil(($(window)._outerHeight()-_288)/2+$(document).scrollTop());
}
if(_287){
_27c(_286);
}
};
function _28a(_28b){
var _28c=$.data(_28b,"window");
var opts=_28c.options;
var win=$(_28b).panel($.extend({},_28c.options,{border:false,doSize:true,closed:true,cls:"window "+(!opts.border?"window-thinborder window-noborder ":(opts.border=="thin"?"window-thinborder ":""))+(opts.cls||""),headerCls:"window-header "+(opts.headerCls||""),bodyCls:"window-body "+(opts.noheader?"window-body-noheader ":" ")+(opts.bodyCls||""),onBeforeDestroy:function(){
if(opts.onBeforeDestroy.call(_28b)==false){
return false;
}
if(_28c.shadow){
_28c.shadow.remove();
}
if(_28c.mask){
_28c.mask.remove();
}
},onClose:function(){
if(_28c.shadow){
_28c.shadow.hide();
}
if(_28c.mask){
_28c.mask.hide();
}
opts.onClose.call(_28b);
},onOpen:function(){
if(_28c.mask){
_28c.mask.css($.extend({display:"block",zIndex:$.fn.window.defaults.zIndex++},$.fn.window.getMaskSize(_28b)));
}
if(_28c.shadow){
_28c.shadow.css({display:"block",zIndex:$.fn.window.defaults.zIndex++,left:opts.left,top:opts.top,width:_28c.window._outerWidth(),height:_28c.window._outerHeight()});
}
_28c.window.css("z-index",$.fn.window.defaults.zIndex++);
opts.onOpen.call(_28b);
},onResize:function(_28d,_28e){
var _28f=$(this).panel("options");
$.extend(opts,{width:_28f.width,height:_28f.height,left:_28f.left,top:_28f.top});
if(_28c.shadow){
_28c.shadow.css({left:opts.left,top:opts.top,width:_28c.window._outerWidth(),height:_28c.window._outerHeight()});
}
opts.onResize.call(_28b,_28d,_28e);
},onMinimize:function(){
if(_28c.shadow){
_28c.shadow.hide();
}
if(_28c.mask){
_28c.mask.hide();
}
_28c.options.onMinimize.call(_28b);
},onBeforeCollapse:function(){
if(opts.onBeforeCollapse.call(_28b)==false){
return false;
}
if(_28c.shadow){
_28c.shadow.hide();
}
},onExpand:function(){
if(_28c.shadow){
_28c.shadow.show();
}
opts.onExpand.call(_28b);
}}));
_28c.window=win.panel("panel");
if(_28c.mask){
_28c.mask.remove();
}
if(opts.modal){
_28c.mask=$("<div class=\"window-mask\" style=\"display:none\"></div>").insertAfter(_28c.window);
}
if(_28c.shadow){
_28c.shadow.remove();
}
if(opts.shadow){
_28c.shadow=$("<div class=\"window-shadow\" style=\"display:none\"></div>").insertAfter(_28c.window);
}
var _290=opts.closed;
if(opts.left==null){
_280(_28b);
}
if(opts.top==null){
_285(_28b);
}
_27c(_28b);
if(!_290){
win.window("open");
}
};
function _291(left,top,_292,_293){
var _294=this;
var _295=$.data(_294,"window");
var opts=_295.options;
if(!opts.constrain){
return {};
}
if($.isFunction(opts.constrain)){
return opts.constrain.call(_294,left,top,_292,_293);
}
var win=$(_294).window("window");
var _296=opts.inline?win.parent():$(window);
if(left<0){
left=0;
}
if(top<_296.scrollTop()){
top=_296.scrollTop();
}
if(left+_292>_296.width()){
if(_292==win.outerWidth()){
left=_296.width()-_292;
}else{
_292=_296.width()-left;
}
}
if(top-_296.scrollTop()+_293>_296.height()){
if(_293==win.outerHeight()){
top=_296.height()-_293+_296.scrollTop();
}else{
_293=_296.height()-top+_296.scrollTop();
}
}
return {left:left,top:top,width:_292,height:_293};
};
function _297(_298){
var _299=$.data(_298,"window");
_299.window.draggable({handle:">div.panel-header>div.panel-title",disabled:_299.options.draggable==false,onBeforeDrag:function(e){
if(_299.mask){
_299.mask.css("z-index",$.fn.window.defaults.zIndex++);
}
if(_299.shadow){
_299.shadow.css("z-index",$.fn.window.defaults.zIndex++);
}
_299.window.css("z-index",$.fn.window.defaults.zIndex++);
},onStartDrag:function(e){
_29a(e);
},onDrag:function(e){
_29b(e);
return false;
},onStopDrag:function(e){
_29c(e,"move");
}});
_299.window.resizable({disabled:_299.options.resizable==false,onStartResize:function(e){
_29a(e);
},onResize:function(e){
_29b(e);
return false;
},onStopResize:function(e){
_29c(e,"resize");
}});
function _29a(e){
if(_299.pmask){
_299.pmask.remove();
}
_299.pmask=$("<div class=\"window-proxy-mask\"></div>").insertAfter(_299.window);
_299.pmask.css({display:"none",zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top,width:_299.window._outerWidth(),height:_299.window._outerHeight()});
if(_299.proxy){
_299.proxy.remove();
}
_299.proxy=$("<div class=\"window-proxy\"></div>").insertAfter(_299.window);
_299.proxy.css({display:"none",zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top});
_299.proxy._outerWidth(e.data.width)._outerHeight(e.data.height);
_299.proxy.hide();
setTimeout(function(){
if(_299.pmask){
_299.pmask.show();
}
if(_299.proxy){
_299.proxy.show();
}
},500);
};
function _29b(e){
$.extend(e.data,_291.call(_298,e.data.left,e.data.top,e.data.width,e.data.height));
_299.pmask.show();
_299.proxy.css({display:"block",left:e.data.left,top:e.data.top});
_299.proxy._outerWidth(e.data.width);
_299.proxy._outerHeight(e.data.height);
};
function _29c(e,_29d){
$.extend(e.data,_291.call(_298,e.data.left,e.data.top,e.data.width+0.1,e.data.height+0.1));
$(_298).window(_29d,e.data);
_299.pmask.remove();
_299.pmask=null;
_299.proxy.remove();
_299.proxy=null;
};
};
$(function(){
if(!$._positionFixed){
$(window).resize(function(){
$("body>div.window-mask:visible").css({width:"",height:""});
setTimeout(function(){
$("body>div.window-mask:visible").css($.fn.window.getMaskSize());
},50);
});
}
});
$.fn.window=function(_29e,_29f){
if(typeof _29e=="string"){
var _2a0=$.fn.window.methods[_29e];
if(_2a0){
return _2a0(this,_29f);
}else{
return this.panel(_29e,_29f);
}
}
_29e=_29e||{};
return this.each(function(){
var _2a1=$.data(this,"window");
if(_2a1){
$.extend(_2a1.options,_29e);
}else{
_2a1=$.data(this,"window",{options:$.extend({},$.fn.window.defaults,$.fn.window.parseOptions(this),_29e)});
if(!_2a1.options.inline){
document.body.appendChild(this);
}
}
_28a(this);
_297(this);
});
};
$.fn.window.methods={options:function(jq){
var _2a2=jq.panel("options");
var _2a3=$.data(jq[0],"window").options;
return $.extend(_2a3,{closed:_2a2.closed,collapsed:_2a2.collapsed,minimized:_2a2.minimized,maximized:_2a2.maximized});
},window:function(jq){
return $.data(jq[0],"window").window;
},move:function(jq,_2a4){
return jq.each(function(){
_27c(this,_2a4);
});
},hcenter:function(jq){
return jq.each(function(){
_280(this,true);
});
},vcenter:function(jq){
return jq.each(function(){
_285(this,true);
});
},center:function(jq){
return jq.each(function(){
_280(this);
_285(this);
_27c(this);
});
}};
$.fn.window.getMaskSize=function(_2a5){
var _2a6=$(_2a5).data("window");
if(_2a6&&_2a6.options.inline){
return {};
}else{
if($._positionFixed){
return {position:"fixed"};
}else{
return {width:$(document).width(),height:$(document).height()};
}
}
};
$.fn.window.parseOptions=function(_2a7){
return $.extend({},$.fn.panel.parseOptions(_2a7),$.parser.parseOptions(_2a7,[{draggable:"boolean",resizable:"boolean",shadow:"boolean",modal:"boolean",inline:"boolean"}]));
};
$.fn.window.defaults=$.extend({},$.fn.panel.defaults,{zIndex:9000,draggable:true,resizable:true,shadow:true,modal:false,border:true,inline:false,title:"New Window",collapsible:true,minimizable:true,maximizable:true,closable:true,closed:false,constrain:false});
})(jQuery);
(function($){
function _2a8(_2a9){
var opts=$.data(_2a9,"dialog").options;
opts.inited=false;
$(_2a9).window($.extend({},opts,{onResize:function(w,h){
if(opts.inited){
_2ae(this);
opts.onResize.call(this,w,h);
}
}}));
var win=$(_2a9).window("window");
if(opts.toolbar){
if($.isArray(opts.toolbar)){
$(_2a9).siblings("div.dialog-toolbar").remove();
var _2aa=$("<div class=\"dialog-toolbar\"><table cellspacing=\"0\" cellpadding=\"0\"><tr></tr></table></div>").appendTo(win);
var tr=_2aa.find("tr");
for(var i=0;i<opts.toolbar.length;i++){
var btn=opts.toolbar[i];
if(btn=="-"){
$("<td><div class=\"dialog-tool-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
var tool=$("<a href=\"javascript:;\"></a>").appendTo(td);
tool[0].onclick=eval(btn.handler||function(){
});
tool.linkbutton($.extend({},btn,{plain:true}));
}
}
}else{
$(opts.toolbar).addClass("dialog-toolbar").appendTo(win);
$(opts.toolbar).show();
}
}else{
$(_2a9).siblings("div.dialog-toolbar").remove();
}
if(opts.buttons){
if($.isArray(opts.buttons)){
$(_2a9).siblings("div.dialog-button").remove();
var _2ab=$("<div class=\"dialog-button\"></div>").appendTo(win);
for(var i=0;i<opts.buttons.length;i++){
var p=opts.buttons[i];
var _2ac=$("<a href=\"javascript:;\"></a>").appendTo(_2ab);
if(p.handler){
_2ac[0].onclick=p.handler;
}
_2ac.linkbutton(p);
}
}else{
$(opts.buttons).addClass("dialog-button").appendTo(win);
$(opts.buttons).show();
}
}else{
$(_2a9).siblings("div.dialog-button").remove();
}
opts.inited=true;
var _2ad=opts.closed;
win.show();
$(_2a9).window("resize");
if(_2ad){
win.hide();
}
};
function _2ae(_2af,_2b0){
var t=$(_2af);
var opts=t.dialog("options");
var _2b1=opts.noheader;
var tb=t.siblings(".dialog-toolbar");
var bb=t.siblings(".dialog-button");
tb.insertBefore(_2af).css({borderTopWidth:(_2b1?1:0),top:(_2b1?tb.length:0)});
bb.insertAfter(_2af);
tb.add(bb)._outerWidth(t._outerWidth()).find(".easyui-fluid:visible").each(function(){
$(this).triggerHandler("_resize");
});
var _2b2=tb._outerHeight()+bb._outerHeight();
if(!isNaN(parseInt(opts.height))){
t._outerHeight(t._outerHeight()-_2b2);
}else{
var _2b3=t._size("min-height");
if(_2b3){
t._size("min-height",_2b3-_2b2);
}
var _2b4=t._size("max-height");
if(_2b4){
t._size("max-height",_2b4-_2b2);
}
}
var _2b5=$.data(_2af,"window").shadow;
if(_2b5){
var cc=t.panel("panel");
_2b5.css({width:cc._outerWidth(),height:cc._outerHeight()});
}
};
$.fn.dialog=function(_2b6,_2b7){
if(typeof _2b6=="string"){
var _2b8=$.fn.dialog.methods[_2b6];
if(_2b8){
return _2b8(this,_2b7);
}else{
return this.window(_2b6,_2b7);
}
}
_2b6=_2b6||{};
return this.each(function(){
var _2b9=$.data(this,"dialog");
if(_2b9){
$.extend(_2b9.options,_2b6);
}else{
$.data(this,"dialog",{options:$.extend({},$.fn.dialog.defaults,$.fn.dialog.parseOptions(this),_2b6)});
}
_2a8(this);
});
};
$.fn.dialog.methods={options:function(jq){
var _2ba=$.data(jq[0],"dialog").options;
var _2bb=jq.panel("options");
$.extend(_2ba,{width:_2bb.width,height:_2bb.height,left:_2bb.left,top:_2bb.top,closed:_2bb.closed,collapsed:_2bb.collapsed,minimized:_2bb.minimized,maximized:_2bb.maximized});
return _2ba;
},dialog:function(jq){
return jq.window("window");
}};
$.fn.dialog.parseOptions=function(_2bc){
var t=$(_2bc);
return $.extend({},$.fn.window.parseOptions(_2bc),$.parser.parseOptions(_2bc,["toolbar","buttons"]),{toolbar:(t.children(".dialog-toolbar").length?t.children(".dialog-toolbar").removeClass("dialog-toolbar"):undefined),buttons:(t.children(".dialog-button").length?t.children(".dialog-button").removeClass("dialog-button"):undefined)});
};
$.fn.dialog.defaults=$.extend({},$.fn.window.defaults,{title:"New Dialog",collapsible:false,minimizable:false,maximizable:false,resizable:false,toolbar:null,buttons:null});
})(jQuery);
(function($){
function _2bd(){
$(document).unbind(".messager").bind("keydown.messager",function(e){
if(e.keyCode==27){
$("body").children("div.messager-window").children("div.messager-body").each(function(){
$(this).dialog("close");
});
}else{
if(e.keyCode==9){
var win=$("body").children("div.messager-window");
if(!win.length){
return;
}
var _2be=win.find(".messager-input,.messager-button .l-btn");
for(var i=0;i<_2be.length;i++){
if($(_2be[i]).is(":focus")){
$(_2be[i>=_2be.length-1?0:i+1]).focus();
return false;
}
}
}else{
if(e.keyCode==13){
var _2bf=$(e.target).closest("input.messager-input");
if(_2bf.length){
var dlg=_2bf.closest(".messager-body");
_2c0(dlg,_2bf.val());
}
}
}
}
});
};
function _2c1(){
$(document).unbind(".messager");
};
function _2c2(_2c3){
var opts=$.extend({},$.messager.defaults,{modal:false,shadow:false,draggable:false,resizable:false,closed:true,style:{left:"",top:"",right:0,zIndex:$.fn.window.defaults.zIndex++,bottom:-document.body.scrollTop-document.documentElement.scrollTop},title:"",width:250,height:100,minHeight:0,showType:"slide",showSpeed:600,content:_2c3.msg,timeout:4000},_2c3);
var dlg=$("<div class=\"messager-body\"></div>").appendTo("body");
dlg.dialog($.extend({},opts,{noheader:(opts.title?false:true),openAnimation:(opts.showType),closeAnimation:(opts.showType=="show"?"hide":opts.showType),openDuration:opts.showSpeed,closeDuration:opts.showSpeed,onOpen:function(){
dlg.dialog("dialog").hover(function(){
if(opts.timer){
clearTimeout(opts.timer);
}
},function(){
_2c4();
});
_2c4();
function _2c4(){
if(opts.timeout>0){
opts.timer=setTimeout(function(){
if(dlg.length&&dlg.data("dialog")){
dlg.dialog("close");
}
},opts.timeout);
}
};
if(_2c3.onOpen){
_2c3.onOpen.call(this);
}else{
opts.onOpen.call(this);
}
},onClose:function(){
if(opts.timer){
clearTimeout(opts.timer);
}
if(_2c3.onClose){
_2c3.onClose.call(this);
}else{
opts.onClose.call(this);
}
dlg.dialog("destroy");
}}));
dlg.dialog("dialog").css(opts.style);
dlg.dialog("open");
return dlg;
};
function _2c5(_2c6){
_2bd();
var dlg=$("<div class=\"messager-body\"></div>").appendTo("body");
dlg.dialog($.extend({},_2c6,{noheader:(_2c6.title?false:true),onClose:function(){
_2c1();
if(_2c6.onClose){
_2c6.onClose.call(this);
}
dlg.dialog("destroy");
}}));
var win=dlg.dialog("dialog").addClass("messager-window");
win.find(".dialog-button").addClass("messager-button").find("a:first").focus();
return dlg;
};
function _2c0(dlg,_2c7){
var opts=dlg.dialog("options");
dlg.dialog("close");
opts.fn(_2c7);
};
$.messager={show:function(_2c8){
return _2c2(_2c8);
},alert:function(_2c9,msg,icon,fn){
var opts=typeof _2c9=="object"?_2c9:{title:_2c9,msg:msg,icon:icon,fn:fn};
var cls=opts.icon?"messager-icon messager-"+opts.icon:"";
opts=$.extend({},$.messager.defaults,{content:"<div class=\""+cls+"\"></div>"+"<div>"+opts.msg+"</div>"+"<div style=\"clear:both;\"/>"},opts);
if(!opts.buttons){
opts.buttons=[{text:opts.ok,onClick:function(){
_2c0(dlg);
}}];
}
var dlg=_2c5(opts);
return dlg;
},confirm:function(_2ca,msg,fn){
var opts=typeof _2ca=="object"?_2ca:{title:_2ca,msg:msg,fn:fn};
opts=$.extend({},$.messager.defaults,{content:"<div class=\"messager-icon messager-question\"></div>"+"<div>"+opts.msg+"</div>"+"<div style=\"clear:both;\"/>"},opts);
if(!opts.buttons){
opts.buttons=[{text:opts.ok,onClick:function(){
_2c0(dlg,true);
}},{text:opts.cancel,onClick:function(){
_2c0(dlg,false);
}}];
}
var dlg=_2c5(opts);
return dlg;
},prompt:function(_2cb,msg,fn){
var opts=typeof _2cb=="object"?_2cb:{title:_2cb,msg:msg,fn:fn};
opts=$.extend({},$.messager.defaults,{content:"<div class=\"messager-icon messager-question\"></div>"+"<div>"+opts.msg+"</div>"+"<br/>"+"<div style=\"clear:both;\"/>"+"<div><input class=\"messager-input\" type=\"text\"/></div>"},opts);
if(!opts.buttons){
opts.buttons=[{text:opts.ok,onClick:function(){
_2c0(dlg,dlg.find(".messager-input").val());
}},{text:opts.cancel,onClick:function(){
_2c0(dlg);
}}];
}
var dlg=_2c5(opts);
dlg.find(".messager-input").focus();
return dlg;
},progress:function(_2cc){
var _2cd={bar:function(){
return $("body>div.messager-window").find("div.messager-p-bar");
},close:function(){
var dlg=$("body>div.messager-window>div.messager-body:has(div.messager-progress)");
if(dlg.length){
dlg.dialog("close");
}
}};
if(typeof _2cc=="string"){
var _2ce=_2cd[_2cc];
return _2ce();
}
_2cc=_2cc||{};
var opts=$.extend({},{title:"",minHeight:0,content:undefined,msg:"",text:undefined,interval:300},_2cc);
var dlg=_2c5($.extend({},$.messager.defaults,{content:"<div class=\"messager-progress\"><div class=\"messager-p-msg\">"+opts.msg+"</div><div class=\"messager-p-bar\"></div></div>",closable:false,doSize:false},opts,{onClose:function(){
if(this.timer){
clearInterval(this.timer);
}
if(_2cc.onClose){
_2cc.onClose.call(this);
}else{
$.messager.defaults.onClose.call(this);
}
}}));
var bar=dlg.find("div.messager-p-bar");
bar.progressbar({text:opts.text});
dlg.dialog("resize");
if(opts.interval){
dlg[0].timer=setInterval(function(){
var v=bar.progressbar("getValue");
v+=10;
if(v>100){
v=0;
}
bar.progressbar("setValue",v);
},opts.interval);
}
return dlg;
}};
$.messager.defaults=$.extend({},$.fn.dialog.defaults,{ok:"Ok",cancel:"Cancel",width:300,height:"auto",minHeight:150,modal:true,collapsible:false,minimizable:false,maximizable:false,resizable:false,fn:function(){
}});
})(jQuery);
(function($){
function _2cf(_2d0,_2d1){
var _2d2=$.data(_2d0,"accordion");
var opts=_2d2.options;
var _2d3=_2d2.panels;
var cc=$(_2d0);
var _2d4=(opts.halign=="left"||opts.halign=="right");
cc.children(".panel-last").removeClass("panel-last");
cc.children(".panel:last").addClass("panel-last");
if(_2d1){
$.extend(opts,{width:_2d1.width,height:_2d1.height});
}
cc._size(opts);
var _2d5=0;
var _2d6="auto";
var _2d7=cc.find(">.panel>.accordion-header");
if(_2d7.length){
if(_2d4){
$(_2d3[0]).panel("resize",{width:cc.width(),height:cc.height()});
_2d5=$(_2d7[0])._outerWidth();
}else{
_2d5=$(_2d7[0]).css("height","")._outerHeight();
}
}
if(!isNaN(parseInt(opts.height))){
if(_2d4){
_2d6=cc.width()-_2d5*_2d7.length;
}else{
_2d6=cc.height()-_2d5*_2d7.length;
}
}
_2d8(true,_2d6-_2d8(false));
function _2d8(_2d9,_2da){
var _2db=0;
for(var i=0;i<_2d3.length;i++){
var p=_2d3[i];
if(_2d4){
var h=p.panel("header")._outerWidth(_2d5);
}else{
var h=p.panel("header")._outerHeight(_2d5);
}
if(p.panel("options").collapsible==_2d9){
var _2dc=isNaN(_2da)?undefined:(_2da+_2d5*h.length);
if(_2d4){
p.panel("resize",{height:cc.height(),width:(_2d9?_2dc:undefined)});
_2db+=p.panel("panel")._outerWidth()-_2d5*h.length;
}else{
p.panel("resize",{width:cc.width(),height:(_2d9?_2dc:undefined)});
_2db+=p.panel("panel").outerHeight()-_2d5*h.length;
}
}
}
return _2db;
};
};
function _2dd(_2de,_2df,_2e0,all){
var _2e1=$.data(_2de,"accordion").panels;
var pp=[];
for(var i=0;i<_2e1.length;i++){
var p=_2e1[i];
if(_2df){
if(p.panel("options")[_2df]==_2e0){
pp.push(p);
}
}else{
if(p[0]==$(_2e0)[0]){
return i;
}
}
}
if(_2df){
return all?pp:(pp.length?pp[0]:null);
}else{
return -1;
}
};
function _2e2(_2e3){
return _2dd(_2e3,"collapsed",false,true);
};
function _2e4(_2e5){
var pp=_2e2(_2e5);
return pp.length?pp[0]:null;
};
function _2e6(_2e7,_2e8){
return _2dd(_2e7,null,_2e8);
};
function _2e9(_2ea,_2eb){
var _2ec=$.data(_2ea,"accordion").panels;
if(typeof _2eb=="number"){
if(_2eb<0||_2eb>=_2ec.length){
return null;
}else{
return _2ec[_2eb];
}
}
return _2dd(_2ea,"title",_2eb);
};
function _2ed(_2ee){
var opts=$.data(_2ee,"accordion").options;
var cc=$(_2ee);
if(opts.border){
cc.removeClass("accordion-noborder");
}else{
cc.addClass("accordion-noborder");
}
};
function init(_2ef){
var _2f0=$.data(_2ef,"accordion");
var cc=$(_2ef);
cc.addClass("accordion");
_2f0.panels=[];
cc.children("div").each(function(){
var opts=$.extend({},$.parser.parseOptions(this),{selected:($(this).attr("selected")?true:undefined)});
var pp=$(this);
_2f0.panels.push(pp);
_2f2(_2ef,pp,opts);
});
cc.bind("_resize",function(e,_2f1){
if($(this).hasClass("easyui-fluid")||_2f1){
_2cf(_2ef);
}
return false;
});
};
function _2f2(_2f3,pp,_2f4){
var opts=$.data(_2f3,"accordion").options;
pp.panel($.extend({},{collapsible:true,minimizable:false,maximizable:false,closable:false,doSize:false,collapsed:true,headerCls:"accordion-header",bodyCls:"accordion-body",halign:opts.halign},_2f4,{onBeforeExpand:function(){
if(_2f4.onBeforeExpand){
if(_2f4.onBeforeExpand.call(this)==false){
return false;
}
}
if(!opts.multiple){
var all=$.grep(_2e2(_2f3),function(p){
return p.panel("options").collapsible;
});
for(var i=0;i<all.length;i++){
_2fc(_2f3,_2e6(_2f3,all[i]));
}
}
var _2f5=$(this).panel("header");
_2f5.addClass("accordion-header-selected");
_2f5.find(".accordion-collapse").removeClass("accordion-expand");
},onExpand:function(){
$(_2f3).find(">.panel-last>.accordion-header").removeClass("accordion-header-border");
if(_2f4.onExpand){
_2f4.onExpand.call(this);
}
opts.onSelect.call(_2f3,$(this).panel("options").title,_2e6(_2f3,this));
},onBeforeCollapse:function(){
if(_2f4.onBeforeCollapse){
if(_2f4.onBeforeCollapse.call(this)==false){
return false;
}
}
$(_2f3).find(">.panel-last>.accordion-header").addClass("accordion-header-border");
var _2f6=$(this).panel("header");
_2f6.removeClass("accordion-header-selected");
_2f6.find(".accordion-collapse").addClass("accordion-expand");
},onCollapse:function(){
if(isNaN(parseInt(opts.height))){
$(_2f3).find(">.panel-last>.accordion-header").removeClass("accordion-header-border");
}
if(_2f4.onCollapse){
_2f4.onCollapse.call(this);
}
opts.onUnselect.call(_2f3,$(this).panel("options").title,_2e6(_2f3,this));
}}));
var _2f7=pp.panel("header");
var tool=_2f7.children("div.panel-tool");
tool.children("a.panel-tool-collapse").hide();
var t=$("<a href=\"javascript:;\"></a>").addClass("accordion-collapse accordion-expand").appendTo(tool);
t.bind("click",function(){
_2f8(pp);
return false;
});
pp.panel("options").collapsible?t.show():t.hide();
if(opts.halign=="left"||opts.halign=="right"){
t.hide();
}
_2f7.click(function(){
_2f8(pp);
return false;
});
function _2f8(p){
var _2f9=p.panel("options");
if(_2f9.collapsible){
var _2fa=_2e6(_2f3,p);
if(_2f9.collapsed){
_2fb(_2f3,_2fa);
}else{
_2fc(_2f3,_2fa);
}
}
};
};
function _2fb(_2fd,_2fe){
var p=_2e9(_2fd,_2fe);
if(!p){
return;
}
_2ff(_2fd);
var opts=$.data(_2fd,"accordion").options;
p.panel("expand",opts.animate);
};
function _2fc(_300,_301){
var p=_2e9(_300,_301);
if(!p){
return;
}
_2ff(_300);
var opts=$.data(_300,"accordion").options;
p.panel("collapse",opts.animate);
};
function _302(_303){
var opts=$.data(_303,"accordion").options;
$(_303).find(">.panel-last>.accordion-header").addClass("accordion-header-border");
var p=_2dd(_303,"selected",true);
if(p){
_304(_2e6(_303,p));
}else{
_304(opts.selected);
}
function _304(_305){
var _306=opts.animate;
opts.animate=false;
_2fb(_303,_305);
opts.animate=_306;
};
};
function _2ff(_307){
var _308=$.data(_307,"accordion").panels;
for(var i=0;i<_308.length;i++){
_308[i].stop(true,true);
}
};
function add(_309,_30a){
var _30b=$.data(_309,"accordion");
var opts=_30b.options;
var _30c=_30b.panels;
if(_30a.selected==undefined){
_30a.selected=true;
}
_2ff(_309);
var pp=$("<div></div>").appendTo(_309);
_30c.push(pp);
_2f2(_309,pp,_30a);
_2cf(_309);
opts.onAdd.call(_309,_30a.title,_30c.length-1);
if(_30a.selected){
_2fb(_309,_30c.length-1);
}
};
function _30d(_30e,_30f){
var _310=$.data(_30e,"accordion");
var opts=_310.options;
var _311=_310.panels;
_2ff(_30e);
var _312=_2e9(_30e,_30f);
var _313=_312.panel("options").title;
var _314=_2e6(_30e,_312);
if(!_312){
return;
}
if(opts.onBeforeRemove.call(_30e,_313,_314)==false){
return;
}
_311.splice(_314,1);
_312.panel("destroy");
if(_311.length){
_2cf(_30e);
var curr=_2e4(_30e);
if(!curr){
_2fb(_30e,0);
}
}
opts.onRemove.call(_30e,_313,_314);
};
$.fn.accordion=function(_315,_316){
if(typeof _315=="string"){
return $.fn.accordion.methods[_315](this,_316);
}
_315=_315||{};
return this.each(function(){
var _317=$.data(this,"accordion");
if(_317){
$.extend(_317.options,_315);
}else{
$.data(this,"accordion",{options:$.extend({},$.fn.accordion.defaults,$.fn.accordion.parseOptions(this),_315),accordion:$(this).addClass("accordion"),panels:[]});
init(this);
}
_2ed(this);
_2cf(this);
_302(this);
});
};
$.fn.accordion.methods={options:function(jq){
return $.data(jq[0],"accordion").options;
},panels:function(jq){
return $.data(jq[0],"accordion").panels;
},resize:function(jq,_318){
return jq.each(function(){
_2cf(this,_318);
});
},getSelections:function(jq){
return _2e2(jq[0]);
},getSelected:function(jq){
return _2e4(jq[0]);
},getPanel:function(jq,_319){
return _2e9(jq[0],_319);
},getPanelIndex:function(jq,_31a){
return _2e6(jq[0],_31a);
},select:function(jq,_31b){
return jq.each(function(){
_2fb(this,_31b);
});
},unselect:function(jq,_31c){
return jq.each(function(){
_2fc(this,_31c);
});
},add:function(jq,_31d){
return jq.each(function(){
add(this,_31d);
});
},remove:function(jq,_31e){
return jq.each(function(){
_30d(this,_31e);
});
}};
$.fn.accordion.parseOptions=function(_31f){
var t=$(_31f);
return $.extend({},$.parser.parseOptions(_31f,["width","height","halign",{fit:"boolean",border:"boolean",animate:"boolean",multiple:"boolean",selected:"number"}]));
};
$.fn.accordion.defaults={width:"auto",height:"auto",fit:false,border:true,animate:true,multiple:false,selected:0,halign:"top",onSelect:function(_320,_321){
},onUnselect:function(_322,_323){
},onAdd:function(_324,_325){
},onBeforeRemove:function(_326,_327){
},onRemove:function(_328,_329){
}};
})(jQuery);
(function($){
function _32a(c){
var w=0;
$(c).children().each(function(){
w+=$(this).outerWidth(true);
});
return w;
};
function _32b(_32c){
var opts=$.data(_32c,"tabs").options;
if(opts.tabPosition=="left"||opts.tabPosition=="right"||!opts.showHeader){
return;
}
var _32d=$(_32c).children("div.tabs-header");
var tool=_32d.children("div.tabs-tool:not(.tabs-tool-hidden)");
var _32e=_32d.children("div.tabs-scroller-left");
var _32f=_32d.children("div.tabs-scroller-right");
var wrap=_32d.children("div.tabs-wrap");
var _330=_32d.outerHeight();
if(opts.plain){
_330-=_330-_32d.height();
}
tool._outerHeight(_330);
var _331=_32a(_32d.find("ul.tabs"));
var _332=_32d.width()-tool._outerWidth();
if(_331>_332){
_32e.add(_32f).show()._outerHeight(_330);
if(opts.toolPosition=="left"){
tool.css({left:_32e.outerWidth(),right:""});
wrap.css({marginLeft:_32e.outerWidth()+tool._outerWidth(),marginRight:_32f._outerWidth(),width:_332-_32e.outerWidth()-_32f.outerWidth()});
}else{
tool.css({left:"",right:_32f.outerWidth()});
wrap.css({marginLeft:_32e.outerWidth(),marginRight:_32f.outerWidth()+tool._outerWidth(),width:_332-_32e.outerWidth()-_32f.outerWidth()});
}
}else{
_32e.add(_32f).hide();
if(opts.toolPosition=="left"){
tool.css({left:0,right:""});
wrap.css({marginLeft:tool._outerWidth(),marginRight:0,width:_332});
}else{
tool.css({left:"",right:0});
wrap.css({marginLeft:0,marginRight:tool._outerWidth(),width:_332});
}
}
};
function _333(_334){
var opts=$.data(_334,"tabs").options;
var _335=$(_334).children("div.tabs-header");
if(opts.tools){
if(typeof opts.tools=="string"){
$(opts.tools).addClass("tabs-tool").appendTo(_335);
$(opts.tools).show();
}else{
_335.children("div.tabs-tool").remove();
var _336=$("<div class=\"tabs-tool\"><table cellspacing=\"0\" cellpadding=\"0\" style=\"height:100%\"><tr></tr></table></div>").appendTo(_335);
var tr=_336.find("tr");
for(var i=0;i<opts.tools.length;i++){
var td=$("<td></td>").appendTo(tr);
var tool=$("<a href=\"javascript:;\"></a>").appendTo(td);
tool[0].onclick=eval(opts.tools[i].handler||function(){
});
tool.linkbutton($.extend({},opts.tools[i],{plain:true}));
}
}
}else{
_335.children("div.tabs-tool").remove();
}
};
function _337(_338,_339){
var _33a=$.data(_338,"tabs");
var opts=_33a.options;
var cc=$(_338);
if(!opts.doSize){
return;
}
if(_339){
$.extend(opts,{width:_339.width,height:_339.height});
}
cc._size(opts);
var _33b=cc.children("div.tabs-header");
var _33c=cc.children("div.tabs-panels");
var wrap=_33b.find("div.tabs-wrap");
var ul=wrap.find(".tabs");
ul.children("li").removeClass("tabs-first tabs-last");
ul.children("li:first").addClass("tabs-first");
ul.children("li:last").addClass("tabs-last");
if(opts.tabPosition=="left"||opts.tabPosition=="right"){
_33b._outerWidth(opts.showHeader?opts.headerWidth:0);
_33c._outerWidth(cc.width()-_33b.outerWidth());
_33b.add(_33c)._size("height",isNaN(parseInt(opts.height))?"":cc.height());
wrap._outerWidth(_33b.width());
ul._outerWidth(wrap.width()).css("height","");
}else{
_33b.children("div.tabs-scroller-left,div.tabs-scroller-right,div.tabs-tool:not(.tabs-tool-hidden)").css("display",opts.showHeader?"block":"none");
_33b._outerWidth(cc.width()).css("height","");
if(opts.showHeader){
_33b.css("background-color","");
wrap.css("height","");
}else{
_33b.css("background-color","transparent");
_33b._outerHeight(0);
wrap._outerHeight(0);
}
ul._outerHeight(opts.tabHeight).css("width","");
ul._outerHeight(ul.outerHeight()-ul.height()-1+opts.tabHeight).css("width","");
_33c._size("height",isNaN(parseInt(opts.height))?"":(cc.height()-_33b.outerHeight()));
_33c._size("width",cc.width());
}
if(_33a.tabs.length){
var d1=ul.outerWidth(true)-ul.width();
var li=ul.children("li:first");
var d2=li.outerWidth(true)-li.width();
var _33d=_33b.width()-_33b.children(".tabs-tool:not(.tabs-tool-hidden)")._outerWidth();
var _33e=Math.floor((_33d-d1-d2*_33a.tabs.length)/_33a.tabs.length);
$.map(_33a.tabs,function(p){
_33f(p,(opts.justified&&$.inArray(opts.tabPosition,["top","bottom"])>=0)?_33e:undefined);
});
if(opts.justified&&$.inArray(opts.tabPosition,["top","bottom"])>=0){
var _340=_33d-d1-_32a(ul);
_33f(_33a.tabs[_33a.tabs.length-1],_33e+_340);
}
}
_32b(_338);
function _33f(p,_341){
var _342=p.panel("options");
var p_t=_342.tab.find("a.tabs-inner");
var _341=_341?_341:(parseInt(_342.tabWidth||opts.tabWidth||undefined));
if(_341){
p_t._outerWidth(_341);
}else{
p_t.css("width","");
}
p_t._outerHeight(opts.tabHeight);
p_t.css("lineHeight",p_t.height()+"px");
p_t.find(".easyui-fluid:visible").triggerHandler("_resize");
};
};
function _343(_344){
var opts=$.data(_344,"tabs").options;
var tab=_345(_344);
if(tab){
var _346=$(_344).children("div.tabs-panels");
var _347=opts.width=="auto"?"auto":_346.width();
var _348=opts.height=="auto"?"auto":_346.height();
tab.panel("resize",{width:_347,height:_348});
}
};
function _349(_34a){
var tabs=$.data(_34a,"tabs").tabs;
var cc=$(_34a).addClass("tabs-container");
var _34b=$("<div class=\"tabs-panels\"></div>").insertBefore(cc);
cc.children("div").each(function(){
_34b[0].appendChild(this);
});
cc[0].appendChild(_34b[0]);
$("<div class=\"tabs-header\">"+"<div class=\"tabs-scroller-left\"></div>"+"<div class=\"tabs-scroller-right\"></div>"+"<div class=\"tabs-wrap\">"+"<ul class=\"tabs\"></ul>"+"</div>"+"</div>").prependTo(_34a);
cc.children("div.tabs-panels").children("div").each(function(i){
var opts=$.extend({},$.parser.parseOptions(this),{disabled:($(this).attr("disabled")?true:undefined),selected:($(this).attr("selected")?true:undefined)});
_358(_34a,opts,$(this));
});
cc.children("div.tabs-header").find(".tabs-scroller-left, .tabs-scroller-right").hover(function(){
$(this).addClass("tabs-scroller-over");
},function(){
$(this).removeClass("tabs-scroller-over");
});
cc.bind("_resize",function(e,_34c){
if($(this).hasClass("easyui-fluid")||_34c){
_337(_34a);
_343(_34a);
}
return false;
});
};
function _34d(_34e){
var _34f=$.data(_34e,"tabs");
var opts=_34f.options;
$(_34e).children("div.tabs-header").unbind().bind("click",function(e){
if($(e.target).hasClass("tabs-scroller-left")){
$(_34e).tabs("scrollBy",-opts.scrollIncrement);
}else{
if($(e.target).hasClass("tabs-scroller-right")){
$(_34e).tabs("scrollBy",opts.scrollIncrement);
}else{
var li=$(e.target).closest("li");
if(li.hasClass("tabs-disabled")){
return false;
}
var a=$(e.target).closest("a.tabs-close");
if(a.length){
_371(_34e,_350(li));
}else{
if(li.length){
var _351=_350(li);
var _352=_34f.tabs[_351].panel("options");
if(_352.collapsible){
_352.closed?_368(_34e,_351):_385(_34e,_351);
}else{
_368(_34e,_351);
}
}
}
return false;
}
}
}).bind("contextmenu",function(e){
var li=$(e.target).closest("li");
if(li.hasClass("tabs-disabled")){
return;
}
if(li.length){
opts.onContextMenu.call(_34e,e,li.find("span.tabs-title").html(),_350(li));
}
});
function _350(li){
var _353=0;
li.parent().children("li").each(function(i){
if(li[0]==this){
_353=i;
return false;
}
});
return _353;
};
};
function _354(_355){
var opts=$.data(_355,"tabs").options;
var _356=$(_355).children("div.tabs-header");
var _357=$(_355).children("div.tabs-panels");
_356.removeClass("tabs-header-top tabs-header-bottom tabs-header-left tabs-header-right");
_357.removeClass("tabs-panels-top tabs-panels-bottom tabs-panels-left tabs-panels-right");
if(opts.tabPosition=="top"){
_356.insertBefore(_357);
}else{
if(opts.tabPosition=="bottom"){
_356.insertAfter(_357);
_356.addClass("tabs-header-bottom");
_357.addClass("tabs-panels-top");
}else{
if(opts.tabPosition=="left"){
_356.addClass("tabs-header-left");
_357.addClass("tabs-panels-right");
}else{
if(opts.tabPosition=="right"){
_356.addClass("tabs-header-right");
_357.addClass("tabs-panels-left");
}
}
}
}
if(opts.plain==true){
_356.addClass("tabs-header-plain");
}else{
_356.removeClass("tabs-header-plain");
}
_356.removeClass("tabs-header-narrow").addClass(opts.narrow?"tabs-header-narrow":"");
var tabs=_356.find(".tabs");
tabs.removeClass("tabs-pill").addClass(opts.pill?"tabs-pill":"");
tabs.removeClass("tabs-narrow").addClass(opts.narrow?"tabs-narrow":"");
tabs.removeClass("tabs-justified").addClass(opts.justified?"tabs-justified":"");
if(opts.border==true){
_356.removeClass("tabs-header-noborder");
_357.removeClass("tabs-panels-noborder");
}else{
_356.addClass("tabs-header-noborder");
_357.addClass("tabs-panels-noborder");
}
opts.doSize=true;
};
function _358(_359,_35a,pp){
_35a=_35a||{};
var _35b=$.data(_359,"tabs");
var tabs=_35b.tabs;
if(_35a.index==undefined||_35a.index>tabs.length){
_35a.index=tabs.length;
}
if(_35a.index<0){
_35a.index=0;
}
var ul=$(_359).children("div.tabs-header").find("ul.tabs");
var _35c=$(_359).children("div.tabs-panels");
var tab=$("<li>"+"<a href=\"javascript:;\" class=\"tabs-inner\">"+"<span class=\"tabs-title\"></span>"+"<span class=\"tabs-icon\"></span>"+"</a>"+"</li>");
if(!pp){
pp=$("<div></div>");
}
if(_35a.index>=tabs.length){
tab.appendTo(ul);
pp.appendTo(_35c);
tabs.push(pp);
}else{
tab.insertBefore(ul.children("li:eq("+_35a.index+")"));
pp.insertBefore(_35c.children("div.panel:eq("+_35a.index+")"));
tabs.splice(_35a.index,0,pp);
}
pp.panel($.extend({},_35a,{tab:tab,border:false,noheader:true,closed:true,doSize:false,iconCls:(_35a.icon?_35a.icon:undefined),onLoad:function(){
if(_35a.onLoad){
_35a.onLoad.apply(this,arguments);
}
_35b.options.onLoad.call(_359,$(this));
},onBeforeOpen:function(){
if(_35a.onBeforeOpen){
if(_35a.onBeforeOpen.call(this)==false){
return false;
}
}
var p=$(_359).tabs("getSelected");
if(p){
if(p[0]!=this){
$(_359).tabs("unselect",_363(_359,p));
p=$(_359).tabs("getSelected");
if(p){
return false;
}
}else{
_343(_359);
return false;
}
}
var _35d=$(this).panel("options");
_35d.tab.addClass("tabs-selected");
var wrap=$(_359).find(">div.tabs-header>div.tabs-wrap");
var left=_35d.tab.position().left;
var _35e=left+_35d.tab.outerWidth();
if(left<0||_35e>wrap.width()){
var _35f=left-(wrap.width()-_35d.tab.width())/2;
$(_359).tabs("scrollBy",_35f);
}else{
$(_359).tabs("scrollBy",0);
}
var _360=$(this).panel("panel");
_360.css("display","block");
_343(_359);
_360.css("display","none");
},onOpen:function(){
if(_35a.onOpen){
_35a.onOpen.call(this);
}
var _361=$(this).panel("options");
_35b.selectHis.push(_361.title);
_35b.options.onSelect.call(_359,_361.title,_363(_359,this));
},onBeforeClose:function(){
if(_35a.onBeforeClose){
if(_35a.onBeforeClose.call(this)==false){
return false;
}
}
$(this).panel("options").tab.removeClass("tabs-selected");
},onClose:function(){
if(_35a.onClose){
_35a.onClose.call(this);
}
var _362=$(this).panel("options");
_35b.options.onUnselect.call(_359,_362.title,_363(_359,this));
}}));
$(_359).tabs("update",{tab:pp,options:pp.panel("options"),type:"header"});
};
function _364(_365,_366){
var _367=$.data(_365,"tabs");
var opts=_367.options;
if(_366.selected==undefined){
_366.selected=true;
}
_358(_365,_366);
opts.onAdd.call(_365,_366.title,_366.index);
if(_366.selected){
_368(_365,_366.index);
}
};
function _369(_36a,_36b){
_36b.type=_36b.type||"all";
var _36c=$.data(_36a,"tabs").selectHis;
var pp=_36b.tab;
var opts=pp.panel("options");
var _36d=opts.title;
$.extend(opts,_36b.options,{iconCls:(_36b.options.icon?_36b.options.icon:undefined)});
if(_36b.type=="all"||_36b.type=="body"){
pp.panel();
}
if(_36b.type=="all"||_36b.type=="header"){
var tab=opts.tab;
if(opts.header){
tab.find(".tabs-inner").html($(opts.header));
}else{
var _36e=tab.find("span.tabs-title");
var _36f=tab.find("span.tabs-icon");
_36e.html(opts.title);
_36f.attr("class","tabs-icon");
tab.find("a.tabs-close").remove();
if(opts.closable){
_36e.addClass("tabs-closable");
$("<a href=\"javascript:;\" class=\"tabs-close\"></a>").appendTo(tab);
}else{
_36e.removeClass("tabs-closable");
}
if(opts.iconCls){
_36e.addClass("tabs-with-icon");
_36f.addClass(opts.iconCls);
}else{
_36e.removeClass("tabs-with-icon");
}
if(opts.tools){
var _370=tab.find("span.tabs-p-tool");
if(!_370.length){
var _370=$("<span class=\"tabs-p-tool\"></span>").insertAfter(tab.find("a.tabs-inner"));
}
if($.isArray(opts.tools)){
_370.empty();
for(var i=0;i<opts.tools.length;i++){
var t=$("<a href=\"javascript:;\"></a>").appendTo(_370);
t.addClass(opts.tools[i].iconCls);
if(opts.tools[i].handler){
t.bind("click",{handler:opts.tools[i].handler},function(e){
if($(this).parents("li").hasClass("tabs-disabled")){
return;
}
e.data.handler.call(this);
});
}
}
}else{
$(opts.tools).children().appendTo(_370);
}
var pr=_370.children().length*12;
if(opts.closable){
pr+=8;
_370.css("right","");
}else{
pr-=3;
_370.css("right","5px");
}
_36e.css("padding-right",pr+"px");
}else{
tab.find("span.tabs-p-tool").remove();
_36e.css("padding-right","");
}
}
if(_36d!=opts.title){
for(var i=0;i<_36c.length;i++){
if(_36c[i]==_36d){
_36c[i]=opts.title;
}
}
}
}
if(opts.disabled){
opts.tab.addClass("tabs-disabled");
}else{
opts.tab.removeClass("tabs-disabled");
}
_337(_36a);
$.data(_36a,"tabs").options.onUpdate.call(_36a,opts.title,_363(_36a,pp));
};
function _371(_372,_373){
var opts=$.data(_372,"tabs").options;
var tabs=$.data(_372,"tabs").tabs;
var _374=$.data(_372,"tabs").selectHis;
if(!_375(_372,_373)){
return;
}
var tab=_376(_372,_373);
var _377=tab.panel("options").title;
var _378=_363(_372,tab);
if(opts.onBeforeClose.call(_372,_377,_378)==false){
return;
}
var tab=_376(_372,_373,true);
tab.panel("options").tab.remove();
tab.panel("destroy");
opts.onClose.call(_372,_377,_378);
_337(_372);
for(var i=0;i<_374.length;i++){
if(_374[i]==_377){
_374.splice(i,1);
i--;
}
}
var _379=_374.pop();
if(_379){
_368(_372,_379);
}else{
if(tabs.length){
_368(_372,0);
}
}
};
function _376(_37a,_37b,_37c){
var tabs=$.data(_37a,"tabs").tabs;
var tab=null;
if(typeof _37b=="number"){
if(_37b>=0&&_37b<tabs.length){
tab=tabs[_37b];
if(_37c){
tabs.splice(_37b,1);
}
}
}else{
var tmp=$("<span></span>");
for(var i=0;i<tabs.length;i++){
var p=tabs[i];
tmp.html(p.panel("options").title);
if(tmp.text()==_37b){
tab=p;
if(_37c){
tabs.splice(i,1);
}
break;
}
}
tmp.remove();
}
return tab;
};
function _363(_37d,tab){
var tabs=$.data(_37d,"tabs").tabs;
for(var i=0;i<tabs.length;i++){
if(tabs[i][0]==$(tab)[0]){
return i;
}
}
return -1;
};
function _345(_37e){
var tabs=$.data(_37e,"tabs").tabs;
for(var i=0;i<tabs.length;i++){
var tab=tabs[i];
if(tab.panel("options").tab.hasClass("tabs-selected")){
return tab;
}
}
return null;
};
function _37f(_380){
var _381=$.data(_380,"tabs");
var tabs=_381.tabs;
for(var i=0;i<tabs.length;i++){
var opts=tabs[i].panel("options");
if(opts.selected&&!opts.disabled){
_368(_380,i);
return;
}
}
_368(_380,_381.options.selected);
};
function _368(_382,_383){
var p=_376(_382,_383);
if(p&&!p.is(":visible")){
_384(_382);
if(!p.panel("options").disabled){
p.panel("open");
}
}
};
function _385(_386,_387){
var p=_376(_386,_387);
if(p&&p.is(":visible")){
_384(_386);
p.panel("close");
}
};
function _384(_388){
$(_388).children("div.tabs-panels").each(function(){
$(this).stop(true,true);
});
};
function _375(_389,_38a){
return _376(_389,_38a)!=null;
};
function _38b(_38c,_38d){
var opts=$.data(_38c,"tabs").options;
opts.showHeader=_38d;
$(_38c).tabs("resize");
};
function _38e(_38f,_390){
var tool=$(_38f).find(">.tabs-header>.tabs-tool");
if(_390){
tool.removeClass("tabs-tool-hidden").show();
}else{
tool.addClass("tabs-tool-hidden").hide();
}
$(_38f).tabs("resize").tabs("scrollBy",0);
};
$.fn.tabs=function(_391,_392){
if(typeof _391=="string"){
return $.fn.tabs.methods[_391](this,_392);
}
_391=_391||{};
return this.each(function(){
var _393=$.data(this,"tabs");
if(_393){
$.extend(_393.options,_391);
}else{
$.data(this,"tabs",{options:$.extend({},$.fn.tabs.defaults,$.fn.tabs.parseOptions(this),_391),tabs:[],selectHis:[]});
_349(this);
}
_333(this);
_354(this);
_337(this);
_34d(this);
_37f(this);
});
};
$.fn.tabs.methods={options:function(jq){
var cc=jq[0];
var opts=$.data(cc,"tabs").options;
var s=_345(cc);
opts.selected=s?_363(cc,s):-1;
return opts;
},tabs:function(jq){
return $.data(jq[0],"tabs").tabs;
},resize:function(jq,_394){
return jq.each(function(){
_337(this,_394);
_343(this);
});
},add:function(jq,_395){
return jq.each(function(){
_364(this,_395);
});
},close:function(jq,_396){
return jq.each(function(){
_371(this,_396);
});
},getTab:function(jq,_397){
return _376(jq[0],_397);
},getTabIndex:function(jq,tab){
return _363(jq[0],tab);
},getSelected:function(jq){
return _345(jq[0]);
},select:function(jq,_398){
return jq.each(function(){
_368(this,_398);
});
},unselect:function(jq,_399){
return jq.each(function(){
_385(this,_399);
});
},exists:function(jq,_39a){
return _375(jq[0],_39a);
},update:function(jq,_39b){
return jq.each(function(){
_369(this,_39b);
});
},enableTab:function(jq,_39c){
return jq.each(function(){
var opts=$(this).tabs("getTab",_39c).panel("options");
opts.tab.removeClass("tabs-disabled");
opts.disabled=false;
});
},disableTab:function(jq,_39d){
return jq.each(function(){
var opts=$(this).tabs("getTab",_39d).panel("options");
opts.tab.addClass("tabs-disabled");
opts.disabled=true;
});
},showHeader:function(jq){
return jq.each(function(){
_38b(this,true);
});
},hideHeader:function(jq){
return jq.each(function(){
_38b(this,false);
});
},showTool:function(jq){
return jq.each(function(){
_38e(this,true);
});
},hideTool:function(jq){
return jq.each(function(){
_38e(this,false);
});
},scrollBy:function(jq,_39e){
return jq.each(function(){
var opts=$(this).tabs("options");
var wrap=$(this).find(">div.tabs-header>div.tabs-wrap");
var pos=Math.min(wrap._scrollLeft()+_39e,_39f());
wrap.animate({scrollLeft:pos},opts.scrollDuration);
function _39f(){
var w=0;
var ul=wrap.children("ul");
ul.children("li").each(function(){
w+=$(this).outerWidth(true);
});
return w-wrap.width()+(ul.outerWidth()-ul.width());
};
});
}};
$.fn.tabs.parseOptions=function(_3a0){
return $.extend({},$.parser.parseOptions(_3a0,["tools","toolPosition","tabPosition",{fit:"boolean",border:"boolean",plain:"boolean"},{headerWidth:"number",tabWidth:"number",tabHeight:"number",selected:"number"},{showHeader:"boolean",justified:"boolean",narrow:"boolean",pill:"boolean"}]));
};
$.fn.tabs.defaults={width:"auto",height:"auto",headerWidth:150,tabWidth:"auto",tabHeight:27,selected:0,showHeader:true,plain:false,fit:false,border:true,justified:false,narrow:false,pill:false,tools:null,toolPosition:"right",tabPosition:"top",scrollIncrement:100,scrollDuration:400,onLoad:function(_3a1){
},onSelect:function(_3a2,_3a3){
},onUnselect:function(_3a4,_3a5){
},onBeforeClose:function(_3a6,_3a7){
},onClose:function(_3a8,_3a9){
},onAdd:function(_3aa,_3ab){
},onUpdate:function(_3ac,_3ad){
},onContextMenu:function(e,_3ae,_3af){
}};
})(jQuery);
(function($){
var _3b0=false;
function _3b1(_3b2,_3b3){
var _3b4=$.data(_3b2,"layout");
var opts=_3b4.options;
var _3b5=_3b4.panels;
var cc=$(_3b2);
if(_3b3){
$.extend(opts,{width:_3b3.width,height:_3b3.height});
}
if(_3b2.tagName.toLowerCase()=="body"){
cc._size("fit");
}else{
cc._size(opts);
}
var cpos={top:0,left:0,width:cc.width(),height:cc.height()};
_3b6(_3b7(_3b5.expandNorth)?_3b5.expandNorth:_3b5.north,"n");
_3b6(_3b7(_3b5.expandSouth)?_3b5.expandSouth:_3b5.south,"s");
_3b8(_3b7(_3b5.expandEast)?_3b5.expandEast:_3b5.east,"e");
_3b8(_3b7(_3b5.expandWest)?_3b5.expandWest:_3b5.west,"w");
_3b5.center.panel("resize",cpos);
function _3b6(pp,type){
if(!pp.length||!_3b7(pp)){
return;
}
var opts=pp.panel("options");
pp.panel("resize",{width:cc.width(),height:opts.height});
var _3b9=pp.panel("panel").outerHeight();
pp.panel("move",{left:0,top:(type=="n"?0:cc.height()-_3b9)});
cpos.height-=_3b9;
if(type=="n"){
cpos.top+=_3b9;
if(!opts.split&&opts.border){
cpos.top--;
}
}
if(!opts.split&&opts.border){
cpos.height++;
}
};
function _3b8(pp,type){
if(!pp.length||!_3b7(pp)){
return;
}
var opts=pp.panel("options");
pp.panel("resize",{width:opts.width,height:cpos.height});
var _3ba=pp.panel("panel").outerWidth();
pp.panel("move",{left:(type=="e"?cc.width()-_3ba:0),top:cpos.top});
cpos.width-=_3ba;
if(type=="w"){
cpos.left+=_3ba;
if(!opts.split&&opts.border){
cpos.left--;
}
}
if(!opts.split&&opts.border){
cpos.width++;
}
};
};
function init(_3bb){
var cc=$(_3bb);
cc.addClass("layout");
function _3bc(el){
var _3bd=$.fn.layout.parsePanelOptions(el);
if("north,south,east,west,center".indexOf(_3bd.region)>=0){
_3c0(_3bb,_3bd,el);
}
};
var opts=cc.layout("options");
var _3be=opts.onAdd;
opts.onAdd=function(){
};
cc.find(">div,>form>div").each(function(){
_3bc(this);
});
opts.onAdd=_3be;
cc.append("<div class=\"layout-split-proxy-h\"></div><div class=\"layout-split-proxy-v\"></div>");
cc.bind("_resize",function(e,_3bf){
if($(this).hasClass("easyui-fluid")||_3bf){
_3b1(_3bb);
}
return false;
});
};
function _3c0(_3c1,_3c2,el){
_3c2.region=_3c2.region||"center";
var _3c3=$.data(_3c1,"layout").panels;
var cc=$(_3c1);
var dir=_3c2.region;
if(_3c3[dir].length){
return;
}
var pp=$(el);
if(!pp.length){
pp=$("<div></div>").appendTo(cc);
}
var _3c4=$.extend({},$.fn.layout.paneldefaults,{width:(pp.length?parseInt(pp[0].style.width)||pp.outerWidth():"auto"),height:(pp.length?parseInt(pp[0].style.height)||pp.outerHeight():"auto"),doSize:false,collapsible:true,onOpen:function(){
var tool=$(this).panel("header").children("div.panel-tool");
tool.children("a.panel-tool-collapse").hide();
var _3c5={north:"up",south:"down",east:"right",west:"left"};
if(!_3c5[dir]){
return;
}
var _3c6="layout-button-"+_3c5[dir];
var t=tool.children("a."+_3c6);
if(!t.length){
t=$("<a href=\"javascript:;\"></a>").addClass(_3c6).appendTo(tool);
t.bind("click",{dir:dir},function(e){
_3dd(_3c1,e.data.dir);
return false;
});
}
$(this).panel("options").collapsible?t.show():t.hide();
}},_3c2,{cls:((_3c2.cls||"")+" layout-panel layout-panel-"+dir),bodyCls:((_3c2.bodyCls||"")+" layout-body")});
pp.panel(_3c4);
_3c3[dir]=pp;
var _3c7={north:"s",south:"n",east:"w",west:"e"};
var _3c8=pp.panel("panel");
if(pp.panel("options").split){
_3c8.addClass("layout-split-"+dir);
}
_3c8.resizable($.extend({},{handles:(_3c7[dir]||""),disabled:(!pp.panel("options").split),onStartResize:function(e){
_3b0=true;
if(dir=="north"||dir=="south"){
var _3c9=$(">div.layout-split-proxy-v",_3c1);
}else{
var _3c9=$(">div.layout-split-proxy-h",_3c1);
}
var top=0,left=0,_3ca=0,_3cb=0;
var pos={display:"block"};
if(dir=="north"){
pos.top=parseInt(_3c8.css("top"))+_3c8.outerHeight()-_3c9.height();
pos.left=parseInt(_3c8.css("left"));
pos.width=_3c8.outerWidth();
pos.height=_3c9.height();
}else{
if(dir=="south"){
pos.top=parseInt(_3c8.css("top"));
pos.left=parseInt(_3c8.css("left"));
pos.width=_3c8.outerWidth();
pos.height=_3c9.height();
}else{
if(dir=="east"){
pos.top=parseInt(_3c8.css("top"))||0;
pos.left=parseInt(_3c8.css("left"))||0;
pos.width=_3c9.width();
pos.height=_3c8.outerHeight();
}else{
if(dir=="west"){
pos.top=parseInt(_3c8.css("top"))||0;
pos.left=_3c8.outerWidth()-_3c9.width();
pos.width=_3c9.width();
pos.height=_3c8.outerHeight();
}
}
}
}
_3c9.css(pos);
$("<div class=\"layout-mask\"></div>").css({left:0,top:0,width:cc.width(),height:cc.height()}).appendTo(cc);
},onResize:function(e){
if(dir=="north"||dir=="south"){
var _3cc=_3cd(this);
$(this).resizable("options").maxHeight=_3cc;
var _3ce=$(">div.layout-split-proxy-v",_3c1);
var top=dir=="north"?e.data.height-_3ce.height():$(_3c1).height()-e.data.height;
_3ce.css("top",top);
}else{
var _3cf=_3cd(this);
$(this).resizable("options").maxWidth=_3cf;
var _3ce=$(">div.layout-split-proxy-h",_3c1);
var left=dir=="west"?e.data.width-_3ce.width():$(_3c1).width()-e.data.width;
_3ce.css("left",left);
}
return false;
},onStopResize:function(e){
cc.children("div.layout-split-proxy-v,div.layout-split-proxy-h").hide();
pp.panel("resize",e.data);
_3b1(_3c1);
_3b0=false;
cc.find(">div.layout-mask").remove();
}},_3c2));
cc.layout("options").onAdd.call(_3c1,dir);
function _3cd(p){
var _3d0="expand"+dir.substring(0,1).toUpperCase()+dir.substring(1);
var _3d1=_3c3["center"];
var _3d2=(dir=="north"||dir=="south")?"minHeight":"minWidth";
var _3d3=(dir=="north"||dir=="south")?"maxHeight":"maxWidth";
var _3d4=(dir=="north"||dir=="south")?"_outerHeight":"_outerWidth";
var _3d5=$.parser.parseValue(_3d3,_3c3[dir].panel("options")[_3d3],$(_3c1));
var _3d6=$.parser.parseValue(_3d2,_3d1.panel("options")[_3d2],$(_3c1));
var _3d7=_3d1.panel("panel")[_3d4]()-_3d6;
if(_3b7(_3c3[_3d0])){
_3d7+=_3c3[_3d0][_3d4]()-1;
}else{
_3d7+=$(p)[_3d4]();
}
if(_3d7>_3d5){
_3d7=_3d5;
}
return _3d7;
};
};
function _3d8(_3d9,_3da){
var _3db=$.data(_3d9,"layout").panels;
if(_3db[_3da].length){
_3db[_3da].panel("destroy");
_3db[_3da]=$();
var _3dc="expand"+_3da.substring(0,1).toUpperCase()+_3da.substring(1);
if(_3db[_3dc]){
_3db[_3dc].panel("destroy");
_3db[_3dc]=undefined;
}
$(_3d9).layout("options").onRemove.call(_3d9,_3da);
}
};
function _3dd(_3de,_3df,_3e0){
if(_3e0==undefined){
_3e0="normal";
}
var _3e1=$.data(_3de,"layout").panels;
var p=_3e1[_3df];
var _3e2=p.panel("options");
if(_3e2.onBeforeCollapse.call(p)==false){
return;
}
var _3e3="expand"+_3df.substring(0,1).toUpperCase()+_3df.substring(1);
if(!_3e1[_3e3]){
_3e1[_3e3]=_3e4(_3df);
var ep=_3e1[_3e3].panel("panel");
if(!_3e2.expandMode){
ep.css("cursor","default");
}else{
ep.bind("click",function(){
if(_3e2.expandMode=="dock"){
_3f0(_3de,_3df);
}else{
p.panel("expand",false).panel("open");
var _3e5=_3e6();
p.panel("resize",_3e5.collapse);
p.panel("panel").animate(_3e5.expand,function(){
$(this).unbind(".layout").bind("mouseleave.layout",{region:_3df},function(e){
if(_3b0==true){
return;
}
if($("body>div.combo-p>div.combo-panel:visible").length){
return;
}
_3dd(_3de,e.data.region);
});
$(_3de).layout("options").onExpand.call(_3de,_3df);
});
}
return false;
});
}
}
var _3e7=_3e6();
if(!_3b7(_3e1[_3e3])){
_3e1.center.panel("resize",_3e7.resizeC);
}
p.panel("panel").animate(_3e7.collapse,_3e0,function(){
p.panel("collapse",false).panel("close");
_3e1[_3e3].panel("open").panel("resize",_3e7.expandP);
$(this).unbind(".layout");
$(_3de).layout("options").onCollapse.call(_3de,_3df);
});
function _3e4(dir){
var _3e8={"east":"left","west":"right","north":"down","south":"up"};
var isns=(_3e2.region=="north"||_3e2.region=="south");
var icon="layout-button-"+_3e8[dir];
var p=$("<div></div>").appendTo(_3de);
p.panel($.extend({},$.fn.layout.paneldefaults,{cls:("layout-expand layout-expand-"+dir),title:"&nbsp;",titleDirection:_3e2.titleDirection,iconCls:(_3e2.hideCollapsedContent?null:_3e2.iconCls),closed:true,minWidth:0,minHeight:0,doSize:false,region:_3e2.region,collapsedSize:_3e2.collapsedSize,noheader:(!isns&&_3e2.hideExpandTool),tools:((isns&&_3e2.hideExpandTool)?null:[{iconCls:icon,handler:function(){
_3f0(_3de,_3df);
return false;
}}]),onResize:function(){
var _3e9=$(this).children(".layout-expand-title");
if(_3e9.length){
_3e9._outerWidth($(this).height());
var left=($(this).width()-Math.min(_3e9._outerWidth(),_3e9._outerHeight()))/2;
var top=Math.max(_3e9._outerWidth(),_3e9._outerHeight());
if(_3e9.hasClass("layout-expand-title-down")){
left+=Math.min(_3e9._outerWidth(),_3e9._outerHeight());
top=0;
}
_3e9.css({left:(left+"px"),top:(top+"px")});
}
}}));
if(!_3e2.hideCollapsedContent){
var _3ea=typeof _3e2.collapsedContent=="function"?_3e2.collapsedContent.call(p[0],_3e2.title):_3e2.collapsedContent;
isns?p.panel("setTitle",_3ea):p.html(_3ea);
}
p.panel("panel").hover(function(){
$(this).addClass("layout-expand-over");
},function(){
$(this).removeClass("layout-expand-over");
});
return p;
};
function _3e6(){
var cc=$(_3de);
var _3eb=_3e1.center.panel("options");
var _3ec=_3e2.collapsedSize;
if(_3df=="east"){
var _3ed=p.panel("panel")._outerWidth();
var _3ee=_3eb.width+_3ed-_3ec;
if(_3e2.split||!_3e2.border){
_3ee++;
}
return {resizeC:{width:_3ee},expand:{left:cc.width()-_3ed},expandP:{top:_3eb.top,left:cc.width()-_3ec,width:_3ec,height:_3eb.height},collapse:{left:cc.width(),top:_3eb.top,height:_3eb.height}};
}else{
if(_3df=="west"){
var _3ed=p.panel("panel")._outerWidth();
var _3ee=_3eb.width+_3ed-_3ec;
if(_3e2.split||!_3e2.border){
_3ee++;
}
return {resizeC:{width:_3ee,left:_3ec-1},expand:{left:0},expandP:{left:0,top:_3eb.top,width:_3ec,height:_3eb.height},collapse:{left:-_3ed,top:_3eb.top,height:_3eb.height}};
}else{
if(_3df=="north"){
var _3ef=p.panel("panel")._outerHeight();
var hh=_3eb.height;
if(!_3b7(_3e1.expandNorth)){
hh+=_3ef-_3ec+((_3e2.split||!_3e2.border)?1:0);
}
_3e1.east.add(_3e1.west).add(_3e1.expandEast).add(_3e1.expandWest).panel("resize",{top:_3ec-1,height:hh});
return {resizeC:{top:_3ec-1,height:hh},expand:{top:0},expandP:{top:0,left:0,width:cc.width(),height:_3ec},collapse:{top:-_3ef,width:cc.width()}};
}else{
if(_3df=="south"){
var _3ef=p.panel("panel")._outerHeight();
var hh=_3eb.height;
if(!_3b7(_3e1.expandSouth)){
hh+=_3ef-_3ec+((_3e2.split||!_3e2.border)?1:0);
}
_3e1.east.add(_3e1.west).add(_3e1.expandEast).add(_3e1.expandWest).panel("resize",{height:hh});
return {resizeC:{height:hh},expand:{top:cc.height()-_3ef},expandP:{top:cc.height()-_3ec,left:0,width:cc.width(),height:_3ec},collapse:{top:cc.height(),width:cc.width()}};
}
}
}
}
};
};
function _3f0(_3f1,_3f2){
var _3f3=$.data(_3f1,"layout").panels;
var p=_3f3[_3f2];
var _3f4=p.panel("options");
if(_3f4.onBeforeExpand.call(p)==false){
return;
}
var _3f5="expand"+_3f2.substring(0,1).toUpperCase()+_3f2.substring(1);
if(_3f3[_3f5]){
_3f3[_3f5].panel("close");
p.panel("panel").stop(true,true);
p.panel("expand",false).panel("open");
var _3f6=_3f7();
p.panel("resize",_3f6.collapse);
p.panel("panel").animate(_3f6.expand,function(){
_3b1(_3f1);
$(_3f1).layout("options").onExpand.call(_3f1,_3f2);
});
}
function _3f7(){
var cc=$(_3f1);
var _3f8=_3f3.center.panel("options");
if(_3f2=="east"&&_3f3.expandEast){
return {collapse:{left:cc.width(),top:_3f8.top,height:_3f8.height},expand:{left:cc.width()-p.panel("panel")._outerWidth()}};
}else{
if(_3f2=="west"&&_3f3.expandWest){
return {collapse:{left:-p.panel("panel")._outerWidth(),top:_3f8.top,height:_3f8.height},expand:{left:0}};
}else{
if(_3f2=="north"&&_3f3.expandNorth){
return {collapse:{top:-p.panel("panel")._outerHeight(),width:cc.width()},expand:{top:0}};
}else{
if(_3f2=="south"&&_3f3.expandSouth){
return {collapse:{top:cc.height(),width:cc.width()},expand:{top:cc.height()-p.panel("panel")._outerHeight()}};
}
}
}
}
};
};
function _3b7(pp){
if(!pp){
return false;
}
if(pp.length){
return pp.panel("panel").is(":visible");
}else{
return false;
}
};
function _3f9(_3fa){
var _3fb=$.data(_3fa,"layout");
var opts=_3fb.options;
var _3fc=_3fb.panels;
var _3fd=opts.onCollapse;
opts.onCollapse=function(){
};
_3fe("east");
_3fe("west");
_3fe("north");
_3fe("south");
opts.onCollapse=_3fd;
function _3fe(_3ff){
var p=_3fc[_3ff];
if(p.length&&p.panel("options").collapsed){
_3dd(_3fa,_3ff,0);
}
};
};
function _400(_401,_402,_403){
var p=$(_401).layout("panel",_402);
p.panel("options").split=_403;
var cls="layout-split-"+_402;
var _404=p.panel("panel").removeClass(cls);
if(_403){
_404.addClass(cls);
}
_404.resizable({disabled:(!_403)});
_3b1(_401);
};
$.fn.layout=function(_405,_406){
if(typeof _405=="string"){
return $.fn.layout.methods[_405](this,_406);
}
_405=_405||{};
return this.each(function(){
var _407=$.data(this,"layout");
if(_407){
$.extend(_407.options,_405);
}else{
var opts=$.extend({},$.fn.layout.defaults,$.fn.layout.parseOptions(this),_405);
$.data(this,"layout",{options:opts,panels:{center:$(),north:$(),south:$(),east:$(),west:$()}});
init(this);
}
_3b1(this);
_3f9(this);
});
};
$.fn.layout.methods={options:function(jq){
return $.data(jq[0],"layout").options;
},resize:function(jq,_408){
return jq.each(function(){
_3b1(this,_408);
});
},panel:function(jq,_409){
return $.data(jq[0],"layout").panels[_409];
},collapse:function(jq,_40a){
return jq.each(function(){
_3dd(this,_40a);
});
},expand:function(jq,_40b){
return jq.each(function(){
_3f0(this,_40b);
});
},add:function(jq,_40c){
return jq.each(function(){
_3c0(this,_40c);
_3b1(this);
if($(this).layout("panel",_40c.region).panel("options").collapsed){
_3dd(this,_40c.region,0);
}
});
},remove:function(jq,_40d){
return jq.each(function(){
_3d8(this,_40d);
_3b1(this);
});
},split:function(jq,_40e){
return jq.each(function(){
_400(this,_40e,true);
});
},unsplit:function(jq,_40f){
return jq.each(function(){
_400(this,_40f,false);
});
}};
$.fn.layout.parseOptions=function(_410){
return $.extend({},$.parser.parseOptions(_410,[{fit:"boolean"}]));
};
$.fn.layout.defaults={fit:false,onExpand:function(_411){
},onCollapse:function(_412){
},onAdd:function(_413){
},onRemove:function(_414){
}};
$.fn.layout.parsePanelOptions=function(_415){
var t=$(_415);
return $.extend({},$.fn.panel.parseOptions(_415),$.parser.parseOptions(_415,["region",{split:"boolean",collpasedSize:"number",minWidth:"number",minHeight:"number",maxWidth:"number",maxHeight:"number"}]));
};
$.fn.layout.paneldefaults=$.extend({},$.fn.panel.defaults,{region:null,split:false,collapsedSize:28,expandMode:"float",hideExpandTool:false,hideCollapsedContent:true,collapsedContent:function(_416){
var p=$(this);
var opts=p.panel("options");
if(opts.region=="north"||opts.region=="south"){
return _416;
}
var cc=[];
if(opts.iconCls){
cc.push("<div class=\"panel-icon "+opts.iconCls+"\"></div>");
}
cc.push("<div class=\"panel-title layout-expand-title");
cc.push(" layout-expand-title-"+opts.titleDirection);
cc.push(opts.iconCls?" layout-expand-with-icon":"");
cc.push("\">");
cc.push(_416);
cc.push("</div>");
return cc.join("");
},minWidth:10,minHeight:10,maxWidth:10000,maxHeight:10000});
})(jQuery);
(function($){
$(function(){
$(document).unbind(".menu").bind("mousedown.menu",function(e){
var m=$(e.target).closest("div.menu,div.combo-p");
if(m.length){
return;
}
$("body>div.menu-top:visible").not(".menu-inline").menu("hide");
_417($("body>div.menu:visible").not(".menu-inline"));
});
});
function init(_418){
var opts=$.data(_418,"menu").options;
$(_418).addClass("menu-top");
opts.inline?$(_418).addClass("menu-inline"):$(_418).appendTo("body");
$(_418).bind("_resize",function(e,_419){
if($(this).hasClass("easyui-fluid")||_419){
$(_418).menu("resize",_418);
}
return false;
});
var _41a=_41b($(_418));
for(var i=0;i<_41a.length;i++){
_41e(_418,_41a[i]);
}
function _41b(menu){
var _41c=[];
menu.addClass("menu");
_41c.push(menu);
if(!menu.hasClass("menu-content")){
menu.children("div").each(function(){
var _41d=$(this).children("div");
if(_41d.length){
_41d.appendTo("body");
this.submenu=_41d;
var mm=_41b(_41d);
_41c=_41c.concat(mm);
}
});
}
return _41c;
};
};
function _41e(_41f,div){
var menu=$(div).addClass("menu");
if(!menu.data("menu")){
menu.data("menu",{options:$.parser.parseOptions(menu[0],["width","height"])});
}
if(!menu.hasClass("menu-content")){
menu.children("div").each(function(){
_420(_41f,this);
});
$("<div class=\"menu-line\"></div>").prependTo(menu);
}
_421(_41f,menu);
if(!menu.hasClass("menu-inline")){
menu.hide();
}
_422(_41f,menu);
};
function _420(_423,div,_424){
var item=$(div);
var _425=$.extend({},$.parser.parseOptions(item[0],["id","name","iconCls","href",{separator:"boolean"}]),{disabled:(item.attr("disabled")?true:undefined),text:$.trim(item.html()),onclick:item[0].onclick},_424||{});
_425.onclick=_425.onclick||_425.handler||null;
item.data("menuitem",{options:_425});
if(_425.separator){
item.addClass("menu-sep");
}
if(!item.hasClass("menu-sep")){
item.addClass("menu-item");
item.empty().append($("<div class=\"menu-text\"></div>").html(_425.text));
if(_425.iconCls){
$("<div class=\"menu-icon\"></div>").addClass(_425.iconCls).appendTo(item);
}
if(_425.id){
item.attr("id",_425.id);
}
if(_425.onclick){
if(typeof _425.onclick=="string"){
item.attr("onclick",_425.onclick);
}else{
item[0].onclick=eval(_425.onclick);
}
}
if(_425.disabled){
_426(_423,item[0],true);
}
if(item[0].submenu){
$("<div class=\"menu-rightarrow\"></div>").appendTo(item);
}
}
};
function _421(_427,menu){
var opts=$.data(_427,"menu").options;
var _428=menu.attr("style")||"";
var _429=menu.is(":visible");
menu.css({display:"block",left:-10000,height:"auto",overflow:"hidden"});
menu.find(".menu-item").each(function(){
$(this)._outerHeight(opts.itemHeight);
$(this).find(".menu-text").css({height:(opts.itemHeight-2)+"px",lineHeight:(opts.itemHeight-2)+"px"});
});
menu.removeClass("menu-noline").addClass(opts.noline?"menu-noline":"");
var _42a=menu.data("menu").options;
var _42b=_42a.width;
var _42c=_42a.height;
if(isNaN(parseInt(_42b))){
_42b=0;
menu.find("div.menu-text").each(function(){
if(_42b<$(this).outerWidth()){
_42b=$(this).outerWidth();
}
});
_42b=_42b?_42b+40:"";
}
var _42d=menu.outerHeight();
if(isNaN(parseInt(_42c))){
_42c=_42d;
if(menu.hasClass("menu-top")&&opts.alignTo){
var at=$(opts.alignTo);
var h1=at.offset().top-$(document).scrollTop();
var h2=$(window)._outerHeight()+$(document).scrollTop()-at.offset().top-at._outerHeight();
_42c=Math.min(_42c,Math.max(h1,h2));
}else{
if(_42c>$(window)._outerHeight()){
_42c=$(window).height();
}
}
}
menu.attr("style",_428);
menu.show();
menu._size($.extend({},_42a,{width:_42b,height:_42c,minWidth:_42a.minWidth||opts.minWidth,maxWidth:_42a.maxWidth||opts.maxWidth}));
menu.find(".easyui-fluid").triggerHandler("_resize",[true]);
menu.css("overflow",menu.outerHeight()<_42d?"auto":"hidden");
menu.children("div.menu-line")._outerHeight(_42d-2);
if(!_429){
menu.hide();
}
};
function _422(_42e,menu){
var _42f=$.data(_42e,"menu");
var opts=_42f.options;
menu.unbind(".menu");
for(var _430 in opts.events){
menu.bind(_430+".menu",{target:_42e},opts.events[_430]);
}
};
function _431(e){
var _432=e.data.target;
var _433=$.data(_432,"menu");
if(_433.timer){
clearTimeout(_433.timer);
_433.timer=null;
}
};
function _434(e){
var _435=e.data.target;
var _436=$.data(_435,"menu");
if(_436.options.hideOnUnhover){
_436.timer=setTimeout(function(){
_437(_435,$(_435).hasClass("menu-inline"));
},_436.options.duration);
}
};
function _438(e){
var _439=e.data.target;
var item=$(e.target).closest(".menu-item");
if(item.length){
item.siblings().each(function(){
if(this.submenu){
_417(this.submenu);
}
$(this).removeClass("menu-active");
});
item.addClass("menu-active");
if(item.hasClass("menu-item-disabled")){
item.addClass("menu-active-disabled");
return;
}
var _43a=item[0].submenu;
if(_43a){
$(_439).menu("show",{menu:_43a,parent:item});
}
}
};
function _43b(e){
var item=$(e.target).closest(".menu-item");
if(item.length){
item.removeClass("menu-active menu-active-disabled");
var _43c=item[0].submenu;
if(_43c){
if(e.pageX>=parseInt(_43c.css("left"))){
item.addClass("menu-active");
}else{
_417(_43c);
}
}else{
item.removeClass("menu-active");
}
}
};
function _43d(e){
var _43e=e.data.target;
var item=$(e.target).closest(".menu-item");
if(item.length){
var opts=$(_43e).data("menu").options;
var _43f=item.data("menuitem").options;
if(_43f.disabled){
return;
}
if(!item[0].submenu){
_437(_43e,opts.inline);
if(_43f.href){
location.href=_43f.href;
}
}
item.trigger("mouseenter");
opts.onClick.call(_43e,$(_43e).menu("getItem",item[0]));
}
};
function _437(_440,_441){
var _442=$.data(_440,"menu");
if(_442){
if($(_440).is(":visible")){
_417($(_440));
if(_441){
$(_440).show();
}else{
_442.options.onHide.call(_440);
}
}
}
return false;
};
function _443(_444,_445){
_445=_445||{};
var left,top;
var opts=$.data(_444,"menu").options;
var menu=$(_445.menu||_444);
$(_444).menu("resize",menu[0]);
if(menu.hasClass("menu-top")){
$.extend(opts,_445);
left=opts.left;
top=opts.top;
if(opts.alignTo){
var at=$(opts.alignTo);
left=at.offset().left;
top=at.offset().top+at._outerHeight();
if(opts.align=="right"){
left+=at.outerWidth()-menu.outerWidth();
}
}
if(left+menu.outerWidth()>$(window)._outerWidth()+$(document)._scrollLeft()){
left=$(window)._outerWidth()+$(document).scrollLeft()-menu.outerWidth()-5;
}
if(left<0){
left=0;
}
top=_446(top,opts.alignTo);
}else{
var _447=_445.parent;
left=_447.offset().left+_447.outerWidth()-2;
if(left+menu.outerWidth()+5>$(window)._outerWidth()+$(document).scrollLeft()){
left=_447.offset().left-menu.outerWidth()+2;
}
top=_446(_447.offset().top-3);
}
function _446(top,_448){
if(top+menu.outerHeight()>$(window)._outerHeight()+$(document).scrollTop()){
if(_448){
top=$(_448).offset().top-menu._outerHeight();
}else{
top=$(window)._outerHeight()+$(document).scrollTop()-menu.outerHeight();
}
}
if(top<0){
top=0;
}
return top;
};
menu.css(opts.position.call(_444,menu[0],left,top));
menu.show(0,function(){
if(!menu[0].shadow){
menu[0].shadow=$("<div class=\"menu-shadow\"></div>").insertAfter(menu);
}
menu[0].shadow.css({display:(menu.hasClass("menu-inline")?"none":"block"),zIndex:$.fn.menu.defaults.zIndex++,left:menu.css("left"),top:menu.css("top"),width:menu.outerWidth(),height:menu.outerHeight()});
menu.css("z-index",$.fn.menu.defaults.zIndex++);
if(menu.hasClass("menu-top")){
opts.onShow.call(_444);
}
});
};
function _417(menu){
if(menu&&menu.length){
_449(menu);
menu.find("div.menu-item").each(function(){
if(this.submenu){
_417(this.submenu);
}
$(this).removeClass("menu-active");
});
}
function _449(m){
m.stop(true,true);
if(m[0].shadow){
m[0].shadow.hide();
}
m.hide();
};
};
function _44a(_44b,text){
var _44c=null;
var tmp=$("<div></div>");
function find(menu){
menu.children("div.menu-item").each(function(){
var item=$(_44b).menu("getItem",this);
var s=tmp.empty().html(item.text).text();
if(text==$.trim(s)){
_44c=item;
}else{
if(this.submenu&&!_44c){
find(this.submenu);
}
}
});
};
find($(_44b));
tmp.remove();
return _44c;
};
function _426(_44d,_44e,_44f){
var t=$(_44e);
if(t.hasClass("menu-item")){
var opts=t.data("menuitem").options;
opts.disabled=_44f;
if(_44f){
t.addClass("menu-item-disabled");
t[0].onclick=null;
}else{
t.removeClass("menu-item-disabled");
t[0].onclick=opts.onclick;
}
}
};
function _450(_451,_452){
var opts=$.data(_451,"menu").options;
var menu=$(_451);
if(_452.parent){
if(!_452.parent.submenu){
var _453=$("<div></div>").appendTo("body");
_452.parent.submenu=_453;
$("<div class=\"menu-rightarrow\"></div>").appendTo(_452.parent);
_41e(_451,_453);
}
menu=_452.parent.submenu;
}
var div=$("<div></div>").appendTo(menu);
_420(_451,div,_452);
};
function _454(_455,_456){
function _457(el){
if(el.submenu){
el.submenu.children("div.menu-item").each(function(){
_457(this);
});
var _458=el.submenu[0].shadow;
if(_458){
_458.remove();
}
el.submenu.remove();
}
$(el).remove();
};
_457(_456);
};
function _459(_45a,_45b,_45c){
var menu=$(_45b).parent();
if(_45c){
$(_45b).show();
}else{
$(_45b).hide();
}
_421(_45a,menu);
};
function _45d(_45e){
$(_45e).children("div.menu-item").each(function(){
_454(_45e,this);
});
if(_45e.shadow){
_45e.shadow.remove();
}
$(_45e).remove();
};
$.fn.menu=function(_45f,_460){
if(typeof _45f=="string"){
return $.fn.menu.methods[_45f](this,_460);
}
_45f=_45f||{};
return this.each(function(){
var _461=$.data(this,"menu");
if(_461){
$.extend(_461.options,_45f);
}else{
_461=$.data(this,"menu",{options:$.extend({},$.fn.menu.defaults,$.fn.menu.parseOptions(this),_45f)});
init(this);
}
$(this).css({left:_461.options.left,top:_461.options.top});
});
};
$.fn.menu.methods={options:function(jq){
return $.data(jq[0],"menu").options;
},show:function(jq,pos){
return jq.each(function(){
_443(this,pos);
});
},hide:function(jq){
return jq.each(function(){
_437(this);
});
},destroy:function(jq){
return jq.each(function(){
_45d(this);
});
},setText:function(jq,_462){
return jq.each(function(){
var item=$(_462.target).data("menuitem").options;
item.text=_462.text;
$(_462.target).children("div.menu-text").html(_462.text);
});
},setIcon:function(jq,_463){
return jq.each(function(){
var item=$(_463.target).data("menuitem").options;
item.iconCls=_463.iconCls;
$(_463.target).children("div.menu-icon").remove();
if(_463.iconCls){
$("<div class=\"menu-icon\"></div>").addClass(_463.iconCls).appendTo(_463.target);
}
});
},getItem:function(jq,_464){
var item=$(_464).data("menuitem").options;
return $.extend({},item,{target:$(_464)[0]});
},findItem:function(jq,text){
return _44a(jq[0],text);
},appendItem:function(jq,_465){
return jq.each(function(){
_450(this,_465);
});
},removeItem:function(jq,_466){
return jq.each(function(){
_454(this,_466);
});
},enableItem:function(jq,_467){
return jq.each(function(){
_426(this,_467,false);
});
},disableItem:function(jq,_468){
return jq.each(function(){
_426(this,_468,true);
});
},showItem:function(jq,_469){
return jq.each(function(){
_459(this,_469,true);
});
},hideItem:function(jq,_46a){
return jq.each(function(){
_459(this,_46a,false);
});
},resize:function(jq,_46b){
return jq.each(function(){
_421(this,_46b?$(_46b):$(this));
});
}};
$.fn.menu.parseOptions=function(_46c){
return $.extend({},$.parser.parseOptions(_46c,[{minWidth:"number",itemHeight:"number",duration:"number",hideOnUnhover:"boolean"},{fit:"boolean",inline:"boolean",noline:"boolean"}]));
};
$.fn.menu.defaults={zIndex:110000,left:0,top:0,alignTo:null,align:"left",minWidth:120,itemHeight:22,duration:100,hideOnUnhover:true,inline:false,fit:false,noline:false,events:{mouseenter:_431,mouseleave:_434,mouseover:_438,mouseout:_43b,click:_43d},position:function(_46d,left,top){
return {left:left,top:top};
},onShow:function(){
},onHide:function(){
},onClick:function(item){
}};
})(jQuery);
(function($){
function init(_46e){
var opts=$.data(_46e,"menubutton").options;
var btn=$(_46e);
btn.linkbutton(opts);
if(opts.hasDownArrow){
btn.removeClass(opts.cls.btn1+" "+opts.cls.btn2).addClass("m-btn");
btn.removeClass("m-btn-small m-btn-medium m-btn-large").addClass("m-btn-"+opts.size);
var _46f=btn.find(".l-btn-left");
$("<span></span>").addClass(opts.cls.arrow).appendTo(_46f);
$("<span></span>").addClass("m-btn-line").appendTo(_46f);
}
$(_46e).menubutton("resize");
if(opts.menu){
$(opts.menu).menu({duration:opts.duration});
var _470=$(opts.menu).menu("options");
var _471=_470.onShow;
var _472=_470.onHide;
$.extend(_470,{onShow:function(){
var _473=$(this).menu("options");
var btn=$(_473.alignTo);
var opts=btn.menubutton("options");
btn.addClass((opts.plain==true)?opts.cls.btn2:opts.cls.btn1);
_471.call(this);
},onHide:function(){
var _474=$(this).menu("options");
var btn=$(_474.alignTo);
var opts=btn.menubutton("options");
btn.removeClass((opts.plain==true)?opts.cls.btn2:opts.cls.btn1);
_472.call(this);
}});
}
};
function _475(_476){
var opts=$.data(_476,"menubutton").options;
var btn=$(_476);
var t=btn.find("."+opts.cls.trigger);
if(!t.length){
t=btn;
}
t.unbind(".menubutton");
var _477=null;
t.bind("click.menubutton",function(){
if(!_478()){
_479(_476);
return false;
}
}).bind("mouseenter.menubutton",function(){
if(!_478()){
_477=setTimeout(function(){
_479(_476);
},opts.duration);
return false;
}
}).bind("mouseleave.menubutton",function(){
if(_477){
clearTimeout(_477);
}
$(opts.menu).triggerHandler("mouseleave");
});
function _478(){
return $(_476).linkbutton("options").disabled;
};
};
function _479(_47a){
var opts=$(_47a).menubutton("options");
if(opts.disabled||!opts.menu){
return;
}
$("body>div.menu-top").menu("hide");
var btn=$(_47a);
var mm=$(opts.menu);
if(mm.length){
mm.menu("options").alignTo=btn;
mm.menu("show",{alignTo:btn,align:opts.menuAlign});
}
btn.blur();
};
$.fn.menubutton=function(_47b,_47c){
if(typeof _47b=="string"){
var _47d=$.fn.menubutton.methods[_47b];
if(_47d){
return _47d(this,_47c);
}else{
return this.linkbutton(_47b,_47c);
}
}
_47b=_47b||{};
return this.each(function(){
var _47e=$.data(this,"menubutton");
if(_47e){
$.extend(_47e.options,_47b);
}else{
$.data(this,"menubutton",{options:$.extend({},$.fn.menubutton.defaults,$.fn.menubutton.parseOptions(this),_47b)});
$(this).removeAttr("disabled");
}
init(this);
_475(this);
});
};
$.fn.menubutton.methods={options:function(jq){
var _47f=jq.linkbutton("options");
return $.extend($.data(jq[0],"menubutton").options,{toggle:_47f.toggle,selected:_47f.selected,disabled:_47f.disabled});
},destroy:function(jq){
return jq.each(function(){
var opts=$(this).menubutton("options");
if(opts.menu){
$(opts.menu).menu("destroy");
}
$(this).remove();
});
}};
$.fn.menubutton.parseOptions=function(_480){
var t=$(_480);
return $.extend({},$.fn.linkbutton.parseOptions(_480),$.parser.parseOptions(_480,["menu",{plain:"boolean",hasDownArrow:"boolean",duration:"number"}]));
};
$.fn.menubutton.defaults=$.extend({},$.fn.linkbutton.defaults,{plain:true,hasDownArrow:true,menu:null,menuAlign:"left",duration:100,cls:{btn1:"m-btn-active",btn2:"m-btn-plain-active",arrow:"m-btn-downarrow",trigger:"m-btn"}});
})(jQuery);
(function($){
function init(_481){
var opts=$.data(_481,"splitbutton").options;
$(_481).menubutton(opts);
$(_481).addClass("s-btn");
};
$.fn.splitbutton=function(_482,_483){
if(typeof _482=="string"){
var _484=$.fn.splitbutton.methods[_482];
if(_484){
return _484(this,_483);
}else{
return this.menubutton(_482,_483);
}
}
_482=_482||{};
return this.each(function(){
var _485=$.data(this,"splitbutton");
if(_485){
$.extend(_485.options,_482);
}else{
$.data(this,"splitbutton",{options:$.extend({},$.fn.splitbutton.defaults,$.fn.splitbutton.parseOptions(this),_482)});
$(this).removeAttr("disabled");
}
init(this);
});
};
$.fn.splitbutton.methods={options:function(jq){
var _486=jq.menubutton("options");
var _487=$.data(jq[0],"splitbutton").options;
$.extend(_487,{disabled:_486.disabled,toggle:_486.toggle,selected:_486.selected});
return _487;
}};
$.fn.splitbutton.parseOptions=function(_488){
var t=$(_488);
return $.extend({},$.fn.linkbutton.parseOptions(_488),$.parser.parseOptions(_488,["menu",{plain:"boolean",duration:"number"}]));
};
$.fn.splitbutton.defaults=$.extend({},$.fn.linkbutton.defaults,{plain:true,menu:null,duration:100,cls:{btn1:"m-btn-active s-btn-active",btn2:"m-btn-plain-active s-btn-plain-active",arrow:"m-btn-downarrow",trigger:"m-btn-line"}});
})(jQuery);
(function($){
function init(_489){
var _48a=$("<span class=\"switchbutton\">"+"<span class=\"switchbutton-inner\">"+"<span class=\"switchbutton-on\"></span>"+"<span class=\"switchbutton-handle\"></span>"+"<span class=\"switchbutton-off\"></span>"+"<input class=\"switchbutton-value\" type=\"checkbox\">"+"</span>"+"</span>").insertAfter(_489);
var t=$(_489);
t.addClass("switchbutton-f").hide();
var name=t.attr("name");
if(name){
t.removeAttr("name").attr("switchbuttonName",name);
_48a.find(".switchbutton-value").attr("name",name);
}
_48a.bind("_resize",function(e,_48b){
if($(this).hasClass("easyui-fluid")||_48b){
_48c(_489);
}
return false;
});
return _48a;
};
function _48c(_48d,_48e){
var _48f=$.data(_48d,"switchbutton");
var opts=_48f.options;
var _490=_48f.switchbutton;
if(_48e){
$.extend(opts,_48e);
}
var _491=_490.is(":visible");
if(!_491){
_490.appendTo("body");
}
_490._size(opts);
var w=_490.width();
var h=_490.height();
var w=_490.outerWidth();
var h=_490.outerHeight();
var _492=parseInt(opts.handleWidth)||_490.height();
var _493=w*2-_492;
_490.find(".switchbutton-inner").css({width:_493+"px",height:h+"px",lineHeight:h+"px"});
_490.find(".switchbutton-handle")._outerWidth(_492)._outerHeight(h).css({marginLeft:-_492/2+"px"});
_490.find(".switchbutton-on").css({width:(w-_492/2)+"px",textIndent:(opts.reversed?"":"-")+_492/2+"px"});
_490.find(".switchbutton-off").css({width:(w-_492/2)+"px",textIndent:(opts.reversed?"-":"")+_492/2+"px"});
opts.marginWidth=w-_492;
_494(_48d,opts.checked,false);
if(!_491){
_490.insertAfter(_48d);
}
};
function _495(_496){
var _497=$.data(_496,"switchbutton");
var opts=_497.options;
var _498=_497.switchbutton;
var _499=_498.find(".switchbutton-inner");
var on=_499.find(".switchbutton-on").html(opts.onText);
var off=_499.find(".switchbutton-off").html(opts.offText);
var _49a=_499.find(".switchbutton-handle").html(opts.handleText);
if(opts.reversed){
off.prependTo(_499);
on.insertAfter(_49a);
}else{
on.prependTo(_499);
off.insertAfter(_49a);
}
_498.find(".switchbutton-value")._propAttr("checked",opts.checked);
_498.removeClass("switchbutton-disabled").addClass(opts.disabled?"switchbutton-disabled":"");
_498.removeClass("switchbutton-reversed").addClass(opts.reversed?"switchbutton-reversed":"");
_494(_496,opts.checked);
_49b(_496,opts.readonly);
$(_496).switchbutton("setValue",opts.value);
};
function _494(_49c,_49d,_49e){
var _49f=$.data(_49c,"switchbutton");
var opts=_49f.options;
opts.checked=_49d;
var _4a0=_49f.switchbutton.find(".switchbutton-inner");
var _4a1=_4a0.find(".switchbutton-on");
var _4a2=opts.reversed?(opts.checked?opts.marginWidth:0):(opts.checked?0:opts.marginWidth);
var dir=_4a1.css("float").toLowerCase();
var css={};
css["margin-"+dir]=-_4a2+"px";
_49e?_4a0.animate(css,200):_4a0.css(css);
var _4a3=_4a0.find(".switchbutton-value");
var ck=_4a3.is(":checked");
$(_49c).add(_4a3)._propAttr("checked",opts.checked);
if(ck!=opts.checked){
opts.onChange.call(_49c,opts.checked);
}
};
function _4a4(_4a5,_4a6){
var _4a7=$.data(_4a5,"switchbutton");
var opts=_4a7.options;
var _4a8=_4a7.switchbutton;
var _4a9=_4a8.find(".switchbutton-value");
if(_4a6){
opts.disabled=true;
$(_4a5).add(_4a9).attr("disabled","disabled");
_4a8.addClass("switchbutton-disabled");
}else{
opts.disabled=false;
$(_4a5).add(_4a9).removeAttr("disabled");
_4a8.removeClass("switchbutton-disabled");
}
};
function _49b(_4aa,mode){
var _4ab=$.data(_4aa,"switchbutton");
var opts=_4ab.options;
opts.readonly=mode==undefined?true:mode;
_4ab.switchbutton.removeClass("switchbutton-readonly").addClass(opts.readonly?"switchbutton-readonly":"");
};
function _4ac(_4ad){
var _4ae=$.data(_4ad,"switchbutton");
var opts=_4ae.options;
_4ae.switchbutton.unbind(".switchbutton").bind("click.switchbutton",function(){
if(!opts.disabled&&!opts.readonly){
_494(_4ad,opts.checked?false:true,true);
}
});
};
$.fn.switchbutton=function(_4af,_4b0){
if(typeof _4af=="string"){
return $.fn.switchbutton.methods[_4af](this,_4b0);
}
_4af=_4af||{};
return this.each(function(){
var _4b1=$.data(this,"switchbutton");
if(_4b1){
$.extend(_4b1.options,_4af);
}else{
_4b1=$.data(this,"switchbutton",{options:$.extend({},$.fn.switchbutton.defaults,$.fn.switchbutton.parseOptions(this),_4af),switchbutton:init(this)});
}
_4b1.options.originalChecked=_4b1.options.checked;
_495(this);
_48c(this);
_4ac(this);
});
};
$.fn.switchbutton.methods={options:function(jq){
var _4b2=jq.data("switchbutton");
return $.extend(_4b2.options,{value:_4b2.switchbutton.find(".switchbutton-value").val()});
},resize:function(jq,_4b3){
return jq.each(function(){
_48c(this,_4b3);
});
},enable:function(jq){
return jq.each(function(){
_4a4(this,false);
});
},disable:function(jq){
return jq.each(function(){
_4a4(this,true);
});
},readonly:function(jq,mode){
return jq.each(function(){
_49b(this,mode);
});
},check:function(jq){
return jq.each(function(){
_494(this,true);
});
},uncheck:function(jq){
return jq.each(function(){
_494(this,false);
});
},clear:function(jq){
return jq.each(function(){
_494(this,false);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).switchbutton("options");
_494(this,opts.originalChecked);
});
},setValue:function(jq,_4b4){
return jq.each(function(){
$(this).val(_4b4);
$.data(this,"switchbutton").switchbutton.find(".switchbutton-value").val(_4b4);
});
}};
$.fn.switchbutton.parseOptions=function(_4b5){
var t=$(_4b5);
return $.extend({},$.parser.parseOptions(_4b5,["onText","offText","handleText",{handleWidth:"number",reversed:"boolean"}]),{value:(t.val()||undefined),checked:(t.attr("checked")?true:undefined),disabled:(t.attr("disabled")?true:undefined),readonly:(t.attr("readonly")?true:undefined)});
};
$.fn.switchbutton.defaults={handleWidth:"auto",width:60,height:26,checked:false,disabled:false,readonly:false,reversed:false,onText:"ON",offText:"OFF",handleText:"",value:"on",onChange:function(_4b6){
}};
})(jQuery);
(function($){
function init(_4b7){
$(_4b7).addClass("validatebox-text");
};
function _4b8(_4b9){
var _4ba=$.data(_4b9,"validatebox");
_4ba.validating=false;
if(_4ba.vtimer){
clearTimeout(_4ba.vtimer);
}
if(_4ba.ftimer){
clearTimeout(_4ba.ftimer);
}
$(_4b9).tooltip("dispose");
$(_4b9).unbind();
$(_4b9).remove();
};
function _4bb(_4bc){
var opts=$.data(_4bc,"validatebox").options;
$(_4bc).unbind(".validatebox");
if(opts.novalidate||opts.disabled){
return;
}
for(var _4bd in opts.events){
$(_4bc).bind(_4bd+".validatebox",{target:_4bc},opts.events[_4bd]);
}
};
function _4be(e){
var _4bf=e.data.target;
var _4c0=$.data(_4bf,"validatebox");
var opts=_4c0.options;
if($(_4bf).attr("readonly")){
return;
}
_4c0.validating=true;
_4c0.value=opts.val(_4bf);
(function(){
if(!$(_4bf).is(":visible")){
_4c0.validating=false;
}
if(_4c0.validating){
var _4c1=opts.val(_4bf);
if(_4c0.value!=_4c1){
_4c0.value=_4c1;
if(_4c0.vtimer){
clearTimeout(_4c0.vtimer);
}
_4c0.vtimer=setTimeout(function(){
$(_4bf).validatebox("validate");
},opts.delay);
}else{
if(_4c0.message){
opts.err(_4bf,_4c0.message);
}
}
_4c0.ftimer=setTimeout(arguments.callee,opts.interval);
}
})();
};
function _4c2(e){
var _4c3=e.data.target;
var _4c4=$.data(_4c3,"validatebox");
var opts=_4c4.options;
_4c4.validating=false;
if(_4c4.vtimer){
clearTimeout(_4c4.vtimer);
_4c4.vtimer=undefined;
}
if(_4c4.ftimer){
clearTimeout(_4c4.ftimer);
_4c4.ftimer=undefined;
}
if(opts.validateOnBlur){
setTimeout(function(){
$(_4c3).validatebox("validate");
},0);
}
opts.err(_4c3,_4c4.message,"hide");
};
function _4c5(e){
var _4c6=e.data.target;
var _4c7=$.data(_4c6,"validatebox");
_4c7.options.err(_4c6,_4c7.message,"show");
};
function _4c8(e){
var _4c9=e.data.target;
var _4ca=$.data(_4c9,"validatebox");
if(!_4ca.validating){
_4ca.options.err(_4c9,_4ca.message,"hide");
}
};
function _4cb(_4cc,_4cd,_4ce){
var _4cf=$.data(_4cc,"validatebox");
var opts=_4cf.options;
var t=$(_4cc);
if(_4ce=="hide"||!_4cd){
t.tooltip("hide");
}else{
if((t.is(":focus")&&_4cf.validating)||_4ce=="show"){
t.tooltip($.extend({},opts.tipOptions,{content:_4cd,position:opts.tipPosition,deltaX:opts.deltaX,deltaY:opts.deltaY})).tooltip("show");
}
}
};
function _4d0(_4d1){
var _4d2=$.data(_4d1,"validatebox");
var opts=_4d2.options;
var box=$(_4d1);
opts.onBeforeValidate.call(_4d1);
var _4d3=_4d4();
_4d3?box.removeClass("validatebox-invalid"):box.addClass("validatebox-invalid");
opts.err(_4d1,_4d2.message);
opts.onValidate.call(_4d1,_4d3);
return _4d3;
function _4d5(msg){
_4d2.message=msg;
};
function _4d6(_4d7,_4d8){
var _4d9=opts.val(_4d1);
var _4da=/([a-zA-Z_]+)(.*)/.exec(_4d7);
var rule=opts.rules[_4da[1]];
if(rule&&_4d9){
var _4db=_4d8||opts.validParams||eval(_4da[2]);
if(!rule["validator"].call(_4d1,_4d9,_4db)){
var _4dc=rule["message"];
if(_4db){
for(var i=0;i<_4db.length;i++){
_4dc=_4dc.replace(new RegExp("\\{"+i+"\\}","g"),_4db[i]);
}
}
_4d5(opts.invalidMessage||_4dc);
return false;
}
}
return true;
};
function _4d4(){
_4d5("");
if(!opts._validateOnCreate){
setTimeout(function(){
opts._validateOnCreate=true;
},0);
return true;
}
if(opts.novalidate||opts.disabled){
return true;
}
if(opts.required){
if(opts.val(_4d1)==""){
_4d5(opts.missingMessage);
return false;
}
}
if(opts.validType){
if($.isArray(opts.validType)){
for(var i=0;i<opts.validType.length;i++){
if(!_4d6(opts.validType[i])){
return false;
}
}
}else{
if(typeof opts.validType=="string"){
if(!_4d6(opts.validType)){
return false;
}
}else{
for(var _4dd in opts.validType){
var _4de=opts.validType[_4dd];
if(!_4d6(_4dd,_4de)){
return false;
}
}
}
}
}
return true;
};
};
function _4df(_4e0,_4e1){
var opts=$.data(_4e0,"validatebox").options;
if(_4e1!=undefined){
opts.disabled=_4e1;
}
if(opts.disabled){
$(_4e0).addClass("validatebox-disabled").attr("disabled","disabled");
}else{
$(_4e0).removeClass("validatebox-disabled").removeAttr("disabled");
}
};
function _4e2(_4e3,mode){
var opts=$.data(_4e3,"validatebox").options;
opts.readonly=mode==undefined?true:mode;
if(opts.readonly||!opts.editable){
$(_4e3).triggerHandler("blur.validatebox");
$(_4e3).addClass("validatebox-readonly").attr("readonly","readonly");
}else{
$(_4e3).removeClass("validatebox-readonly").removeAttr("readonly");
}
};
$.fn.validatebox=function(_4e4,_4e5){
if(typeof _4e4=="string"){
return $.fn.validatebox.methods[_4e4](this,_4e5);
}
_4e4=_4e4||{};
return this.each(function(){
var _4e6=$.data(this,"validatebox");
if(_4e6){
$.extend(_4e6.options,_4e4);
}else{
init(this);
_4e6=$.data(this,"validatebox",{options:$.extend({},$.fn.validatebox.defaults,$.fn.validatebox.parseOptions(this),_4e4)});
}
_4e6.options._validateOnCreate=_4e6.options.validateOnCreate;
_4df(this,_4e6.options.disabled);
_4e2(this,_4e6.options.readonly);
_4bb(this);
_4d0(this);
});
};
$.fn.validatebox.methods={options:function(jq){
return $.data(jq[0],"validatebox").options;
},destroy:function(jq){
return jq.each(function(){
_4b8(this);
});
},validate:function(jq){
return jq.each(function(){
_4d0(this);
});
},isValid:function(jq){
return _4d0(jq[0]);
},enableValidation:function(jq){
return jq.each(function(){
$(this).validatebox("options").novalidate=false;
_4bb(this);
_4d0(this);
});
},disableValidation:function(jq){
return jq.each(function(){
$(this).validatebox("options").novalidate=true;
_4bb(this);
_4d0(this);
});
},resetValidation:function(jq){
return jq.each(function(){
var opts=$(this).validatebox("options");
opts._validateOnCreate=opts.validateOnCreate;
_4d0(this);
});
},enable:function(jq){
return jq.each(function(){
_4df(this,false);
_4bb(this);
_4d0(this);
});
},disable:function(jq){
return jq.each(function(){
_4df(this,true);
_4bb(this);
_4d0(this);
});
},readonly:function(jq,mode){
return jq.each(function(){
_4e2(this,mode);
_4bb(this);
_4d0(this);
});
}};
$.fn.validatebox.parseOptions=function(_4e7){
var t=$(_4e7);
return $.extend({},$.parser.parseOptions(_4e7,["validType","missingMessage","invalidMessage","tipPosition",{delay:"number",interval:"number",deltaX:"number"},{editable:"boolean",validateOnCreate:"boolean",validateOnBlur:"boolean"}]),{required:(t.attr("required")?true:undefined),disabled:(t.attr("disabled")?true:undefined),readonly:(t.attr("readonly")?true:undefined),novalidate:(t.attr("novalidate")!=undefined?true:undefined)});
};
$.fn.validatebox.defaults={required:false,validType:null,validParams:null,delay:200,interval:200,missingMessage:"This field is required.",invalidMessage:null,tipPosition:"right",deltaX:0,deltaY:0,novalidate:false,editable:true,disabled:false,readonly:false,validateOnCreate:true,validateOnBlur:false,events:{focus:_4be,blur:_4c2,mouseenter:_4c5,mouseleave:_4c8,click:function(e){
var t=$(e.data.target);
if(t.attr("type")=="checkbox"||t.attr("type")=="radio"){
t.focus().validatebox("validate");
}
}},val:function(_4e8){
return $(_4e8).val();
},err:function(_4e9,_4ea,_4eb){
_4cb(_4e9,_4ea,_4eb);
},tipOptions:{showEvent:"none",hideEvent:"none",showDelay:0,hideDelay:0,zIndex:"",onShow:function(){
$(this).tooltip("tip").css({color:"#000",borderColor:"#CC9933",backgroundColor:"#FFFFCC"});
},onHide:function(){
$(this).tooltip("dispose");
}},rules:{email:{validator:function(_4ec){
return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(_4ec);
},message:"Please enter a valid email address."},url:{validator:function(_4ed){
return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(_4ed);
},message:"Please enter a valid URL."},length:{validator:function(_4ee,_4ef){
var len=$.trim(_4ee).length;
return len>=_4ef[0]&&len<=_4ef[1];
},message:"Please enter a value between {0} and {1}."},remote:{validator:function(_4f0,_4f1){
var data={};
data[_4f1[1]]=_4f0;
var _4f2=$.ajax({url:_4f1[0],dataType:"json",data:data,async:false,cache:false,type:"post"}).responseText;
return _4f2=="true";
},message:"Please fix this field."}},onBeforeValidate:function(){
},onValidate:function(_4f3){
}};
})(jQuery);
(function($){
var _4f4=0;
function init(_4f5){
$(_4f5).addClass("textbox-f").hide();
var span=$("<span class=\"textbox\">"+"<input class=\"textbox-text\" autocomplete=\"off\">"+"<input type=\"hidden\" class=\"textbox-value\">"+"</span>").insertAfter(_4f5);
var name=$(_4f5).attr("name");
if(name){
span.find("input.textbox-value").attr("name",name);
$(_4f5).removeAttr("name").attr("textboxName",name);
}
return span;
};
function _4f6(_4f7){
var _4f8=$.data(_4f7,"textbox");
var opts=_4f8.options;
var tb=_4f8.textbox;
var _4f9="_easyui_textbox_input"+(++_4f4);
tb.addClass(opts.cls);
tb.find(".textbox-text").remove();
if(opts.multiline){
$("<textarea id=\""+_4f9+"\" class=\"textbox-text\" autocomplete=\"off\"></textarea>").prependTo(tb);
}else{
$("<input id=\""+_4f9+"\" type=\""+opts.type+"\" class=\"textbox-text\" autocomplete=\"off\">").prependTo(tb);
}
$("#"+_4f9).attr("tabindex",$(_4f7).attr("tabindex")||"").css("text-align",_4f7.style.textAlign||"");
tb.find(".textbox-addon").remove();
var bb=opts.icons?$.extend(true,[],opts.icons):[];
if(opts.iconCls){
bb.push({iconCls:opts.iconCls,disabled:true});
}
if(bb.length){
var bc=$("<span class=\"textbox-addon\"></span>").prependTo(tb);
bc.addClass("textbox-addon-"+opts.iconAlign);
for(var i=0;i<bb.length;i++){
bc.append("<a href=\"javascript:;\" class=\"textbox-icon "+bb[i].iconCls+"\" icon-index=\""+i+"\" tabindex=\"-1\"></a>");
}
}
tb.find(".textbox-button").remove();
if(opts.buttonText||opts.buttonIcon){
var btn=$("<a href=\"javascript:;\" class=\"textbox-button\"></a>").prependTo(tb);
btn.addClass("textbox-button-"+opts.buttonAlign).linkbutton({text:opts.buttonText,iconCls:opts.buttonIcon,onClick:function(){
var t=$(this).parent().prev();
t.textbox("options").onClickButton.call(t[0]);
}});
}
if(opts.label){
if(typeof opts.label=="object"){
_4f8.label=$(opts.label);
_4f8.label.attr("for",_4f9);
}else{
$(_4f8.label).remove();
_4f8.label=$("<label class=\"textbox-label\"></label>").html(opts.label);
_4f8.label.css("textAlign",opts.labelAlign).attr("for",_4f9);
if(opts.labelPosition=="after"){
_4f8.label.insertAfter(tb);
}else{
_4f8.label.insertBefore(_4f7);
}
_4f8.label.removeClass("textbox-label-left textbox-label-right textbox-label-top");
_4f8.label.addClass("textbox-label-"+opts.labelPosition);
}
}else{
$(_4f8.label).remove();
}
_4fa(_4f7);
_4fb(_4f7,opts.disabled);
_4fc(_4f7,opts.readonly);
};
function _4fd(_4fe){
var _4ff=$.data(_4fe,"textbox");
var tb=_4ff.textbox;
tb.find(".textbox-text").validatebox("destroy");
tb.remove();
$(_4ff.label).remove();
$(_4fe).remove();
};
function _500(_501,_502){
var _503=$.data(_501,"textbox");
var opts=_503.options;
var tb=_503.textbox;
var _504=tb.parent();
if(_502){
if(typeof _502=="object"){
$.extend(opts,_502);
}else{
opts.width=_502;
}
}
if(isNaN(parseInt(opts.width))){
var c=$(_501).clone();
c.css("visibility","hidden");
c.insertAfter(_501);
opts.width=c.outerWidth();
c.remove();
}
var _505=tb.is(":visible");
if(!_505){
tb.appendTo("body");
}
var _506=tb.find(".textbox-text");
var btn=tb.find(".textbox-button");
var _507=tb.find(".textbox-addon");
var _508=_507.find(".textbox-icon");
if(opts.height=="auto"){
_506.css({margin:"",paddingTop:"",paddingBottom:"",height:"",lineHeight:""});
}
tb._size(opts,_504);
if(opts.label&&opts.labelPosition){
if(opts.labelPosition=="top"){
_503.label._size({width:opts.labelWidth=="auto"?tb.outerWidth():opts.labelWidth},tb);
if(opts.height!="auto"){
tb._size("height",tb.outerHeight()-_503.label.outerHeight());
}
}else{
_503.label._size({width:opts.labelWidth,height:tb.outerHeight()},tb);
if(!opts.multiline){
_503.label.css("lineHeight",_503.label.height()+"px");
}
tb._size("width",tb.outerWidth()-_503.label.outerWidth());
}
}
if(opts.buttonAlign=="left"||opts.buttonAlign=="right"){
btn.linkbutton("resize",{height:tb.height()});
}else{
btn.linkbutton("resize",{width:"100%"});
}
var _509=tb.width()-_508.length*opts.iconWidth-_50a("left")-_50a("right");
var _50b=opts.height=="auto"?_506.outerHeight():(tb.height()-_50a("top")-_50a("bottom"));
_507.css(opts.iconAlign,_50a(opts.iconAlign)+"px");
_507.css("top",_50a("top")+"px");
_508.css({width:opts.iconWidth+"px",height:_50b+"px"});
_506.css({paddingLeft:(_501.style.paddingLeft||""),paddingRight:(_501.style.paddingRight||""),marginLeft:_50c("left"),marginRight:_50c("right"),marginTop:_50a("top"),marginBottom:_50a("bottom")});
if(opts.multiline){
_506.css({paddingTop:(_501.style.paddingTop||""),paddingBottom:(_501.style.paddingBottom||"")});
_506._outerHeight(_50b);
}else{
_506.css({paddingTop:0,paddingBottom:0,height:_50b+"px",lineHeight:_50b+"px"});
}
_506._outerWidth(_509);
opts.onResizing.call(_501,opts.width,opts.height);
if(!_505){
tb.insertAfter(_501);
}
opts.onResize.call(_501,opts.width,opts.height);
function _50c(_50d){
return (opts.iconAlign==_50d?_507._outerWidth():0)+_50a(_50d);
};
function _50a(_50e){
var w=0;
btn.filter(".textbox-button-"+_50e).each(function(){
if(_50e=="left"||_50e=="right"){
w+=$(this).outerWidth();
}else{
w+=$(this).outerHeight();
}
});
return w;
};
};
function _4fa(_50f){
var opts=$(_50f).textbox("options");
var _510=$(_50f).textbox("textbox");
_510.validatebox($.extend({},opts,{deltaX:function(_511){
return $(_50f).textbox("getTipX",_511);
},deltaY:function(_512){
return $(_50f).textbox("getTipY",_512);
},onBeforeValidate:function(){
opts.onBeforeValidate.call(_50f);
var box=$(this);
if(!box.is(":focus")){
if(box.val()!==opts.value){
opts.oldInputValue=box.val();
box.val(opts.value);
}
}
},onValidate:function(_513){
var box=$(this);
if(opts.oldInputValue!=undefined){
box.val(opts.oldInputValue);
opts.oldInputValue=undefined;
}
var tb=box.parent();
if(_513){
tb.removeClass("textbox-invalid");
}else{
tb.addClass("textbox-invalid");
}
opts.onValidate.call(_50f,_513);
}}));
};
function _514(_515){
var _516=$.data(_515,"textbox");
var opts=_516.options;
var tb=_516.textbox;
var _517=tb.find(".textbox-text");
_517.attr("placeholder",opts.prompt);
_517.unbind(".textbox");
$(_516.label).unbind(".textbox");
if(!opts.disabled&&!opts.readonly){
if(_516.label){
$(_516.label).bind("click.textbox",function(e){
if(!opts.hasFocusMe){
_517.focus();
$(_515).textbox("setSelectionRange",{start:0,end:_517.val().length});
}
});
}
_517.bind("blur.textbox",function(e){
if(!tb.hasClass("textbox-focused")){
return;
}
opts.value=$(this).val();
if(opts.value==""){
$(this).val(opts.prompt).addClass("textbox-prompt");
}else{
$(this).removeClass("textbox-prompt");
}
tb.removeClass("textbox-focused");
}).bind("focus.textbox",function(e){
opts.hasFocusMe=true;
if(tb.hasClass("textbox-focused")){
return;
}
if($(this).val()!=opts.value){
$(this).val(opts.value);
}
$(this).removeClass("textbox-prompt");
tb.addClass("textbox-focused");
});
for(var _518 in opts.inputEvents){
_517.bind(_518+".textbox",{target:_515},opts.inputEvents[_518]);
}
}
var _519=tb.find(".textbox-addon");
_519.unbind().bind("click",{target:_515},function(e){
var icon=$(e.target).closest("a.textbox-icon:not(.textbox-icon-disabled)");
if(icon.length){
var _51a=parseInt(icon.attr("icon-index"));
var conf=opts.icons[_51a];
if(conf&&conf.handler){
conf.handler.call(icon[0],e);
}
opts.onClickIcon.call(_515,_51a);
}
});
_519.find(".textbox-icon").each(function(_51b){
var conf=opts.icons[_51b];
var icon=$(this);
if(!conf||conf.disabled||opts.disabled||opts.readonly){
icon.addClass("textbox-icon-disabled");
}else{
icon.removeClass("textbox-icon-disabled");
}
});
var btn=tb.find(".textbox-button");
btn.linkbutton((opts.disabled||opts.readonly)?"disable":"enable");
tb.unbind(".textbox").bind("_resize.textbox",function(e,_51c){
if($(this).hasClass("easyui-fluid")||_51c){
_500(_515);
}
return false;
});
};
function _4fb(_51d,_51e){
var _51f=$.data(_51d,"textbox");
var opts=_51f.options;
var tb=_51f.textbox;
var _520=tb.find(".textbox-text");
var ss=$(_51d).add(tb.find(".textbox-value"));
opts.disabled=_51e;
if(opts.disabled){
_520.blur();
_520.validatebox("disable");
tb.addClass("textbox-disabled");
ss.attr("disabled","disabled");
$(_51f.label).addClass("textbox-label-disabled");
}else{
_520.validatebox("enable");
tb.removeClass("textbox-disabled");
ss.removeAttr("disabled");
$(_51f.label).removeClass("textbox-label-disabled");
}
};
function _4fc(_521,mode){
var _522=$.data(_521,"textbox");
var opts=_522.options;
var tb=_522.textbox;
var _523=tb.find(".textbox-text");
opts.readonly=mode==undefined?true:mode;
if(opts.readonly){
_523.triggerHandler("blur.textbox");
}
_523.validatebox("readonly",opts.readonly);
tb.removeClass("textbox-readonly").addClass(opts.readonly?"textbox-readonly":"");
};
$.fn.textbox=function(_524,_525){
if(typeof _524=="string"){
var _526=$.fn.textbox.methods[_524];
if(_526){
return _526(this,_525);
}else{
return this.each(function(){
var _527=$(this).textbox("textbox");
_527.validatebox(_524,_525);
});
}
}
_524=_524||{};
return this.each(function(){
var _528=$.data(this,"textbox");
if(_528){
$.extend(_528.options,_524);
if(_524.value!=undefined){
_528.options.originalValue=_524.value;
}
}else{
_528=$.data(this,"textbox",{options:$.extend({},$.fn.textbox.defaults,$.fn.textbox.parseOptions(this),_524),textbox:init(this)});
_528.options.originalValue=_528.options.value;
}
_4f6(this);
_514(this);
if(_528.options.doSize){
_500(this);
}
var _529=_528.options.value;
_528.options.value="";
$(this).textbox("initValue",_529);
});
};
$.fn.textbox.methods={options:function(jq){
return $.data(jq[0],"textbox").options;
},cloneFrom:function(jq,from){
return jq.each(function(){
var t=$(this);
if(t.data("textbox")){
return;
}
if(!$(from).data("textbox")){
$(from).textbox();
}
var opts=$.extend(true,{},$(from).textbox("options"));
var name=t.attr("name")||"";
t.addClass("textbox-f").hide();
t.removeAttr("name").attr("textboxName",name);
var span=$(from).next().clone().insertAfter(t);
var _52a="_easyui_textbox_input"+(++_4f4);
span.find(".textbox-value").attr("name",name);
span.find(".textbox-text").attr("id",_52a);
var _52b=$($(from).textbox("label")).clone();
if(_52b.length){
_52b.attr("for",_52a);
if(opts.labelPosition=="after"){
_52b.insertAfter(t.next());
}else{
_52b.insertBefore(t);
}
}
$.data(this,"textbox",{options:opts,textbox:span,label:(_52b.length?_52b:undefined)});
var _52c=$(from).textbox("button");
if(_52c.length){
t.textbox("button").linkbutton($.extend(true,{},_52c.linkbutton("options")));
}
_514(this);
_4fa(this);
});
},textbox:function(jq){
return $.data(jq[0],"textbox").textbox.find(".textbox-text");
},button:function(jq){
return $.data(jq[0],"textbox").textbox.find(".textbox-button");
},label:function(jq){
return $.data(jq[0],"textbox").label;
},destroy:function(jq){
return jq.each(function(){
_4fd(this);
});
},resize:function(jq,_52d){
return jq.each(function(){
_500(this,_52d);
});
},disable:function(jq){
return jq.each(function(){
_4fb(this,true);
_514(this);
});
},enable:function(jq){
return jq.each(function(){
_4fb(this,false);
_514(this);
});
},readonly:function(jq,mode){
return jq.each(function(){
_4fc(this,mode);
_514(this);
});
},isValid:function(jq){
return jq.textbox("textbox").validatebox("isValid");
},clear:function(jq){
return jq.each(function(){
$(this).textbox("setValue","");
});
},setText:function(jq,_52e){
return jq.each(function(){
var opts=$(this).textbox("options");
var _52f=$(this).textbox("textbox");
_52e=_52e==undefined?"":String(_52e);
if($(this).textbox("getText")!=_52e){
_52f.val(_52e);
}
opts.value=_52e;
if(!_52f.is(":focus")){
if(_52e){
_52f.removeClass("textbox-prompt");
}else{
_52f.val(opts.prompt).addClass("textbox-prompt");
}
}
$(this).textbox("validate");
});
},initValue:function(jq,_530){
return jq.each(function(){
var _531=$.data(this,"textbox");
$(this).textbox("setText",_530);
_531.textbox.find(".textbox-value").val(_530);
$(this).val(_530);
});
},setValue:function(jq,_532){
return jq.each(function(){
var opts=$.data(this,"textbox").options;
var _533=$(this).textbox("getValue");
$(this).textbox("initValue",_532);
if(_533!=_532){
opts.onChange.call(this,_532,_533);
$(this).closest("form").trigger("_change",[this]);
}
});
},getText:function(jq){
var _534=jq.textbox("textbox");
if(_534.is(":focus")){
return _534.val();
}else{
return jq.textbox("options").value;
}
},getValue:function(jq){
return jq.data("textbox").textbox.find(".textbox-value").val();
},reset:function(jq){
return jq.each(function(){
var opts=$(this).textbox("options");
$(this).textbox("textbox").val(opts.originalValue);
$(this).textbox("setValue",opts.originalValue);
});
},getIcon:function(jq,_535){
return jq.data("textbox").textbox.find(".textbox-icon:eq("+_535+")");
},getTipX:function(jq,_536){
var _537=jq.data("textbox");
var opts=_537.options;
var tb=_537.textbox;
var _538=tb.find(".textbox-text");
var _536=_536||opts.tipPosition;
var p1=tb.offset();
var p2=_538.offset();
var w1=tb.outerWidth();
var w2=_538.outerWidth();
if(_536=="right"){
return w1-w2-p2.left+p1.left;
}else{
if(_536=="left"){
return p1.left-p2.left;
}else{
return (w1-w2-p2.left+p1.left)/2-(p2.left-p1.left)/2;
}
}
},getTipY:function(jq,_539){
var _53a=jq.data("textbox");
var opts=_53a.options;
var tb=_53a.textbox;
var _53b=tb.find(".textbox-text");
var _539=_539||opts.tipPosition;
var p1=tb.offset();
var p2=_53b.offset();
var h1=tb.outerHeight();
var h2=_53b.outerHeight();
if(_539=="left"||_539=="right"){
return (h1-h2-p2.top+p1.top)/2-(p2.top-p1.top)/2;
}else{
if(_539=="bottom"){
return (h1-h2-p2.top+p1.top);
}else{
return (p1.top-p2.top);
}
}
},getSelectionStart:function(jq){
return jq.textbox("getSelectionRange").start;
},getSelectionRange:function(jq){
var _53c=jq.textbox("textbox")[0];
var _53d=0;
var end=0;
if(typeof _53c.selectionStart=="number"){
_53d=_53c.selectionStart;
end=_53c.selectionEnd;
}else{
if(_53c.createTextRange){
var s=document.selection.createRange();
var _53e=_53c.createTextRange();
_53e.setEndPoint("EndToStart",s);
_53d=_53e.text.length;
end=_53d+s.text.length;
}
}
return {start:_53d,end:end};
},setSelectionRange:function(jq,_53f){
return jq.each(function(){
var _540=$(this).textbox("textbox")[0];
var _541=_53f.start;
var end=_53f.end;
if(_540.setSelectionRange){
_540.setSelectionRange(_541,end);
}else{
if(_540.createTextRange){
var _542=_540.createTextRange();
_542.collapse();
_542.moveEnd("character",end);
_542.moveStart("character",_541);
_542.select();
}
}
});
}};
$.fn.textbox.parseOptions=function(_543){
var t=$(_543);
return $.extend({},$.fn.validatebox.parseOptions(_543),$.parser.parseOptions(_543,["prompt","iconCls","iconAlign","buttonText","buttonIcon","buttonAlign","label","labelPosition","labelAlign",{multiline:"boolean",iconWidth:"number",labelWidth:"number"}]),{value:(t.val()||undefined),type:(t.attr("type")?t.attr("type"):undefined)});
};
$.fn.textbox.defaults=$.extend({},$.fn.validatebox.defaults,{doSize:true,width:"auto",height:"auto",cls:null,prompt:"",value:"",type:"text",multiline:false,icons:[],iconCls:null,iconAlign:"right",iconWidth:18,buttonText:"",buttonIcon:null,buttonAlign:"right",label:null,labelWidth:"auto",labelPosition:"before",labelAlign:"left",inputEvents:{blur:function(e){
var t=$(e.data.target);
var opts=t.textbox("options");
if(t.textbox("getValue")!=opts.value){
t.textbox("setValue",opts.value);
}
},keydown:function(e){
if(e.keyCode==13){
var t=$(e.data.target);
t.textbox("setValue",t.textbox("getText"));
}
}},onChange:function(_544,_545){
},onResizing:function(_546,_547){
},onResize:function(_548,_549){
},onClickButton:function(){
},onClickIcon:function(_54a){
}});
})(jQuery);
(function($){
function _54b(_54c){
var _54d=$.data(_54c,"passwordbox");
var opts=_54d.options;
var _54e=$.extend(true,[],opts.icons);
if(opts.showEye){
_54e.push({iconCls:"passwordbox-open",handler:function(e){
opts.revealed=!opts.revealed;
_54f(_54c);
}});
}
$(_54c).addClass("passwordbox-f").textbox($.extend({},opts,{icons:_54e}));
_54f(_54c);
};
function _550(_551,_552,all){
var t=$(_551);
var opts=t.passwordbox("options");
if(opts.revealed){
t.textbox("setValue",_552);
return;
}
var _553=unescape(opts.passwordChar);
var cc=_552.split("");
var vv=t.passwordbox("getValue").split("");
for(var i=0;i<cc.length;i++){
var c=cc[i];
if(c!=vv[i]){
if(c!=_553){
vv.splice(i,0,c);
}
}
}
var pos=t.passwordbox("getSelectionStart");
if(cc.length<vv.length){
vv.splice(pos,vv.length-cc.length,"");
}
for(var i=0;i<cc.length;i++){
if(all||i!=pos-1){
cc[i]=_553;
}
}
t.textbox("setValue",vv.join(""));
t.textbox("setText",cc.join(""));
t.textbox("setSelectionRange",{start:pos,end:pos});
};
function _54f(_554,_555){
var t=$(_554);
var opts=t.passwordbox("options");
var icon=t.next().find(".passwordbox-open");
var _556=unescape(opts.passwordChar);
_555=_555==undefined?t.textbox("getValue"):_555;
t.textbox("setValue",_555);
t.textbox("setText",opts.revealed?_555:_555.replace(/./ig,_556));
opts.revealed?icon.addClass("passwordbox-close"):icon.removeClass("passwordbox-close");
};
function _557(e){
var _558=e.data.target;
var t=$(e.data.target);
var _559=t.data("passwordbox");
var opts=t.data("passwordbox").options;
_559.checking=true;
_559.value=t.passwordbox("getText");
(function(){
if(_559.checking){
var _55a=t.passwordbox("getText");
if(_559.value!=_55a){
_559.value=_55a;
if(_559.lastTimer){
clearTimeout(_559.lastTimer);
_559.lastTimer=undefined;
}
_550(_558,_55a);
_559.lastTimer=setTimeout(function(){
_550(_558,t.passwordbox("getText"),true);
_559.lastTimer=undefined;
},opts.lastDelay);
}
setTimeout(arguments.callee,opts.checkInterval);
}
})();
};
function _55b(e){
var _55c=e.data.target;
var _55d=$(_55c).data("passwordbox");
_55d.checking=false;
if(_55d.lastTimer){
clearTimeout(_55d.lastTimer);
_55d.lastTimer=undefined;
}
_54f(_55c);
};
$.fn.passwordbox=function(_55e,_55f){
if(typeof _55e=="string"){
var _560=$.fn.passwordbox.methods[_55e];
if(_560){
return _560(this,_55f);
}else{
return this.textbox(_55e,_55f);
}
}
_55e=_55e||{};
return this.each(function(){
var _561=$.data(this,"passwordbox");
if(_561){
$.extend(_561.options,_55e);
}else{
_561=$.data(this,"passwordbox",{options:$.extend({},$.fn.passwordbox.defaults,$.fn.passwordbox.parseOptions(this),_55e)});
}
_54b(this);
});
};
$.fn.passwordbox.methods={options:function(jq){
return $.data(jq[0],"passwordbox").options;
},setValue:function(jq,_562){
return jq.each(function(){
_54f(this,_562);
});
},clear:function(jq){
return jq.each(function(){
_54f(this,"");
});
},reset:function(jq){
return jq.each(function(){
$(this).textbox("reset");
_54f(this);
});
},showPassword:function(jq){
return jq.each(function(){
var opts=$(this).passwordbox("options");
opts.revealed=true;
_54f(this);
});
},hidePassword:function(jq){
return jq.each(function(){
var opts=$(this).passwordbox("options");
opts.revealed=false;
_54f(this);
});
}};
$.fn.passwordbox.parseOptions=function(_563){
return $.extend({},$.fn.textbox.parseOptions(_563),$.parser.parseOptions(_563,["passwordChar",{checkInterval:"number",lastDelay:"number",revealed:"boolean",showEye:"boolean"}]));
};
$.fn.passwordbox.defaults=$.extend({},$.fn.textbox.defaults,{passwordChar:"%u25CF",checkInterval:200,lastDelay:500,revealed:false,showEye:true,inputEvents:{focus:_557,blur:_55b},val:function(_564){
return $(_564).parent().prev().passwordbox("getValue");
}});
})(jQuery);
(function($){
var _565=0;
function _566(_567){
var _568=$.data(_567,"filebox");
var opts=_568.options;
opts.fileboxId="filebox_file_id_"+(++_565);
$(_567).addClass("filebox-f").textbox(opts);
$(_567).textbox("textbox").attr("readonly","readonly");
_568.filebox=$(_567).next().addClass("filebox");
var file=_569(_567);
var btn=$(_567).filebox("button");
if(btn.length){
$("<label class=\"filebox-label\" for=\""+opts.fileboxId+"\"></label>").appendTo(btn);
if(btn.linkbutton("options").disabled){
file.attr("disabled","disabled");
}else{
file.removeAttr("disabled");
}
}
};
function _569(_56a){
var _56b=$.data(_56a,"filebox");
var opts=_56b.options;
_56b.filebox.find(".textbox-value").remove();
opts.oldValue="";
var file=$("<input type=\"file\" class=\"textbox-value\">").appendTo(_56b.filebox);
file.attr("id",opts.fileboxId).attr("name",$(_56a).attr("textboxName")||"");
file.attr("accept",opts.accept);
file.attr("capture",opts.capture);
if(opts.multiple){
file.attr("multiple","multiple");
}
file.change(function(){
var _56c=this.value;
if(this.files){
_56c=$.map(this.files,function(file){
return file.name;
}).join(opts.separator);
}
$(_56a).filebox("setText",_56c);
opts.onChange.call(_56a,_56c,opts.oldValue);
opts.oldValue=_56c;
});
return file;
};
$.fn.filebox=function(_56d,_56e){
if(typeof _56d=="string"){
var _56f=$.fn.filebox.methods[_56d];
if(_56f){
return _56f(this,_56e);
}else{
return this.textbox(_56d,_56e);
}
}
_56d=_56d||{};
return this.each(function(){
var _570=$.data(this,"filebox");
if(_570){
$.extend(_570.options,_56d);
}else{
$.data(this,"filebox",{options:$.extend({},$.fn.filebox.defaults,$.fn.filebox.parseOptions(this),_56d)});
}
_566(this);
});
};
$.fn.filebox.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"filebox").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},clear:function(jq){
return jq.each(function(){
$(this).textbox("clear");
_569(this);
});
},reset:function(jq){
return jq.each(function(){
$(this).filebox("clear");
});
},setValue:function(jq){
return jq;
},setValues:function(jq){
return jq;
}};
$.fn.filebox.parseOptions=function(_571){
var t=$(_571);
return $.extend({},$.fn.textbox.parseOptions(_571),$.parser.parseOptions(_571,["accept","capture","separator"]),{multiple:(t.attr("multiple")?true:undefined)});
};
$.fn.filebox.defaults=$.extend({},$.fn.textbox.defaults,{buttonIcon:null,buttonText:"Choose File",buttonAlign:"right",inputEvents:{},accept:"",capture:"",separator:",",multiple:false});
})(jQuery);
(function($){
function _572(_573){
var _574=$.data(_573,"searchbox");
var opts=_574.options;
var _575=$.extend(true,[],opts.icons);
_575.push({iconCls:"searchbox-button",handler:function(e){
var t=$(e.data.target);
var opts=t.searchbox("options");
opts.searcher.call(e.data.target,t.searchbox("getValue"),t.searchbox("getName"));
}});
_576();
var _577=_578();
$(_573).addClass("searchbox-f").textbox($.extend({},opts,{icons:_575,buttonText:(_577?_577.text:"")}));
$(_573).attr("searchboxName",$(_573).attr("textboxName"));
_574.searchbox=$(_573).next();
_574.searchbox.addClass("searchbox");
_579(_577);
function _576(){
if(opts.menu){
_574.menu=$(opts.menu).menu();
var _57a=_574.menu.menu("options");
var _57b=_57a.onClick;
_57a.onClick=function(item){
_579(item);
_57b.call(this,item);
};
}else{
if(_574.menu){
_574.menu.menu("destroy");
}
_574.menu=null;
}
};
function _578(){
if(_574.menu){
var item=_574.menu.children("div.menu-item:first");
_574.menu.children("div.menu-item").each(function(){
var _57c=$.extend({},$.parser.parseOptions(this),{selected:($(this).attr("selected")?true:undefined)});
if(_57c.selected){
item=$(this);
return false;
}
});
return _574.menu.menu("getItem",item[0]);
}else{
return null;
}
};
function _579(item){
if(!item){
return;
}
$(_573).textbox("button").menubutton({text:item.text,iconCls:(item.iconCls||null),menu:_574.menu,menuAlign:opts.buttonAlign,plain:false});
_574.searchbox.find("input.textbox-value").attr("name",item.name||item.text);
$(_573).searchbox("resize");
};
};
$.fn.searchbox=function(_57d,_57e){
if(typeof _57d=="string"){
var _57f=$.fn.searchbox.methods[_57d];
if(_57f){
return _57f(this,_57e);
}else{
return this.textbox(_57d,_57e);
}
}
_57d=_57d||{};
return this.each(function(){
var _580=$.data(this,"searchbox");
if(_580){
$.extend(_580.options,_57d);
}else{
$.data(this,"searchbox",{options:$.extend({},$.fn.searchbox.defaults,$.fn.searchbox.parseOptions(this),_57d)});
}
_572(this);
});
};
$.fn.searchbox.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"searchbox").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},menu:function(jq){
return $.data(jq[0],"searchbox").menu;
},getName:function(jq){
return $.data(jq[0],"searchbox").searchbox.find("input.textbox-value").attr("name");
},selectName:function(jq,name){
return jq.each(function(){
var menu=$.data(this,"searchbox").menu;
if(menu){
menu.children("div.menu-item").each(function(){
var item=menu.menu("getItem",this);
if(item.name==name){
$(this).triggerHandler("click");
return false;
}
});
}
});
},destroy:function(jq){
return jq.each(function(){
var menu=$(this).searchbox("menu");
if(menu){
menu.menu("destroy");
}
$(this).textbox("destroy");
});
}};
$.fn.searchbox.parseOptions=function(_581){
var t=$(_581);
return $.extend({},$.fn.textbox.parseOptions(_581),$.parser.parseOptions(_581,["menu"]),{searcher:(t.attr("searcher")?eval(t.attr("searcher")):undefined)});
};
$.fn.searchbox.defaults=$.extend({},$.fn.textbox.defaults,{inputEvents:$.extend({},$.fn.textbox.defaults.inputEvents,{keydown:function(e){
if(e.keyCode==13){
e.preventDefault();
var t=$(e.data.target);
var opts=t.searchbox("options");
t.searchbox("setValue",$(this).val());
opts.searcher.call(e.data.target,t.searchbox("getValue"),t.searchbox("getName"));
return false;
}
}}),buttonAlign:"left",menu:null,searcher:function(_582,name){
}});
})(jQuery);
(function($){
function _583(_584,_585){
var opts=$.data(_584,"form").options;
$.extend(opts,_585||{});
var _586=$.extend({},opts.queryParams);
if(opts.onSubmit.call(_584,_586)==false){
return;
}
var _587=$(_584).find(".textbox-text:focus");
_587.triggerHandler("blur");
_587.focus();
var _588=null;
if(opts.dirty){
var ff=[];
$.map(opts.dirtyFields,function(f){
if($(f).hasClass("textbox-f")){
$(f).next().find(".textbox-value").each(function(){
ff.push(this);
});
}else{
ff.push(f);
}
});
_588=$(_584).find("input[name]:enabled,textarea[name]:enabled,select[name]:enabled").filter(function(){
return $.inArray(this,ff)==-1;
});
_588.attr("disabled","disabled");
}
if(opts.ajax){
if(opts.iframe){
_589(_584,_586);
}else{
if(window.FormData!==undefined){
_58a(_584,_586);
}else{
_589(_584,_586);
}
}
}else{
$(_584).submit();
}
if(opts.dirty){
_588.removeAttr("disabled");
}
};
function _589(_58b,_58c){
var opts=$.data(_58b,"form").options;
var _58d="easyui_frame_"+(new Date().getTime());
var _58e=$("<iframe id="+_58d+" name="+_58d+"></iframe>").appendTo("body");
_58e.attr("src",window.ActiveXObject?"javascript:false":"about:blank");
_58e.css({position:"absolute",top:-1000,left:-1000});
_58e.bind("load",cb);
_58f(_58c);
function _58f(_590){
var form=$(_58b);
if(opts.url){
form.attr("action",opts.url);
}
var t=form.attr("target"),a=form.attr("action");
form.attr("target",_58d);
var _591=$();
try{
for(var n in _590){
var _592=$("<input type=\"hidden\" name=\""+n+"\">").val(_590[n]).appendTo(form);
_591=_591.add(_592);
}
_593();
form[0].submit();
}
finally{
form.attr("action",a);
t?form.attr("target",t):form.removeAttr("target");
_591.remove();
}
};
function _593(){
var f=$("#"+_58d);
if(!f.length){
return;
}
try{
var s=f.contents()[0].readyState;
if(s&&s.toLowerCase()=="uninitialized"){
setTimeout(_593,100);
}
}
catch(e){
cb();
}
};
var _594=10;
function cb(){
var f=$("#"+_58d);
if(!f.length){
return;
}
f.unbind();
var data="";
try{
var body=f.contents().find("body");
data=body.html();
if(data==""){
if(--_594){
setTimeout(cb,100);
return;
}
}
var ta=body.find(">textarea");
if(ta.length){
data=ta.val();
}else{
var pre=body.find(">pre");
if(pre.length){
data=pre.html();
}
}
}
catch(e){
}
opts.success.call(_58b,data);
setTimeout(function(){
f.unbind();
f.remove();
},100);
};
};
function _58a(_595,_596){
var opts=$.data(_595,"form").options;
var _597=new FormData($(_595)[0]);
for(var name in _596){
_597.append(name,_596[name]);
}
$.ajax({url:opts.url,type:"post",xhr:function(){
var xhr=$.ajaxSettings.xhr();
if(xhr.upload){
xhr.upload.addEventListener("progress",function(e){
if(e.lengthComputable){
var _598=e.total;
var _599=e.loaded||e.position;
var _59a=Math.ceil(_599*100/_598);
opts.onProgress.call(_595,_59a);
}
},false);
}
return xhr;
},data:_597,dataType:"html",cache:false,contentType:false,processData:false,complete:function(res){
opts.success.call(_595,res.responseText);
}});
};
function load(_59b,data){
var opts=$.data(_59b,"form").options;
if(typeof data=="string"){
var _59c={};
if(opts.onBeforeLoad.call(_59b,_59c)==false){
return;
}
$.ajax({url:data,data:_59c,dataType:"json",success:function(data){
_59d(data);
},error:function(){
opts.onLoadError.apply(_59b,arguments);
}});
}else{
_59d(data);
}
function _59d(data){
var form=$(_59b);
for(var name in data){
var val=data[name];
if(!_59e(name,val)){
if(!_59f(name,val)){
form.find("input[name=\""+name+"\"]").val(val);
form.find("textarea[name=\""+name+"\"]").val(val);
form.find("select[name=\""+name+"\"]").val(val);
}
}
}
opts.onLoadSuccess.call(_59b,data);
form.form("validate");
};
function _59e(name,val){
var cc=$(_59b).find("[switchbuttonName=\""+name+"\"]");
if(cc.length){
cc.switchbutton("uncheck");
cc.each(function(){
if(_5a0($(this).switchbutton("options").value,val)){
$(this).switchbutton("check");
}
});
return true;
}
cc=$(_59b).find("input[name=\""+name+"\"][type=radio], input[name=\""+name+"\"][type=checkbox]");
if(cc.length){
cc._propAttr("checked",false);
cc.each(function(){
if(_5a0($(this).val(),val)){
$(this)._propAttr("checked",true);
}
});
return true;
}
return false;
};
function _5a0(v,val){
if(v==String(val)||$.inArray(v,$.isArray(val)?val:[val])>=0){
return true;
}else{
return false;
}
};
function _59f(name,val){
var _5a1=$(_59b).find("[textboxName=\""+name+"\"],[sliderName=\""+name+"\"]");
if(_5a1.length){
for(var i=0;i<opts.fieldTypes.length;i++){
var type=opts.fieldTypes[i];
var _5a2=_5a1.data(type);
if(_5a2){
if(_5a2.options.multiple||_5a2.options.range){
_5a1[type]("setValues",val);
}else{
_5a1[type]("setValue",val);
}
return true;
}
}
}
return false;
};
};
function _5a3(_5a4){
$("input,select,textarea",_5a4).each(function(){
if($(this).hasClass("textbox-value")){
return;
}
var t=this.type,tag=this.tagName.toLowerCase();
if(t=="text"||t=="hidden"||t=="password"||tag=="textarea"){
this.value="";
}else{
if(t=="file"){
var file=$(this);
if(!file.hasClass("textbox-value")){
var _5a5=file.clone().val("");
_5a5.insertAfter(file);
if(file.data("validatebox")){
file.validatebox("destroy");
_5a5.validatebox();
}else{
file.remove();
}
}
}else{
if(t=="checkbox"||t=="radio"){
this.checked=false;
}else{
if(tag=="select"){
this.selectedIndex=-1;
}
}
}
}
});
var tmp=$();
var form=$(_5a4);
var opts=$.data(_5a4,"form").options;
for(var i=0;i<opts.fieldTypes.length;i++){
var type=opts.fieldTypes[i];
var _5a6=form.find("."+type+"-f").not(tmp);
if(_5a6.length&&_5a6[type]){
_5a6[type]("clear");
tmp=tmp.add(_5a6);
}
}
form.form("validate");
};
function _5a7(_5a8){
_5a8.reset();
var form=$(_5a8);
var opts=$.data(_5a8,"form").options;
for(var i=opts.fieldTypes.length-1;i>=0;i--){
var type=opts.fieldTypes[i];
var _5a9=form.find("."+type+"-f");
if(_5a9.length&&_5a9[type]){
_5a9[type]("reset");
}
}
form.form("validate");
};
function _5aa(_5ab){
var _5ac=$.data(_5ab,"form").options;
$(_5ab).unbind(".form");
if(_5ac.ajax){
$(_5ab).bind("submit.form",function(){
setTimeout(function(){
_583(_5ab,_5ac);
},0);
return false;
});
}
$(_5ab).bind("_change.form",function(e,t){
if($.inArray(t,_5ac.dirtyFields)==-1){
_5ac.dirtyFields.push(t);
}
_5ac.onChange.call(this,t);
}).bind("change.form",function(e){
var t=e.target;
if(!$(t).hasClass("textbox-text")){
if($.inArray(t,_5ac.dirtyFields)==-1){
_5ac.dirtyFields.push(t);
}
_5ac.onChange.call(this,t);
}
});
_5ad(_5ab,_5ac.novalidate);
};
function _5ae(_5af,_5b0){
_5b0=_5b0||{};
var _5b1=$.data(_5af,"form");
if(_5b1){
$.extend(_5b1.options,_5b0);
}else{
$.data(_5af,"form",{options:$.extend({},$.fn.form.defaults,$.fn.form.parseOptions(_5af),_5b0)});
}
};
function _5b2(_5b3){
if($.fn.validatebox){
var t=$(_5b3);
t.find(".validatebox-text:not(:disabled)").validatebox("validate");
var _5b4=t.find(".validatebox-invalid");
_5b4.filter(":not(:disabled):first").focus();
return _5b4.length==0;
}
return true;
};
function _5ad(_5b5,_5b6){
var opts=$.data(_5b5,"form").options;
opts.novalidate=_5b6;
$(_5b5).find(".validatebox-text:not(:disabled)").validatebox(_5b6?"disableValidation":"enableValidation");
};
$.fn.form=function(_5b7,_5b8){
if(typeof _5b7=="string"){
this.each(function(){
_5ae(this);
});
return $.fn.form.methods[_5b7](this,_5b8);
}
return this.each(function(){
_5ae(this,_5b7);
_5aa(this);
});
};
$.fn.form.methods={options:function(jq){
return $.data(jq[0],"form").options;
},submit:function(jq,_5b9){
return jq.each(function(){
_583(this,_5b9);
});
},load:function(jq,data){
return jq.each(function(){
load(this,data);
});
},clear:function(jq){
return jq.each(function(){
_5a3(this);
});
},reset:function(jq){
return jq.each(function(){
_5a7(this);
});
},validate:function(jq){
return _5b2(jq[0]);
},disableValidation:function(jq){
return jq.each(function(){
_5ad(this,true);
});
},enableValidation:function(jq){
return jq.each(function(){
_5ad(this,false);
});
},resetValidation:function(jq){
return jq.each(function(){
$(this).find(".validatebox-text:not(:disabled)").validatebox("resetValidation");
});
},resetDirty:function(jq){
return jq.each(function(){
$(this).form("options").dirtyFields=[];
});
}};
$.fn.form.parseOptions=function(_5ba){
var t=$(_5ba);
return $.extend({},$.parser.parseOptions(_5ba,[{ajax:"boolean",dirty:"boolean"}]),{url:(t.attr("action")?t.attr("action"):undefined)});
};
$.fn.form.defaults={fieldTypes:["tagbox","combobox","combotree","combogrid","combotreegrid","datetimebox","datebox","combo","datetimespinner","timespinner","numberspinner","spinner","slider","searchbox","numberbox","passwordbox","filebox","textbox","switchbutton"],novalidate:false,ajax:true,iframe:true,dirty:false,dirtyFields:[],url:null,queryParams:{},onSubmit:function(_5bb){
return $(this).form("validate");
},onProgress:function(_5bc){
},success:function(data){
},onBeforeLoad:function(_5bd){
},onLoadSuccess:function(data){
},onLoadError:function(){
},onChange:function(_5be){
}};
})(jQuery);
(function($){
function _5bf(_5c0){
var _5c1=$.data(_5c0,"numberbox");
var opts=_5c1.options;
$(_5c0).addClass("numberbox-f").textbox(opts);
$(_5c0).textbox("textbox").css({imeMode:"disabled"});
$(_5c0).attr("numberboxName",$(_5c0).attr("textboxName"));
_5c1.numberbox=$(_5c0).next();
_5c1.numberbox.addClass("numberbox");
var _5c2=opts.parser.call(_5c0,opts.value);
var _5c3=opts.formatter.call(_5c0,_5c2);
$(_5c0).numberbox("initValue",_5c2).numberbox("setText",_5c3);
};
function _5c4(_5c5,_5c6){
var _5c7=$.data(_5c5,"numberbox");
var opts=_5c7.options;
opts.value=parseFloat(_5c6);
var _5c6=opts.parser.call(_5c5,_5c6);
var text=opts.formatter.call(_5c5,_5c6);
opts.value=_5c6;
$(_5c5).textbox("setText",text).textbox("setValue",_5c6);
text=opts.formatter.call(_5c5,$(_5c5).textbox("getValue"));
$(_5c5).textbox("setText",text);
};
$.fn.numberbox=function(_5c8,_5c9){
if(typeof _5c8=="string"){
var _5ca=$.fn.numberbox.methods[_5c8];
if(_5ca){
return _5ca(this,_5c9);
}else{
return this.textbox(_5c8,_5c9);
}
}
_5c8=_5c8||{};
return this.each(function(){
var _5cb=$.data(this,"numberbox");
if(_5cb){
$.extend(_5cb.options,_5c8);
}else{
_5cb=$.data(this,"numberbox",{options:$.extend({},$.fn.numberbox.defaults,$.fn.numberbox.parseOptions(this),_5c8)});
}
_5bf(this);
});
};
$.fn.numberbox.methods={options:function(jq){
var opts=jq.data("textbox")?jq.textbox("options"):{};
return $.extend($.data(jq[0],"numberbox").options,{width:opts.width,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},fix:function(jq){
return jq.each(function(){
var opts=$(this).numberbox("options");
opts.value=null;
var _5cc=opts.parser.call(this,$(this).numberbox("getText"));
$(this).numberbox("setValue",_5cc);
});
},setValue:function(jq,_5cd){
return jq.each(function(){
_5c4(this,_5cd);
});
},clear:function(jq){
return jq.each(function(){
$(this).textbox("clear");
$(this).numberbox("options").value="";
});
},reset:function(jq){
return jq.each(function(){
$(this).textbox("reset");
$(this).numberbox("setValue",$(this).numberbox("getValue"));
});
}};
$.fn.numberbox.parseOptions=function(_5ce){
var t=$(_5ce);
return $.extend({},$.fn.textbox.parseOptions(_5ce),$.parser.parseOptions(_5ce,["decimalSeparator","groupSeparator","suffix",{min:"number",max:"number",precision:"number"}]),{prefix:(t.attr("prefix")?t.attr("prefix"):undefined)});
};
$.fn.numberbox.defaults=$.extend({},$.fn.textbox.defaults,{inputEvents:{keypress:function(e){
var _5cf=e.data.target;
var opts=$(_5cf).numberbox("options");
return opts.filter.call(_5cf,e);
},blur:function(e){
$(e.data.target).numberbox("fix");
},keydown:function(e){
if(e.keyCode==13){
$(e.data.target).numberbox("fix");
}
}},min:null,max:null,precision:0,decimalSeparator:".",groupSeparator:"",prefix:"",suffix:"",filter:function(e){
var opts=$(this).numberbox("options");
var s=$(this).numberbox("getText");
if(e.metaKey||e.ctrlKey){
return true;
}
if($.inArray(String(e.which),["46","8","13","0"])>=0){
return true;
}
var tmp=$("<span></span>");
tmp.html(String.fromCharCode(e.which));
var c=tmp.text();
tmp.remove();
if(!c){
return true;
}
if(c=="-"||c==opts.decimalSeparator){
return (s.indexOf(c)==-1)?true:false;
}else{
if(c==opts.groupSeparator){
return true;
}else{
if("0123456789".indexOf(c)>=0){
return true;
}else{
return false;
}
}
}
},formatter:function(_5d0){
if(!_5d0){
return _5d0;
}
_5d0=_5d0+"";
var opts=$(this).numberbox("options");
var s1=_5d0,s2="";
var dpos=_5d0.indexOf(".");
if(dpos>=0){
s1=_5d0.substring(0,dpos);
s2=_5d0.substring(dpos+1,_5d0.length);
}
if(opts.groupSeparator){
var p=/(\d+)(\d{3})/;
while(p.test(s1)){
s1=s1.replace(p,"$1"+opts.groupSeparator+"$2");
}
}
if(s2){
return opts.prefix+s1+opts.decimalSeparator+s2+opts.suffix;
}else{
return opts.prefix+s1+opts.suffix;
}
},parser:function(s){
s=s+"";
var opts=$(this).numberbox("options");
if(opts.prefix){
s=$.trim(s.replace(new RegExp("\\"+$.trim(opts.prefix),"g"),""));
}
if(opts.suffix){
s=$.trim(s.replace(new RegExp("\\"+$.trim(opts.suffix),"g"),""));
}
if(parseFloat(s)!=opts.value){
if(opts.groupSeparator){
s=$.trim(s.replace(new RegExp("\\"+opts.groupSeparator,"g"),""));
}
if(opts.decimalSeparator){
s=$.trim(s.replace(new RegExp("\\"+opts.decimalSeparator,"g"),"."));
}
s=s.replace(/\s/g,"");
}
var val=parseFloat(s).toFixed(opts.precision);
if(isNaN(val)){
val="";
}else{
if(typeof (opts.min)=="number"&&val<opts.min){
val=opts.min.toFixed(opts.precision);
}else{
if(typeof (opts.max)=="number"&&val>opts.max){
val=opts.max.toFixed(opts.precision);
}
}
}
return val;
}});
})(jQuery);
(function($){
function _5d1(_5d2,_5d3){
var opts=$.data(_5d2,"calendar").options;
var t=$(_5d2);
if(_5d3){
$.extend(opts,{width:_5d3.width,height:_5d3.height});
}
t._size(opts,t.parent());
t.find(".calendar-body")._outerHeight(t.height()-t.find(".calendar-header")._outerHeight());
if(t.find(".calendar-menu").is(":visible")){
_5d4(_5d2);
}
};
function init(_5d5){
$(_5d5).addClass("calendar").html("<div class=\"calendar-header\">"+"<div class=\"calendar-nav calendar-prevmonth\"></div>"+"<div class=\"calendar-nav calendar-nextmonth\"></div>"+"<div class=\"calendar-nav calendar-prevyear\"></div>"+"<div class=\"calendar-nav calendar-nextyear\"></div>"+"<div class=\"calendar-title\">"+"<span class=\"calendar-text\"></span>"+"</div>"+"</div>"+"<div class=\"calendar-body\">"+"<div class=\"calendar-menu\">"+"<div class=\"calendar-menu-year-inner\">"+"<span class=\"calendar-nav calendar-menu-prev\"></span>"+"<span><input class=\"calendar-menu-year\" type=\"text\"></input></span>"+"<span class=\"calendar-nav calendar-menu-next\"></span>"+"</div>"+"<div class=\"calendar-menu-month-inner\">"+"</div>"+"</div>"+"</div>");
$(_5d5).bind("_resize",function(e,_5d6){
if($(this).hasClass("easyui-fluid")||_5d6){
_5d1(_5d5);
}
return false;
});
};
function _5d7(_5d8){
var opts=$.data(_5d8,"calendar").options;
var menu=$(_5d8).find(".calendar-menu");
menu.find(".calendar-menu-year").unbind(".calendar").bind("keypress.calendar",function(e){
if(e.keyCode==13){
_5d9(true);
}
});
$(_5d8).unbind(".calendar").bind("mouseover.calendar",function(e){
var t=_5da(e.target);
if(t.hasClass("calendar-nav")||t.hasClass("calendar-text")||(t.hasClass("calendar-day")&&!t.hasClass("calendar-disabled"))){
t.addClass("calendar-nav-hover");
}
}).bind("mouseout.calendar",function(e){
var t=_5da(e.target);
if(t.hasClass("calendar-nav")||t.hasClass("calendar-text")||(t.hasClass("calendar-day")&&!t.hasClass("calendar-disabled"))){
t.removeClass("calendar-nav-hover");
}
}).bind("click.calendar",function(e){
var t=_5da(e.target);
if(t.hasClass("calendar-menu-next")||t.hasClass("calendar-nextyear")){
_5db(1);
}else{
if(t.hasClass("calendar-menu-prev")||t.hasClass("calendar-prevyear")){
_5db(-1);
}else{
if(t.hasClass("calendar-menu-month")){
menu.find(".calendar-selected").removeClass("calendar-selected");
t.addClass("calendar-selected");
_5d9(true);
}else{
if(t.hasClass("calendar-prevmonth")){
_5dc(-1);
}else{
if(t.hasClass("calendar-nextmonth")){
_5dc(1);
}else{
if(t.hasClass("calendar-text")){
if(menu.is(":visible")){
menu.hide();
}else{
_5d4(_5d8);
}
}else{
if(t.hasClass("calendar-day")){
if(t.hasClass("calendar-disabled")){
return;
}
var _5dd=opts.current;
t.closest("div.calendar-body").find(".calendar-selected").removeClass("calendar-selected");
t.addClass("calendar-selected");
var _5de=t.attr("abbr").split(",");
var y=parseInt(_5de[0]);
var m=parseInt(_5de[1]);
var d=parseInt(_5de[2]);
opts.current=new Date(y,m-1,d);
opts.onSelect.call(_5d8,opts.current);
if(!_5dd||_5dd.getTime()!=opts.current.getTime()){
opts.onChange.call(_5d8,opts.current,_5dd);
}
if(opts.year!=y||opts.month!=m){
opts.year=y;
opts.month=m;
show(_5d8);
}
}
}
}
}
}
}
}
});
function _5da(t){
var day=$(t).closest(".calendar-day");
if(day.length){
return day;
}else{
return $(t);
}
};
function _5d9(_5df){
var menu=$(_5d8).find(".calendar-menu");
var year=menu.find(".calendar-menu-year").val();
var _5e0=menu.find(".calendar-selected").attr("abbr");
if(!isNaN(year)){
opts.year=parseInt(year);
opts.month=parseInt(_5e0);
show(_5d8);
}
if(_5df){
menu.hide();
}
};
function _5db(_5e1){
opts.year+=_5e1;
show(_5d8);
menu.find(".calendar-menu-year").val(opts.year);
};
function _5dc(_5e2){
opts.month+=_5e2;
if(opts.month>12){
opts.year++;
opts.month=1;
}else{
if(opts.month<1){
opts.year--;
opts.month=12;
}
}
show(_5d8);
menu.find("td.calendar-selected").removeClass("calendar-selected");
menu.find("td:eq("+(opts.month-1)+")").addClass("calendar-selected");
};
};
function _5d4(_5e3){
var opts=$.data(_5e3,"calendar").options;
$(_5e3).find(".calendar-menu").show();
if($(_5e3).find(".calendar-menu-month-inner").is(":empty")){
$(_5e3).find(".calendar-menu-month-inner").empty();
var t=$("<table class=\"calendar-mtable\"></table>").appendTo($(_5e3).find(".calendar-menu-month-inner"));
var idx=0;
for(var i=0;i<3;i++){
var tr=$("<tr></tr>").appendTo(t);
for(var j=0;j<4;j++){
$("<td class=\"calendar-nav calendar-menu-month\"></td>").html(opts.months[idx++]).attr("abbr",idx).appendTo(tr);
}
}
}
var body=$(_5e3).find(".calendar-body");
var sele=$(_5e3).find(".calendar-menu");
var _5e4=sele.find(".calendar-menu-year-inner");
var _5e5=sele.find(".calendar-menu-month-inner");
_5e4.find("input").val(opts.year).focus();
_5e5.find("td.calendar-selected").removeClass("calendar-selected");
_5e5.find("td:eq("+(opts.month-1)+")").addClass("calendar-selected");
sele._outerWidth(body._outerWidth());
sele._outerHeight(body._outerHeight());
_5e5._outerHeight(sele.height()-_5e4._outerHeight());
};
function _5e6(_5e7,year,_5e8){
var opts=$.data(_5e7,"calendar").options;
var _5e9=[];
var _5ea=new Date(year,_5e8,0).getDate();
for(var i=1;i<=_5ea;i++){
_5e9.push([year,_5e8,i]);
}
var _5eb=[],week=[];
var _5ec=-1;
while(_5e9.length>0){
var date=_5e9.shift();
week.push(date);
var day=new Date(date[0],date[1]-1,date[2]).getDay();
if(_5ec==day){
day=0;
}else{
if(day==(opts.firstDay==0?7:opts.firstDay)-1){
_5eb.push(week);
week=[];
}
}
_5ec=day;
}
if(week.length){
_5eb.push(week);
}
var _5ed=_5eb[0];
if(_5ed.length<7){
while(_5ed.length<7){
var _5ee=_5ed[0];
var date=new Date(_5ee[0],_5ee[1]-1,_5ee[2]-1);
_5ed.unshift([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
}else{
var _5ee=_5ed[0];
var week=[];
for(var i=1;i<=7;i++){
var date=new Date(_5ee[0],_5ee[1]-1,_5ee[2]-i);
week.unshift([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
_5eb.unshift(week);
}
var _5ef=_5eb[_5eb.length-1];
while(_5ef.length<7){
var _5f0=_5ef[_5ef.length-1];
var date=new Date(_5f0[0],_5f0[1]-1,_5f0[2]+1);
_5ef.push([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
if(_5eb.length<6){
var _5f0=_5ef[_5ef.length-1];
var week=[];
for(var i=1;i<=7;i++){
var date=new Date(_5f0[0],_5f0[1]-1,_5f0[2]+i);
week.push([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
_5eb.push(week);
}
return _5eb;
};
function show(_5f1){
var opts=$.data(_5f1,"calendar").options;
if(opts.current&&!opts.validator.call(_5f1,opts.current)){
opts.current=null;
}
var now=new Date();
var _5f2=now.getFullYear()+","+(now.getMonth()+1)+","+now.getDate();
var _5f3=opts.current?(opts.current.getFullYear()+","+(opts.current.getMonth()+1)+","+opts.current.getDate()):"";
var _5f4=6-opts.firstDay;
var _5f5=_5f4+1;
if(_5f4>=7){
_5f4-=7;
}
if(_5f5>=7){
_5f5-=7;
}
$(_5f1).find(".calendar-title span").html(opts.months[opts.month-1]+" "+opts.year);
var body=$(_5f1).find("div.calendar-body");
body.children("table").remove();
var data=["<table class=\"calendar-dtable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">"];
data.push("<thead><tr>");
if(opts.showWeek){
data.push("<th class=\"calendar-week\">"+opts.weekNumberHeader+"</th>");
}
for(var i=opts.firstDay;i<opts.weeks.length;i++){
data.push("<th>"+opts.weeks[i]+"</th>");
}
for(var i=0;i<opts.firstDay;i++){
data.push("<th>"+opts.weeks[i]+"</th>");
}
data.push("</tr></thead>");
data.push("<tbody>");
var _5f6=_5e6(_5f1,opts.year,opts.month);
for(var i=0;i<_5f6.length;i++){
var week=_5f6[i];
var cls="";
if(i==0){
cls="calendar-first";
}else{
if(i==_5f6.length-1){
cls="calendar-last";
}
}
data.push("<tr class=\""+cls+"\">");
if(opts.showWeek){
var _5f7=opts.getWeekNumber(new Date(week[0][0],parseInt(week[0][1])-1,week[0][2]));
data.push("<td class=\"calendar-week\">"+_5f7+"</td>");
}
for(var j=0;j<week.length;j++){
var day=week[j];
var s=day[0]+","+day[1]+","+day[2];
var _5f8=new Date(day[0],parseInt(day[1])-1,day[2]);
var d=opts.formatter.call(_5f1,_5f8);
var css=opts.styler.call(_5f1,_5f8);
var _5f9="";
var _5fa="";
if(typeof css=="string"){
_5fa=css;
}else{
if(css){
_5f9=css["class"]||"";
_5fa=css["style"]||"";
}
}
var cls="calendar-day";
if(!(opts.year==day[0]&&opts.month==day[1])){
cls+=" calendar-other-month";
}
if(s==_5f2){
cls+=" calendar-today";
}
if(s==_5f3){
cls+=" calendar-selected";
}
if(j==_5f4){
cls+=" calendar-saturday";
}else{
if(j==_5f5){
cls+=" calendar-sunday";
}
}
if(j==0){
cls+=" calendar-first";
}else{
if(j==week.length-1){
cls+=" calendar-last";
}
}
cls+=" "+_5f9;
if(!opts.validator.call(_5f1,_5f8)){
cls+=" calendar-disabled";
}
data.push("<td class=\""+cls+"\" abbr=\""+s+"\" style=\""+_5fa+"\">"+d+"</td>");
}
data.push("</tr>");
}
data.push("</tbody>");
data.push("</table>");
body.append(data.join(""));
body.children("table.calendar-dtable").prependTo(body);
opts.onNavigate.call(_5f1,opts.year,opts.month);
};
$.fn.calendar=function(_5fb,_5fc){
if(typeof _5fb=="string"){
return $.fn.calendar.methods[_5fb](this,_5fc);
}
_5fb=_5fb||{};
return this.each(function(){
var _5fd=$.data(this,"calendar");
if(_5fd){
$.extend(_5fd.options,_5fb);
}else{
_5fd=$.data(this,"calendar",{options:$.extend({},$.fn.calendar.defaults,$.fn.calendar.parseOptions(this),_5fb)});
init(this);
}
if(_5fd.options.border==false){
$(this).addClass("calendar-noborder");
}
_5d1(this);
_5d7(this);
show(this);
$(this).find("div.calendar-menu").hide();
});
};
$.fn.calendar.methods={options:function(jq){
return $.data(jq[0],"calendar").options;
},resize:function(jq,_5fe){
return jq.each(function(){
_5d1(this,_5fe);
});
},moveTo:function(jq,date){
return jq.each(function(){
if(!date){
var now=new Date();
$(this).calendar({year:now.getFullYear(),month:now.getMonth()+1,current:date});
return;
}
var opts=$(this).calendar("options");
if(opts.validator.call(this,date)){
var _5ff=opts.current;
$(this).calendar({year:date.getFullYear(),month:date.getMonth()+1,current:date});
if(!_5ff||_5ff.getTime()!=date.getTime()){
opts.onChange.call(this,opts.current,_5ff);
}
}
});
}};
$.fn.calendar.parseOptions=function(_600){
var t=$(_600);
return $.extend({},$.parser.parseOptions(_600,["weekNumberHeader",{firstDay:"number",fit:"boolean",border:"boolean",showWeek:"boolean"}]));
};
$.fn.calendar.defaults={width:180,height:180,fit:false,border:true,showWeek:false,firstDay:0,weeks:["S","M","T","W","T","F","S"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],year:new Date().getFullYear(),month:new Date().getMonth()+1,current:(function(){
var d=new Date();
return new Date(d.getFullYear(),d.getMonth(),d.getDate());
})(),weekNumberHeader:"",getWeekNumber:function(date){
var _601=new Date(date.getTime());
_601.setDate(_601.getDate()+4-(_601.getDay()||7));
var time=_601.getTime();
_601.setMonth(0);
_601.setDate(1);
return Math.floor(Math.round((time-_601)/86400000)/7)+1;
},formatter:function(date){
return date.getDate();
},styler:function(date){
return "";
},validator:function(date){
return true;
},onSelect:function(date){
},onChange:function(_602,_603){
},onNavigate:function(year,_604){
}};
})(jQuery);
(function($){
function _605(_606){
var _607=$.data(_606,"spinner");
var opts=_607.options;
var _608=$.extend(true,[],opts.icons);
if(opts.spinAlign=="left"||opts.spinAlign=="right"){
opts.spinArrow=true;
opts.iconAlign=opts.spinAlign;
var _609={iconCls:"spinner-arrow",handler:function(e){
var spin=$(e.target).closest(".spinner-arrow-up,.spinner-arrow-down");
_613(e.data.target,spin.hasClass("spinner-arrow-down"));
}};
if(opts.spinAlign=="left"){
_608.unshift(_609);
}else{
_608.push(_609);
}
}else{
opts.spinArrow=false;
if(opts.spinAlign=="vertical"){
if(opts.buttonAlign!="top"){
opts.buttonAlign="bottom";
}
opts.clsLeft="textbox-button-bottom";
opts.clsRight="textbox-button-top";
}else{
opts.clsLeft="textbox-button-left";
opts.clsRight="textbox-button-right";
}
}
$(_606).addClass("spinner-f").textbox($.extend({},opts,{icons:_608,doSize:false,onResize:function(_60a,_60b){
if(!opts.spinArrow){
var span=$(this).next();
var btn=span.find(".textbox-button:not(.spinner-button)");
if(btn.length){
var _60c=btn.outerWidth();
var _60d=btn.outerHeight();
var _60e=span.find(".spinner-button."+opts.clsLeft);
var _60f=span.find(".spinner-button."+opts.clsRight);
if(opts.buttonAlign=="right"){
_60f.css("marginRight",_60c+"px");
}else{
if(opts.buttonAlign=="left"){
_60e.css("marginLeft",_60c+"px");
}else{
if(opts.buttonAlign=="top"){
_60f.css("marginTop",_60d+"px");
}else{
_60e.css("marginBottom",_60d+"px");
}
}
}
}
}
opts.onResize.call(this,_60a,_60b);
}}));
$(_606).attr("spinnerName",$(_606).attr("textboxName"));
_607.spinner=$(_606).next();
_607.spinner.addClass("spinner");
if(opts.spinArrow){
var _610=_607.spinner.find(".spinner-arrow");
_610.append("<a href=\"javascript:;\" class=\"spinner-arrow-up\" tabindex=\"-1\"></a>");
_610.append("<a href=\"javascript:;\" class=\"spinner-arrow-down\" tabindex=\"-1\"></a>");
}else{
var _611=$("<a href=\"javascript:;\" class=\"textbox-button spinner-button\"></a>").addClass(opts.clsLeft).appendTo(_607.spinner);
var _612=$("<a href=\"javascript:;\" class=\"textbox-button spinner-button\"></a>").addClass(opts.clsRight).appendTo(_607.spinner);
_611.linkbutton({iconCls:opts.reversed?"spinner-button-up":"spinner-button-down",onClick:function(){
_613(_606,!opts.reversed);
}});
_612.linkbutton({iconCls:opts.reversed?"spinner-button-down":"spinner-button-up",onClick:function(){
_613(_606,opts.reversed);
}});
if(opts.disabled){
$(_606).spinner("disable");
}
if(opts.readonly){
$(_606).spinner("readonly");
}
}
$(_606).spinner("resize");
};
function _613(_614,down){
var opts=$(_614).spinner("options");
opts.spin.call(_614,down);
opts[down?"onSpinDown":"onSpinUp"].call(_614);
$(_614).spinner("validate");
};
$.fn.spinner=function(_615,_616){
if(typeof _615=="string"){
var _617=$.fn.spinner.methods[_615];
if(_617){
return _617(this,_616);
}else{
return this.textbox(_615,_616);
}
}
_615=_615||{};
return this.each(function(){
var _618=$.data(this,"spinner");
if(_618){
$.extend(_618.options,_615);
}else{
_618=$.data(this,"spinner",{options:$.extend({},$.fn.spinner.defaults,$.fn.spinner.parseOptions(this),_615)});
}
_605(this);
});
};
$.fn.spinner.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"spinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
}};
$.fn.spinner.parseOptions=function(_619){
return $.extend({},$.fn.textbox.parseOptions(_619),$.parser.parseOptions(_619,["min","max","spinAlign",{increment:"number",reversed:"boolean"}]));
};
$.fn.spinner.defaults=$.extend({},$.fn.textbox.defaults,{min:null,max:null,increment:1,spinAlign:"right",reversed:false,spin:function(down){
},onSpinUp:function(){
},onSpinDown:function(){
}});
})(jQuery);
(function($){
function _61a(_61b){
$(_61b).addClass("numberspinner-f");
var opts=$.data(_61b,"numberspinner").options;
$(_61b).numberbox($.extend({},opts,{doSize:false})).spinner(opts);
$(_61b).numberbox("setValue",opts.value);
};
function _61c(_61d,down){
var opts=$.data(_61d,"numberspinner").options;
var v=parseFloat($(_61d).numberbox("getValue")||opts.value)||0;
if(down){
v-=opts.increment;
}else{
v+=opts.increment;
}
$(_61d).numberbox("setValue",v);
};
$.fn.numberspinner=function(_61e,_61f){
if(typeof _61e=="string"){
var _620=$.fn.numberspinner.methods[_61e];
if(_620){
return _620(this,_61f);
}else{
return this.numberbox(_61e,_61f);
}
}
_61e=_61e||{};
return this.each(function(){
var _621=$.data(this,"numberspinner");
if(_621){
$.extend(_621.options,_61e);
}else{
$.data(this,"numberspinner",{options:$.extend({},$.fn.numberspinner.defaults,$.fn.numberspinner.parseOptions(this),_61e)});
}
_61a(this);
});
};
$.fn.numberspinner.methods={options:function(jq){
var opts=jq.numberbox("options");
return $.extend($.data(jq[0],"numberspinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
}};
$.fn.numberspinner.parseOptions=function(_622){
return $.extend({},$.fn.spinner.parseOptions(_622),$.fn.numberbox.parseOptions(_622),{});
};
$.fn.numberspinner.defaults=$.extend({},$.fn.spinner.defaults,$.fn.numberbox.defaults,{spin:function(down){
_61c(this,down);
}});
})(jQuery);
(function($){
function _623(_624){
var opts=$.data(_624,"timespinner").options;
$(_624).addClass("timespinner-f").spinner(opts);
var _625=opts.formatter.call(_624,opts.parser.call(_624,opts.value));
$(_624).timespinner("initValue",_625);
};
function _626(e){
var _627=e.data.target;
var opts=$.data(_627,"timespinner").options;
var _628=$(_627).timespinner("getSelectionStart");
for(var i=0;i<opts.selections.length;i++){
var _629=opts.selections[i];
if(_628>=_629[0]&&_628<=_629[1]){
_62a(_627,i);
return;
}
}
};
function _62a(_62b,_62c){
var opts=$.data(_62b,"timespinner").options;
if(_62c!=undefined){
opts.highlight=_62c;
}
var _62d=opts.selections[opts.highlight];
if(_62d){
var tb=$(_62b).timespinner("textbox");
$(_62b).timespinner("setSelectionRange",{start:_62d[0],end:_62d[1]});
tb.focus();
}
};
function _62e(_62f,_630){
var opts=$.data(_62f,"timespinner").options;
var _630=opts.parser.call(_62f,_630);
var text=opts.formatter.call(_62f,_630);
$(_62f).spinner("setValue",text);
};
function _631(_632,down){
var opts=$.data(_632,"timespinner").options;
var s=$(_632).timespinner("getValue");
var _633=opts.selections[opts.highlight];
var s1=s.substring(0,_633[0]);
var s2=s.substring(_633[0],_633[1]);
var s3=s.substring(_633[1]);
var v=s1+((parseInt(s2,10)||0)+opts.increment*(down?-1:1))+s3;
$(_632).timespinner("setValue",v);
_62a(_632);
};
$.fn.timespinner=function(_634,_635){
if(typeof _634=="string"){
var _636=$.fn.timespinner.methods[_634];
if(_636){
return _636(this,_635);
}else{
return this.spinner(_634,_635);
}
}
_634=_634||{};
return this.each(function(){
var _637=$.data(this,"timespinner");
if(_637){
$.extend(_637.options,_634);
}else{
$.data(this,"timespinner",{options:$.extend({},$.fn.timespinner.defaults,$.fn.timespinner.parseOptions(this),_634)});
}
_623(this);
});
};
$.fn.timespinner.methods={options:function(jq){
var opts=jq.data("spinner")?jq.spinner("options"):{};
return $.extend($.data(jq[0],"timespinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},setValue:function(jq,_638){
return jq.each(function(){
_62e(this,_638);
});
},getHours:function(jq){
var opts=$.data(jq[0],"timespinner").options;
var vv=jq.timespinner("getValue").split(opts.separator);
return parseInt(vv[0],10);
},getMinutes:function(jq){
var opts=$.data(jq[0],"timespinner").options;
var vv=jq.timespinner("getValue").split(opts.separator);
return parseInt(vv[1],10);
},getSeconds:function(jq){
var opts=$.data(jq[0],"timespinner").options;
var vv=jq.timespinner("getValue").split(opts.separator);
return parseInt(vv[2],10)||0;
}};
$.fn.timespinner.parseOptions=function(_639){
return $.extend({},$.fn.spinner.parseOptions(_639),$.parser.parseOptions(_639,["separator",{showSeconds:"boolean",highlight:"number"}]));
};
$.fn.timespinner.defaults=$.extend({},$.fn.spinner.defaults,{inputEvents:$.extend({},$.fn.spinner.defaults.inputEvents,{click:function(e){
_626.call(this,e);
},blur:function(e){
var t=$(e.data.target);
t.timespinner("setValue",t.timespinner("getText"));
},keydown:function(e){
if(e.keyCode==13){
var t=$(e.data.target);
t.timespinner("setValue",t.timespinner("getText"));
}
}}),formatter:function(date){
if(!date){
return "";
}
var opts=$(this).timespinner("options");
var tt=[_63a(date.getHours()),_63a(date.getMinutes())];
if(opts.showSeconds){
tt.push(_63a(date.getSeconds()));
}
return tt.join(opts.separator);
function _63a(_63b){
return (_63b<10?"0":"")+_63b;
};
},parser:function(s){
var opts=$(this).timespinner("options");
var date=_63c(s);
if(date){
var min=_63c(opts.min);
var max=_63c(opts.max);
if(min&&min>date){
date=min;
}
if(max&&max<date){
date=max;
}
}
return date;
function _63c(s){
if(!s){
return null;
}
var tt=s.split(opts.separator);
return new Date(1900,0,0,parseInt(tt[0],10)||0,parseInt(tt[1],10)||0,parseInt(tt[2],10)||0);
};
},selections:[[0,2],[3,5],[6,8]],separator:":",showSeconds:false,highlight:0,spin:function(down){
_631(this,down);
}});
})(jQuery);
(function($){
function _63d(_63e){
var opts=$.data(_63e,"datetimespinner").options;
$(_63e).addClass("datetimespinner-f").timespinner(opts);
};
$.fn.datetimespinner=function(_63f,_640){
if(typeof _63f=="string"){
var _641=$.fn.datetimespinner.methods[_63f];
if(_641){
return _641(this,_640);
}else{
return this.timespinner(_63f,_640);
}
}
_63f=_63f||{};
return this.each(function(){
var _642=$.data(this,"datetimespinner");
if(_642){
$.extend(_642.options,_63f);
}else{
$.data(this,"datetimespinner",{options:$.extend({},$.fn.datetimespinner.defaults,$.fn.datetimespinner.parseOptions(this),_63f)});
}
_63d(this);
});
};
$.fn.datetimespinner.methods={options:function(jq){
var opts=jq.timespinner("options");
return $.extend($.data(jq[0],"datetimespinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
}};
$.fn.datetimespinner.parseOptions=function(_643){
return $.extend({},$.fn.timespinner.parseOptions(_643),$.parser.parseOptions(_643,[]));
};
$.fn.datetimespinner.defaults=$.extend({},$.fn.timespinner.defaults,{formatter:function(date){
if(!date){
return "";
}
return $.fn.datebox.defaults.formatter.call(this,date)+" "+$.fn.timespinner.defaults.formatter.call(this,date);
},parser:function(s){
s=$.trim(s);
if(!s){
return null;
}
var dt=s.split(" ");
var _644=$.fn.datebox.defaults.parser.call(this,dt[0]);
if(dt.length<2){
return _644;
}
var _645=$.fn.timespinner.defaults.parser.call(this,dt[1]);
return new Date(_644.getFullYear(),_644.getMonth(),_644.getDate(),_645.getHours(),_645.getMinutes(),_645.getSeconds());
},selections:[[0,2],[3,5],[6,10],[11,13],[14,16],[17,19]]});
})(jQuery);
(function($){
var _646=0;
function _647(a,o){
return $.easyui.indexOfArray(a,o);
};
function _648(a,o,id){
$.easyui.removeArrayItem(a,o,id);
};
function _649(a,o,r){
$.easyui.addArrayItem(a,o,r);
};
function _64a(_64b,aa){
return $.data(_64b,"treegrid")?aa.slice(1):aa;
};
function _64c(_64d){
var _64e=$.data(_64d,"datagrid");
var opts=_64e.options;
var _64f=_64e.panel;
var dc=_64e.dc;
var ss=null;
if(opts.sharedStyleSheet){
ss=typeof opts.sharedStyleSheet=="boolean"?"head":opts.sharedStyleSheet;
}else{
ss=_64f.closest("div.datagrid-view");
if(!ss.length){
ss=dc.view;
}
}
var cc=$(ss);
var _650=$.data(cc[0],"ss");
if(!_650){
_650=$.data(cc[0],"ss",{cache:{},dirty:[]});
}
return {add:function(_651){
var ss=["<style type=\"text/css\" easyui=\"true\">"];
for(var i=0;i<_651.length;i++){
_650.cache[_651[i][0]]={width:_651[i][1]};
}
var _652=0;
for(var s in _650.cache){
var item=_650.cache[s];
item.index=_652++;
ss.push(s+"{width:"+item.width+"}");
}
ss.push("</style>");
$(ss.join("\n")).appendTo(cc);
cc.children("style[easyui]:not(:last)").remove();
},getRule:function(_653){
var _654=cc.children("style[easyui]:last")[0];
var _655=_654.styleSheet?_654.styleSheet:(_654.sheet||document.styleSheets[document.styleSheets.length-1]);
var _656=_655.cssRules||_655.rules;
return _656[_653];
},set:function(_657,_658){
var item=_650.cache[_657];
if(item){
item.width=_658;
var rule=this.getRule(item.index);
if(rule){
rule.style["width"]=_658;
}
}
},remove:function(_659){
var tmp=[];
for(var s in _650.cache){
if(s.indexOf(_659)==-1){
tmp.push([s,_650.cache[s].width]);
}
}
_650.cache={};
this.add(tmp);
},dirty:function(_65a){
if(_65a){
_650.dirty.push(_65a);
}
},clean:function(){
for(var i=0;i<_650.dirty.length;i++){
this.remove(_650.dirty[i]);
}
_650.dirty=[];
}};
};
function _65b(_65c,_65d){
var _65e=$.data(_65c,"datagrid");
var opts=_65e.options;
var _65f=_65e.panel;
if(_65d){
$.extend(opts,_65d);
}
if(opts.fit==true){
var p=_65f.panel("panel").parent();
opts.width=p.width();
opts.height=p.height();
}
_65f.panel("resize",opts);
};
function _660(_661){
var _662=$.data(_661,"datagrid");
var opts=_662.options;
var dc=_662.dc;
var wrap=_662.panel;
var _663=wrap.width();
var _664=wrap.height();
var view=dc.view;
var _665=dc.view1;
var _666=dc.view2;
var _667=_665.children("div.datagrid-header");
var _668=_666.children("div.datagrid-header");
var _669=_667.find("table");
var _66a=_668.find("table");
view.width(_663);
var _66b=_667.children("div.datagrid-header-inner").show();
_665.width(_66b.find("table").width());
if(!opts.showHeader){
_66b.hide();
}
_666.width(_663-_665._outerWidth());
_665.children()._outerWidth(_665.width());
_666.children()._outerWidth(_666.width());
var all=_667.add(_668).add(_669).add(_66a);
all.css("height","");
var hh=Math.max(_669.height(),_66a.height());
all._outerHeight(hh);
view.children(".datagrid-empty").css("top",hh+"px");
dc.body1.add(dc.body2).children("table.datagrid-btable-frozen").css({position:"absolute",top:dc.header2._outerHeight()});
var _66c=dc.body2.children("table.datagrid-btable-frozen")._outerHeight();
var _66d=_66c+_668._outerHeight()+_666.children(".datagrid-footer")._outerHeight();
wrap.children(":not(.datagrid-view,.datagrid-mask,.datagrid-mask-msg)").each(function(){
_66d+=$(this)._outerHeight();
});
var _66e=wrap.outerHeight()-wrap.height();
var _66f=wrap._size("minHeight")||"";
var _670=wrap._size("maxHeight")||"";
_665.add(_666).children("div.datagrid-body").css({marginTop:_66c,height:(isNaN(parseInt(opts.height))?"":(_664-_66d)),minHeight:(_66f?_66f-_66e-_66d:""),maxHeight:(_670?_670-_66e-_66d:"")});
view.height(_666.height());
};
function _671(_672,_673,_674){
var rows=$.data(_672,"datagrid").data.rows;
var opts=$.data(_672,"datagrid").options;
var dc=$.data(_672,"datagrid").dc;
if(!dc.body1.is(":empty")&&(!opts.nowrap||opts.autoRowHeight||_674)){
if(_673!=undefined){
var tr1=opts.finder.getTr(_672,_673,"body",1);
var tr2=opts.finder.getTr(_672,_673,"body",2);
_675(tr1,tr2);
}else{
var tr1=opts.finder.getTr(_672,0,"allbody",1);
var tr2=opts.finder.getTr(_672,0,"allbody",2);
_675(tr1,tr2);
if(opts.showFooter){
var tr1=opts.finder.getTr(_672,0,"allfooter",1);
var tr2=opts.finder.getTr(_672,0,"allfooter",2);
_675(tr1,tr2);
}
}
}
_660(_672);
if(opts.height=="auto"){
var _676=dc.body1.parent();
var _677=dc.body2;
var _678=_679(_677);
var _67a=_678.height;
if(_678.width>_677.width()){
_67a+=18;
}
_67a-=parseInt(_677.css("marginTop"))||0;
_676.height(_67a);
_677.height(_67a);
dc.view.height(dc.view2.height());
}
dc.body2.triggerHandler("scroll");
function _675(trs1,trs2){
for(var i=0;i<trs2.length;i++){
var tr1=$(trs1[i]);
var tr2=$(trs2[i]);
tr1.css("height","");
tr2.css("height","");
var _67b=Math.max(tr1.height(),tr2.height());
tr1.css("height",_67b);
tr2.css("height",_67b);
}
};
function _679(cc){
var _67c=0;
var _67d=0;
$(cc).children().each(function(){
var c=$(this);
if(c.is(":visible")){
_67d+=c._outerHeight();
if(_67c<c._outerWidth()){
_67c=c._outerWidth();
}
}
});
return {width:_67c,height:_67d};
};
};
function _67e(_67f,_680){
var _681=$.data(_67f,"datagrid");
var opts=_681.options;
var dc=_681.dc;
if(!dc.body2.children("table.datagrid-btable-frozen").length){
dc.body1.add(dc.body2).prepend("<table class=\"datagrid-btable datagrid-btable-frozen\" cellspacing=\"0\" cellpadding=\"0\"></table>");
}
_682(true);
_682(false);
_660(_67f);
function _682(_683){
var _684=_683?1:2;
var tr=opts.finder.getTr(_67f,_680,"body",_684);
(_683?dc.body1:dc.body2).children("table.datagrid-btable-frozen").append(tr);
};
};
function _685(_686,_687){
function _688(){
var _689=[];
var _68a=[];
$(_686).children("thead").each(function(){
var opt=$.parser.parseOptions(this,[{frozen:"boolean"}]);
$(this).find("tr").each(function(){
var cols=[];
$(this).find("th").each(function(){
var th=$(this);
var col=$.extend({},$.parser.parseOptions(this,["id","field","align","halign","order","width",{sortable:"boolean",checkbox:"boolean",resizable:"boolean",fixed:"boolean"},{rowspan:"number",colspan:"number"}]),{title:(th.html()||undefined),hidden:(th.attr("hidden")?true:undefined),formatter:(th.attr("formatter")?eval(th.attr("formatter")):undefined),styler:(th.attr("styler")?eval(th.attr("styler")):undefined),sorter:(th.attr("sorter")?eval(th.attr("sorter")):undefined)});
if(col.width&&String(col.width).indexOf("%")==-1){
col.width=parseInt(col.width);
}
if(th.attr("editor")){
var s=$.trim(th.attr("editor"));
if(s.substr(0,1)=="{"){
col.editor=eval("("+s+")");
}else{
col.editor=s;
}
}
cols.push(col);
});
opt.frozen?_689.push(cols):_68a.push(cols);
});
});
return [_689,_68a];
};
var _68b=$("<div class=\"datagrid-wrap\">"+"<div class=\"datagrid-view\">"+"<div class=\"datagrid-view1\">"+"<div class=\"datagrid-header\">"+"<div class=\"datagrid-header-inner\"></div>"+"</div>"+"<div class=\"datagrid-body\">"+"<div class=\"datagrid-body-inner\"></div>"+"</div>"+"<div class=\"datagrid-footer\">"+"<div class=\"datagrid-footer-inner\"></div>"+"</div>"+"</div>"+"<div class=\"datagrid-view2\">"+"<div class=\"datagrid-header\">"+"<div class=\"datagrid-header-inner\"></div>"+"</div>"+"<div class=\"datagrid-body\"></div>"+"<div class=\"datagrid-footer\">"+"<div class=\"datagrid-footer-inner\"></div>"+"</div>"+"</div>"+"</div>"+"</div>").insertAfter(_686);
_68b.panel({doSize:false,cls:"datagrid"});
$(_686).addClass("datagrid-f").hide().appendTo(_68b.children("div.datagrid-view"));
var cc=_688();
var view=_68b.children("div.datagrid-view");
var _68c=view.children("div.datagrid-view1");
var _68d=view.children("div.datagrid-view2");
return {panel:_68b,frozenColumns:cc[0],columns:cc[1],dc:{view:view,view1:_68c,view2:_68d,header1:_68c.children("div.datagrid-header").children("div.datagrid-header-inner"),header2:_68d.children("div.datagrid-header").children("div.datagrid-header-inner"),body1:_68c.children("div.datagrid-body").children("div.datagrid-body-inner"),body2:_68d.children("div.datagrid-body"),footer1:_68c.children("div.datagrid-footer").children("div.datagrid-footer-inner"),footer2:_68d.children("div.datagrid-footer").children("div.datagrid-footer-inner")}};
};
function _68e(_68f){
var _690=$.data(_68f,"datagrid");
var opts=_690.options;
var dc=_690.dc;
var _691=_690.panel;
_690.ss=$(_68f).datagrid("createStyleSheet");
_691.panel($.extend({},opts,{id:null,doSize:false,onResize:function(_692,_693){
if($.data(_68f,"datagrid")){
_660(_68f);
$(_68f).datagrid("fitColumns");
opts.onResize.call(_691,_692,_693);
}
},onExpand:function(){
if($.data(_68f,"datagrid")){
$(_68f).datagrid("fixRowHeight").datagrid("fitColumns");
opts.onExpand.call(_691);
}
}}));
_690.rowIdPrefix="datagrid-row-r"+(++_646);
_690.cellClassPrefix="datagrid-cell-c"+_646;
_694(dc.header1,opts.frozenColumns,true);
_694(dc.header2,opts.columns,false);
_695();
dc.header1.add(dc.header2).css("display",opts.showHeader?"block":"none");
dc.footer1.add(dc.footer2).css("display",opts.showFooter?"block":"none");
if(opts.toolbar){
if($.isArray(opts.toolbar)){
$("div.datagrid-toolbar",_691).remove();
var tb=$("<div class=\"datagrid-toolbar\"><table cellspacing=\"0\" cellpadding=\"0\"><tr></tr></table></div>").prependTo(_691);
var tr=tb.find("tr");
for(var i=0;i<opts.toolbar.length;i++){
var btn=opts.toolbar[i];
if(btn=="-"){
$("<td><div class=\"datagrid-btn-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
var tool=$("<a href=\"javascript:;\"></a>").appendTo(td);
tool[0].onclick=eval(btn.handler||function(){
});
tool.linkbutton($.extend({},btn,{plain:true}));
}
}
}else{
$(opts.toolbar).addClass("datagrid-toolbar").prependTo(_691);
$(opts.toolbar).show();
}
}else{
$("div.datagrid-toolbar",_691).remove();
}
$("div.datagrid-pager",_691).remove();
if(opts.pagination){
var _696=$("<div class=\"datagrid-pager\"></div>");
if(opts.pagePosition=="bottom"){
_696.appendTo(_691);
}else{
if(opts.pagePosition=="top"){
_696.addClass("datagrid-pager-top").prependTo(_691);
}else{
var ptop=$("<div class=\"datagrid-pager datagrid-pager-top\"></div>").prependTo(_691);
_696.appendTo(_691);
_696=_696.add(ptop);
}
}
_696.pagination({total:0,pageNumber:opts.pageNumber,pageSize:opts.pageSize,pageList:opts.pageList,onSelectPage:function(_697,_698){
opts.pageNumber=_697||1;
opts.pageSize=_698;
_696.pagination("refresh",{pageNumber:_697,pageSize:_698});
_6e0(_68f);
}});
opts.pageSize=_696.pagination("options").pageSize;
}
function _694(_699,_69a,_69b){
if(!_69a){
return;
}
$(_699).show();
$(_699).empty();
var tmp=$("<div class=\"datagrid-cell\" style=\"position:absolute;left:-99999px\"></div>").appendTo("body");
tmp._outerWidth(99);
var _69c=100-parseInt(tmp[0].style.width);
tmp.remove();
var _69d=[];
var _69e=[];
var _69f=[];
if(opts.sortName){
_69d=opts.sortName.split(",");
_69e=opts.sortOrder.split(",");
}
var t=$("<table class=\"datagrid-htable\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tbody></tbody></table>").appendTo(_699);
for(var i=0;i<_69a.length;i++){
var tr=$("<tr class=\"datagrid-header-row\"></tr>").appendTo($("tbody",t));
var cols=_69a[i];
for(var j=0;j<cols.length;j++){
var col=cols[j];
var attr="";
if(col.rowspan){
attr+="rowspan=\""+col.rowspan+"\" ";
}
if(col.colspan){
attr+="colspan=\""+col.colspan+"\" ";
if(!col.id){
col.id=["datagrid-td-group"+_646,i,j].join("-");
}
}
if(col.id){
attr+="id=\""+col.id+"\"";
}
var td=$("<td "+attr+"></td>").appendTo(tr);
if(col.checkbox){
td.attr("field",col.field);
$("<div class=\"datagrid-header-check\"></div>").html("<input type=\"checkbox\"/>").appendTo(td);
}else{
if(col.field){
td.attr("field",col.field);
td.append("<div class=\"datagrid-cell\"><span></span><span class=\"datagrid-sort-icon\"></span></div>");
td.find("span:first").html(col.title);
var cell=td.find("div.datagrid-cell");
var pos=_647(_69d,col.field);
if(pos>=0){
cell.addClass("datagrid-sort-"+_69e[pos]);
}
if(col.sortable){
cell.addClass("datagrid-sort");
}
if(col.resizable==false){
cell.attr("resizable","false");
}
if(col.width){
var _6a0=$.parser.parseValue("width",col.width,dc.view,opts.scrollbarSize+(opts.rownumbers?opts.rownumberWidth:0));
col.deltaWidth=_69c;
col.boxWidth=_6a0-_69c;
}else{
col.auto=true;
}
cell.css("text-align",(col.halign||col.align||""));
col.cellClass=_690.cellClassPrefix+"-"+col.field.replace(/[\.|\s]/g,"-");
cell.addClass(col.cellClass);
}else{
$("<div class=\"datagrid-cell-group\"></div>").html(col.title).appendTo(td);
}
}
if(col.hidden){
td.hide();
_69f.push(col.field);
}
}
}
if(_69b&&opts.rownumbers){
var td=$("<td rowspan=\""+opts.frozenColumns.length+"\"><div class=\"datagrid-header-rownumber\"></div></td>");
if($("tr",t).length==0){
td.wrap("<tr class=\"datagrid-header-row\"></tr>").parent().appendTo($("tbody",t));
}else{
td.prependTo($("tr:first",t));
}
}
for(var i=0;i<_69f.length;i++){
_6e2(_68f,_69f[i],-1);
}
};
function _695(){
var _6a1=[[".datagrid-header-rownumber",(opts.rownumberWidth-1)+"px"],[".datagrid-cell-rownumber",(opts.rownumberWidth-1)+"px"]];
var _6a2=_6a3(_68f,true).concat(_6a3(_68f));
for(var i=0;i<_6a2.length;i++){
var col=_6a4(_68f,_6a2[i]);
if(col&&!col.checkbox){
_6a1.push(["."+col.cellClass,col.boxWidth?col.boxWidth+"px":"auto"]);
}
}
_690.ss.add(_6a1);
_690.ss.dirty(_690.cellSelectorPrefix);
_690.cellSelectorPrefix="."+_690.cellClassPrefix;
};
};
function _6a5(_6a6){
var _6a7=$.data(_6a6,"datagrid");
var _6a8=_6a7.panel;
var opts=_6a7.options;
var dc=_6a7.dc;
var _6a9=dc.header1.add(dc.header2);
_6a9.unbind(".datagrid");
for(var _6aa in opts.headerEvents){
_6a9.bind(_6aa+".datagrid",opts.headerEvents[_6aa]);
}
var _6ab=_6a9.find("div.datagrid-cell");
var _6ac=opts.resizeHandle=="right"?"e":(opts.resizeHandle=="left"?"w":"e,w");
_6ab.each(function(){
$(this).resizable({handles:_6ac,edge:opts.resizeEdge,disabled:($(this).attr("resizable")?$(this).attr("resizable")=="false":false),minWidth:25,onStartResize:function(e){
_6a7.resizing=true;
_6a9.css("cursor",$("body").css("cursor"));
if(!_6a7.proxy){
_6a7.proxy=$("<div class=\"datagrid-resize-proxy\"></div>").appendTo(dc.view);
}
if(e.data.dir=="e"){
e.data.deltaEdge=$(this)._outerWidth()-(e.pageX-$(this).offset().left);
}else{
e.data.deltaEdge=$(this).offset().left-e.pageX-1;
}
_6a7.proxy.css({left:e.pageX-$(_6a8).offset().left-1+e.data.deltaEdge,display:"none"});
setTimeout(function(){
if(_6a7.proxy){
_6a7.proxy.show();
}
},500);
},onResize:function(e){
_6a7.proxy.css({left:e.pageX-$(_6a8).offset().left-1+e.data.deltaEdge,display:"block"});
return false;
},onStopResize:function(e){
_6a9.css("cursor","");
$(this).css("height","");
var _6ad=$(this).parent().attr("field");
var col=_6a4(_6a6,_6ad);
col.width=$(this)._outerWidth()+1;
col.boxWidth=col.width-col.deltaWidth;
col.auto=undefined;
$(this).css("width","");
$(_6a6).datagrid("fixColumnSize",_6ad);
_6a7.proxy.remove();
_6a7.proxy=null;
if($(this).parents("div:first.datagrid-header").parent().hasClass("datagrid-view1")){
_660(_6a6);
}
$(_6a6).datagrid("fitColumns");
opts.onResizeColumn.call(_6a6,_6ad,col.width);
setTimeout(function(){
_6a7.resizing=false;
},0);
}});
});
var bb=dc.body1.add(dc.body2);
bb.unbind();
for(var _6aa in opts.rowEvents){
bb.bind(_6aa,opts.rowEvents[_6aa]);
}
dc.body1.bind("mousewheel DOMMouseScroll",function(e){
e.preventDefault();
var e1=e.originalEvent||window.event;
var _6ae=e1.wheelDelta||e1.detail*(-1);
if("deltaY" in e1){
_6ae=e1.deltaY*-1;
}
var dg=$(e.target).closest("div.datagrid-view").children(".datagrid-f");
var dc=dg.data("datagrid").dc;
dc.body2.scrollTop(dc.body2.scrollTop()-_6ae);
});
dc.body2.bind("scroll",function(){
var b1=dc.view1.children("div.datagrid-body");
b1.scrollTop($(this).scrollTop());
var c1=dc.body1.children(":first");
var c2=dc.body2.children(":first");
if(c1.length&&c2.length){
var top1=c1.offset().top;
var top2=c2.offset().top;
if(top1!=top2){
b1.scrollTop(b1.scrollTop()+top1-top2);
}
}
dc.view2.children("div.datagrid-header,div.datagrid-footer")._scrollLeft($(this)._scrollLeft());
dc.body2.children("table.datagrid-btable-frozen").css("left",-$(this)._scrollLeft());
});
};
function _6af(_6b0){
return function(e){
var td=$(e.target).closest("td[field]");
if(td.length){
var _6b1=_6b2(td);
if(!$(_6b1).data("datagrid").resizing&&_6b0){
td.addClass("datagrid-header-over");
}else{
td.removeClass("datagrid-header-over");
}
}
};
};
function _6b3(e){
var _6b4=_6b2(e.target);
var opts=$(_6b4).datagrid("options");
var ck=$(e.target).closest("input[type=checkbox]");
if(ck.length){
if(opts.singleSelect&&opts.selectOnCheck){
return false;
}
if(ck.is(":checked")){
_6b5(_6b4);
}else{
_6b6(_6b4);
}
e.stopPropagation();
}else{
var cell=$(e.target).closest(".datagrid-cell");
if(cell.length){
var p1=cell.offset().left+5;
var p2=cell.offset().left+cell._outerWidth()-5;
if(e.pageX<p2&&e.pageX>p1){
_6b7(_6b4,cell.parent().attr("field"));
}
}
}
};
function _6b8(e){
var _6b9=_6b2(e.target);
var opts=$(_6b9).datagrid("options");
var cell=$(e.target).closest(".datagrid-cell");
if(cell.length){
var p1=cell.offset().left+5;
var p2=cell.offset().left+cell._outerWidth()-5;
var cond=opts.resizeHandle=="right"?(e.pageX>p2):(opts.resizeHandle=="left"?(e.pageX<p1):(e.pageX<p1||e.pageX>p2));
if(cond){
var _6ba=cell.parent().attr("field");
var col=_6a4(_6b9,_6ba);
if(col.resizable==false){
return;
}
$(_6b9).datagrid("autoSizeColumn",_6ba);
col.auto=false;
}
}
};
function _6bb(e){
var _6bc=_6b2(e.target);
var opts=$(_6bc).datagrid("options");
var td=$(e.target).closest("td[field]");
opts.onHeaderContextMenu.call(_6bc,e,td.attr("field"));
};
function _6bd(_6be){
return function(e){
var tr=_6bf(e.target);
if(!tr){
return;
}
var _6c0=_6b2(tr);
if($.data(_6c0,"datagrid").resizing){
return;
}
var _6c1=_6c2(tr);
if(_6be){
_6c3(_6c0,_6c1);
}else{
var opts=$.data(_6c0,"datagrid").options;
opts.finder.getTr(_6c0,_6c1).removeClass("datagrid-row-over");
}
};
};
function _6c4(e){
var tr=_6bf(e.target);
if(!tr){
return;
}
var _6c5=_6b2(tr);
var opts=$.data(_6c5,"datagrid").options;
var _6c6=_6c2(tr);
var tt=$(e.target);
if(tt.parent().hasClass("datagrid-cell-check")){
if(opts.singleSelect&&opts.selectOnCheck){
tt._propAttr("checked",!tt.is(":checked"));
_6c7(_6c5,_6c6);
}else{
if(tt.is(":checked")){
tt._propAttr("checked",false);
_6c7(_6c5,_6c6);
}else{
tt._propAttr("checked",true);
_6c8(_6c5,_6c6);
}
}
}else{
var row=opts.finder.getRow(_6c5,_6c6);
var td=tt.closest("td[field]",tr);
if(td.length){
var _6c9=td.attr("field");
opts.onClickCell.call(_6c5,_6c6,_6c9,row[_6c9]);
}
if(opts.singleSelect==true){
_6ca(_6c5,_6c6);
}else{
if(opts.ctrlSelect){
if(e.metaKey||e.ctrlKey){
if(tr.hasClass("datagrid-row-selected")){
_6cb(_6c5,_6c6);
}else{
_6ca(_6c5,_6c6);
}
}else{
if(e.shiftKey){
$(_6c5).datagrid("clearSelections");
var _6cc=Math.min(opts.lastSelectedIndex||0,_6c6);
var _6cd=Math.max(opts.lastSelectedIndex||0,_6c6);
for(var i=_6cc;i<=_6cd;i++){
_6ca(_6c5,i);
}
}else{
$(_6c5).datagrid("clearSelections");
_6ca(_6c5,_6c6);
opts.lastSelectedIndex=_6c6;
}
}
}else{
if(tr.hasClass("datagrid-row-selected")){
_6cb(_6c5,_6c6);
}else{
_6ca(_6c5,_6c6);
}
}
}
opts.onClickRow.apply(_6c5,_64a(_6c5,[_6c6,row]));
}
};
function _6ce(e){
var tr=_6bf(e.target);
if(!tr){
return;
}
var _6cf=_6b2(tr);
var opts=$.data(_6cf,"datagrid").options;
var _6d0=_6c2(tr);
var row=opts.finder.getRow(_6cf,_6d0);
var td=$(e.target).closest("td[field]",tr);
if(td.length){
var _6d1=td.attr("field");
opts.onDblClickCell.call(_6cf,_6d0,_6d1,row[_6d1]);
}
opts.onDblClickRow.apply(_6cf,_64a(_6cf,[_6d0,row]));
};
function _6d2(e){
var tr=_6bf(e.target);
if(tr){
var _6d3=_6b2(tr);
var opts=$.data(_6d3,"datagrid").options;
var _6d4=_6c2(tr);
var row=opts.finder.getRow(_6d3,_6d4);
opts.onRowContextMenu.call(_6d3,e,_6d4,row);
}else{
var body=_6bf(e.target,".datagrid-body");
if(body){
var _6d3=_6b2(body);
var opts=$.data(_6d3,"datagrid").options;
opts.onRowContextMenu.call(_6d3,e,-1,null);
}
}
};
function _6b2(t){
return $(t).closest("div.datagrid-view").children(".datagrid-f")[0];
};
function _6bf(t,_6d5){
var tr=$(t).closest(_6d5||"tr.datagrid-row");
if(tr.length&&tr.parent().length){
return tr;
}else{
return undefined;
}
};
function _6c2(tr){
if(tr.attr("datagrid-row-index")){
return parseInt(tr.attr("datagrid-row-index"));
}else{
return tr.attr("node-id");
}
};
function _6b7(_6d6,_6d7){
var _6d8=$.data(_6d6,"datagrid");
var opts=_6d8.options;
_6d7=_6d7||{};
var _6d9={sortName:opts.sortName,sortOrder:opts.sortOrder};
if(typeof _6d7=="object"){
$.extend(_6d9,_6d7);
}
var _6da=[];
var _6db=[];
if(_6d9.sortName){
_6da=_6d9.sortName.split(",");
_6db=_6d9.sortOrder.split(",");
}
if(typeof _6d7=="string"){
var _6dc=_6d7;
var col=_6a4(_6d6,_6dc);
if(!col.sortable||_6d8.resizing){
return;
}
var _6dd=col.order||"asc";
var pos=_647(_6da,_6dc);
if(pos>=0){
var _6de=_6db[pos]=="asc"?"desc":"asc";
if(opts.multiSort&&_6de==_6dd){
_6da.splice(pos,1);
_6db.splice(pos,1);
}else{
_6db[pos]=_6de;
}
}else{
if(opts.multiSort){
_6da.push(_6dc);
_6db.push(_6dd);
}else{
_6da=[_6dc];
_6db=[_6dd];
}
}
_6d9.sortName=_6da.join(",");
_6d9.sortOrder=_6db.join(",");
}
if(opts.onBeforeSortColumn.call(_6d6,_6d9.sortName,_6d9.sortOrder)==false){
return;
}
$.extend(opts,_6d9);
var dc=_6d8.dc;
var _6df=dc.header1.add(dc.header2);
_6df.find("div.datagrid-cell").removeClass("datagrid-sort-asc datagrid-sort-desc");
for(var i=0;i<_6da.length;i++){
var col=_6a4(_6d6,_6da[i]);
_6df.find("div."+col.cellClass).addClass("datagrid-sort-"+_6db[i]);
}
if(opts.remoteSort){
_6e0(_6d6);
}else{
_6e1(_6d6,$(_6d6).datagrid("getData"));
}
opts.onSortColumn.call(_6d6,opts.sortName,opts.sortOrder);
};
function _6e2(_6e3,_6e4,_6e5){
_6e6(true);
_6e6(false);
function _6e6(_6e7){
var aa=_6e8(_6e3,_6e7);
if(aa.length){
var _6e9=aa[aa.length-1];
var _6ea=_647(_6e9,_6e4);
if(_6ea>=0){
for(var _6eb=0;_6eb<aa.length-1;_6eb++){
var td=$("#"+aa[_6eb][_6ea]);
var _6ec=parseInt(td.attr("colspan")||1)+(_6e5||0);
td.attr("colspan",_6ec);
if(_6ec){
td.show();
}else{
td.hide();
}
}
}
}
};
};
function _6ed(_6ee){
var _6ef=$.data(_6ee,"datagrid");
var opts=_6ef.options;
var dc=_6ef.dc;
var _6f0=dc.view2.children("div.datagrid-header");
dc.body2.css("overflow-x","");
_6f1();
_6f2();
_6f3();
_6f1(true);
if(_6f0.width()>=_6f0.find("table").width()){
dc.body2.css("overflow-x","hidden");
}
function _6f3(){
if(!opts.fitColumns){
return;
}
if(!_6ef.leftWidth){
_6ef.leftWidth=0;
}
var _6f4=0;
var cc=[];
var _6f5=_6a3(_6ee,false);
for(var i=0;i<_6f5.length;i++){
var col=_6a4(_6ee,_6f5[i]);
if(_6f6(col)){
_6f4+=col.width;
cc.push({field:col.field,col:col,addingWidth:0});
}
}
if(!_6f4){
return;
}
cc[cc.length-1].addingWidth-=_6ef.leftWidth;
var _6f7=_6f0.children("div.datagrid-header-inner").show();
var _6f8=_6f0.width()-_6f0.find("table").width()-opts.scrollbarSize+_6ef.leftWidth;
var rate=_6f8/_6f4;
if(!opts.showHeader){
_6f7.hide();
}
for(var i=0;i<cc.length;i++){
var c=cc[i];
var _6f9=parseInt(c.col.width*rate);
c.addingWidth+=_6f9;
_6f8-=_6f9;
}
cc[cc.length-1].addingWidth+=_6f8;
for(var i=0;i<cc.length;i++){
var c=cc[i];
if(c.col.boxWidth+c.addingWidth>0){
c.col.boxWidth+=c.addingWidth;
c.col.width+=c.addingWidth;
}
}
_6ef.leftWidth=_6f8;
$(_6ee).datagrid("fixColumnSize");
};
function _6f2(){
var _6fa=false;
var _6fb=_6a3(_6ee,true).concat(_6a3(_6ee,false));
$.map(_6fb,function(_6fc){
var col=_6a4(_6ee,_6fc);
if(String(col.width||"").indexOf("%")>=0){
var _6fd=$.parser.parseValue("width",col.width,dc.view,opts.scrollbarSize+(opts.rownumbers?opts.rownumberWidth:0))-col.deltaWidth;
if(_6fd>0){
col.boxWidth=_6fd;
_6fa=true;
}
}
});
if(_6fa){
$(_6ee).datagrid("fixColumnSize");
}
};
function _6f1(fit){
var _6fe=dc.header1.add(dc.header2).find(".datagrid-cell-group");
if(_6fe.length){
_6fe.each(function(){
$(this)._outerWidth(fit?$(this).parent().width():10);
});
if(fit){
_660(_6ee);
}
}
};
function _6f6(col){
if(String(col.width||"").indexOf("%")>=0){
return false;
}
if(!col.hidden&&!col.checkbox&&!col.auto&&!col.fixed){
return true;
}
};
};
function _6ff(_700,_701){
var _702=$.data(_700,"datagrid");
var opts=_702.options;
var dc=_702.dc;
var tmp=$("<div class=\"datagrid-cell\" style=\"position:absolute;left:-9999px\"></div>").appendTo("body");
if(_701){
_65b(_701);
$(_700).datagrid("fitColumns");
}else{
var _703=false;
var _704=_6a3(_700,true).concat(_6a3(_700,false));
for(var i=0;i<_704.length;i++){
var _701=_704[i];
var col=_6a4(_700,_701);
if(col.auto){
_65b(_701);
_703=true;
}
}
if(_703){
$(_700).datagrid("fitColumns");
}
}
tmp.remove();
function _65b(_705){
var _706=dc.view.find("div.datagrid-header td[field=\""+_705+"\"] div.datagrid-cell");
_706.css("width","");
var col=$(_700).datagrid("getColumnOption",_705);
col.width=undefined;
col.boxWidth=undefined;
col.auto=true;
$(_700).datagrid("fixColumnSize",_705);
var _707=Math.max(_708("header"),_708("allbody"),_708("allfooter"))+1;
_706._outerWidth(_707-1);
col.width=_707;
col.boxWidth=parseInt(_706[0].style.width);
col.deltaWidth=_707-col.boxWidth;
_706.css("width","");
$(_700).datagrid("fixColumnSize",_705);
opts.onResizeColumn.call(_700,_705,col.width);
function _708(type){
var _709=0;
if(type=="header"){
_709=_70a(_706);
}else{
opts.finder.getTr(_700,0,type).find("td[field=\""+_705+"\"] div.datagrid-cell").each(function(){
var w=_70a($(this));
if(_709<w){
_709=w;
}
});
}
return _709;
function _70a(cell){
return cell.is(":visible")?cell._outerWidth():tmp.html(cell.html())._outerWidth();
};
};
};
};
function _70b(_70c,_70d){
var _70e=$.data(_70c,"datagrid");
var opts=_70e.options;
var dc=_70e.dc;
var _70f=dc.view.find("table.datagrid-btable,table.datagrid-ftable");
_70f.css("table-layout","fixed");
if(_70d){
fix(_70d);
}else{
var ff=_6a3(_70c,true).concat(_6a3(_70c,false));
for(var i=0;i<ff.length;i++){
fix(ff[i]);
}
}
_70f.css("table-layout","");
_710(_70c);
_671(_70c);
_711(_70c);
function fix(_712){
var col=_6a4(_70c,_712);
if(col.cellClass){
_70e.ss.set("."+col.cellClass,col.boxWidth?col.boxWidth+"px":"auto");
}
};
};
function _710(_713,tds){
var dc=$.data(_713,"datagrid").dc;
tds=tds||dc.view.find("td.datagrid-td-merged");
tds.each(function(){
var td=$(this);
var _714=td.attr("colspan")||1;
if(_714>1){
var col=_6a4(_713,td.attr("field"));
var _715=col.boxWidth+col.deltaWidth-1;
for(var i=1;i<_714;i++){
td=td.next();
col=_6a4(_713,td.attr("field"));
_715+=col.boxWidth+col.deltaWidth;
}
$(this).children("div.datagrid-cell")._outerWidth(_715);
}
});
};
function _711(_716){
var dc=$.data(_716,"datagrid").dc;
dc.view.find("div.datagrid-editable").each(function(){
var cell=$(this);
var _717=cell.parent().attr("field");
var col=$(_716).datagrid("getColumnOption",_717);
cell._outerWidth(col.boxWidth+col.deltaWidth-1);
var ed=$.data(this,"datagrid.editor");
if(ed.actions.resize){
ed.actions.resize(ed.target,cell.width());
}
});
};
function _6a4(_718,_719){
function find(_71a){
if(_71a){
for(var i=0;i<_71a.length;i++){
var cc=_71a[i];
for(var j=0;j<cc.length;j++){
var c=cc[j];
if(c.field==_719){
return c;
}
}
}
}
return null;
};
var opts=$.data(_718,"datagrid").options;
var col=find(opts.columns);
if(!col){
col=find(opts.frozenColumns);
}
return col;
};
function _6e8(_71b,_71c){
var opts=$.data(_71b,"datagrid").options;
var _71d=_71c?opts.frozenColumns:opts.columns;
var aa=[];
var _71e=_71f();
for(var i=0;i<_71d.length;i++){
aa[i]=new Array(_71e);
}
for(var _720=0;_720<_71d.length;_720++){
$.map(_71d[_720],function(col){
var _721=_722(aa[_720]);
if(_721>=0){
var _723=col.field||col.id||"";
for(var c=0;c<(col.colspan||1);c++){
for(var r=0;r<(col.rowspan||1);r++){
aa[_720+r][_721]=_723;
}
_721++;
}
}
});
}
return aa;
function _71f(){
var _724=0;
$.map(_71d[0]||[],function(col){
_724+=col.colspan||1;
});
return _724;
};
function _722(a){
for(var i=0;i<a.length;i++){
if(a[i]==undefined){
return i;
}
}
return -1;
};
};
function _6a3(_725,_726){
var aa=_6e8(_725,_726);
return aa.length?aa[aa.length-1]:aa;
};
function _6e1(_727,data){
var _728=$.data(_727,"datagrid");
var opts=_728.options;
var dc=_728.dc;
data=opts.loadFilter.call(_727,data);
if($.isArray(data)){
data={total:data.length,rows:data};
}
data.total=parseInt(data.total);
_728.data=data;
if(data.footer){
_728.footer=data.footer;
}
if(!opts.remoteSort&&opts.sortName){
var _729=opts.sortName.split(",");
var _72a=opts.sortOrder.split(",");
data.rows.sort(function(r1,r2){
var r=0;
for(var i=0;i<_729.length;i++){
var sn=_729[i];
var so=_72a[i];
var col=_6a4(_727,sn);
var _72b=col.sorter||function(a,b){
return a==b?0:(a>b?1:-1);
};
r=_72b(r1[sn],r2[sn])*(so=="asc"?1:-1);
if(r!=0){
return r;
}
}
return r;
});
}
if(opts.view.onBeforeRender){
opts.view.onBeforeRender.call(opts.view,_727,data.rows);
}
opts.view.render.call(opts.view,_727,dc.body2,false);
opts.view.render.call(opts.view,_727,dc.body1,true);
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,_727,dc.footer2,false);
opts.view.renderFooter.call(opts.view,_727,dc.footer1,true);
}
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,_727);
}
_728.ss.clean();
var _72c=$(_727).datagrid("getPager");
if(_72c.length){
var _72d=_72c.pagination("options");
if(_72d.total!=data.total){
_72c.pagination("refresh",{pageNumber:opts.pageNumber,total:data.total});
if(opts.pageNumber!=_72d.pageNumber&&_72d.pageNumber>0){
opts.pageNumber=_72d.pageNumber;
_6e0(_727);
}
}
}
_671(_727);
dc.body2.triggerHandler("scroll");
$(_727).datagrid("setSelectionState");
$(_727).datagrid("autoSizeColumn");
opts.onLoadSuccess.call(_727,data);
};
function _72e(_72f){
var _730=$.data(_72f,"datagrid");
var opts=_730.options;
var dc=_730.dc;
dc.header1.add(dc.header2).find("input[type=checkbox]")._propAttr("checked",false);
if(opts.idField){
var _731=$.data(_72f,"treegrid")?true:false;
var _732=opts.onSelect;
var _733=opts.onCheck;
opts.onSelect=opts.onCheck=function(){
};
var rows=opts.finder.getRows(_72f);
for(var i=0;i<rows.length;i++){
var row=rows[i];
var _734=_731?row[opts.idField]:$(_72f).datagrid("getRowIndex",row[opts.idField]);
if(_735(_730.selectedRows,row)){
_6ca(_72f,_734,true,true);
}
if(_735(_730.checkedRows,row)){
_6c7(_72f,_734,true);
}
}
opts.onSelect=_732;
opts.onCheck=_733;
}
function _735(a,r){
for(var i=0;i<a.length;i++){
if(a[i][opts.idField]==r[opts.idField]){
a[i]=r;
return true;
}
}
return false;
};
};
function _736(_737,row){
var _738=$.data(_737,"datagrid");
var opts=_738.options;
var rows=_738.data.rows;
if(typeof row=="object"){
return _647(rows,row);
}else{
for(var i=0;i<rows.length;i++){
if(rows[i][opts.idField]==row){
return i;
}
}
return -1;
}
};
function _739(_73a){
var _73b=$.data(_73a,"datagrid");
var opts=_73b.options;
var data=_73b.data;
if(opts.idField){
return _73b.selectedRows;
}else{
var rows=[];
opts.finder.getTr(_73a,"","selected",2).each(function(){
rows.push(opts.finder.getRow(_73a,$(this)));
});
return rows;
}
};
function _73c(_73d){
var _73e=$.data(_73d,"datagrid");
var opts=_73e.options;
if(opts.idField){
return _73e.checkedRows;
}else{
var rows=[];
opts.finder.getTr(_73d,"","checked",2).each(function(){
rows.push(opts.finder.getRow(_73d,$(this)));
});
return rows;
}
};
function _73f(_740,_741){
var _742=$.data(_740,"datagrid");
var dc=_742.dc;
var opts=_742.options;
var tr=opts.finder.getTr(_740,_741);
if(tr.length){
if(tr.closest("table").hasClass("datagrid-btable-frozen")){
return;
}
var _743=dc.view2.children("div.datagrid-header")._outerHeight();
var _744=dc.body2;
var _745=opts.scrollbarSize;
if(_744[0].offsetHeight&&_744[0].clientHeight&&_744[0].offsetHeight<=_744[0].clientHeight){
_745=0;
}
var _746=_744.outerHeight(true)-_744.outerHeight();
var top=tr.position().top-_743-_746;
if(top<0){
_744.scrollTop(_744.scrollTop()+top);
}else{
if(top+tr._outerHeight()>_744.height()-_745){
_744.scrollTop(_744.scrollTop()+top+tr._outerHeight()-_744.height()+_745);
}
}
}
};
function _6c3(_747,_748){
var _749=$.data(_747,"datagrid");
var opts=_749.options;
opts.finder.getTr(_747,_749.highlightIndex).removeClass("datagrid-row-over");
opts.finder.getTr(_747,_748).addClass("datagrid-row-over");
_749.highlightIndex=_748;
};
function _6ca(_74a,_74b,_74c,_74d){
var _74e=$.data(_74a,"datagrid");
var opts=_74e.options;
var row=opts.finder.getRow(_74a,_74b);
if(!row){
return;
}
if(opts.onBeforeSelect.apply(_74a,_64a(_74a,[_74b,row]))==false){
return;
}
if(opts.singleSelect){
_74f(_74a,true);
_74e.selectedRows=[];
}
if(!_74c&&opts.checkOnSelect){
_6c7(_74a,_74b,true);
}
if(opts.idField){
_649(_74e.selectedRows,opts.idField,row);
}
opts.finder.getTr(_74a,_74b).addClass("datagrid-row-selected");
opts.onSelect.apply(_74a,_64a(_74a,[_74b,row]));
if(!_74d&&opts.scrollOnSelect){
_73f(_74a,_74b);
}
};
function _6cb(_750,_751,_752){
var _753=$.data(_750,"datagrid");
var dc=_753.dc;
var opts=_753.options;
var row=opts.finder.getRow(_750,_751);
if(!row){
return;
}
if(opts.onBeforeUnselect.apply(_750,_64a(_750,[_751,row]))==false){
return;
}
if(!_752&&opts.checkOnSelect){
_6c8(_750,_751,true);
}
opts.finder.getTr(_750,_751).removeClass("datagrid-row-selected");
if(opts.idField){
_648(_753.selectedRows,opts.idField,row[opts.idField]);
}
opts.onUnselect.apply(_750,_64a(_750,[_751,row]));
};
function _754(_755,_756){
var _757=$.data(_755,"datagrid");
var opts=_757.options;
var rows=opts.finder.getRows(_755);
var _758=$.data(_755,"datagrid").selectedRows;
if(!_756&&opts.checkOnSelect){
_6b5(_755,true);
}
opts.finder.getTr(_755,"","allbody").addClass("datagrid-row-selected");
if(opts.idField){
for(var _759=0;_759<rows.length;_759++){
_649(_758,opts.idField,rows[_759]);
}
}
opts.onSelectAll.call(_755,rows);
};
function _74f(_75a,_75b){
var _75c=$.data(_75a,"datagrid");
var opts=_75c.options;
var rows=opts.finder.getRows(_75a);
var _75d=$.data(_75a,"datagrid").selectedRows;
if(!_75b&&opts.checkOnSelect){
_6b6(_75a,true);
}
opts.finder.getTr(_75a,"","selected").removeClass("datagrid-row-selected");
if(opts.idField){
for(var _75e=0;_75e<rows.length;_75e++){
_648(_75d,opts.idField,rows[_75e][opts.idField]);
}
}
opts.onUnselectAll.call(_75a,rows);
};
function _6c7(_75f,_760,_761){
var _762=$.data(_75f,"datagrid");
var opts=_762.options;
var row=opts.finder.getRow(_75f,_760);
if(!row){
return;
}
if(opts.onBeforeCheck.apply(_75f,_64a(_75f,[_760,row]))==false){
return;
}
if(opts.singleSelect&&opts.selectOnCheck){
_6b6(_75f,true);
_762.checkedRows=[];
}
if(!_761&&opts.selectOnCheck){
_6ca(_75f,_760,true);
}
var tr=opts.finder.getTr(_75f,_760).addClass("datagrid-row-checked");
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);
tr=opts.finder.getTr(_75f,"","checked",2);
if(tr.length==opts.finder.getRows(_75f).length){
var dc=_762.dc;
dc.header1.add(dc.header2).find("input[type=checkbox]")._propAttr("checked",true);
}
if(opts.idField){
_649(_762.checkedRows,opts.idField,row);
}
opts.onCheck.apply(_75f,_64a(_75f,[_760,row]));
};
function _6c8(_763,_764,_765){
var _766=$.data(_763,"datagrid");
var opts=_766.options;
var row=opts.finder.getRow(_763,_764);
if(!row){
return;
}
if(opts.onBeforeUncheck.apply(_763,_64a(_763,[_764,row]))==false){
return;
}
if(!_765&&opts.selectOnCheck){
_6cb(_763,_764,true);
}
var tr=opts.finder.getTr(_763,_764).removeClass("datagrid-row-checked");
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",false);
var dc=_766.dc;
var _767=dc.header1.add(dc.header2);
_767.find("input[type=checkbox]")._propAttr("checked",false);
if(opts.idField){
_648(_766.checkedRows,opts.idField,row[opts.idField]);
}
opts.onUncheck.apply(_763,_64a(_763,[_764,row]));
};
function _6b5(_768,_769){
var _76a=$.data(_768,"datagrid");
var opts=_76a.options;
var rows=opts.finder.getRows(_768);
if(!_769&&opts.selectOnCheck){
_754(_768,true);
}
var dc=_76a.dc;
var hck=dc.header1.add(dc.header2).find("input[type=checkbox]");
var bck=opts.finder.getTr(_768,"","allbody").addClass("datagrid-row-checked").find("div.datagrid-cell-check input[type=checkbox]");
hck.add(bck)._propAttr("checked",true);
if(opts.idField){
for(var i=0;i<rows.length;i++){
_649(_76a.checkedRows,opts.idField,rows[i]);
}
}
opts.onCheckAll.call(_768,rows);
};
function _6b6(_76b,_76c){
var _76d=$.data(_76b,"datagrid");
var opts=_76d.options;
var rows=opts.finder.getRows(_76b);
if(!_76c&&opts.selectOnCheck){
_74f(_76b,true);
}
var dc=_76d.dc;
var hck=dc.header1.add(dc.header2).find("input[type=checkbox]");
var bck=opts.finder.getTr(_76b,"","checked").removeClass("datagrid-row-checked").find("div.datagrid-cell-check input[type=checkbox]");
hck.add(bck)._propAttr("checked",false);
if(opts.idField){
for(var i=0;i<rows.length;i++){
_648(_76d.checkedRows,opts.idField,rows[i][opts.idField]);
}
}
opts.onUncheckAll.call(_76b,rows);
};
function _76e(_76f,_770){
var opts=$.data(_76f,"datagrid").options;
var tr=opts.finder.getTr(_76f,_770);
var row=opts.finder.getRow(_76f,_770);
if(tr.hasClass("datagrid-row-editing")){
return;
}
if(opts.onBeforeEdit.apply(_76f,_64a(_76f,[_770,row]))==false){
return;
}
tr.addClass("datagrid-row-editing");
_771(_76f,_770);
_711(_76f);
tr.find("div.datagrid-editable").each(function(){
var _772=$(this).parent().attr("field");
var ed=$.data(this,"datagrid.editor");
ed.actions.setValue(ed.target,row[_772]);
});
_773(_76f,_770);
opts.onBeginEdit.apply(_76f,_64a(_76f,[_770,row]));
};
function _774(_775,_776,_777){
var _778=$.data(_775,"datagrid");
var opts=_778.options;
var _779=_778.updatedRows;
var _77a=_778.insertedRows;
var tr=opts.finder.getTr(_775,_776);
var row=opts.finder.getRow(_775,_776);
if(!tr.hasClass("datagrid-row-editing")){
return;
}
if(!_777){
if(!_773(_775,_776)){
return;
}
var _77b=false;
var _77c={};
tr.find("div.datagrid-editable").each(function(){
var _77d=$(this).parent().attr("field");
var ed=$.data(this,"datagrid.editor");
var t=$(ed.target);
var _77e=t.data("textbox")?t.textbox("textbox"):t;
if(_77e.is(":focus")){
_77e.triggerHandler("blur");
}
var _77f=ed.actions.getValue(ed.target);
if(row[_77d]!==_77f){
row[_77d]=_77f;
_77b=true;
_77c[_77d]=_77f;
}
});
if(_77b){
if(_647(_77a,row)==-1){
if(_647(_779,row)==-1){
_779.push(row);
}
}
}
opts.onEndEdit.apply(_775,_64a(_775,[_776,row,_77c]));
}
tr.removeClass("datagrid-row-editing");
_780(_775,_776);
$(_775).datagrid("refreshRow",_776);
if(!_777){
opts.onAfterEdit.apply(_775,_64a(_775,[_776,row,_77c]));
}else{
opts.onCancelEdit.apply(_775,_64a(_775,[_776,row]));
}
};
function _781(_782,_783){
var opts=$.data(_782,"datagrid").options;
var tr=opts.finder.getTr(_782,_783);
var _784=[];
tr.children("td").each(function(){
var cell=$(this).find("div.datagrid-editable");
if(cell.length){
var ed=$.data(cell[0],"datagrid.editor");
_784.push(ed);
}
});
return _784;
};
function _785(_786,_787){
var _788=_781(_786,_787.index!=undefined?_787.index:_787.id);
for(var i=0;i<_788.length;i++){
if(_788[i].field==_787.field){
return _788[i];
}
}
return null;
};
function _771(_789,_78a){
var opts=$.data(_789,"datagrid").options;
var tr=opts.finder.getTr(_789,_78a);
tr.children("td").each(function(){
var cell=$(this).find("div.datagrid-cell");
var _78b=$(this).attr("field");
var col=_6a4(_789,_78b);
if(col&&col.editor){
var _78c,_78d;
if(typeof col.editor=="string"){
_78c=col.editor;
}else{
_78c=col.editor.type;
_78d=col.editor.options;
}
var _78e=opts.editors[_78c];
if(_78e){
var _78f=cell.html();
var _790=cell._outerWidth();
cell.addClass("datagrid-editable");
cell._outerWidth(_790);
cell.html("<table border=\"0\" cellspacing=\"0\" cellpadding=\"1\"><tr><td></td></tr></table>");
cell.children("table").bind("click dblclick contextmenu",function(e){
e.stopPropagation();
});
$.data(cell[0],"datagrid.editor",{actions:_78e,target:_78e.init(cell.find("td"),$.extend({height:opts.editorHeight},_78d)),field:_78b,type:_78c,oldHtml:_78f});
}
}
});
_671(_789,_78a,true);
};
function _780(_791,_792){
var opts=$.data(_791,"datagrid").options;
var tr=opts.finder.getTr(_791,_792);
tr.children("td").each(function(){
var cell=$(this).find("div.datagrid-editable");
if(cell.length){
var ed=$.data(cell[0],"datagrid.editor");
if(ed.actions.destroy){
ed.actions.destroy(ed.target);
}
cell.html(ed.oldHtml);
$.removeData(cell[0],"datagrid.editor");
cell.removeClass("datagrid-editable");
cell.css("width","");
}
});
};
function _773(_793,_794){
var tr=$.data(_793,"datagrid").options.finder.getTr(_793,_794);
if(!tr.hasClass("datagrid-row-editing")){
return true;
}
var vbox=tr.find(".validatebox-text");
vbox.validatebox("validate");
vbox.trigger("mouseleave");
var _795=tr.find(".validatebox-invalid");
return _795.length==0;
};
function _796(_797,_798){
var _799=$.data(_797,"datagrid").insertedRows;
var _79a=$.data(_797,"datagrid").deletedRows;
var _79b=$.data(_797,"datagrid").updatedRows;
if(!_798){
var rows=[];
rows=rows.concat(_799);
rows=rows.concat(_79a);
rows=rows.concat(_79b);
return rows;
}else{
if(_798=="inserted"){
return _799;
}else{
if(_798=="deleted"){
return _79a;
}else{
if(_798=="updated"){
return _79b;
}
}
}
}
return [];
};
function _79c(_79d,_79e){
var _79f=$.data(_79d,"datagrid");
var opts=_79f.options;
var data=_79f.data;
var _7a0=_79f.insertedRows;
var _7a1=_79f.deletedRows;
$(_79d).datagrid("cancelEdit",_79e);
var row=opts.finder.getRow(_79d,_79e);
if(_647(_7a0,row)>=0){
_648(_7a0,row);
}else{
_7a1.push(row);
}
_648(_79f.selectedRows,opts.idField,row[opts.idField]);
_648(_79f.checkedRows,opts.idField,row[opts.idField]);
opts.view.deleteRow.call(opts.view,_79d,_79e);
if(opts.height=="auto"){
_671(_79d);
}
$(_79d).datagrid("getPager").pagination("refresh",{total:data.total});
};
function _7a2(_7a3,_7a4){
var data=$.data(_7a3,"datagrid").data;
var view=$.data(_7a3,"datagrid").options.view;
var _7a5=$.data(_7a3,"datagrid").insertedRows;
view.insertRow.call(view,_7a3,_7a4.index,_7a4.row);
_7a5.push(_7a4.row);
$(_7a3).datagrid("getPager").pagination("refresh",{total:data.total});
};
function _7a6(_7a7,row){
var data=$.data(_7a7,"datagrid").data;
var view=$.data(_7a7,"datagrid").options.view;
var _7a8=$.data(_7a7,"datagrid").insertedRows;
view.insertRow.call(view,_7a7,null,row);
_7a8.push(row);
$(_7a7).datagrid("getPager").pagination("refresh",{total:data.total});
};
function _7a9(_7aa,_7ab){
var _7ac=$.data(_7aa,"datagrid");
var opts=_7ac.options;
var row=opts.finder.getRow(_7aa,_7ab.index);
var _7ad=false;
_7ab.row=_7ab.row||{};
for(var _7ae in _7ab.row){
if(row[_7ae]!==_7ab.row[_7ae]){
_7ad=true;
break;
}
}
if(_7ad){
if(_647(_7ac.insertedRows,row)==-1){
if(_647(_7ac.updatedRows,row)==-1){
_7ac.updatedRows.push(row);
}
}
opts.view.updateRow.call(opts.view,_7aa,_7ab.index,_7ab.row);
}
};
function _7af(_7b0){
var _7b1=$.data(_7b0,"datagrid");
var data=_7b1.data;
var rows=data.rows;
var _7b2=[];
for(var i=0;i<rows.length;i++){
_7b2.push($.extend({},rows[i]));
}
_7b1.originalRows=_7b2;
_7b1.updatedRows=[];
_7b1.insertedRows=[];
_7b1.deletedRows=[];
};
function _7b3(_7b4){
var data=$.data(_7b4,"datagrid").data;
var ok=true;
for(var i=0,len=data.rows.length;i<len;i++){
if(_773(_7b4,i)){
$(_7b4).datagrid("endEdit",i);
}else{
ok=false;
}
}
if(ok){
_7af(_7b4);
}
};
function _7b5(_7b6){
var _7b7=$.data(_7b6,"datagrid");
var opts=_7b7.options;
var _7b8=_7b7.originalRows;
var _7b9=_7b7.insertedRows;
var _7ba=_7b7.deletedRows;
var _7bb=_7b7.selectedRows;
var _7bc=_7b7.checkedRows;
var data=_7b7.data;
function _7bd(a){
var ids=[];
for(var i=0;i<a.length;i++){
ids.push(a[i][opts.idField]);
}
return ids;
};
function _7be(ids,_7bf){
for(var i=0;i<ids.length;i++){
var _7c0=_736(_7b6,ids[i]);
if(_7c0>=0){
(_7bf=="s"?_6ca:_6c7)(_7b6,_7c0,true);
}
}
};
for(var i=0;i<data.rows.length;i++){
$(_7b6).datagrid("cancelEdit",i);
}
var _7c1=_7bd(_7bb);
var _7c2=_7bd(_7bc);
_7bb.splice(0,_7bb.length);
_7bc.splice(0,_7bc.length);
data.total+=_7ba.length-_7b9.length;
data.rows=_7b8;
_6e1(_7b6,data);
_7be(_7c1,"s");
_7be(_7c2,"c");
_7af(_7b6);
};
function _6e0(_7c3,_7c4,cb){
var opts=$.data(_7c3,"datagrid").options;
if(_7c4){
opts.queryParams=_7c4;
}
var _7c5=$.extend({},opts.queryParams);
if(opts.pagination){
$.extend(_7c5,{page:opts.pageNumber||1,rows:opts.pageSize});
}
if(opts.sortName){
$.extend(_7c5,{sort:opts.sortName,order:opts.sortOrder});
}
if(opts.onBeforeLoad.call(_7c3,_7c5)==false){
opts.view.setEmptyMsg(_7c3);
return;
}
$(_7c3).datagrid("loading");
var _7c6=opts.loader.call(_7c3,_7c5,function(data){
$(_7c3).datagrid("loaded");
$(_7c3).datagrid("loadData",data);
if(cb){
cb();
}
},function(){
$(_7c3).datagrid("loaded");
opts.onLoadError.apply(_7c3,arguments);
});
if(_7c6==false){
$(_7c3).datagrid("loaded");
opts.view.setEmptyMsg(_7c3);
}
};
function _7c7(_7c8,_7c9){
var opts=$.data(_7c8,"datagrid").options;
_7c9.type=_7c9.type||"body";
_7c9.rowspan=_7c9.rowspan||1;
_7c9.colspan=_7c9.colspan||1;
if(_7c9.rowspan==1&&_7c9.colspan==1){
return;
}
var tr=opts.finder.getTr(_7c8,(_7c9.index!=undefined?_7c9.index:_7c9.id),_7c9.type);
if(!tr.length){
return;
}
var td=tr.find("td[field=\""+_7c9.field+"\"]");
td.attr("rowspan",_7c9.rowspan).attr("colspan",_7c9.colspan);
td.addClass("datagrid-td-merged");
_7ca(td.next(),_7c9.colspan-1);
for(var i=1;i<_7c9.rowspan;i++){
tr=tr.next();
if(!tr.length){
break;
}
_7ca(tr.find("td[field=\""+_7c9.field+"\"]"),_7c9.colspan);
}
_710(_7c8,td);
function _7ca(td,_7cb){
for(var i=0;i<_7cb;i++){
td.hide();
td=td.next();
}
};
};
$.fn.datagrid=function(_7cc,_7cd){
if(typeof _7cc=="string"){
return $.fn.datagrid.methods[_7cc](this,_7cd);
}
_7cc=_7cc||{};
return this.each(function(){
var _7ce=$.data(this,"datagrid");
var opts;
if(_7ce){
opts=$.extend(_7ce.options,_7cc);
_7ce.options=opts;
}else{
opts=$.extend({},$.extend({},$.fn.datagrid.defaults,{queryParams:{}}),$.fn.datagrid.parseOptions(this),_7cc);
$(this).css("width","").css("height","");
var _7cf=_685(this,opts.rownumbers);
if(!opts.columns){
opts.columns=_7cf.columns;
}
if(!opts.frozenColumns){
opts.frozenColumns=_7cf.frozenColumns;
}
opts.columns=$.extend(true,[],opts.columns);
opts.frozenColumns=$.extend(true,[],opts.frozenColumns);
opts.view=$.extend({},opts.view);
$.data(this,"datagrid",{options:opts,panel:_7cf.panel,dc:_7cf.dc,ss:null,selectedRows:[],checkedRows:[],data:{total:0,rows:[]},originalRows:[],updatedRows:[],insertedRows:[],deletedRows:[]});
}
_68e(this);
_6a5(this);
_65b(this);
if(opts.data){
$(this).datagrid("loadData",opts.data);
}else{
var data=$.fn.datagrid.parseData(this);
if(data.total>0){
$(this).datagrid("loadData",data);
}else{
$(this).datagrid("autoSizeColumn");
}
}
_6e0(this);
});
};
function _7d0(_7d1){
var _7d2={};
$.map(_7d1,function(name){
_7d2[name]=_7d3(name);
});
return _7d2;
function _7d3(name){
function isA(_7d4){
return $.data($(_7d4)[0],name)!=undefined;
};
return {init:function(_7d5,_7d6){
var _7d7=$("<input type=\"text\" class=\"datagrid-editable-input\">").appendTo(_7d5);
if(_7d7[name]&&name!="text"){
return _7d7[name](_7d6);
}else{
return _7d7;
}
},destroy:function(_7d8){
if(isA(_7d8,name)){
$(_7d8)[name]("destroy");
}
},getValue:function(_7d9){
if(isA(_7d9,name)){
var opts=$(_7d9)[name]("options");
if(opts.multiple){
return $(_7d9)[name]("getValues").join(opts.separator);
}else{
return $(_7d9)[name]("getValue");
}
}else{
return $(_7d9).val();
}
},setValue:function(_7da,_7db){
if(isA(_7da,name)){
var opts=$(_7da)[name]("options");
if(opts.multiple){
if(_7db){
$(_7da)[name]("setValues",_7db.split(opts.separator));
}else{
$(_7da)[name]("clear");
}
}else{
$(_7da)[name]("setValue",_7db);
}
}else{
$(_7da).val(_7db);
}
},resize:function(_7dc,_7dd){
if(isA(_7dc,name)){
$(_7dc)[name]("resize",_7dd);
}else{
$(_7dc)._size({width:_7dd,height:$.fn.datagrid.defaults.editorHeight});
}
}};
};
};
var _7de=$.extend({},_7d0(["text","textbox","passwordbox","filebox","numberbox","numberspinner","combobox","combotree","combogrid","combotreegrid","datebox","datetimebox","timespinner","datetimespinner"]),{textarea:{init:function(_7df,_7e0){
var _7e1=$("<textarea class=\"datagrid-editable-input\"></textarea>").appendTo(_7df);
_7e1.css("vertical-align","middle")._outerHeight(_7e0.height);
return _7e1;
},getValue:function(_7e2){
return $(_7e2).val();
},setValue:function(_7e3,_7e4){
$(_7e3).val(_7e4);
},resize:function(_7e5,_7e6){
$(_7e5)._outerWidth(_7e6);
}},checkbox:{init:function(_7e7,_7e8){
var _7e9=$("<input type=\"checkbox\">").appendTo(_7e7);
_7e9.val(_7e8.on);
_7e9.attr("offval",_7e8.off);
return _7e9;
},getValue:function(_7ea){
if($(_7ea).is(":checked")){
return $(_7ea).val();
}else{
return $(_7ea).attr("offval");
}
},setValue:function(_7eb,_7ec){
var _7ed=false;
if($(_7eb).val()==_7ec){
_7ed=true;
}
$(_7eb)._propAttr("checked",_7ed);
}},validatebox:{init:function(_7ee,_7ef){
var _7f0=$("<input type=\"text\" class=\"datagrid-editable-input\">").appendTo(_7ee);
_7f0.validatebox(_7ef);
return _7f0;
},destroy:function(_7f1){
$(_7f1).validatebox("destroy");
},getValue:function(_7f2){
return $(_7f2).val();
},setValue:function(_7f3,_7f4){
$(_7f3).val(_7f4);
},resize:function(_7f5,_7f6){
$(_7f5)._outerWidth(_7f6)._outerHeight($.fn.datagrid.defaults.editorHeight);
}}});
$.fn.datagrid.methods={options:function(jq){
var _7f7=$.data(jq[0],"datagrid").options;
var _7f8=$.data(jq[0],"datagrid").panel.panel("options");
var opts=$.extend(_7f7,{width:_7f8.width,height:_7f8.height,closed:_7f8.closed,collapsed:_7f8.collapsed,minimized:_7f8.minimized,maximized:_7f8.maximized});
return opts;
},setSelectionState:function(jq){
return jq.each(function(){
_72e(this);
});
},createStyleSheet:function(jq){
return _64c(jq[0]);
},getPanel:function(jq){
return $.data(jq[0],"datagrid").panel;
},getPager:function(jq){
return $.data(jq[0],"datagrid").panel.children("div.datagrid-pager");
},getColumnFields:function(jq,_7f9){
return _6a3(jq[0],_7f9);
},getColumnOption:function(jq,_7fa){
return _6a4(jq[0],_7fa);
},resize:function(jq,_7fb){
return jq.each(function(){
_65b(this,_7fb);
});
},load:function(jq,_7fc){
return jq.each(function(){
var opts=$(this).datagrid("options");
if(typeof _7fc=="string"){
opts.url=_7fc;
_7fc=null;
}
opts.pageNumber=1;
var _7fd=$(this).datagrid("getPager");
_7fd.pagination("refresh",{pageNumber:1});
_6e0(this,_7fc);
});
},reload:function(jq,_7fe){
return jq.each(function(){
var opts=$(this).datagrid("options");
if(typeof _7fe=="string"){
opts.url=_7fe;
_7fe=null;
}
_6e0(this,_7fe);
});
},reloadFooter:function(jq,_7ff){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
var dc=$.data(this,"datagrid").dc;
if(_7ff){
$.data(this,"datagrid").footer=_7ff;
}
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,this,dc.footer2,false);
opts.view.renderFooter.call(opts.view,this,dc.footer1,true);
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,this);
}
$(this).datagrid("fixRowHeight");
}
});
},loading:function(jq){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
$(this).datagrid("getPager").pagination("loading");
if(opts.loadMsg){
var _800=$(this).datagrid("getPanel");
if(!_800.children("div.datagrid-mask").length){
$("<div class=\"datagrid-mask\" style=\"display:block\"></div>").appendTo(_800);
var msg=$("<div class=\"datagrid-mask-msg\" style=\"display:block;left:50%\"></div>").html(opts.loadMsg).appendTo(_800);
msg._outerHeight(40);
msg.css({marginLeft:(-msg.outerWidth()/2),lineHeight:(msg.height()+"px")});
}
}
});
},loaded:function(jq){
return jq.each(function(){
$(this).datagrid("getPager").pagination("loaded");
var _801=$(this).datagrid("getPanel");
_801.children("div.datagrid-mask-msg").remove();
_801.children("div.datagrid-mask").remove();
});
},fitColumns:function(jq){
return jq.each(function(){
_6ed(this);
});
},fixColumnSize:function(jq,_802){
return jq.each(function(){
_70b(this,_802);
});
},fixRowHeight:function(jq,_803){
return jq.each(function(){
_671(this,_803);
});
},freezeRow:function(jq,_804){
return jq.each(function(){
_67e(this,_804);
});
},autoSizeColumn:function(jq,_805){
return jq.each(function(){
_6ff(this,_805);
});
},loadData:function(jq,data){
return jq.each(function(){
_6e1(this,data);
_7af(this);
});
},getData:function(jq){
return $.data(jq[0],"datagrid").data;
},getRows:function(jq){
return $.data(jq[0],"datagrid").data.rows;
},getFooterRows:function(jq){
return $.data(jq[0],"datagrid").footer;
},getRowIndex:function(jq,id){
return _736(jq[0],id);
},getChecked:function(jq){
return _73c(jq[0]);
},getSelected:function(jq){
var rows=_739(jq[0]);
return rows.length>0?rows[0]:null;
},getSelections:function(jq){
return _739(jq[0]);
},clearSelections:function(jq){
return jq.each(function(){
var _806=$.data(this,"datagrid");
var _807=_806.selectedRows;
var _808=_806.checkedRows;
_807.splice(0,_807.length);
_74f(this);
if(_806.options.checkOnSelect){
_808.splice(0,_808.length);
}
});
},clearChecked:function(jq){
return jq.each(function(){
var _809=$.data(this,"datagrid");
var _80a=_809.selectedRows;
var _80b=_809.checkedRows;
_80b.splice(0,_80b.length);
_6b6(this);
if(_809.options.selectOnCheck){
_80a.splice(0,_80a.length);
}
});
},scrollTo:function(jq,_80c){
return jq.each(function(){
_73f(this,_80c);
});
},highlightRow:function(jq,_80d){
return jq.each(function(){
_6c3(this,_80d);
_73f(this,_80d);
});
},selectAll:function(jq){
return jq.each(function(){
_754(this);
});
},unselectAll:function(jq){
return jq.each(function(){
_74f(this);
});
},selectRow:function(jq,_80e){
return jq.each(function(){
_6ca(this,_80e);
});
},selectRecord:function(jq,id){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
if(opts.idField){
var _80f=_736(this,id);
if(_80f>=0){
$(this).datagrid("selectRow",_80f);
}
}
});
},unselectRow:function(jq,_810){
return jq.each(function(){
_6cb(this,_810);
});
},checkRow:function(jq,_811){
return jq.each(function(){
_6c7(this,_811);
});
},uncheckRow:function(jq,_812){
return jq.each(function(){
_6c8(this,_812);
});
},checkAll:function(jq){
return jq.each(function(){
_6b5(this);
});
},uncheckAll:function(jq){
return jq.each(function(){
_6b6(this);
});
},beginEdit:function(jq,_813){
return jq.each(function(){
_76e(this,_813);
});
},endEdit:function(jq,_814){
return jq.each(function(){
_774(this,_814,false);
});
},cancelEdit:function(jq,_815){
return jq.each(function(){
_774(this,_815,true);
});
},getEditors:function(jq,_816){
return _781(jq[0],_816);
},getEditor:function(jq,_817){
return _785(jq[0],_817);
},refreshRow:function(jq,_818){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
opts.view.refreshRow.call(opts.view,this,_818);
});
},validateRow:function(jq,_819){
return _773(jq[0],_819);
},updateRow:function(jq,_81a){
return jq.each(function(){
_7a9(this,_81a);
});
},appendRow:function(jq,row){
return jq.each(function(){
_7a6(this,row);
});
},insertRow:function(jq,_81b){
return jq.each(function(){
_7a2(this,_81b);
});
},deleteRow:function(jq,_81c){
return jq.each(function(){
_79c(this,_81c);
});
},getChanges:function(jq,_81d){
return _796(jq[0],_81d);
},acceptChanges:function(jq){
return jq.each(function(){
_7b3(this);
});
},rejectChanges:function(jq){
return jq.each(function(){
_7b5(this);
});
},mergeCells:function(jq,_81e){
return jq.each(function(){
_7c7(this,_81e);
});
},showColumn:function(jq,_81f){
return jq.each(function(){
var col=$(this).datagrid("getColumnOption",_81f);
if(col.hidden){
col.hidden=false;
$(this).datagrid("getPanel").find("td[field=\""+_81f+"\"]").show();
_6e2(this,_81f,1);
$(this).datagrid("fitColumns");
}
});
},hideColumn:function(jq,_820){
return jq.each(function(){
var col=$(this).datagrid("getColumnOption",_820);
if(!col.hidden){
col.hidden=true;
$(this).datagrid("getPanel").find("td[field=\""+_820+"\"]").hide();
_6e2(this,_820,-1);
$(this).datagrid("fitColumns");
}
});
},sort:function(jq,_821){
return jq.each(function(){
_6b7(this,_821);
});
},gotoPage:function(jq,_822){
return jq.each(function(){
var _823=this;
var page,cb;
if(typeof _822=="object"){
page=_822.page;
cb=_822.callback;
}else{
page=_822;
}
$(_823).datagrid("options").pageNumber=page;
$(_823).datagrid("getPager").pagination("refresh",{pageNumber:page});
_6e0(_823,null,function(){
if(cb){
cb.call(_823,page);
}
});
});
}};
$.fn.datagrid.parseOptions=function(_824){
var t=$(_824);
return $.extend({},$.fn.panel.parseOptions(_824),$.parser.parseOptions(_824,["url","toolbar","idField","sortName","sortOrder","pagePosition","resizeHandle",{sharedStyleSheet:"boolean",fitColumns:"boolean",autoRowHeight:"boolean",striped:"boolean",nowrap:"boolean"},{rownumbers:"boolean",singleSelect:"boolean",ctrlSelect:"boolean",checkOnSelect:"boolean",selectOnCheck:"boolean"},{pagination:"boolean",pageSize:"number",pageNumber:"number"},{multiSort:"boolean",remoteSort:"boolean",showHeader:"boolean",showFooter:"boolean"},{scrollbarSize:"number",scrollOnSelect:"boolean"}]),{pageList:(t.attr("pageList")?eval(t.attr("pageList")):undefined),loadMsg:(t.attr("loadMsg")!=undefined?t.attr("loadMsg"):undefined),rowStyler:(t.attr("rowStyler")?eval(t.attr("rowStyler")):undefined)});
};
$.fn.datagrid.parseData=function(_825){
var t=$(_825);
var data={total:0,rows:[]};
var _826=t.datagrid("getColumnFields",true).concat(t.datagrid("getColumnFields",false));
t.find("tbody tr").each(function(){
data.total++;
var row={};
$.extend(row,$.parser.parseOptions(this,["iconCls","state"]));
for(var i=0;i<_826.length;i++){
row[_826[i]]=$(this).find("td:eq("+i+")").html();
}
data.rows.push(row);
});
return data;
};
var _827={render:function(_828,_829,_82a){
var rows=$(_828).datagrid("getRows");
$(_829).empty().html(this.renderTable(_828,0,rows,_82a));
},renderFooter:function(_82b,_82c,_82d){
var opts=$.data(_82b,"datagrid").options;
var rows=$.data(_82b,"datagrid").footer||[];
var _82e=$(_82b).datagrid("getColumnFields",_82d);
var _82f=["<table class=\"datagrid-ftable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<rows.length;i++){
_82f.push("<tr class=\"datagrid-row\" datagrid-row-index=\""+i+"\">");
_82f.push(this.renderRow.call(this,_82b,_82e,_82d,i,rows[i]));
_82f.push("</tr>");
}
_82f.push("</tbody></table>");
$(_82c).html(_82f.join(""));
},renderTable:function(_830,_831,rows,_832){
var _833=$.data(_830,"datagrid");
var opts=_833.options;
if(_832){
if(!(opts.rownumbers||(opts.frozenColumns&&opts.frozenColumns.length))){
return "";
}
}
var _834=$(_830).datagrid("getColumnFields",_832);
var _835=["<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<rows.length;i++){
var row=rows[i];
var css=opts.rowStyler?opts.rowStyler.call(_830,_831,row):"";
var cs=this.getStyleValue(css);
var cls="class=\"datagrid-row "+(_831%2&&opts.striped?"datagrid-row-alt ":" ")+cs.c+"\"";
var _836=cs.s?"style=\""+cs.s+"\"":"";
var _837=_833.rowIdPrefix+"-"+(_832?1:2)+"-"+_831;
_835.push("<tr id=\""+_837+"\" datagrid-row-index=\""+_831+"\" "+cls+" "+_836+">");
_835.push(this.renderRow.call(this,_830,_834,_832,_831,row));
_835.push("</tr>");
_831++;
}
_835.push("</tbody></table>");
return _835.join("");
},renderRow:function(_838,_839,_83a,_83b,_83c){
var opts=$.data(_838,"datagrid").options;
var cc=[];
if(_83a&&opts.rownumbers){
var _83d=_83b+1;
if(opts.pagination){
_83d+=(opts.pageNumber-1)*opts.pageSize;
}
cc.push("<td class=\"datagrid-td-rownumber\"><div class=\"datagrid-cell-rownumber\">"+_83d+"</div></td>");
}
for(var i=0;i<_839.length;i++){
var _83e=_839[i];
var col=$(_838).datagrid("getColumnOption",_83e);
if(col){
var _83f=_83c[_83e];
var css=col.styler?(col.styler.call(_838,_83f,_83c,_83b)||""):"";
var cs=this.getStyleValue(css);
var cls=cs.c?"class=\""+cs.c+"\"":"";
var _840=col.hidden?"style=\"display:none;"+cs.s+"\"":(cs.s?"style=\""+cs.s+"\"":"");
cc.push("<td field=\""+_83e+"\" "+cls+" "+_840+">");
var _840="";
if(!col.checkbox){
if(col.align){
_840+="text-align:"+col.align+";";
}
if(!opts.nowrap){
_840+="white-space:normal;height:auto;";
}else{
if(opts.autoRowHeight){
_840+="height:auto;";
}
}
}
cc.push("<div style=\""+_840+"\" ");
cc.push(col.checkbox?"class=\"datagrid-cell-check\"":"class=\"datagrid-cell "+col.cellClass+"\"");
cc.push(">");
if(col.checkbox){
cc.push("<input type=\"checkbox\" "+(_83c.checked?"checked=\"checked\"":""));
cc.push(" name=\""+_83e+"\" value=\""+(_83f!=undefined?_83f:"")+"\">");
}else{
if(col.formatter){
cc.push(col.formatter(_83f,_83c,_83b));
}else{
cc.push(_83f);
}
}
cc.push("</div>");
cc.push("</td>");
}
}
return cc.join("");
},getStyleValue:function(css){
var _841="";
var _842="";
if(typeof css=="string"){
_842=css;
}else{
if(css){
_841=css["class"]||"";
_842=css["style"]||"";
}
}
return {c:_841,s:_842};
},refreshRow:function(_843,_844){
this.updateRow.call(this,_843,_844,{});
},updateRow:function(_845,_846,row){
var opts=$.data(_845,"datagrid").options;
var _847=opts.finder.getRow(_845,_846);
$.extend(_847,row);
var cs=_848.call(this,_846);
var _849=cs.s;
var cls="datagrid-row "+(_846%2&&opts.striped?"datagrid-row-alt ":" ")+cs.c;
function _848(_84a){
var css=opts.rowStyler?opts.rowStyler.call(_845,_84a,_847):"";
return this.getStyleValue(css);
};
function _84b(_84c){
var tr=opts.finder.getTr(_845,_846,"body",(_84c?1:2));
if(!tr.length){
return;
}
var _84d=$(_845).datagrid("getColumnFields",_84c);
var _84e=tr.find("div.datagrid-cell-check input[type=checkbox]").is(":checked");
tr.html(this.renderRow.call(this,_845,_84d,_84c,_846,_847));
var _84f=(tr.hasClass("datagrid-row-checked")?" datagrid-row-checked":"")+(tr.hasClass("datagrid-row-selected")?" datagrid-row-selected":"");
tr.attr("style",_849).attr("class",cls+_84f);
if(_84e){
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);
}
};
_84b.call(this,true);
_84b.call(this,false);
$(_845).datagrid("fixRowHeight",_846);
},insertRow:function(_850,_851,row){
var _852=$.data(_850,"datagrid");
var opts=_852.options;
var dc=_852.dc;
var data=_852.data;
if(_851==undefined||_851==null){
_851=data.rows.length;
}
if(_851>data.rows.length){
_851=data.rows.length;
}
function _853(_854){
var _855=_854?1:2;
for(var i=data.rows.length-1;i>=_851;i--){
var tr=opts.finder.getTr(_850,i,"body",_855);
tr.attr("datagrid-row-index",i+1);
tr.attr("id",_852.rowIdPrefix+"-"+_855+"-"+(i+1));
if(_854&&opts.rownumbers){
var _856=i+2;
if(opts.pagination){
_856+=(opts.pageNumber-1)*opts.pageSize;
}
tr.find("div.datagrid-cell-rownumber").html(_856);
}
if(opts.striped){
tr.removeClass("datagrid-row-alt").addClass((i+1)%2?"datagrid-row-alt":"");
}
}
};
function _857(_858){
var _859=_858?1:2;
var _85a=$(_850).datagrid("getColumnFields",_858);
var _85b=_852.rowIdPrefix+"-"+_859+"-"+_851;
var tr="<tr id=\""+_85b+"\" class=\"datagrid-row\" datagrid-row-index=\""+_851+"\"></tr>";
if(_851>=data.rows.length){
if(data.rows.length){
opts.finder.getTr(_850,"","last",_859).after(tr);
}else{
var cc=_858?dc.body1:dc.body2;
cc.html("<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"+tr+"</tbody></table>");
}
}else{
opts.finder.getTr(_850,_851+1,"body",_859).before(tr);
}
};
_853.call(this,true);
_853.call(this,false);
_857.call(this,true);
_857.call(this,false);
data.total+=1;
data.rows.splice(_851,0,row);
this.setEmptyMsg(_850);
this.refreshRow.call(this,_850,_851);
},deleteRow:function(_85c,_85d){
var _85e=$.data(_85c,"datagrid");
var opts=_85e.options;
var data=_85e.data;
function _85f(_860){
var _861=_860?1:2;
for(var i=_85d+1;i<data.rows.length;i++){
var tr=opts.finder.getTr(_85c,i,"body",_861);
tr.attr("datagrid-row-index",i-1);
tr.attr("id",_85e.rowIdPrefix+"-"+_861+"-"+(i-1));
if(_860&&opts.rownumbers){
var _862=i;
if(opts.pagination){
_862+=(opts.pageNumber-1)*opts.pageSize;
}
tr.find("div.datagrid-cell-rownumber").html(_862);
}
if(opts.striped){
tr.removeClass("datagrid-row-alt").addClass((i-1)%2?"datagrid-row-alt":"");
}
}
};
opts.finder.getTr(_85c,_85d).remove();
_85f.call(this,true);
_85f.call(this,false);
data.total-=1;
data.rows.splice(_85d,1);
this.setEmptyMsg(_85c);
},onBeforeRender:function(_863,rows){
},onAfterRender:function(_864){
var _865=$.data(_864,"datagrid");
var opts=_865.options;
if(opts.showFooter){
var _866=$(_864).datagrid("getPanel").find("div.datagrid-footer");
_866.find("div.datagrid-cell-rownumber,div.datagrid-cell-check").css("visibility","hidden");
}
this.setEmptyMsg(_864);
},setEmptyMsg:function(_867){
var _868=$.data(_867,"datagrid");
var opts=_868.options;
var _869=opts.finder.getRows(_867).length==0;
if(_869){
this.renderEmptyRow(_867);
}
if(opts.emptyMsg){
_868.dc.view.children(".datagrid-empty").remove();
if(_869){
var h=_868.dc.header2.parent().outerHeight();
var d=$("<div class=\"datagrid-empty\"></div>").appendTo(_868.dc.view);
d.html(opts.emptyMsg).css("top",h+"px");
}
}
},renderEmptyRow:function(_86a){
var cols=$.map($(_86a).datagrid("getColumnFields"),function(_86b){
return $(_86a).datagrid("getColumnOption",_86b);
});
$.map(cols,function(col){
col.formatter1=col.formatter;
col.styler1=col.styler;
col.formatter=col.styler=undefined;
});
var _86c=$.data(_86a,"datagrid").dc.body2;
_86c.html(this.renderTable(_86a,0,[{}],false));
_86c.find("tbody *").css({height:1,borderColor:"transparent",background:"transparent"});
var tr=_86c.find(".datagrid-row");
tr.removeClass("datagrid-row").removeAttr("datagrid-row-index");
tr.find(".datagrid-cell,.datagrid-cell-check").empty();
$.map(cols,function(col){
col.formatter=col.formatter1;
col.styler=col.styler1;
col.formatter1=col.styler1=undefined;
});
}};
$.fn.datagrid.defaults=$.extend({},$.fn.panel.defaults,{sharedStyleSheet:false,frozenColumns:undefined,columns:undefined,fitColumns:false,resizeHandle:"right",resizeEdge:5,autoRowHeight:true,toolbar:null,striped:false,method:"post",nowrap:true,idField:null,url:null,data:null,loadMsg:"Processing, please wait ...",emptyMsg:"",rownumbers:false,singleSelect:false,ctrlSelect:false,selectOnCheck:true,checkOnSelect:true,pagination:false,pagePosition:"bottom",pageNumber:1,pageSize:10,pageList:[10,20,30,40,50],queryParams:{},sortName:null,sortOrder:"asc",multiSort:false,remoteSort:true,showHeader:true,showFooter:false,scrollOnSelect:true,scrollbarSize:18,rownumberWidth:30,editorHeight:24,headerEvents:{mouseover:_6af(true),mouseout:_6af(false),click:_6b3,dblclick:_6b8,contextmenu:_6bb},rowEvents:{mouseover:_6bd(true),mouseout:_6bd(false),click:_6c4,dblclick:_6ce,contextmenu:_6d2},rowStyler:function(_86d,_86e){
},loader:function(_86f,_870,_871){
var opts=$(this).datagrid("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_86f,dataType:"json",success:function(data){
_870(data);
},error:function(){
_871.apply(this,arguments);
}});
},loadFilter:function(data){
return data;
},editors:_7de,finder:{getTr:function(_872,_873,type,_874){
type=type||"body";
_874=_874||0;
var _875=$.data(_872,"datagrid");
var dc=_875.dc;
var opts=_875.options;
if(_874==0){
var tr1=opts.finder.getTr(_872,_873,type,1);
var tr2=opts.finder.getTr(_872,_873,type,2);
return tr1.add(tr2);
}else{
if(type=="body"){
var tr=$("#"+_875.rowIdPrefix+"-"+_874+"-"+_873);
if(!tr.length){
tr=(_874==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index="+_873+"]");
}
return tr;
}else{
if(type=="footer"){
return (_874==1?dc.footer1:dc.footer2).find(">table>tbody>tr[datagrid-row-index="+_873+"]");
}else{
if(type=="selected"){
return (_874==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-selected");
}else{
if(type=="highlight"){
return (_874==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-over");
}else{
if(type=="checked"){
return (_874==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-checked");
}else{
if(type=="editing"){
return (_874==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-editing");
}else{
if(type=="last"){
return (_874==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index]:last");
}else{
if(type=="allbody"){
return (_874==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index]");
}else{
if(type=="allfooter"){
return (_874==1?dc.footer1:dc.footer2).find(">table>tbody>tr[datagrid-row-index]");
}
}
}
}
}
}
}
}
}
}
},getRow:function(_876,p){
var _877=(typeof p=="object")?p.attr("datagrid-row-index"):p;
return $.data(_876,"datagrid").data.rows[parseInt(_877)];
},getRows:function(_878){
return $(_878).datagrid("getRows");
}},view:_827,onBeforeLoad:function(_879){
},onLoadSuccess:function(){
},onLoadError:function(){
},onClickRow:function(_87a,_87b){
},onDblClickRow:function(_87c,_87d){
},onClickCell:function(_87e,_87f,_880){
},onDblClickCell:function(_881,_882,_883){
},onBeforeSortColumn:function(sort,_884){
},onSortColumn:function(sort,_885){
},onResizeColumn:function(_886,_887){
},onBeforeSelect:function(_888,_889){
},onSelect:function(_88a,_88b){
},onBeforeUnselect:function(_88c,_88d){
},onUnselect:function(_88e,_88f){
},onSelectAll:function(rows){
},onUnselectAll:function(rows){
},onBeforeCheck:function(_890,_891){
},onCheck:function(_892,_893){
},onBeforeUncheck:function(_894,_895){
},onUncheck:function(_896,_897){
},onCheckAll:function(rows){
},onUncheckAll:function(rows){
},onBeforeEdit:function(_898,_899){
},onBeginEdit:function(_89a,_89b){
},onEndEdit:function(_89c,_89d,_89e){
},onAfterEdit:function(_89f,_8a0,_8a1){
},onCancelEdit:function(_8a2,_8a3){
},onHeaderContextMenu:function(e,_8a4){
},onRowContextMenu:function(e,_8a5,_8a6){
}});
})(jQuery);
(function($){
var _8a7;
$(document).unbind(".propertygrid").bind("mousedown.propertygrid",function(e){
var p=$(e.target).closest("div.datagrid-view,div.combo-panel");
if(p.length){
return;
}
_8a8(_8a7);
_8a7=undefined;
});
function _8a9(_8aa){
var _8ab=$.data(_8aa,"propertygrid");
var opts=$.data(_8aa,"propertygrid").options;
$(_8aa).datagrid($.extend({},opts,{cls:"propertygrid",view:(opts.showGroup?opts.groupView:opts.view),onBeforeEdit:function(_8ac,row){
if(opts.onBeforeEdit.call(_8aa,_8ac,row)==false){
return false;
}
var dg=$(this);
var row=dg.datagrid("getRows")[_8ac];
var col=dg.datagrid("getColumnOption","value");
col.editor=row.editor;
},onClickCell:function(_8ad,_8ae,_8af){
if(_8a7!=this){
_8a8(_8a7);
_8a7=this;
}
if(opts.editIndex!=_8ad){
_8a8(_8a7);
$(this).datagrid("beginEdit",_8ad);
var ed=$(this).datagrid("getEditor",{index:_8ad,field:_8ae});
if(!ed){
ed=$(this).datagrid("getEditor",{index:_8ad,field:"value"});
}
if(ed){
var t=$(ed.target);
var _8b0=t.data("textbox")?t.textbox("textbox"):t;
_8b0.focus();
opts.editIndex=_8ad;
}
}
opts.onClickCell.call(_8aa,_8ad,_8ae,_8af);
},loadFilter:function(data){
_8a8(this);
return opts.loadFilter.call(this,data);
}}));
};
function _8a8(_8b1){
var t=$(_8b1);
if(!t.length){
return;
}
var opts=$.data(_8b1,"propertygrid").options;
opts.finder.getTr(_8b1,null,"editing").each(function(){
var _8b2=parseInt($(this).attr("datagrid-row-index"));
if(t.datagrid("validateRow",_8b2)){
t.datagrid("endEdit",_8b2);
}else{
t.datagrid("cancelEdit",_8b2);
}
});
opts.editIndex=undefined;
};
$.fn.propertygrid=function(_8b3,_8b4){
if(typeof _8b3=="string"){
var _8b5=$.fn.propertygrid.methods[_8b3];
if(_8b5){
return _8b5(this,_8b4);
}else{
return this.datagrid(_8b3,_8b4);
}
}
_8b3=_8b3||{};
return this.each(function(){
var _8b6=$.data(this,"propertygrid");
if(_8b6){
$.extend(_8b6.options,_8b3);
}else{
var opts=$.extend({},$.fn.propertygrid.defaults,$.fn.propertygrid.parseOptions(this),_8b3);
opts.frozenColumns=$.extend(true,[],opts.frozenColumns);
opts.columns=$.extend(true,[],opts.columns);
$.data(this,"propertygrid",{options:opts});
}
_8a9(this);
});
};
$.fn.propertygrid.methods={options:function(jq){
return $.data(jq[0],"propertygrid").options;
}};
$.fn.propertygrid.parseOptions=function(_8b7){
return $.extend({},$.fn.datagrid.parseOptions(_8b7),$.parser.parseOptions(_8b7,[{showGroup:"boolean"}]));
};
var _8b8=$.extend({},$.fn.datagrid.defaults.view,{render:function(_8b9,_8ba,_8bb){
var _8bc=[];
var _8bd=this.groups;
for(var i=0;i<_8bd.length;i++){
_8bc.push(this.renderGroup.call(this,_8b9,i,_8bd[i],_8bb));
}
$(_8ba).html(_8bc.join(""));
},renderGroup:function(_8be,_8bf,_8c0,_8c1){
var _8c2=$.data(_8be,"datagrid");
var opts=_8c2.options;
var _8c3=$(_8be).datagrid("getColumnFields",_8c1);
var _8c4=[];
_8c4.push("<div class=\"datagrid-group\" group-index="+_8bf+">");
if((_8c1&&(opts.rownumbers||opts.frozenColumns.length))||(!_8c1&&!(opts.rownumbers||opts.frozenColumns.length))){
_8c4.push("<span class=\"datagrid-group-expander\">");
_8c4.push("<span class=\"datagrid-row-expander datagrid-row-collapse\">&nbsp;</span>");
_8c4.push("</span>");
}
if(!_8c1){
_8c4.push("<span class=\"datagrid-group-title\">");
_8c4.push(opts.groupFormatter.call(_8be,_8c0.value,_8c0.rows));
_8c4.push("</span>");
}
_8c4.push("</div>");
_8c4.push("<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>");
var _8c5=_8c0.startIndex;
for(var j=0;j<_8c0.rows.length;j++){
var css=opts.rowStyler?opts.rowStyler.call(_8be,_8c5,_8c0.rows[j]):"";
var _8c6="";
var _8c7="";
if(typeof css=="string"){
_8c7=css;
}else{
if(css){
_8c6=css["class"]||"";
_8c7=css["style"]||"";
}
}
var cls="class=\"datagrid-row "+(_8c5%2&&opts.striped?"datagrid-row-alt ":" ")+_8c6+"\"";
var _8c8=_8c7?"style=\""+_8c7+"\"":"";
var _8c9=_8c2.rowIdPrefix+"-"+(_8c1?1:2)+"-"+_8c5;
_8c4.push("<tr id=\""+_8c9+"\" datagrid-row-index=\""+_8c5+"\" "+cls+" "+_8c8+">");
_8c4.push(this.renderRow.call(this,_8be,_8c3,_8c1,_8c5,_8c0.rows[j]));
_8c4.push("</tr>");
_8c5++;
}
_8c4.push("</tbody></table>");
return _8c4.join("");
},bindEvents:function(_8ca){
var _8cb=$.data(_8ca,"datagrid");
var dc=_8cb.dc;
var body=dc.body1.add(dc.body2);
var _8cc=($.data(body[0],"events")||$._data(body[0],"events")).click[0].handler;
body.unbind("click").bind("click",function(e){
var tt=$(e.target);
var _8cd=tt.closest("span.datagrid-row-expander");
if(_8cd.length){
var _8ce=_8cd.closest("div.datagrid-group").attr("group-index");
if(_8cd.hasClass("datagrid-row-collapse")){
$(_8ca).datagrid("collapseGroup",_8ce);
}else{
$(_8ca).datagrid("expandGroup",_8ce);
}
}else{
_8cc(e);
}
e.stopPropagation();
});
},onBeforeRender:function(_8cf,rows){
var _8d0=$.data(_8cf,"datagrid");
var opts=_8d0.options;
_8d1();
var _8d2=[];
for(var i=0;i<rows.length;i++){
var row=rows[i];
var _8d3=_8d4(row[opts.groupField]);
if(!_8d3){
_8d3={value:row[opts.groupField],rows:[row]};
_8d2.push(_8d3);
}else{
_8d3.rows.push(row);
}
}
var _8d5=0;
var _8d6=[];
for(var i=0;i<_8d2.length;i++){
var _8d3=_8d2[i];
_8d3.startIndex=_8d5;
_8d5+=_8d3.rows.length;
_8d6=_8d6.concat(_8d3.rows);
}
_8d0.data.rows=_8d6;
this.groups=_8d2;
var that=this;
setTimeout(function(){
that.bindEvents(_8cf);
},0);
function _8d4(_8d7){
for(var i=0;i<_8d2.length;i++){
var _8d8=_8d2[i];
if(_8d8.value==_8d7){
return _8d8;
}
}
return null;
};
function _8d1(){
if(!$("#datagrid-group-style").length){
$("head").append("<style id=\"datagrid-group-style\">"+".datagrid-group{height:"+opts.groupHeight+"px;overflow:hidden;font-weight:bold;border-bottom:1px solid #ccc;}"+".datagrid-group-title,.datagrid-group-expander{display:inline-block;vertical-align:bottom;height:100%;line-height:"+opts.groupHeight+"px;padding:0 4px;}"+".datagrid-group-expander{width:"+opts.expanderWidth+"px;text-align:center;padding:0}"+".datagrid-row-expander{margin:"+Math.floor((opts.groupHeight-16)/2)+"px 0;display:inline-block;width:16px;height:16px;cursor:pointer}"+"</style>");
}
};
}});
$.extend($.fn.datagrid.methods,{groups:function(jq){
return jq.datagrid("options").view.groups;
},expandGroup:function(jq,_8d9){
return jq.each(function(){
var view=$.data(this,"datagrid").dc.view;
var _8da=view.find(_8d9!=undefined?"div.datagrid-group[group-index=\""+_8d9+"\"]":"div.datagrid-group");
var _8db=_8da.find("span.datagrid-row-expander");
if(_8db.hasClass("datagrid-row-expand")){
_8db.removeClass("datagrid-row-expand").addClass("datagrid-row-collapse");
_8da.next("table").show();
}
$(this).datagrid("fixRowHeight");
});
},collapseGroup:function(jq,_8dc){
return jq.each(function(){
var view=$.data(this,"datagrid").dc.view;
var _8dd=view.find(_8dc!=undefined?"div.datagrid-group[group-index=\""+_8dc+"\"]":"div.datagrid-group");
var _8de=_8dd.find("span.datagrid-row-expander");
if(_8de.hasClass("datagrid-row-collapse")){
_8de.removeClass("datagrid-row-collapse").addClass("datagrid-row-expand");
_8dd.next("table").hide();
}
$(this).datagrid("fixRowHeight");
});
}});
$.extend(_8b8,{refreshGroupTitle:function(_8df,_8e0){
var _8e1=$.data(_8df,"datagrid");
var opts=_8e1.options;
var dc=_8e1.dc;
var _8e2=this.groups[_8e0];
var span=dc.body2.children("div.datagrid-group[group-index="+_8e0+"]").find("span.datagrid-group-title");
span.html(opts.groupFormatter.call(_8df,_8e2.value,_8e2.rows));
},insertRow:function(_8e3,_8e4,row){
var _8e5=$.data(_8e3,"datagrid");
var opts=_8e5.options;
var dc=_8e5.dc;
var _8e6=null;
var _8e7;
if(!_8e5.data.rows.length){
$(_8e3).datagrid("loadData",[row]);
return;
}
for(var i=0;i<this.groups.length;i++){
if(this.groups[i].value==row[opts.groupField]){
_8e6=this.groups[i];
_8e7=i;
break;
}
}
if(_8e6){
if(_8e4==undefined||_8e4==null){
_8e4=_8e5.data.rows.length;
}
if(_8e4<_8e6.startIndex){
_8e4=_8e6.startIndex;
}else{
if(_8e4>_8e6.startIndex+_8e6.rows.length){
_8e4=_8e6.startIndex+_8e6.rows.length;
}
}
$.fn.datagrid.defaults.view.insertRow.call(this,_8e3,_8e4,row);
if(_8e4>=_8e6.startIndex+_8e6.rows.length){
_8e8(_8e4,true);
_8e8(_8e4,false);
}
_8e6.rows.splice(_8e4-_8e6.startIndex,0,row);
}else{
_8e6={value:row[opts.groupField],rows:[row],startIndex:_8e5.data.rows.length};
_8e7=this.groups.length;
dc.body1.append(this.renderGroup.call(this,_8e3,_8e7,_8e6,true));
dc.body2.append(this.renderGroup.call(this,_8e3,_8e7,_8e6,false));
this.groups.push(_8e6);
_8e5.data.rows.push(row);
}
this.refreshGroupTitle(_8e3,_8e7);
function _8e8(_8e9,_8ea){
var _8eb=_8ea?1:2;
var _8ec=opts.finder.getTr(_8e3,_8e9-1,"body",_8eb);
var tr=opts.finder.getTr(_8e3,_8e9,"body",_8eb);
tr.insertAfter(_8ec);
};
},updateRow:function(_8ed,_8ee,row){
var opts=$.data(_8ed,"datagrid").options;
$.fn.datagrid.defaults.view.updateRow.call(this,_8ed,_8ee,row);
var tb=opts.finder.getTr(_8ed,_8ee,"body",2).closest("table.datagrid-btable");
var _8ef=parseInt(tb.prev().attr("group-index"));
this.refreshGroupTitle(_8ed,_8ef);
},deleteRow:function(_8f0,_8f1){
var _8f2=$.data(_8f0,"datagrid");
var opts=_8f2.options;
var dc=_8f2.dc;
var body=dc.body1.add(dc.body2);
var tb=opts.finder.getTr(_8f0,_8f1,"body",2).closest("table.datagrid-btable");
var _8f3=parseInt(tb.prev().attr("group-index"));
$.fn.datagrid.defaults.view.deleteRow.call(this,_8f0,_8f1);
var _8f4=this.groups[_8f3];
if(_8f4.rows.length>1){
_8f4.rows.splice(_8f1-_8f4.startIndex,1);
this.refreshGroupTitle(_8f0,_8f3);
}else{
body.children("div.datagrid-group[group-index="+_8f3+"]").remove();
for(var i=_8f3+1;i<this.groups.length;i++){
body.children("div.datagrid-group[group-index="+i+"]").attr("group-index",i-1);
}
this.groups.splice(_8f3,1);
}
var _8f1=0;
for(var i=0;i<this.groups.length;i++){
var _8f4=this.groups[i];
_8f4.startIndex=_8f1;
_8f1+=_8f4.rows.length;
}
}});
$.fn.propertygrid.defaults=$.extend({},$.fn.datagrid.defaults,{groupHeight:21,expanderWidth:16,singleSelect:true,remoteSort:false,fitColumns:true,loadMsg:"",frozenColumns:[[{field:"f",width:16,resizable:false}]],columns:[[{field:"name",title:"Name",width:100,sortable:true},{field:"value",title:"Value",width:100,resizable:false}]],showGroup:false,groupView:_8b8,groupField:"group",groupFormatter:function(_8f5,rows){
return _8f5;
}});
})(jQuery);
(function($){
function _8f6(_8f7){
var _8f8=$.data(_8f7,"treegrid");
var opts=_8f8.options;
$(_8f7).datagrid($.extend({},opts,{url:null,data:null,loader:function(){
return false;
},onBeforeLoad:function(){
return false;
},onLoadSuccess:function(){
},onResizeColumn:function(_8f9,_8fa){
_907(_8f7);
opts.onResizeColumn.call(_8f7,_8f9,_8fa);
},onBeforeSortColumn:function(sort,_8fb){
if(opts.onBeforeSortColumn.call(_8f7,sort,_8fb)==false){
return false;
}
},onSortColumn:function(sort,_8fc){
opts.sortName=sort;
opts.sortOrder=_8fc;
if(opts.remoteSort){
_906(_8f7);
}else{
var data=$(_8f7).treegrid("getData");
_935(_8f7,null,data);
}
opts.onSortColumn.call(_8f7,sort,_8fc);
},onClickCell:function(_8fd,_8fe){
opts.onClickCell.call(_8f7,_8fe,find(_8f7,_8fd));
},onDblClickCell:function(_8ff,_900){
opts.onDblClickCell.call(_8f7,_900,find(_8f7,_8ff));
},onRowContextMenu:function(e,_901){
opts.onContextMenu.call(_8f7,e,find(_8f7,_901));
}}));
var _902=$.data(_8f7,"datagrid").options;
opts.columns=_902.columns;
opts.frozenColumns=_902.frozenColumns;
_8f8.dc=$.data(_8f7,"datagrid").dc;
if(opts.pagination){
var _903=$(_8f7).datagrid("getPager");
_903.pagination({pageNumber:opts.pageNumber,pageSize:opts.pageSize,pageList:opts.pageList,onSelectPage:function(_904,_905){
opts.pageNumber=_904;
opts.pageSize=_905;
_906(_8f7);
}});
opts.pageSize=_903.pagination("options").pageSize;
}
};
function _907(_908,_909){
var opts=$.data(_908,"datagrid").options;
var dc=$.data(_908,"datagrid").dc;
if(!dc.body1.is(":empty")&&(!opts.nowrap||opts.autoRowHeight)){
if(_909!=undefined){
var _90a=_90b(_908,_909);
for(var i=0;i<_90a.length;i++){
_90c(_90a[i][opts.idField]);
}
}
}
$(_908).datagrid("fixRowHeight",_909);
function _90c(_90d){
var tr1=opts.finder.getTr(_908,_90d,"body",1);
var tr2=opts.finder.getTr(_908,_90d,"body",2);
tr1.css("height","");
tr2.css("height","");
var _90e=Math.max(tr1.height(),tr2.height());
tr1.css("height",_90e);
tr2.css("height",_90e);
};
};
function _90f(_910){
var dc=$.data(_910,"datagrid").dc;
var opts=$.data(_910,"treegrid").options;
if(!opts.rownumbers){
return;
}
dc.body1.find("div.datagrid-cell-rownumber").each(function(i){
$(this).html(i+1);
});
};
function _911(_912){
return function(e){
$.fn.datagrid.defaults.rowEvents[_912?"mouseover":"mouseout"](e);
var tt=$(e.target);
var fn=_912?"addClass":"removeClass";
if(tt.hasClass("tree-hit")){
tt.hasClass("tree-expanded")?tt[fn]("tree-expanded-hover"):tt[fn]("tree-collapsed-hover");
}
};
};
function _913(e){
var tt=$(e.target);
var tr=tt.closest("tr.datagrid-row");
if(!tr.length||!tr.parent().length){
return;
}
var _914=tr.attr("node-id");
var _915=_916(tr);
if(tt.hasClass("tree-hit")){
_917(_915,_914);
}else{
if(tt.hasClass("tree-checkbox")){
_918(_915,_914);
}else{
var opts=$(_915).datagrid("options");
if(!tt.parent().hasClass("datagrid-cell-check")&&!opts.singleSelect&&e.shiftKey){
var rows=$(_915).treegrid("getChildren");
var idx1=$.easyui.indexOfArray(rows,opts.idField,opts.lastSelectedIndex);
var idx2=$.easyui.indexOfArray(rows,opts.idField,_914);
var from=Math.min(Math.max(idx1,0),idx2);
var to=Math.max(idx1,idx2);
var row=rows[idx2];
var td=tt.closest("td[field]",tr);
if(td.length){
var _919=td.attr("field");
opts.onClickCell.call(_915,_914,_919,row[_919]);
}
$(_915).treegrid("clearSelections");
for(var i=from;i<=to;i++){
$(_915).treegrid("selectRow",rows[i][opts.idField]);
}
opts.onClickRow.call(_915,row);
}else{
$.fn.datagrid.defaults.rowEvents.click(e);
}
}
}
};
function _916(t){
return $(t).closest("div.datagrid-view").children(".datagrid-f")[0];
};
function _918(_91a,_91b,_91c,_91d){
var _91e=$.data(_91a,"treegrid");
var _91f=_91e.checkedRows;
var opts=_91e.options;
if(!opts.checkbox){
return;
}
var row=find(_91a,_91b);
if(!row.checkState){
return;
}
var tr=opts.finder.getTr(_91a,_91b);
var ck=tr.find(".tree-checkbox");
if(_91c==undefined){
if(ck.hasClass("tree-checkbox1")){
_91c=false;
}else{
if(ck.hasClass("tree-checkbox0")){
_91c=true;
}else{
if(row._checked==undefined){
row._checked=ck.hasClass("tree-checkbox1");
}
_91c=!row._checked;
}
}
}
row._checked=_91c;
if(_91c){
if(ck.hasClass("tree-checkbox1")){
return;
}
}else{
if(ck.hasClass("tree-checkbox0")){
return;
}
}
if(!_91d){
if(opts.onBeforeCheckNode.call(_91a,row,_91c)==false){
return;
}
}
if(opts.cascadeCheck){
_920(_91a,row,_91c);
_921(_91a,row);
}else{
_922(_91a,row,_91c?"1":"0");
}
if(!_91d){
opts.onCheckNode.call(_91a,row,_91c);
}
};
function _922(_923,row,flag){
var _924=$.data(_923,"treegrid");
var _925=_924.checkedRows;
var opts=_924.options;
if(!row.checkState||flag==undefined){
return;
}
var tr=opts.finder.getTr(_923,row[opts.idField]);
var ck=tr.find(".tree-checkbox");
if(!ck.length){
return;
}
row.checkState=["unchecked","checked","indeterminate"][flag];
row.checked=(row.checkState=="checked");
ck.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");
ck.addClass("tree-checkbox"+flag);
if(flag==0){
$.easyui.removeArrayItem(_925,opts.idField,row[opts.idField]);
}else{
$.easyui.addArrayItem(_925,opts.idField,row);
}
};
function _920(_926,row,_927){
var flag=_927?1:0;
_922(_926,row,flag);
$.easyui.forEach(row.children||[],true,function(r){
_922(_926,r,flag);
});
};
function _921(_928,row){
var opts=$.data(_928,"treegrid").options;
var prow=_929(_928,row[opts.idField]);
if(prow){
_922(_928,prow,_92a(prow));
_921(_928,prow);
}
};
function _92a(row){
var len=0;
var c0=0;
var c1=0;
$.easyui.forEach(row.children||[],false,function(r){
if(r.checkState){
len++;
if(r.checkState=="checked"){
c1++;
}else{
if(r.checkState=="unchecked"){
c0++;
}
}
}
});
if(len==0){
return undefined;
}
var flag=0;
if(c0==len){
flag=0;
}else{
if(c1==len){
flag=1;
}else{
flag=2;
}
}
return flag;
};
function _92b(_92c,_92d){
var opts=$.data(_92c,"treegrid").options;
if(!opts.checkbox){
return;
}
var row=find(_92c,_92d);
var tr=opts.finder.getTr(_92c,_92d);
var ck=tr.find(".tree-checkbox");
if(opts.view.hasCheckbox(_92c,row)){
if(!ck.length){
row.checkState=row.checkState||"unchecked";
$("<span class=\"tree-checkbox\"></span>").insertBefore(tr.find(".tree-title"));
}
if(row.checkState=="checked"){
_918(_92c,_92d,true,true);
}else{
if(row.checkState=="unchecked"){
_918(_92c,_92d,false,true);
}else{
var flag=_92a(row);
if(flag===0){
_918(_92c,_92d,false,true);
}else{
if(flag===1){
_918(_92c,_92d,true,true);
}
}
}
}
}else{
ck.remove();
row.checkState=undefined;
row.checked=undefined;
_921(_92c,row);
}
};
function _92e(_92f,_930){
var opts=$.data(_92f,"treegrid").options;
var tr1=opts.finder.getTr(_92f,_930,"body",1);
var tr2=opts.finder.getTr(_92f,_930,"body",2);
var _931=$(_92f).datagrid("getColumnFields",true).length+(opts.rownumbers?1:0);
var _932=$(_92f).datagrid("getColumnFields",false).length;
_933(tr1,_931);
_933(tr2,_932);
function _933(tr,_934){
$("<tr class=\"treegrid-tr-tree\">"+"<td style=\"border:0px\" colspan=\""+_934+"\">"+"<div></div>"+"</td>"+"</tr>").insertAfter(tr);
};
};
function _935(_936,_937,data,_938,_939){
var _93a=$.data(_936,"treegrid");
var opts=_93a.options;
var dc=_93a.dc;
data=opts.loadFilter.call(_936,data,_937);
var node=find(_936,_937);
if(node){
var _93b=opts.finder.getTr(_936,_937,"body",1);
var _93c=opts.finder.getTr(_936,_937,"body",2);
var cc1=_93b.next("tr.treegrid-tr-tree").children("td").children("div");
var cc2=_93c.next("tr.treegrid-tr-tree").children("td").children("div");
if(!_938){
node.children=[];
}
}else{
var cc1=dc.body1;
var cc2=dc.body2;
if(!_938){
_93a.data=[];
}
}
if(!_938){
cc1.empty();
cc2.empty();
}
if(opts.view.onBeforeRender){
opts.view.onBeforeRender.call(opts.view,_936,_937,data);
}
opts.view.render.call(opts.view,_936,cc1,true);
opts.view.render.call(opts.view,_936,cc2,false);
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,_936,dc.footer1,true);
opts.view.renderFooter.call(opts.view,_936,dc.footer2,false);
}
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,_936);
}
if(!_937&&opts.pagination){
var _93d=$.data(_936,"treegrid").total;
var _93e=$(_936).datagrid("getPager");
if(_93e.pagination("options").total!=_93d){
_93e.pagination({total:_93d});
}
}
_907(_936);
_90f(_936);
$(_936).treegrid("showLines");
$(_936).treegrid("setSelectionState");
$(_936).treegrid("autoSizeColumn");
if(!_939){
opts.onLoadSuccess.call(_936,node,data);
}
};
function _906(_93f,_940,_941,_942,_943){
var opts=$.data(_93f,"treegrid").options;
var body=$(_93f).datagrid("getPanel").find("div.datagrid-body");
if(_940==undefined&&opts.queryParams){
opts.queryParams.id=undefined;
}
if(_941){
opts.queryParams=_941;
}
var _944=$.extend({},opts.queryParams);
if(opts.pagination){
$.extend(_944,{page:opts.pageNumber,rows:opts.pageSize});
}
if(opts.sortName){
$.extend(_944,{sort:opts.sortName,order:opts.sortOrder});
}
var row=find(_93f,_940);
if(opts.onBeforeLoad.call(_93f,row,_944)==false){
return;
}
var _945=body.find("tr[node-id=\""+_940+"\"] span.tree-folder");
_945.addClass("tree-loading");
$(_93f).treegrid("loading");
var _946=opts.loader.call(_93f,_944,function(data){
_945.removeClass("tree-loading");
$(_93f).treegrid("loaded");
_935(_93f,_940,data,_942);
if(_943){
_943();
}
},function(){
_945.removeClass("tree-loading");
$(_93f).treegrid("loaded");
opts.onLoadError.apply(_93f,arguments);
if(_943){
_943();
}
});
if(_946==false){
_945.removeClass("tree-loading");
$(_93f).treegrid("loaded");
}
};
function _947(_948){
var _949=_94a(_948);
return _949.length?_949[0]:null;
};
function _94a(_94b){
return $.data(_94b,"treegrid").data;
};
function _929(_94c,_94d){
var row=find(_94c,_94d);
if(row._parentId){
return find(_94c,row._parentId);
}else{
return null;
}
};
function _90b(_94e,_94f){
var data=$.data(_94e,"treegrid").data;
if(_94f){
var _950=find(_94e,_94f);
data=_950?(_950.children||[]):[];
}
var _951=[];
$.easyui.forEach(data,true,function(node){
_951.push(node);
});
return _951;
};
function _952(_953,_954){
var opts=$.data(_953,"treegrid").options;
var tr=opts.finder.getTr(_953,_954);
var node=tr.children("td[field=\""+opts.treeField+"\"]");
return node.find("span.tree-indent,span.tree-hit").length;
};
function find(_955,_956){
var _957=$.data(_955,"treegrid");
var opts=_957.options;
var _958=null;
$.easyui.forEach(_957.data,true,function(node){
if(node[opts.idField]==_956){
_958=node;
return false;
}
});
return _958;
};
function _959(_95a,_95b){
var opts=$.data(_95a,"treegrid").options;
var row=find(_95a,_95b);
var tr=opts.finder.getTr(_95a,_95b);
var hit=tr.find("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-collapsed")){
return;
}
if(opts.onBeforeCollapse.call(_95a,row)==false){
return;
}
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
hit.next().removeClass("tree-folder-open");
row.state="closed";
tr=tr.next("tr.treegrid-tr-tree");
var cc=tr.children("td").children("div");
if(opts.animate){
cc.slideUp("normal",function(){
$(_95a).treegrid("autoSizeColumn");
_907(_95a,_95b);
opts.onCollapse.call(_95a,row);
});
}else{
cc.hide();
$(_95a).treegrid("autoSizeColumn");
_907(_95a,_95b);
opts.onCollapse.call(_95a,row);
}
};
function _95c(_95d,_95e){
var opts=$.data(_95d,"treegrid").options;
var tr=opts.finder.getTr(_95d,_95e);
var hit=tr.find("span.tree-hit");
var row=find(_95d,_95e);
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
return;
}
if(opts.onBeforeExpand.call(_95d,row)==false){
return;
}
hit.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded");
hit.next().addClass("tree-folder-open");
var _95f=tr.next("tr.treegrid-tr-tree");
if(_95f.length){
var cc=_95f.children("td").children("div");
_960(cc);
}else{
_92e(_95d,row[opts.idField]);
var _95f=tr.next("tr.treegrid-tr-tree");
var cc=_95f.children("td").children("div");
cc.hide();
var _961=$.extend({},opts.queryParams||{});
_961.id=row[opts.idField];
_906(_95d,row[opts.idField],_961,true,function(){
if(cc.is(":empty")){
_95f.remove();
}else{
_960(cc);
}
});
}
function _960(cc){
row.state="open";
if(opts.animate){
cc.slideDown("normal",function(){
$(_95d).treegrid("autoSizeColumn");
_907(_95d,_95e);
opts.onExpand.call(_95d,row);
});
}else{
cc.show();
$(_95d).treegrid("autoSizeColumn");
_907(_95d,_95e);
opts.onExpand.call(_95d,row);
}
};
};
function _917(_962,_963){
var opts=$.data(_962,"treegrid").options;
var tr=opts.finder.getTr(_962,_963);
var hit=tr.find("span.tree-hit");
if(hit.hasClass("tree-expanded")){
_959(_962,_963);
}else{
_95c(_962,_963);
}
};
function _964(_965,_966){
var opts=$.data(_965,"treegrid").options;
var _967=_90b(_965,_966);
if(_966){
_967.unshift(find(_965,_966));
}
for(var i=0;i<_967.length;i++){
_959(_965,_967[i][opts.idField]);
}
};
function _968(_969,_96a){
var opts=$.data(_969,"treegrid").options;
var _96b=_90b(_969,_96a);
if(_96a){
_96b.unshift(find(_969,_96a));
}
for(var i=0;i<_96b.length;i++){
_95c(_969,_96b[i][opts.idField]);
}
};
function _96c(_96d,_96e){
var opts=$.data(_96d,"treegrid").options;
var ids=[];
var p=_929(_96d,_96e);
while(p){
var id=p[opts.idField];
ids.unshift(id);
p=_929(_96d,id);
}
for(var i=0;i<ids.length;i++){
_95c(_96d,ids[i]);
}
};
function _96f(_970,_971){
var _972=$.data(_970,"treegrid");
var opts=_972.options;
if(_971.parent){
var tr=opts.finder.getTr(_970,_971.parent);
if(tr.next("tr.treegrid-tr-tree").length==0){
_92e(_970,_971.parent);
}
var cell=tr.children("td[field=\""+opts.treeField+"\"]").children("div.datagrid-cell");
var _973=cell.children("span.tree-icon");
if(_973.hasClass("tree-file")){
_973.removeClass("tree-file").addClass("tree-folder tree-folder-open");
var hit=$("<span class=\"tree-hit tree-expanded\"></span>").insertBefore(_973);
if(hit.prev().length){
hit.prev().remove();
}
}
}
_935(_970,_971.parent,_971.data,_972.data.length>0,true);
};
function _974(_975,_976){
var ref=_976.before||_976.after;
var opts=$.data(_975,"treegrid").options;
var _977=_929(_975,ref);
_96f(_975,{parent:(_977?_977[opts.idField]:null),data:[_976.data]});
var _978=_977?_977.children:$(_975).treegrid("getRoots");
for(var i=0;i<_978.length;i++){
if(_978[i][opts.idField]==ref){
var _979=_978[_978.length-1];
_978.splice(_976.before?i:(i+1),0,_979);
_978.splice(_978.length-1,1);
break;
}
}
_97a(true);
_97a(false);
_90f(_975);
$(_975).treegrid("showLines");
function _97a(_97b){
var _97c=_97b?1:2;
var tr=opts.finder.getTr(_975,_976.data[opts.idField],"body",_97c);
var _97d=tr.closest("table.datagrid-btable");
tr=tr.parent().children();
var dest=opts.finder.getTr(_975,ref,"body",_97c);
if(_976.before){
tr.insertBefore(dest);
}else{
var sub=dest.next("tr.treegrid-tr-tree");
tr.insertAfter(sub.length?sub:dest);
}
_97d.remove();
};
};
function _97e(_97f,_980){
var _981=$.data(_97f,"treegrid");
var opts=_981.options;
var prow=_929(_97f,_980);
$(_97f).datagrid("deleteRow",_980);
$.easyui.removeArrayItem(_981.checkedRows,opts.idField,_980);
_90f(_97f);
if(prow){
_92b(_97f,prow[opts.idField]);
}
_981.total-=1;
$(_97f).datagrid("getPager").pagination("refresh",{total:_981.total});
$(_97f).treegrid("showLines");
};
function _982(_983){
var t=$(_983);
var opts=t.treegrid("options");
if(opts.lines){
t.treegrid("getPanel").addClass("tree-lines");
}else{
t.treegrid("getPanel").removeClass("tree-lines");
return;
}
t.treegrid("getPanel").find("span.tree-indent").removeClass("tree-line tree-join tree-joinbottom");
t.treegrid("getPanel").find("div.datagrid-cell").removeClass("tree-node-last tree-root-first tree-root-one");
var _984=t.treegrid("getRoots");
if(_984.length>1){
_985(_984[0]).addClass("tree-root-first");
}else{
if(_984.length==1){
_985(_984[0]).addClass("tree-root-one");
}
}
_986(_984);
_987(_984);
function _986(_988){
$.map(_988,function(node){
if(node.children&&node.children.length){
_986(node.children);
}else{
var cell=_985(node);
cell.find(".tree-icon").prev().addClass("tree-join");
}
});
if(_988.length){
var cell=_985(_988[_988.length-1]);
cell.addClass("tree-node-last");
cell.find(".tree-join").removeClass("tree-join").addClass("tree-joinbottom");
}
};
function _987(_989){
$.map(_989,function(node){
if(node.children&&node.children.length){
_987(node.children);
}
});
for(var i=0;i<_989.length-1;i++){
var node=_989[i];
var _98a=t.treegrid("getLevel",node[opts.idField]);
var tr=opts.finder.getTr(_983,node[opts.idField]);
var cc=tr.next().find("tr.datagrid-row td[field=\""+opts.treeField+"\"] div.datagrid-cell");
cc.find("span:eq("+(_98a-1)+")").addClass("tree-line");
}
};
function _985(node){
var tr=opts.finder.getTr(_983,node[opts.idField]);
var cell=tr.find("td[field=\""+opts.treeField+"\"] div.datagrid-cell");
return cell;
};
};
$.fn.treegrid=function(_98b,_98c){
if(typeof _98b=="string"){
var _98d=$.fn.treegrid.methods[_98b];
if(_98d){
return _98d(this,_98c);
}else{
return this.datagrid(_98b,_98c);
}
}
_98b=_98b||{};
return this.each(function(){
var _98e=$.data(this,"treegrid");
if(_98e){
$.extend(_98e.options,_98b);
}else{
_98e=$.data(this,"treegrid",{options:$.extend({},$.fn.treegrid.defaults,$.fn.treegrid.parseOptions(this),_98b),data:[],checkedRows:[],tmpIds:[]});
}
_8f6(this);
if(_98e.options.data){
$(this).treegrid("loadData",_98e.options.data);
}
_906(this);
});
};
$.fn.treegrid.methods={options:function(jq){
return $.data(jq[0],"treegrid").options;
},resize:function(jq,_98f){
return jq.each(function(){
$(this).datagrid("resize",_98f);
});
},fixRowHeight:function(jq,_990){
return jq.each(function(){
_907(this,_990);
});
},loadData:function(jq,data){
return jq.each(function(){
_935(this,data.parent,data);
});
},load:function(jq,_991){
return jq.each(function(){
$(this).treegrid("options").pageNumber=1;
$(this).treegrid("getPager").pagination({pageNumber:1});
$(this).treegrid("reload",_991);
});
},reload:function(jq,id){
return jq.each(function(){
var opts=$(this).treegrid("options");
var _992={};
if(typeof id=="object"){
_992=id;
}else{
_992=$.extend({},opts.queryParams);
_992.id=id;
}
if(_992.id){
var node=$(this).treegrid("find",_992.id);
if(node.children){
node.children.splice(0,node.children.length);
}
opts.queryParams=_992;
var tr=opts.finder.getTr(this,_992.id);
tr.next("tr.treegrid-tr-tree").remove();
tr.find("span.tree-hit").removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
_95c(this,_992.id);
}else{
_906(this,null,_992);
}
});
},reloadFooter:function(jq,_993){
return jq.each(function(){
var opts=$.data(this,"treegrid").options;
var dc=$.data(this,"datagrid").dc;
if(_993){
$.data(this,"treegrid").footer=_993;
}
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,this,dc.footer1,true);
opts.view.renderFooter.call(opts.view,this,dc.footer2,false);
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,this);
}
$(this).treegrid("fixRowHeight");
}
});
},getData:function(jq){
return $.data(jq[0],"treegrid").data;
},getFooterRows:function(jq){
return $.data(jq[0],"treegrid").footer;
},getRoot:function(jq){
return _947(jq[0]);
},getRoots:function(jq){
return _94a(jq[0]);
},getParent:function(jq,id){
return _929(jq[0],id);
},getChildren:function(jq,id){
return _90b(jq[0],id);
},getLevel:function(jq,id){
return _952(jq[0],id);
},find:function(jq,id){
return find(jq[0],id);
},isLeaf:function(jq,id){
var opts=$.data(jq[0],"treegrid").options;
var tr=opts.finder.getTr(jq[0],id);
var hit=tr.find("span.tree-hit");
return hit.length==0;
},select:function(jq,id){
return jq.each(function(){
$(this).datagrid("selectRow",id);
});
},unselect:function(jq,id){
return jq.each(function(){
$(this).datagrid("unselectRow",id);
});
},collapse:function(jq,id){
return jq.each(function(){
_959(this,id);
});
},expand:function(jq,id){
return jq.each(function(){
_95c(this,id);
});
},toggle:function(jq,id){
return jq.each(function(){
_917(this,id);
});
},collapseAll:function(jq,id){
return jq.each(function(){
_964(this,id);
});
},expandAll:function(jq,id){
return jq.each(function(){
_968(this,id);
});
},expandTo:function(jq,id){
return jq.each(function(){
_96c(this,id);
});
},append:function(jq,_994){
return jq.each(function(){
_96f(this,_994);
});
},insert:function(jq,_995){
return jq.each(function(){
_974(this,_995);
});
},remove:function(jq,id){
return jq.each(function(){
_97e(this,id);
});
},pop:function(jq,id){
var row=jq.treegrid("find",id);
jq.treegrid("remove",id);
return row;
},refresh:function(jq,id){
return jq.each(function(){
var opts=$.data(this,"treegrid").options;
opts.view.refreshRow.call(opts.view,this,id);
});
},update:function(jq,_996){
return jq.each(function(){
var opts=$.data(this,"treegrid").options;
var row=_996.row;
opts.view.updateRow.call(opts.view,this,_996.id,row);
if(row.checked!=undefined){
row=find(this,_996.id);
$.extend(row,{checkState:row.checked?"checked":(row.checked===false?"unchecked":undefined)});
_92b(this,_996.id);
}
});
},beginEdit:function(jq,id){
return jq.each(function(){
$(this).datagrid("beginEdit",id);
$(this).treegrid("fixRowHeight",id);
});
},endEdit:function(jq,id){
return jq.each(function(){
$(this).datagrid("endEdit",id);
});
},cancelEdit:function(jq,id){
return jq.each(function(){
$(this).datagrid("cancelEdit",id);
});
},showLines:function(jq){
return jq.each(function(){
_982(this);
});
},setSelectionState:function(jq){
return jq.each(function(){
$(this).datagrid("setSelectionState");
var _997=$(this).data("treegrid");
for(var i=0;i<_997.tmpIds.length;i++){
_918(this,_997.tmpIds[i],true,true);
}
_997.tmpIds=[];
});
},getCheckedNodes:function(jq,_998){
_998=_998||"checked";
var rows=[];
$.easyui.forEach(jq.data("treegrid").checkedRows,false,function(row){
if(row.checkState==_998){
rows.push(row);
}
});
return rows;
},checkNode:function(jq,id){
return jq.each(function(){
_918(this,id,true);
});
},uncheckNode:function(jq,id){
return jq.each(function(){
_918(this,id,false);
});
},clearChecked:function(jq){
return jq.each(function(){
var _999=this;
var opts=$(_999).treegrid("options");
$(_999).datagrid("clearChecked");
$.map($(_999).treegrid("getCheckedNodes"),function(row){
_918(_999,row[opts.idField],false,true);
});
});
}};
$.fn.treegrid.parseOptions=function(_99a){
return $.extend({},$.fn.datagrid.parseOptions(_99a),$.parser.parseOptions(_99a,["treeField",{checkbox:"boolean",cascadeCheck:"boolean",onlyLeafCheck:"boolean"},{animate:"boolean"}]));
};
var _99b=$.extend({},$.fn.datagrid.defaults.view,{render:function(_99c,_99d,_99e){
var opts=$.data(_99c,"treegrid").options;
var _99f=$(_99c).datagrid("getColumnFields",_99e);
var _9a0=$.data(_99c,"datagrid").rowIdPrefix;
if(_99e){
if(!(opts.rownumbers||(opts.frozenColumns&&opts.frozenColumns.length))){
return;
}
}
var view=this;
if(this.treeNodes&&this.treeNodes.length){
var _9a1=_9a2.call(this,_99e,this.treeLevel,this.treeNodes);
$(_99d).append(_9a1.join(""));
}
function _9a2(_9a3,_9a4,_9a5){
var _9a6=$(_99c).treegrid("getParent",_9a5[0][opts.idField]);
var _9a7=(_9a6?_9a6.children.length:$(_99c).treegrid("getRoots").length)-_9a5.length;
var _9a8=["<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<_9a5.length;i++){
var row=_9a5[i];
if(row.state!="open"&&row.state!="closed"){
row.state="open";
}
var css=opts.rowStyler?opts.rowStyler.call(_99c,row):"";
var cs=this.getStyleValue(css);
var cls="class=\"datagrid-row "+(_9a7++%2&&opts.striped?"datagrid-row-alt ":" ")+cs.c+"\"";
var _9a9=cs.s?"style=\""+cs.s+"\"":"";
var _9aa=_9a0+"-"+(_9a3?1:2)+"-"+row[opts.idField];
_9a8.push("<tr id=\""+_9aa+"\" node-id=\""+row[opts.idField]+"\" "+cls+" "+_9a9+">");
_9a8=_9a8.concat(view.renderRow.call(view,_99c,_99f,_9a3,_9a4,row));
_9a8.push("</tr>");
if(row.children&&row.children.length){
var tt=_9a2.call(this,_9a3,_9a4+1,row.children);
var v=row.state=="closed"?"none":"block";
_9a8.push("<tr class=\"treegrid-tr-tree\"><td style=\"border:0px\" colspan="+(_99f.length+(opts.rownumbers?1:0))+"><div style=\"display:"+v+"\">");
_9a8=_9a8.concat(tt);
_9a8.push("</div></td></tr>");
}
}
_9a8.push("</tbody></table>");
return _9a8;
};
},renderFooter:function(_9ab,_9ac,_9ad){
var opts=$.data(_9ab,"treegrid").options;
var rows=$.data(_9ab,"treegrid").footer||[];
var _9ae=$(_9ab).datagrid("getColumnFields",_9ad);
var _9af=["<table class=\"datagrid-ftable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<rows.length;i++){
var row=rows[i];
row[opts.idField]=row[opts.idField]||("foot-row-id"+i);
_9af.push("<tr class=\"datagrid-row\" node-id=\""+row[opts.idField]+"\">");
_9af.push(this.renderRow.call(this,_9ab,_9ae,_9ad,0,row));
_9af.push("</tr>");
}
_9af.push("</tbody></table>");
$(_9ac).html(_9af.join(""));
},renderRow:function(_9b0,_9b1,_9b2,_9b3,row){
var _9b4=$.data(_9b0,"treegrid");
var opts=_9b4.options;
var cc=[];
if(_9b2&&opts.rownumbers){
cc.push("<td class=\"datagrid-td-rownumber\"><div class=\"datagrid-cell-rownumber\">0</div></td>");
}
for(var i=0;i<_9b1.length;i++){
var _9b5=_9b1[i];
var col=$(_9b0).datagrid("getColumnOption",_9b5);
if(col){
var css=col.styler?(col.styler(row[_9b5],row)||""):"";
var cs=this.getStyleValue(css);
var cls=cs.c?"class=\""+cs.c+"\"":"";
var _9b6=col.hidden?"style=\"display:none;"+cs.s+"\"":(cs.s?"style=\""+cs.s+"\"":"");
cc.push("<td field=\""+_9b5+"\" "+cls+" "+_9b6+">");
var _9b6="";
if(!col.checkbox){
if(col.align){
_9b6+="text-align:"+col.align+";";
}
if(!opts.nowrap){
_9b6+="white-space:normal;height:auto;";
}else{
if(opts.autoRowHeight){
_9b6+="height:auto;";
}
}
}
cc.push("<div style=\""+_9b6+"\" ");
if(col.checkbox){
cc.push("class=\"datagrid-cell-check ");
}else{
cc.push("class=\"datagrid-cell "+col.cellClass);
}
cc.push("\">");
if(col.checkbox){
if(row.checked){
cc.push("<input type=\"checkbox\" checked=\"checked\"");
}else{
cc.push("<input type=\"checkbox\"");
}
cc.push(" name=\""+_9b5+"\" value=\""+(row[_9b5]!=undefined?row[_9b5]:"")+"\">");
}else{
var val=null;
if(col.formatter){
val=col.formatter(row[_9b5],row);
}else{
val=row[_9b5];
}
if(_9b5==opts.treeField){
for(var j=0;j<_9b3;j++){
cc.push("<span class=\"tree-indent\"></span>");
}
if(row.state=="closed"){
cc.push("<span class=\"tree-hit tree-collapsed\"></span>");
cc.push("<span class=\"tree-icon tree-folder "+(row.iconCls?row.iconCls:"")+"\"></span>");
}else{
if(row.children&&row.children.length){
cc.push("<span class=\"tree-hit tree-expanded\"></span>");
cc.push("<span class=\"tree-icon tree-folder tree-folder-open "+(row.iconCls?row.iconCls:"")+"\"></span>");
}else{
cc.push("<span class=\"tree-indent\"></span>");
cc.push("<span class=\"tree-icon tree-file "+(row.iconCls?row.iconCls:"")+"\"></span>");
}
}
if(this.hasCheckbox(_9b0,row)){
var flag=0;
var crow=$.easyui.getArrayItem(_9b4.checkedRows,opts.idField,row[opts.idField]);
if(crow){
flag=crow.checkState=="checked"?1:2;
row.checkState=crow.checkState;
row.checked=crow.checked;
$.easyui.addArrayItem(_9b4.checkedRows,opts.idField,row);
}else{
var prow=$.easyui.getArrayItem(_9b4.checkedRows,opts.idField,row._parentId);
if(prow&&prow.checkState=="checked"&&opts.cascadeCheck){
flag=1;
row.checked=true;
$.easyui.addArrayItem(_9b4.checkedRows,opts.idField,row);
}else{
if(row.checked){
$.easyui.addArrayItem(_9b4.tmpIds,row[opts.idField]);
}
}
row.checkState=flag?"checked":"unchecked";
}
cc.push("<span class=\"tree-checkbox tree-checkbox"+flag+"\"></span>");
}else{
row.checkState=undefined;
row.checked=undefined;
}
cc.push("<span class=\"tree-title\">"+val+"</span>");
}else{
cc.push(val);
}
}
cc.push("</div>");
cc.push("</td>");
}
}
return cc.join("");
},hasCheckbox:function(_9b7,row){
var opts=$.data(_9b7,"treegrid").options;
if(opts.checkbox){
if($.isFunction(opts.checkbox)){
if(opts.checkbox.call(_9b7,row)){
return true;
}else{
return false;
}
}else{
if(opts.onlyLeafCheck){
if(row.state=="open"&&!(row.children&&row.children.length)){
return true;
}
}else{
return true;
}
}
}
return false;
},refreshRow:function(_9b8,id){
this.updateRow.call(this,_9b8,id,{});
},updateRow:function(_9b9,id,row){
var opts=$.data(_9b9,"treegrid").options;
var _9ba=$(_9b9).treegrid("find",id);
$.extend(_9ba,row);
var _9bb=$(_9b9).treegrid("getLevel",id)-1;
var _9bc=opts.rowStyler?opts.rowStyler.call(_9b9,_9ba):"";
var _9bd=$.data(_9b9,"datagrid").rowIdPrefix;
var _9be=_9ba[opts.idField];
function _9bf(_9c0){
var _9c1=$(_9b9).treegrid("getColumnFields",_9c0);
var tr=opts.finder.getTr(_9b9,id,"body",(_9c0?1:2));
var _9c2=tr.find("div.datagrid-cell-rownumber").html();
var _9c3=tr.find("div.datagrid-cell-check input[type=checkbox]").is(":checked");
tr.html(this.renderRow(_9b9,_9c1,_9c0,_9bb,_9ba));
tr.attr("style",_9bc||"");
tr.find("div.datagrid-cell-rownumber").html(_9c2);
if(_9c3){
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);
}
if(_9be!=id){
tr.attr("id",_9bd+"-"+(_9c0?1:2)+"-"+_9be);
tr.attr("node-id",_9be);
}
};
_9bf.call(this,true);
_9bf.call(this,false);
$(_9b9).treegrid("fixRowHeight",id);
},deleteRow:function(_9c4,id){
var opts=$.data(_9c4,"treegrid").options;
var tr=opts.finder.getTr(_9c4,id);
tr.next("tr.treegrid-tr-tree").remove();
tr.remove();
var _9c5=del(id);
if(_9c5){
if(_9c5.children.length==0){
tr=opts.finder.getTr(_9c4,_9c5[opts.idField]);
tr.next("tr.treegrid-tr-tree").remove();
var cell=tr.children("td[field=\""+opts.treeField+"\"]").children("div.datagrid-cell");
cell.find(".tree-icon").removeClass("tree-folder").addClass("tree-file");
cell.find(".tree-hit").remove();
$("<span class=\"tree-indent\"></span>").prependTo(cell);
}
}
this.setEmptyMsg(_9c4);
function del(id){
var cc;
var _9c6=$(_9c4).treegrid("getParent",id);
if(_9c6){
cc=_9c6.children;
}else{
cc=$(_9c4).treegrid("getData");
}
for(var i=0;i<cc.length;i++){
if(cc[i][opts.idField]==id){
cc.splice(i,1);
break;
}
}
return _9c6;
};
},onBeforeRender:function(_9c7,_9c8,data){
if($.isArray(_9c8)){
data={total:_9c8.length,rows:_9c8};
_9c8=null;
}
if(!data){
return false;
}
var _9c9=$.data(_9c7,"treegrid");
var opts=_9c9.options;
if(data.length==undefined){
if(data.footer){
_9c9.footer=data.footer;
}
if(data.total){
_9c9.total=data.total;
}
data=this.transfer(_9c7,_9c8,data.rows);
}else{
function _9ca(_9cb,_9cc){
for(var i=0;i<_9cb.length;i++){
var row=_9cb[i];
row._parentId=_9cc;
if(row.children&&row.children.length){
_9ca(row.children,row[opts.idField]);
}
}
};
_9ca(data,_9c8);
}
this.sort(_9c7,data);
this.treeNodes=data;
this.treeLevel=$(_9c7).treegrid("getLevel",_9c8);
var node=find(_9c7,_9c8);
if(node){
if(node.children){
node.children=node.children.concat(data);
}else{
node.children=data;
}
}else{
_9c9.data=_9c9.data.concat(data);
}
},sort:function(_9cd,data){
var opts=$.data(_9cd,"treegrid").options;
if(!opts.remoteSort&&opts.sortName){
var _9ce=opts.sortName.split(",");
var _9cf=opts.sortOrder.split(",");
_9d0(data);
}
function _9d0(rows){
rows.sort(function(r1,r2){
var r=0;
for(var i=0;i<_9ce.length;i++){
var sn=_9ce[i];
var so=_9cf[i];
var col=$(_9cd).treegrid("getColumnOption",sn);
var _9d1=col.sorter||function(a,b){
return a==b?0:(a>b?1:-1);
};
r=_9d1(r1[sn],r2[sn])*(so=="asc"?1:-1);
if(r!=0){
return r;
}
}
return r;
});
for(var i=0;i<rows.length;i++){
var _9d2=rows[i].children;
if(_9d2&&_9d2.length){
_9d0(_9d2);
}
}
};
},transfer:function(_9d3,_9d4,data){
var opts=$.data(_9d3,"treegrid").options;
var rows=$.extend([],data);
var _9d5=_9d6(_9d4,rows);
var toDo=$.extend([],_9d5);
while(toDo.length){
var node=toDo.shift();
var _9d7=_9d6(node[opts.idField],rows);
if(_9d7.length){
if(node.children){
node.children=node.children.concat(_9d7);
}else{
node.children=_9d7;
}
toDo=toDo.concat(_9d7);
}
}
return _9d5;
function _9d6(_9d8,rows){
var rr=[];
for(var i=0;i<rows.length;i++){
var row=rows[i];
if(row._parentId==_9d8){
rr.push(row);
rows.splice(i,1);
i--;
}
}
return rr;
};
}});
$.fn.treegrid.defaults=$.extend({},$.fn.datagrid.defaults,{treeField:null,checkbox:false,cascadeCheck:true,onlyLeafCheck:false,lines:false,animate:false,singleSelect:true,view:_99b,rowEvents:$.extend({},$.fn.datagrid.defaults.rowEvents,{mouseover:_911(true),mouseout:_911(false),click:_913}),loader:function(_9d9,_9da,_9db){
var opts=$(this).treegrid("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_9d9,dataType:"json",success:function(data){
_9da(data);
},error:function(){
_9db.apply(this,arguments);
}});
},loadFilter:function(data,_9dc){
return data;
},finder:{getTr:function(_9dd,id,type,_9de){
type=type||"body";
_9de=_9de||0;
var dc=$.data(_9dd,"datagrid").dc;
if(_9de==0){
var opts=$.data(_9dd,"treegrid").options;
var tr1=opts.finder.getTr(_9dd,id,type,1);
var tr2=opts.finder.getTr(_9dd,id,type,2);
return tr1.add(tr2);
}else{
if(type=="body"){
var tr=$("#"+$.data(_9dd,"datagrid").rowIdPrefix+"-"+_9de+"-"+id);
if(!tr.length){
tr=(_9de==1?dc.body1:dc.body2).find("tr[node-id=\""+id+"\"]");
}
return tr;
}else{
if(type=="footer"){
return (_9de==1?dc.footer1:dc.footer2).find("tr[node-id=\""+id+"\"]");
}else{
if(type=="selected"){
return (_9de==1?dc.body1:dc.body2).find("tr.datagrid-row-selected");
}else{
if(type=="highlight"){
return (_9de==1?dc.body1:dc.body2).find("tr.datagrid-row-over");
}else{
if(type=="checked"){
return (_9de==1?dc.body1:dc.body2).find("tr.datagrid-row-checked");
}else{
if(type=="last"){
return (_9de==1?dc.body1:dc.body2).find("tr:last[node-id]");
}else{
if(type=="allbody"){
return (_9de==1?dc.body1:dc.body2).find("tr[node-id]");
}else{
if(type=="allfooter"){
return (_9de==1?dc.footer1:dc.footer2).find("tr[node-id]");
}
}
}
}
}
}
}
}
}
},getRow:function(_9df,p){
var id=(typeof p=="object")?p.attr("node-id"):p;
return $(_9df).treegrid("find",id);
},getRows:function(_9e0){
return $(_9e0).treegrid("getChildren");
}},onBeforeLoad:function(row,_9e1){
},onLoadSuccess:function(row,data){
},onLoadError:function(){
},onBeforeCollapse:function(row){
},onCollapse:function(row){
},onBeforeExpand:function(row){
},onExpand:function(row){
},onClickRow:function(row){
},onDblClickRow:function(row){
},onClickCell:function(_9e2,row){
},onDblClickCell:function(_9e3,row){
},onContextMenu:function(e,row){
},onBeforeEdit:function(row){
},onAfterEdit:function(row,_9e4){
},onCancelEdit:function(row){
},onBeforeCheckNode:function(row,_9e5){
},onCheckNode:function(row,_9e6){
}});
})(jQuery);
(function($){
function _9e7(_9e8){
var opts=$.data(_9e8,"datalist").options;
$(_9e8).datagrid($.extend({},opts,{cls:"datalist"+(opts.lines?" datalist-lines":""),frozenColumns:(opts.frozenColumns&&opts.frozenColumns.length)?opts.frozenColumns:(opts.checkbox?[[{field:"_ck",checkbox:true}]]:undefined),columns:(opts.columns&&opts.columns.length)?opts.columns:[[{field:opts.textField,width:"100%",formatter:function(_9e9,row,_9ea){
return opts.textFormatter?opts.textFormatter(_9e9,row,_9ea):_9e9;
}}]]}));
};
var _9eb=$.extend({},$.fn.datagrid.defaults.view,{render:function(_9ec,_9ed,_9ee){
var _9ef=$.data(_9ec,"datagrid");
var opts=_9ef.options;
if(opts.groupField){
var g=this.groupRows(_9ec,_9ef.data.rows);
this.groups=g.groups;
_9ef.data.rows=g.rows;
var _9f0=[];
for(var i=0;i<g.groups.length;i++){
_9f0.push(this.renderGroup.call(this,_9ec,i,g.groups[i],_9ee));
}
$(_9ed).html(_9f0.join(""));
}else{
$(_9ed).html(this.renderTable(_9ec,0,_9ef.data.rows,_9ee));
}
},renderGroup:function(_9f1,_9f2,_9f3,_9f4){
var _9f5=$.data(_9f1,"datagrid");
var opts=_9f5.options;
var _9f6=$(_9f1).datagrid("getColumnFields",_9f4);
var _9f7=[];
_9f7.push("<div class=\"datagrid-group\" group-index="+_9f2+">");
if(!_9f4){
_9f7.push("<span class=\"datagrid-group-title\">");
_9f7.push(opts.groupFormatter.call(_9f1,_9f3.value,_9f3.rows));
_9f7.push("</span>");
}
_9f7.push("</div>");
_9f7.push(this.renderTable(_9f1,_9f3.startIndex,_9f3.rows,_9f4));
return _9f7.join("");
},groupRows:function(_9f8,rows){
var _9f9=$.data(_9f8,"datagrid");
var opts=_9f9.options;
var _9fa=[];
for(var i=0;i<rows.length;i++){
var row=rows[i];
var _9fb=_9fc(row[opts.groupField]);
if(!_9fb){
_9fb={value:row[opts.groupField],rows:[row]};
_9fa.push(_9fb);
}else{
_9fb.rows.push(row);
}
}
var _9fd=0;
var rows=[];
for(var i=0;i<_9fa.length;i++){
var _9fb=_9fa[i];
_9fb.startIndex=_9fd;
_9fd+=_9fb.rows.length;
rows=rows.concat(_9fb.rows);
}
return {groups:_9fa,rows:rows};
function _9fc(_9fe){
for(var i=0;i<_9fa.length;i++){
var _9ff=_9fa[i];
if(_9ff.value==_9fe){
return _9ff;
}
}
return null;
};
}});
$.fn.datalist=function(_a00,_a01){
if(typeof _a00=="string"){
var _a02=$.fn.datalist.methods[_a00];
if(_a02){
return _a02(this,_a01);
}else{
return this.datagrid(_a00,_a01);
}
}
_a00=_a00||{};
return this.each(function(){
var _a03=$.data(this,"datalist");
if(_a03){
$.extend(_a03.options,_a00);
}else{
var opts=$.extend({},$.fn.datalist.defaults,$.fn.datalist.parseOptions(this),_a00);
opts.columns=$.extend(true,[],opts.columns);
_a03=$.data(this,"datalist",{options:opts});
}
_9e7(this);
if(!_a03.options.data){
var data=$.fn.datalist.parseData(this);
if(data.total){
$(this).datalist("loadData",data);
}
}
});
};
$.fn.datalist.methods={options:function(jq){
return $.data(jq[0],"datalist").options;
}};
$.fn.datalist.parseOptions=function(_a04){
return $.extend({},$.fn.datagrid.parseOptions(_a04),$.parser.parseOptions(_a04,["valueField","textField","groupField",{checkbox:"boolean",lines:"boolean"}]));
};
$.fn.datalist.parseData=function(_a05){
var opts=$.data(_a05,"datalist").options;
var data={total:0,rows:[]};
$(_a05).children().each(function(){
var _a06=$.parser.parseOptions(this,["value","group"]);
var row={};
var html=$(this).html();
row[opts.valueField]=_a06.value!=undefined?_a06.value:html;
row[opts.textField]=html;
if(opts.groupField){
row[opts.groupField]=_a06.group;
}
data.total++;
data.rows.push(row);
});
return data;
};
$.fn.datalist.defaults=$.extend({},$.fn.datagrid.defaults,{fitColumns:true,singleSelect:true,showHeader:false,checkbox:false,lines:false,valueField:"value",textField:"text",groupField:"",view:_9eb,textFormatter:function(_a07,row){
return _a07;
},groupFormatter:function(_a08,rows){
return _a08;
}});
})(jQuery);
(function($){
$(function(){
$(document).unbind(".combo").bind("mousedown.combo mousewheel.combo",function(e){
var p=$(e.target).closest("span.combo,div.combo-p,div.menu");
if(p.length){
_a09(p);
return;
}
$("body>div.combo-p>div.combo-panel:visible").panel("close");
});
});
function _a0a(_a0b){
var _a0c=$.data(_a0b,"combo");
var opts=_a0c.options;
if(!_a0c.panel){
_a0c.panel=$("<div class=\"combo-panel\"></div>").appendTo("body");
_a0c.panel.panel({minWidth:opts.panelMinWidth,maxWidth:opts.panelMaxWidth,minHeight:opts.panelMinHeight,maxHeight:opts.panelMaxHeight,doSize:false,closed:true,cls:"combo-p",style:{position:"absolute",zIndex:10},onOpen:function(){
var _a0d=$(this).panel("options").comboTarget;
var _a0e=$.data(_a0d,"combo");
if(_a0e){
_a0e.options.onShowPanel.call(_a0d);
}
},onBeforeClose:function(){
_a09($(this).parent());
},onClose:function(){
var _a0f=$(this).panel("options").comboTarget;
var _a10=$(_a0f).data("combo");
if(_a10){
_a10.options.onHidePanel.call(_a0f);
}
}});
}
var _a11=$.extend(true,[],opts.icons);
if(opts.hasDownArrow){
_a11.push({iconCls:"combo-arrow",handler:function(e){
_a15(e.data.target);
}});
}
$(_a0b).addClass("combo-f").textbox($.extend({},opts,{icons:_a11,onChange:function(){
}}));
$(_a0b).attr("comboName",$(_a0b).attr("textboxName"));
_a0c.combo=$(_a0b).next();
_a0c.combo.addClass("combo");
};
function _a12(_a13){
var _a14=$.data(_a13,"combo");
var opts=_a14.options;
var p=_a14.panel;
if(p.is(":visible")){
p.panel("close");
}
if(!opts.cloned){
p.panel("destroy");
}
$(_a13).textbox("destroy");
};
function _a15(_a16){
var _a17=$.data(_a16,"combo").panel;
if(_a17.is(":visible")){
var _a18=_a17.combo("combo");
_a19(_a18);
if(_a18!=_a16){
$(_a16).combo("showPanel");
}
}else{
var p=$(_a16).closest("div.combo-p").children(".combo-panel");
$("div.combo-panel:visible").not(_a17).not(p).panel("close");
$(_a16).combo("showPanel");
}
$(_a16).combo("textbox").focus();
};
function _a09(_a1a){
$(_a1a).find(".combo-f").each(function(){
var p=$(this).combo("panel");
if(p.is(":visible")){
p.panel("close");
}
});
};
function _a1b(e){
var _a1c=e.data.target;
var _a1d=$.data(_a1c,"combo");
var opts=_a1d.options;
if(!opts.editable){
_a15(_a1c);
}else{
var p=$(_a1c).closest("div.combo-p").children(".combo-panel");
$("div.combo-panel:visible").not(p).each(function(){
var _a1e=$(this).combo("combo");
if(_a1e!=_a1c){
_a19(_a1e);
}
});
}
};
function _a1f(e){
var _a20=e.data.target;
var t=$(_a20);
var _a21=t.data("combo");
var opts=t.combo("options");
_a21.panel.panel("options").comboTarget=_a20;
switch(e.keyCode){
case 38:
opts.keyHandler.up.call(_a20,e);
break;
case 40:
opts.keyHandler.down.call(_a20,e);
break;
case 37:
opts.keyHandler.left.call(_a20,e);
break;
case 39:
opts.keyHandler.right.call(_a20,e);
break;
case 13:
e.preventDefault();
opts.keyHandler.enter.call(_a20,e);
return false;
case 9:
case 27:
_a19(_a20);
break;
default:
if(opts.editable){
if(_a21.timer){
clearTimeout(_a21.timer);
}
_a21.timer=setTimeout(function(){
var q=t.combo("getText");
if(_a21.previousText!=q){
_a21.previousText=q;
t.combo("showPanel");
opts.keyHandler.query.call(_a20,q,e);
t.combo("validate");
}
},opts.delay);
}
}
};
function _a22(_a23){
var _a24=$.data(_a23,"combo");
var _a25=_a24.combo;
var _a26=_a24.panel;
var opts=$(_a23).combo("options");
var _a27=_a26.panel("options");
_a27.comboTarget=_a23;
if(_a27.closed){
_a26.panel("panel").show().css({zIndex:($.fn.menu?$.fn.menu.defaults.zIndex++:($.fn.window?$.fn.window.defaults.zIndex++:99)),left:-999999});
_a26.panel("resize",{width:(opts.panelWidth?opts.panelWidth:_a25._outerWidth()),height:opts.panelHeight});
_a26.panel("panel").hide();
_a26.panel("open");
}
(function(){
if(_a27.comboTarget==_a23&&_a26.is(":visible")){
_a26.panel("move",{left:_a28(),top:_a29()});
setTimeout(arguments.callee,200);
}
})();
function _a28(){
var left=_a25.offset().left;
if(opts.panelAlign=="right"){
left+=_a25._outerWidth()-_a26._outerWidth();
}
if(left+_a26._outerWidth()>$(window)._outerWidth()+$(document).scrollLeft()){
left=$(window)._outerWidth()+$(document).scrollLeft()-_a26._outerWidth();
}
if(left<0){
left=0;
}
return left;
};
function _a29(){
var top=_a25.offset().top+_a25._outerHeight();
if(top+_a26._outerHeight()>$(window)._outerHeight()+$(document).scrollTop()){
top=_a25.offset().top-_a26._outerHeight();
}
if(top<$(document).scrollTop()){
top=_a25.offset().top+_a25._outerHeight();
}
return top;
};
};
function _a19(_a2a){
var _a2b=$.data(_a2a,"combo").panel;
_a2b.panel("close");
};
function _a2c(_a2d,text){
var _a2e=$.data(_a2d,"combo");
var _a2f=$(_a2d).textbox("getText");
if(_a2f!=text){
$(_a2d).textbox("setText",text);
}
_a2e.previousText=text;
};
function _a30(_a31){
var _a32=$.data(_a31,"combo");
var opts=_a32.options;
var _a33=$(_a31).next();
var _a34=[];
_a33.find(".textbox-value").each(function(){
_a34.push($(this).val());
});
if(opts.multivalue){
return _a34;
}else{
return _a34.length?_a34[0].split(opts.separator):_a34;
}
};
function _a35(_a36,_a37){
var _a38=$.data(_a36,"combo");
var _a39=_a38.combo;
var opts=$(_a36).combo("options");
if(!$.isArray(_a37)){
_a37=_a37.split(opts.separator);
}
var _a3a=_a30(_a36);
_a39.find(".textbox-value").remove();
if(_a37.length){
if(opts.multivalue){
for(var i=0;i<_a37.length;i++){
_a3b(_a37[i]);
}
}else{
_a3b(_a37.join(opts.separator));
}
}
function _a3b(_a3c){
var name=$(_a36).attr("textboxName")||"";
var _a3d=$("<input type=\"hidden\" class=\"textbox-value\">").appendTo(_a39);
_a3d.attr("name",name);
if(opts.disabled){
_a3d.attr("disabled","disabled");
}
_a3d.val(_a3c);
};
var _a3e=(function(){
if(_a3a.length!=_a37.length){
return true;
}
for(var i=0;i<_a37.length;i++){
if(_a37[i]!=_a3a[i]){
return true;
}
}
return false;
})();
if(_a3e){
$(_a36).val(_a37.join(opts.separator));
if(opts.multiple){
opts.onChange.call(_a36,_a37,_a3a);
}else{
opts.onChange.call(_a36,_a37[0],_a3a[0]);
}
$(_a36).closest("form").trigger("_change",[_a36]);
}
};
function _a3f(_a40){
var _a41=_a30(_a40);
return _a41[0];
};
function _a42(_a43,_a44){
_a35(_a43,[_a44]);
};
function _a45(_a46){
var opts=$.data(_a46,"combo").options;
var _a47=opts.onChange;
opts.onChange=function(){
};
if(opts.multiple){
_a35(_a46,opts.value?opts.value:[]);
}else{
_a42(_a46,opts.value);
}
opts.onChange=_a47;
};
$.fn.combo=function(_a48,_a49){
if(typeof _a48=="string"){
var _a4a=$.fn.combo.methods[_a48];
if(_a4a){
return _a4a(this,_a49);
}else{
return this.textbox(_a48,_a49);
}
}
_a48=_a48||{};
return this.each(function(){
var _a4b=$.data(this,"combo");
if(_a4b){
$.extend(_a4b.options,_a48);
if(_a48.value!=undefined){
_a4b.options.originalValue=_a48.value;
}
}else{
_a4b=$.data(this,"combo",{options:$.extend({},$.fn.combo.defaults,$.fn.combo.parseOptions(this),_a48),previousText:""});
if(_a4b.options.multiple&&_a4b.options.value==""){
_a4b.options.originalValue=[];
}else{
_a4b.options.originalValue=_a4b.options.value;
}
}
_a0a(this);
_a45(this);
});
};
$.fn.combo.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"combo").options,{width:opts.width,height:opts.height,disabled:opts.disabled,readonly:opts.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).textbox("cloneFrom",from);
$.data(this,"combo",{options:$.extend(true,{cloned:true},$(from).combo("options")),combo:$(this).next(),panel:$(from).combo("panel")});
$(this).addClass("combo-f").attr("comboName",$(this).attr("textboxName"));
});
},combo:function(jq){
return jq.closest(".combo-panel").panel("options").comboTarget;
},panel:function(jq){
return $.data(jq[0],"combo").panel;
},destroy:function(jq){
return jq.each(function(){
_a12(this);
});
},showPanel:function(jq){
return jq.each(function(){
_a22(this);
});
},hidePanel:function(jq){
return jq.each(function(){
_a19(this);
});
},clear:function(jq){
return jq.each(function(){
$(this).textbox("setText","");
var opts=$.data(this,"combo").options;
if(opts.multiple){
$(this).combo("setValues",[]);
}else{
$(this).combo("setValue","");
}
});
},reset:function(jq){
return jq.each(function(){
var opts=$.data(this,"combo").options;
if(opts.multiple){
$(this).combo("setValues",opts.originalValue);
}else{
$(this).combo("setValue",opts.originalValue);
}
});
},setText:function(jq,text){
return jq.each(function(){
_a2c(this,text);
});
},getValues:function(jq){
return _a30(jq[0]);
},setValues:function(jq,_a4c){
return jq.each(function(){
_a35(this,_a4c);
});
},getValue:function(jq){
return _a3f(jq[0]);
},setValue:function(jq,_a4d){
return jq.each(function(){
_a42(this,_a4d);
});
}};
$.fn.combo.parseOptions=function(_a4e){
var t=$(_a4e);
return $.extend({},$.fn.textbox.parseOptions(_a4e),$.parser.parseOptions(_a4e,["separator","panelAlign",{panelWidth:"number",hasDownArrow:"boolean",delay:"number",reversed:"boolean",multivalue:"boolean",selectOnNavigation:"boolean"},{panelMinWidth:"number",panelMaxWidth:"number",panelMinHeight:"number",panelMaxHeight:"number"}]),{panelHeight:(t.attr("panelHeight")=="auto"?"auto":parseInt(t.attr("panelHeight"))||undefined),multiple:(t.attr("multiple")?true:undefined)});
};
$.fn.combo.defaults=$.extend({},$.fn.textbox.defaults,{inputEvents:{click:_a1b,keydown:_a1f,paste:_a1f,drop:_a1f},panelWidth:null,panelHeight:200,panelMinWidth:null,panelMaxWidth:null,panelMinHeight:null,panelMaxHeight:null,panelAlign:"left",reversed:false,multiple:false,multivalue:true,selectOnNavigation:true,separator:",",hasDownArrow:true,delay:200,keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
},query:function(q,e){
}},onShowPanel:function(){
},onHidePanel:function(){
},onChange:function(_a4f,_a50){
}});
})(jQuery);
(function($){
function _a51(_a52,_a53){
var _a54=$.data(_a52,"combobox");
return $.easyui.indexOfArray(_a54.data,_a54.options.valueField,_a53);
};
function _a55(_a56,_a57){
var opts=$.data(_a56,"combobox").options;
var _a58=$(_a56).combo("panel");
var item=opts.finder.getEl(_a56,_a57);
if(item.length){
if(item.position().top<=0){
var h=_a58.scrollTop()+item.position().top;
_a58.scrollTop(h);
}else{
if(item.position().top+item.outerHeight()>_a58.height()){
var h=_a58.scrollTop()+item.position().top+item.outerHeight()-_a58.height();
_a58.scrollTop(h);
}
}
}
_a58.triggerHandler("scroll");
};
function nav(_a59,dir){
var opts=$.data(_a59,"combobox").options;
var _a5a=$(_a59).combobox("panel");
var item=_a5a.children("div.combobox-item-hover");
if(!item.length){
item=_a5a.children("div.combobox-item-selected");
}
item.removeClass("combobox-item-hover");
var _a5b="div.combobox-item:visible:not(.combobox-item-disabled):first";
var _a5c="div.combobox-item:visible:not(.combobox-item-disabled):last";
if(!item.length){
item=_a5a.children(dir=="next"?_a5b:_a5c);
}else{
if(dir=="next"){
item=item.nextAll(_a5b);
if(!item.length){
item=_a5a.children(_a5b);
}
}else{
item=item.prevAll(_a5b);
if(!item.length){
item=_a5a.children(_a5c);
}
}
}
if(item.length){
item.addClass("combobox-item-hover");
var row=opts.finder.getRow(_a59,item);
if(row){
$(_a59).combobox("scrollTo",row[opts.valueField]);
if(opts.selectOnNavigation){
_a5d(_a59,row[opts.valueField]);
}
}
}
};
function _a5d(_a5e,_a5f,_a60){
var opts=$.data(_a5e,"combobox").options;
var _a61=$(_a5e).combo("getValues");
if($.inArray(_a5f+"",_a61)==-1){
if(opts.multiple){
_a61.push(_a5f);
}else{
_a61=[_a5f];
}
_a62(_a5e,_a61,_a60);
}
};
function _a63(_a64,_a65){
var opts=$.data(_a64,"combobox").options;
var _a66=$(_a64).combo("getValues");
var _a67=$.inArray(_a65+"",_a66);
if(_a67>=0){
_a66.splice(_a67,1);
_a62(_a64,_a66);
}
};
function _a62(_a68,_a69,_a6a){
var opts=$.data(_a68,"combobox").options;
var _a6b=$(_a68).combo("panel");
if(!$.isArray(_a69)){
_a69=_a69.split(opts.separator);
}
if(!opts.multiple){
_a69=_a69.length?[_a69[0]]:[""];
}
var _a6c=$(_a68).combo("getValues");
if(_a6b.is(":visible")){
_a6b.find(".combobox-item-selected").each(function(){
var row=opts.finder.getRow(_a68,$(this));
if(row){
if($.easyui.indexOfArray(_a6c,row[opts.valueField])==-1){
$(this).removeClass("combobox-item-selected");
}
}
});
}
$.map(_a6c,function(v){
if($.easyui.indexOfArray(_a69,v)==-1){
var el=opts.finder.getEl(_a68,v);
if(el.hasClass("combobox-item-selected")){
el.removeClass("combobox-item-selected");
opts.onUnselect.call(_a68,opts.finder.getRow(_a68,v));
}
}
});
var _a6d=null;
var vv=[],ss=[];
for(var i=0;i<_a69.length;i++){
var v=_a69[i];
var s=v;
var row=opts.finder.getRow(_a68,v);
if(row){
s=row[opts.textField];
_a6d=row;
var el=opts.finder.getEl(_a68,v);
if(!el.hasClass("combobox-item-selected")){
el.addClass("combobox-item-selected");
opts.onSelect.call(_a68,row);
}
}
vv.push(v);
ss.push(s);
}
if(!_a6a){
$(_a68).combo("setText",ss.join(opts.separator));
}
if(opts.showItemIcon){
var tb=$(_a68).combobox("textbox");
tb.removeClass("textbox-bgicon "+opts.textboxIconCls);
if(_a6d&&_a6d.iconCls){
tb.addClass("textbox-bgicon "+_a6d.iconCls);
opts.textboxIconCls=_a6d.iconCls;
}
}
$(_a68).combo("setValues",vv);
_a6b.triggerHandler("scroll");
};
function _a6e(_a6f,data,_a70){
var _a71=$.data(_a6f,"combobox");
var opts=_a71.options;
_a71.data=opts.loadFilter.call(_a6f,data);
opts.view.render.call(opts.view,_a6f,$(_a6f).combo("panel"),_a71.data);
var vv=$(_a6f).combobox("getValues");
$.easyui.forEach(_a71.data,false,function(row){
if(row["selected"]){
$.easyui.addArrayItem(vv,row[opts.valueField]+"");
}
});
if(opts.multiple){
_a62(_a6f,vv,_a70);
}else{
_a62(_a6f,vv.length?[vv[vv.length-1]]:[],_a70);
}
opts.onLoadSuccess.call(_a6f,data);
};
function _a72(_a73,url,_a74,_a75){
var opts=$.data(_a73,"combobox").options;
if(url){
opts.url=url;
}
_a74=$.extend({},opts.queryParams,_a74||{});
if(opts.onBeforeLoad.call(_a73,_a74)==false){
return;
}
opts.loader.call(_a73,_a74,function(data){
_a6e(_a73,data,_a75);
},function(){
opts.onLoadError.apply(this,arguments);
});
};
function _a76(_a77,q){
var _a78=$.data(_a77,"combobox");
var opts=_a78.options;
var _a79=$();
var qq=opts.multiple?q.split(opts.separator):[q];
if(opts.mode=="remote"){
_a7a(qq);
_a72(_a77,null,{q:q},true);
}else{
var _a7b=$(_a77).combo("panel");
_a7b.find(".combobox-item-hover").removeClass("combobox-item-hover");
_a7b.find(".combobox-item,.combobox-group").hide();
var data=_a78.data;
var vv=[];
$.map(qq,function(q){
q=$.trim(q);
var _a7c=q;
var _a7d=undefined;
_a79=$();
for(var i=0;i<data.length;i++){
var row=data[i];
if(opts.filter.call(_a77,q,row)){
var v=row[opts.valueField];
var s=row[opts.textField];
var g=row[opts.groupField];
var item=opts.finder.getEl(_a77,v).show();
if(s.toLowerCase()==q.toLowerCase()){
_a7c=v;
if(opts.reversed){
_a79=item;
}else{
_a5d(_a77,v,true);
}
}
if(opts.groupField&&_a7d!=g){
opts.finder.getGroupEl(_a77,g).show();
_a7d=g;
}
}
}
vv.push(_a7c);
});
_a7a(vv);
}
function _a7a(vv){
if(opts.reversed){
_a79.addClass("combobox-item-hover");
}else{
_a62(_a77,opts.multiple?(q?vv:[]):vv,true);
}
};
};
function _a7e(_a7f){
var t=$(_a7f);
var opts=t.combobox("options");
var _a80=t.combobox("panel");
var item=_a80.children("div.combobox-item-hover");
if(item.length){
item.removeClass("combobox-item-hover");
var row=opts.finder.getRow(_a7f,item);
var _a81=row[opts.valueField];
if(opts.multiple){
if(item.hasClass("combobox-item-selected")){
t.combobox("unselect",_a81);
}else{
t.combobox("select",_a81);
}
}else{
t.combobox("select",_a81);
}
}
var vv=[];
$.map(t.combobox("getValues"),function(v){
if(_a51(_a7f,v)>=0){
vv.push(v);
}
});
t.combobox("setValues",vv);
if(!opts.multiple){
t.combobox("hidePanel");
}
};
function _a82(_a83){
var _a84=$.data(_a83,"combobox");
var opts=_a84.options;
$(_a83).addClass("combobox-f");
$(_a83).combo($.extend({},opts,{onShowPanel:function(){
$(this).combo("panel").find("div.combobox-item:hidden,div.combobox-group:hidden").show();
_a62(this,$(this).combobox("getValues"),true);
$(this).combobox("scrollTo",$(this).combobox("getValue"));
opts.onShowPanel.call(this);
}}));
var p=$(_a83).combo("panel");
p.unbind(".combobox");
for(var _a85 in opts.panelEvents){
p.bind(_a85+".combobox",{target:_a83},opts.panelEvents[_a85]);
}
};
function _a86(e){
$(this).children("div.combobox-item-hover").removeClass("combobox-item-hover");
var item=$(e.target).closest("div.combobox-item");
if(!item.hasClass("combobox-item-disabled")){
item.addClass("combobox-item-hover");
}
e.stopPropagation();
};
function _a87(e){
$(e.target).closest("div.combobox-item").removeClass("combobox-item-hover");
e.stopPropagation();
};
function _a88(e){
var _a89=$(this).panel("options").comboTarget;
if(!_a89){
return;
}
var opts=$(_a89).combobox("options");
var item=$(e.target).closest("div.combobox-item");
if(!item.length||item.hasClass("combobox-item-disabled")){
return;
}
var row=opts.finder.getRow(_a89,item);
if(!row){
return;
}
if(opts.blurTimer){
clearTimeout(opts.blurTimer);
opts.blurTimer=null;
}
opts.onClick.call(_a89,row);
var _a8a=row[opts.valueField];
if(opts.multiple){
if(item.hasClass("combobox-item-selected")){
_a63(_a89,_a8a);
}else{
_a5d(_a89,_a8a);
}
}else{
$(_a89).combobox("setValue",_a8a).combobox("hidePanel");
}
e.stopPropagation();
};
function _a8b(e){
var _a8c=$(this).panel("options").comboTarget;
if(!_a8c){
return;
}
var opts=$(_a8c).combobox("options");
if(opts.groupPosition=="sticky"){
var _a8d=$(this).children(".combobox-stick");
if(!_a8d.length){
_a8d=$("<div class=\"combobox-stick\"></div>").appendTo(this);
}
_a8d.hide();
var _a8e=$(_a8c).data("combobox");
$(this).children(".combobox-group:visible").each(function(){
var g=$(this);
var _a8f=opts.finder.getGroup(_a8c,g);
var _a90=_a8e.data[_a8f.startIndex+_a8f.count-1];
var last=opts.finder.getEl(_a8c,_a90[opts.valueField]);
if(g.position().top<0&&last.position().top>0){
_a8d.show().html(g.html());
return false;
}
});
}
};
$.fn.combobox=function(_a91,_a92){
if(typeof _a91=="string"){
var _a93=$.fn.combobox.methods[_a91];
if(_a93){
return _a93(this,_a92);
}else{
return this.combo(_a91,_a92);
}
}
_a91=_a91||{};
return this.each(function(){
var _a94=$.data(this,"combobox");
if(_a94){
$.extend(_a94.options,_a91);
}else{
_a94=$.data(this,"combobox",{options:$.extend({},$.fn.combobox.defaults,$.fn.combobox.parseOptions(this),_a91),data:[]});
}
_a82(this);
if(_a94.options.data){
_a6e(this,_a94.options.data);
}else{
var data=$.fn.combobox.parseData(this);
if(data.length){
_a6e(this,data);
}
}
_a72(this);
});
};
$.fn.combobox.methods={options:function(jq){
var _a95=jq.combo("options");
return $.extend($.data(jq[0],"combobox").options,{width:_a95.width,height:_a95.height,originalValue:_a95.originalValue,disabled:_a95.disabled,readonly:_a95.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).combo("cloneFrom",from);
$.data(this,"combobox",$(from).data("combobox"));
$(this).addClass("combobox-f").attr("comboboxName",$(this).attr("textboxName"));
});
},getData:function(jq){
return $.data(jq[0],"combobox").data;
},setValues:function(jq,_a96){
return jq.each(function(){
_a62(this,_a96);
});
},setValue:function(jq,_a97){
return jq.each(function(){
_a62(this,$.isArray(_a97)?_a97:[_a97]);
});
},clear:function(jq){
return jq.each(function(){
_a62(this,[]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combobox("options");
if(opts.multiple){
$(this).combobox("setValues",opts.originalValue);
}else{
$(this).combobox("setValue",opts.originalValue);
}
});
},loadData:function(jq,data){
return jq.each(function(){
_a6e(this,data);
});
},reload:function(jq,url){
return jq.each(function(){
if(typeof url=="string"){
_a72(this,url);
}else{
if(url){
var opts=$(this).combobox("options");
opts.queryParams=url;
}
_a72(this);
}
});
},select:function(jq,_a98){
return jq.each(function(){
_a5d(this,_a98);
});
},unselect:function(jq,_a99){
return jq.each(function(){
_a63(this,_a99);
});
},scrollTo:function(jq,_a9a){
return jq.each(function(){
_a55(this,_a9a);
});
}};
$.fn.combobox.parseOptions=function(_a9b){
var t=$(_a9b);
return $.extend({},$.fn.combo.parseOptions(_a9b),$.parser.parseOptions(_a9b,["valueField","textField","groupField","groupPosition","mode","method","url",{showItemIcon:"boolean",limitToList:"boolean"}]));
};
$.fn.combobox.parseData=function(_a9c){
var data=[];
var opts=$(_a9c).combobox("options");
$(_a9c).children().each(function(){
if(this.tagName.toLowerCase()=="optgroup"){
var _a9d=$(this).attr("label");
$(this).children().each(function(){
_a9e(this,_a9d);
});
}else{
_a9e(this);
}
});
return data;
function _a9e(el,_a9f){
var t=$(el);
var row={};
row[opts.valueField]=t.attr("value")!=undefined?t.attr("value"):t.text();
row[opts.textField]=t.text();
row["iconCls"]=$.parser.parseOptions(el,["iconCls"]).iconCls;
row["selected"]=t.is(":selected");
row["disabled"]=t.is(":disabled");
if(_a9f){
opts.groupField=opts.groupField||"group";
row[opts.groupField]=_a9f;
}
data.push(row);
};
};
var _aa0=0;
var _aa1={render:function(_aa2,_aa3,data){
var _aa4=$.data(_aa2,"combobox");
var opts=_aa4.options;
_aa0++;
_aa4.itemIdPrefix="_easyui_combobox_i"+_aa0;
_aa4.groupIdPrefix="_easyui_combobox_g"+_aa0;
_aa4.groups=[];
var dd=[];
var _aa5=undefined;
for(var i=0;i<data.length;i++){
var row=data[i];
var v=row[opts.valueField]+"";
var s=row[opts.textField];
var g=row[opts.groupField];
if(g){
if(_aa5!=g){
_aa5=g;
_aa4.groups.push({value:g,startIndex:i,count:1});
dd.push("<div id=\""+(_aa4.groupIdPrefix+"_"+(_aa4.groups.length-1))+"\" class=\"combobox-group\">");
dd.push(opts.groupFormatter?opts.groupFormatter.call(_aa2,g):g);
dd.push("</div>");
}else{
_aa4.groups[_aa4.groups.length-1].count++;
}
}else{
_aa5=undefined;
}
var cls="combobox-item"+(row.disabled?" combobox-item-disabled":"")+(g?" combobox-gitem":"");
dd.push("<div id=\""+(_aa4.itemIdPrefix+"_"+i)+"\" class=\""+cls+"\">");
if(opts.showItemIcon&&row.iconCls){
dd.push("<span class=\"combobox-icon "+row.iconCls+"\"></span>");
}
dd.push(opts.formatter?opts.formatter.call(_aa2,row):s);
dd.push("</div>");
}
$(_aa3).html(dd.join(""));
}};
$.fn.combobox.defaults=$.extend({},$.fn.combo.defaults,{valueField:"value",textField:"text",groupPosition:"static",groupField:null,groupFormatter:function(_aa6){
return _aa6;
},mode:"local",method:"post",url:null,data:null,queryParams:{},showItemIcon:false,limitToList:false,view:_aa1,keyHandler:{up:function(e){
nav(this,"prev");
e.preventDefault();
},down:function(e){
nav(this,"next");
e.preventDefault();
},left:function(e){
},right:function(e){
},enter:function(e){
_a7e(this);
},query:function(q,e){
_a76(this,q);
}},inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
var _aa7=e.data.target;
var opts=$(_aa7).combobox("options");
if(opts.reversed||opts.limitToList){
if(opts.blurTimer){
clearTimeout(opts.blurTimer);
}
opts.blurTimer=setTimeout(function(){
var _aa8=$(_aa7).parent().length;
if(_aa8){
if(opts.reversed){
$(_aa7).combobox("setValues",$(_aa7).combobox("getValues"));
}else{
if(opts.limitToList){
var vv=[];
$.map($(_aa7).combobox("getValues"),function(v){
var _aa9=$.easyui.indexOfArray($(_aa7).combobox("getData"),opts.valueField,v);
if(_aa9>=0){
vv.push(v);
}
});
$(_aa7).combobox("setValues",vv);
}
}
opts.blurTimer=null;
}
},50);
}
}}),panelEvents:{mouseover:_a86,mouseout:_a87,click:_a88,scroll:_a8b},filter:function(q,row){
var opts=$(this).combobox("options");
return row[opts.textField].toLowerCase().indexOf(q.toLowerCase())>=0;
},formatter:function(row){
var opts=$(this).combobox("options");
return row[opts.textField];
},loader:function(_aaa,_aab,_aac){
var opts=$(this).combobox("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_aaa,dataType:"json",success:function(data){
_aab(data);
},error:function(){
_aac.apply(this,arguments);
}});
},loadFilter:function(data){
return data;
},finder:{getEl:function(_aad,_aae){
var _aaf=_a51(_aad,_aae);
var id=$.data(_aad,"combobox").itemIdPrefix+"_"+_aaf;
return $("#"+id);
},getGroupEl:function(_ab0,_ab1){
var _ab2=$.data(_ab0,"combobox");
var _ab3=$.easyui.indexOfArray(_ab2.groups,"value",_ab1);
var id=_ab2.groupIdPrefix+"_"+_ab3;
return $("#"+id);
},getGroup:function(_ab4,p){
var _ab5=$.data(_ab4,"combobox");
var _ab6=p.attr("id").substr(_ab5.groupIdPrefix.length+1);
return _ab5.groups[parseInt(_ab6)];
},getRow:function(_ab7,p){
var _ab8=$.data(_ab7,"combobox");
var _ab9=(p instanceof $)?p.attr("id").substr(_ab8.itemIdPrefix.length+1):_a51(_ab7,p);
return _ab8.data[parseInt(_ab9)];
}},onBeforeLoad:function(_aba){
},onLoadSuccess:function(data){
},onLoadError:function(){
},onSelect:function(_abb){
},onUnselect:function(_abc){
},onClick:function(_abd){
}});
})(jQuery);
(function($){
function _abe(_abf){
var _ac0=$.data(_abf,"combotree");
var opts=_ac0.options;
var tree=_ac0.tree;
$(_abf).addClass("combotree-f");
$(_abf).combo($.extend({},opts,{onShowPanel:function(){
if(opts.editable){
tree.tree("doFilter","");
}
opts.onShowPanel.call(this);
}}));
var _ac1=$(_abf).combo("panel");
if(!tree){
tree=$("<ul></ul>").appendTo(_ac1);
_ac0.tree=tree;
}
tree.tree($.extend({},opts,{checkbox:opts.multiple,onLoadSuccess:function(node,data){
var _ac2=$(_abf).combotree("getValues");
if(opts.multiple){
$.map(tree.tree("getChecked"),function(node){
$.easyui.addArrayItem(_ac2,node.id);
});
}
_ac7(_abf,_ac2,_ac0.remainText);
opts.onLoadSuccess.call(this,node,data);
},onClick:function(node){
if(opts.multiple){
$(this).tree(node.checked?"uncheck":"check",node.target);
}else{
$(_abf).combo("hidePanel");
}
_ac0.remainText=false;
_ac4(_abf);
opts.onClick.call(this,node);
},onCheck:function(node,_ac3){
_ac0.remainText=false;
_ac4(_abf);
opts.onCheck.call(this,node,_ac3);
}}));
};
function _ac4(_ac5){
var _ac6=$.data(_ac5,"combotree");
var opts=_ac6.options;
var tree=_ac6.tree;
var vv=[];
if(opts.multiple){
vv=$.map(tree.tree("getChecked"),function(node){
return node.id;
});
}else{
var node=tree.tree("getSelected");
if(node){
vv.push(node.id);
}
}
vv=vv.concat(opts.unselectedValues);
_ac7(_ac5,vv,_ac6.remainText);
};
function _ac7(_ac8,_ac9,_aca){
var _acb=$.data(_ac8,"combotree");
var opts=_acb.options;
var tree=_acb.tree;
var _acc=tree.tree("options");
var _acd=_acc.onBeforeCheck;
var _ace=_acc.onCheck;
var _acf=_acc.onSelect;
_acc.onBeforeCheck=_acc.onCheck=_acc.onSelect=function(){
};
if(!$.isArray(_ac9)){
_ac9=_ac9.split(opts.separator);
}
if(!opts.multiple){
_ac9=_ac9.length?[_ac9[0]]:[""];
}
var vv=$.map(_ac9,function(_ad0){
return String(_ad0);
});
tree.find("div.tree-node-selected").removeClass("tree-node-selected");
$.map(tree.tree("getChecked"),function(node){
if($.inArray(String(node.id),vv)==-1){
tree.tree("uncheck",node.target);
}
});
var ss=[];
opts.unselectedValues=[];
$.map(vv,function(v){
var node=tree.tree("find",v);
if(node){
tree.tree("check",node.target).tree("select",node.target);
ss.push(_ad1(node));
}else{
ss.push(_ad2(v,opts.mappingRows)||v);
opts.unselectedValues.push(v);
}
});
if(opts.multiple){
$.map(tree.tree("getChecked"),function(node){
var id=String(node.id);
if($.inArray(id,vv)==-1){
vv.push(id);
ss.push(_ad1(node));
}
});
}
_acc.onBeforeCheck=_acd;
_acc.onCheck=_ace;
_acc.onSelect=_acf;
if(!_aca){
var s=ss.join(opts.separator);
if($(_ac8).combo("getText")!=s){
$(_ac8).combo("setText",s);
}
}
$(_ac8).combo("setValues",vv);
function _ad2(_ad3,a){
var item=$.easyui.getArrayItem(a,"id",_ad3);
return item?_ad1(item):undefined;
};
function _ad1(node){
return node[opts.textField||""]||node.text;
};
};
function _ad4(_ad5,q){
var _ad6=$.data(_ad5,"combotree");
var opts=_ad6.options;
var tree=_ad6.tree;
_ad6.remainText=true;
tree.tree("doFilter",opts.multiple?q.split(opts.separator):q);
};
function _ad7(_ad8){
var _ad9=$.data(_ad8,"combotree");
_ad9.remainText=false;
$(_ad8).combotree("setValues",$(_ad8).combotree("getValues"));
$(_ad8).combotree("hidePanel");
};
$.fn.combotree=function(_ada,_adb){
if(typeof _ada=="string"){
var _adc=$.fn.combotree.methods[_ada];
if(_adc){
return _adc(this,_adb);
}else{
return this.combo(_ada,_adb);
}
}
_ada=_ada||{};
return this.each(function(){
var _add=$.data(this,"combotree");
if(_add){
$.extend(_add.options,_ada);
}else{
$.data(this,"combotree",{options:$.extend({},$.fn.combotree.defaults,$.fn.combotree.parseOptions(this),_ada)});
}
_abe(this);
});
};
$.fn.combotree.methods={options:function(jq){
var _ade=jq.combo("options");
return $.extend($.data(jq[0],"combotree").options,{width:_ade.width,height:_ade.height,originalValue:_ade.originalValue,disabled:_ade.disabled,readonly:_ade.readonly});
},clone:function(jq,_adf){
var t=jq.combo("clone",_adf);
t.data("combotree",{options:$.extend(true,{},jq.combotree("options")),tree:jq.combotree("tree")});
return t;
},tree:function(jq){
return $.data(jq[0],"combotree").tree;
},loadData:function(jq,data){
return jq.each(function(){
var opts=$.data(this,"combotree").options;
opts.data=data;
var tree=$.data(this,"combotree").tree;
tree.tree("loadData",data);
});
},reload:function(jq,url){
return jq.each(function(){
var opts=$.data(this,"combotree").options;
var tree=$.data(this,"combotree").tree;
if(url){
opts.url=url;
}
tree.tree({url:opts.url});
});
},setValues:function(jq,_ae0){
return jq.each(function(){
var opts=$(this).combotree("options");
if($.isArray(_ae0)){
_ae0=$.map(_ae0,function(_ae1){
if(_ae1&&typeof _ae1=="object"){
$.easyui.addArrayItem(opts.mappingRows,"id",_ae1);
return _ae1.id;
}else{
return _ae1;
}
});
}
_ac7(this,_ae0);
});
},setValue:function(jq,_ae2){
return jq.each(function(){
$(this).combotree("setValues",$.isArray(_ae2)?_ae2:[_ae2]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combotree("setValues",[]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combotree("options");
if(opts.multiple){
$(this).combotree("setValues",opts.originalValue);
}else{
$(this).combotree("setValue",opts.originalValue);
}
});
}};
$.fn.combotree.parseOptions=function(_ae3){
return $.extend({},$.fn.combo.parseOptions(_ae3),$.fn.tree.parseOptions(_ae3));
};
$.fn.combotree.defaults=$.extend({},$.fn.combo.defaults,$.fn.tree.defaults,{editable:false,textField:null,unselectedValues:[],mappingRows:[],keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_ad7(this);
},query:function(q,e){
_ad4(this,q);
}}});
})(jQuery);
(function($){
function _ae4(_ae5){
var _ae6=$.data(_ae5,"combogrid");
var opts=_ae6.options;
var grid=_ae6.grid;
$(_ae5).addClass("combogrid-f").combo($.extend({},opts,{onShowPanel:function(){
_afb(this,$(this).combogrid("getValues"),true);
var p=$(this).combogrid("panel");
var _ae7=p.outerHeight()-p.height();
var _ae8=p._size("minHeight");
var _ae9=p._size("maxHeight");
var dg=$(this).combogrid("grid");
dg.datagrid("resize",{width:"100%",height:(isNaN(parseInt(opts.panelHeight))?"auto":"100%"),minHeight:(_ae8?_ae8-_ae7:""),maxHeight:(_ae9?_ae9-_ae7:"")});
var row=dg.datagrid("getSelected");
if(row){
dg.datagrid("scrollTo",dg.datagrid("getRowIndex",row));
}
opts.onShowPanel.call(this);
}}));
var _aea=$(_ae5).combo("panel");
if(!grid){
grid=$("<table></table>").appendTo(_aea);
_ae6.grid=grid;
}
grid.datagrid($.extend({},opts,{border:false,singleSelect:(!opts.multiple),onLoadSuccess:_aeb,onClickRow:_aec,onSelect:_aed("onSelect"),onUnselect:_aed("onUnselect"),onSelectAll:_aed("onSelectAll"),onUnselectAll:_aed("onUnselectAll")}));
function _aee(dg){
return $(dg).closest(".combo-panel").panel("options").comboTarget||_ae5;
};
function _aeb(data){
var _aef=_aee(this);
var _af0=$(_aef).data("combogrid");
var opts=_af0.options;
var _af1=$(_aef).combo("getValues");
_afb(_aef,_af1,_af0.remainText);
opts.onLoadSuccess.call(this,data);
};
function _aec(_af2,row){
var _af3=_aee(this);
var _af4=$(_af3).data("combogrid");
var opts=_af4.options;
_af4.remainText=false;
_af5.call(this);
if(!opts.multiple){
$(_af3).combo("hidePanel");
}
opts.onClickRow.call(this,_af2,row);
};
function _aed(_af6){
return function(_af7,row){
var _af8=_aee(this);
var opts=$(_af8).combogrid("options");
if(_af6=="onUnselectAll"){
if(opts.multiple){
_af5.call(this);
}
}else{
_af5.call(this);
}
opts[_af6].call(this,_af7,row);
};
};
function _af5(){
var dg=$(this);
var _af9=_aee(dg);
var _afa=$(_af9).data("combogrid");
var opts=_afa.options;
var vv=$.map(dg.datagrid("getSelections"),function(row){
return row[opts.idField];
});
vv=vv.concat(opts.unselectedValues);
_afb(_af9,vv,_afa.remainText);
};
};
function nav(_afc,dir){
var _afd=$.data(_afc,"combogrid");
var opts=_afd.options;
var grid=_afd.grid;
var _afe=grid.datagrid("getRows").length;
if(!_afe){
return;
}
var tr=opts.finder.getTr(grid[0],null,"highlight");
if(!tr.length){
tr=opts.finder.getTr(grid[0],null,"selected");
}
var _aff;
if(!tr.length){
_aff=(dir=="next"?0:_afe-1);
}else{
var _aff=parseInt(tr.attr("datagrid-row-index"));
_aff+=(dir=="next"?1:-1);
if(_aff<0){
_aff=_afe-1;
}
if(_aff>=_afe){
_aff=0;
}
}
grid.datagrid("highlightRow",_aff);
if(opts.selectOnNavigation){
_afd.remainText=false;
grid.datagrid("selectRow",_aff);
}
};
function _afb(_b00,_b01,_b02){
var _b03=$.data(_b00,"combogrid");
var opts=_b03.options;
var grid=_b03.grid;
var _b04=$(_b00).combo("getValues");
var _b05=$(_b00).combo("options");
var _b06=_b05.onChange;
_b05.onChange=function(){
};
var _b07=grid.datagrid("options");
var _b08=_b07.onSelect;
var _b09=_b07.onUnselectAll;
_b07.onSelect=_b07.onUnselectAll=function(){
};
if(!$.isArray(_b01)){
_b01=_b01.split(opts.separator);
}
if(!opts.multiple){
_b01=_b01.length?[_b01[0]]:[""];
}
var vv=$.map(_b01,function(_b0a){
return String(_b0a);
});
vv=$.grep(vv,function(v,_b0b){
return _b0b===$.inArray(v,vv);
});
var _b0c=$.grep(grid.datagrid("getSelections"),function(row,_b0d){
return $.inArray(String(row[opts.idField]),vv)>=0;
});
grid.datagrid("clearSelections");
grid.data("datagrid").selectedRows=_b0c;
var ss=[];
opts.unselectedValues=[];
$.map(vv,function(v){
var _b0e=grid.datagrid("getRowIndex",v);
if(_b0e>=0){
grid.datagrid("selectRow",_b0e);
}else{
opts.unselectedValues.push(v);
}
ss.push(_b0f(v,grid.datagrid("getRows"))||_b0f(v,_b0c)||_b0f(v,opts.mappingRows)||v);
});
$(_b00).combo("setValues",_b04);
_b05.onChange=_b06;
_b07.onSelect=_b08;
_b07.onUnselectAll=_b09;
if(!_b02){
var s=ss.join(opts.separator);
if($(_b00).combo("getText")!=s){
$(_b00).combo("setText",s);
}
}
$(_b00).combo("setValues",_b01);
function _b0f(_b10,a){
var item=$.easyui.getArrayItem(a,opts.idField,_b10);
return item?item[opts.textField]:undefined;
};
};
function _b11(_b12,q){
var _b13=$.data(_b12,"combogrid");
var opts=_b13.options;
var grid=_b13.grid;
_b13.remainText=true;
var qq=opts.multiple?q.split(opts.separator):[q];
qq=$.grep(qq,function(q){
return $.trim(q)!="";
});
if(opts.mode=="remote"){
_b14(qq);
grid.datagrid("load",$.extend({},opts.queryParams,{q:q}));
}else{
grid.datagrid("highlightRow",-1);
var rows=grid.datagrid("getRows");
var vv=[];
$.map(qq,function(q){
q=$.trim(q);
var _b15=q;
_b16(opts.mappingRows,q);
_b16(grid.datagrid("getSelections"),q);
var _b17=_b16(rows,q);
if(_b17>=0){
if(opts.reversed){
grid.datagrid("highlightRow",_b17);
}
}else{
$.map(rows,function(row,i){
if(opts.filter.call(_b12,q,row)){
grid.datagrid("highlightRow",i);
}
});
}
});
_b14(vv);
}
function _b16(rows,q){
for(var i=0;i<rows.length;i++){
var row=rows[i];
if((row[opts.textField]||"").toLowerCase()==q.toLowerCase()){
vv.push(row[opts.idField]);
return i;
}
}
return -1;
};
function _b14(vv){
if(!opts.reversed){
_afb(_b12,vv,true);
}
};
};
function _b18(_b19){
var _b1a=$.data(_b19,"combogrid");
var opts=_b1a.options;
var grid=_b1a.grid;
var tr=opts.finder.getTr(grid[0],null,"highlight");
_b1a.remainText=false;
if(tr.length){
var _b1b=parseInt(tr.attr("datagrid-row-index"));
if(opts.multiple){
if(tr.hasClass("datagrid-row-selected")){
grid.datagrid("unselectRow",_b1b);
}else{
grid.datagrid("selectRow",_b1b);
}
}else{
grid.datagrid("selectRow",_b1b);
}
}
var vv=[];
$.map(grid.datagrid("getSelections"),function(row){
vv.push(row[opts.idField]);
});
$.map(opts.unselectedValues,function(v){
if($.easyui.indexOfArray(opts.mappingRows,opts.idField,v)>=0){
$.easyui.addArrayItem(vv,v);
}
});
$(_b19).combogrid("setValues",vv);
if(!opts.multiple){
$(_b19).combogrid("hidePanel");
}
};
$.fn.combogrid=function(_b1c,_b1d){
if(typeof _b1c=="string"){
var _b1e=$.fn.combogrid.methods[_b1c];
if(_b1e){
return _b1e(this,_b1d);
}else{
return this.combo(_b1c,_b1d);
}
}
_b1c=_b1c||{};
return this.each(function(){
var _b1f=$.data(this,"combogrid");
if(_b1f){
$.extend(_b1f.options,_b1c);
}else{
_b1f=$.data(this,"combogrid",{options:$.extend({},$.fn.combogrid.defaults,$.fn.combogrid.parseOptions(this),_b1c)});
}
_ae4(this);
});
};
$.fn.combogrid.methods={options:function(jq){
var _b20=jq.combo("options");
return $.extend($.data(jq[0],"combogrid").options,{width:_b20.width,height:_b20.height,originalValue:_b20.originalValue,disabled:_b20.disabled,readonly:_b20.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).combo("cloneFrom",from);
$.data(this,"combogrid",{options:$.extend(true,{cloned:true},$(from).combogrid("options")),combo:$(this).next(),panel:$(from).combo("panel"),grid:$(from).combogrid("grid")});
});
},grid:function(jq){
return $.data(jq[0],"combogrid").grid;
},setValues:function(jq,_b21){
return jq.each(function(){
var opts=$(this).combogrid("options");
if($.isArray(_b21)){
_b21=$.map(_b21,function(_b22){
if(_b22&&typeof _b22=="object"){
$.easyui.addArrayItem(opts.mappingRows,opts.idField,_b22);
return _b22[opts.idField];
}else{
return _b22;
}
});
}
_afb(this,_b21);
});
},setValue:function(jq,_b23){
return jq.each(function(){
$(this).combogrid("setValues",$.isArray(_b23)?_b23:[_b23]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combogrid("setValues",[]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combogrid("options");
if(opts.multiple){
$(this).combogrid("setValues",opts.originalValue);
}else{
$(this).combogrid("setValue",opts.originalValue);
}
});
}};
$.fn.combogrid.parseOptions=function(_b24){
var t=$(_b24);
return $.extend({},$.fn.combo.parseOptions(_b24),$.fn.datagrid.parseOptions(_b24),$.parser.parseOptions(_b24,["idField","textField","mode"]));
};
$.fn.combogrid.defaults=$.extend({},$.fn.combo.defaults,$.fn.datagrid.defaults,{loadMsg:null,idField:null,textField:null,unselectedValues:[],mappingRows:[],mode:"local",keyHandler:{up:function(e){
nav(this,"prev");
e.preventDefault();
},down:function(e){
nav(this,"next");
e.preventDefault();
},left:function(e){
},right:function(e){
},enter:function(e){
_b18(this);
},query:function(q,e){
_b11(this,q);
}},inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
var _b25=e.data.target;
var opts=$(_b25).combogrid("options");
if(opts.reversed){
$(_b25).combogrid("setValues",$(_b25).combogrid("getValues"));
}
}}),filter:function(q,row){
var opts=$(this).combogrid("options");
return (row[opts.textField]||"").toLowerCase().indexOf(q.toLowerCase())>=0;
}});
})(jQuery);
(function($){
function _b26(_b27){
var _b28=$.data(_b27,"combotreegrid");
var opts=_b28.options;
$(_b27).addClass("combotreegrid-f").combo($.extend({},opts,{onShowPanel:function(){
var p=$(this).combotreegrid("panel");
var _b29=p.outerHeight()-p.height();
var _b2a=p._size("minHeight");
var _b2b=p._size("maxHeight");
var dg=$(this).combotreegrid("grid");
dg.treegrid("resize",{width:"100%",height:(isNaN(parseInt(opts.panelHeight))?"auto":"100%"),minHeight:(_b2a?_b2a-_b29:""),maxHeight:(_b2b?_b2b-_b29:"")});
var row=dg.treegrid("getSelected");
if(row){
dg.treegrid("scrollTo",row[opts.idField]);
}
opts.onShowPanel.call(this);
}}));
if(!_b28.grid){
var _b2c=$(_b27).combo("panel");
_b28.grid=$("<table></table>").appendTo(_b2c);
}
_b28.grid.treegrid($.extend({},opts,{border:false,checkbox:opts.multiple,onLoadSuccess:function(row,data){
var _b2d=$(_b27).combotreegrid("getValues");
if(opts.multiple){
$.map($(this).treegrid("getCheckedNodes"),function(row){
$.easyui.addArrayItem(_b2d,row[opts.idField]);
});
}
_b32(_b27,_b2d);
opts.onLoadSuccess.call(this,row,data);
_b28.remainText=false;
},onClickRow:function(row){
if(opts.multiple){
$(this).treegrid(row.checked?"uncheckNode":"checkNode",row[opts.idField]);
$(this).treegrid("unselect",row[opts.idField]);
}else{
$(_b27).combo("hidePanel");
}
_b2f(_b27);
opts.onClickRow.call(this,row);
},onCheckNode:function(row,_b2e){
_b2f(_b27);
opts.onCheckNode.call(this,row,_b2e);
}}));
};
function _b2f(_b30){
var _b31=$.data(_b30,"combotreegrid");
var opts=_b31.options;
var grid=_b31.grid;
var vv=[];
if(opts.multiple){
vv=$.map(grid.treegrid("getCheckedNodes"),function(row){
return row[opts.idField];
});
}else{
var row=grid.treegrid("getSelected");
if(row){
vv.push(row[opts.idField]);
}
}
vv=vv.concat(opts.unselectedValues);
_b32(_b30,vv);
};
function _b32(_b33,_b34){
var _b35=$.data(_b33,"combotreegrid");
var opts=_b35.options;
var grid=_b35.grid;
if(!$.isArray(_b34)){
_b34=_b34.split(opts.separator);
}
if(!opts.multiple){
_b34=_b34.length?[_b34[0]]:[""];
}
var vv=$.map(_b34,function(_b36){
return String(_b36);
});
vv=$.grep(vv,function(v,_b37){
return _b37===$.inArray(v,vv);
});
var _b38=grid.treegrid("getSelected");
if(_b38){
grid.treegrid("unselect",_b38[opts.idField]);
}
$.map(grid.treegrid("getCheckedNodes"),function(row){
if($.inArray(String(row[opts.idField]),vv)==-1){
grid.treegrid("uncheckNode",row[opts.idField]);
}
});
var ss=[];
opts.unselectedValues=[];
$.map(vv,function(v){
var row=grid.treegrid("find",v);
if(row){
if(opts.multiple){
grid.treegrid("checkNode",v);
}else{
grid.treegrid("select",v);
}
ss.push(_b39(row));
}else{
ss.push(_b3a(v,opts.mappingRows)||v);
opts.unselectedValues.push(v);
}
});
if(opts.multiple){
$.map(grid.treegrid("getCheckedNodes"),function(row){
var id=String(row[opts.idField]);
if($.inArray(id,vv)==-1){
vv.push(id);
ss.push(_b39(row));
}
});
}
if(!_b35.remainText){
var s=ss.join(opts.separator);
if($(_b33).combo("getText")!=s){
$(_b33).combo("setText",s);
}
}
$(_b33).combo("setValues",vv);
function _b3a(_b3b,a){
var item=$.easyui.getArrayItem(a,opts.idField,_b3b);
return item?_b39(item):undefined;
};
function _b39(row){
return row[opts.textField||""]||row[opts.treeField];
};
};
function _b3c(_b3d,q){
var _b3e=$.data(_b3d,"combotreegrid");
var opts=_b3e.options;
var grid=_b3e.grid;
_b3e.remainText=true;
grid.treegrid("clearSelections").treegrid("clearChecked").treegrid("highlightRow",-1);
if(opts.mode=="remote"){
$(_b3d).combotreegrid("clear");
grid.treegrid("load",$.extend({},opts.queryParams,{q:q}));
}else{
if(q){
var data=grid.treegrid("getData");
var vv=[];
var qq=opts.multiple?q.split(opts.separator):[q];
$.map(qq,function(q){
q=$.trim(q);
if(q){
var v=undefined;
$.easyui.forEach(data,true,function(row){
if(q.toLowerCase()==String(row[opts.treeField]).toLowerCase()){
v=row[opts.idField];
return false;
}else{
if(opts.filter.call(_b3d,q,row)){
grid.treegrid("expandTo",row[opts.idField]);
grid.treegrid("highlightRow",row[opts.idField]);
return false;
}
}
});
if(v==undefined){
$.easyui.forEach(opts.mappingRows,false,function(row){
if(q.toLowerCase()==String(row[opts.treeField])){
v=row[opts.idField];
return false;
}
});
}
if(v!=undefined){
vv.push(v);
}
}
});
_b32(_b3d,vv);
_b3e.remainText=false;
}
}
};
function _b3f(_b40){
_b2f(_b40);
};
$.fn.combotreegrid=function(_b41,_b42){
if(typeof _b41=="string"){
var _b43=$.fn.combotreegrid.methods[_b41];
if(_b43){
return _b43(this,_b42);
}else{
return this.combo(_b41,_b42);
}
}
_b41=_b41||{};
return this.each(function(){
var _b44=$.data(this,"combotreegrid");
if(_b44){
$.extend(_b44.options,_b41);
}else{
_b44=$.data(this,"combotreegrid",{options:$.extend({},$.fn.combotreegrid.defaults,$.fn.combotreegrid.parseOptions(this),_b41)});
}
_b26(this);
});
};
$.fn.combotreegrid.methods={options:function(jq){
var _b45=jq.combo("options");
return $.extend($.data(jq[0],"combotreegrid").options,{width:_b45.width,height:_b45.height,originalValue:_b45.originalValue,disabled:_b45.disabled,readonly:_b45.readonly});
},grid:function(jq){
return $.data(jq[0],"combotreegrid").grid;
},setValues:function(jq,_b46){
return jq.each(function(){
var opts=$(this).combotreegrid("options");
if($.isArray(_b46)){
_b46=$.map(_b46,function(_b47){
if(_b47&&typeof _b47=="object"){
$.easyui.addArrayItem(opts.mappingRows,opts.idField,_b47);
return _b47[opts.idField];
}else{
return _b47;
}
});
}
_b32(this,_b46);
});
},setValue:function(jq,_b48){
return jq.each(function(){
$(this).combotreegrid("setValues",$.isArray(_b48)?_b48:[_b48]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combotreegrid("setValues",[]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combotreegrid("options");
if(opts.multiple){
$(this).combotreegrid("setValues",opts.originalValue);
}else{
$(this).combotreegrid("setValue",opts.originalValue);
}
});
}};
$.fn.combotreegrid.parseOptions=function(_b49){
var t=$(_b49);
return $.extend({},$.fn.combo.parseOptions(_b49),$.fn.treegrid.parseOptions(_b49),$.parser.parseOptions(_b49,["mode",{limitToGrid:"boolean"}]));
};
$.fn.combotreegrid.defaults=$.extend({},$.fn.combo.defaults,$.fn.treegrid.defaults,{editable:false,singleSelect:true,limitToGrid:false,unselectedValues:[],mappingRows:[],mode:"local",textField:null,keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_b3f(this);
},query:function(q,e){
_b3c(this,q);
}},inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
var _b4a=e.data.target;
var opts=$(_b4a).combotreegrid("options");
if(opts.limitToGrid){
_b3f(_b4a);
}
}}),filter:function(q,row){
var opts=$(this).combotreegrid("options");
return (row[opts.treeField]||"").toLowerCase().indexOf(q.toLowerCase())>=0;
}});
})(jQuery);
(function($){
function _b4b(_b4c){
var _b4d=$.data(_b4c,"tagbox");
var opts=_b4d.options;
$(_b4c).addClass("tagbox-f").combobox($.extend({},opts,{cls:"tagbox",reversed:true,onChange:function(_b4e,_b4f){
_b50();
$(this).combobox("hidePanel");
opts.onChange.call(_b4c,_b4e,_b4f);
},onResizing:function(_b51,_b52){
var _b53=$(this).combobox("textbox");
var tb=$(this).data("textbox").textbox;
tb.css({height:"",paddingLeft:_b53.css("marginLeft"),paddingRight:_b53.css("marginRight")});
_b53.css("margin",0);
tb._size({width:opts.width},$(this).parent());
_b66(_b4c);
_b58(this);
opts.onResizing.call(_b4c,_b51,_b52);
},onLoadSuccess:function(data){
_b50();
opts.onLoadSuccess.call(_b4c,data);
}}));
_b50();
_b66(_b4c);
function _b50(){
$(_b4c).next().find(".tagbox-label").remove();
var _b54=$(_b4c).tagbox("textbox");
var ss=[];
$.map($(_b4c).tagbox("getValues"),function(_b55,_b56){
var row=opts.finder.getRow(_b4c,_b55);
var text=opts.tagFormatter.call(_b4c,_b55,row);
var cs={};
var css=opts.tagStyler.call(_b4c,_b55,row)||"";
if(typeof css=="string"){
cs={s:css};
}else{
cs={c:css["class"]||"",s:css["style"]||""};
}
var _b57=$("<span class=\"tagbox-label\"></span>").insertBefore(_b54).html(text);
_b57.attr("tagbox-index",_b56);
_b57.attr("style",cs.s).addClass(cs.c);
$("<a href=\"javascript:;\" class=\"tagbox-remove\"></a>").appendTo(_b57);
});
_b58(_b4c);
$(_b4c).combobox("setText","");
};
};
function _b58(_b59,_b5a){
var span=$(_b59).next();
var _b5b=_b5a?$(_b5a):span.find(".tagbox-label");
if(_b5b.length){
var _b5c=$(_b59).tagbox("textbox");
var _b5d=$(_b5b[0]);
var _b5e=_b5d.outerHeight(true)-_b5d.outerHeight();
var _b5f=_b5c.outerHeight()-_b5e*2;
_b5b.css({height:_b5f+"px",lineHeight:_b5f+"px"});
var _b60=span.find(".textbox-addon").css("height","100%");
_b60.find(".textbox-icon").css("height","100%");
span.find(".textbox-button").linkbutton("resize",{height:"100%"});
}
};
function _b61(_b62){
var span=$(_b62).next();
span.unbind(".tagbox").bind("click.tagbox",function(e){
var opts=$(_b62).tagbox("options");
if(opts.disabled||opts.readonly){
return;
}
if($(e.target).hasClass("tagbox-remove")){
var _b63=parseInt($(e.target).parent().attr("tagbox-index"));
var _b64=$(_b62).tagbox("getValues");
if(opts.onBeforeRemoveTag.call(_b62,_b64[_b63])==false){
return;
}
opts.onRemoveTag.call(_b62,_b64[_b63]);
_b64.splice(_b63,1);
$(_b62).tagbox("setValues",_b64);
}else{
var _b65=$(e.target).closest(".tagbox-label");
if(_b65.length){
var _b63=parseInt(_b65.attr("tagbox-index"));
var _b64=$(_b62).tagbox("getValues");
opts.onClickTag.call(_b62,_b64[_b63]);
}
}
$(this).find(".textbox-text").focus();
}).bind("keyup.tagbox",function(e){
_b66(_b62);
}).bind("mouseover.tagbox",function(e){
if($(e.target).closest(".textbox-button,.textbox-addon,.tagbox-label").length){
$(this).triggerHandler("mouseleave");
}else{
$(this).find(".textbox-text").triggerHandler("mouseenter");
}
}).bind("mouseleave.tagbox",function(e){
$(this).find(".textbox-text").triggerHandler("mouseleave");
});
};
function _b66(_b67){
var opts=$(_b67).tagbox("options");
var _b68=$(_b67).tagbox("textbox");
var span=$(_b67).next();
var tmp=$("<span></span>").appendTo("body");
tmp.attr("style",_b68.attr("style"));
tmp.css({position:"absolute",top:-9999,left:-9999,width:"auto",fontFamily:_b68.css("fontFamily"),fontSize:_b68.css("fontSize"),fontWeight:_b68.css("fontWeight"),whiteSpace:"nowrap"});
var _b69=_b6a(_b68.val());
var _b6b=_b6a(opts.prompt||"");
tmp.remove();
var _b6c=Math.min(Math.max(_b69,_b6b)+20,span.width());
_b68._outerWidth(_b6c);
span.find(".textbox-button").linkbutton("resize",{height:"100%"});
function _b6a(val){
var s=val.replace(/&/g,"&amp;").replace(/\s/g," ").replace(/</g,"&lt;").replace(/>/g,"&gt;");
tmp.html(s);
return tmp.outerWidth();
};
};
function _b6d(_b6e){
var t=$(_b6e);
var opts=t.tagbox("options");
if(opts.limitToList){
var _b6f=t.tagbox("panel");
var item=_b6f.children("div.combobox-item-hover");
if(item.length){
item.removeClass("combobox-item-hover");
var row=opts.finder.getRow(_b6e,item);
var _b70=row[opts.valueField];
$(_b6e).tagbox(item.hasClass("combobox-item-selected")?"unselect":"select",_b70);
}
$(_b6e).tagbox("hidePanel");
}else{
var v=$.trim($(_b6e).tagbox("getText"));
if(v!==""){
var _b71=$(_b6e).tagbox("getValues");
_b71.push(v);
$(_b6e).tagbox("setValues",_b71);
}
}
};
function _b72(_b73,_b74){
$(_b73).combobox("setText","");
_b66(_b73);
$(_b73).combobox("setValues",_b74);
$(_b73).combobox("setText","");
$(_b73).tagbox("validate");
};
$.fn.tagbox=function(_b75,_b76){
if(typeof _b75=="string"){
var _b77=$.fn.tagbox.methods[_b75];
if(_b77){
return _b77(this,_b76);
}else{
return this.combobox(_b75,_b76);
}
}
_b75=_b75||{};
return this.each(function(){
var _b78=$.data(this,"tagbox");
if(_b78){
$.extend(_b78.options,_b75);
}else{
$.data(this,"tagbox",{options:$.extend({},$.fn.tagbox.defaults,$.fn.tagbox.parseOptions(this),_b75)});
}
_b4b(this);
_b61(this);
});
};
$.fn.tagbox.methods={options:function(jq){
var _b79=jq.combobox("options");
return $.extend($.data(jq[0],"tagbox").options,{width:_b79.width,height:_b79.height,originalValue:_b79.originalValue,disabled:_b79.disabled,readonly:_b79.readonly});
},setValues:function(jq,_b7a){
return jq.each(function(){
_b72(this,_b7a);
});
},reset:function(jq){
return jq.each(function(){
$(this).combobox("reset").combobox("setText","");
});
}};
$.fn.tagbox.parseOptions=function(_b7b){
return $.extend({},$.fn.combobox.parseOptions(_b7b),$.parser.parseOptions(_b7b,[]));
};
$.fn.tagbox.defaults=$.extend({},$.fn.combobox.defaults,{hasDownArrow:false,multiple:true,reversed:true,selectOnNavigation:false,tipOptions:$.extend({},$.fn.textbox.defaults.tipOptions,{showDelay:200}),val:function(_b7c){
var vv=$(_b7c).parent().prev().tagbox("getValues");
if($(_b7c).is(":focus")){
vv.push($(_b7c).val());
}
return vv.join(",");
},inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
var _b7d=e.data.target;
var opts=$(_b7d).tagbox("options");
if(opts.limitToList){
_b6d(_b7d);
}
}}),keyHandler:$.extend({},$.fn.combobox.defaults.keyHandler,{enter:function(e){
_b6d(this);
},query:function(q,e){
var opts=$(this).tagbox("options");
if(opts.limitToList){
$.fn.combobox.defaults.keyHandler.query.call(this,q,e);
}else{
$(this).combobox("hidePanel");
}
}}),tagFormatter:function(_b7e,row){
var opts=$(this).tagbox("options");
return row?row[opts.textField]:_b7e;
},tagStyler:function(_b7f,row){
return "";
},onClickTag:function(_b80){
},onBeforeRemoveTag:function(_b81){
},onRemoveTag:function(_b82){
}});
})(jQuery);
(function($){
function _b83(_b84){
var _b85=$.data(_b84,"datebox");
var opts=_b85.options;
$(_b84).addClass("datebox-f").combo($.extend({},opts,{onShowPanel:function(){
_b86(this);
_b87(this);
_b88(this);
_b96(this,$(this).datebox("getText"),true);
opts.onShowPanel.call(this);
}}));
if(!_b85.calendar){
var _b89=$(_b84).combo("panel").css("overflow","hidden");
_b89.panel("options").onBeforeDestroy=function(){
var c=$(this).find(".calendar-shared");
if(c.length){
c.insertBefore(c[0].pholder);
}
};
var cc=$("<div class=\"datebox-calendar-inner\"></div>").prependTo(_b89);
if(opts.sharedCalendar){
var c=$(opts.sharedCalendar);
if(!c[0].pholder){
c[0].pholder=$("<div class=\"calendar-pholder\" style=\"display:none\"></div>").insertAfter(c);
}
c.addClass("calendar-shared").appendTo(cc);
if(!c.hasClass("calendar")){
c.calendar();
}
_b85.calendar=c;
}else{
_b85.calendar=$("<div></div>").appendTo(cc).calendar();
}
$.extend(_b85.calendar.calendar("options"),{fit:true,border:false,onSelect:function(date){
var _b8a=this.target;
var opts=$(_b8a).datebox("options");
_b96(_b8a,opts.formatter.call(_b8a,date));
$(_b8a).combo("hidePanel");
opts.onSelect.call(_b8a,date);
}});
}
$(_b84).combo("textbox").parent().addClass("datebox");
$(_b84).datebox("initValue",opts.value);
function _b86(_b8b){
var opts=$(_b8b).datebox("options");
var _b8c=$(_b8b).combo("panel");
_b8c.unbind(".datebox").bind("click.datebox",function(e){
if($(e.target).hasClass("datebox-button-a")){
var _b8d=parseInt($(e.target).attr("datebox-button-index"));
opts.buttons[_b8d].handler.call(e.target,_b8b);
}
});
};
function _b87(_b8e){
var _b8f=$(_b8e).combo("panel");
if(_b8f.children("div.datebox-button").length){
return;
}
var _b90=$("<div class=\"datebox-button\"><table cellspacing=\"0\" cellpadding=\"0\" style=\"width:100%\"><tr></tr></table></div>").appendTo(_b8f);
var tr=_b90.find("tr");
for(var i=0;i<opts.buttons.length;i++){
var td=$("<td></td>").appendTo(tr);
var btn=opts.buttons[i];
var t=$("<a class=\"datebox-button-a\" href=\"javascript:;\"></a>").html($.isFunction(btn.text)?btn.text(_b8e):btn.text).appendTo(td);
t.attr("datebox-button-index",i);
}
tr.find("td").css("width",(100/opts.buttons.length)+"%");
};
function _b88(_b91){
var _b92=$(_b91).combo("panel");
var cc=_b92.children("div.datebox-calendar-inner");
_b92.children()._outerWidth(_b92.width());
_b85.calendar.appendTo(cc);
_b85.calendar[0].target=_b91;
if(opts.panelHeight!="auto"){
var _b93=_b92.height();
_b92.children().not(cc).each(function(){
_b93-=$(this).outerHeight();
});
cc._outerHeight(_b93);
}
_b85.calendar.calendar("resize");
};
};
function _b94(_b95,q){
_b96(_b95,q,true);
};
function _b97(_b98){
var _b99=$.data(_b98,"datebox");
var opts=_b99.options;
var _b9a=_b99.calendar.calendar("options").current;
if(_b9a){
_b96(_b98,opts.formatter.call(_b98,_b9a));
$(_b98).combo("hidePanel");
}
};
function _b96(_b9b,_b9c,_b9d){
var _b9e=$.data(_b9b,"datebox");
var opts=_b9e.options;
var _b9f=_b9e.calendar;
_b9f.calendar("moveTo",opts.parser.call(_b9b,_b9c));
if(_b9d){
$(_b9b).combo("setValue",_b9c);
}else{
if(_b9c){
_b9c=opts.formatter.call(_b9b,_b9f.calendar("options").current);
}
$(_b9b).combo("setText",_b9c).combo("setValue",_b9c);
}
};
$.fn.datebox=function(_ba0,_ba1){
if(typeof _ba0=="string"){
var _ba2=$.fn.datebox.methods[_ba0];
if(_ba2){
return _ba2(this,_ba1);
}else{
return this.combo(_ba0,_ba1);
}
}
_ba0=_ba0||{};
return this.each(function(){
var _ba3=$.data(this,"datebox");
if(_ba3){
$.extend(_ba3.options,_ba0);
}else{
$.data(this,"datebox",{options:$.extend({},$.fn.datebox.defaults,$.fn.datebox.parseOptions(this),_ba0)});
}
_b83(this);
});
};
$.fn.datebox.methods={options:function(jq){
var _ba4=jq.combo("options");
return $.extend($.data(jq[0],"datebox").options,{width:_ba4.width,height:_ba4.height,originalValue:_ba4.originalValue,disabled:_ba4.disabled,readonly:_ba4.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).combo("cloneFrom",from);
$.data(this,"datebox",{options:$.extend(true,{},$(from).datebox("options")),calendar:$(from).datebox("calendar")});
$(this).addClass("datebox-f");
});
},calendar:function(jq){
return $.data(jq[0],"datebox").calendar;
},initValue:function(jq,_ba5){
return jq.each(function(){
var opts=$(this).datebox("options");
var _ba6=opts.value;
if(_ba6){
_ba6=opts.formatter.call(this,opts.parser.call(this,_ba6));
}
$(this).combo("initValue",_ba6).combo("setText",_ba6);
});
},setValue:function(jq,_ba7){
return jq.each(function(){
_b96(this,_ba7);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).datebox("options");
$(this).datebox("setValue",opts.originalValue);
});
}};
$.fn.datebox.parseOptions=function(_ba8){
return $.extend({},$.fn.combo.parseOptions(_ba8),$.parser.parseOptions(_ba8,["sharedCalendar"]));
};
$.fn.datebox.defaults=$.extend({},$.fn.combo.defaults,{panelWidth:180,panelHeight:"auto",sharedCalendar:null,keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_b97(this);
},query:function(q,e){
_b94(this,q);
}},currentText:"Today",closeText:"Close",okText:"Ok",buttons:[{text:function(_ba9){
return $(_ba9).datebox("options").currentText;
},handler:function(_baa){
var now=new Date();
$(_baa).datebox("calendar").calendar({year:now.getFullYear(),month:now.getMonth()+1,current:new Date(now.getFullYear(),now.getMonth(),now.getDate())});
_b97(_baa);
}},{text:function(_bab){
return $(_bab).datebox("options").closeText;
},handler:function(_bac){
$(this).closest("div.combo-panel").panel("close");
}}],formatter:function(date){
var y=date.getFullYear();
var m=date.getMonth()+1;
var d=date.getDate();
return (m<10?("0"+m):m)+"/"+(d<10?("0"+d):d)+"/"+y;
},parser:function(s){
if(!s){
return new Date();
}
var ss=s.split("/");
var m=parseInt(ss[0],10);
var d=parseInt(ss[1],10);
var y=parseInt(ss[2],10);
if(!isNaN(y)&&!isNaN(m)&&!isNaN(d)){
return new Date(y,m-1,d);
}else{
return new Date();
}
},onSelect:function(date){
}});
})(jQuery);
(function($){
function _bad(_bae){
var _baf=$.data(_bae,"datetimebox");
var opts=_baf.options;
$(_bae).datebox($.extend({},opts,{onShowPanel:function(){
var _bb0=$(this).datetimebox("getValue");
_bb6(this,_bb0,true);
opts.onShowPanel.call(this);
},formatter:$.fn.datebox.defaults.formatter,parser:$.fn.datebox.defaults.parser}));
$(_bae).removeClass("datebox-f").addClass("datetimebox-f");
$(_bae).datebox("calendar").calendar({onSelect:function(date){
opts.onSelect.call(this.target,date);
}});
if(!_baf.spinner){
var _bb1=$(_bae).datebox("panel");
var p=$("<div style=\"padding:2px\"><input></div>").insertAfter(_bb1.children("div.datebox-calendar-inner"));
_baf.spinner=p.children("input");
}
_baf.spinner.timespinner({width:opts.spinnerWidth,showSeconds:opts.showSeconds,separator:opts.timeSeparator});
$(_bae).datetimebox("initValue",opts.value);
};
function _bb2(_bb3){
var c=$(_bb3).datetimebox("calendar");
var t=$(_bb3).datetimebox("spinner");
var date=c.calendar("options").current;
return new Date(date.getFullYear(),date.getMonth(),date.getDate(),t.timespinner("getHours"),t.timespinner("getMinutes"),t.timespinner("getSeconds"));
};
function _bb4(_bb5,q){
_bb6(_bb5,q,true);
};
function _bb7(_bb8){
var opts=$.data(_bb8,"datetimebox").options;
var date=_bb2(_bb8);
_bb6(_bb8,opts.formatter.call(_bb8,date));
$(_bb8).combo("hidePanel");
};
function _bb6(_bb9,_bba,_bbb){
var opts=$.data(_bb9,"datetimebox").options;
$(_bb9).combo("setValue",_bba);
if(!_bbb){
if(_bba){
var date=opts.parser.call(_bb9,_bba);
$(_bb9).combo("setText",opts.formatter.call(_bb9,date));
$(_bb9).combo("setValue",opts.formatter.call(_bb9,date));
}else{
$(_bb9).combo("setText",_bba);
}
}
var date=opts.parser.call(_bb9,_bba);
$(_bb9).datetimebox("calendar").calendar("moveTo",date);
$(_bb9).datetimebox("spinner").timespinner("setValue",_bbc(date));
function _bbc(date){
function _bbd(_bbe){
return (_bbe<10?"0":"")+_bbe;
};
var tt=[_bbd(date.getHours()),_bbd(date.getMinutes())];
if(opts.showSeconds){
tt.push(_bbd(date.getSeconds()));
}
return tt.join($(_bb9).datetimebox("spinner").timespinner("options").separator);
};
};
$.fn.datetimebox=function(_bbf,_bc0){
if(typeof _bbf=="string"){
var _bc1=$.fn.datetimebox.methods[_bbf];
if(_bc1){
return _bc1(this,_bc0);
}else{
return this.datebox(_bbf,_bc0);
}
}
_bbf=_bbf||{};
return this.each(function(){
var _bc2=$.data(this,"datetimebox");
if(_bc2){
$.extend(_bc2.options,_bbf);
}else{
$.data(this,"datetimebox",{options:$.extend({},$.fn.datetimebox.defaults,$.fn.datetimebox.parseOptions(this),_bbf)});
}
_bad(this);
});
};
$.fn.datetimebox.methods={options:function(jq){
var _bc3=jq.datebox("options");
return $.extend($.data(jq[0],"datetimebox").options,{originalValue:_bc3.originalValue,disabled:_bc3.disabled,readonly:_bc3.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).datebox("cloneFrom",from);
$.data(this,"datetimebox",{options:$.extend(true,{},$(from).datetimebox("options")),spinner:$(from).datetimebox("spinner")});
$(this).removeClass("datebox-f").addClass("datetimebox-f");
});
},spinner:function(jq){
return $.data(jq[0],"datetimebox").spinner;
},initValue:function(jq,_bc4){
return jq.each(function(){
var opts=$(this).datetimebox("options");
var _bc5=opts.value;
if(_bc5){
_bc5=opts.formatter.call(this,opts.parser.call(this,_bc5));
}
$(this).combo("initValue",_bc5).combo("setText",_bc5);
});
},setValue:function(jq,_bc6){
return jq.each(function(){
_bb6(this,_bc6);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).datetimebox("options");
$(this).datetimebox("setValue",opts.originalValue);
});
}};
$.fn.datetimebox.parseOptions=function(_bc7){
var t=$(_bc7);
return $.extend({},$.fn.datebox.parseOptions(_bc7),$.parser.parseOptions(_bc7,["timeSeparator","spinnerWidth",{showSeconds:"boolean"}]));
};
$.fn.datetimebox.defaults=$.extend({},$.fn.datebox.defaults,{spinnerWidth:"100%",showSeconds:true,timeSeparator:":",keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_bb7(this);
},query:function(q,e){
_bb4(this,q);
}},buttons:[{text:function(_bc8){
return $(_bc8).datetimebox("options").currentText;
},handler:function(_bc9){
var opts=$(_bc9).datetimebox("options");
_bb6(_bc9,opts.formatter.call(_bc9,new Date()));
$(_bc9).datetimebox("hidePanel");
}},{text:function(_bca){
return $(_bca).datetimebox("options").okText;
},handler:function(_bcb){
_bb7(_bcb);
}},{text:function(_bcc){
return $(_bcc).datetimebox("options").closeText;
},handler:function(_bcd){
$(_bcd).datetimebox("hidePanel");
}}],formatter:function(date){
var h=date.getHours();
var M=date.getMinutes();
var s=date.getSeconds();
function _bce(_bcf){
return (_bcf<10?"0":"")+_bcf;
};
var _bd0=$(this).datetimebox("spinner").timespinner("options").separator;
var r=$.fn.datebox.defaults.formatter(date)+" "+_bce(h)+_bd0+_bce(M);
if($(this).datetimebox("options").showSeconds){
r+=_bd0+_bce(s);
}
return r;
},parser:function(s){
if($.trim(s)==""){
return new Date();
}
var dt=s.split(" ");
var d=$.fn.datebox.defaults.parser(dt[0]);
if(dt.length<2){
return d;
}
var _bd1=$(this).datetimebox("spinner").timespinner("options").separator;
var tt=dt[1].split(_bd1);
var hour=parseInt(tt[0],10)||0;
var _bd2=parseInt(tt[1],10)||0;
var _bd3=parseInt(tt[2],10)||0;
return new Date(d.getFullYear(),d.getMonth(),d.getDate(),hour,_bd2,_bd3);
}});
})(jQuery);
(function($){
function init(_bd4){
var _bd5=$("<div class=\"slider\">"+"<div class=\"slider-inner\">"+"<a href=\"javascript:;\" class=\"slider-handle\"></a>"+"<span class=\"slider-tip\"></span>"+"</div>"+"<div class=\"slider-rule\"></div>"+"<div class=\"slider-rulelabel\"></div>"+"<div style=\"clear:both\"></div>"+"<input type=\"hidden\" class=\"slider-value\">"+"</div>").insertAfter(_bd4);
var t=$(_bd4);
t.addClass("slider-f").hide();
var name=t.attr("name");
if(name){
_bd5.find("input.slider-value").attr("name",name);
t.removeAttr("name").attr("sliderName",name);
}
_bd5.bind("_resize",function(e,_bd6){
if($(this).hasClass("easyui-fluid")||_bd6){
_bd7(_bd4);
}
return false;
});
return _bd5;
};
function _bd7(_bd8,_bd9){
var _bda=$.data(_bd8,"slider");
var opts=_bda.options;
var _bdb=_bda.slider;
if(_bd9){
if(_bd9.width){
opts.width=_bd9.width;
}
if(_bd9.height){
opts.height=_bd9.height;
}
}
_bdb._size(opts);
if(opts.mode=="h"){
_bdb.css("height","");
_bdb.children("div").css("height","");
}else{
_bdb.css("width","");
_bdb.children("div").css("width","");
_bdb.children("div.slider-rule,div.slider-rulelabel,div.slider-inner")._outerHeight(_bdb._outerHeight());
}
_bdc(_bd8);
};
function _bdd(_bde){
var _bdf=$.data(_bde,"slider");
var opts=_bdf.options;
var _be0=_bdf.slider;
var aa=opts.mode=="h"?opts.rule:opts.rule.slice(0).reverse();
if(opts.reversed){
aa=aa.slice(0).reverse();
}
_be1(aa);
function _be1(aa){
var rule=_be0.find("div.slider-rule");
var _be2=_be0.find("div.slider-rulelabel");
rule.empty();
_be2.empty();
for(var i=0;i<aa.length;i++){
var _be3=i*100/(aa.length-1)+"%";
var span=$("<span></span>").appendTo(rule);
span.css((opts.mode=="h"?"left":"top"),_be3);
if(aa[i]!="|"){
span=$("<span></span>").appendTo(_be2);
span.html(aa[i]);
if(opts.mode=="h"){
span.css({left:_be3,marginLeft:-Math.round(span.outerWidth()/2)});
}else{
span.css({top:_be3,marginTop:-Math.round(span.outerHeight()/2)});
}
}
}
};
};
function _be4(_be5){
var _be6=$.data(_be5,"slider");
var opts=_be6.options;
var _be7=_be6.slider;
_be7.removeClass("slider-h slider-v slider-disabled");
_be7.addClass(opts.mode=="h"?"slider-h":"slider-v");
_be7.addClass(opts.disabled?"slider-disabled":"");
var _be8=_be7.find(".slider-inner");
_be8.html("<a href=\"javascript:;\" class=\"slider-handle\"></a>"+"<span class=\"slider-tip\"></span>");
if(opts.range){
_be8.append("<a href=\"javascript:;\" class=\"slider-handle\"></a>"+"<span class=\"slider-tip\"></span>");
}
_be7.find("a.slider-handle").draggable({axis:opts.mode,cursor:"pointer",disabled:opts.disabled,onDrag:function(e){
var left=e.data.left;
var _be9=_be7.width();
if(opts.mode!="h"){
left=e.data.top;
_be9=_be7.height();
}
if(left<0||left>_be9){
return false;
}else{
_bea(left,this);
return false;
}
},onStartDrag:function(){
_be6.isDragging=true;
opts.onSlideStart.call(_be5,opts.value);
},onStopDrag:function(e){
_bea(opts.mode=="h"?e.data.left:e.data.top,this);
opts.onSlideEnd.call(_be5,opts.value);
opts.onComplete.call(_be5,opts.value);
_be6.isDragging=false;
}});
_be7.find("div.slider-inner").unbind(".slider").bind("mousedown.slider",function(e){
if(_be6.isDragging||opts.disabled){
return;
}
var pos=$(this).offset();
_bea(opts.mode=="h"?(e.pageX-pos.left):(e.pageY-pos.top));
opts.onComplete.call(_be5,opts.value);
});
function _bea(pos,_beb){
var _bec=_bed(_be5,pos);
var s=Math.abs(_bec%opts.step);
if(s<opts.step/2){
_bec-=s;
}else{
_bec=_bec-s+opts.step;
}
if(opts.range){
var v1=opts.value[0];
var v2=opts.value[1];
var m=parseFloat((v1+v2)/2);
if(_beb){
var _bee=$(_beb).nextAll(".slider-handle").length>0;
if(_bec<=v2&&_bee){
v1=_bec;
}else{
if(_bec>=v1&&(!_bee)){
v2=_bec;
}
}
}else{
if(_bec<v1){
v1=_bec;
}else{
if(_bec>v2){
v2=_bec;
}else{
_bec<m?v1=_bec:v2=_bec;
}
}
}
$(_be5).slider("setValues",[v1,v2]);
}else{
$(_be5).slider("setValue",_bec);
}
};
};
function _bef(_bf0,_bf1){
var _bf2=$.data(_bf0,"slider");
var opts=_bf2.options;
var _bf3=_bf2.slider;
var _bf4=$.isArray(opts.value)?opts.value:[opts.value];
var _bf5=[];
if(!$.isArray(_bf1)){
_bf1=$.map(String(_bf1).split(opts.separator),function(v){
return parseFloat(v);
});
}
_bf3.find(".slider-value").remove();
var name=$(_bf0).attr("sliderName")||"";
for(var i=0;i<_bf1.length;i++){
var _bf6=_bf1[i];
if(_bf6<opts.min){
_bf6=opts.min;
}
if(_bf6>opts.max){
_bf6=opts.max;
}
var _bf7=$("<input type=\"hidden\" class=\"slider-value\">").appendTo(_bf3);
_bf7.attr("name",name);
_bf7.val(_bf6);
_bf5.push(_bf6);
var _bf8=_bf3.find(".slider-handle:eq("+i+")");
var tip=_bf8.next();
var pos=_bf9(_bf0,_bf6);
if(opts.showTip){
tip.show();
tip.html(opts.tipFormatter.call(_bf0,_bf6));
}else{
tip.hide();
}
if(opts.mode=="h"){
var _bfa="left:"+pos+"px;";
_bf8.attr("style",_bfa);
tip.attr("style",_bfa+"margin-left:"+(-Math.round(tip.outerWidth()/2))+"px");
}else{
var _bfa="top:"+pos+"px;";
_bf8.attr("style",_bfa);
tip.attr("style",_bfa+"margin-left:"+(-Math.round(tip.outerWidth()))+"px");
}
}
opts.value=opts.range?_bf5:_bf5[0];
$(_bf0).val(opts.range?_bf5.join(opts.separator):_bf5[0]);
if(_bf4.join(",")!=_bf5.join(",")){
opts.onChange.call(_bf0,opts.value,(opts.range?_bf4:_bf4[0]));
}
};
function _bdc(_bfb){
var opts=$.data(_bfb,"slider").options;
var fn=opts.onChange;
opts.onChange=function(){
};
_bef(_bfb,opts.value);
opts.onChange=fn;
};
function _bf9(_bfc,_bfd){
var _bfe=$.data(_bfc,"slider");
var opts=_bfe.options;
var _bff=_bfe.slider;
var size=opts.mode=="h"?_bff.width():_bff.height();
var pos=opts.converter.toPosition.call(_bfc,_bfd,size);
if(opts.mode=="v"){
pos=_bff.height()-pos;
}
if(opts.reversed){
pos=size-pos;
}
return pos.toFixed(0);
};
function _bed(_c00,pos){
var _c01=$.data(_c00,"slider");
var opts=_c01.options;
var _c02=_c01.slider;
var size=opts.mode=="h"?_c02.width():_c02.height();
var pos=opts.mode=="h"?(opts.reversed?(size-pos):pos):(opts.reversed?pos:(size-pos));
var _c03=opts.converter.toValue.call(_c00,pos,size);
return _c03.toFixed(0);
};
$.fn.slider=function(_c04,_c05){
if(typeof _c04=="string"){
return $.fn.slider.methods[_c04](this,_c05);
}
_c04=_c04||{};
return this.each(function(){
var _c06=$.data(this,"slider");
if(_c06){
$.extend(_c06.options,_c04);
}else{
_c06=$.data(this,"slider",{options:$.extend({},$.fn.slider.defaults,$.fn.slider.parseOptions(this),_c04),slider:init(this)});
$(this).removeAttr("disabled");
}
var opts=_c06.options;
opts.min=parseFloat(opts.min);
opts.max=parseFloat(opts.max);
if(opts.range){
if(!$.isArray(opts.value)){
opts.value=$.map(String(opts.value).split(opts.separator),function(v){
return parseFloat(v);
});
}
if(opts.value.length<2){
opts.value.push(opts.max);
}
}else{
opts.value=parseFloat(opts.value);
}
opts.step=parseFloat(opts.step);
opts.originalValue=opts.value;
_be4(this);
_bdd(this);
_bd7(this);
});
};
$.fn.slider.methods={options:function(jq){
return $.data(jq[0],"slider").options;
},destroy:function(jq){
return jq.each(function(){
$.data(this,"slider").slider.remove();
$(this).remove();
});
},resize:function(jq,_c07){
return jq.each(function(){
_bd7(this,_c07);
});
},getValue:function(jq){
return jq.slider("options").value;
},getValues:function(jq){
return jq.slider("options").value;
},setValue:function(jq,_c08){
return jq.each(function(){
_bef(this,[_c08]);
});
},setValues:function(jq,_c09){
return jq.each(function(){
_bef(this,_c09);
});
},clear:function(jq){
return jq.each(function(){
var opts=$(this).slider("options");
_bef(this,opts.range?[opts.min,opts.max]:[opts.min]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).slider("options");
$(this).slider(opts.range?"setValues":"setValue",opts.originalValue);
});
},enable:function(jq){
return jq.each(function(){
$.data(this,"slider").options.disabled=false;
_be4(this);
});
},disable:function(jq){
return jq.each(function(){
$.data(this,"slider").options.disabled=true;
_be4(this);
});
}};
$.fn.slider.parseOptions=function(_c0a){
var t=$(_c0a);
return $.extend({},$.parser.parseOptions(_c0a,["width","height","mode",{reversed:"boolean",showTip:"boolean",range:"boolean",min:"number",max:"number",step:"number"}]),{value:(t.val()||undefined),disabled:(t.attr("disabled")?true:undefined),rule:(t.attr("rule")?eval(t.attr("rule")):undefined)});
};
$.fn.slider.defaults={width:"auto",height:"auto",mode:"h",reversed:false,showTip:false,disabled:false,range:false,value:0,separator:",",min:0,max:100,step:1,rule:[],tipFormatter:function(_c0b){
return _c0b;
},converter:{toPosition:function(_c0c,size){
var opts=$(this).slider("options");
return (_c0c-opts.min)/(opts.max-opts.min)*size;
},toValue:function(pos,size){
var opts=$(this).slider("options");
return opts.min+(opts.max-opts.min)*(pos/size);
}},onChange:function(_c0d,_c0e){
},onSlideStart:function(_c0f){
},onSlideEnd:function(_c10){
},onComplete:function(_c11){
}};
})(jQuery);


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("7t+N")))

/***/ }),

/***/ "sOR5":
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ })

},[0]);
//# sourceMappingURL=vendor.build.js.map