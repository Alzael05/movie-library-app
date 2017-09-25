"use strict";

		var app_helper = ( function() {

				function flash_notify  ( type, message ) {
					$.notify( {
								message: message
							  },
							  {
							  	type: 		type,
								placement: 	{
									align: "center",
								},
								timer: 		5000//30000//
							  } );
				};

				function is_empty ( obj ) {
					if ( typeof obj !== 'undefined' ) {
						return Object.keys( obj ).length === 0;
					}
					else {
						return false;
					}
				};

				function crud ( path, datas ) {
					var t_r;

					$.ajax( {
						url: 		base_url + path,
						data: 		datas.row,
						type: 		'POST',
						dataType: 	'JSON',
						success: 	function ( response_data, textStatus, jqXHR ) {
							flash_notify( response_data.type, response_data.message );
							t_r = true;
						}
					} );

					return t_r;
				};

				function remove_edit ( mdlId ) {
					var $modal 			= $( mdlId );
					var $form 			= $modal.find( 'form' );
					var $edit_input 	= $modal.find( 'input[data-edit="edit"]' );

					$form.find( 'input:text, textarea' ).val( '' );
					$form.find( 'div.texteditor-body' ).text( '' );
					$form.find( ':checkbox' ).removeAttr( 'checked' );

					$edit_input.remove();
				};

				function bind_remove_script_event () {
					var $input_elements = $( 'input:text, textarea' );

					$input_elements.on( 'blur change',
										function ( event ) {
											console.log( $( this ).val() );
											var temp_value = $( this ).val();
											$( this ).val( check_script_tags( temp_value ) );
										} );

					var $div_txt_editor = $( 'div.texteditor-body' );

					$div_txt_editor.on( 'blur change',
										function ( event ) {
											console.log( $( this ).text() );
											var temp_value = $( this ).text();
											$( this ).text( check_script_tags( temp_value ) );
										} );
				};

				function check_script_tags ( value ) {
					var pattern = /(<script[^>]*>)(\D*?)(<\/script>)|<script>|<\/script>/ig;

					if ( pattern.test( value )  ) {
						var new_value = value.replace( pattern, '' );
					}
					else {
						var new_value = value;
					}

					return new_value;
				};

				return	{
							crud: crud,
							flash_notify: flash_notify,
							is_empty: is_empty,
							remove_edit: remove_edit,
							// check_script_tags	: check_script_tags,s
							bind_remove_script_event: bind_remove_script_event,
						};

		} )();
