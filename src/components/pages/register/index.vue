<template>
	<div>
		
<!-- Main Wrapper -->
		<div class="main-wrapper login-body">
		
			<div class="login-wrapper">
				<div class="container">
					<img class="img-fluid logo-dark mb-2" src="@/assets/img/logo.png" alt="Logo">
					
					<div class="loginbox">
						<div class="login-right">
							<div class="login-right-wrap">
								<h1>Register</h1>
							<!-- <div class="text-danger" v-for="msg in notifmsg" :key="msg.index"> 
										{{msg}} 
										
									</div> -->
								<div v-for="(errorArray, idx) in notifmsg" :key="idx">
									<div v-for="(allErrors, idx) in errorArray" :key="idx">
										<span class="text-danger">{{ allErrors}} </span>
									</div>
       							</div>
								<div >
								<p class="account-subtitle">Thank you for choosing EMR. Please fill the form </p>
								</div>
								<!-- Form -->
								<form>

									<div class="form-group">
										<label class="form-control-label">Name</label>
										<input class="form-control" type="name" v-model="name">
									</div>
									<div class="form-group">
										<label class="form-control-label">Email Address</label>
										<input class="form-control" type="email" v-model="email">
									</div>
								<div class="row mx-auto">
									<div class="form-group col">
										<label>Day</label>
											<select class="form-control" v-model="day">
												<option disabled > Select</option>
												<option v-for="days in 31"  :key="days">{{days}}</option>
											</select>
									</div>
								<div class="form-group col">
								
										<label>Month</label>
										<select class="form-control" v-model="month">
											<option disabled > Select</option>
												<option value="1">January</option>
												<option value="2">Febuary</option>
												<option value="3">March</option>
												<option value="4">April</option>
												<option value="5">May</option>
												<option value="6">June</option>
												<option value="7">July</option>
												<option value="8">August</option>
												<option value="9">September</option>
											    <option value="10">October</option>
												<option value="11">November</option>
												<option value="12">December</option>
										</select>
											
									</div>
								<div class="form-group col">
										<label>Year</label>
											<select class="form-control" v-model="year" >
												 <option disabled value=""> Select</option>
												<option  v-for="years in 61" :key="years" >  {{2010 - years}}</option>
											</select>
									</div>
								</div>
									<div class="form-group">
										<div >Gender </div>
										<div class="form-check-inline mt-2">
  											<label class="form-check-label">
    										<input type="radio" class="form-check-input" value="male" v-model="gender">Male </label>
										</div>
										<div class="form-check-inline">
  											<label class="form-check-label">
    										<input type="radio" class="form-check-input" value="female" v-model="gender">Female</label>
										</div>
									</div>
									<div class="form-group">
									<div style="color:red"> {{notifPass}} </div>
										<label class="form-control-label">Password</label>
										<input class="form-control" type="password" v-model="pass" >
									</div>
									<div class="form-group">
										<label class="form-control-label">Confirm Password</label>
										<input class="form-control" type="password" v-model="cpass" >
									</div>
									<div class="form-group mb-0">
										<button class="btn btn-lg btn-block btn-primary" type="button" @click="register">Register</button>
									</div>
								</form>
								<!-- /Form -->
								
								<div class="login-or">
									<span class="or-line"></span>
									<span class="span-or">or</span>
								</div>
								<!-- Social Login -->
								<div class="social-login">
									<span>Register with</span>
									<a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a><a href="#" class="google"><i class="fab fa-google"></i></a>
								</div>
								<!-- /Social Login -->
								<div class="text-center dont-have">Already have an account? <router-link to="/login">Login</router-link></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>
		<!-- /Main Wrapper -->
		
	</div>
</template>

<script>
	export default {

		data() {
			return{
				name: '',
				email: '',
				day: '',
				month:'',
				year: '',
				gender: '',
				cpass: null,
				pass: null,
				notifPass: '',
				notifmsg: ''
			}
		},

		methods : {
			register() {	
				if (this.pass !== this.cpass)
				{
					this.notifPass = "Password mistmatch !"
			
				}
				else {
					this.$store
					.dispatch('register', {
						name: this.name,
						email: this.email,
						dob: this.year+"-"+this.month+"-"+this.day,// e.g 1996-10-8
						gender:this.gender,
						pass: this.pass,
					})
					.then(()=> {
						this.$router.push("/appointments")
					}).catch(e => {
						this.notifmsg = e.response.data
						this.$toastr.e('There was an error. Please check the form and try again!');
					})
				}
			}
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