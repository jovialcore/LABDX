<template>

<!-- Header -->
			<div class="header">
				<!-- Logo -->
				<div class="header-left">
					<router-link to="/index" class="logo">
						<img src="@/assets/img/logo.png" alt="Logo">
					</router-link>
					<router-link to="/index" class="logo logo-small">
						<img src="@/assets/img/logo-small.png" alt="Logo" width="30" height="30">
					</router-link>
				</div>
				<!-- /Logo -->
				<a href="javascript:void(0);" id="toggle_btn">	<i class="fas fa-bars"></i>
				</a>
				<div class="top-nav-search">
					<form>
						<input type="text" class="form-control" placeholder="Search here">
						<button class="btn" type="submit"><i class="fa fa-search"></i>
						</button>
					</form>
				</div>
				<!-- Mobile Menu Toggle -->
				<a class="mobile_btn" id="mobile_btn">	<i class="fas fa-bars"></i>
				</a>
				<!-- /Mobile Menu Toggle -->
				<!-- Header Right Menu -->
				<ul class="nav user-menu">
					<!-- Flag -->
					<li class="nav-item dropdown has-arrow flag-nav mr-2">
						<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button">
							<img src="@/assets/img/flags/us-1.png" alt="" width="32" height="32" class="rounded-circle"> 
						</a>
						<div class="dropdown-menu dropdown-menu-right">
							<a href="javascript:void(0);" class="dropdown-item">
								<img src="@/assets/img/flags/us.png" alt="" height="16"> English
							</a>
							<a href="javascript:void(0);" class="dropdown-item">
								<img src="@/assets/img/flags/fr.png" alt="" height="16"> French
							</a>
							<a href="javascript:void(0);" class="dropdown-item">
								<img src="@/assets/img/flags/es.png" alt="" height="16"> Spanish
							</a>
							<a href="javascript:void(0);" class="dropdown-item">
								<img src="@/assets/img/flags/de.png" alt="" height="16"> German
							</a>
						</div>
					</li>
					<!-- /Flag --> 
					<!-- Notifications -->
					<li class="nav-item dropdown">
						<a href="#" class="nav-link notifications-item">
							<bell-icon size="1.4x" class="custom-class"></bell-icon> <span class="badge badge-pill">3</span>
						</a>
					</li>
					<!-- /Notifications -->
					<!-- Chat -->
					<li class="nav-item dropdown">
						<router-link to="/chat" class="dropdown-toggle nav-link chat-header">
							<message-square-icon size="1.1x" class="custom-class"></message-square-icon> <span class="badge badge-pill header-chat">6</span>
						</router-link>
					</li>
					<!-- /Chat -->
					<li class="nav-item dropdown has-arrow main-drop ml-md-3">
						<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
							<span class="user-img"><img src="@/assets/img/avatar.jpg" alt="">
							<span class="status online"></span></span>
						</a>
						<div class="dropdown-menu">
							<router-link class="dropdown-item" to="/profile"><user-icon size="1.2x" class="custom-class"></user-icon> My Profile</router-link> 
							<router-link class="dropdown-item" to="/login"><power-icon size="1.2x" class="custom-class"></power-icon> Logout</router-link>
						</div>
					</li>
				</ul>
				<!-- /Header Right Menu -->
			</div>
			<!-- /Header -->

</template>
<script>
import { BellIcon } from 'vue-feather-icons'
import { MessageSquareIcon } from 'vue-feather-icons'
import { UserIcon } from 'vue-feather-icons'
import { PowerIcon } from 'vue-feather-icons'
    export default {
    	components: {
   BellIcon,
   MessageSquareIcon,
   UserIcon,
   PowerIcon
 },
        mounted() {
       // Variables declarations
    var $wrapper = $('.main-wrapper');
    var $pageWrapper = $('.page-wrapper');
    var $sidebarOverlay = $('.sidebar-overlay');
    // Small Sidebar
	if(screen.width >= 992) {
		$(document).on('click', '#toggle_btn', function() {
			if($('body').hasClass('mini-sidebar')) {
				$('body').removeClass('mini-sidebar');
				$('.subdrop + ul').slideDown();
			} else {
				$('body').addClass('mini-sidebar');
				$('.subdrop + ul').slideUp();
			}
			return false;
		});
		$(document).on('mouseover', function(e) {
			e.stopPropagation();
			if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
				var targ = $(e.target).closest('.sidebar').length;
				if(targ) {
					$('body').addClass('expand-menu');
					$('.subdrop + ul').slideDown();
				} else {
					$('body').removeClass('expand-menu');
					$('.subdrop + ul').slideUp();
				}
				return false;
			}
		});
	}
    // Sidebar overlay
	function sidebar_overlay($target) {
		if($target.length) {
			$target.toggleClass('opened');
			$sidebarOverlay.toggleClass('opened');
			$('html').toggleClass('menu-opened');
			$('.notifications').removeClass('notifications-open');
			$sidebarOverlay.attr('data-reff', '#' + $target[0].id);
		}
	}
	// Mobile menu sidebar overlay
	$(document).on('click', '#mobile_btn', function() {
		var $target = $($(this).attr('href'));
		sidebar_overlay($target);
		$wrapper.toggleClass('slide-nav');
		$('#chat_sidebar').removeClass('opened');
		$('.notifications').removeClass('notifications-open');
		return false;
	});
    // Mobile Menu
	$(document).on('click', '#open_msg_box', function() {
		$wrapper.toggleClass('open-msg-box');
		return false;
	});
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
    // Page wrapper height
	var pHeight = $(window).height();
	$pageWrapper.css('min-height', pHeight);
	$(window).resize(function() {
		var prHeight = $(window).height();
		$pageWrapper.css('min-height', prHeight);
	});
    },
       computed: {
           currentPath() {
               return this.$route.name
           }
       }
    }
    </script>