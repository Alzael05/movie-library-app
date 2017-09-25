<?php

	defined('BASEPATH') OR exit('No direct script access allowed');

	class Index extends MY_Controller
	{
		public function __construct()
		{
			parent::__construct();
		}

		public function index()
		{
			$is_log_in = $this->check_login_session();
			if ( $is_log_in )
				redirect( base_url().'announcements' );

			$data[ 'link' 	] 	= $this->load_link();
			$data[ 'script' ] 	= $this->load_scripts();
			// load view
			$this->load->view( 'viewLogIn', $data );
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
					$where = array(
									'strUserName' 		=>	html_escape( $data[ 'txtUserName' ] ),
								);

					$user_info = $this->USERS->retrieve_record_details(
																		'tblusers',
																		array(),
																		array(),
																		$where
																	);
					if ( $user_info )
					{

						// if ( $user_info[ 0 ][ 'strUserPassword' ] == encrypt_password( $data[ 'txtPassword' ] ) )
						if ( password_verify( $data[ 'txtPassword' ] , $user_info[ 0 ][ 'strUserPassword' ] ) )
						{

							$set = array(
											"strSessionId"	=> session_id()
										);

							$where = array(
											"strUserName" 	=> $data[ 'txtUserName' ]
										);

							$this->ANNMNT->update_record_details(
																	'tblusers',
																	$set,
																	$where
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

			$this->session->sess_destroy();

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
