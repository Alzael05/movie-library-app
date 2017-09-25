<?php

	defined('BASEPATH') OR exit('No direct script access allowed');

	class Announcements extends MY_Controller
	{
		public function __construct()
		{
			parent::__construct();

			// $is_log_in = $this->check_login_session( 'Please log-in first.' );

			// if ( ! $is_log_in )
			// 	redirect( base_url().'index' );
		}

		public function index()
		{
			$data[ 'link' 		] = $this->load_link();
			$data[ 'script' 	] = $this->load_scripts();

			$data[ 'header' 	] = $this->load_common_header();
			$data[ 'footer' 	] = $this->load_common_footer();

			$data[ 'form_open' 	] = form_open( 'announcements/create' );
			$data[ 'form_close' ] = form_close();
			// load view

			$this->load->view( 'announcement/viewAnnouncementCRUD', $data );
		}

		//	create
			public function create()
			{

				$this->output->enable_profiler( FALSE );

				// $segment_3 = $this->uri->segment( 3 );

				// $if_ajax = isset( $segment_3 ) ? $segment_3 : '' ;

				// if ( $this->input->is_ajax_request() )
				// {
				// 	$data = $this->input->post();

				// 	log_message( 'error', print_r( $data, true ) );

				// 	unset( $data[ 'data' ][ 'row' ] );

				// 	$_POST[ 'strAnnouncementTitle' 			] = $data[ 'data' ][ 'changes' ][ 'strAnnouncementTitle' 		] ;
				// 	$_POST[ 'dtmAnnouncementDate' 			] = $data[ 'data' ][ 'changes' ][ 'dtmAnnouncementDate'			];
				// 	$_POST[ 'txtAnnouncementDescription' 	] = $data[ 'data' ][ 'changes' ][ 'txtAnnouncementDescription' 	];
				// 	$_POST[ 'blnIsSpecial' 					] = $data[ 'data' ][ 'changes' ][ 'blnIsSpecial'				];
				// 	$_POST[ 'blnIsUrgent' 					] = $data[ 'data' ][ 'changes' ][ 'blnIsUrgent'					];

				// 	unset( $data[ 'data' ] );
				// }

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

						// $result 						= $this->ANNMNT->retrive_last_announcement_id();
						// $id 							= ! empty( $result ) ? $result[ 'intAnnouncementId' ] : '';
						// $data[ 'intAnnouncementId' ] 	= generate_id( $id, ANMNT );
						// $temp							= $this->session->userdata( USERINFO );
						// $data[ 'userid' ] 				= $temp;//;
						$return_id = $this->ANNMNT->insert_announcement( $data );
						// {

						// logs
							$log_message 					= create_log_message(
																					$this->user_infos[ 'strUserName' ],
																					'Created --> announcement - '.$return_id//$data[ 'intAnnouncementId' ]
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
					$this->output->set_content_type( 'application/json' )
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

					// log_message( 'debug', print_r( $data, true ) );

					$page 		= isset( $data[ 'page' 	] ) ? intval( $data[ 'page'  ] ) : 1;
					$no_rows 	= isset( $data[ 'rows' 	] ) ? intval( $data[ 'rows'  ] ) : 10;
					$sort_field = isset( $data[ 'sort' 	] ) ? strval( $data[ 'sort'  ] ) : 'dtmAnnouncementDate';
					$order_type	= isset( $data[ 'order' ] ) ? strval( $data[ 'order' ] ) : 'DESC';
					$offset 	= ( $page - 1 ) * $no_rows;
					// $join = array(
					// 				'tblusers'  =>  'tblannouncement.fk_strUserId = tblusers.strUserId',
					// 				'type' 		=> 	'left'
					// 			);

					// $where = array(
					// 				'blnIsActive'	=> ACTIVE
					// 			);

					// $order = array(
					// 				$sort_field	=> $order_type
					// 			);

					// $limit = array(
					// 				$no_rows	=> $offset
					// 			);

					// $total_announ 	= $this->ANNMNT->retrieve_record_total(
					// 														'tblannouncement',
					// 														$where
					// 													);

					$total_announ 	= $this->ANNMNT->retrieve_announcement_record_total();

					// $result_announ 	= $this->ANNMNT->retrieve_record_details(
					// 														'tblannouncement',
					// 														array(),
					// 														array(),
					// 														$where,
					// 														$order,
					// 														$limit
					// 													);

					$result_announ 	= $this->ANNMNT->retrieve_announcement_record_details(
																							$sort_field,
																							$order_type,
																							$no_rows,
																							$offset
																						);
					$result_announ1 = $result_announ;
					// $result_user 	= $this->USERS->retrieve_record_details(
					// 														'tblusers',
					// 														array(),
					// 														array(),
					// 														array()
					// 													);

					$result_user 	= $this->USERS->retrieve_all_users_record_detials();


					foreach( $result_user as $temp_user )
					{
						$user[ $temp_user[ 'strUserId' ] ] = $temp_user;
					}

					// foreach ( $result_announ as $key => $temp_announ )
					// {
					// 	$result_announ[ $key ][ 'updatedBy'		] = $user[ $temp_announ[ 'strUpdatedById'	] ][ 'strUserName' ];
					// 	// $result_announ[ $key ][ 'strUpdatedById'		] = $temp_announ[ 'strUpdatedById'	];

					// 	$result_announ[ $key ][ 'insertedBy'	] = $user[ $temp_announ[ 'strInsertedById' 	] ][ 'strUserName' ];
					// 	// $result_announ[ $key ][ 'strInsertedById'		] = $temp_announ[ 'strInsertedById'	];
					// }

					// log_message( 'log', print_r( $result_announ, true ) );

					foreach ( $result_announ as &$temp_announ )
					{

						$temp_announ[ 'updatedBy'	] = $user[ $temp_announ[ 'strUpdatedById'	] ][ 'strUserName' ];
						// $result_announ[ $key ][ 'strUpdatedById'		] = $temp_announ[ 'strUpdatedById'	];

						$temp_announ[ 'insertedBy'	] = $user[ $temp_announ[ 'strInsertedById' 	] ][ 'strUserName' ];
						// $result_announ[ $key ][ 'strInsertedById'		] = $temp_announ[ 'strInsertedById'	];
					}

					// log_message( 'log', print_r( $result_announ1, true ) );

					$result[ 'total' ] 	= $total_announ;
					$result[ 'rows'  ] 	= $result_announ;

					// show_array( $result_announ );
					// echo '<pre>';
					// echo json_encode( $result_announ );
					echo json_encode( $result );
					// echo '</pre>';
				}
				else
				{
					show_404( '' );
				}
			}
		//	retrieve

		// update
			public function update()
			{
				$this->output->enable_profiler( FALSE );

				// if ( $this->input->is_ajax_request() )
				// {
				// 	$data = $this->input->post();

				// 	// unset( $data[ 'data' ][ 'changes' ] );
				// 	log_message( 'error', print_r( $data, true ) );

				// 	$_POST[ 'intAnnouncementId' 			] = $data[ 'data' ][ 'row' ][ 'intAnnouncementId'			];
				// 	$_POST[ 'dtmAnnouncementDate' 			] = $data[ 'data' ][ 'row' ][ 'dtmAnnouncementDate'			];
				// 	$_POST[ 'strAnnouncementTitle' 			] = $data[ 'data' ][ 'row' ][ 'strAnnouncementTitle'		];
				// 	$_POST[ 'txtAnnouncementDescription' 	] = $data[ 'data' ][ 'row' ][ 'txtAnnouncementDescription'	];
				// 	$_POST[ 'blnIsSpecial' 					] = $data[ 'data' ][ 'row' ][ 'blnIsSpecial'				];
				// 	$_POST[ 'blnIsUrgent' 					] = $data[ 'data' ][ 'row' ][ 'blnIsUrgent'					];

				// 	unset( $_POST[ 'data' ] );
				// }

				$data = $this->input->post();

				// log_message( 'error' , 'update'.print_r( $data, true ) );

				if ( isset( $data ) )
				{
					// if ( !empty( $data ) )
					// {
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
							// echo 'validation_errors()';
							// echo json_encode( $response );
							// echo json_encode( validation_errors() );
						}
						else
						{

							$set = array(
											'strAnnouncementTitle' 			=> html_escape( $data[ 'strAnnouncementTitle'		] ),
											'dtmAnnouncementDate' 			=> 				$data[ 'dtmAnnouncementDate'		],
											'txtAnnouncementDescription' 	=> html_escape( $data[ 'txtAnnouncementDescription'	] ),
											'blnIsSpecial' 					=> isset( $data[ 'blnIsSpecial' ] ) ? $data[ 'blnIsSpecial' ] : 0 ,
											'blnIsUrgent' 					=> isset( $data[ 'blnIsUrgent' 	] ) ? $data[ 'blnIsUrgent' 	] : 0
										);

							$where = array(
											'intAnnouncementId' 			=> html_escape( $data[ 'intAnnouncementId'			] )
										);

							$result = $this->ANNMNT->update_record_details	(
																				'tblannouncement',
																				$set,
																				$where
																			);

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
					// }
					// else
					// {

					// }
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
					$this->output->set_content_type( 'application/json' )
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

				// if ( $this->input->is_ajax_request() )
				// {
				// 	$data = $this->input->post();

				// 	// unset( $data[ 'data' ][ 'changes' ] );

				// 	$_POST[ 'intAnnouncementId' ] 		= $data[ 'data' ][ 'row' ][ 'intAnnouncementId' ];

				// 	unset( $_POST[ 'data' ] );
				// }

				$data = $this->input->post();

				if ( isset( $data ) )
				{
					// if ( !empty( $data ) )
					// {
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

							$where = array(
											'tblannouncement.intAnnouncementId' => $data[ 'intAnnouncementId' ]
										);

							$result = $this->ANNMNT->soft_delete_record(
																			'tblannouncement',
																			$where
																		);

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
					// }
					// else
					// {

					// }
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
					$this->output->set_content_type( 'application/json' )
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

		// callback validations
			function _check_for_script_tags( $input )
			{
				// $pattern2 = '/<script[^>]*>(?:[^<]+|<(\/script>))+/im';
				// $pattern = '/<script[^>]*>(\X*?)<\/script>|<script>/im';
				$pattern = '/(<script[^>]*>)(\X*?)(<\/script>)|<script>|<\/script>/im';
				// $result =

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
