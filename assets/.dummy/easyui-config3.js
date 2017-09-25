


	(function ()
		{
			var announcement_columns = [
						    				[	

						    					{
								        			field: 		'strAnnouncementId',
								        			title: 		'Id',
								        			sortable: 	true,
								        		},
										        {
								        			field: 		'strAnnouncementTitle',
								        			title: 		'Title',
								        			width: 		200,
								        			sortable: 	true,
													editor: 	{
																	type: 	'validatebox',
																	options:{
																				required: true
																			}
																}
								        		},
										        {	
									        		field: 		'txtAnnouncementDescription',
									        		title: 		'Description',
									        		width: 		300,
													editor: 	{
																	type: 	'validatebox',
																	options:{
																				required: true
																			}
																}
									        	},
				        						{	
									        		field: 		'updatedBy',
									        		title: 		'Updated by ',
								        			sortable: 	true,
									        	},
												{	
									        		field: 		'dtmDateUpdated',
									        		title: 		'Date Updated',
								        			sortable: 	true,
									        	},
												{	
									        		field: 		'insertedBy',
									        		title: 		'Posted by',
								        			sortable: 	true,
									        	},
									        	{	
									        		field: 		'dtmDateInserted',
									        		title: 		'Date Posted',
								        			sortable: 	true,
									        	},
									    	]
									    ];

			var users_columns = 		[
						    				[	

						    					{
								        			field: 		'strUserId',
								        			title: 		'Id',
								        			sortable: 	true,
								        		},
										        {
								        			field: 		'strUserName',
								        			title: 		'Title',
								        			width: 		200,
								        			sortable: 	true,
													editor: 	{
																	type: 	'validatebox',
																	options:{
																				required: true
																			}
																}
								        		},
										        {	
									        		field: 		'strUserEmail',
									        		title: 		'Description',
									        		width: 		300,
													editor: 	{
																	type: 	'validatebox',
																	options:{
																				required: true,
																			}
																}
									        	},
									        	{	
									        		field: 		'strUserLastName',
									        		title: 		'Description',
									        		width: 		300,
													editor: 	{
																	type: 	'validatebox',
																	options:{
																				required: true
																			}
																}
									        	},
									        	{	
									        		field: 		'strUserFirstName',
									        		title: 		'Description',
									        		width: 		300,
													editor: 	{
																	type: 	'validatebox',
																	options:{
																				required: true
																			}
																}
									        	},
									        	{	
									        		field: 		'strUserMiddleName',
									        		title: 		'Description',
									        		width: 		300,
													editor: 	{
																	type: 	'validatebox',
																	// options:{
																	// 			required: true
																	// 		}
																}
									        	},
				        						{	
									        		field: 		'updatedBy',
									        		title: 		'Updated by ',
								        			sortable: 	true,
									        	},
												{	
									        		field: 		'dtmDateUpdated',
									        		title: 		'Date Updated',
								        			sortable: 	true,
									        	},
												{	
									        		field: 		'insertedBy',
									        		title: 		'Posted by',
								        			sortable: 	true,
									        	},
									        	{	
									        		field: 		'dtmDateInserted',
									        		title: 		'Date Posted',
								        			sortable: 	true,
									        	},
									    	]
									    ];


			function set_up_datagrid( element, url, columns )
			{
				// Get DOM element
				var $this 		= $( element );

				var editIndex 	= undefined;
				var crudType 	= undefined;
				var datas 		= {};


				function config_datagrid ( $this ) 
				{
					// body... 
					$( $this ).datagrid(
													{
														url: 			url,//base_url + 'announcements/retrieve',
														fitColumns: 	true,
														pagination: 	true,
														rownumbers: 	true,
														sortOrder: 		"ASC",
														method: 		"POST",
														singleSelect: 	true,
														toolbar: 		[
																			{
																				iconCls: 	'icon-add',
																				handler: 	function()
																							{ 
																								append()
																							}
																			},
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
														columns: 		columns,
														onClickRow: 	function( index, row )
																		{
																			endEditing()
																			editIndex = index;

													    					datas = {
													    								row
															    					};
																		},
													    onDblClickRow: 	function( index, row )
														    			{
													    					if ( endEditing() )
													    					{
													    						crudType = 'update';
														    					$( this ).datagrid( 'selectRow', index )
													    									.datagrid( 'beginEdit', index );
														    					console.log( crudType );
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
														    			},
													    onEndEdit: 		function( index, row, changes )
														    			{
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
																        },
													}
												);
				}


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
			}
			
		}())
