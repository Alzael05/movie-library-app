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
