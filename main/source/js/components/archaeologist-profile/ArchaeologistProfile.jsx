var React = require('react');
var ArchNavbar = require('../ArchNavbar.jsx');

var ArchaeologistProfile = React.createClass({
	render: function () {
		return (
			<div className="container-fluid">
				<div className="row">
					<ArchNavbar />
				</div>
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<h1>Your Profile</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-1">
						<p>Name</p>
					</div>
					<div className="col-xs-1">
						<p>Date of Birth</p>
					</div>
					<div className="col-xs-3">
						<img src="http://www.valuestockphoto.com/downloads/43521-2/power_button.jpg" alt="power switched off"></img>
						<a href="#" className="btn btn-xs btn-primary"><span className="glyphicon glyphicon-pencil"></span> Edit</a>
					</div>
				</div>
				<div className="row">
					<div className="container">
						<div className="row">
							<div className="col-xs-2">
								<p>Address</p>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-2">
								<p>Phone Number</p>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-2">
								<p>Email</p>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-1">
								<a href="#" className="btn btn-xs btn-primary"><span className="glyphicon glyphicon-pencil"></span> Edit</a>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-xs-2">
								<p>Specialism</p>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-2">
								<p>Experience</p>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-1">
								<a href="#" className="btn btn-xs btn-primary"><span className="glyphicon glyphicon-pencil"></span> Edit</a>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="container">
						<p>Description</p>
						<a href="#" className="btn btn-xs btn-primary"><span className="glyphicon glyphicon-pencil"></span> Edit</a>
					</div>
				</div>
				<div className="row">
					<button type="button" className="btn btn-info" data-toggle="collapse" data-target="#arch-map-view">View Archaeologists in Your Area</button>
					<div className="collapse" id="arch-map-view">
						<div className="col-xs-7">
							<p>Map of Archaeologists</p>
						</div>
						<div className="col-xs-4 col-xs-offset-1">
							<h3>List of Archaeologists</h3>
							<ul>
								<li>Blah</li>
								<li>Blah Blah</li>
								<li>Blah Blah Blah</li>
								<li>Etc</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row">
					<button type="button" className="btn btn-info" data-toggle="collapse" data-target="#excavation-map-view">View Excavations Near You</button>
					<div className="collapse" id="excavation-map-view">
						<div className="col-xs-7">
							<p>Map of Excavations</p>
						</div>
						<div className="col-xs-4 col-xs-offset-1">
							<h3>List of Excavations</h3>
							<ul>
								<li>This One</li>
								<li>That One</li>
								<li>The Other One</li>
								<li>Etc</li>
							</ul>
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

module.exports = ArchaeologistProfile;