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
										<li class="breadcrumb-item active">Form Validation</li>
									</ul>
								</div>
							</div> 
						</div>
					</div> 
					<!-- /Page Header -->
					
					<!-- Row -->
					<div class="row">
						<div class="col-sm-12">
						
							<!-- Custom Boostrap Validation -->
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Custom Bootstrap Form Validation</h5>
									<p class="card-text">For custom Bootstrap form validation messages, you’ll need to add the <code>novalidate</code> boolean attribute to your form. For server side validation <a href="https://getbootstrap.com/docs/4.1/components/forms/#server-side" target="_blank">read full documentation</a>.</p>
								</div>
								<div class="card-body">
									<div class="row">
										<div class="col-sm">
											<form class="needs-validation" novalidate>
												<div class="form-row">
													<div class="col-md-4 mb-3">
														<label for="validationCustom01">First name</label>
														<input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="Mark" required>
														<div class="valid-feedback">
															Looks good!
														</div>
													</div>
													<div class="col-md-4 mb-3">
														<label for="validationCustom02">Last name</label>
														<input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required>
														<div class="valid-feedback">
															Looks good!
														</div>
													</div>
													<div class="col-md-4 mb-3">
														<label for="validationCustomUsername">Username</label>
														<div class="input-group">
															<div class="input-group-prepend">
																<span class="input-group-text" id="inputGroupPrepend">@</span>
															</div>
															<input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required>
															<div class="invalid-feedback">
																Please choose a username.
															</div>
														</div>
													</div>
												</div>
												<div class="form-row">
													<div class="col-md-6 mb-3">
														<label for="validationCustom03">City</label>
														<input type="text" class="form-control" id="validationCustom03" placeholder="City" required>
														<div class="invalid-feedback">
															Please provide a valid city.
														</div>
													</div>
													<div class="col-md-3 mb-3">
														<label for="validationCustom04">State</label>
														<input type="text" class="form-control" id="validationCustom04" placeholder="State" required>
														<div class="invalid-feedback">
															Please provide a valid state.
														</div>
													</div>
													<div class="col-md-3 mb-3">
														<label for="validationCustom05">Zip</label>
														<input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required>
														<div class="invalid-feedback">
															Please provide a valid zip.
														</div>
													</div>
												</div>
												<div class="form-group">
													<div class="form-check">
														<input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
														<label class="form-check-label" for="invalidCheck">
															Agree to terms and conditions
														</label>
														<div class="invalid-feedback">
															You must agree before submitting.
														</div>
													</div>
												</div>
												<button class="btn btn-primary" type="submit">Submit form</button>
											</form>
										</div>
									</div>
								</div>
							</div>
							<!-- /Custom Boostrap Validation -->
							
							<!-- Default Browser Validation -->
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Browser defaults</h5>
									<p class="card-text">Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below.</p>
								</div>
								<div class="card-body">
									<div class="row">
										<div class="col-sm">
											<form>
												<div class="form-row">
													<div class="col-md-4 mb-3">
														<label for="validationDefault01">First name</label>
														<input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="Mark" required>
													</div>
													<div class="col-md-4 mb-3">
														<label for="validationDefault02">Last name</label>
														<input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
													</div>
													<div class="col-md-4 mb-3">
														<label for="validationDefaultUsername">Username</label>
														<div class="input-group">
															<div class="input-group-prepend">
																<span class="input-group-text" id="inputGroupPrepend2">@</span>
															</div>
															<input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required>
														</div>
													</div>
												</div>
												<div class="form-row">
													<div class="col-md-6 mb-3">
														<label for="validationDefault03">City</label>
														<input type="text" class="form-control" id="validationDefault03" placeholder="City" required>
													</div>
													<div class="col-md-3 mb-3">
														<label for="validationDefault04">State</label>
														<input type="text" class="form-control" id="validationDefault04" placeholder="State" required>
													</div>
													<div class="col-md-3 mb-3">
														<label for="validationDefault05">Zip</label>
														<input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required>
													</div>
												</div>
												<div class="form-group">
													<div class="form-check">
														<input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
														<label class="form-check-label" for="invalidCheck2">
															Agree to terms and conditions
														</label>
													</div>
												</div>
												<button class="btn btn-primary" type="submit">Submit form</button>
											</form>
										</div>
									</div>
								</div>
							</div>
							<!-- /Default Browser Validation -->

							<!-- Server Side Validation -->
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Server side</h5>
									<p class="card-text">We recommend using client side validation, but in case you require server side, you can indicate invalid and valid form fields with <code>.is-invalid</code> and <code>.is-valid</code>. Note that <code>.invalid-feedback</code> is also supported with these classes.</p>
								</div>
								<div class="card-body">
									<form>
										<div class="form-row">
											<div class="col-md-4 mb-3">
												<label for="validationServer01">First name</label>
												<input type="text" class="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required>
												<div class="valid-feedback">
													Looks good!
												</div>
											</div>
											<div class="col-md-4 mb-3">
												<label for="validationServer02">Last name</label>
												<input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required>
												<div class="valid-feedback">
													Looks good!
												</div>
											</div>
											<div class="col-md-4 mb-3">
												<label for="validationServerUsername">Username</label>
												<div class="input-group">
													<div class="input-group-prepend">
														<span class="input-group-text" id="inputGroupPrepend3">@</span>
													</div>
													<input type="text" class="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required>
													<div class="invalid-feedback">
														Please choose a username.
													</div>
												</div>
											</div>
										</div>
										<div class="form-row">
											<div class="col-md-6 mb-3">
												<label for="validationServer03">City</label>
												<input type="text" class="form-control is-invalid" id="validationServer03" placeholder="City" required>
												<div class="invalid-feedback">
													Please provide a valid city.
												</div>
											</div>
											<div class="col-md-3 mb-3">
												<label for="validationServer04">State</label>
												<input type="text" class="form-control is-invalid" id="validationServer04" placeholder="State" required>
												<div class="invalid-feedback">
													Please provide a valid state.
												</div>
											</div>
											<div class="col-md-3 mb-3">
												<label for="validationServer05">Zip</label>
												<input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Zip" required>
												<div class="invalid-feedback">
													Please provide a valid zip.
												</div>
											</div>
										</div>
										<div class="form-group">
											<div class="form-check">
												<input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required>
												<label class="form-check-label" for="invalidCheck3">
													Agree to terms and conditions
												</label>
												<div class="invalid-feedback">
													You must agree before submitting.
												</div>
											</div>
										</div>
										<button class="btn btn-primary" type="submit">Submit form</button>
									</form>
								</div>
							</div>
							<!-- /Server Side Validation -->
							
							<!-- Supported Elements -->
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Supported elements</h5>
									<p class="card-text">Form validation styles are also available for bootstrap custom form controls.</p>
								</div>
								<div class="card-body">
									<div class="row">
										<div class="col-sm">
											<form class="was-validated">
												<div class="custom-control custom-checkbox mb-3">
													<input type="checkbox" class="custom-control-input" id="customControlValidation1" required>
													<label class="custom-control-label" for="customControlValidation1">Check this custom checkbox</label>
													<div class="invalid-feedback">Example invalid feedback text</div>
												</div>
												<div class="custom-control custom-radio">
													<input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" required>
													<label class="custom-control-label" for="customControlValidation2">Toggle this custom radio</label>
												</div>
												<div class="custom-control custom-radio mb-3">
													<input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" required>
													<label class="custom-control-label" for="customControlValidation3">Or toggle this other custom radio</label>
													<div class="invalid-feedback">More example invalid feedback text</div>
												</div>
												<div class="form-group">
													<select class="custom-select" required>
														<option value="">Open this select menu</option>
														<option value="1">One</option>
														<option value="2">Two</option>
														<option value="3">Three</option>
													</select>
													<div class="invalid-feedback">Example invalid custom select feedback</div>
												</div>

												<div class="custom-file">
													<input type="file" class="custom-file-input" id="validatedCustomFile" required>
													<label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
													<div class="invalid-feedback">Example invalid custom file feedback</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
							<!-- /Supported Elements -->
							
							<!-- Validation Tooltips -->
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Tooltips</h5>
									<p class="card-text">You can swap the <code>.{valid|invalid}-feedback</code> classes for <code>.{valid|invalid}-tooltip</code> classes to display validation feedback in a styled tooltip.</p>
								</div>
								<div class="card-body">
									<form class="needs-validation" novalidate>
										<div class="form-row">
											<div class="col-md-4 mb-3">
												<label for="validationTooltip01">First name</label>
												<input type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required>
												<div class="valid-tooltip">
													Looks good!
												</div>
											</div>
											<div class="col-md-4 mb-3">
												<label for="validationTooltip02">Last name</label>
												<input type="text" class="form-control" id="validationTooltip02" placeholder="Last name" value="Otto" required>
												<div class="valid-tooltip">
													Looks good!
												</div>
											</div>
											<div class="col-md-4 mb-3">
												<label for="validationTooltipUsername">Username</label>
												<input type="text" class="form-control" id="validationTooltipUsername" placeholder="Username" required>
												<div class="invalid-tooltip">
													Please choose a unique and valid username.
												</div>
											</div>
										</div>
										<div class="form-row">
											<div class="col-md-6 mb-3">
												<label for="validationTooltip03">City</label>
												<input type="text" class="form-control" id="validationTooltip03" placeholder="City" required>
												<div class="invalid-tooltip">
													Please provide a valid city.
												</div>
											</div>
											<div class="col-md-3 mb-3">
												<label for="validationTooltip04">State</label>
												<input type="text" class="form-control" id="validationTooltip04" placeholder="State" required>
												<div class="invalid-tooltip">
													Please provide a valid state.
												</div>
											</div>
											<div class="col-md-3 mb-3">
												<label for="validationTooltip05">Zip</label>
												<input type="text" class="form-control" id="validationTooltip05" placeholder="Zip" required>
												<div class="invalid-tooltip">
													Please provide a valid zip.
												</div>
											</div>
										</div>
										<button class="btn btn-primary" type="submit">Submit form</button>
									</form>
								</div>
							</div>
							<!-- /Validation Tooltips -->
							
						</div>
					</div>
					<!-- /Row -->
				
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
		mounted() {
			$(document).ready(function () {

				 window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);

				$.mask.definitions['~'] = '[+-]';
  $('#date').mask('99/99/9999');
  $('#phone').mask('(999) 999-9999');
  $('#phoneExt').mask('(999) 999-9999? x99999');
  $('#iphone').mask('+33 999 999 999');
  $('#tin').mask('99-9999999');
  $('#ccn').mask('9999 9999 9999 9999');
  $('#ssn').mask('999-99-9999');
  $('#currency').mask('999,999,999.99');
  $('#product').mask('a*-999-a999', {
    placeholder: ' '
  });
  $('#eyescript').mask('~9.99 ~9.99 999');
  $('#po').mask('PO: aaa-999-***');
  $('#pct').mask('99%');
  $('#phoneAutoclearFalse').mask('(999) 999-9999', {
    autoclear: false
  });
  $('#phoneExtAutoclearFalse').mask('(999) 999-9999? x99999', {
    autoclear: false
  });
  $('input').blur(function () {
    $('#info').html('Unmasked value: ' + $(this).mask());
  }).dblclick(function () {
    $(this).unmask();
  });


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