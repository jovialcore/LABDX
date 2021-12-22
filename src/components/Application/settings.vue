<template>
	<div>
		<div class="main-wrapper">
			<layout-header></layout-header>
			<layout-navbar></layout-navbar>
			
			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
					
					<!-- Page Header -->
					<div class="page-header">
						<div class="row align-items-center">
							<div class="col-md-12">
								<div class="d-flex align-items-center">
									<h5 class="page-title">Dashboard</h5>
									<ul class="breadcrumb ml-2">
										<li class="breadcrumb-item"><router-link to="/index"><i class="fas fa-home"></i></router-link></li>
										<li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
										<li class="breadcrumb-item active">Settings</li>
									</ul>
								</div>
							</div> 
						</div>
					</div> 
					<!-- /Page Header -->
				
					<div class="row">
						<div class="col-xl-3 col-md-4">
						
							<!-- Settings Menu -->
							<div class="widget settings-menu">
								<ul>
									<li class="nav-item">
										<router-link to="/settings" class="nav-link active">
											<i class="far fa-user"></i> <span>Profile Settings</span>
										</router-link>
									</li>
									<li class="nav-item">
										<router-link to="/preferences" class="nav-link">
											<i class="fas fa-cog"></i> <span>Preferences</span>
										</router-link>
									</li>
									<li class="nav-item">
										<router-link to="/tax-types" class="nav-link">
											<i class="far fa-check-square"></i> <span>Tax Types</span>
										</router-link>
									</li>
									<li class="nav-item">
										<router-link to="/expense-category" class="nav-link">
											<i class="far fa-list-alt"></i> <span>Expense Category</span>
										</router-link>
									</li>
									<li class="nav-item">
										<router-link to="/notifications" class="nav-link">
											<i class="far fa-bell"></i> <span>Notifications</span>
										</router-link>
									</li>
									<li class="nav-item">
										<router-link to="/change-password" class="nav-link">
											<i class="fas fa-unlock-alt"></i> <span>Change Password</span>
										</router-link>
									</li>
									<li class="nav-item">
										<router-link to="/delete-account" class="nav-link">
											<i class="fas fa-ban"></i> <span>Delete Account</span>
										</router-link>
									</li>
								</ul>
							</div>
							<!-- /Settings Menu -->
							
						</div>
						
						<div class="col-xl-9 col-md-8">
						
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Basic information</h5>
								</div>
								<div class="card-body">
								
									<!-- Form -->
									<form>
										<div class="row form-group">
											<label for="name" class="col-sm-3 col-form-label input-label">Profile</label>
											<div class="col-sm-9">
												<div class="d-flex align-items-center">
													<label class="avatar avatar-xxl profile-cover-avatar m-0" for="edit_img">
														<img id="avatarImg" class="avatar-img" src="@/assets/img/profiles/avatar-02.jpg" alt="Profile Image">
														<input type="file" id="edit_img">
														<span class="avatar-edit">
														<edit-2-icon size="1.5x" class="custom-class"></edit-2-icon>
															
														</span>
													</label>
												</div>
											</div>
										</div>
										<div class="row form-group">
											<label for="name" class="col-sm-3 col-form-label input-label">Name</label>
											<div class="col-sm-9">
												<input type="text" class="form-control" id="name" placeholder="Your Name" value="Charles Hafner">
											</div>
										</div>
										<div class="row form-group">
											<label for="email" class="col-sm-3 col-form-label input-label">Email</label>
											<div class="col-sm-9">
												<input type="email" class="form-control" id="email" placeholder="Email" value="charleshafner@example.com">
											</div>
										</div>
										<div class="row form-group">
											<label for="phone" class="col-sm-3 col-form-label input-label">Phone <span class="text-muted">(Optional)</span></label>
											<div class="col-sm-9">
												<input type="text" class="form-control" id="phone" placeholder="+x(xxx)xxx-xx-xx" value="+1 (304) 499-13-66">
											</div>
										</div>
										<div class="row form-group">
											<label for="location" class="col-sm-3 col-form-label input-label">Location</label>
											<div class="col-sm-9">
												<div class="mb-3">
													<input type="text" class="form-control" id="location" placeholder="Country" value="United States">
												</div>
												<div class="mb-3">
													<input type="text" class="form-control" placeholder="City" value="Charleston">
												</div>
												<input type="text" class="form-control" placeholder="State" value="West Virginia">
											</div>
										</div>
										<div class="row form-group">
											<label for="addressline1" class="col-sm-3 col-form-label input-label">Address line 1</label>
											<div class="col-sm-9">
												<input type="text" class="form-control" id="addressline1" placeholder="Your address" value="2681  Columbia Mine Road">
											</div>
										</div>
										<div class="row form-group">
											<label for="addressline2" class="col-sm-3 col-form-label input-label">Address line 2 <span class="text-muted">(Optional)</span></label>
											<div class="col-sm-9">
												<input type="text" class="form-control" id="addressline2" placeholder="Your address">
											</div>
										</div>
										<div class="row form-group">
											<label for="zipcode" class="col-sm-3 col-form-label input-label">Zip code</label>
											<div class="col-sm-9">
												<input type="text" class="form-control" id="zipcode" placeholder="Your zip code" value="25301">
											</div>
										</div>
										<div class="text-right">
											<button type="submit" class="btn btn-primary">Save Changes</button>
										</div>
									</form>
									<!-- /Form -->
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Page Wrapper -->

			<!-- Notification -->
			<div class="notifications">
				<div class="topnav-dropdown-header">
					<span class="notification-title">Notifications</span>
					<a href="javascript:void(0)" class="clear-noti"> <x-circle-icon size="1.2x" class="custom-class"></x-circle-icon> </a>
				</div>
				<div class="noti-content">
					<ul class="notification-list">
						<li class="notification-message">
							<a href="#">
								<div class="media">
									<span class="avatar">
									<img alt="" src="@/assets/img/profiles/avatar-02.jpg" class="rounded-circle">
									</span>
									<div class="media-body">
										<p class="noti-details"><span class="noti-title">John Doe</span> added new task <span class="noti-title">Patient appointment booking</span></p>
										<p class="noti-time"><span class="notification-time">4 mins ago</span></p>
									</div>
								</div>
							</a>
						</li>
						<li class="notification-message">
							<a href="#">
								<div class="media">
									<span class="avatar">
									<img alt="" src="@/assets/img/profiles/avatar-03.jpg" class="rounded-circle">
									</span>
									<div class="media-body">
										<p class="noti-details"><span class="noti-title">Tarah Shropshire</span> changed the task name <span class="noti-title">Appointment booking with payment gateway</span></p>
										<p class="noti-time"><span class="notification-time">6 mins ago</span></p>
									</div>
								</div>
							</a>
						</li>
						<li class="notification-message">
							<a href="#">
								<div class="media">
									<span class="avatar">
									<img alt="" src="@/assets/img/profiles/avatar-06.jpg" class="rounded-circle">
									</span>
									<div class="media-body">
										<p class="noti-details"><span class="noti-title">Misty Tison</span> added <span class="noti-title">Domenic Houston</span> and <span class="noti-title">Claire Mapes</span> to project <span class="noti-title">Doctor available module</span></p>
										<p class="noti-time"><span class="notification-time">8 mins ago</span></p>
									</div>
								</div>
							</a>
						</li>
						<li class="notification-message">
							<a href="#">
								<div class="media">
									<span class="avatar">
									<img alt="" src="@/assets/img/profiles/avatar-17.jpg" class="rounded-circle">
									</span>
									<div class="media-body">
										<p class="noti-details"><span class="noti-title">Rolland Webber</span> completed task <span class="noti-title">Patient and Doctor video conferencing</span></p>
										<p class="noti-time"><span class="notification-time">12 mins ago</span></p>
									</div>
								</div>
							</a>
						</li>
						<li class="notification-message">
							<a href="#">
								<div class="media">
									<span class="avatar">
									<img alt="" src="@/assets/img/profiles/avatar-13.jpg" class="rounded-circle">
									</span>
									<div class="media-body">
										<p class="noti-details"><span class="noti-title">Bernardo Galaviz</span> added new task <span class="noti-title">Private chat module</span></p>
										<p class="noti-time"><span class="notification-time">2 days ago</span></p>
									</div>
								</div>
							</a>
						</li>
					</ul>
				</div>
				<div class="topnav-dropdown-footer">
					<a href="javascript:void(0);">View all Notifications</a>
				</div>
			</div>
			<!-- /Notification -->

		</diV>
		
	</div>
</template>

<script>
import { Edit2Icon } from 'vue-feather-icons'
import { XCircleIcon } from 'vue-feather-icons'
	export default {
		components: {
    Edit2Icon,
     XCircleIcon
  },
		mounted() {
			$(document).ready(function () {


				//Notification
	$(document).on('click', '.notifications-item', function(s) {
		s.preventDefault();
		$('.notifications').addClass('notifications-open');
		$('.sidebar-overlay').toggleClass('opened');
		$('body').addClass('menu-opened');
	});
	$(document).on('click', '.clear-noti', function(s) {
		s.preventDefault();
		$('.notifications').removeClass('notifications-open');
		$(".sidebar-overlay").removeClass("opened");
		$('body').removeClass('menu-opened');
	});

				$(document).on('click', '#filter_search', function() {
		$('#filter_inputs').slideToggle("slow");
	});
	$("#calendar-doctor").simpleCalendar({
		fixedStartDay: 0, // begin weeks by sunday
		disableEmptyDetails: true,
		events: [
			// generate new event after tomorrow for one hour
			{
				startDate: new Date(new Date().setHours(new Date().getHours() + 24)).toDateString(),
				endDate: new Date(new Date().setHours(new Date().getHours() + 25)).toISOString(),
				summary: 'Conference with doctors'
			},
			// generate new event for yesterday at noon
			{
				startDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 12, 0)).toISOString(),
				endDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 11)).getTime(),
				summary: 'Order new medicine stock'
			},
			// generate new event for the last two days
			{
				startDate: new Date(new Date().setHours(new Date().getHours() - 48)).toISOString(),
				endDate: new Date(new Date().setHours(new Date().getHours() - 24)).getTime(),
				summary: 'Patient Spine Surgery'
			}
		],

	});
});

// Chat

	var chatAppTarget = $('.chat-window');
	(function() {
		if ($(window).width() > 991)
			chatAppTarget.removeClass('chat-slide');
		
		$(document).on("click",".chat-window .chat-users-list a.media",function () {
			if ($(window).width() <= 991) {
				chatAppTarget.addClass('chat-slide');
			}
			return false;
		});
		$(document).on("click","#back_user_list",function () {
			if ($(window).width() <= 991) {
				chatAppTarget.removeClass('chat-slide');
			}	
			return false;
		});
	})();

	
	// Page Content Height
	
	if($('.page-wrapper').length > 0 ){
		var height = $(window).height();	
		$(".page-wrapper").css("min-height", height);
	}
	
	// Page Content Height Resize
	
	$(window).resize(function(){
		if($('.page-wrapper').length > 0 ){
			var height = $(window).height();
			$(".page-wrapper").css("min-height", height);
		}
	});
	
	// Select 2
	
	if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
	
	// Datetimepicker
	
	if($('.datetimepicker').length > 0 ){
		$('.datetimepicker').datetimepicker({
			format: 'DD/MM/YYYY',
			icons: {
				up: "fa fa-angle-up",
				down: "fa fa-angle-down",
				next: 'fa fa-angle-right',
				previous: 'fa fa-angle-left'
			}
		});
		$('.datetimepicker').on('dp.show',function() {
			$(this).closest('.table-responsive').removeClass('table-responsive').addClass('temp');
		}).on('dp.hide',function() {
			$(this).closest('.temp').addClass('table-responsive').removeClass('temp')
		});
	}

	// Tooltip
	
	if($('[data-toggle="tooltip"]').length > 0 ){
		$('[data-toggle="tooltip"]').tooltip();
	}
	
    // Datatable

    if ($('.datatable').length > 0) {
        $('.datatable').DataTable({
            "bFilter": false,
        });
    }

	// Check all email
	
	$(document).on('click', '#check_all', function() {
		$('.checkmail').click();
		return false;
	});
	if($('.checkmail').length > 0) {
		$('.checkmail').each(function() {
			$(this).on('click', function() {
				if($(this).closest('tr').hasClass('checked')) {
					$(this).closest('tr').removeClass('checked');
				} else {
					$(this).closest('tr').addClass('checked');
				}
			});
		});
	}
	
	// Mail important
	
	$(document).on('click', '.mail-important', function() {
		$(this).find('i.fa').toggleClass('fa-star').toggleClass('fa-star-o');
	});
	
	// Summernote
	
	if($('.summernote').length > 0) {
		$('.summernote').summernote({
			height: 200,                 // set editor height
			minHeight: null,             // set minimum height of editor
			maxHeight: null,             // set maximum height of editor
			focus: false                 // set focus to editable area after initializing summernote
		});
	}
	
    // Product thumb images

    if ($('.proimage-thumb li a').length > 0) {
        var full_image = $(this).attr("href");
        $(".proimage-thumb li a").click(function() {
            full_image = $(this).attr("href");
            $(".pro-image img").attr("src", full_image);
            $(".pro-image img").parent().attr("href", full_image);
            return false;
        });
    }

    // Lightgallery

    if ($('#pro_popup').length > 0) {
        $('#pro_popup').lightGallery({
            thumbnail: true,
            selector: 'a'
        });
    }

			
		},
	}
</script>