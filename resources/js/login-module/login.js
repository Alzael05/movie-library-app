

	( function () {

		var login = /*function () (*/{

			init: function () {
				this.cache_dom();
				this.bind_events();
				this.render();
			},
			cache_dom: function () {
				// body...
				this.$form 				= $( 'form' );
				this.url 				= this.$form.attr( 'action' );

				this.$el_txt_user_name	= $( '#txtUsername' );
				this.$el_txt_password	= $( '#txtPassword' );
				this.$el_btn_login		= $( '#btnLogin' 	);
			},
			bind_events: function () {
			// event handlers
				this.$el_btn_login.on( 'click', this.submit_login.bind( this ) );
			// event handlers
			},
			render: function () {

			},
			submit_login: function ( event ) {
				event.preventDefault();

				var val_user_name	= this.$el_txt_user_name.val();
				var val_password	= this.$el_txt_password.val();

				$.ajax( {
					url: 		base_url + 'index/login',
					type: 		'POST',
					dataType: 	'JSON',
					data: 		{
									txtUserName : val_user_name,
									txtPassword : val_password
					},
					// success: 	function ( response, textStatus, jqXHR ) {
					// 				// app_helper.flash_notify( response.type, response.message );
					// 				if ( response.type == 'redirect' )
					// 				{
					// 					console.log(response);
					// 					window.location.assign( response.message ) ;
					// 				}
					// }
				} ).done( function ( response, textStatus, jqXHR ) {
					if ( response.type == 'redirect' ) {
						console.log(response);
						window.location.assign( response.message ) ;
					}
				} );
				// app_helper.check_script_tags( val_user_name );
			}

		}
		/*)*/;

		login.init();

	} ) ();

