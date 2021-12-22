<template>


<!-- Sidebar -->
			<div class="sidebar" id="sidebar">
				<div class="sidebar-inner">
				<vue-custom-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
					<div id="sidebar-menu" class="sidebar-menu">
						<ul>
							<li class="menu-title">	<span>Main</span>
							</li>

							<li><router-link to="/index"><home-icon size="1.2x" class="custom-class mainicon"></home-icon> <span>Back to Home</span><span class="shape1"></span><span class="shape2"></span> </router-link>
							</li>
							<li class="submenu">
								<a href="#"><user-icon size="1.2x" class="custom-class mainicon"></user-icon> <span> Patients</span><span class="shape1"></span><span class="shape2"></span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
								    <li><router-link to="/patients">Patients List</router-link></li>
									<li><router-link to="/patients-profile">Patient Profile</router-link></li>
									<li><router-link to="/patients-history">History</router-link></li>
									<li><router-link to="/patients-report">Report</router-link></li>
									<li><router-link to="/patients-documents">Documents</router-link></li>
									<li><router-link to="/patients-transactions">Transactions</router-link></li>
									<li><router-link to="/patients-issues">Issues</router-link></li>
									<li><router-link to="/patients-data">External Data</router-link></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="#"><eye-icon size="1.2x" class="custom-class mainicon"></eye-icon> <span> Visits</span><span class="shape1"></span><span class="shape2"></span>  <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><router-link to="/create-visit">Create Visit</router-link></li>
									<li><router-link to="/visit-history">Visit History</router-link></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="#"><crosshair-icon size="1.2x" class="custom-class"></crosshair-icon> <span> Procedures</span><span class="shape1"></span><span class="shape2"></span>  <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><router-link to="/pending-review">Pending Review</router-link></li>
									<li><router-link to="/patients-results">Patient Results</router-link></li>
								</ul>
							</li>
						</ul>
					</div>
					</vue-custom-scrollbar>
				</div>
			</div>
			<!-- /Sidebar -->


</template>
<script>
	import vueCustomScrollbar from 'vue-custom-scrollbar'
	import "vue-custom-scrollbar/dist/vueScrollbar.css"
	import { HomeIcon } from 'vue-feather-icons'
	import { UserIcon } from 'vue-feather-icons'
	import { EyeIcon } from 'vue-feather-icons'
	import { CrosshairIcon } from 'vue-feather-icons'
   export default {
	   components: {
   vueCustomScrollbar,
   HomeIcon,
   UserIcon,
    EyeIcon,
    CrosshairIcon
 },
 mounted() {
 	var $wrapper = $('.main-wrapper');
	var $pageWrapper = $('.page-wrapper');
	 $('#sidebar-menu a').on('click', function (e) {
	   if ($(this).parent().hasClass('submenu')) {
		 e.preventDefault();
	   }
	   else {
          $wrapper.removeClass('slide-nav');
		$(".sidebar-overlay").removeClass("opened");
		$('html').removeClass('menu-opened');
           }
	   if (!$(this).hasClass('subdrop')) {
		 $('ul', $(this).parents('ul:first')).slideUp(350);
		 $('a', $(this).parents('ul:first')).removeClass('subdrop');
		 $(this).next('ul').slideDown(350);
		 $(this).addClass('subdrop');
	   } else if ($(this).hasClass('subdrop')) {
		 $(this).removeClass('subdrop');
		 $(this).next('ul').slideUp(350);
	   }
	 });
	 $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');

   },
   computed: {
	   currentpage() {
		 return this.$route.path;
	   },
	 },
 data() {
	 return {
	   settings: {
suppressScrollX: true,
},
	   activeClass: 'active',
	 };
			 //  isactive : true
   },
   methods: {
   scrollHanle(evt) {
	 console.log(evt)
   }
 },
}
</script>
<style>
	  .scroll-area {
      position: relative;
      margin: auto;
      height: calc(100vh - 60px);
      background-color: transparent !important;
  }
  .sidebar-menu  li a.active {
    color: #000;
    background: #f4f4f4;
    border-radius: 20px 0 0 20px;
}
.sidebar-menu ul ul a.active {
    color: #fff;
    text-decoration: underline;
    background: none !important;
}
.sidebar-menu  li a.active i {
    font-size: 16px;
    line-height: 13px;
    text-align: center;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    background: #323584;
    padding: 7px 3px;
    border-radius: 50px;
    box-shadow: none;
    border: 0;
    color: #fff;
}
.sidebar-menu  li a.active svg {
    font-size: 16px;
    line-height: 13px;
    text-align: center;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    background: #323584;
    padding: 7px 3px;
    border-radius: 50px;
    box-shadow: none;
    border: 0;
    color: #fff;
}
.sidebar-menu li a.active .shape1 {
    position: absolute;
    top: -30px;
    width: 20px;
    height: 60px;
    right: 0px;
}
.sidebar-menu li a.active .shape2 {
    position: absolute;
    top: 35px;
    width: 20px;
    height: 30px;
    right: 0px;
}
.sidebar-menu li a.active .shape1, .sidebar-menu li a.active .shape2 {
    background: #f4f4f4;
}
.sidebar-menu li a.active:before {
    content: "";
    position: absolute;
    top: -31px;
    right: 0px;
    bottom: 0;
    height: 31px;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom: transparent;
    border-radius: 0px 0px 48px 0px;
    z-index: 1;
}
.sidebar-menu li a.active:after {
    content: "";
    position: absolute;
    top: 48px;
    z-index: 0;
    right: 0px;
    bottom: 0;
    height: 30px;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom: transparent;
    border-radius: 0px 48px 0px 0px;
}
.sidebar-menu li a.active:before, .sidebar-menu li a.active:after {
    border-right: 20px solid #323584;
}

</style>