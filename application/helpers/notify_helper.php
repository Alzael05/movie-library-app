<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

	if( ! function_exists( 'flash_message' ) )
	{
		function flash_message( $response = array( 'type' => '', 'message' => '' ) )
		{

    		$CI =& get_instance();

    		// log_message( 'log', print_r( $response, true ) );

			// $class = ( $type ) ? 'success' : 'danger';

			// $divClass = ( $forFront ) ? 'row' : 'col-sm-12';

			// return '<div class="'.$divClass.'"><div class="'.$class.'">'.$message.'</div></div>';

			$CI->session->set_flashdata(
												'message',
												'
												<div data-notify="container"
														class="col-xs-11 col-sm-4 alert alert-'.$response[ 'type' ].' animated fade in"
														role="alert"
														data-notify-position="top-center"
														style="display: inline-block; margin: 0px auto; position: fixed; transition: all 0.5s ease-in-out; z-index: 1031; top: 20px; left: 0px; right: 0px;"
														id="notif_message"
														onload="setTimeout( function(){ $( this ).find( \':button\' ).click(); }, 5000 );"
														>
													<button type="button"
															aria-hidden="true"
															aria-label="close"
															class="close"
															data-dismiss="alert"
															style="position: absolute; right: 10px; top: 5px; z-index: 1033;"
															>×</button>
													<span data-notify="icon"
															></span> <span data-notify="title"
																			></span> <span data-notify="message"
																							>'.$response[ 'message' ].'</span>
													<a href="#" target="_blank" data-notify="url"></a>
												</div>
												'
											);

		}
	}
