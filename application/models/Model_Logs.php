<?php

defined('BASEPATH') OR exit('No direct script access allowed');


class Model_Logs extends MY_Model
{
    public function __construct()
    {
		parent::__construct();

    }

    // insert
	    public function insert_log( $data )
	    {
		    $log = array(

							'strLogId' 			=> $data[ 'txtLogId' 			],
							'txtLogDescription' => $data[ 'txtLogDescription' 	],
							'fk_strUserID' 		=> $this->session->userdata( USERINFO )[ 'strUserId' ]
		    			);

		    $log += $this->insert;
		    $log += $this->update;

			// log_message( 'log', 'Begin '.__LINE__."\n\t\t--> ".__METHOD__.'.' );

				$this->db->trans_start();

					$this->db->insert( 'tbllogs', $log );

				$this->db->trans_complete();

				if ( $this->db->trans_status() === FALSE )
				{
					log_message( 'error', __LINE__.' '.__METHOD__."\n\n".print_r( $this->db->error(), true ) );
				}
				else
				{
					// log_message( 'log', __LINE__.' '.__METHOD__."\n\n".print_r( $this->db->last_query(), true ) );
				}

			// log_message( 'log', 'End '.__LINE__."\n\t\t--> ".__METHOD__.'.' );
	    }
    // insert

    // retrieve
		public function retrive_last_log_id()
		{
			return parent::retrive_last_record_id(
													'strLogId',
													'tbllogs'
			 									);
		}
    // retrieve

}
