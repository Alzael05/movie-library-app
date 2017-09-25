<?php

	defined('BASEPATH') OR exit('No direct script access allowed');

	class LoginSession_Library
	{

		protected $CI;

		public function __construct()
		{
			$this->CI =& get_instance();
		}

		public function check_session( $page )
		{
			if ( $this->CI->input->is_ajax_request() )
			{
				$this->CI->output->enable_profiler( FALSE );
				$session_id = $this->CI->input->post( 'session_id' );
			}
			else
			{
				$session_id = session_id();
			}

			$user_data = $this->CI->session->userdata( USERINFO );

			// $user_info = array( 'strUserName' => '' );
			$response = array(
								'session_id' => $session_id,
								'redirect'   => base_url().$page
							);

			$user_info = $this->CI->USERS->retrieve_user_record_details_by_id( $user_data[ 'strUserId' ] );
			log_message( 'log', __METHOD__.$user_info );

			if ( isset( $user_info ) && ! empty( $user_info ) )
			{
				log_message( 'log', __LINE__.' '.__METHOD__.' Message: Session not set' );


				if ( $this->CI->input->is_ajax_request() )
				{
					// $response[ 'redirect' ] = base_url().'index';
					$this->CI->output->set_content_type( 'json' )
									 ->set_status_header( 200 )
									 ->set_output( json_encode( $response ) );
				}
				else
				{
					redirect( base_url().$page );
				}
			}
			elseif 	( $session_id == $user_info[ 'strSessionId' ] )
			{
				log_message( 'log', __LINE__.' '.__METHOD__.' Message: Session has changed' );

				if ( $this->CI->input->is_ajax_request() )
				{
					// $response[ 'redirect' ] = base_url().'index';
					$this->CI->output->set_content_type( 'json' )
									 ->set_status_header( 200 )
									 ->set_output( json_encode( $response ) );
				}
				else
				{
					redirect( base_url().$page );
				}
			}

		}
	}
