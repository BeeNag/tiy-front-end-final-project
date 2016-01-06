var React = require('react');
var EmployerLandingPageActionCreators = require('../actions/EmployerLandingPageActionCreators.js');

var EmployerNavbar = React.createClass({

	handleHomeClickEvent: function () {
		EmployerLandingPageActionCreators.changeToEmployerLandingPage();
	},

	handleViewCompanyProfileClickEvent: function () {
		EmployerLandingPageActionCreators.changeToCompanyProfile();
	},

	handleSearchClickEvent: function () {
		EmployerLandingPageActionCreators.changeToSearch();
	},

	handleSavedProfilesClickEvent: function () {
		EmployerLandingPageActionCreators.changeToSearch();
	},

	handleCreateExcavationClickEvent: function () {
		EmployerLandingPageActionCreators.changeToCreateExcavation();
	},

	handleSignOutClickEvent: function () {
		EmployerLandingPageActionCreators.changeToLandingPage();
	},

	render: function () {
		return (
			<nav className="navbar navbar-inverse">
			  			<div className="container-fluid">
						    <div className="navbar-header">
						      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#landing-page-nav" aria-expanded="false">
						        <span className="sr-only">Toggle navigation</span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						      </button>
						    </div>
						    <div className="collapse navbar-collapse" id="landing-page-nav">
						    	<ul className="nav navbar-nav">
						    		<button onClick={this.handleHomeClickEvent} type="button" className="btn btn-default navbar-btn pull-left">HOME</button>
						    		<button onClick={this.handleViewCompanyProfileClickEvent} type="button" className="btn btn-default navbar-btn">View Company Profile</button>
						    		<button onClick={this.handleSearchClickEvent} type="button" className="btn btn-default navbar-btn">Search</button>
						    		<a onClick={this.handleSavedProfilesClickEvent} className="btn btn-default navbar-btn" href="#saved-profiles" role="button">Saved Profiles</a>
						    		<button onClick={this.handleCreateExcavationClickEvent} type="button" className="btn btn-default navbar-btn">Create Excavation</button>
							        <button onClick={this.handleSignOutClickEvent} type="button" className="btn btn-default navbar-btn pull-right">Sign Out</button>
							    </ul>
							</div>
						</div>
					</nav>
		);
	}
});

module.exports = EmployerNavbar;