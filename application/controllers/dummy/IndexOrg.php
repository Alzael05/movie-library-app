<?php

	defined('BASEPATH') OR exit('No direct script access allowed');

	class Index extends CI_Controller
	{

		public function __construct()
		{
			parent::__construct();

			// load models
				$this->load->model( 'MY_Model', 			'MODEL'  	);

				$this->load->model( 'Model_Users', 			'USERS'  	);
				$this->load->model( 'Model_Announcements', 	'ANNMNT' 	);
				$this->load->model( 'Model_Logs', 			'LOGS'		);
			// load global variables
				$this->user_infos = $this->get_user_info();
		}

		public function index()
		{

			// $this->check_login_session();
			$is_log_in = $this->check_login_session();
			// if ( $is_log_in )
				// redirect( base_url().'announcements' );

			$data[ 'link' 	] 	= $this->load->view( 'links_scripts_import/viewImportLinks', NULL, TRUE );
			$data[ 'script' ] 	= $this->load->view( 'links_scripts_import/viewImportScripts', NULL, TRUE );
			// load view
			$this->load->view( 'viewLogIn', $data );
		}

		public function check_login_session( $message = '' )
		{

			log_message( 'log', __METHOD__ );

			if (
			    	// (  )
			    	( session_id() == $this->$user_info[ 'strSessionId' ] ) &&
			    	( isset( $this->$user_info ) && ! empty( $this->$user_info ) )
			   )
			{
				redirect( base_url().'announcements' );
				// return TRUE;
			}

		}

		public function get_user_info()
		{
			$temp_user_id = $this->session->userdata( USERINFO );
			$user_info = $this->USERS->retrieve_user_record_details_by_id( decrypt_string( $temp_user_id ) );

				return $user_info;
		}

		public function login()
		{
			$data = $this->input->post();

			if ( $this->form_validation->run( 'login' ) === FALSE )
			{
			}
			else
			{
				if ( $data )
				{
					$user_info = $this->USERS->retrieve_user_record_details_by_username( html_escape( $data[ 'txtUserName' ] ) );

					if ( $user_info )
					{

						// if ( $user_info[ 0 ][ 'strUserPassword' ] == encrypt_password( $data[ 'txtPassword' ] ) )
						if ( password_verify( $data[ 'txtPassword' ] , $user_info[ 0 ][ 'strUserPassword' ] ) )
						{

							$this->USERS->update_record_details(
																	session_id(),
																	$data[ 'txtUserName' ]
																);

							// set user sesssion
							$this->session->set_userdata( USERINFO, encrypt_string( $user_info[ 0 ][ 'strUserId' ] ) );

							// logs
								$log_message 		= create_log_message(
																			$user_info[ 0 ][ 'strUserName' ],
																			'Logged-in',
																			'Session ID: '.session_id()
																		);

								$result 			= $this->get_last_id( 'tbllogs' );
								$id 				= ! empty( $result ) ?$result[ 0 ][ 'strLogId' ] : '';

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

			$this->index();
			// $this->session->flashdata('name');
			// redirect( base_url().'index' );

		}

		public function logout()
		{

			$user_info = $this->get_user_info();

			if ( $user_info )
			{
				// logs
					$log_message 		= create_log_message(
																$user_info[ 'strUserName' ],
																'Logged-out',
																'Session ID: '.session_id()
															);

					$result 			= $this->get_last_id( 'tbllogs' );
					$id 				= ! empty( $result ) ? $result[ 'strLogId' ] : '';

					$log[ 'txtLogId' 			]	= generate_id( $id, LOGS );
					$log[ 'txtLogDescription' 	]	= $log_message;

					$this->LOGS->insert_log( $log );
				// logs
			}

			// $this->session->sess_destroy();

			redirect( base_url().'index' );
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
	}
