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
										<li class="breadcrumb-item active">Drug Inventory</li>
									</ul>
								</div>
							</div>
							<div class="col-auto text-right">
								<a class="btn btn-white filter-btn mr-3" href="javascript:void(0);" id="filter_search">	<filter-icon size="1.8x" class="custom-class"></filter-icon>
								</a>	<a href="#" class="btn btn-primary add-button"><plus-icon size="1.8x" class="custom-class"></plus-icon></a>
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
					<div class="card">
						<div class="card-body">
							<div class="table-responsive">
								<table class="table mb-0">
									<thead>
										<tr>
											<th>Name</th>
											<th>Drug Code</th>
											<th>Form</th>
											<th>Size</th>
											<th>Unit</th>
											<th>Quantity</th>
											<th>Manufacture</th>
											<th>Status</th>
											<th>Expires</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Arineal</td>
											<td><a href="#">DR426SA11</a></td>
											<td>Tablet</td>
											<td>Medium</td>
											<td>mg</td>
											<td>210</td>
											<td>Biotec</td>
											<td><span class="badge bg-success-light">Active</span></td>
											<td>12-12-2022</td>
										</tr>
										<tr>
											<td>Adderall</td>
											<td><a href="#">YGTY656HH</a></td>
											<td>Tablet</td>
											<td>Medium</td>
											<td>mg</td>
											<td>210</td>
											<td>Biotec</td>
											<td><span class="badge bg-success-light">Active</span></td>
											<td>12-12-2022</td>
										</tr>
										<tr>
											<td>Atorvastatin</td>
											<td><a href="#">HJ987YT69</a></td>
											<td>Tablet</td>
											<td>Large</td>
											<td>mg</td>
											<td>210</td>
											<td>Biotec</td>
											<td><span class="badge bg-warning-light">Out of Stock</span></td>
											<td>12-12-2022</td>
										</tr>
										<tr>
											<td>Lyrica</td>
											<td><a href="#">MKJ7696GG</a></td>
											<td>Tablet</td>
											<td>Medium</td>
											<td>mg</td>
											<td>210</td>
											<td>Biotec</td>
											<td><span class="badge bg-success-light">Active</span></td>
											<td>12-12-2022</td>
										</tr>
										<tr>
											<td>Xanax</td>
											<td><a href="#">MKVD87650</a></td>
											<td>Tablet</td>
											<td>Small</td>
											<td>mg</td>
											<td>210</td>
											<td>Biotec</td>
											<td><span class="badge bg-danger-light">Expired</span></td>
											<td>12-12-2022</td>
										</tr>
										<tr>
											<td>Methadone</td>
											<td><a href="#">MKJH8764R</a></td>
											<td>Tablet</td>
											<td>Small</td>
											<td>mg</td>
											<td>210</td>
											<td>Biotec</td>
											<td><span class="badge bg-success-light">Active</span></td>
											<td>12-12-2022</td>
										</tr>
										<tr>
											<td>Ibuprofen</td>
											<td><a href="#">MKJH876R3</a></td>
											<td>Tablet</td>
											<td>Large</td>
											<td>mg</td>
											<td>210</td>
											<td>Biotec</td>
											<td><span class="badge bg-danger-light">Expired</span></td>
											<td>12-12-2022</td>
										</tr>
										<tr>
											<td>Otezla</td>
											<td><a href="#">LPT976FRE</a></td>
											<td>Tablet</td>
											<td>Small</td>
											<td>mg</td>
											<td>210</td>
											<td>Biotec</td>
											<td><span class="badge bg-warning-light">Out of Stock</span></td>
											<td>12-12-2022</td>
										</tr>
									</tbody>
								</table>
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
import { FilterIcon } from 'vue-feather-icons'
import { XCircleIcon } from 'vue-feather-icons'
import { PlusIcon } from 'vue-feather-icons'
	export default {
		components: {
    FilterIcon,
    XCircleIcon,
    PlusIcon
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