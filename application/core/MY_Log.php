<?php

	defined('BASEPATH') OR exit('No direct script access allowed');

	class MY_Log extends CI_Log
	{

		public function __construct()
		{
			parent::__construct();

	        		$config =& get_config();

			$this->_log_path = ( $config[ 'log_path' ] != '') ? $config[ 'log_path' ] :  $this->get_log_dir();//APPPATH.'logs/'//;

			if ( ! is_dir( $this->_log_path ) OR ! is_really_writable( $this->_log_path ) )
			{
				$this->_enabled = FALSE;
			}

			// also allow threshold values to be passed as an array
			if ( is_numeric( $config[ 'log_threshold' ] ) OR is_array( $config[ 'log_threshold' ] ) )
			{
				$this->_threshold = $config[ 'log_threshold' ];
			}

			// if ( $config[ 'log_date_format' ] != '' )
			// {
			// 	$this->_date_fmt = $config[ 'log_date_format' ];
			// }

		}

		public function write_log( $level = 'error', $msg, $php_error = FALSE )
		{

			if ( $this->_enabled === FALSE )
			{
			    return FALSE;
			}

			$level = strtoupper( $level );

			$temp_levels = $this->_levels;
			$temp_levels[ 'LOG' ] = 5;

			if ( ! isset( $temp_levels[ $level ] )
				OR ( $temp_levels[ $level ] > $this->_threshold )
					// if the threshold values is an array, check to see if the error level does not exist in it
				OR ( is_array( $this->_threshold ) && ! in_array( $temp_levels[ $level ], $this->_threshold ) ) )
			{
				return FALSE;
			}

			$filepath = $this->_log_path.'log-'.date('Y-m-d').'.'.$this->_file_ext;//'.php';
				$message  = '';

			if ( ! file_exists( $filepath ) )
			{
			    // $message .= "\n<"."?php  if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' ); ?".">\n\n";
			    $message .= "\n\n\n\n\n\r";
			}

			if ( ! $fp = @fopen( $filepath, FOPEN_WRITE_CREATE ) )
			{
			    return FALSE;
			}

			$message .= "\n".$level." ".( ( $level == 'INFO' ) ? ' -' : '-' ).' '.date( $this->_date_fmt ). " -\n\t\t--> ".$msg."\n";

			flock( 	$fp, LOCK_EX );
			fwrite( $fp, $message );
			flock( 	$fp, LOCK_UN );
			fclose( $fp );

			@chmod( $filepath, FILE_WRITE_MODE );
			return TRUE;

		}

		public function get_log_dir ()
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

        	return $log_dir = APPPATH.'logs/'.date( 'Y' ).'/'.date( 'm' ).'/'.date( 'd' ).'/';
		}

	}
