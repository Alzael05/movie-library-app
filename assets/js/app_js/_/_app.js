"use strict";

	( function () {

		var announcements_datagrid 	= easyui_config.set_datagrid(
																	'#tblAnnncmnts',
																	eui_datagrid_configs.return_announ_col(),
																	'#mdlForm',
																	'announcements/'
																);

		// var users_datagrid 			= easyui_config.set_datagrid(
		// 															'#tblUsers',
		// 															eui_datagrid_configs.return_user_col(),
		// 															'#mdlForm',
		// 															'users/'
		// 														);

		var announcement_datetimebox = easyui_config.set_datetimebox( '#dtmAnnouncementDate' );

		var announcements_texteditor = easyui_config.set_texteditor( '#txtAnnouncementDescription' );

	} )();
