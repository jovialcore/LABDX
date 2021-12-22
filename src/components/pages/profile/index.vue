<template>
	<div>
		<div class="main-wrapper">
			<layout-header></layout-header>
			<layout-navbar></layout-navbar>
			
			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
				
					<div class="row justify-content-lg-center">
						<div class="col-lg-10">
						
						<!-- Page Header -->
						<div class="page-header">
							<div class="row align-items-center">
								<div class="col-md-12">
									<div class="d-flex align-items-center">
										<h5 class="page-title">Dashboard</h5>
										<ul class="breadcrumb ml-2">
											<li class="breadcrumb-item"><router-link to="/index"><i class="fas fa-home"></i></router-link></li>
											<li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
											<li class="breadcrumb-item active">Profile</li>
										</ul>
									</div>
								</div> 
							</div>
						</div> 
						<!-- /Page Header -->
			   
							<div class="profile-cover">
								<div class="profile-cover-wrap">
									<img class="profile-cover-img" src="@/assets/img/profiles/avatar-02.jpg" alt="Profile Cover">

									<!-- Custom File Cover -->
									<div class="cover-content">
										<div class="custom-file-btn">
											<input type="file" class="custom-file-btn-input" id="cover_upload">
											<label class="custom-file-btn-label btn btn-sm btn-white" for="cover_upload">
												<i class="fas fa-camera"></i>
												<span class="d-none d-sm-inline-block ml-1">Update Cover</span>
											</label>
										</div>
									</div>
									<!-- /Custom File Cover -->
								</div>
							</div>

							<div class="text-center my-4">
								<label class="avatar avatar-xxl profile-cover-avatar" for="avatar_upload">
									<img class="avatar-img" src="@/assets/img/profiles/avatar-02.jpg" alt="Profile Image">
									<input type="file" id="avatar_upload">
									<span class="avatar-edit">
										<edit-2-icon size="1.5x" class="custom-class"></edit-2-icon>
									</span>
								</label>
								<h2>Charles Hafner <i class="fas fa-certificate text-primary small" data-toggle="tooltip" data-placement="top" title="" data-original-title="Verified"></i></h2>
								<ul class="list-inline">
									<li class="list-inline-item">
										<i class="far fa-building"></i> <span>Hafner Pvt Ltd.</span>
									</li>
									<li class="list-inline-item">
										<i class="fas fa-map-marker-alt"></i> West Virginia, US
									</li>
									<li class="list-inline-item">
										<i class="far fa-calendar-alt"></i> <span>Joined November 2017</span>
									</li>
								</ul>
							</div>
			
							<div class="row">
								<div class="col-lg-4">
									<div class="card card-body">
										<h5>Complete your profile</h5>

										<!-- Progress -->
										<div class="d-flex justify-content-between align-items-center">
											<div class="progress progress-md flex-grow-1">
												<div class="progress-bar bg-primary" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<span class="ml-4">30%</span>
										</div>
										<!-- /Progress -->
									</div>

									<div class="card">
										<div class="card-header">
											<h5 class="card-title d-flex justify-content-between">
												<span>Profile</span> 
												<router-link class="btn btn-sm btn-white" to="/settings">Edit</router-link>
											</h5>
										</div>
										<div class="card-body">
											<ul class="list-unstyled mb-0">
												<li class="py-0">
													<small class="text-dark">About</small>
												</li>
												<li>
													Charles Hafner
												</li>
												<li>
													Hafner Pvt Ltd.
												</li>
												<li class="pt-2 pb-0">
													<small class="text-dark">Contacts</small>
												</li>
												<li>
													charleshafner@example.com
												</li>
												<li>
													+1 (304) 499-13-66
												</li>
												<li class="pt-2 pb-0">
													<small class="text-dark">Address</small>
												</li>
												<li>
													4663  Agriculture Lane,<br>
													Miami,<br>
													Florida - 33165,<br>
													United States.
												</li>
											</ul>
										</div>
									</div>

								</div>

								<div class="col-lg-8">
									<div class="card">
										<div class="card-header">
											<h5 class="card-title">Activity</h5>
										</div>
										<div class="card-body card-body-height">
											<ul class="activity-feed">
												<li class="feed-item">
													<div class="feed-date">Nov 16</div>
													<span class="feed-text"><router-link to="/profile">Brian Johnson</router-link> has paid the invoice <router-link to="/view-invoice">"#DF65485"</router-link></span>
												</li>
												<li class="feed-item">
													<div class="feed-date">Nov 7</div>
													<span class="feed-text"><router-link to="/profile">Marie Canales</router-link>  has accepted your estimate <router-link to="/view-estimate">#GTR458789</router-link></span>
												</li>
												<li class="feed-item">
													<div class="feed-date">Oct 24</div>
													<span class="feed-text">New expenses added <router-link to="/expenses">"#TR018756</router-link></span>
												</li>
												<li class="feed-item">
													<div class="feed-date">Oct 24</div>
													<span class="feed-text">New expenses added <router-link to="/expenses">"#TR018756</router-link></span>
												</li>
												<li class="feed-item">
													<div class="feed-date">Oct 24</div>
													<span class="feed-text">New expenses added <router-link to="/expenses">"#TR018756</router-link></span>
												</li>
												<li class="feed-item">
													<div class="feed-date">Oct 24</div>
													<span class="feed-text">New expenses added <router-link to="/expenses">"#TR018756</router-link></span>
												</li>
												<li class="feed-item">
													<div class="feed-date">Oct 24</div>
													<span class="feed-text">New expenses added <router-link to="/expenses">"#TR018756</router-link></span>
												</li>
												<li class="feed-item">
													<div class="feed-date">Jan 27</div>
													<span class="feed-text"><router-link to="/profile">Robert Martin</router-link> gave a review for <router-link to="/product-details">"Dell Laptop"</router-link></span>
												</li>
												<li class="feed-item">
													<div class="feed-date">Jan 14</div>
													<span class="feed-text">New customer registered <router-link to="/profile">"Tori Carter"</router-link></span>
												</li>
											</ul>
										</div>
									</div>
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


				$('#world_map').vectorMap({
		map: 'world_mill',
		scaleColors : ['#03a9f4', '#03a9f4'],
		normalizeFunction : 'polynomial',
		hoverOpacity : 0.7,
		hoverColor : false,
		regionStyle : {
			initial : {
				fill : '#2962ff'
			}
		},
		backgroundColor : 'transparent'
	});
	
	$('#usa').vectorMap({
		map: 'us_aea',
		backgroundColor: 'transparent',
		regionStyle: {
			initial: {
				fill: '#2962ff'
			}
		}
	});
	$('#india').vectorMap({
		map : 'in_mill',
		backgroundColor : 'transparent',
		regionStyle : {
			initial : {
				fill : '#2962ff'
			}
		}
	});
	$('#uk').vectorMap({map: 'uk_countries_mill',backgroundColor: 'transparent',
			  regionStyle: {
				initial: {
				  fill: '#2962ff'
				}
			  }});
	$('#russia').vectorMap({
		map: 'ru_mill',
		backgroundColor: 'transparent',
			  regionStyle: {
				initial: {
				  fill: '#2962ff'
				}
			  }});



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