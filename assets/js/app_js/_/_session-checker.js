


			var session = ( function () {

				var ses_id = sessionStorage.session_id;

				var check_session = 	function ( page ) {

											$.ajax(
													{
														url: 		base_url + page + '/check_session',
														type: 		'POST',
														dataType: 	'JSON',
														data: 		{
																		session_id: ses_id
																	},
														success: 	function ( response ) {

																		console.log( 'success05' );

																		console.log( response );
																		if ( response.redirect )
																		{
																			console.log('May');
																			// window.location = response.redirect;
																		}

																	}

														// complete: 	function( event, xhr, options )
														// 			{
														// 				console.log( 'complete' );

														// 				console.log( event );
														// 				console.log( xhr );
														// 				console.log( options );

														// 				// if ( xhr.redirect )
														// 				// {
														// 				// 	console.log('May');
														// 				// 	window.location = xhr.redirect;
														// 				// }
														// 			},
													}
												);

										};

				return 	{

					check_session: check_session

				}

			} )();
