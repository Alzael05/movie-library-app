<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

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
