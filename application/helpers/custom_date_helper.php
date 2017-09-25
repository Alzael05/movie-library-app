<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


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
