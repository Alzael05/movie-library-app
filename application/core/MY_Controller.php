<?php

	defined('BASEPATH') OR exit('No direct script access allowed');

	class MY_Controller extends CI_Controller
	{
		public function __construct()
		{
			parent::__construct();
			// enabled profiler
				if ( ! ENVI )
				{
					$this->output->enable_profiler( TRUE );
				}
			//

			// helper
				// $this->load->helper( 'url' );
				// $this->load->helper( 'form' );

				// $this->load->helper( 'app_helper' );
			// helper

			// library
	    		// $this->load->library( 'form_validation' );
	    		$this->form_validation->set_error_delimiters(
	    														'
																<!-- <div class="row"> -->
																	<div class="alerts alert-danger label-required">
																',
																'	</div>
																<!-- </div> -->
																'
															);

				// $this->load->library( 'session' );
			// library

			// load models

				$this->load->model( 'Model_Users', 			'USERS'  	);
				$this->load->model( 'Model_Logs', 			'LOGS'		);

			// load global variables
				log_message( 'log', __LINE__.' '.__METHOD__. print_r( $_SESSION , TRUE ) );
				$this->user_infos = $this->get_user_info();
				// $this->user_infos = $this->session->userdata( USERINFO );

			// common variables

			// set language
				$this->set_language();

			// check_login_session
				// if  ( ! $this->input->is_ajax_request() )
				// {
				// 	$is_log_in 	=
					$this->check_session();
				// 	$ctrl 		= $this->uri->segment( 1 );

				// 	if ( $is_log_in )
				// 	{
				// 		log_message('log','announcements check');
				// 		if ( $ctrl != 'announcements')
				// 		{
				// 			redirect( base_url().'announcements' );
				// 		}
				// 	}
				// 	else
				// 	{
				// 		log_message('log','index check');
				// 		if ( $ctrl != 'index')
				// 		{
				// 			session_destroy();
				// 			redirect( base_url().'index' );
				// 		}
				// 	}
				// }
			// check_login_session
			// log_message('error',print_r( $this->USERS->dummy(), true ));
			// log_message( 'error', __LINE__.' '.__METHOD__."\n\t\t".print_r( $_SESSION, true ) );
		}

		// setup functions

			public function get_user_info()
			{
				$user_id = $this->session->userdata( USERINFO );
				log_message( 'log', __LINE__.' '.__METHOD__.' '. print_r( $user_id, true ) );

				if ( isset( $user_id ) && ! empty( $user_id ) )
				{
					$user_info = $this->USERS->retrieve_user_record_details_by_id( $user_id[ 'strUserId' ] );

					// log_message( 'log', __METHOD__.' '.__LINE__.' '. print_r( $user_info, true ) );

					return $user_info;
				}
				else
				{
					return FALSE;
				}
			}

			public function change_language()
			{
				$language = $this->uri->segment( 3 );
				$data[ 'language' ] = $language;

				$this->session->set_userdata( $data );

				header( 'Location: ' . $_SERVER[ 'HTTP_REFERER' ] );//, 'refresh' );
			}

			public function set_language()
			{

				$temp_language = $this->session->userdata( 'language' );

				// log_message( 'log', 'session '.$temp_language );

				if ( isset( $temp_language ) && ! empty( $temp_language ) )
				{
					$this->config->set_item( 'language', $temp_language );

					// $language = $this->config->item( 'language' );
					$this->lang->load( 'custom', $temp_language );
				}
				else
				{
					// $this->config->set_item( 'language', 'english' );
					$language = $this->config->item( 'language' );

				// log_message( 'log', 'config '.$language );
					// $data[ 'language' ] = $language;
					// $this->session->set_userdata( $data );

					$this->lang->load( 'custom', $language );
				}

				// $this->config->set_item( 'language', $language );
			}
		// setup functions

		// whole app used functions

			public function check_access_level( $user_access_type, $redirect_page )
			{
				if ( $user_access_type == UR )
				{
					// $this->session->set_flashdata(
					// 								'flash_message',
					// 								'<script>
					// 									flash_notify(
					// 													"Unauthorized access redirected to main page.",
					// 													"danger"
					// 												);
					// 								</script>'
					// 							);

					// send message

					redirect( base_url().$redirect_page );
				}
			}

			public function return_respone_message( $action, $page, $type )
			{
				if ( $type == 'danger' )
				{
					return array(
									'message' 	=>  'An Error occurred. '.$page.' '.$action.' unsuccessful. '.validation_errors(), //
									'type'		=> 'danger'
								);
				}
				elseif ( $type == 'success' )
				{
					return array(
									'message' 	=>  $page.' is successfully '.$action.'.', //
									'type'		=> 'success'
								);
				}
				else
				{
					log_message( 'error', 'return response message bad' );
				}
			}
		// whole app used functions

		// miscellaneous functions
			// public function get_csrf_value()
			// {
			// 	return $this->security->get_csrf_hash();
			// }

			// public function get_base_url()
			// {
			// 	return base_url();
			// }
		// miscellaneous functions



		// public function test()
		// {
		// 	// echo print_r( $this->user_infos, TRUE );
		// 	echo '<pre>';

		// 	// echo print_r( $this->get_last_id( 'tbllogs', 'strLogId' ) );
		// 	// echo print_r( $this->get_last_id( 'tblannouncement', 'strAnnouncementId' ) );
		// 	$all = $this->session->all_userdata();
		// 	print_r( $all );

		// 	print_r( $this->session->userdata( USERINFO )[ 'strUserId' ] );

		// 	$lang = $this->config->item( 'language' );
		// 	print_r( $lang );
		// 	// log_message( 'log', print_r( $lang, true ) );
		// 	// log_message( 'debug', 'Sample log' );

		// 	echo '</pre>';

		// }

			public function check_session()
			{
				if ( $this->input->is_ajax_request() )
				{
					$this->output->enable_profiler( FALSE );
					$session_id = session_id();//$this->input->post( 'session_id' );
				}
				else
				{
					$session_id = session_id();
				}

				$user_info 	= $this->user_infos;//$this->get_user_info();//

				$response = array(
									'session_id' => $session_id,
									'redirect' 	 => base_url().'index'
								);

				if ( ! isset( $user_info ) && empty( $user_info  ) )
				{
					// $this->USERS->update_user_session_id( NULL, $user_info[ 'strUserName' ] );
					log_message( 'log', __LINE__.' '.__METHOD__.' Message: Session Time-out!' );
					session_destroy();

					$response += array(
										'type'		=>	'danger',
										'message'	=>	'<strong>Error !</strong> Session Time-out!'
									);

					if ( $this->input->is_ajax_request() )
					{
						$this->output->set_content_type( 'json' )
										->set_status_header( 401 )
										->set_output( json_encode( $response ) )
										->_display();

						exit;
					}
					else
					{
						flash_message( $response );
						redirect( base_url().'index' );
					}

				}
				else if ( $session_id != $user_info[ 'strSessionId' ] )
				{

					// $this->USERS->update_user_session_id( NULL, $user_info[ 'strUserName' ] );

					log_message( 'log', __LINE__.' '.__METHOD__.' Message: Session ID has changed' );

					session_destroy();

					$response += array(
										'type'		=>	'danger',
										'message'	=>	'<strong>Error !</strong> Your account has been log-in by another user.'
									);

					if ( $this->input->is_ajax_request() )
					{
						$this->output->set_content_type( 'json' )
										->set_status_header( 401 )
										->set_output( json_encode( $response ) )
										->_display();

						exit;
					}
					else
					{
						flash_message( $response );
						redirect( base_url().'index' );
					}
				}
				else
				{
					if ( $this->input->is_ajax_request() )
					{
						// $response = array(
						// 					'session_id' => $session_id
						// 				);

						// return $this->output->set_content_type( 'json' )
						// 					->set_status_header( 200 )
						// 					->set_output( json_encode( $response ) );
						return;
					}
					else
					{
						// flash_message( $response );
						// redirect( base_url().'index' );
						return;
					}
				}
			}

		// callback validations
			public function _check_for_script_tags( $input )
			{
				$pattern = '/(<script[^>]*>)(\X*?)(<\/script>)|<script>|<\/script>/im';

				if ( preg_match( $pattern, $input )  )
				{
					$this->form_validation->set_message( '_check_for_script_tags', 'The {field} field can not contain script tags');
					return FALSE;
				}
				else
				{
					return TRUE;
				}
			}
		// callback validations

	}
