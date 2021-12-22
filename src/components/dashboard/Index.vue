<template>
	<div>
		<div class="main-wrapper">
			<layout-header></layout-header>
			<layout-navbar></layout-navbar>
			
			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
					<div class="row">
						<div class="col-12 col-md-6 col-lg-3 d-flex flex-wrap">
							<div class="card detail-box1 details-box">
								<div class="card-body">
									<div class="dash-contetnt">
										<div class="mb-3">
											<img src="@/assets/img/icons/accident.svg" alt="" width="26">
										</div>
										<h4 class="text-white">Total Patients</h4>
										<h2 class="text-white">245</h2>
										<div class="growth-indicator">
											<span class="text-white"><i class="fas fa-angle-double-up mr-1"></i> (14.25%)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-6 col-lg-3 d-flex flex-wrap">
							<div class="card detail-box2 details-box">
								<div class="card-body">
									<div class="dash-contetnt">
										<div class="mb-3">
											<img src="@/assets/img/icons/visits.svg" alt="" width="26">
										</div>
										<h4 class="text-white">Patients Visit</h4>
										<h2 class="text-white">137</h2>
										<div class="growth-indicator">
											<span class="text-white"><i class="fas fa-angle-double-down mr-1"></i> (4.78%)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-6 col-lg-3 d-flex flex-wrap">
							<div class="card detail-box3 details-box">
								<div class="card-body">
									<div class="dash-contetnt">
										<div class="mb-3">
											<img src="@/assets/img/icons/hospital-bed.svg" alt="" width="26">
										</div>
										<h4 class="text-white">New Admit</h4>
										<h2 class="text-white">24</h2>
										<div class="growth-indicator">
											<span class="text-white"><i class="fas fa-angle-double-up mr-1"></i> (18.32%)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-6 col-lg-3 d-flex flex-wrap">
							<div class="card detail-box4 details-box">
								<div class="card-body">
									<div class="dash-contetnt">
										<div class="mb-3">
											<img src="@/assets/img/icons/operating.svg" alt="" width="26">
										</div>
										<h4 class="text-white">Operations</h4>
										<h2 class="text-white">05</h2>
										<div class="growth-indicator">
											<span class="text-white"><i class="fas fa-angle-double-down mr-1"></i> (25.14%)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row calender-col">
						<div class="col-xl-4">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Schedule</h4>
								</div>
								<div class="card-body">
									<div id="calendar-doctor" class="calendar-container"></div>
								</div>
							</div>
						</div>
						<div class="col-xl-8 d-flex">
							<div class="card flex-fill">
								<div class="card-header">
									<div class="d-flex justify-content-between align-items-center">
										<h5 class="card-title">Patients Profile</h5>
										<div class="dropdown" data-toggle="dropdown">
											<a href="javascript:void(0);" class="btn btn-white btn-sm dropdown-toggle" role="button" data-toggle="dropdown">
											This Week
											</a>
											<div class="dropdown-menu dropdown-menu-right">
												<a href="javascript:void(0);" class="dropdown-item">Today</a>
												<a href="javascript:void(0);" class="dropdown-item">This Week</a>
												<a href="javascript:void(0);" class="dropdown-item">This Month</a>
											</div>
										</div>
									</div>
								</div>
								<div class="card-body">
									<div class="d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap">
										<div class="w-100 d-md-flex align-items-center mb-3 chart-count">
											<div class="mr-3 text-center">
												<span>Total Appointments</span>
												<p class="h4 text-primary">584</p>
											</div>
											<div class="mr-3 text-center">
												<span>Old Patients</span>
												<p class="h4 text-success">320</p>
											</div>
											<div class="mr-3 text-center">
												<span>New Patients</span>
												<p class="h4 text-warning">264</p>
											</div>
										</div>
									</div>
									<div id="dsh_chart_ex_column"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="row calender-col">
						<div class="col-xl-8">
							<div class="card">
								<div class="card-header no-border">
									<h4 class="card-title">Medicine Requests</h4>
								</div>
								<div class="card-body">
									<div class="table-responsive">
										<table class="table mb-0">
											<thead>
												<tr>
													<th>Medicine</th>
													<th>Count</th>
													<th>Priority</th>
													<th>Time</th>
													<th>Status</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Desmopressin tabs`</td>
													<td>200 strips</td>
													<td><span class="badge bg-warning-light">Urgent</span></td>
													<td>10 mins ago</td>
													<td class="text-warning">Pending Approval</td>
												</tr>
												<tr>
													<td>Abciximab-injection</td>
													<td>50 nos</td>
													<td><span class="badge bg-info-light">Next Week</span></td>
													<td>5 days ago</td>
													<td class="text-success">On Time</td>
												</tr>
												<tr>
													<td>Paliperidone palmitate</td>
													<td>75 Strips</td>
													<td><span class="badge bg-info-light">Next Week</span></td>
													<td>1 Day Ago</td>
													<td class="text-danger">Delay</td>
												</tr>
												<tr>
													<td>Sermorelin-injectable</td>
													<td>22 nos</td>
													<td><span class="badge bg-warning-light">Urgent</span></td>
													<td>8 mins ago</td>
													<td class="text-warning">Pending Approval</td>
												</tr>
												<tr>
													<td>Abciximab-injection</td>
													<td>10 nos</td>
													<td><span class="badge bg-info-light">Next Week</span></td>
													<td>2 days ago</td>
													<td class="text-danger">Delay</td>
												</tr>
												<tr>
													<td>Kevzara sarilumab</td>
													<td>35 Strips</td>
													<td><span class="badge bg-warning-light">Urgent</span></td>
													<td>5 mins ago</td>
													<td class="text-warning">Pending Approval</td>
												</tr>
												<tr>
													<td>Desmopressin</td>
													<td>155 Strips</td>
													<td><span class="badge bg-info-light">Next Week</span></td>
													<td>1 days ago</td>
													<td class="text-success">On Time</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-4">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Reviews Score</h4>
								</div>
								<div class="card-body">
									<div id="dsh_chart_ex_pie"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header no-border">
							<h4 class="card-title float-left">Upcoming Appointments</h4>
							<span class="float-right"><router-link to="/appointments">View all</router-link></span>
						</div>
						<div class="card-body">
							<div class="table-responsive">
								<table class="table mb-0">
									<thead>
										<tr>
											<th>ID</th>
											<th>Patient Name</th>
											<th>Age</th>
											<th>Date</th>
											<th>Time</th>
											<th>Disease</th>
											<th>Status</th>
											<th class="text-right">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>APT0001</td>
											<td><router-link to="/patients-profile"><img width="28" height="28" src="@/assets/img/profiles/avatar-03.jpg" class="rounded-circle m-r-5" alt=""> Maurice Guz</router-link></td>
											<td>39</td>
											<td>11 Dec 2020</td>
											<td>10:00am-12:00am</td>
											<td>Cold</td>
											<td class="text-success">Approved</td>
											<td class="text-right">
												<a href="#" class="btn btn-sm btn-white text-success mr-2"><i class="far fa-edit mr-1"></i> Edit</a> 
												<a href="javascript:void(0);" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1"></i>Delete</a>
											</td>
										</tr>
										<tr>
											<td>APT0002</td>
											<td><router-link to="/patients-profile"><img width="28" height="28" src="@/assets/img/profiles/avatar-07.jpg" class="rounded-circle m-r-5" alt=""> Brandon  Stone</router-link></td>
											<td>29</td>
											<td>5 Dec 2020</td>
											<td>10:00am-12:00am</td>
											<td>Fever</td>
											<td class="text-danger">Canceled</td>
											<td class="text-right">
												<a href="#" class="btn btn-sm btn-white text-success mr-2"><i class="far fa-edit mr-1"></i> Edit</a> 
												<a href="javascript:void(0);" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1"></i>Delete</a>
											</td>
										</tr>
										<tr>
											<td>APT0003</td>
											<td><router-link to="/patients-profile"><img width="28" height="28" src="@/assets/img/profiles/avatar-06.jpg" class="rounded-circle m-r-5" alt=""> Terry Baker</router-link></td>
											<td>42</td>
											<td>6 Jan 2020</td>
											<td>10:00am-12:00am</td>
											<td>heart</td>
											<td class="text-success">Approved</td>
											<td class="text-right">
												<a href="#" class="btn btn-sm btn-white text-success mr-2"><i class="far fa-edit mr-1"></i> Edit</a> 
												<a href="javascript:void(0);" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1"></i>Delete</a>
											</td>
										</tr>
										<tr>
											<td>APT0004</td>
											<td><router-link to="/patients-profile"><img width="28" height="28" src="@/assets/img/profiles/avatar-04.jpg" class="rounded-circle m-r-5" alt=""> Kyle Woodbury</router-link></td>
											<td>23</td>
											<td>19 Dec 2020</td>
											<td>10:00am-12:00am</td>
											<td>Diabeties</td>
											<td class="text-success">Approved</td>
											<td class="text-right">
												<a href="#" class="btn btn-sm btn-white text-success mr-2"><i class="far fa-edit mr-1"></i> Edit</a> 
												<a href="javascript:void(0);" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1"></i>Delete</a>
											</td>
										</tr>
										<tr>
											<td>APT0005</td>
											<td><router-link to="/patients-profile"><img width="28" height="28" src="@/assets/img/profiles/avatar-05.jpg" class="rounded-circle m-r-5" alt=""> Marie Gallardo</router-link></td>
											<td>55</td>
											<td>15 Dec 2020</td>
											<td>10:00am-12:00am</td>
											<td>Cold</td>
											<td class="text-success">Approved</td>
											<td class="text-right">
												<a href="#" class="btn btn-sm btn-white text-success mr-2"><i class="far fa-edit mr-1"></i> Edit</a> 
												<a href="javascript:void(0);" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1"></i>Delete</a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-xl-4 d-flex flex-wrap">
							<div class="card">
								<div class="card-header no-border">
									<h4 class="card-title float-left">Recent Visits</h4>
								</div>
								<div class="card-body">
									<div class="table-responsive">
										<table class="table mb-0">
											<thead>
												<tr>
													<th>Patients</th>
													<th class="text-right pt-0">Reports</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><router-link to="/patients-profile"><img width="28" height="28" src="@/assets/img/profiles/avatar-03.jpg" class="rounded-circle m-r-5" alt=""> Maurice Guz</router-link></td>
													<td class="text-right">
														<router-link to="/patients-profile" class="btn btn-sm btn-white text-success"><i class="far fa-eye mr-1"></i> View</router-link> 
													</td>
												</tr>
												<tr>
													<td><router-link to="/patients-profile"><img width="28" height="28" src="@/assets/img/profiles/avatar-05.jpg" class="rounded-circle m-r-5" alt=""> Marie Gallardo</router-link></td>
													<td class="text-right">
														<router-link to="/patients-profile" class="btn btn-sm btn-white text-success"><i class="far fa-eye mr-1"></i> View</router-link> 
													</td>
												</tr>
												<tr>
													<td><router-link to="/patients-profile"><img width="28" height="28" src="@/assets/img/profiles/avatar-04.jpg" class="rounded-circle m-r-5" alt=""> Kyle Woodbury</router-link></td>
													<td class="text-right">
														<router-link to="/patients-profile" class="btn btn-sm btn-white text-success"><i class="far fa-eye mr-1"></i> View</router-link> 
													</td>
												</tr>
												<tr>
													<td><router-link to="/patients-profile"><img width="28" height="28" src="@/assets/img/profiles/avatar-06.jpg" class="rounded-circle m-r-5" alt=""> Terry Baker</router-link></td>
													<td class="text-right">
														<router-link to="/patients-profile" class="btn btn-sm btn-white text-success"><i class="far fa-eye mr-1"></i> View</router-link> 
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-4 d-flex flex-wrap">
							<div class="card">
								<div class="card-header no-border">
									<h4 class="card-title float-left">Patients Group</h4>
								</div>
								<div class="card-body">
									<div class="table-responsive">
										<table class="table mb-0">
											<thead>
												<tr>
													<th>Issues</th>
													<th class="text-right pt-0">Count</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Cholesterol</td>
													<td class="text-right text-fade">5 Patients</td>
												</tr>
												<tr>
													<td>Diabetic</td>
													<td class="text-right text-fade">14 Patients</td>
												</tr>
												<tr>
													<td>Blood Pressure</td>
													<td class="text-right text-fade">10 Patients</td>
												</tr>
												<tr>
													<td>Hypertension</td>
													<td class="text-right text-fade">21 Patients</td>
												</tr> 
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-4 d-flex flex-wrap">
							<div class="card">
								<div class="card-header no-border">
									<h4 class="card-title float-left">Doctors</h4>
									<span class="float-right"><router-link to="/appointments">View all</router-link></span>
								</div>
								<div class="card-body">
									<div class="table-responsive">
										<table class="table mb-0">
											<thead>
												<tr>
													<th>Doctor</th>
													<th class="text-right pt-0">Availabilty</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><img src="@/assets/img/profiles/avatar-14.jpg" class="rounded-circle m-r-5 profile-img" alt="">Dr.Jay Soni</td>
													<td class="text-success text-right">Available</td>
												</tr>
												<tr>
													<td><img src="@/assets/img/profiles/avatar-17.jpg" class="rounded-circle m-r-5 profile-img" alt="">Dr.Sarah Smith</td>
													<td class="text-danger text-right">Absent</td>
												</tr>
												<tr>
													<td><img src="@/assets/img/profiles/avatar-18.jpg" class="rounded-circle m-r-5 profile-img" alt="">	Dr.John Deo</td>
													<td class="text-success text-right">Available</td>
												</tr>
												<tr>
													<td><img src="@/assets/img/profiles/avatar-13.jpg" class="rounded-circle m-r-5 profile-img" alt="">Dr.Kirsten Deleon</td>
													<td class="text-success text-right">Available</td>
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
import { XCircleIcon } from 'vue-feather-icons'
	export default {
		components: {
    XCircleIcon
  },
		mounted() {

			$(document).ready(function () {


  /*
  // this function will generate output in this format
  // data = [ [timestamp, 23], ... ]
  */
  function generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }


  // Column chart
  var columnCtx = document.getElementById("dsh_chart_ex_column"),
  columnConfig = { 
  colors: ['#bc7ff7', '#4a4da0', '#fdaa88'],
  series: [{
          name: 'Old Patients',
          data: [44, 55, 57, 56, 61, 58, 63]
        }, {
          name: 'Total Visits',
          data: [76, 85, 101, 98, 87, 105, 91]
        }, {
          name: 'New Patients',
          data: [35, 41, 36, 26, 45, 48, 52]
        }],
          chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yaxis: {
          title: {
            text: '(patients)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return   + val + " peoples"
            }
          }
        }
        };
  var columnChart = new ApexCharts(columnCtx, columnConfig);
  columnChart.render();
   
   
  
    //Pie Chart
		var pieCtx = document.getElementById("dsh_chart_ex_pie"),
			pieConfig = {
			colors: ['#323584'],
			 series: [86],
			  chart: {
			  height: 390,
			  type: 'radialBar',
			  offsetY: -10
			},
			  plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: '16px',
                color: undefined,
                offsetY: 120
              },
              value: {
                offsetY: 76,
                fontSize: '22px',
                color: undefined,
                formatter: function (val) {
                  return val + "%";
                }
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: { 
              shade: 'dark',
              shadeIntensity: 0.15,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91]
          },
        },
        stroke: {
          dashArray: 4
        },
        labels: ['Reviews Avg'],
        };
		var pieChart = new ApexCharts(pieCtx, pieConfig);
		pieChart.render();



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