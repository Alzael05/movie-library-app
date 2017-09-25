
	( function ( DateTimeBox_defaults ) {
		"use strict";

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

	} )( $.fn.datetimebox.defaults );
