var React = require('react');
var ArchNavbar = require('../ArchNavbar.jsx');
var EditButton = require('./EditButton.jsx');
var PhotoEdit = require('./PhotoEdit.jsx');
var ContactDetailsEdit = require('./ContactDetailsEdit.jsx');
var ExperienceAndSpecialismEdit = require('./ExperienceAndSpecialismEdit.jsx');
var DescriptionEdit = require('./DescriptionEdit.jsx');
var ArchaeologistProfileActionCreators = require('../../actions/ArchaeologistProfileActionCreators.js');

var ArchaeologistProfile = React.createClass({

	getInitialState: function () {
		return {
			isPhoto: false,
			isContactDetails: false,
			isExperienceAndSpecialism: false,
			isDescription: false
		};
	},

	showPhotoEdit: function () {
		this.setState({
			isPhoto: true
		});
	},

	showContactDetailsEdit: function () {
		this.setState({
			isContactDetails: true
		});
	},

	showExperienceAndSpecialismEdit: function () {
		this.setState({
			isExperienceAndSpecialism: true
		});
	},

	showDescriptionEdit: function () {
		this.setState({
			isDescription: true
		});
	},

	hidePhotoEdit: function () {
		this.setState({
			isPhoto: false
		});
	},

	hideContactDetailsEdit: function () {
		this.setState({
			isContactDetails: false
		});
	},

	hideExperienceAndSpecialismEdit: function () {
		this.setState({
			isExperienceAndSpecialism: false
		});
	},

	hideDescriptionEdit: function () {
		this.setState({
			isDescription:false
		});
	},

	handleDeleteArchaeologistProfileClickEvent: function () {
		event.preventDefault();

		ArchaeologistProfileActionCreators.changeToLandingPage();
	},

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
						<EditButton label="Edit" handleButtonClick={this.showPhotoEdit} />
						{ this.state.isPhoto ? <PhotoEdit handlePhotoEditForm={this.hidePhotoEdit} /> : null }
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
								<EditButton label="Edit" handleButtonClick={this.showContactDetailsEdit} />
								{ this.state.isContactDetails ? <ContactDetailsEdit handleContactDetailsEditForm={this.hideContactDetailsEdit} /> : null }
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
								<EditButton label="Edit" handleButtonClick={this.showExperienceAndSpecialismEdit} />
								{ this.state.isExperienceAndSpecialism ? <ExperienceAndSpecialismEdit handleExperienceAndSpecialismEditForm={this.hideExperienceAndSpecialismEdit} /> : null }
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="container">
						<p>Description</p>
						<EditButton label="Edit" handleButtonClick={this.showDescriptionEdit} />
						{ this.state.isDescription ? <DescriptionEdit handleDescriptionEditForm={this.hideDescriptionEdit} /> : null }
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
					<button onClick={this.handleDeleteArchaeologistProfileClickEvent} type="button" className="btn btn-danger">Delete Profile</button>
				</div>
			</div>
		);
	}
});

module.exports = ArchaeologistProfile;