var React = require('react');
var ArchNavbar = require('../ArchNavbar.jsx');
var ArchLandingPageActionCreators = require('../../actions/ArchLandingPageActionCreators.js');
var TokenActionCreators = require('../../actions/TokenActionCreators.js');
var SignInDetailsStore = require('../../stores/SignInDetailsStore.js');
var ArchProfileDetailsStore = require('../../stores/ArchProfileDetailsStore.js');
var Authentication = require('../../services/Authentication.js');

var ArchLandingPage = React.createClass({

	handleArchaeologistProfileClickEvent: function () {
		SignInDetailsStore.getToken();
		console.log(SignInDetailsStore.getToken());
		ArchLandingPageActionCreators.getArchProfile();
		ArchProfileDetailsStore.getAtchaeologistProfileDetails();
		ArchLandingPageActionCreators.changeToArchaeologistProfile();
	},

	handleViewArchaeologistsClickEvent: function () {
		SignInDetailsStore.getToken();
		TokenActionCreators.isUserSignedIn();
		ArchLandingPageActionCreators.changeToArchaeologistProfile();
	},

	handleViewExcavationsClickEvent: function () {
		SignInDetailsStore.getToken();
		TokenActionCreators.isUserSignedIn();
		ArchLandingPageActionCreators.changeToArchaeologistProfile();
	},

	render: function () {
		return (
			<div className="container-fluid">
				<div className="row">
					<ArchNavbar />
				</div>
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<h1>Welcome to the Homepage for Archaeologists <br></br><small>Here are the available options</small></h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-xs-offset-4">
						<button onClick={this.handleArchaeologistProfileClickEvent} type="button" className="btn btn-success">View Your Profile</button>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-xs-offset-2">
						<a onClick={this.handleViewArchaeologistsClickEvent} className="btn btn-info" href="#view-archaeologists" role="button">Archaeologists Near You</a>
					</div>
					<div className="col-xs-4 col-xs-offset-2">
						<a onClick={this.handleViewExcavationsClickEvent} className="btn btn-info" href="#view-excavations" role="button">Excavations Near You</a>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = ArchLandingPage;