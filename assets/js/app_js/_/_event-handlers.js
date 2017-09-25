"use strict";


	(

		function() {

			$( '#mdlForm' ).on(
								'hidden.bs.modal',
								function( event ) {

									// console.log('May');
									app_helper.remove_edit( this );

								}
							);

			app_helper.bind_remove_script_event();
		}

	)();

		// var invoke	=	function() {


		// 				};
