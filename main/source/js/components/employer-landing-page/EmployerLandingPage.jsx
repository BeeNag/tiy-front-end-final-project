var React = require('react');
var EmployerNavbar = require('../company-navbar/EmployerNavbar.jsx');
var EmployerLandingPageActionCreators = require('../../actions/EmployerLandingPageActionCreators.js');
var SignInDetailsStore = require('../../stores/SignInDetailsStore.js');
var CreateExcavationActionCreators = require('../../actions/CreateExcavationActionCreators.js');

var EmployerLandingPage = React.createClass({

	handleCompanyProfileClickEvent: function () {
		CreateExcavationActionCreators.getCompanyExcavationDetails();
	},

	handleCreateExcavationClickEvent: function () {
		EmployerLandingPageActionCreators.changeToCreateExcavation();
	},

	handleSearchClickEvent: function () {
		EmployerLandingPageActionCreators.changeToSearch();
	},

	render: function () {
		return (
			<div className="container-fluid company-landing-page-background">
				<div className="row">
					<EmployerNavbar />
				</div>
				<div className="row">
					<div className="jumbotron">
						<h1>Welcome to the Homepage for Employers <br></br><small>Here are the available options</small></h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 clp-button">
						<button onClick={this.handleCompanyProfileClickEvent} type="button" className="btn btn-success btn-lg">View Company Profile</button>
					</div>
					<div className="col-xs-4 clp-button">
						<button onClick={this.handleSearchClickEvent} type="button" className="btn btn-info btn-lg">Search for a Profile</button>
					</div>
					<div className="col-xs-4 clp-button">
						<button onClick={this.handleCreateExcavationClickEvent} type="button" className="btn btn-success btn-lg">Create an Excavation</button>
					</div>
				</div>
				<hr className="page-break" />
				<div className="row">
					<h3 className="text-center">More content coming soon</h3>
				</div>
				<hr className="page-break" />
			</div>
		);
	}
});

module.exports = EmployerLandingPage;