
	( function ( $, DateTimeBox_defaults ) {
		"use strict";

		$.extend( $.fn.datagrid.defaults.editors, {
			textarea: {
				init: function ( container, options ) {
					var input = $( '<textarea type="textarea" class="form-control datagrid-editable-input">' ).appendTo( container );
					return input;
				},
				destroy: function ( target ) {
					$( target ).remove();
				},
				getValue: function ( target ) {
					return $( target ).val();
				},
				setValue: function ( target, value ) {
					$( target ).val( value );
				},
				resize: function ( target, width ) {
					$( target )._outerWidth( width );
				}
			}
		} );

		DateTimeBox_defaults.required 	= 	true;
		DateTimeBox_defaults.width 		= 	350;
		// DateTimeBox_defaults.panelWidth 	= 	300;

		DateTimeBox_defaults.formatter	= 	function ( date ) {
			var m_date = moment( date ).format( 'YYYY-MM-DD HH:mm:ss' );
			return m_date;
		};

		DateTimeBox_defaults.parser 	=	function ( value ) {
			if ( $.trim( value ) == "" ) {
				return new Date();
			}
			return new Date( value );
		};

	} )( jQuery, $.fn.datetimebox.defaults );
