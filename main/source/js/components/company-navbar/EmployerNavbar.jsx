var React = require('react');
var Button = require('./Button.jsx');
var Link = require('./Link.jsx');
var EmployerLandingPageActionCreators = require('../../actions/EmployerLandingPageActionCreators.js');

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
						    		<Button type="button" className="btn btn-default navbar-btn pull-left" handleButtonClick={this.handleHomeClickEvent} label="HOME" />
						    		<Button type="button" className="btn btn-default navbar-btn" handleButtonClick={this.handleViewCompanyProfileClickEvent} label="View Company Profile" />
						    		<Button type="button" className="btn btn-default navbar-btn" handleButtonClick={this.handleSearchClickEvent} label="Search" />
						    		<Link role="button" href="#saved-profiles" className="btn btn-default navbar-btn" handleButtonClick={this.handleSavedProfilesClickEvent} label="Saved Profiles" />
						    		<Button type="button" className="btn btn-default navbar-btn" handleButtonClick={this.handleCreateExcavationClickEvent} label="Create Excavation" />
							        <Button type="button" className="btn btn-default navbar-btn pull-right" handleButtonClick={this.handleSignOutClickEvent} label="Sign Out" />
							    </ul>
							</div>
						</div>
					</nav>
		);
	}
});

module.exports = EmployerNavbar;