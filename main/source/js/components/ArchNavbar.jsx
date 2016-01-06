var React = require('react');
var ArchLandingPageActionCreators = require('../actions/ArchLandingPageActionCreators.js');

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
						    		<button onClick={this.handleHomeClickEvent} type="button" className="btn btn-default navbar-btn pull-left">HOME</button>
						    		<button onClick={this.handleViewProfileClickEvent} type="button" className="btn btn-default navbar-btn">View Your Profile</button>
						    		<a onClick={this.handleViewArchaeologistsClickEvent} className="btn btn-default navbar-btn" href="#view-archaeologists" role="button">Archaeologists Near You</a>
						    		<a onClick={this.handleViewExcavationsClickEvent} className="btn btn-default navbar-btn" href="#view-excavations" role="button">Excavations Near You</a>
							        <button onClick={this.handleSignOutClickEvent} type="button" className="btn btn-default navbar-btn pull-right">Sign Out</button>
							    </ul>
							</div>
						</div>
					</nav>
		);
	}
});

module.exports = ArchNavbar;