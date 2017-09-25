<?php

	defined('BASEPATH') OR exit('No direct script access allowed');

	class Index extends CI_Controller
	{
		public function __construct()
		{
			parent::__construct();

			// enabled profiler
				if ( ENVI )
				{
					$this->output->enable_profiler( TRUE );
				}
			//

			$this->form_validation->set_error_delimiters(
    														'
															<!-- <div class="row"> -->
																<div class="alerts alert-danger label-required">
															',
															'	</div>
															<!-- </div> -->
															'
														);

			$this->load->model( 'MY_Model', 			'MODEL'  	);

			$this->load->model( 'Model_Users', 			'USERS'  	);
			$this->load->model( 'Model_Announcements', 	'ANNMNT' 	);
			$this->load->model( 'Model_Logs', 			'LOGS'		);

			$this->lang->load( 'custom', 'english' );

			// $this->session->sess_destroy();
		}

		public function index()
		{
			// $is_log_in =
			$this->check_login_session();
			// if ( $is_log_in )
			// 	redirect( base_url().'announcements' );
			log_message( 'log', session_id() );

			$data[ 'link' 	] 	= $this->load->view( 'links_scripts_import/viewImportLinks', NULL, TRUE );
			$data[ 'script' ] 	= $this->load->view( 'links_scripts_import/viewImportScripts', NULL, TRUE );
			// load view
			$this->load->view( 'viewLogIn', $data );
		}

		public function register()
		{
			$this->check_login_session();

			$data[ 'link'	] = $this->load->view( 'links_scripts_import/viewImportLinks', NULL, TRUE );
			$data[ 'script' ] = $this->load->view( 'links_scripts_import/viewImportScripts', NULL, TRUE );

			// load view
			$this->load->view( 'viewRegister', $data );
		}

		public function create()
		{
			$data = $this->input->post();

			// $this->session->set_userdata( $post );

			if ( $this->form_validation->run( 'create_user' ) === FALSE )
			{
				$this->register();
			}
			else
			{

				$result = $this->USERS->retrive_last_user_id();

				$id = ! empty( $result ) ? $result[ 'strUserId' ] : '';

				$data[ 'txtUserId' 		] 	= generate_id( $id, USER );
				$data[ 'txtAccessType'	]	= UR;

				$this->USERS->insert_user( $data );
				// $this->index();
				redirect( base_url().'index' );
			}
		}

		public function login()
		{
			$data = $this->input->post();

			if ( $this->form_validation->run( 'login' ) === FALSE )
			{
				// if ( $this->input->is_ajax_request() )
				// {
				// 	$response = $this->return_respone_message(
				// 												'posting',
				// 												'Announcement',
				// 												'danger'
				// 											);
				// }
				// else
				// {
				// 	$response = $this->return_respone_message(
				// 												'posting',
				// 												'Announcement',
				// 												'danger'
				// 											);

				// 	flash_message( $response );
				// }
			}
			else
			{
				if ( $data )
				{
					$user_id = $this->USERS->retrieve_user_record_details_by_username( html_escape( $data[ 'txtUserName' ] ) );

					if ( $user_id )
					{

						// if ( $user_id[ 0 ][ 'strUserPassword' ] == encrypt_password( $data[ 'txtPassword' ] ) )
						if ( password_verify( $data[ 'txtPassword' ] , $user_id[ 'strUserPassword' ] ) )
						{
							$this->USERS->update_user_session_id(
																	session_id(),
																	$data[ 'txtUserName' ]
																);

							// set user sesssion
							$this->session->set_userdata( USERINFO, encrypt_string( $user_id[ 'strUserId' ] ) );

							// logs
								$log_message 		= create_log_message(
																			$user_id[ 'strUserName' ],
																			'Logged-in',
																			'Session ID: '.session_id()
																		);

								$result 			= $this->LOGS->retrive_last_log_id();
								$id 				= ! empty( $result ) ?$result[ 'strLogId' ] : '';

								$log[ 'txtLogId' 			]	= generate_id( $id, LOGS );
								$log[ 'txtLogDescription' 	]	= $log_message;

								$this->LOGS->insert_log( $log );
							// logs

							redirect( base_url().'announcements' );
						}
						else
						{
							flash_message( "Wrong Password.", FALSE );
						}
					}
					else
					{
						flash_message( "User doesn't exist.", FALSE );
					}
				}
			}
			// $this->index();
			redirect( base_url().'index' );
		}

		public function logout()
		{

			$hashed_user_id = $this->session->userdata( USERINFO );

			if ( isset( $hashed_user_id ) && ! empty( $hashed_user_id ) )
			{
				$user_id = $this->USERS->retrieve_user_record_details_by_id( decrypt_string( $hashed_user_id ) );

				if ( $user_id )
				{
					// logs
						$log_message 		= create_log_message(
																	$user_id[ 'strUserName' ],
																	'Logged-out',
																	'Session ID: '.session_id()
																);

						$result 			= $this->LOGS->retrive_last_log_id();
						$id 				= ! empty( $result ) ? $result[ 'strLogId' ] : '';

						$log[ 'txtLogId' 			]	= generate_id( $id, LOGS );
						$log[ 'txtLogDescription' 	]	= $log_message;

						$this->LOGS->insert_log( $log );
					// logs
				}
			}

			session_destroy();

			redirect( base_url().'index' );
		}

		public function check_login_session( $message = '' )
		{

			// $user_id 	= $this->get_user_id();//$this->user_ids;//
			$hashed_user_id	 = $this->session->userdata( USERINFO );

			if ( isset( $hashed_user_id ) )
			{

				$user_id 	= $this->USERS->retrieve_user_record_details_by_id( decrypt_string( $hashed_user_id ) );

				// $ctrl 		= $this->uri->segment( 1 );

				// log_message( 'info', print_r( $user_id , true ) );
				// log_message( 'info', print_r( session_id() , true ) );
				log_message( 'log', __METHOD__ );

				if (
				    	( isset( $user_id ) && ! empty( $user_id ) )
				   )
				{
					// redirect( base_url().'announcements' );
					// header( 'Location: ' . $_SERVER[ 'HTTP_REFERER' ] );//, 'refresh' );
					// return TRUE;
					// log_message( 'error', 'log-out prob');

					// log_message('log','announcements check');
					// if ( $ctrl != 'announcements')
					// {
						redirect( base_url().'announcements' );
					// }
				}
				elseif(
						( session_id() == $user_id[ 'strSessionId' ] )
				       )
				{
					redirect( base_url().'announcements' );
				}
				else
				{
					session_destroy();
				}
				// {
				// 	if ( $this->input->is_ajax_request() )
				// 	{
				// 		return array(
				// 						'session_error' => 1,
				// 						'index' 		=> base_url().'index'
				// 					);
				// 	}

				// 	if ( $message != '' )
				// 	{
				// 		// send message
				// 	}

				// 	// redirect( base_url().'index' );
				// 	// return FALSE;
				// 	log_message('log','index check');
				// 	if ( $ctrl != 'index')
				// 	{
				// 		session_destroy();
				// 		redirect( base_url().'index' );
				// 	}
				// }
				// else
			}
			else
			{
				session_regenerate_id();
				// $this->logout();
			}
		}



		// callback validation
			// function _check_username()
			// {
			// 	$temp_username = $this->input->post( 'txtUserName' );
			// 	$record = $this->USERS->retrieve_record_details( $temp_username, TBL_USERS, FLD_USERNAME );

			// 	if ( $record )
			// 	{

			// 	}

			// }

			// function _check_password()
			// {
			// 	$temp_password = $this->input->post( 'txtPassword' );
			// 	$record = $this->USERS->retrieve_record_details( $temp_password, TBL_USERS, FLD_USER_PASS );

			// 	if ( $record )
			// 	{

			// 	}

			// }
		// callback validation
	}
