<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

	// if( ! function_exists( 'show_array' ) )
	// {
	// 	function show_array( $array )
	// 	{
	// 		echo "<pre>";
	// 		echo print_r( $array, TRUE );
	// 		echo "</pre>";
			// echo "<pre>";
			// echo print_r( $_SERVER['CI_ENV'], TRUE );
			// echo "</pre>";
	// 	}
	// }


	if ( ! function_exists( 'encrypt_string' ) )
	{
		function encrypt_string( $data )
		{
			$CI =& get_instance();

			$CI->load->library( 'encrypt' );

			$conv_data = $CI->encrypt->encode( $data );

			return base64_encode( $conv_data );
		}
	}

	if ( ! function_exists( 'decrypt_string' ) )
	{
		function decrypt_string( $data )
		{
			$CI =& get_instance();

			$CI->load->library('encrypt');

			$conv_data = $CI->encrypt->decode( base64_decode( $data ) );

			return $conv_data;
		}
	}

	if ( ! function_exists( 'encrypt_password' ) )
	{
		function encrypt_password( $password )
		{
			$new_password = password_hash( $password, PASSWORD_BCRYPT, array( 'cost' => 12 ) );

			return $new_password;
		}
	}

	if ( ! function_exists( 'is_past_date' ) )
	{
		function is_past_date( $date )
		{
			$yourDate = date( 'Y-m-d', strtotime( $date ) );
			$currDate = date( 'Y-m-d' );
			if ( strtotime( $currDate ) > strtotime( $yourDate ) )
			{
				return true;
			}
			return false;
		}
	}

	if ( ! function_exists( 'get_date' ) )
	{
		function get_date()
		{
			return date( 'Y-m-d H:i:s' );
		}
	}

	// if ( ! function_exists( 'sess_user_id' ) )
	// {
	// 	function sess_user_id()
	// 	{
	// 		$CI =& get_instance();

	// 		$CI->load->library( 'session' );
	// 		$user = $CI->session->userdata( USERINFO );

	// 		// check user session, if none we're done.
	// 		if ( $user )
	// 		{
	// 			if ( isset( $user[ 0 ][ FLD_USER_ID ] ) )
	// 			    return $user[ 0 ][ FLD_USER_ID ];
	// 		}
	// 		return NULL;
	// 	}
	// }

	if ( ! function_exists( 'generate_id' ) )
	{
		function generate_id( $id = '', $ent_ref, $num = 1 )
		{
    		// $CI =& get_instance();
    		// $CI->load->model( 'Model_Users', 'USERS' );

			$Y 	= date( 'Y' );
			$m 	= date( 'm' );
			$d 	= date( 'd' );
			$H 	= date( 'H' );
			$i 	= date( 'i' );
			$s 	= date( 's' );

			if ( $id != '' )
			{
				$temp_id = explode( '-', $id );

				$dt      = $temp_id[ 0 ];
				$tm 	 = $temp_id[ 2 ];

				if ( $ent_ref )
				{
					$ent_ref = $temp_id[ 1 ];
				}
				else
				{
					return;
				}

				$num 	 = $temp_id[ 3 ];

				if ( $dt == $Y.$m.$d && $tm == $H.$i.$s )
				{
					$num++;
				}
			}
			// else
			// {

			// }

			$lnum = sprintf( "%03d", $num );

			$gen_id = $Y.$m.$d.'-'.$ent_ref.'-'.$H.$i.$s.'-'.$lnum;

			return $gen_id;
		}
	}


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


	// if ( ! function_exists( 'check_login_session' ) )
	// {
	// 	function check_login_session( $message = '' )
	// 	{
 //    		$CI =& get_instance();

	// 		$user_info = $CI->session->userdata( USERINFO );

	// 		if ( isset( $user_info ) && ! empty( $user_info ) )
	// 		{
	// 			// redirect( base_url().'announcements' );
	// 			return TRUE;
	// 		}
	// 		else
	// 		{
	// 			if ( $message != '' )
	// 			{
	// 				$CI->session->set_flashdata(
	// 												'timeoutMessage',
	// 												'<script>
	// 													flash_notify( "'.$message.'", "danger" );
	// 												</script>'
	// 											);
	// 			}

	// 			// redirect( base_url().'index/login' );
	// 			return FALSE;
	// 		}
	// 	}
	// }

	// if ( ! function_exists( 'check_access_level' ) )
	// {
	// 	function check_access_level( $user_access_type, $redirect_page )
	// 	{
	// 		if ( $user_access_type == UR )
	// 		{
	// 			$this->session->set_flashdata(
	// 											'flash_message',
	// 											'<script>
	// 												flash_notify(
	// 																"Unauthorized access redirected to main page.",
	// 																"danger"
	// 															);
	// 											</script>'
	// 										);

	// 			redirect( base_url().$redirect_page );
	// 		}
	// 	}
	// }


	if ( ! function_exists( 'create_log_message' ) )
	{
		function create_log_message( $user, $action, $additional_message = '' )
		{
    		// $CI =& get_instance();
    		$log_message = "Test message.";

    		$log_message = $user.' --> '.$action.' '.$additional_message.'.';

			return $log_message;
		}
	}

	if ( ! function_exists( 'get_log_dir') )
	{
		function get_log_dir ()
		{
			$log_dir = '';

		 	if ( ! file_exists( APPPATH.'logs/'.date( 'Y' ).'/'.date( 'm' ).'/'.date( 'd' ) ) )
			{

			        	// if ( ! file_exists( APPPATH.'logs/'.date( 'Y' ).'/'.date( 'm' ) ) )
			        	// {
					       //  if ( ! file_exists( APPPATH.'logs/'.date( 'Y' ) ) )
			        	// 	{
					       //  	mkdir( APPPATH.'logs/'.date( 'Y' ), 0777 );
					       //  	$log_dir = APPPATH.'logs/'.date( 'Y' );

				        // 		mkdir( APPPATH.'logs/'.date( 'Y' ).'/'.date( 'm' ), 0777 );
				        // 		$log_dir = APPPATH.'logs/'.date( 'Y' ).'/'.date( 'm' );

			        			mkdir( APPPATH.'logs/'.date( 'Y' ).'/'.date( 'm' ).'/'.date( 'd' ), 0777, TRUE );
			        	// 	}

			        	// }
			        }

			        	return $log_dir = APPPATH.'logs/'.date( 'Y' ).'/'.date( 'm' ).'/'.date( 'd' );
		}
	}
