<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

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
