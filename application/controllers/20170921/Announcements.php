<?php

	defined('BASEPATH') OR exit('No direct script access allowed');

	class Announcements extends MY_Controller
	{
		public function __construct()
		{
			parent::__construct();

			$this->load->model( 'Model_Announcements', 	'ANNMNT' 	);
		}

		public function index()
		{
			$data[ 'link' 		] = $this->load->view( 'links_scripts_import/viewImportLinks', NULL, TRUE );
			$data[ 'script' 	] = $this->load->view( 'links_scripts_import/viewImportScripts', NULL, TRUE );

			$data_prep[ 'user_name'	 ] = $this->user_infos[ 'strUserName' 	 ];
			$data_prep[ 'access_lvl' ] = $this->user_infos[ 'strUserAccessType' ];

			$data[ 'header' 	] = $this->load->view( 'common/viewCommonNavbar', $data_prep, TRUE );
			$data[ 'footer' 	] = $this->load->view( 'common/viewCommonFooter', NULL, TRUE );

			$data[ 'form_open' 	] = form_open( 'announcements/create' );
			$data[ 'form_close' ] = form_close();
			// load view

			// log_message('error', $this->security->get_csrf_token_name() );
			// log_message('error', $this->security->get_csrf_hash() );

			$this->load->view( 'announcement/viewAnnouncementCRUD', $data );
		}

		//	create
			public function create()
			{

				$this->output->enable_profiler( FALSE );

				$data = $this->input->post();

				if ( isset( $data ) )
				{
					if ( $this->form_validation->run( 'create_announcement' ) === FALSE )
					{
						if ( $this->input->is_ajax_request() )
						{
							$response[ 'status' 	] = 400;
							$response[ 'response' 	] = $this->return_respone_message(
																						'posting',
																						'Announcement',
																						'danger'
																					);
						}
						else
						{
							$response = $this->return_respone_message(
																		'posting',
																		'Announcement',
																		'danger'
																	);

							flash_message( $response );
						}
					}
					else
					{
						// create
							$return_id = $this->ANNMNT->insert_announcement( $data );
						// create

						// logs
							$log_message 					= create_log_message(
																					$this->user_infos[ 'strUserName' ],
																					'Created --> announcement - '.$return_id
																				);

							$result 						= $this->LOGS->retrive_last_log_id();
							$id 							= ! empty( $result ) ?$result[ 'strLogId' ] : '';

							$log[ 'txtLogId' 			] 	= generate_id( $id, LOGS );
							$log[ 'txtLogDescription' 	]	= $log_message;

							$this->LOGS->insert_log( $log );
						// logs

						if ( $this->input->is_ajax_request() )
						{
							$response[ 'status' 	] = 200;
							$response[ 'response' 	] = $this->return_respone_message(
																						'posted',
																						'Announcement',
																						'success'
																					);
						}
						else
						{
							$response = $this->return_respone_message(
																		'posted',
																		'Announcement',
																		'success'
																	);

							flash_message( $response );
						}

					}
				}
				else
				{
					if ( $this->input->is_ajax_request() )
					{
						$response[ 'status' 	] = 400;
						$response[ 'response' 	] = $this->return_respone_message(
																					'posting',
																					'Announcement',
																					'danger'
																				);
					}
					else
					{
						$response = $this->return_respone_message(
																	'posting',
																	'Announcement',
																	'danger'
																);
						flash_message( $response );
					}
				}

				if ( $this->input->is_ajax_request() )
				{
					$this->output->set_content_type( 'json' )
									->set_status_header( $response[ 'status' ] )
									->set_output( json_encode( $response[ 'response' ] ) );
					// echo json_encode( $response );
				}
				else
				{
					redirect( base_url().'announcements' );
				}
			}
		//	create

		//	retrieve
			public function retrieve()
			{
				if ( $this->input->is_ajax_request() )
				{
					$this->output->enable_profiler( FALSE );

					$data = $this->input->post();

					log_message( 'log', print_r( __LINE__.' '.__METHOD__, true ) );

					$page 		= isset( $data[ 'page' 	] ) ? intval( $data[ 'page'  ] ) : 1;
					$no_rows 	= isset( $data[ 'rows' 	] ) ? intval( $data[ 'rows'  ] ) : 10;
					$sort_field = isset( $data[ 'sort' 	] ) ? strval( $data[ 'sort'  ] ) : 'dtmAnnouncementDate';
					$order_type	= isset( $data[ 'order' ] ) ? strval( $data[ 'order' ] ) : 'DESC';
					$offset 	= ( $page - 1 ) * $no_rows;

					$total_announ 	= $this->ANNMNT->retrieve_announcement_record_total();

					$result_announ 	= $this->ANNMNT->retrieve_announcement_record_details(
																							$sort_field,
																							$order_type,
																							$no_rows,
																							$offset
																						);
					$result_announ1 = $result_announ;

					$result_user 	= $this->USERS->retrieve_all_users_record_detials();


					foreach ( $result_user as $temp_user )
					{
						$user[ $temp_user[ 'strUserId' ] ] = $temp_user;
					}

					foreach ( $result_announ as &$temp_announ )
					{
						$temp_announ[ 'updatedBy'	] = $user[ $temp_announ[ 'strUpdatedById'	] ][ 'strUserName' ];
						$temp_announ[ 'insertedBy'	] = $user[ $temp_announ[ 'strInsertedById' 	] ][ 'strUserName' ];
					}

					$result[ 'total' ] 	= $total_announ;
					$result[ 'rows'  ] 	= $result_announ;

					// echo json_encode( $result );
					$this->output->set_content_type( 'json' )
									->set_status_header( 200 )
									->set_output( json_encode( $result ) );
				}
				else
				{
					show_404( 'Honey May' );
				}
			}
		//	retrieve

		// update
			public function update()
			{
				$this->output->enable_profiler( FALSE );

				$data = $this->input->post();

				if ( isset( $data ) )
				{

					if ( $this->form_validation->run( 'update_announcement' ) === FALSE )
					{
						if ( $this->input->is_ajax_request() )
						{
							$response[ 'status' 	] = 400;
							$response[ 'response' 	] = $this->return_respone_message(
																						'update',//print_r(  $data, true ),//
																						'Announcement' ,
																						'danger'
																					);
						}
						else
						{
							$response = $this->return_respone_message(
																		print_r(  $data, true ),//'update',//
																		'Announcement' ,
																		'danger'
																	);

							flash_message( $response );
						}
					}
					else
					{
						// update
							$result = $this->ANNMNT->update_announcement_record_details	( $data );
						// update

						// logs
							$log_message 					= create_log_message(
																					$this->user_infos[ 'strUserName' ],
																					'Updated --> announcement - '.$data[ 'intAnnouncementId' ]
																				);

							$result 						= $this->LOGS->retrive_last_log_id();
							$id 							= ! empty( $result ) ?$result[ 'strLogId' ] : '';

							$log[ 'txtLogId' 			] 	= generate_id( $id, LOGS );
							$log[ 'txtLogDescription' 	]	= $log_message;

							$this->LOGS->insert_log( $log );
						// logs

						// echo json_encode( $result );
						// echo json_encode( $where );
						if ( $this->input->is_ajax_request() )
						{
							$response[ 'status' 	] = 200;
							$response[ 'response' 	] = $this->return_respone_message(
																						'updated',
																						'Announcement',
																						'success'
																					);
						}
						else
						{
							$response = $this->return_respone_message(
																		'updated',
																		'Announcement',
																		'success'
																	);

							flash_message( $response );
						}
					}
				}
				else
				{
					if ( $this->input->is_ajax_request() )
					{
						$response[ 'status' 	] = 400;
						$response[ 'response' 	] = $this->return_respone_message(
																					'update',
																					'Announcement',
																					'danger'
																				);
					}
					else
					{
						$response = $this->return_respone_message(
																	'update',
																	'Announcement',
																	'danger'
																);

						flash_message( $response );
					}
				}

				if ( $this->input->is_ajax_request() )
				{
					// echo json_encode( $response );
					$this->output->set_content_type( 'json' )
									->set_status_header( $response[ 'status' ] )
									->set_output( json_encode( $response[ 'response' ] ) );
				}
				else
				{
					redirect( base_url().'announcements' );
				}
			}
		// update

		// delete
			public function delete()
			{
				$this->output->enable_profiler( FALSE );

				$data = $this->input->post();

				if ( isset( $data ) )
				{
					if ( $this->form_validation->run( 'delete_announcement' ) === FALSE )
					{
						if ( $this->input->is_ajax_request() )
						{
							$response[ 'status' 	] = 400;
							$response[ 'response' 	] = $this->return_respone_message(
																						'delete',
																						'Announcement',
																						'danger'
																					);
						}
						else
						{
							$response = $this->return_respone_message(
																		'delete',
																		'Announcement',
																		'danger'
																	);

							flash_message( $response );
						}
					}
					else
					{

						// delete
							$result = $this->ANNMNT->soft_delete_announcement( $data );
						// delete

						// logs
							$log_message 					= create_log_message(
																					$this->user_infos[ 'strUserName' ],
																					'Deleted --> announcement - '.$data[ 'intAnnouncementId' ]
																				);

							$result 						= $this->LOGS->retrive_last_log_id();
							$id 							= ! empty( $result ) ?$result[ 'strLogId' ] : '';

							$log[ 'txtLogId' 			] 	= generate_id( $id, LOGS );
							$log[ 'txtLogDescription' 	]	= $log_message;

							$this->LOGS->insert_log( $log );
						// logs

						if ( $this->input->is_ajax_request() )
						{
							$response[ 'status' 	] = 200;
							$response[ 'response' 	] = $this->return_respone_message(
																						'deleted',
																						'Announcement',
																						'success'
																					);
						}
						else
						{
							$response = $this->return_respone_message(
																		'delete',
																		'Announcement',
																		'success'
																	);

							flash_message( $response );
						}
					}
				}
				else
				{
					if ( $this->input->is_ajax_request() )
					{
						$response[ 'status' 	] = 400;
						$response[ 'response' 	] = $this->return_respone_message(
																					'delete',
																					'Announcement',
																					'danger'
																				);
					}
					else
					{
						$response = $this->return_respone_message(
																	'delete',
																	'Announcement',
																	'danger'
																);

						flash_message( $response );
					}
				}

				if ( $this->input->is_ajax_request() )
				{
					$this->output->set_content_type( 'json' )
									->set_status_header( $response[ 'status' ] )
									->set_output( json_encode( $response[ 'response' ] ) );
					// echo ;
				}
				else
				{
					redirect( base_url().'announcements' );
				}
			}
		// delete

	}
