<?php

	defined('BASEPATH') OR exit('No direct script access allowed');

	class Register extends CI_Controller
	{
		public function __construct()
		{
			parent::__construct();

			// $is_log_in = $this->check_login_session();

			// if ( $is_log_in )
			// 	redirect( base_url().'announcements' );
		}

		public function index()
		{


		}



		// public function update()
		// {
		// 	$data = $this->input->post();

		// 	if ( $this->form_validation->run( 'update' ) === FALSE )
		// 	{
		// 		$this->index();
		// 	}
		// 	else
		// 	{

		// 		$result = $this->USERS->retrieve_last_inserted();

		// 		$id = ! empty( $result ) ? $result[ FLD_USER_ID ] : '';

		// 		$data[ 'txtUserId' ] = generate_id( $id, USER );

		// 		$this->USERS->insert_user( $data );
		// 		// $this->index();
		//		redirect( base_url().'register' );
		// 	}
		// }

		// public function delete()
		// {
		// 	$data = $this->input->post();

		// 	if ( $this->form_validation->run( 'delete' ) === FALSE )
		// 	{
		// 		$this->index();
		// 	}
		// 	else
		// 	{

		// 		$result = $this->USERS->retrieve_last_inserted();

		// 		$id = ! empty( $result ) ? $result[ FLD_USER_ID ] : '';

		// 		$data[ 'txtUserId' ] = generate_id( $id, USER );

		// 		$this->USERS->insert_user( $data );
		// 		// $this->index();
		// 		redirect( base_url().'register' );
		// 	}
		// }
	}
