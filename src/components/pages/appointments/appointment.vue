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
										<li class="breadcrumb-item active">Appointment</li>
									</ul>
								</div>
							</div> 
						</div>
					</div> 
					<!-- /Page Header -->

		<!-- Add Event Modal -->
				<div id="add_event" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Add Event</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="form-group">
										<label>Event Name <span class="text-danger">*</span></label>
										<input class="form-control" type="text">
									</div>
									<div class="form-group">
										<label>Event Date <span class="text-danger">*</span></label>
										<div class="cal-icon">
											<input class="form-control datetimepicker" type="text">
										</div>
									</div>
									<div class="submit-section">
										<button class="btn btn-primary submit-btn">Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<!-- /Add Event Modal -->
				
					
					<div class="comp-sec-wrapper">				
						<!-- Cards -->
						<section class="comp-section comp-cards">
							<div class="section-header">
                                <h3 class="section-title">Appointment Section</h3>
                                <div class="line"></div>
                            </div>
							<div class="row"  v-for="(doctor, index)  in doctors.data" :key="index">
								<div class="col-12 col-md-6 col-lg-11 mx-auto d-flex">
									<div class="card flex-fill bg-white">
										<div class="card-body">
											<div class="row" >
												<div class="col-9">
													<div class="row">
														<div class="col flex-grow-0  ">
															<div class="avatar avatar-online avatar-xl">
																<img class="avatar-img rounded-circle" alt="User Image" src="@/assets/img/profiles/avatar-02.jpg">
															</div>
														</div>
															<div class="col-10  flex-grow-0 "> 
																<h6 class="text-lg mt-3 " style="color:#50599d;">Dr  {{ doctor.name }} </h6>
																<span style="font-size:13px; " class="">{{ doctor.country }}  </span>
															</div>
														</div>
													</div>
													<div class="col-3 col-md-3 p-0 m-0" style="font-size:15px;">
														<span style="color:#50599d; font-weight:bold"> Specialization:  </span> {{ doctor.specialization }}
													</div>
												</div>
											<p class="card-text mt-4 ml-4"> {{ doctor.about }}</p>
										</div>
										<div class="card-footer text-muted">
											<button class="btn  btn-primary "  data-toggle="modal" data-target="#add_event">Check this profile </button>
										</div>
									</div>
								</div>
							</div>
							<!-- <div class="row">
								<div class="col-12 col-md-6 col-lg-11 mx-auto d-flex">
									<div class="card flex-fill bg-white">
										<div class="card-body">
											<div class="row" >
												<div class="col-9">
													<div class="row">
														<div class="col flex-grow-0  ">
															<div class="avatar avatar-online avatar-xl">
																<img class="avatar-img rounded-circle" alt="User Image" src="@/assets/img/profiles/avatar-02.jpg">
															</div>
														</div>
															<div class="col-10  flex-grow-0 "> 
																<h6 class="text-lg mt-3 " style="color:#50599d;">Dr Emmanuel Ekundayo  </h6>
																<span style="font-size:13px; " class="">Nigeria, Abia State </span>
															</div>
														</div>
													</div>
													<div class="col-3 col-md-3 p-0 m-0" style="font-size:15px;">
														<span style="color:#50599d; font-weight:bold"> Specialization:  </span> Optometry
													</div>
												</div>
											<p class="card-text mt-4 ml-4">Dr. Ekundayo is a seasoned doctor with the capacity to carry out optometory to its peek and well versed as an optimician and has a Special placae a s a dedicator doctor specialist plus he is very qualified to make your eyes seee well so that you can be able see and acknowledge that you really was treated very well </p>
										</div>
										<div class="card-footer text-muted">
										<button class="btn  btn-primary ">Check this profile </button>
										</div>
									</div>
								</div>
							</div> -->
						</section>
						<!-- /Cards -->
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
import { XCircleIcon } from 'vue-feather-icons'
	export default {
		components: {
    XCircleIcon
  },

  computed : {
	doctors() {
	return this.$store.getters.allDoctors

	},

  },


mounted() {
	this.$store.dispatch('getDoctors').data
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