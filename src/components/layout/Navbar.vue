<template>

  <!-- Sidebar -->
  <div
    class="sidebar"
    id="sidebar"
  >
    <div class="sidebar-inner">
      <vue-custom-scrollbar
        class="scroll-area"
        :settings="settings"
        @ps-scroll-y="scrollHanle"
      >
        <div
          id="sidebar-menu"
          class="sidebar-menu"
        >
          <ul>
            <li class="menu-title"> <span>Main</span>
            </li>

            <li  v-for="(item, index) in items" :key="index">
              <router-link :to="{name: item.link}">
                <home-icon
                  size="1.2x"
                  class="custom-class mainicon"
                >
                </home-icon> 
                <span>{{item.title}}</span>
                <span class="shape1"></span>
                <span class="shape2"></span>
              </router-link>
            </li>


            
            <li class="submenu">
              <a href="#">
                <user-icon
                  size="1.2x"
                  class="custom-class mainicon"
                ></user-icon> <span>Patients</span> <span class="shape1"></span><span class="shape2"></span><span class="menu-arrow"> </span>
              </a>
              <ul style="display: none;">
                <li>
                  <router-link to="/patients">Patients List</router-link>
                </li>
                <li>
                  <router-link to="/patients-profile">Patient Profile</router-link>
                </li>
                <li>
                  <router-link to="/patients-history">History</router-link>
                </li>
                <li>
                  <router-link to="/patients-report">Report</router-link>
                </li>
                <li>
                  <router-link to="/patients-documents">Documents</router-link>
                </li>
                <li>
                  <router-link to="/patients-transactions">Transactions</router-link>
                </li>
                <li>
                  <router-link to="/patients-issues">Issues</router-link>
                </li>
                <li>
                  <router-link to="/patients-data">External Data</router-link>
                </li>
              </ul>
            </li>

            <!-- <li><router-link to="/appointments"><list-icon size="1.2x" class="custom-class mainicon"></list-icon> <span>Appointments</span><span class="shape1"></span><span class="shape2"></span> <span class="badge bg-success-text">2</span></router-link>
							</li>
							<li><router-link to="/flow-board"><bar-chart-icon size="1.2x" class="custom-class mainicon"></bar-chart-icon> <span>Flow Board</span><span class="shape1"></span><span class="shape2"></span> </router-link>
							</li>
							<li><router-link to="/recall-board"><calendar-icon size="1.2x" class="custom-class mainicon"></calendar-icon> <span>Recall Board</span><span class="shape1"></span><span class="shape2"></span> </router-link>
							</li>
							<li><router-link to="/chat"><message-circle-icon size="1.2x" class="custom-class mainicon"></message-circle-icon> <span>Messages</span><span class="shape1"></span><span class="shape2"></span> <span class="badge bg-orange-text">4</span></router-link>
							</li>
							<li class="submenu">
								<a href="#"><disc-icon size="1.2x" class="custom-class mainicon"></disc-icon> <span> Procedures</span> <span class="shape1"></span><span class="shape2"></span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><router-link to="/electronics-report">Electronics Reports</router-link></li>
									<li><router-link to="/lab-documents">Lab Documents</router-link></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);"><book-icon size="1.2x" class="custom-class mainicon"></book-icon> <span>Reports</span> <span class="menu-arrow"></span><span class="shape1"></span><span class="shape2"></span> </a>
								<ul style="display: none;">
									<li class="submenu">
										<a href="javascript:void(0);"> <span>Clients</span> <span class="menu-arrow"></span></a>
										<ul style="display: none;">
											<li><router-link to="/client-list"><span>List</span></router-link></li>
											<li><router-link to="/client-rx"> <span>RX</span></router-link></li>
											<li><router-link to="/patient-list"> <span>Patient List Creation</span></router-link></li>
											<li><router-link to="/clinical-report"> <span>Clinical</span></router-link></li>
											<li><router-link to="/referals-report"> <span>Reference</span></router-link></li>
											<li><router-link to="/immunization-registry"> <span>Immunization Registry</span></router-link></li>
										</ul>
									</li>
									<li class="submenu">
										<a href="javascript:void(0);"> <span>Clinics</span> <span class="menu-arrow"></span></a>
										<ul style="display: none;">
											<li><router-link to="/report-results"><span>Report Results</span></router-link></li>
											<li><router-link to="/standard-measures"> <span>Standard Measures</span></router-link></li>
											<li><router-link to="/quality-measures"> <span>Quality Measures (CQM)</span></router-link></li>
											<li><router-link to="/automated-measures"> <span>Automated Measures (AMC)</span></router-link></li>
											<li><router-link to="/amc-tracking"> <span>AMC Tracking</span></router-link></li>
											<li><router-link to="/alert-log"> <span>Alerts Log</span></router-link></li>
										</ul>
									</li>
									<li class="submenu">
										<a href="javascript:void(0);"> <span>Visits</span> <span class="menu-arrow"></span></a>
										<ul style="display: none;">
											<li><router-link to="/appointments-visit"><span>Appointments</span></router-link></li>
											<li><router-link to="/flow-board-record"> <span>Patient Flow Board</span></router-link></li>
										</ul>
									</li>
									<li class="submenu">
										<a href="javascript:void(0);"> <span>Procedure</span> <span class="menu-arrow"></span></a>
										<ul style="display: none;">
											<li><router-link to="/pending-orders"><span>Pending Res</span></router-link></li>
										</ul>
									</li>
									<li class="submenu">
										<a href="javascript:void(0);"> <span>Insurance</span> <span class="menu-arrow"></span></a>
										<ul style="display: none;">
											<li><router-link to="/unique-insurance"><span>Unique SP</span></router-link></li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<router-link to="/settings"><settings-icon size="1.2x" class="custom-class mainicon"></settings-icon> <span>Settings</span><span class="shape1"></span><span class="shape2"></span> </router-link>
							</li>
							<li class="submenu">
								<a href="#"><grid-icon size="1.2x" class="custom-class"></grid-icon> <span> Application</span> <span class="menu-arrow"></span><span class="shape1"></span><span class="shape2"></span> </a>
								<ul>
									<li><router-link to="/calendar">Calendar</router-link></li>
									<li><router-link to="/inbox">Email</router-link></li>
								</ul>
							</li>
							<li class="menu-title"> 
								<span>Pages</span>
							</li>
							<li> 
								<router-link to="/profile"><user-plus-icon size="1.2x" class="custom-class mainicon"></user-plus-icon> <span>Profile</span><span class="shape1"></span><span class="shape2"></span> </router-link>
							</li>
							<li class="submenu">
								<a href="#"><lock-icon size="1.2x" class="custom-class mainicon"></lock-icon> <span> Authentication </span> <span class="menu-arrow"></span><span class="shape1"></span><span class="shape2"></span> </a>
								<ul>
									<li><router-link to="/login"> Login </router-link></li>
									<li><router-link to="/register"> Register </router-link></li>
									<li><router-link to="/forgot-password"> Forgot Password </router-link></li>
									<li><router-link to="/lock-screen"> Lock Screen </router-link></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="#"><octagon-icon size="1.2x" class="custom-class mainicon"></octagon-icon> <span> Error Pages </span> <span class="menu-arrow"></span><span class="shape1"></span><span class="shape2"></span> </a>
								<ul>
									<li><router-link to="/error-404">404 Error </router-link></li>
									<li><router-link to="/error-500">500 Error </router-link></li>
								</ul>
							</li>
							<li> 
								<router-link to="/users"><user-icon size="1.2x" class="custom-class mainicon"></user-icon> <span>Users</span><span class="shape1"></span><span class="shape2"></span> </router-link>
							</li>
							<li> 
								<router-link to="/blank-page"><file-icon size="1.2x" class="custom-class mainicon"></file-icon> <span>Blank Page</span><span class="shape1"></span><span class="shape2"></span> </router-link>
							</li>
							<li> 
								<router-link to="/maps-vector"><map-pin-icon size="1.2x" class="custom-class mainicon"></map-pin-icon> <span>Vector Maps</span><span class="shape1"></span><span class="shape2"></span> </router-link>
							</li>
							<li class="menu-title"> 
								<span>UI Interface</span>
							</li>
							<li> 
								<router-link to="/components"><layers-icon size="1.2x" class="custom-class mainicon"></layers-icon> <span>Components</span><span class="shape1"></span><span class="shape2"></span> </router-link>
							</li>
							<li class="submenu">
								<a href="#"><sidebar-icon size="1.2x" class="custom-class mainicon"></sidebar-icon> <span> Forms </span> <span class="menu-arrow"></span><span class="shape1"></span><span class="shape2"></span> </a>
								<ul>
									<li><router-link to="/form-basic-inputs">Basic Inputs </router-link></li>
									<li><router-link to="/form-input-groups">Input Groups </router-link></li>
									<li><router-link to="/form-horizontal">Horizontal Form </router-link></li>
									<li><router-link to="/form-vertical"> Vertical Form </router-link></li>
									<li><router-link to="/form-mask"> Form Mask </router-link></li>
									<li><router-link to="/form-validation"> Form Validation </router-link></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="#"> <layout-icon size="1.2x" class="custom-class mainicon"></layout-icon> <span> Tables </span> <span class="menu-arrow"></span><span class="shape1"></span><span class="shape2"></span> </a>
								<ul>
							appointments		<li><router-link to="/tables-basic">Basic Tables </router-link></li>
									<li><router-link to="/data-tables">Data Table </router-link></li>
								</ul>
							</li> -->
          </ul>
        </div>
      </vue-custom-scrollbar>
    </div>
  </div>
  <!-- /Sidebar -->

</template>
<script>
import navItems from "../../navigationItems/navItems.js";
import vueCustomScrollbar from "vue-custom-scrollbar";
import "vue-custom-scrollbar/dist/vueScrollbar.css";
import { HomeIcon } from "vue-feather-icons";
import { UserIcon } from "vue-feather-icons";
import { ListIcon } from "vue-feather-icons";
import { BarChartIcon } from "vue-feather-icons";
import { CalendarIcon } from "vue-feather-icons";
import { MessageCircleIcon } from "vue-feather-icons";
import { DiscIcon } from "vue-feather-icons";
import { BookIcon } from "vue-feather-icons";
import { SettingsIcon } from "vue-feather-icons";
import { GridIcon } from "vue-feather-icons";
import { UserPlusIcon } from "vue-feather-icons";
import { LockIcon } from "vue-feather-icons";
import { OctagonIcon } from "vue-feather-icons";
import { FileIcon } from "vue-feather-icons";
import { MapPinIcon } from "vue-feather-icons";
import { LayersIcon } from "vue-feather-icons";
import { SidebarIcon } from "vue-feather-icons";
import { LayoutIcon } from "vue-feather-icons";

export default {
  components: {
    vueCustomScrollbar,
    HomeIcon,
    UserIcon,
    ListIcon,
    BarChartIcon,
    CalendarIcon,
    MessageCircleIcon,
    DiscIcon,
    BookIcon,
    SettingsIcon,
    GridIcon,
    UserPlusIcon,
    LockIcon,
    OctagonIcon,
    UserIcon,
    FileIcon,
    MapPinIcon,
    LayersIcon,
    SidebarIcon,
    LayoutIcon,
  },
  mounted() {
  
    var $wrapper = $(".main-wrapper");
    var $pageWrapper = $(".page-wrapper");

    $("#sidebar-menu a").on("click", function (e) {
      if ($(this).parent().hasClass("submenu")) {
        e.preventDefault();
      } else {
        $wrapper.removeClass("slide-nav");
        $(".sidebar-overlay").removeClass("opened");
        $("html").removeClass("menu-opened");
      }
      if (!$(this).hasClass("subdrop")) {
        $("ul", $(this).parents("ul:first")).slideUp(350);
        $("a", $(this).parents("ul:first")).removeClass("subdrop");
        $(this).next("ul").slideDown(350);
        $(this).addClass("subdrop");
      } else if ($(this).hasClass("subdrop")) {
        $(this).removeClass("subdrop");
        $(this).next("ul").slideUp(350);
      }
    });
    $("#sidebar-menu ul li.submenu a.active")
      .parents("li:last")
      .children("a:first")
      .addClass("active")
      .trigger("click");
  },
  computed: {
    currentpage() {
      return this.$route.path;
    },
  },
  data() {
    return {
      items: navItems,
      settings: {
        suppressScrollX: true,
      },
      activeClass: "active",
    };
    //  isactive : true
  },
  methods: {
    scrollHanle(evt) {
      console.log(evt);
    },
  },
};
</script>
<style>
.scroll-area {
  position: relative;
  margin: auto;
  height: calc(100vh - 60px);
  background-color: transparent !important;
}
.sidebar-menu li a.active {
  color: #000;
  background: #f4f4f4;
  border-radius: 20px 0 0 20px;
}
.sidebar-menu ul ul a.active {
  color: #fff;
  text-decoration: underline;
  background: none !important;
}
.sidebar-menu li a.active i {
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
.sidebar-menu li a.active svg {
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
.sidebar-menu li a.active .shape1,
.sidebar-menu li a.active .shape2 {
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
.sidebar-menu li a.active:before,
.sidebar-menu li a.active:after {
  border-right: 20px solid #323584;
}
</style>