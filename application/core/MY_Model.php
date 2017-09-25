<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class MY_Model extends CI_Model
{
	public function __construct()
	{
		parent::__construct();

    	// date_default_timezone_set('Asia/Manila');

		// load database
			// $this->load->database();
		//

		// helper
			// $this->load->helper( 'url' );
			// $this->load->helper( 'date' );

			// $this->load->helper( 'app_helper' );
		// helper

		$this->insert = array(
								'blnIsActive'		=>	ACTIVE,
								'strInsertedById'	=>	$this->session->userdata( USERINFO )[ 'strUserId' ], //$data[ 'userid' ][ 'strUserId'  ],
								'dtmDateInserted'	=>	get_date()
							);


		$this->update = array(

								'strUpdatedById'	=>	$this->session->userdata( USERINFO )[ 'strUserId' ], //$data[ 'userid' ][ 'strUserId'  ],
								'dtmDateUpdated'	=>	get_date()
				 			);

		$this->delete = array(
								'blnIsActive'		=>	INACTIVE,
							);


	}

	// retrieve
		// public function retrieve_record_details(
		// 											$table,

		// 											$select	= array(),
		// 											$join	= array(),
		// 											$where	= array(),
		// 											// $is_active 	= TRUE,
		// 											$order	= array(),
		// 											$limit	= array()
		// 										)
		// {

		// 	// if ( is_array( $data ) )
		// 	// {
		// 	// 	$this->db->where_in( $field, $data );
		// 	// }
		// 	// else
		// 	// {
		// 	// 	$this->db->where( $field, $data );
		// 	// }
		// 	log_message( 'log', 'Begin '.__LINE__."\n\t\t--> ".__METHOD__.'.' );

		// 	if ( isset( $select ) && ! empty( $select ) ) //select fields
		// 	{
		// 		foreach ( $select as $value )
		// 		{
		// 			$this->db->select( $value );
		// 		}
		// 	}

		// 	if( isset( $join ) &&  ! empty( $join ) ) // join conditions
		// 	{

		// 		if ( isset( $join[ 'type' ] ) )
		// 		{
		// 			$type = $join[ 'type' ];
		// 			unset( $join[ 'type' ] );

		// 			foreach ( $join as $key => $value )
		// 			{
		// 				$this->db->join( $key, $value, $type );
		// 			}
		// 		}
		// 		else
		// 		{
		// 			foreach ( $join as $key => $value )
		// 			{
		// 				$this->db->join( $key, $value );
		// 			}
		// 		}
		// 	}

		// 	if ( isset( $where ) && ! empty( $where ) ) // query where
		// 	{
		// 		foreach ( $where as $field => $value )
		// 		{
		// 			$this->db->where( $field, $value );
		// 		}
		// 	}

		// 	// if( $is_active ) // is active?
		// 	// {
		// 	// 	$this->db->where( $table.'.intIsActive', ACTIVE );
		// 	// }
		// 	// else
		// 	// {
		// 	// 	$this->db->where( $table.'.intIsActive', $is_active );
		// 	// }

		// 	if ( isset( $order ) && ! empty( $order ) ) // query order
		// 	{
		// 		foreach ( $order as $field => $value )
		// 		{
		// 			$this->db->order_by( $field, $value );
		// 		}
		// 	}

		// 	if ( isset( $limit ) && ! empty( $limit ) ) // query limits
		// 	{
		// 		foreach ( $limit as $key => $value )
		// 		{
		// 			$this->db->limit( $key, $value );
		// 		}
		// 	}

		// 	$query = $this->db->get( $table );

		// 	// if ( $this->db->trans_status() === FALSE )
		// 	// {
		// 	// 	log_message( 'error', $this->db->error() );
		// 	// 	log_message( 'log', 'Error failed record retrieving' );

		// 	// 	return $query->result_array();
		// 	// }
		// 	// else
		// 	// {
		// 		log_message( 'log', $this->db->last_query() );
		// 		log_message( 'log', 'End '.__LINE__."\n\t\t--> ".__METHOD__.'.' );
		// 		// log_message( 'log', 'Finish record retrieving' );

		// 		return $query->result_array();
		// 	// }


		// 	// $temp_result = $query->result_array();
		// 	// foreach ( $temp_result as $value )
		// 	// {
		// 	// 	$result[] = $value;
		// 	// }

		// 	// 	show_array( $result );
		// }

		// public function retrieve_record_total(
		// 										$table,

		// 										$where 	= array()
		// 									)
		// {
		// 	log_message( 'log', 'Begin '.__LINE__."\n\t\t--> ".__METHOD__.'.' );

		// 	if ( isset( $where ) && ! empty( $where ) ) // query where
		// 	{
		// 		foreach ( $where as $field => $value )
		// 		{
		// 			$this->db->where( $field, $value );
		// 		}
		// 	}

		// 	log_message( 'log', $this->db->last_query() );
		// 	log_message( 'log', 'End '.__LINE__."\n\t\t--> ".__METHOD__.'.' );

		// 	return $this->db->count_all_results( $table );
		// }

		public function retrive_last_record_id (
													$field,
													$table
												)
		{
			// log_message( 'log', 'Begin '.__LINE__."\n\t\t--> ".__METHOD__.'.' );

			$this->db->select( $field );
			$this->db->where( $table.'.blnIsActive', ACTIVE );
			$this->db->order_by( $table.'.dtmDateInserted', DESC );
			$this->db->limit( 1 );
			$this->db->get( $table );

			$query = $this->db->get( $table );

			// log_message( 'log', $this->db->last_query() );
			// log_message( 'log', 'End '.__LINE__."\n\t\t--> ".__METHOD__.'.' );

			return $query->row_array();
		}

	// retrieve

	// update
		// public function update_record_details(
		// 										$table,

		// 										$set	= array(),
		// 										$where 	= array()
		// 									)
		// {
		// 	log_message( 'log', 'Begin '.__LINE__."\n\t\t--> ".__METHOD__.'.' );
		// 	$this->db->trans_start();


		// 		if ( isset( $set ) && ! empty( $set ) )
		// 		{
		// 			if ( isset( $where ) && ! empty( $where ) ) // query where
		// 			{
		// 				foreach ( $where as $field => $value )
		// 				{
		// 					$this->db->where( $field, $value );
		// 				}
		// 			}

		// 			$set += $this->update;

		// 		}

		// 		$this->db->update( $table, $set );

		// 	$this->db->trans_complete();

		// 	if ( $this->db->trans_status() === FALSE )
		// 	{
		// 		log_message( 'error', $this->db->error() );
		// 	}
		// 	else
		// 	{
		// 		log_message( 'log', $this->db->last_query() );
		// 		// log_message( 'log', 'Finish record updated' );
		// 	}
		// 	log_message( 'log', 'End '.__LINE__."\n\t\t--> ".__METHOD__.'.' );
		// }
	// update

	// soft_delete
		public function soft_delete_record(
												$table,

												$where 	= array()
											)
		{
			// log_message( 'log', 'Begin '.__LINE__."\n\t\t--> ".__METHOD__.'.' );

				if ( isset( $where ) && ! empty( $where ) ) // query where
				{
					foreach ( $where as $field => $value )
					{
						$this->db->where( $table.'.'.$field, $value );
					}

				}

	    		$this->db->set( $this->delete );
    			$this->db->set( $this->update );

			$this->db->trans_start();

		    	$this->db->update( $table );

			$this->db->trans_complete();

			if ( $this->db->trans_status() === FALSE )
			{
				log_message( 'error', $this->db->error() );
			}
			else
			{
				log_message( 'log', $this->db->last_query() );
			}

			// log_message( 'log', 'End '.__LINE__."\n\t\t--> ".__METHOD__.'.' );
	    	// $this->db->last_query();
		}
	// soft_delete

		// public function dummy()
		// {
		// 	$this->db->select('*');
		// 	$query = $this->db->get( 'tblsessions' );

		// 	return $query->result_array();
		// }

	// public function retrive_thourgh_chaining(
	// 											$select,
	// 											$from 	= '',
	// 											$join 	= array(),
	// 											$where 	= array()
	// 										)
	// {

	// }


}
