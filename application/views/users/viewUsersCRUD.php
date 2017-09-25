<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Announcement Application</title>

		<!-- CSS -->

			<?php echo $link; ?>

		<!-- CSS -->

	</head>

	<!-- BODY -->
	<body>

		<div id="wrapper">

			<!-- navigation header -->
			<?php echo $header; ?>

			<!-- navigation header -->

			<div id="page-wrapper">

				<div class="container-fluid">

					<div class="row">
						<div class="panel panel-default">
							<div class="panel-heading"></div>
							<div class="panel-body"></div>
							<div class="panel-footer"></div>
						</div>
					</div>

					<div class="row">
						<div class="container">
							<div class="panel panel-primary">

								<div class="panel-heading">
									<h2>
										<!-- Users -->
										<?php echo lang( 'usr_users' ) ?>
									</h2>
								</div>

								<div class="panel-body">

									<table id="tblUsers">
									</table>

								</div>

								<div class="panel-footer">
									<button type="button"
											class="btn btn-info btn-md btnModal"
											id="btnModal"
											>
										<!-- Add -->
										<?php echo lang( 'btn_add' ) ?>
									</button>
									<!-- <button type="button"
											class="btn btn-info btn-md"
											data-toggle="modal"
											data-target="#mdlAddAnnoncement"
											>
										Edit
									</button> -->
								</div>
							</div>
						</div>
					</div>

				</div>

			</div>

		</div>

	<!-- MODAL -->

		<!-- Trigger the modal with a button -->

		<div id="mdlForm" class="modal fade" role="dialog">
			<div class="modal-dialog modal-lg">

				<div class="modal-content">
					<div class="modal-header">
						<button type="button"
								class="close"
								data-dismiss="modal"
								>
							&times;
						</button>
						<h2 class="modal-title">

							<?php echo lang( 'usr_users' ) ?>
						</h2>
					</div>
					<div class="modal-body">
						<div class="">
						<?php echo $form_open; ?>
							<div class="panel panel-default">

								<!-- <div class="panel-heading"></div> -->

								<div class="panel-body">

									<div class="form-group required">
										<label for="txtAnnouncementTitle"
												class="control-label"
												>
											<!-- Title -->
											<?php echo lang( 'ann_title' ) ?>
										</label>
										<input type="text"
												class="form-control"
												id="txtAnnouncementTitle"
												name="txtAnnouncementTitle"
												placeholder="Announcement Title"
												required="true"
												value=""
												>
									</div>

									<div class="form-group required">
										<label for="txtAnnouncementTitle"
												class="control-label"
												>
											<!-- Details -->
											<?php echo lang( 'ann_details' ) ?>
										</label>
										<!-- <textarea class="form-control"
													id="txtAnnouncementDetails"
													name="txtAnnouncementDetails"
													placeholder="Announcement Details"
													required="true"
													value=""
													cols="30"
													rows="10"
													></textarea> -->
										<div style="width: 830px; height: 300px; padding: 20px"
												id="txtAnnouncementDescription"
												>
										</div>
									</div>

								</div>

								<div class="panel-footer">

								</div>

							</div>
						</div>
					</div>
					<div class="modal-footer	">
						<div class="btn btn-group float-left">
							<button type="submit"
									class="btn btn-primary"
									id="btnSubmitAnnouncements"
									name="btnSubmit"
									>
								<!-- Save -->
								<?php echo lang( 'btn_save' ) ?>
							</button>
						<?php echo $form_close; ?>
							<button type="button"
									class="btn btn-default "
									data-dismiss="modal"
									>
								<!-- Close -->
								<?php echo lang( 'btn_close' ) ?>
							</button>
						</div>
					</div>
				</div>
				<div id="window" style="width: 500px; height:200px; padding: 10px;">

			    </div>
			</div>
		</div>

	<!-- MODAL -->

	<!-- footer -->

	<?php echo $footer; ?>

	<!-- footer -->

	<!-- JAVASCRIPTS -->

	<?php echo $script; ?>

	<!-- JAVASCRIPTS -->

	</body>
	<!-- BODY -->

</html>
