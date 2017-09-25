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

			// if ( isset( $user_data ) )
			// {
				$user_info = $this->CI->USERS->retrieve_user_record_details_by_id( $user_data[ 'strUserId' ] );
				// log_message( 'log', __METHOD__ );

				if ( isset( $user_info ) && ! empty( $user_info ) )
				{
					// $this->CI->USERS->update_user_session_id( NULL, $user_info[ 'strUserName' ] );
					log_message( 'log', __LINE__.' '.__METHOD__.' Message: Session not set' );
					// session_destroy();
					if ( $this->CI->input->is_ajax_request() )
					{
						$this->CI->output->set_content_type( 'json' )
										 ->set_status_header( 200 )
										 ->set_output( json_encode( $response ) );
					}
					else
					{
						// flash_message( $response );
						redirect( base_url().$page );
					}

				}
				elseif 	( $session_id == $user_info[ 'strSessionId' ] )
				{
					// $this->CI->USERS->update_user_session_id( NULL, $user_data[ 'strUserName' ] );
					log_message( 'log', __LINE__.' '.__METHOD__.' Message: Session ID has changed' );
					// session_destroy();

					if ( $this->CI->input->is_ajax_request() )
					{
						$this->CI->output->set_content_type( 'json' )
										 ->set_status_header( 200 )
										 ->set_output( json_encode( $response ) );
					}
					else
					{
						// flash_message( $response );
						redirect( base_url().$page );
					}
				}
				else
				{
					// session_destroy();
					if ( $this->CI->input->is_ajax_request() )
					{
						// $response[ 'redirect' ] = base_url().'index';
						$this->CI->output->set_content_type( 'json' )
										 ->set_status_header( 200 )
										 ->set_output( json_encode( $response ) );
					}
					else
					{
						// redirect( base_url().'index' );
					}
				}
			// }
			// else
			// {
			// 	// session_destroy();

			// 	if ( $this->CI->input->is_ajax_request() )
			// 	{
			// 		// $response[ 'redirect' ] = base_url().'index';
			// 		// return $this->CI->output->set_content_type( 'json' )
			// 		// 					->set_status_header( 200 )
			// 		// 					->set_output( json_encode( $response ) );
			// 		return;
			// 	}
			// 	else
			// 	{
			// 		// redirect( base_url().'index' );
			// 		return;
			// 	}
			// }
		}

		/*public function check_login_session( $session_id = '' )
		{

			$user_data	 = $this->session->userdata( USERINFO );

			$user_info = array( 'strUserName' => '' );

			if ( isset( $user_data ) )
			{
				$user_info = $this->USERS->retrieve_user_record_details_by_id( decrypt_string( $user_data ) );
				// log_message( 'log', __METHOD__ );
				if (
				    	( isset( $user_info ) && ! empty( $user_info ) )
				   )
				{
					redirect( base_url().'announcements' );
				}
				elseif(
						( session_id() == $user_info[ 'strSessionId' ] )
					)
				{
					redirect( base_url().'announcements' );
				}
				else
				{
					$this->USERS->update_user_session_id( NULL, $user_info[ 'strUserName' ] );
					session_destroy();
				}

			}
			else
			{
				$this->USERS->update_user_session_id( NULL, $user_info[ 'strUserName' ] );
				// session_regenerate_id();
			}
		}*/
	}
