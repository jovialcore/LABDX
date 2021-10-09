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
							<div class="col">
								<div class="d-flex align-items-center">
									<h5 class="page-title">Dashboard</h5>
									<ul class="breadcrumb ml-2">
										<li class="breadcrumb-item"><router-link to="/index"><i class="fas fa-home"></i></router-link></li>
										<li class="breadcrumb-item"><router-link to="/index">Doctor Dashboard</router-link></li>
										<li class="breadcrumb-item active">Patients</li>
									</ul>
								</div>
							</div>
							<div class="col-auto text-right">
								<a class="btn btn-white filter-btn" href="javascript:void(0);" id="filter_search">	<filter-icon size="1.8x" class="custom-class"></filter-icon>
								</a>
							</div>
						</div>
					</div>
					<!-- Search Filter -->
					<form action="#" method="post" id="filter_inputs">
						<input type="hidden" name="csrf_token_name" value="4a0efd10c152f3f6117fec6b1be8e87e" />
						<div class="card filter-card">
							<div class="card-body pb-0">
								<div class="row filter-row">
									<div class="col-sm-6 col-md-3">
										<div class="form-group">
											<label>Patient ID</label> 
											<input class="form-control" type="text" name="from"> 
										</div>
									</div>
									<div class="col-sm-6 col-md-3">
										<div class="form-group">
											<label>Patient Name</label> 
											<input class="form-control" type="text" name="from"> 
										</div>
									</div>
									<div class="col-sm-6 col-md-3">
										<div class="form-group">
											<label>Mobile Number</label> 
											<input class="form-control" type="text" name="to"> 
										</div>
									</div>
									<div class="col-sm-6 col-md-3">
										<div class="form-group">
											<label>Email Id</label> 
											<input class="form-control" type="text" name="to"> 
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
					<!-- /Search Filter -->
					<!-- /Page Header -->
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-body">
									<div class="table-responsive">
										<table class="table mb-0">
											<thead>
												<tr>
													<th>ID</th>
													<th>Name</th>
													<th>Age</th>
													<th>Address</th>
													<th>Phone</th>
													<th>Email</th>
													<th class="text-right">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>EMR125</td>
													<td><router-link to="/patients-profile"><img width="28" height="28" src="@/assets/img/profiles/avatar-06.jpg" class="rounded-circle m-r-5" alt=""> Terry Baker</router-link></td>
													<td>35</td>
													<td>5578 Dorsey NC, United States</td>
													<td>(207) 808 8863</td>
													<td>Brandon  Stone@example.com</td>
													<td class="text-right">
														<router-link to="/patients-profile" class="btn btn-sm btn-white text-success mr-2"><i class="fas fa-eye mr-1"></i> View</router-link> 
														<a href="javascript:void(0);" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1"></i>Delete</a>
													</td>
												</tr>
												<tr>
													<td>EMR233</td>
													<td><router-link to="/patients-profile"><img width="28" height="28" src="@/assets/img/profiles/avatar-04.jpg" class="rounded-circle m-r-5" alt=""> Kyle Woodbury</router-link></td>
													<td>23</td>
													<td>223 2H, Hempstead, United States</td>
													<td>(376) 150 6975</td>
													<td>terry@example.com</td>
													<td class="text-right">
														<router-link to="/patients-profile" class="btn btn-sm btn-white text-success mr-2"><i class="fas fa-eye mr-1"></i> View</router-link> 
														<a href="javascript:void(0);" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1"></i>Delete</a>
													</td>
												</tr>
												<tr>
													<td>EMR346</td>
													<td><router-link to="/patients-profile"><img width="28" height="28" src="@/assets/img/profiles/avatar-05.jpg" class="rounded-circle m-r-5" alt=""> Marie Gallardo</router-link></td>
													<td>17</td>
													<td>2321 #APT 207, Vero Beach, United States</td>
													<td>(981) 756 6128</td>
													<td>Kyle Woodbury@example.com</td>
													<td class="text-right">
														<router-link to="/patients-profile" class="btn btn-sm btn-white text-success mr-2"><i class="fas fa-eye mr-1"></i> View</router-link> 
														<a href="javascript:void(0);" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1"></i>Delete</a>
													</td>
												</tr>
												<tr>
													<td>EMR244</td>
													<td><router-link to="/patients-profile"><img width="28" height="28" src="@/assets/img/profiles/avatar-03.jpg" class="rounded-circle m-r-5" alt=""> Maurice Guz</router-link></td>
													<td>22</td>
													<td>2344 Columbia, United States</td>
													<td>(634) 09 3833</td>
													<td>Marie Gallardo@example.com</td>
													<td class="text-right">
														<router-link to="/patients-profile" class="btn btn-sm btn-white text-success mr-2"><i class="fas fa-eye mr-1"></i> View</router-link> 
														<a href="javascript:void(0);" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1"></i>Delete</a>
													</td>
												</tr>
												<tr>
													<td>EMR789</td>
													<td><router-link to="/patients-profile"><img width="28" height="28" src="@/assets/img/profiles/avatar-01.jpg" class="rounded-circle m-r-5" alt=""> Julia Sims</router-link></td>
													<td>29</td>
													<td>4712 Spring Creek Dr, Washington</td>
													<td>(407) 554 4146</td>
													<td>Joshua Maurice@example.com</td>
													<td class="text-right">
														<router-link to="/patients-profile" class="btn btn-sm btn-white text-success mr-2"><i class="fas fa-eye mr-1"></i> View</router-link> 
														<a href="javascript:void(0);" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1"></i>Delete</a>
													</td>
												</tr>
												<tr>
													<td>EMR562</td>
													<td><router-link to="/patients-profile"><img width="28" height="28" src="@/assets/img/profiles/avatar-02.jpg" class="rounded-circle m-r-5" alt=""> Linda Carp</router-link></td>
													<td>27</td>
													<td>2870  University Street, United States</td>
													<td>(680) 432 2662</td>
													<td>julia@example.com</td>
													<td class="text-right">
														<router-link to="/patients-profile" class="btn btn-sm btn-white text-success mr-2"><i class="fas fa-eye mr-1"></i> View</router-link> 
														<a href="javascript:void(0);" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1"></i>Delete</a>
													</td>
												</tr>
											</tbody>
										</table>
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
					<a href="javascript:void(0)" class="clear-noti"> <i class="feather-x-circle"></i> </a>
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

import { FilterIcon } from 'vue-feather-icons'
import { XCircleIcon } from 'vue-feather-icons'
	export default {
		components: {
    FilterIcon,
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