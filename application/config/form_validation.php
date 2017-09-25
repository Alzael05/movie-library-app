<?php

	$config = array(




					// user
						'create_user' => array(
												array(
														'field' => 'txtUserName',
														'label' => 'Username',
														'rules' => 'required|is_unique[tblusers.strUserName]'
													),
												array(
														'field' => 'txtUserEmail',
														'label' => 'E-mail',
														'rules' => 'required|valid_email|is_unique[tblusers.strUserEmail]'
													),
												array(
														'field' => 'txtPassword',
														'label' => 'Password',
														'rules' => 'required'
													),
												array(
														'field' => 'txtRePassword',
														'label' => 'Re-type Password',
														'rules' => 'required|matches[txtPassword]'
													),
												array(
														'field' => 'txtFirstName',
														'label' => 'First Name',
														'rules' => 'required'
													),
												array(
														'field' => 'txtMiddleName',
														'label' => 'Middle Name',
														'rules' => ''
													),
												array(
														'field' => 'txtLastName',
														'label' => 'Last Name',
														'rules' => 'required'
													)
											),

						'update_user' => array(
												array(
														'field' => 'txtUserName',
														'label' => 'Username',
														'rules' => 'required|is_unique[tblusers.strUserName]'
													),
												array(
														'field' => 'txtUserEmail',
														'label' => 'E-mail',
														'rules' => 'required|valid_email|is_unique[tblusers.strUserEmail]'
													),
												array(
														'field' => 'txtFirstName',
														'label' => 'First Name',
														'rules' => 'required'
													),
												array(
														'field' => 'txtMiddleName',
														'label' => 'Middle Name',
														'rules' => ''
													),
												array(
														'field' => 'txtLastName',
														'label' => 'Last Name',
														'rules' => 'required'
													)
											),

						'delete_user' => array(

											),

					// user
					// announcement
						'create_announcement' => array(
														array(
																'field' => 'strAnnouncementTitle',
																'label' => 'Title',
																'rules' => 'required|is_unique[tblannouncement.strAnnouncementTitle]|callback__check_for_script_tags'
															),
														array(
																'field' => 'txtAnnouncementDescription',
																'label' => 'Description',
																'rules' => 'required|callback__check_for_script_tags'
															),
													),

						'update_announcement' => array(
														array(
																'field' => 'intAnnouncementId',
																'label' => 'Title',
																'rules' => 'required'
															),
														array(
																'field' => 'strAnnouncementTitle',
																'label' => 'Title',
																'rules' => 'required|callback__check_for_script_tags'
															),
														array(
																'field' => 'txtAnnouncementDescription',
																'label' => 'Description',
																'rules' => 'required|callback__check_for_script_tags'
															),
													),

						'delete_announcement' => array(
														array(
																'field' => 'intAnnouncementId',
																'label' => 'Title',
																'rules' => 'required'
															),
													),
					// announcement

					);
