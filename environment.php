<?php

	if( ! defined( 'ENVIRONMENT' ) )
	{

		$domain = gethostname();
		// $domain2 = gethostbyname ($domain);
		// $domain3 = gethostbynamel ($domain);
		// $domain5 = strtolower( $_SERVER[ 'SERVER_NAME' ] );

		// echo "<pre>";
		// echo print_r( $domain );
		// echo "<br/>";
		// echo print_r( $domain2 );
		// echo "<br/>";
		// echo print_r( $domain3 );
		// echo print_r( $_SERVER, TRUE );
		// $_SERVER['CI_ENV'] = 'development';
		// echo print_r( $_SERVER );
		// echo "</pre>";

		// echo password_hash( 'dummy', PASSWORD_BCRYPT, array( 'cost' => 12 ) );

		// die();

		switch( $domain )
		{
			// case '127.0.0.1' :
			// case 'localhost' :
			// 	$_SERVER[ 'CI_ENV' ] = 'development';
			// 	define( 'ENVI', TRUE );
			// break;

			case ( preg_match( '/staging/', $domain ) ? true : false ) :
				$_SERVER[ 'CI_ENV' ] = 'testing';
				define( 'ENVI', FALSE );
			break;

			case ( preg_match( '/production/', $domain ) ? true : false ) :
				$_SERVER[ 'CI_ENV' ] = 'testing';
				define( 'ENVI', FALSE );
			break;

			default :
				$_SERVER[ 'CI_ENV' ] = 'development';
				define( 'ENVI', TRUE );
				// define('ENVIRONMENT', 'development');
			break;
		}
	}
