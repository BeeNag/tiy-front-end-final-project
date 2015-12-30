var React = require('react');
var EmployerNavbar = require('../EmployerNavbar.jsx');

var CompanyProfile = React.createClass({
	render: function () {
		return (
			<div className="container-fluid">
				<div className="row">
					<EmployerNavbar />
				</div>
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<h1>Company Profile</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-xs-offset-3">
						<h2>Company Name</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-xs-offset-3">
						<div className="container">
							<div className="row">
								<div className="col-xs-4">
									<p>Address</p>
								</div>
							</div>
							<div className="row">
								<div className="col-xs-4">
									<p>Phone</p>
								</div>
							</div>
							<div className="row">
								<div className="col-xs-4">
									<p>Email</p>
								</div>
							</div>
							<div className="row">
								<a href="#" className="btn btn-xs btn-primary"><span className="glyphicon glyphicon-pencil"></span> Edit</a>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-xs-offset-3">
						<div className="container">
							<div className="row">
								<div className="col-xs-4">
									<a className="btn btn-info" href="#" role="button">Company Home Page</a>
								</div>
							</div>
							<div className="row">
								<a href="#" className="btn btn-xs btn-primary"><span className="glyphicon glyphicon-pencil"></span> Edit</a>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="container">
						<div className="row">
							<p>Company Description</p>
						</div>
						<div className="row">
							<a href="#" className="btn btn-xs btn-primary"><span className="glyphicon glyphicon-pencil"></span> Edit</a>
						</div>
					</div>
				</div>
				<div className="row">
					<button type="button" className="btn btn-info" data-toggle="collapse" data-target="#excavation-view">View Your Excavations</button>
					<div className="collapse" id="excavation-view">
						<div className="row">
							<div className="container">
								<div className="row">
									<div className="col-xs-2">
										<p>Excavation Name</p>
									</div>
									<div className="col-xs-4 col-xs-offset-6">
										<p>Small map of location</p>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-6">
										<p>Description of Excavation</p>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-4">
										<a className="btn btn-info" href="#" role="button">Excavation Home Page</a>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="container">
								<div className="row">
									<div className="col-xs-2">
										<p>Excavation Name</p>
									</div>
									<div className="col-xs-4 col-xs-offset-6">
										<p>Small map of location</p>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-6">
										<p>Description of Excavation</p>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-4">
										<a className="btn btn-info" href="#" role="button">Excavation Home Page</a>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="container">
								<div className="row">
									<div className="col-xs-2">
										<p>Excavation Name</p>
									</div>
									<div className="col-xs-4 col-xs-offset-6">
										<p>Small map of location</p>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-6">
										<p>Description of Excavation</p>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-4">
										<a className="btn btn-info" href="#" role="button">Excavation Home Page</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<button type="button" className="btn btn-danger">Delete Profile</button>
				</div>
			</div>
		);
	}
});

module.exports = CompanyProfile;