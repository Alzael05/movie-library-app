<?php

	defined('BASEPATH') OR exit('No direct script access allowed');

	class Index extends CI_Controller
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

			$this->form_validation->set_error_delimiters(
    														'
															<!-- <div class="row"> -->
																<div class="alerts alert-danger label-required">
															',
															'	</div>
															<!-- </div> -->
															'
														);

			//<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>

			$this->load->model( 'Model_Users', 			'USERS'  	);
			$this->load->model( 'Model_Logs', 			'LOGS'		);

			$this->lang->load( 'custom', 'english' );

			// $this->session->sess_destroy();
		}

		public function index()
		{
			// $sess_cookie_name = $this->config->item('sess_cookie_name');
			// $temp_name = explode( '_', $sess_cookie_name );
			// $temp_no = $temp_name[ 2 ]++;

			// $this->config->set_item( 'sess_cookie_name', $temp_name[ 0 ].'_'.$temp_name[ 1 ].'_'.$temp_no );
			// $is_log_in =
			// session_regenerate_id();
			$this->loginsession_library->check_session( 'announcements' );
			// if ( $is_log_in )
			// 	redirect( base_url().'announcements' );
			// log_message( 'log', __LINE__.' '.__METHOD__ );
			// log_message( 'log', __LINE__.' '.session_id() );
			// log_message( 'log', __LINE__.' '.base_url() );
			// log_message( 'log', __LINE__.' '.site_url() );
			// log_message( 'log', __LINE__.' '.current_url() );
			// log_message( 'log', __LINE__.' '.index_page() );
			$data[ 'link' 	] 	= $this->load->view( 'links_scripts_import/viewImportLinks', NULL, TRUE );
			$data[ 'script' ] 	= $this->load->view( 'links_scripts_import/viewImportScripts', NULL, TRUE );
			// load view
			$this->load->view( 'viewLogIn', $data );
		}

		public function register()
		{
			$this->loginsession_library->check_session( 'announcements' );

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
			// log_message('error', $this->security->get_csrf_token_name() );
			// log_message('error', $this->security->get_csrf_hash() );

			$this->output->enable_profiler( FALSE );

			$data = $this->input->post();

			log_message('error', 'asdfasdfasdf'.print_r( $data, TRUE ));

			$login = array (
				array (
					'field' => 'txtUserName',
					'label' => 'Username',
					'rules' => 'required'
				),
				array(
					'field' => 'txtPassword',
					'label' => 'Password',
					'rules' => 'required'
				)
			);

			$this->form_validation->set_rules( $login );

			if ( $this->form_validation->run() === FALSE )
			{
				log_message( 'error', __LINE__.' '.__METHOD__.print_r( $data,TRUE ) );

				$response = array(
									'type'		=>	'danger',
									'message'	=>	'Log-in error.'
								);

				if ( $this->input->is_ajax_request() )
				{
					$status = 400;
				}
				else
				{
					flash_message( $response );
				}

			}
			else
			{
				if ( $data )
				{
					$user_info = $this->USERS->retrieve_user_record_details_by_username( html_escape( $data[ 'txtUserName' ] ) );

					if ( $user_info )
					{

						// if ( $user_info[ 0 ][ 'strUserPassword' ] == encrypt_password( $data[ 'txtPassword' ] ) )
						if ( password_verify( $data[ 'txtPassword' ] , $user_info[ 'strUserPassword' ] ) )
						{
							$user_data = $this->USERS->update_user_session_id(
																				session_id(),
																				$data[ 'txtUserName' ]
																			);
							unset( $user_data[ 'strUserPassword' ] );
							log_message( 'log', __LINE__.' '.__METHOD__. print_r( $user_data, TRUE ) );
							// // set user sesssion
							$this->session->set_userdata( USERINFO, $user_data );

							// logs
								$log_message 	= create_log_message(
																		$user_info[ 'strUserName' ],
																		'Logged-in',
																		'Session ID: '.session_id().', '.
																		'IP address: '.$this->input->ip_address()
																	);

								$result 		= $this->LOGS->retrive_last_log_id();
								$id 			= ! empty( $result ) ?$result[ 'strLogId' ] : '';

								$log[ 'txtLogId' 			]	= generate_id( $id, LOGS );
								$log[ 'txtLogDescription' 	]	= $log_message;

								$this->LOGS->insert_log( $log );
							// logs

							// session_write_close();
							// session_regenerate_id();
							if ( $this->input->is_ajax_request() )
							{
								$status = 200;
								$response = array(
												'type'		=>	'redirect',
												'message'	=>	base_url().'announcements'
											);
							}
							else
							{
								log_message( 'log', __LINE__.' '.__METHOD__. print_r( $this->session->userdata( USERINFO ) , TRUE ) );
								redirect( base_url().'announcements' );
							}
						}
						else
						{
							$response = array(
												'type'		=>	'danger',
												'message'	=>	'Wrong Password.'
											);

							flash_message( $response );
						}
					}
					else
					{
						$status   = 403;
						$response = array(
											'type'		=>	'danger',
											'message'	=>	'User doesn\'t exist.'
										);

						flash_message( $response );
					}
				}
			}

			if ( $this->input->is_ajax_request() )
			{
				$response[ 'status' ]	= $status;
				$response[ 'response' ]	= $response;

				log_message('error', print_r($response, TRUE) );
				$this->output->set_content_type( 'json' )
								->set_status_header( $response[ 'status' ] )
								->set_output( json_encode( $response[ 'response' ] ) );
			}
			else
			{
				// $this->index();
				log_message('error','May');
				redirect( base_url().'index' );
			}
		}

		public function logout()
		{

			$hashed_user_id = $this->session->userdata( USERINFO );

			if ( isset( $hashed_user_id ) && ! empty( $hashed_user_id ) )
			{
				$user_info = $this->USERS->retrieve_user_record_details_by_id( $hashed_user_id[ 'strUserId' ] );

				if ( $user_info )
				{
					// update
						$this->USERS->update_user_session_id( NULL, $user_info[ 'strUserName' ] );
					// update

					// logs
						$log_message 		= create_log_message(
																	$user_info[ 'strUserName' ],
																	'Logged-out',
																	'Session ID: '.session_id().', '.
																	'IP address: '.$this->input->ip_address()
																);

						$result 			= $this->LOGS->retrive_last_log_id();
						$id 				= ! empty( $result ) ? $result[ 'strLogId' ] : '';

						$log[ 'txtLogId' 			]	= generate_id( $id, LOGS );
						$log[ 'txtLogDescription' 	]	= $log_message;

						$this->LOGS->insert_log( $log );
					// logs
				}
			}

			// $flag = session_gc(); // PHP 7.1.0

			session_destroy();

			// log_message( 'log', __LINE__.' '.__METHOD__.' '. print_r( $flag, true ) ); // PHP 7.1.0

			redirect( base_url().'index' );
		}

		// public function return_respone_message( $action, $page, $type )
		// {
		// 	if ( $type == 'danger' )
		// 	{
		// 		return array(
		// 						'message' 	=>  'An Error occurred. '.$page.' '.$action.' unsuccessful. '.validation_errors(), //
		// 						'type'		=> 'danger'
		// 					);
		// 	}
		// 	elseif ( $type == 'success' )
		// 	{
		// 		return array(
		// 						'message' 	=>  $page.' is successfully '.$action.'.', //
		// 						'type'		=> 'success'
		// 					);
		// 	}
		// 	else
		// 	{
		// 		log_message( 'error', 'return response message bad' );
		// 	}
		// }

	}
