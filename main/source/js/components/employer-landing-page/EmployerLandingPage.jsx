var React = require('react');
var EmployerNavbar = require('../EmployerNavbar.jsx');
var EmployerLandingPageActionCreators = require('../../actions/EmployerLandingPageActionCreators.js');
var SignInDetailsStore = require('../../stores/SignInDetailsStore.js');

var EmployerLandingPage = React.createClass({

	handleCompanyProfileClickEvent: function () {
		EmployerLandingPageActionCreators.getCompanyProfile(SignInDetailsStore.getToken(), SignInDetailsStore.getId());
		EmployerLandingPageActionCreators.changeToCompanyProfile();
	},

	handleCreateExcavationClickEvent: function () {
		EmployerLandingPageActionCreators.changeToCreateExcavation();
	},

	handleSearchClickEvent: function () {
		EmployerLandingPageActionCreators.changeToSearch();
	},

	handleSavedProfilesClickEvent: function () {
		EmployerLandingPageActionCreators.changeToSearch();
	},

	render: function () {
		return (
			<div className="container-fluid">
				<div className="row">
					<EmployerNavbar />
				</div>
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<h1>Welcome to the Homepage for Employers <br></br><small>Here are the available options</small></h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-xs-offset-2">
						<button onClick={this.handleCompanyProfileClickEvent} type="button" className="btn btn-success">View Company Profile</button>
					</div>
					<div className="col-xs-4 col-xs-offset-2">
						<button onClick={this.handleCreateExcavationClickEvent} type="button" className="btn btn-success">Create an Excavation</button>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-xs-offset-2">
						<button onClick={this.handleSearchClickEvent} type="button" className="btn btn-info">Search for a Profile</button>
					</div>
					<div className="col-xs-4 col-xs-offset-2">
						<a onClick={this.handleSavedProfilesClickEvent} className="btn btn-info" href="#saved-profiles" role="button">Saved Profiles</a>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = EmployerLandingPage;