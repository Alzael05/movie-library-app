<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Model_Announcements extends MY_Model {


	public function __construct()
	{
		parent::__construct();
	}

	// create
		public function insert_announcement( $data )
		{

		    $announcement = array(
						    		// 'strAnnouncementId' 			=>	$data[ 'strAnnouncementId' 			],
									'fk_strUserID' 					=>	$this->session->userdata( USERINFO )[ 'strUserId' ],//$data[ 'userid' ][ 'strUserId'  ],

									'dtmAnnouncementDate' 			=>				 $data[ 'dtmAnnouncementDate'			],
									'strAnnouncementTitle' 			=>	html_escape( $data[ 'strAnnouncementTitle'			] ),
									'txtAnnouncementDescription' 	=>	html_escape( $data[ 'txtAnnouncementDescription'	] ),

									'blnIsSpecial' 					=> 	isset( $data[ 'blnIsSpecial'	] ) ? $data[ 'blnIsSpecial' ] : 0 ,
									'blnIsUrgent' 					=> 	isset( $data[ 'blnIsUrgent'		] ) ? $data[ 'blnIsUrgent' 	] : 0
				    			);

	    	$announcement += $this->insert;
	    	$announcement += $this->update;
		    // $this->db->set( 'dtmUserDateUpdated', 	'NOW()', FALSE );
		    // $this->db->set( 'dtmUserDateInserted', 	'NOW()', FALSE );

			// log_message( 'log', 'Start record insert' );
			// log_message( 'log', 'Begin '.__LINE__."\n\t\t--> ".__METHOD__.'.' );

				$this->db->trans_start();

			    	$this->db->insert( 'tblannouncement', $announcement );

				$this->db->trans_complete();

				if ( $this->db->trans_status() === FALSE )
				{
					log_message( 'error', __LINE__.' '.__METHOD__."\n\n".$this->db->error() );
				}
				else
				{
					log_message( 'log', __LINE__.' '.__METHOD__."\n\n".$this->db->last_query() );
				}

			// log_message( 'log', 'End '.__LINE__."\n\t\t--> ".__METHOD__.'.' );

			return $this->db->insert_id();
		}
	// create

	// retrieve
		public function retrieve_announcement_record_details (
																$sort_field,
																$order_type,
																$no_rows,
																$offset
	 														)
		{
			// log_message( 'log', 'Begin '.__LINE__."\n\t\t--> ".__METHOD__.'.' );

				$this->db->select( '*' );
				$this->db->where( 'tblannouncement.blnIsActive', ACTIVE );
				$this->db->order_by( $sort_field, $order_type );
				$this->db->limit( $no_rows, $offset );

				$query = $this->db->get( 'tblannouncement' );

			// log_message( 'log', $this->db->last_query() );
			// log_message( 'log', 'End '.__LINE__."\n\t\t--> ".__METHOD__.'.' );

				return $query->result_array();
		}

		public function retrieve_announcement_record_total	()
		{
			// log_message( 'log', 'Begin '.__LINE__."\n\t\t--> ".__METHOD__.'.' );

				$this->db->select( '*' );
				$this->db->where( 'tblannouncement.blnIsActive', ACTIVE );

			// log_message( 'log', $this->db->last_query() );
			// log_message( 'log', 'End '.__LINE__."\n\t\t--> ".__METHOD__.'.' );

				return $this->db->count_all_results( 'tblannouncement' );
		}

		// public function retrive_last_announcement_id()
		// {
		// 	return $this->retrive_last_record_id(
		// 											'strAnnouncementId',
		// 											'tblannouncement'
		// 	 									);
		// }
	// retrieve

	// update
		public function update_announcement_record_details( $data )
		{
			// log_message( 'log', 'Begin '.__LINE__."\n\t\t--> ".__METHOD__.'.' );

				$set = array(
							'strAnnouncementTitle' 			=> html_escape( $data[ 'strAnnouncementTitle'		] ),
							'dtmAnnouncementDate' 			=> 				$data[ 'dtmAnnouncementDate'		],
							'txtAnnouncementDescription' 	=> html_escape( $data[ 'txtAnnouncementDescription'	] ),
							'blnIsSpecial' 					=> isset( $data[ 'blnIsSpecial' ] ) ? $data[ 'blnIsSpecial' ] : 0 ,
							'blnIsUrgent' 					=> isset( $data[ 'blnIsUrgent' 	] ) ? $data[ 'blnIsUrgent' 	] : 0
						);

				$this->db->set( $set );
				$this->db->set( $this->update );
				$this->db->where( 'tblannouncement.intAnnouncementId', html_escape( $data[ 'intAnnouncementId' ] ) );

			$this->db->trans_start();

		    	$this->db->update( 'tblannouncement', $set );

			$this->db->trans_complete();

			if ( $this->db->trans_status() === FALSE )
			{
				log_message( 'error', __LINE__.' '.__METHOD__."\n\n".$this->db->error(), true );
			}
			else
			{
				log_message( 'log', __LINE__.' '.__METHOD__."\n\n".print_r( $this->db->last_query(), true ) );
				// log_message( 'log', 'Finish record updated' );
			}
			// log_message( 'log', 'End '.__LINE__."\n\t\t--> ".__METHOD__.'.' );
		}
	// update

	// delete
		public function soft_delete_announcement( $data )
		{

			$where = array(
							'intAnnouncementId' => html_escape( $data[ 'intAnnouncementId' ] )
						);

			parent::soft_delete_record(
										'tblannouncement',
										$where
									);
		}
	// delete
}
