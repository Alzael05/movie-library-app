<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<title>Announcement Application</title>

		<!-- CSS -->

		<?php echo $link; ?>

		<!-- CSS -->

	</head>

	<!-- BODY -->
	<body>
		<!-- container -->
		<div class="container-fluid pt-md-20 pt-10 pt-5">
			<div class="row align-items-center">
				<div class="col-1 col-sm-3 col-md-4"></div>
				<div class="col col-sm-6 col-md-4">
					<?php echo form_open( 'index/login', array( 'class' => 'form-signin' ) ); ?>
						<!-- <center> -->
							<div class="card card-default m-0 m-md-5">
								<div class="card-header">
									<!-- Log-in -->
									<?php echo lang( 'bnl_log_in' ) ?>
									<!-- <h2 class="form-signin-heading"> Please sign in </h2> -->
								</div>
								<div class="card-body p-1 p-md-5">
									<div class="form-row">
										<div class="col">
											<div class="form-group">
												<div class="input-group p-1">
													<div class="input-group-addon">
														<!-- <label for="txtUsername"
																class=""
																> -->
															Username
														<!-- </label> -->
													</div>
													<input type="text"
															class="form-control"
															id="txtUsername"
															name="txtUserName"
															placeholder="Username"
															required="true"
															autofocus
															value="<?php echo set_value( 'txtUserName' ); ?>"
															>
													<?php echo form_error( 'txtUserName' ); ?>
												</div>
												<div class="input-group p-1">
													<div class="input-group-addon">
														<!-- <label for="txtPassword"
																class=""
																> -->
															Password
														<!-- </label> -->
													</div>
													<input type="password"
															class="form-control"
															id="txtPassword"
															name="txtPassword"
															placeholder="Password"
															required="true"
															>
													<?php echo form_error( 'txtPassword' ); ?>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="card-footer ">
									<!-- <div class="checkbox">
										<label>
											<input type="checkbox"
													value="remember-me"
													>
											Remember me
										</label>
									</div> -->
									<div class="form-row">
										<div class="col clearfix">
											<a class="float-left text-sm-center" href="<?php echo base_url().'index/register'; ?>">
												<!-- Register -->
												<?php echo lang( 'reg_register' ) ?>
											</a>
											<button type="button"
													class="btn btn-sm btn-primary float-right"
													style=""
													id="btnLogin"
													>
												<!-- Sign in -->
												<?php echo lang( 'bnl_log_in' ) ?>
											</button>
										</div>
									</div>
								</div>
							</div>
						<!-- </center> -->
					<?php echo form_close(); ?>
				</div>
				<div class="col-1 col-sm-3 col-md-4"></div>
			</div>
    	</div>
		<!-- container -->

	<!-- JAVASCRIPTS -->
	<script>
		(
		 	function () {
				sessionStorage.setItem( 'session_id', '<?php echo session_id(); ?>' );
			}
		)();
	</script>

	<?php echo $script; ?>

	<!-- JAVASCRIPTS -->
	<script>
		(
			function () {
				// session.check_session( 'index' );
			}
		)();
	</script>

	</body>
	<!-- BODY -->


</html>

