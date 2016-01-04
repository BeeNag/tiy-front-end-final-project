var React = require('react');
var EmployerNavbar = require('../EmployerNavbar.jsx');

var EmployerLandingPage = React.createClass({
	render: function () {
		return (
			<div className="container-fluid">
				<div className="row">
					<EmployerNavbar />
				</div>
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<h1>Welcome to the Homepage for Employers <small>Here are the available options</small></h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-xs-offset-4">
						<button type="button" className="btn btn-success">Create an Excavation Profile</button>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-xs-offset-2">
						<button type="button" className="btn btn-info">Search for a Profile</button>
					</div>
					<div className="col-xs-4 col-xs-offset-2">
						<button type="button" className="btn btn-info">View Your List of Saved Profiles</button>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = EmployerLandingPage;