


<!-- jquery -->
	<!-- <script type="text/javascript" src="<?php echo base_url().'resources/js/old_src/prep/jquery-3.2.1.js'; ?> "></script> -->
	<!-- <script type="text/javascript" src="<?php echo base_url().'assets/js/prep/jquery-ui.js'; ?> "></script> -->
<!-- jquery -->

<!-- moment -->
	<!-- <script type="text/javascript" src="<?php echo base_url().'assets/js/prep/moment.js'; ?> "></script> -->
	<!-- <script type="text/javascript" src="<?php echo base_url().'assets/js/prep/moment-with-locales.js'; ?> "></script> -->
<!-- moment -->

<!-- easy ui -->
	<!-- <script  type="text/javascript" src="<?php echo base_url().'assets/easyui/jquery.min.js'; ?> "></script> -->
	<!-- <script  type="text/javascript" src="<?php echo base_url().'assets/easyui/jquery.easyui.min.js'; ?> "></script> -->
	<!-- <script  type="text/javascript" src="<?php echo base_url().'assets/easyui/jquery.edatagrid.js'; ?> "></script> -->
	<!-- <script  type="text/javascript" src="<?php echo base_url().'assets/easyui/easyloader.js'; ?> "></script> -->

	<!-- txt editor -->
	<!-- <script  type="text/javascript" src="<?php echo base_url().'assets/js/texteditor/jquery.texteditor.js'; ?> "></script> -->
	<!-- txt editor -->

<!-- easy ui -->

<!-- jquery validation -->
	<!-- <script type="text/javascript" src="<?php echo base_url().'assets/js/jquery-validation/dist/jquery.validate.js'; ?> "></script> -->
	<!-- <script type="text/javascript" src="<?php echo base_url().'assets/js/jquery-validation/dist/additional-methods.js'; ?> "></script> -->
<!-- jquery validation -->

<!-- boostrap -->
	<!-- <script  type="text/javascript" src="<?php echo base_url().'assets/js/bootstrap/popper.js'; ?> "></script> -->
	<!-- <script  type="text/javascript" src="<?php echo base_url().'assets/js/bootstrap/bootstrap.js'; ?> "></script> -->
	<!-- <script  type="text/javascript" src="<?php echo base_url().'assets/js/bootstrap/npm.js"></scri'; ?> pt> -->
	<!-- <script  type="text/javascript" src="<?php echo base_url().'assets/js/bootstrap/bootstrap-notify.js'; ?> "></script> -->
<!-- boostrap -->
	<script  type="text/javascript" src="<?php echo base_url().'assets/bundle/js/vendor.build.js'; ?> "></script>
	<script  type="text/javascript" src="<?php echo base_url().'assets/bundle/js/plugins.build.js'; ?> "></script>


<!-- custom js -->
	<script>

/*
		( function() {
			"use strict";

			console.log( '<?php echo session_name().':'.session_id(); ?>' );
			console.log( '<?php echo $this->security->get_csrf_token_name().':'.$this->security->get_csrf_hash(); ?>' );

			$.ajaxSetup(
						{
							type: 		'POST',
							dataType: 	'JSON',
							data: 		{
											<?php echo $this->security->get_csrf_token_name(); ?>
											:
											'<?php echo $this->security->get_csrf_hash(); ?>'
										},

							success: 	function( response, textStatus, jqXHR )
										{
											console.log( 'success' );
										},

							error: 		function( jqXHR, textStatus, errorThrown ) {

											console.log( jqXHR );
											console.log( jqXHR.responseJSON );
											// console.log( jqXHR.responseText );
											console.log( textStatus );
											console.log( errorThrown );

											// t_r = false;
											switch( jqXHR.status )
											{

												case 200:
													console.log( jqXHR.status );
													app_helper.flash_notify(
										                        			jqXHR.responseJSON.type,
										                        			jqXHR.responseJSON.message
											                        	);
													// alert( 'ERROR!!! ' + textStatus );
													break;

												case 400:
													// alert( 'ERROR ' + jqXHR.status + '!!! ' + textStatus );
													app_helper.flash_notify(
										                        			jqXHR.responseJSON.type,
										                        			jqXHR.responseJSON.message
											                        	);
													break;

												case 401:
													// alert( textStatus );
													console.log('Love');
													if ( typeof  jqXHR.responseJSON.message !== 'undefined' )
													{
														$.messager.alert(
																			'Notice',
																			jqXHR.responseJSON.message,//'Ssion timeout!',
																			'error',
																			function () {
																				window.location = jqXHR.responseJSON.redirect;//jqXHR.index;
																			}
																		);
													}
													// $.messager.alert(
													// 					'Notice',
													// 					'Session timeout!',
													// 					'warning',
													// 					function() {
													// 						window.location = base_url + '/index' ;//jqXHR.index;
													// 					}
													// 				);

													break;

												case 403:
													app_helper.flash_notify(
										                        			'danger',
										                        			'ERROR!!! ' + ( jqXHR.statusText || textStatus ) + ', Please contact your admin'
											                        	);
													break;

												default:
													app_helper.flash_notify(
										                        			'danger',
										                        			'ERROR!!! ' + textStatus + ', Please contact your admin'
											                        	);
													// alert(  );
													// alert( 'ERROR!!! ' );

											}
											// return false;
										},

							// complete: 	function( event, xhr, options )
							// 			{
							// 				console.log( 'complete' );
							// 			},
						}
					);

			setTimeout(
						function() {

							var $notif_message 	= $( '#notif_message' );
							var $notif_close 	= $notif_message.find( ':button' );
							$notif_close.click();

						},
						5000
					);

		} )();
*/

	</script>
	<script  type="text/javascript" src="<?php echo base_url().'assets/bundle/js/app.build.js'; ?> "></script>

	<!-- <script type="text/javascript" src="<?php echo base_url(); ?>assets/js/app_js/design-tweks.js"></script> -->

	<!-- <script type="text/javascript" src="<?php echo base_url(); ?>assets/js/app_js/app-helper.js"></script> -->

	<!-- <script type="text/javascript" src="<?php echo base_url(); ?>assets/js/app_js/event-handlers.js"></script> -->

	<!-- <script type="text/javascript" src="<?php echo base_url(); ?>assets/js/app_js/easyui-configs.js"></script> -->
	<!-- <script type="text/javascript" src="<?php echo base_url(); ?>assets/js/app_js/easyui-datagrid-configs.js"></script> -->

	<!-- <script type="text/javascript" src="<?php echo base_url(); ?>assets/js/app_js/app.js"></script> -->


	<!-- <script type="text/javascript" src="<?php echo base_url(); ?>assets/bundle/announ.build.js"></script> -->
	<!-- <script type="text/javascript" src="<?php echo base_url(); ?>assets/js/app_js/session-checker.js"></script> -->

	<!-- <script type="text/javascript" src="<?php echo base_url(); ?>assets/js/sample.js"></script> -->
	<!-- <script type="text/javascript" src="<?php echo base_url(); ?>assets/bundle/login.js"></script> -->

<!-- custom js -->


	<?php echo $this->session->flashdata( 'message' ); ?>
