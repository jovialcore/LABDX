<template>
	<div>
		<div class="main-wrapper">
			<layout-header></layout-header>
			<layout-navbarvisit></layout-navbarvisit>
			
			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
					<div class="card bg-white">
						<div class="card-body">
							<div class="row">
								<div class="col-sm-6 m-b-20">
									<ul class="list-unstyled">
										<li>Queens Valley Hospital</li>
										<li>3864 Quiet Valley Lane,</li>
										<li>Sherman Oaks, CA, 91403</li>
										<li>GST No:</li>
									</ul>
								</div>
								<div class="col-sm-6 m-b-20">
									<div class="invoice-details">
										<h4 class="text-uppercase">Invoice #INV-0001</h4>
										<ul class="list-unstyled">
											<li>Date: <span>March 12, 2020</span>
											</li>
											<li>Due date: <span>April 25, 2020</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-6 col-lg-7 col-xl-8 m-b-20">
									<h5>Invoice to:</h5>
									<ul class="list-unstyled">
										<li>
											<h5><strong>Barry Cuda</strong></h5>
										</li>
										<li><span>Global Technologies</span>
										</li>
										<li>5754 Airport Rd</li>
										<li>Coosada, AL, 36020</li>
										<li>United States</li>
										<li>888-777-6655</li>
										<li><a href="#">barrycuda@example.com</a>
										</li>
									</ul>
								</div>
								<div class="col-sm-6 col-lg-5 col-xl-4 m-b-20">
									<span class="text-muted">Payment Details:</span>
									<ul class="list-unstyled invoice-payment-details">
										<li>
											<h5>Total Due: <span class="text-right">$8,750</span></h5>
										</li>
										<li>Bank name: <span>Profit Bank Europe</span>
										</li>
										<li>Country: <span>United Kingdom</span>
										</li>
										<li>City: <span>London E1 8BF</span>
										</li>
										<li>Address: <span>3 Goodman Street</span>
										</li>
										<li>IBAN: <span>KFH37784028476740</span>
										</li>
										<li>SWIFT code: <span>BPT4E</span>
										</li>
									</ul>
								</div>
							</div>
							<div class="table-responsive">
								<table class="table table-striped table-hover">
									<thead>
										<tr>
											<th>#</th>
											<th>ITEM</th>
											<th class="d-none d-sm-table-cell">DESCRIPTION</th>
											<th>UNIT COST</th>
											<th>QUANTITY</th>
											<th class="text-right">TOTAL</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>Visting Charges</td>
											<td class="d-none d-sm-table-cell">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
											<td>$100</td>
											<td>2</td>
											<td class="text-right">$100</td>
										</tr>
										<tr>
											<td>2</td>
											<td>Medicines</td>
											<td class="d-none d-sm-table-cell">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
											<td>$67</td>
											<td>12</td>
											<td class="text-right">$900</td>
										</tr>
										<tr>
											<td>3</td>
											<td>X-ray Reports</td>
											<td class="d-none d-sm-table-cell">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
											<td>$25</td>
											<td>5</td>
											<td class="text-right">$125</td>
										</tr>
										<tr>
											<td>4</td>
											<td>MRI Scan</td>
											<td class="d-none d-sm-table-cell">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
											<td>$250</td>
											<td>1</td>
											<td class="text-right">$250</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div>
								<div class="row invoice-payment">
									<div class="col-sm-7"></div>
									<div class="col-sm-5">
										<div class="my-3">
											<div class="table-responsive no-border">
												<table class="table mb-0">
													<tbody>
														<tr>
															<th>Subtotal:</th>
															<td class="text-right">$1,375</td>
														</tr>
														<tr>
															<th>Tax: <span class="text-regular">(25%)</span>
															</th>
															<td class="text-right">$250</td>
														</tr>
														<tr>
															<th>Total:</th>
															<td class="text-right text-primary">
																<h5>$1,625</h5>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
								<div class="invoice-info">
									<h5>Other information</h5>
									<p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem interdum, eu scelerisque tellus fermentum. Curabitur sit amet lacinia lorem. Nullam finibus pellentesque libero, eu finibus sapien interdum vel</p>
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
					<a href="#">View all Notifications</a>
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