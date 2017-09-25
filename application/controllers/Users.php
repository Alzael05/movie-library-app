<?php

	defined('BASEPATH') OR exit('No direct script access allowed');

	class Users extends MY_Controller
	{
		public function __construct()
		{
			parent::__construct();

			// $is_log_in = $this->check_login_session( "Please log-in first." );

			// if ( ! $is_log_in )
			// 	redirect( base_url().'index' );

			// $user_info = $this->get_user_info();
			$this->check_access_level( $this->user_infos[ 'strUserAccessType' ], 'announcements' );

		}

		public function index()
		{
			$data[ 'link' 		]	= $this->load_link();
			$data[ 'script' 	]	= $this->load_scripts();

			$data[ 'header' 	]	= $this->load_common_header();
			$data[ 'footer' 	]	= $this->load_common_footer();

			$data[ 'form_open' 	]	= form_open( 'admin/create' );
			$data[ 'form_close' ]	= form_close();

			$this->load->view( 'users/viewUsersCRUD', $data );
		}

		public function create()
		{
			// $this->input->post();

			// if (condition)
			// {
			// 	# code...
			// }
		}

		public function retrieve()
		{

			if ( $this->input->is_ajax_request() )
				{
					$this->output->enable_profiler( FALSE );

					$data = $this->input->post();

					$page 		= isset( $data[ 'page' 	] ) ? intval( $data[ 'page'  ] ) : 1;
					$no_rows 	= isset( $data[ 'rows' 	] ) ? intval( $data[ 'rows'  ] ) : 10;
					$sort_field = isset( $data[ 'sort' 	] ) ? strval( $data[ 'sort'  ] ) : 'dtmDateUpdated';
					$order_type	= isset( $data[ 'order' ] ) ? strval( $data[ 'order' ] ) : 'DESC';
					$offset 	= ( $page - 1 ) * $no_rows;

					$total_user 	= $this->USERS->retrieve_users_record_total();

					$result_user 	= $this->USERS->retrieve_all_users_record_detials(
																						$sort_field,
																						$order_type,
																						$no_rows,
																						$offset
																					);

					// $result_user 	= $this->USERS->retrieve_all_users_record_detials();

					foreach( $result_user as $temp_user )
					{
						$user[ $temp_user[ 'strUserId' ] ] = $temp_user;
					}
						// log_message( 'error', print_r( $user, true ) );

					foreach ( $result_user as &$temp_usr )
					{

						$temp_upId = isset( $user[ $temp_usr[ 'strUpdatedById'	] ][ 'strUserName' ] ) ? $user[ $temp_usr[ 'strUpdatedById'	 ] ][ 'strUserName' ] : 'N/A';

						$temp_inId = isset( $user[ $temp_usr[ 'strInsertedById'	] ][ 'strUserName' ] ) ? $user[ $temp_usr[ 'strInsertedById' ] ][ 'strUserName' ] : 'N/A';

						$temp_usr[ 'updatedBy'	] = $temp_upId ;
						// $result_announ[ $key ][ 'strUpdatedById'		] = $temp_usr[ 'strUpdatedById'	];

						$temp_usr[ 'insertedBy'	] = $temp_inId;
						// $result_announ[ $key ][ 'strInsertedById'		] = $temp_announ[ 'strInsertedById'	];
					}

						// log_message( 'error', print_r( $result_user, true ) );


					$result[ 'total' ] 	= $total_user;
					$result[ 'rows'  ] 	= $result_user;

					$this->output->set_content_type( 'JSON' )
								->set_status_header( 200 )
								->set_output( json_encode( $result ) );
				}
				else
				{
					show_404( '' );
				}
		}

		public function update()
		{

		}

		public function delete()
		{

		}
	}
