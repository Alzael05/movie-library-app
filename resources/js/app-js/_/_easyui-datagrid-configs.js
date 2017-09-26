"use strict";

		var eui_datagrid_configs = 	( function () {

				// var user_columns = 	[

				// 						{
				// 							field:		'strUserId',
				// 							title: 		'Id',
				// 							sortable: 	true,
				// 							align: 		'center',
				// 							hidden: 	true,
				// 						},
				// 						{
				// 							field: 		'strUserName',
				// 							title: 		'Username',
				// 							sortable: 	true,
				// 							align: 		'center',
				// 							editor: 	{
				// 											type: 	'validatebox',
				// 											options:{
				// 														required: true
				// 													}
				// 										}
				// 						},
				// 						{
				// 							field: 		'strUserEmail',
				// 							title: 		'E-mail',
				// 							sortable: 	true,
				// 							align: 		'center',
				// 							editor: 	{
				// 											type: 	'email',
				// 											options:{
				// 														required: true
				// 													}
				// 										}
				// 						},
				// 						// {
				// 						// 	field: 		'strUserPassword',
				// 						// },
				// 						{
				// 							field: 		'strUserFirstName',
				// 							title: 		'First Name',
				// 							sortable: 	true,
				// 							align: 		'center',
				// 							editor: 	{
				// 											type: 	'validatebox',
				// 											options:{
				// 														required: true
				// 													}
				// 										}
				// 						},
				// 						{
				// 							field: 		'strUserMiddleName',
				// 							title: 		'Middle Name',
				// 							sortable: 	true,
				// 							align: 		'center',
				// 						},
				// 						{
				// 							field: 		'strUserLastName',
				// 							title: 		'Last Name',
				// 							sortable: 	true,
				// 							align: 		'center',
				// 							editor: 	{
				// 											type: 	'validatebox',
				// 											options:{
				// 														required: true
				// 													}
				// 										}
				// 						},
				// 						{
				// 							field: 		'strUserAccessType',
				// 							title: 		'Access Type',
				// 							sortable: 	true,
				// 							align: 		'center',
				// 							editor: 	{
				// 											type: 	'validatebox',
				// 											options:{
				// 														required: true
				// 													}
				// 										},
				// 							formatter: 	function ( value, row, index ) {

				// 													if ( value == 'ADMIN' ) {
				// 														return 'ADM';
				// 													}
				// 													else {
				// 														return 'USR';
				// 													}

				// 												}
				// 						},

				// 					];

				var announcement_columns = 	[

												{
													field: 		'intAnnouncementId',
													title: 		'Id',
													sortable: 	true,
													align: 		'center',
													hidden: 	true,
												},
												{
													field: 		'dtmAnnouncementDate',
													title: 		'Date',
													sortable: 	true,
													editor: 	{
																	type: 	'datetimebox',
																	options:{
																				required: true
																			},
																},
												},
												{
													field: 		'strAnnouncementTitle',
													title: 		'Title',
													width: 		100,
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
																	type: 	'textarea',
																	options:{
																				required: 	true
																			}
																}
												},
												{
													field: 		'blnIsSpecial',
													title: 		'Special',
													width: 		50,
													align: 		'center',
													editor: 	{
																	type: 		'checkbox',
																	options:	{
																					on: 	1,
																					off: 	0
																				}
																},
													formatter: 	function ( value, row, index ) {

																	if ( value == 1 ) {
																		return 'S';
																	}
																	else {
																		return 'NS';
																	}

																}
												},
												{
													field: 		'blnIsUrgent',
													title: 		'Urgent',
													width: 		50,
													align: 		'center',
													editor: 	{
																	type: 		'checkbox',
																	options:	{
																					on: 	1,
																					off: 	0
																				}
																},
													formatter: 	function ( value, row, index ) {

																	if ( value == 1 ) {
																		return 'U';
																	}
																	else {
																		return 'NU';
																	}

																}
												},

											];

				// var return_user_col = 	function () {

				// 							return user_columns;

				// 						};

				var return_announ_col = function () {

											return announcement_columns;

										};

				return 	{

					// return_user_col 	: return_user_col,
					return_announ_col 	: return_announ_col,

				};
		} )();
