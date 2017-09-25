


	// (function()
	// {
		var edit_index 	= undefined;
		var crud_type 	= undefined;
		var datas 		= {};

		function set_datagrid ( tbl_element, columns, mdl_element, ctrl_url )
		{

			$tbl_element = $( tbl_element );//.datagrid();

			$tbl_element.datagrid(
										{
											url: 			base_url + ctrl_url + 'retrieve',
											fitColumns: 	true,
											pagination: 	true,
											rownumbers: 	true,
											singleSelect: 	true,
											// idField: 		'strAnnouncementId',
											method: 		'POST',

											toolbar: 		[
																{
																	iconCls: 	'icon-add',
																	handler: 	function()
																				{
																					add_row();
																				}
																},
																'-',
																'-',
																{
																	iconCls: 	'icon-undo',
																	handler: 	function()
																				{
																					cancel_row( tbl_element );
																				}
																},
															],

											columns: 		[
																columns.concat(
																				[

																					{
																						field: 		'updatedBy',
																						title: 		'Updated by ',
																						sortable: 	true,
																						align: 		'center',
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
																						align: 		'center',
																					},
																					{
																						field: 		'dtmDateInserted',
																						title: 		'Date Posted',
																						sortable: 	true,
																					},
																					{
																						field: 		'action',
																						title: 		'Action',
																						// width: 		60,
																						align: 		'center',
																						formatter: 	function( value, row, index )
																									{
																										if ( edit_index != undefined )
																										{
																											// console.log(index);
																											// console.log(edit_index);
																											var s = '<a href="javascript:void( 0 )" style="color: white;" onclick="save_row( `'+tbl_element+'`, this )">Save</a> 	';
																											var c = '<a href="javascript:void( 0 )" style="color: white;" onclick="cancel_row( `'+tbl_element+'` )">Cancel</a>	';

																											return s + c;
																										}
																										else
																										{
																											// console.log(index);
																											// console.log(edit_index);
																											var e = '<a href="javascript:void( 0 )" onclick="edit_row( `'+tbl_element+'`, this )">Edit</a> 	';
																											var d = '<a href="javascript:void( 0 )" onclick="delete_row( `'+tbl_element+'`, `'+ctrl_url+'` )">Delete</a>	';

																											return e + d;
																										}
																									}
																					}
																				]
																			)
															],

											onClickRow: 	function( index, row )
															{
																edit_index 	= 	index;
																// console.log( edit_index );
																	datas 		= 	{
																						row,
																					};
																// console.log( datas );
															},

											onDblClickRow: 	function( index, row )
															{
																$modal 		= $( mdl_element );
																$form 		= $modal.find( 'form' );

																$edit_input = $modal.find( 'input[data-edit="edit"]' );
																$edit_input.remove();

																var id = Object.keys( row )[ 0 ];

																$form.attr( 'action', 'announcements/update' );
																$form.append( '<input type="hidden" id="'+id+'" name="'+id+'" data-edit="edit" />' );

																$.each(
																		row,
																		function( key, val )
																		{
																			// console.log();
																			$form.find( 'input#'+key ).val( val );

																			if ( val == 1 )
																			{
																				$form.find( ':checkbox#'+key+'[value="'+val+'"]' ).prop( 'checked', 'true' );
																			}
																			else if ( val == 0 )
																			{
																				$form.find( ':checkbox#'+key+'[value="'+val+'"]' ).removeAttr( 'checked' );
																			}
																			// console.log( $form.find( ':checkbox#'+key+'[value="'+val+'"]' ) 	 )
																			$form.find( 'input#'+key+'.date' ).datetimebox( {value: val} );
																			$form.find( 'div#'+key ).text( val );
																		}
																	);

																$modal.modal();
															},

											onEndEdit: 		function( index, row, changes )
															{
																row.editing = false;

																datas = {
																			row,
																			changes,
																		};

																if ( ! isEmpty( datas.changes ) )
																{
																	var t_r = crud(
																					ctrl_url + crud_type + '/ajax',
																					datas
																				);
																}
																// console.log( 'onEndEdit' );

																// console.log(datas);

																$( this ).datagrid( 'refreshRow', index );
																// $( this ).datagrid( 'reload' );
																edit_index = undefined;
															},

											onBeforeEdit: 	function( index, row )
															{
																// row.editing = true;
																// edit_index = index;
																// console.log( 'onBeforeEdit' );
																$( this ).datagrid( 'refreshRow', index );
															},

											onAfterEdit: 	function( index, row )
															{
																// console.log( 'onAfterEdit' );
																edit_index = undefined;
																// $( this ).datagrid( 'refreshRow', index );
																$( this ).datagrid( 'reload' );
															},

											onCancelEdit: 	function( index, row )
															{
																// console.log( 'onCancelEdit' );
																edit_index = undefined;
																$( this ).datagrid( 'refreshRow', index );
															},
										}
									);

			function add_row ( target )
			{
				// console.log( 'Love add_row' );
				// $tbl_element = '"' + $tbl_element + '"';
				// console.log( get_row_index( target ) );

				// edit_index = undefined;

				if ( save_row( tbl_element, target ) )
				{

					crud_type = 'create';

					$tbl_element.datagrid(
											'appendRow',
											{
												index: 	0,
												row: 	{}
											}
										);

					edit_index = $tbl_element.datagrid( 'getRows' ).length - 1;

					// console.log( edit_index );

					$tbl_element.datagrid( 'selectRow', edit_index )
								.datagrid( 'beginEdit', edit_index );
				}
			}
		}

			function get_row_index ( target )
			{
				var tr = $( target ).closest( 'tr.datagrid-row' );
				return parseInt( tr.attr( 'datagrid-row-index' ) );
			}

			// function get_main_table( target )
			// {
			// 	var tr = $( target ).find( 'table[class="datagrid-f"]' );
			// 	return tr;
			// 	// return parseInt( tr.attr( 'datagrid-row-index' ) );
			// }

			function cancel_row( tbl_element )
			{
				// console.log( 'cancel_row' );
				// console.log( tbl_element );
				edit_index = undefined;
				$( tbl_element ).datagrid( 'rejectChanges' );
			}

			function save_row ( tbl_element, target )
			{
				// console.log( 'I save_row' );
				// console.log( get_row_index( target ) );

				if ( edit_index == undefined )
				{
					return true;
				}

				if ( $( tbl_element ).datagrid( 'validateRow', edit_index ) )
				{
					$( tbl_element ).datagrid( 'endEdit', edit_index );
					// edit_index = undefined;
					// console.log( edit_index );
					return true;
				}
				else
				{
					edit_index = undefined;

					return false;
				}
			}

			function edit_row ( tbl_element, target )
			{
				// console.log( 'H edit_row' );
				// console.log( get_row_index( target ) );
				if ( edit_index != undefined )
				{
					cancel_row( tbl_element );
				}

				edit_index = get_row_index( target );

				// console.log( edit_index );

				$( tbl_element ).datagrid( 'refreshRow', edit_index );

				if ( save_row( tbl_element, edit_index ) )
				{
					crud_type = 'update';

					$( tbl_element ).datagrid( 'selectRow', edit_index )
									.datagrid( 'beginEdit', edit_index );

					// console.log( crud_type );
				}
				else
				{
					setTimeout(
								function()
								{
									$( tbl_element ).datagrid( 'selectRow', edit_index );
								},
								0
							);
				}
			}

			function delete_row ( tbl_element, ctrl_url )
			{
				// console.log( 'M delete_row' );
				// console.log( get_row_index( target ) );
				$.messager.confirm(
									'Delete',
									'Are you sure you want to delete the record?',
									function( r )
									{
										if ( r )
										{
											if ( edit_index == undefined ){ return }

											crud_type = 'delete';

											if ( ! isEmpty( datas.changes ) )
											{
												var t_r = crud(
																ctrl_url + crud_type + '/ajax',
																datas
															);

												$( tbl_element ).datagrid( 'cancelEdit', edit_index )
																.datagrid( 'deleteRow', edit_index );

												// $( tbl_element ).datagrid( 'refreshRow', edit_index );
												$( tbl_element ).datagrid( 'reload' );

												edit_index = undefined;
											}
										}
									}
								);
			}

	// })()


