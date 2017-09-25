
		

		// $( document ).ready( 
		// 						function( $ )
		// 						{
		// 						    $.ajaxSetup( { data: { token: CFG.token } } );
		// 						    $( document ).ajaxSuccess( 
		// 						    							function( e, x ) 
		// 													   	{
		// 													        var result = $.parseJSON( x.responseText );
		// 													        $( 'input:hidden[name="token"]' ).val( result.token );
		// 													        $.ajaxSetup( { data: { token: result.token } } );
		// 													    }
		// 													);
		// 						}
		// 					);


		// $( "#txtAnnouncementTitle" ).textbox(
		// 										{
		// 											type: "text",

		// 											prompt: "Title for the announcement",
		// 										}
		// 									);
	$( "#txtAnnouncementDescription" ).texteditor(
												{
													name: 'txtAnnouncementDescription',
												}
											);
													

	(function()
	{
		var editIndex 	= undefined;
		var crudType 	= undefined;
		var datas 		= {};

		$( "#tblAnnncmnts" ).datagrid({
										url: 			base_url + 'announcements/retrieve',
										// saveUrl: 	'',
										// updateUrl: 	'',
										// destroyUrl: '',
										// width: 		'auto',
										fitColumns: 	true,
										pagination: 	true,
										rownumbers: 	true,
										sortOrder: 		"asc",
										method: 		"POST",

										singleSelect: 	true,

										toolbar: 	[
														{
															iconCls: 	'icon-add',
															handler: 	function()
																		{ 
																			append()
																		}
														},
														'-',
														// {
														// 	iconCls: 	'icon-edit',
														// 	handler: 	function()
														// 				{ 
														// 					alert( 'edit' ) 
														// 				}
														// },
														// '-',
														// {
														// 	iconCls: 	'icon-save',
														// 	handler: 	function()
														// 				{ 
														// 					accept()
														// 				}
														// },
														'-',
														{
															iconCls: 	'icon-remove',
															handler: 	function()
																		{ 
																			removeit()
																		}
														},
														'-',
														{
															iconCls: 	'icon-undo',
															handler: 	function()
																		{ 
																			reject()
																		}
														},
													],

									    columns: 	[
									    				[	

									    					{
											        			field: 		'strAnnouncementId',
											        			title: 		'Id',
											        			sortable: 	true,
											        			// width: 200,
											        			// sortable: true
											        			// hidden: true,

											        		},
													        {
											        			field: 		'strAnnouncementTitle',
											        			title: 		'Title',
											        			width: 		200,
											        			sortable: 	true,
																// fitColumns: true,
																editor: 	{
																				type: 'validatebox',
																				options:{
																							required: true
																						}
																			}

											        		},
													        {	
												        		field: 		'txtAnnouncementDescription',
												        		title: 		'Description',
												        		width: 		300,
																// fitColumns: true,
																editor: 	{
																				type: 'validatebox',
																				options:{
																							required: true
																						}
																			}

												        	},
							        						{	
												        		field: 		'updatedBy',
												        		// field: 		'strUpdatedById',
												        		title: 		'Updated by ',
												        		// width: 160,
											        			sortable: 	true,
																// fitColumns: true,
																// editor: 	{
																// 			type: 'validatebox',
																// 				options:{
																// 							required: true
																// 						}
																// 			}

												        	},
															{	
												        		field: 		'dtmDateUpdated',
												        		title: 		'Date Updated',
												        		// width: 120,
											        			sortable: 	true,
																// fitColumns: true,
																// editor: 	{
																// 				type: 'validatebox',
																// 				options:{
																// 							required: true
																// 						}
																// 			}

												        	},
															{	
												        		field: 		'insertedBy',
												        		// field: 		'strInsertedById',
												        		title: 		'Posted by',
												        		// width: 160,
											        			sortable: 	true,
																// fitColumns: true,
																// editor: 	{
																// 				type: 'validatebox',
																// 				options:{
																// 							required: true
																// 						}
																// 			}

												        	},
												        	{	
												        		field: 		'dtmDateInserted',
												        		title: 		'Date Posted',
												        		// width: 120,
											        			sortable: 	true,
																// fitColumns: true,
																// editor: 	{
																// 				type: 'validatebox',
																// 				options:{
																// 							required: true
																// 						}
																// 			}	

												        	},
												    	]
												    ],
										onClickRow: function( index, row )
													{
														endEditing()
														editIndex = index;

								    					datas = {
								    								row
										    					};

								    					// console.log( datas );

													},
									    onDblClickRow: function( index, row )
										    			{
										    				// editIndex = undefined;


										    				// if( editIndex != index )
										    				// {
										    					if ( endEditing() )
										    					{
										    						crudType = 'update';
											    					
											    					$( this ).datagrid( 'selectRow', index )
										    									.datagrid( 'beginEdit', index );

											    					// var data = $( this ).datagrid( 'getEditors', { index: index, row: row } );

											    					console.log( crudType );
											    					// console.log( index );
											    					// console.log( row );
											    					// console.log( data );	

														    		// if ( data )
													    			// {
																	// 	(
																	// 		$( data.target ).data( 'textbox' ) ? $( data.target ).textbox( 'textbox' ) : $( data.target )
																	// 	).focus();
																	// }
																	editIndex = index;
																} 
																else 
																{
																	setTimeout( 
																				function()
																				{
																					$( this ).datagrid( 'selectRow', editIndex );
																				},
																				0
																			);
																}

										    				// }
										    			},
																						   
									    onEndEdit: function( index, row, changes )
									    			{
										            // 	var editor = $( this ).datagrid(
											           //  									'getEditor', 
											           //  									{
																						// 		index: index,
																						// 		field: 'strAnnouncementId'
																						// 	}
																						// );

										            	// console.log( 'May' );
										            	// console.log( row );
										            	// console.log( changes );

										            	datas = {
										            				row,
										            				changes
										            			};

										            	if ( ! isEmpty( datas.changes ) )
														{
										            		var t_r = crud( 
												            				"announcements/" + crudType + "/ajax",
												            				datas
												            			);
														}
															$( '#tblAnnncmnts' ).datagrid( 'reload' );

														// if ( t_r ) 
														// {
														// }

														// console.log('log');
														// console.log(t_r);



														// row.productname = $( editor.target ).combobox( 'getText' );
											        },

											     //    onBeforeEdit: function( index, row )
											     //    				{
															 //            row.editing = true;
															 //            $( this ).datagrid( 'refreshRow', index );
															 //        },
											     //    onAfterEdit: function( index, row )
											     //    				{
															 //            row.editing = false;
															 //            $( this ).datagrid( 'refreshRow', index );
															 //        },
											     //    onCancelEdit: function( index, row )
											     //    				{
															 //            row.editing = false;
															 //            $( this ).datagrid( 'refreshRow', index );
									});

			function endEditing()
			{
				if ( editIndex == undefined )
					{ return true }

				if ( $( "#tblAnnncmnts" ).datagrid( 'validateRow', editIndex ) )
				{	
					$( "#tblAnnncmnts" ).datagrid( 'endEdit', editIndex );
					editIndex = undefined;
					return true;
				} 
				else 
				{
					return false;
				}
			}

			function append()
			{
				if ( endEditing() )
				{
					crudType = 'create';

					$( '#tblAnnncmnts' ).datagrid( 'appendRow',{ status: 'P' } );

					editIndex = $( '#tblAnnncmnts' ).datagrid( 'getRows' ).length - 1;

					$( '#tblAnnncmnts' ).datagrid( 'selectRow', editIndex )
										.datagrid( 'beginEdit', editIndex );
				}
			}

			function removeit()
			{
				$.messager.confirm(
									'Delete', 
									'Are you sure you want to delete the record??', 
									function( r )
									{
						                if ( r )
						                {
						                    if ( editIndex == undefined ){ return }
											
											crudType = 'delete';

											if ( ! isEmpty( datas.changes ) )
											{
												var t_r = crud( 
																"announcements/" + crudType + "/ajax",
																datas
															);

												// console.log('log');
												// console.log(t_r);

											// if ( t_r ) 
											// {
												$( '#tblAnnncmnts' ).datagrid( 'cancelEdit', editIndex )
																	.datagrid( 'deleteRow', editIndex );

												editIndex = undefined;

								            	$( '#tblAnnncmnts' ).datagrid( 'reload', editIndex );
											// }
											}
						                }
            						}
            					);
			}

			// function accept()
			// {
			// 	if ( endEditing() )
			// 	{
			// 		$( '#tblAnnncmnts' ).datagrid( 'acceptChanges' );
			// 	}
			// }

			function reject()
			{
				$( '#tblAnnncmnts' ).datagrid( 'rejectChanges' );
				editIndex = undefined;
			}

			// function getChanges()
			// {
			// 	var rows = $( '#tblAnnncmnts' ).datagrid( 'getChanges' );
			// 	alert( rows.length + ' rows are changed!' );
			// }

		})()
		



