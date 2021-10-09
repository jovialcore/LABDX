<template>
	<div>
		<div class="main-wrapper">
			<layout-header></layout-header>
			<layout-navbarvisit></layout-navbarvisit>
			
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
										<li class="breadcrumb-item"><router-link to="/index">Doctor Dashboard</router-link></li>
										<li class="breadcrumb-item active">Patients Profile</li>
									</ul>
								</div>
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
						<div class="col-12 col-xl-4 d-flex flex-wrap">
							<div class="card">
								<div class="card-body">
									<div class="general-details text-center">
										<img src="@/assets/img/profiles/avatar-18.jpg" class="img-fluid" alt="">
										<h4>Frances Runnels</h4>
										<h6>franc@example.com</h6>
										<router-link to="/chat" class="btn-chat">Send Message</router-link>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12 col-xl-8 d-flex flex-wrap">
							<div class="card">
								<div class="card-body pb-0">
									<div class="patient-details d-block">
										<div class="details-list">
											<div>
												<h6>External Id </h6>
												<span class="ml-auto">PAT0215</span>
											</div>
											<div>
												<h6>Date of Birth </h6>
												<span class="ml-auto">25/5/1995</span>
											</div>
											<div>
												<h6>Marital Status</h6>
												<span class="ml-auto">Married</span>
											</div>
											<div>
												<h6>Sex</h6>
												<span class="ml-auto">Male</span>
											</div>
											<div>
												<h6>Address </h6>
												<span class="ml-auto">123 High St.</span>
											</div>
											<div>
												<h6>State </h6>
												<span class="ml-auto">Wisconsin</span>
											</div>
											<div>
												<h6>Pin Code </h6>
												<span class="ml-auto">64004</span>
											</div>
											<div>
												<h6>Country </h6>
												<span class="ml-auto">USA</span>
											</div>
											<div>
												<h6>Phone </h6>
												<span class="ml-auto">920-345-8746</span>
											</div> 
											<div>
												<h6>Relation </h6>
												<span class="ml-auto">Father</span>
											</div>
											<div>
												<h6>Contact </h6>
												<span class="ml-auto">92-668-2318</span>
											</div>
											<div>
												<h6>Email </h6>
												<span class="ml-auto">fran@example.com</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-4">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Clinical Reminders</h4>
								</div>
								<div class="card-body">
									<ul class="clinical-rem">
										<li><b>Measurment</b> of <b>Blood Pressure</b> need to be taken</li>
										<li><b>Bloog Sugar</b> must have <b>Average</b>  value</li>
										<li><b>Measurment</b> of <b>Blood Sugar</b> need to be taken</li>
									</ul>
								</div>
							</div>
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Medical Problems</h4>
								</div>
								<div class="card-body">
									<ul class="p-0 med-prb">
										<li><i class="fas fa-file-medical-alt"></i> POAG</li>
										<li><i class="fas fa-file-medical-alt"></i> NS Cataract</li>
										<li><i class="fas fa-file-medical-alt"></i> SCC</li>
										<li><i class="fas fa-file-medical-alt"></i> Dermatochalasis</li>
									</ul>
								</div>
							</div>
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Allergies</h4>
								</div>
								<div class="card-body">
									<ul class="p-0 med-prb">
										<li><i class="fas fa-file-medical-alt"></i> Sulfa</li>
										<li><i class="fas fa-file-medical-alt"></i> Codeine</li>
										<li><i class="fas fa-file-medical-alt"></i> Iodine</li>
										<li><i class="fas fa-file-medical-alt"></i> Penicillin</li>
									</ul>
								</div>
							</div>
							<div class="card">
								<div class="card-header">
									<h4 class="card-title float-left">Medications</h4>
								</div>
								<div class="card-body">
									<div class="d-flex mb-4">
										<div class="medicne d-flex">
											<i class="fas fa-pills"></i>
											Desmopressin tabs
										</div>
									</div>
									<div class="d-flex mb-4">
										<div class="medicne d-flex">
											<i class="fas fa-syringe"></i>
											Abciximab-injection	
										</div>
									</div>
									<div class="d-flex mb-4">
										<div class="medicne d-flex">
											<i class="fas fa-pills"></i>
											Kevzara sarilumab	
										</div>
									</div>
									<div class="d-flex mb-4">
										<div class="medicne d-flex">
											<i class="fas fa-pills"></i>
											Paliperidone palmitate
										</div>
									</div>
									<div class="d-flex mb-4">
										<div class="medicne d-flex">
											<i class="fas fa-syringe"></i>
											Sermorelin-injectable
										</div>
									</div>
									<div class="d-flex mb-4">
										<div class="medicne d-flex">
											<i class="fas fa-syringe"></i>
											Abciximab-injection	
										</div>
									</div>
									<div class="d-flex">
										<div class="medicne d-flex">
											<i class="fas fa-pills"></i>
											Kevzara sarilumab	
										</div>
									</div>
								</div>
							</div>
							<div class="card flex-fill">
								<div class="card-header">
									<h4 class="card-title">Patient Reminder</h4>
								</div>
								<div class="card-body">
									<ul class="activity-feed">
										<li class="feed-item">
											<div class="feed-date">Apr 13</div>
											<span class="feed-text">You have Dr sultads visit</span>
										</li>
										<li class="feed-item">
											<div class="feed-date">Mar 21</div>
											<span class="feed-text">You have Dr Joun visit</span>
										</li>
										<li class="feed-item">
											<div class="feed-date">Feb 2</div>
											<span class="feed-text">Need to do Blood Test!</span>
										</li>
										<li class="feed-item">
											<div class="feed-date">Jan 27</div>
											<span class="feed-text">You have Dr Wall Smith visit</span>
										</li>
										<li class="feed-item">
											<div class="feed-date">Jan 14</div>
											<span class="feed-text">General Checkup Time!</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-lg-8">
							<div class="row">
								<div class="col-xl-4 col-lg-6 d-flex flex-wrap">
									<div class="card details-box">
										<div class="card-body">
											<div class="mb-3 pt-icon1 pt-icon">
												<img src="@/assets/img/icons/stethoscope.svg" alt="" width="26" class="m-auto">
											</div>
											<h5>BP</h5>
											<span class="mt-0">120/80 mmHg (Average)</span>
											<div class="progress progress-md mt-2">
												<div class="progress-bar bg-success" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xl-4 col-lg-6 d-flex flex-wrap">
									<div class="card details-box">
										<div class="card-body">
											<div class="mb-3 pt-icon2 pt-icon">
												<img src="@/assets/img/icons/pulse.svg" alt="" width="26" class="m-auto">
											</div>
											<h5>Pulse</h5>
											<span class="mt-0">73/min (Low)</span>
											<div class="progress progress-md mt-2">
												<div class="progress-bar bg-warning" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xl-4 col-lg-6 d-flex flex-wrap">
									<div class="card details-box">
										<div class="card-body">
											<div class="mb-3 pt-icon3 pt-icon">
												<img src="@/assets/img/icons/egg-and-bacon.svg" alt="" width="26" class="m-auto">
											</div>
											<h5>Cholesterol</h5>
											<span class="mt-0">230 mg/dL (High)</span>
											<div class="progress progress-md mt-2">
												<div class="progress-bar bg-danger" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xl-4 col-lg-6 d-flex flex-wrap">
									<div class="card details-box">
										<div class="card-body">
											<div class="mb-3 pt-icon4 pt-icon">
												<img src="@/assets/img/icons/thermometer.svg" alt="" width="26" class="m-auto">
											</div>
											<h5>Temperature</h5>
											<span class="mt-0">103.25 F (High)</span>
											<div class="progress progress-md mt-2">
												<div class="progress-bar bg-danger" role="progressbar" style="width: 95%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xl-4 col-lg-6 d-flex flex-wrap">
									<div class="card details-box">
										<div class="card-body">
											<div class="mb-3 pt-icon5 pt-icon">
												<img src="@/assets/img/icons/breath-in.svg" alt="" width="26" class="m-auto">
											</div>
											<h5>Respiration</h5>
											<span class="mt-0">20/min (Average)</span>
											<div class="progress progress-md mt-2">
												<div class="progress-bar bg-success" role="progressbar" style="width: 50%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xl-4 col-lg-6 d-flex flex-wrap">
									<div class="card details-box">
										<div class="card-body">
											<div class="mb-3 pt-icon6 pt-icon">
												<img src="@/assets/img/icons/bathroom-scale.svg" alt="" width="26" class="m-auto">
											</div>
											<h5>BMI</h5>
											<span class="mt-0">32 kg/m^2  (Low)</span>
											<div class="progress progress-md mt-2">
												<div class="progress-bar bg-warning" role="progressbar" style="width: 70%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xl-12">
									<div class="card">
										<div class="card-header">
											<h4 class="card-title">Heartbeat Ratio</h4>
										</div>
										<div class="card-body">
											<div id="dsh_chart_ex_column"></div>
										</div>
									</div>
								</div>
								<div class="col-lg-12">
									<div class="card">
										<div class="card-header pb-0">
											<ul class="nav nav-tabs nav-tabs-bottom">
												<li class="nav-item"><a class="nav-link active" href="#solid-tab3" data-toggle="tab">Choices</a></li>
												<li class="nav-item"><a class="nav-link" href="#solid-tab4" data-toggle="tab">Employer</a></li>
												<li class="nav-item"><a class="nav-link" href="#solid-tab5" data-toggle="tab">Stats</a></li>
												<li class="nav-item"><a class="nav-link" href="#solid-tab7" data-toggle="tab">Guardian</a></li>
											</ul>
										</div>
										<div class="card-body">
											<div class="tab-content pt-0">
												<div class="tab-pane show active" id="solid-tab3">
													<div class="tab-data">
														<div class="tab-left">
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Desmopressin
																</div>
																<div class="medicne-time ml-auto">
																	<p>Billy Smith</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	HIPAA Notice Received
																</div>
																<div class="medicne-time ml-auto">
																	<p class="text-success">Yes</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Leave Message With
																</div>
																<div class="medicne-time ml-auto">
																	<p>Phil</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Allow SMS
																</div>
																<div class="medicne-time ml-auto">
																	<p class="text-danger">No</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Allow Health Information Exchange
																</div>
																<div class="medicne-time ml-auto">
																	<p class="text-danger">No</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Allow Health Information Exchange
																</div>
																<div class="medicne-time ml-auto">
																	<p class="text-success">Yes</p>
																</div>
															</div>
														</div>
														<div class="tab-right">
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Allow Voice Message
																</div>
																<div class="medicne-time ml-auto">
																	<p class="text-danger">No</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Allow Mail Message
																</div>
																<div class="medicne-time ml-auto">
																	<p class="text-success">Yes</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Allow Email
																</div>
																<div class="medicne-time ml-auto">
																	<p class="text-success">Yes</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Allow Patient Portal
																</div>
																<div class="medicne-time ml-auto">
																	<p class="text-danger">No</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Publicity Code Effective Date
																</div>
																<div class="medicne-time ml-auto">
																	<p>25/11/2019</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Publicity Code
																</div>
																<div class="medicne-time ml-auto">
																	<p>ADS54SS5</p>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="tab-pane" id="solid-tab4">
													<div class="tab-data">
														<div class="tab-left">
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Occupation
																</div>
																<div class="medicne-time ml-auto">
																	<p>Pen User</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Employer Address																 
																</div>
																<div class="medicne-time ml-auto">
																	<p>Watchahee Road</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	State																 
																</div>
																<div class="medicne-time ml-auto">
																	<p>Florida</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Country																 
																</div>
																<div class="medicne-time ml-auto">
																	<p>USA</p>
																</div>
															</div>
														</div>
														<div class="tab-right">
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Employer Name
																</div>
																<div class="medicne-time ml-auto">
																	<p>	Using Pens Inc.</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	City
																</div>
																<div class="medicne-time ml-auto">
																	<p>Longview</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Postal Code
																</div>
																<div class="medicne-time ml-auto">
																	<p>444333</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Industry
																</div>
																<div class="medicne-time ml-auto">
																	<p></p>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="tab-pane" id="solid-tab5">
													<div class="tab-data">
														<div class="tab-left">
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Desmopressin
																</div>
																<div class="medicne-time ml-auto">
																	<p>Billy</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	HIPAA
																</div>
																<div class="medicne-time ml-auto">
																	<p class="text-success">Yes</p>
																</div>
															</div>
														</div>
														<div class="tab-right">
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Allow
																</div>
																<div class="medicne-time ml-auto">
																	<p class="text-danger">No</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Allow
																</div>
																<div class="medicne-time ml-auto">
																	<p class="text-success">Yes</p>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="tab-pane" id="solid-tab7">
													<div class="tab-data">
														<div class="tab-left">
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Name
																</div>
																<div class="medicne-time ml-auto">
																	<p>	Kirsten Deleon</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Sex
																</div>
																<div class="medicne-time ml-auto">
																	<p>Female</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	City
																</div>
																<div class="medicne-time ml-auto">
																	<p>Orland Park</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Postal Code
																</div>
																<div class="medicne-time ml-auto">
																	<p>60462</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Phone
																</div>
																<div class="medicne-time ml-auto">
																	<p>708-873-0628</p>
																</div>
															</div>
														</div>
														<div class="tab-right">
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Relationship
																</div>
																<div class="medicne-time ml-auto">
																	<p>Father</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Address
																</div>
																<div class="medicne-time ml-auto">
																	<p>3071  John Calvin Drive</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	State
																</div>
																<div class="medicne-time ml-auto">
																	<p>IL</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Country
																</div>
																<div class="medicne-time ml-auto">
																	<p>England</p>
																</div>
															</div>
															<div class="d-flex mb-3">
																<div class="medicne d-flex"> 
																	Email
																</div>
																<div class="medicne-time ml-auto">
																	<p>scvv@mail.net</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-12">
									<div class="card flex-fill">
										<div class="card-header no-border">
											<h4 class="card-title">Upcoming Appointments</h4>
										</div>
										<div class="card-body">
											<div class="table-responsive">
												<table class="table mb-0">
													<thead>
														<tr>
															<th>ID</th>
															<th>Doctor Name</th>
															<th>Department</th>
															<th>Date</th>
															<th>Time</th>
															<th>Disease</th>
															<th>Status</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>APT0001</td>
															<td>Dr.Jay Soni</td>
															<td>Cardiology</td>
															<td>11 Dec 2019</td>
															<td>10:00am-12:00am</td>
															<td>Cold</td>
															<td class="text-success">Approved</td>
														</tr>
														<tr>
															<td>APT0002</td>
															<td>Dr.Sarah Smith</td>
															<td>Gynaecology</td>
															<td>5 Dec 2019</td>
															<td>10:00am-12:00am</td>
															<td>Fever</td>
															<td class="text-danger">Canceled</td>
														</tr>
														<tr>
															<td>APT0003</td>
															<td>Dr.John Deo</td>
															<td>Neurology</td>
															<td>6 Jan 2020</td>
															<td>10:00am-12:00am</td>
															<td>heart</td>
															<td class="text-success">Approved</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-12">
									<div class="card flex-fill">
										<div class="card-header no-border">
											<h4 class="card-title">Disclosures</h4>
										</div>
										<div class="card-body">
											<div class="table-responsive">
												<table class="table mb-0">
													<thead>
														<tr>
															<th>Type</th>
															<th>Provider</th>
															<th class="text-right">Summary</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>Payment</td>
															<td>Donna Lee</td>
															<td class="text-right"><a href="#">View Summary</a></td>
														</tr>
														<tr>
															<td>Treatment</td>
															<td>Gavin</td>
															<td class="text-right"><a href="#">View Summary</a></td>
														</tr>
														<tr>
															<td>HealthCare</td>
															<td>Gavin</td>
															<td class="text-right"><a href="#">View Summary</a></td>
														</tr>
														<tr>
															<td>Payment</td>
															<td>Donna Lee</td>
															<td class="text-right"><a href="#">View Summary</a></td>
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
 series: [{ 
          name: 'HeartRate',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'PulseRate',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
          chart: {
          height: 250,
          type: 'area',
		  zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
		axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false, 
                },
        tooltip: {
          x: {
            show: false
          },
        },
        };
  var columnChart = new ApexCharts(columnCtx, columnConfig);
  columnChart.render();


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