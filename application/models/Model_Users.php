<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Model_Users extends MY_Model {


	public function __construct()
	{
		parent::__construct();
	}


	// create
		public function insert_user( $data )
		{

			$password = password_hash( $data[ 'txtPassword'	], PASSWORD_BCRYPT, array( 'cost' => 12 ) );

		    $user = array(

				    		'strUserId' 			=>	$data[ 'txtUserId' 		],
							'strUserName' 			=>	$data[ 'txtUserName'	],
							'strUserEmail' 			=>	$data[ 'txtUserEmail'	],
							'strUserPassword' 		=>	$password,
							'strUserFirstName' 		=>	$data[ 'txtFirstName'	],
							'strUserMiddleName' 	=>	$data[ 'txtMiddleName'	],
							'strUserLastName' 		=>	$data[ 'txtLastName'	],
							'strUserAccessType'		=>	$data[ 'txtAccessType' 	],
							'dtmUserDateOfBirth'	=>	NULL
		    			);

			$user += $this->insert;
			$user += $this->update;
		    // $this->db->set( 'dtmUserDateUpdated', 	'NOW()', FALSE );
		    // $this->db->set( 'dtmUserDateInserted', 	'NOW()', FALSE );
			// log_message( 'log', 'Begin '.__LINE__."\n\t--> ".__METHOD__.'.' );

				$this->db->trans_start();

			    	$this->db->insert( 'tblusers', $user );

				$this->db->trans_complete();

				if ( $this->db->trans_status() === FALSE )
				{
					log_message( 'error', __LINE__.' '.__METHOD__."\n\n".$this->db->error() );
				}
				else
				{
					// log_message( 'log', __LINE__.' '.__METHOD__."\n\n".$this->db->last_query() );
				}

			// log_message( 'log', 'End '.__LINE__."\n\t--> ".__METHOD__.'.' );

		}
	// create

	// retrieve
		// public function retrieve_all_users_record_detials ()
		// {
		// 	log_message( 'log', 'Begin '.__LINE__."\n\t--> ".__METHOD__.'.' );

		// 		$this->db->select( '*' );
		// 		$this->db->where( 'tblusers.blnIsActive', ACTIVE );

		// 		$query = $this->db->get( 'tblusers' );

		// 	log_message( 'log', $this->db->last_query() );
		// 	log_message( 'log', 'End '.__LINE__."\n\t--> ".__METHOD__.'.' );

		// 		return $query->result_array();
		// }

		public function retrieve_all_users_record_detials (
																$sort_field = 'dtmDateUpdated',
																$order_type = DESC,
																$no_rows =  10,
																$offset = 0
	 														)
		{
			// log_message( 'log', 'Begin '.__LINE__."\n\t--> ".__METHOD__.'.' );

				$this->db->select( '*' );
				$this->db->where( 'tblusers.blnIsActive', ACTIVE );
				$this->db->order_by( $sort_field, $order_type );
				$this->db->limit( $no_rows, $offset );

				$query = $this->db->get( 'tblusers' );

			// log_message( 'log', $this->db->last_query() );
			// log_message( 'log', 'End '.__LINE__."\n\t--> ".__METHOD__.'.' );

				return $query->result_array();
		}

		public function retrieve_users_record_total	()
		{
			// log_message( 'log', 'Begin '.__LINE__."\n\t--> ".__METHOD__.'.' );

				$this->db->select( '*' );
				$this->db->where( 'tblusers.blnIsActive', ACTIVE );

			// log_message( 'log', $this->db->last_query() );
			// log_message( 'log', 'End '.__LINE__."\n\t--> ".__METHOD__.'.' );

				return $this->db->count_all_results( 'tblusers' );
		}

		public function retrieve_user_record_details_by_id ( $user_id )
		{
			// log_message( 'log', 'Begin '.__LINE__."\n\t--> ".__METHOD__.'.' );

				$this->db->select( '*' );
				$this->db->where( 'tblusers.strUserId', $user_id );
				$this->db->where( 'tblusers.blnIsActive', ACTIVE );

				$query = $this->db->get( 'tblusers' );

			// log_message( 'log', print_r( $this->db->last_query(), TRUE ) );
			// log_message( 'log', 'End '.__LINE__."\n\t--> ".__METHOD__.'.' );

				return $query->row_array();
		}

		public function retrieve_user_record_details_by_username ( $username )
		{
			// log_message( 'log', 'Begin '.__LINE__."\n\t--> ".__METHOD__.'.' );

				$this->db->select( '*' );
				$this->db->where( 'tblusers.strUserName', $username );
				$this->db->where( 'tblusers.blnIsActive', ACTIVE );

				$query = $this->db->get( 'tblusers' );

			// log_message( 'log', $this->db->last_query() );
			// log_message( 'log', 'End '.__LINE__."\n\t--> ".__METHOD__.'.' );

				return $query->row_array();
		}

		public function retrive_last_user_id()
		{
			return $this->retrive_last_record_id(
													'strUserId',
													'tblusers'
			 									);
		}
	// retrieve

	// update
		public function update_user_session_id (
		                                        	$session_id = NULL,
		                                        	$user_name
												)
		{
			// log_message( 'log', 'Begin '.__LINE__."\n\t--> ".__METHOD__.'.' );
			$this->db->trans_start();

				$this->db->set( 'tblusers.strSessionId', $session_id );
				$this->db->set( $this->update );
				$this->db->where( 'tblusers.strUserName', $user_name );
		    	$this->db->update( 'tblusers' );

			$this->db->trans_complete();

			if ( $this->db->trans_status() === FALSE )
			{
				log_message( 'error', __LINE__.' '.__METHOD__."\n\n".$this->db->error() );
			}
			else
			{
				// log_message( 'log', __LINE__.' '.__METHOD__."\n\n".$this->db->last_query() );

				return $this->retrieve_user_record_details_by_username( $user_name );
				// log_message( 'log', 'Finish record updated' );
			}
			// log_message( 'log', 'End '.__LINE__."\n\t--> ".__METHOD__.'.' );
		}
	// update

	// delete
		public function soft_delete_user( $data )
		{

			$where = array(
							'strUserId' => html_escape( $data[ 'strUserId' ] )
						);

			parent::soft_delete_record(
										'tblusers',
										$where
									);
		}
	// delete
}
