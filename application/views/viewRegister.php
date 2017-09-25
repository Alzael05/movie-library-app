<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Announcement Application</title>

		<!-- CSS -->

		<?php echo $link; ?>

		<style>

		</style>

		<!-- CSS -->

	</head>

	<!-- BODY -->
	<body>

		<div class="container center">
			<?php echo form_open( 'index/create' ); ?>
				<div class="panel panel-default">
					<div class="panel-heading">

						<h2>Register</h2>
					</div>
					<div class="panel-body">
						<div class="">

							<div class="form-group required">
								<label for="txtUserName"
										class="control-label"
										>
									Username
								</label>
								<input type="text"
										class="form-control"
										id="txtUserName"
										name="txtUserName"
										placeholder="Username"
										value="<?php echo set_value( 'txtUserName' ); ?>"
										>
										<!-- required="true" -->
								<?php echo form_error( 'txtUserName' ); ?>
								<!-- <span class="glyphicon glyphicon-asterisk"></span> -->
							</div>

							<div class="form-group required">
								<label for="txtUserEmail"
										class="control-label"
										>
									E-mail
								</label>
								<input type="email"
										class="form-control"
										id="txtUserEmail"
										name="txtUserEmail"
										placeholder="sample@sample.com"
										value="<?php echo set_value( 'txtUserEmail' ); ?>"
										>
										<!-- required="true" -->
								<?php echo form_error( 'txtUserEmail' ); ?>
							</div>

							<div class="form-group required">
								<label for="txtPassword"
										class="control-label"
										>
									Password
								</label>
								<input type="password"
										class="form-control"
										id="txtPassword"
										name="txtPassword"
										placeholder="Password"
										>
										<!-- required="true" -->
								<?php echo form_error( 'txtPassword' ); ?>
							</div>

							<div class="form-group required">
								<label for="txtRePassword"
										class="control-label"
										>
									Re-type Password
								</label>
								<input type="password"
										class="form-control"
										id="txtRePassword"
										name="txtRePassword"
										placeholder="Re-type Password"
										>
										<!-- required="true" -->
								<?php echo form_error( 'txtRePassword' ); ?>
							</div>

							<div class="form-group required">
								<label for="txtFirstName"
										class="control-label"
										>
									<!-- First Name -->
									<!-- Announcements -->
									<?php echo lang( 'reg_first_name' ) ?>
								</label>
								<input type="text"
										class="form-control"
										id="txtFirstName"
										name="txtFirstName"
										placeholder="<?php echo lang( 'reg_first_name' ) ?>"
										value="<?php echo set_value( 'txtFirstName' ); ?>"
										>
										<!-- required="true" -->
								<?php echo form_error( 'txtFirstName' ); ?>
							</div>

							<div class="form-group">
								<label for="txtMiddleName"
										class="control-label"
										>
									<!-- Middle Name -->
									<?php echo lang( 'reg_middle_name' ) ?>
								</label>
								<input type="text"
										class="form-control"
										id="txtMiddleName"
										name="txtMiddleName"
										placeholder="<?php echo lang( 'reg_middle_name' ) ?>"
										value="<?php echo set_value( 'txtMiddleName' ); ?>"
										>
							</div>

							<div class="form-group required">
								<label for="txtLastName"
										class="control-label"
										>
									<!-- Last Name -->
									<?php echo lang( 'reg_last_name' ) ?>
								</label>
								<input type="text"
										class="form-control"
										id="txtLastName"
										name="txtLastName"
										placeholder="<?php echo lang( 'reg_last_name' ) ?>"
										value="<?php echo set_value( 'txtLastName' ); ?>"
										>
										<!-- required="true" -->
								<?php echo form_error( 'txtLastName' ); ?>
							</div>

						</div>
					</div>
					<div class="panel-footer">
						<div class="row">
							<div class="col-sm-6">
								<a href="<?php echo base_url().'index/login'; ?>"
									class="pull-left"
									>
									<!-- Log-in -->
									<?php echo lang( 'bnl_log_in' ) ?>
								</a>
							</div>
							<div class="col-sm-6">
								<input type="submit"
										class="btn btn-md btn-primary "
										style="float: right;"
										id="btnSubmit"
										name="btnSubmit"
										value="<?php echo lang( 'bnl_submit' ) ?>"
										>
							</div>
						</div>
					</div>
				</div>
			<?php echo form_close(); ?>
		</div>

	<!-- JAVASCRIPTS -->

	<?php echo $script; ?>

	<!-- JAVASCRIPTS -->

	</body>
	<!-- BODY -->


</html>
