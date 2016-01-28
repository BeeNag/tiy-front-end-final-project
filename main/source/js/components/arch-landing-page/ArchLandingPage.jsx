var React = require('react');
var ArchNavbar = require('../arch-navbar/ArchNavbar.jsx');
var ImageUploadForm = require('./ImageUploadForm.jsx');
var ArchLandingPageActionCreators = require('../../actions/ArchLandingPageActionCreators.js');
var CreateExcavationActionCreators = require('../../actions/CreateExcavationActionCreators.js');
var TokenActionCreators =require('../../actions/TokenActionCreators.js');
var SignInDetailsStore = require('../../stores/SignInDetailsStore.js');

var ArchLandingPage = React.createClass({

	getInitialState: function () {
		return {
			isImageUpload: false
		};
	},

	handleImageUploadButtonClickEvent: function () {
		this.setState({
			isImageUpload: true
		});
	},

	handleArchaeologistProfileClickEvent: function () {
		CreateExcavationActionCreators.getArchaeologyExcavationDetails();
	},

	render: function () {
		return (
			<div className="container-fluid arch-landing-page-background">
				<div className="row">
					<ArchNavbar />
				</div>
				<div className="row">
					<div className="jumbotron">
						<h1>Welcome to the Homepage for Archaeologists <br></br><small className="jumbotron-small">Here are the available options</small></h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-6 alp-button">
						<button onClick={this.handleArchaeologistProfileClickEvent} type="button" className="btn btn-success btn-lg">View Your Profile</button>
					</div>
					<div className="col-xs-6 alp-button">
						<button onClick={this.handleImageUploadButtonClickEvent} type="button" className="btn btn-primary btn-lg">Upload An Image For Your Profile</button>
					</div>
				</div>
				<div className="row">
					{ this.state.isImageUpload ? <ImageUploadForm /> : null }
				</div>
				<hr className="page-break" />
				<div className="row mc-background">
					<h3 className="text-center coming-soon">More content coming soon</h3>
				</div>
				<hr className="page-break" />
			</div>
		);
	}
});

module.exports = ArchLandingPage;