


        <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-side"
        		role="navigation"
        		>
            <!-- <div class="container-fluid"> -->

                <a class="navbar-brand d-lg-inline-block d-none"
            		href="<?php echo base_url(); ?>announcements"
            		>
            		Home
            	</a>
                <button type="button"
                		class="navbar-toggler"
                		data-toggle="collapse"
                		data-target="#navbar-ex1-collapse"
                		>
                	<span class="navbar-toggler-icon"></span>
                    <!-- <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span> -->
                </button>

	            <div class="collapse navbar-collapse " id="navbar-ex1-collapse" >
	                <div class="navbar-nav mr-auto">
	                <?php //if ( $access_lvl == AD ): ?>
                		<a class="nav-item nav-link"
                			href="<?php echo base_url(); ?>users">
							<!-- Users -->
                        	<?php echo lang( 'usr_users' ); ?>
                		</a>
                        <a class="nav-item nav-link" href="#">
                        	<i class="fa fa-fw fa-dashboard"></i>
                        	Dashboard
                        </a>
                        <a class="nav-item nav-link" href="#">
                        	<i class="fa fa-fw fa-bar-chart-o"></i>
                        	Charts
                        </a>
	                <?php //endif ?>
	                </div>
	                <div class="navbar-nav ml-auto">
			            <div class="dropdown-divider"></div>
			            <li class="nav-item dropdown">
			                <a  class="nav-link dropdown-toggle"
			                	href="#"
			                	id="nav_dropdown_menu"
			                	data-toggle="dropdown"
			                	aria-haspopup="true"
			                	aria-expanded="false"
			                	>
			                	<i class="fa fa-user"></i>
			                		<?php echo $user_name; ?>
			                	<b class="caret"></b>
			                </a>
			                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="nav_dropdown_menu" >
								<a class="dropdown-item" href="#">
									<i class="fa fa-fw fa-user"></i>
									Profile
								</a>
								<a class="dropdown-item" href="#">
									<i class="fa fa-fw fa-gear"></i>
									Settings
								</a>
			                    <div class="dropdown-divider"></div>
			                    <a class="dropdown-item" href="<?php echo base_url(); ?>index/logout">
			                    	<i class="fa fa-fw fa-power-off"></i>
			                    	<?php echo lang( 'bnl_log_out' ); ?>
			                    </a>
			                </div>
			            </li>

	                </div>
	            </div>

            <!-- </div> -->
        </nav>
