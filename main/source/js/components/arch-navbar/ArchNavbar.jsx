var React = require('react');
var Button = require('./Button.jsx');
var Link = require('./Link.jsx');
var ArchLandingPageActionCreators = require('../../actions/ArchLandingPageActionCreators.js');

var ArchNavbar = React.createClass({

	handleHomeClickEvent: function () {
		ArchLandingPageActionCreators.changeToArchLandingPage();
	},

	handleViewProfileClickEvent: function () {
		ArchLandingPageActionCreators.changeToArchaeologistProfile();
	},

	handleViewArchaeologistsClickEvent: function () {
		ArchLandingPageActionCreators.changeToArchaeologistProfile();
	},

	handleViewExcavationsClickEvent: function () {
		ArchLandingPageActionCreators.changeToArchaeologistProfile();
	},

	handleSignOutClickEvent: function () {
		ArchLandingPageActionCreators.changeToLandingPage();
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
						    		<Button type="button" className="btn btn-default navbar-btn" handleButtonClick={this.handleViewProfileClickEvent} label="View Your Profile" />
						    		<Link role="button" href="#view-archaeologists" className="btn btn-default navbar-btn" handleButtonClick={this.handleViewArchaeologistsClickEvent} label="Archaeologists Near You" />
						    		<Link role="button" href="#view-excavations" className="btn btn-default navbar-btn" handleButtonClick={this.handleViewExcavationsClickEvent} label="Excavations Near You" />
							        <Button type="button" className="btn btn-default navbar-btn pull-right" handleButtonClick={this.handleSignOutClickEvent} label="Sign Out" />
							    </ul>
							</div>
						</div>
					</nav>
		);
	}
});

module.exports = ArchNavbar;