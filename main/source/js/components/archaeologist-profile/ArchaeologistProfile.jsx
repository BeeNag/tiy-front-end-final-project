var React = require('react');
var ArchNavbar = require('../ArchNavbar.jsx');
var EditButton = require('./EditButton.jsx');
var PhotoEdit = require('./PhotoEdit.jsx');
var ContactDetailsEdit = require('./ContactDetailsEdit.jsx');
var ExperienceAndSpecialismEdit = require('./ExperienceAndSpecialismEdit.jsx');
var DescriptionEdit = require('./DescriptionEdit.jsx');
var DeleteButton = require('./DeleteButton.jsx');
var DeleteModal = require('./DeleteModal.jsx');
var ArchaeologistProfileActionCreators = require('../../actions/ArchaeologistProfileActionCreators.js');
var ArchProfileDetailsStore = require('../../stores/ArchProfileDetailsStore.js');
var SignInDetailsStore = require('../../stores/SignInDetailsStore.js');
var Authentication = require('../../services/Authentication.js');

var ArchaeologistProfile = React.createClass({

	getInitialState: function () {
		return {
			isPhoto: false,
			isContactDetails: false,
			isExperienceAndSpecialism: false,
			isDescription: false
		};
	},

	updateState: function () {
		this.setState({
			profile: ArchProfileDetailsStore.getArchaeologistProfileDetails()
		});
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

	handleUpdateContactDetails: function (address1, address2, address3, city, postcode, home_phone_number, mobile_phone_number, token, id) {
		ArchaeologistProfileActionCreators.updateArchProfileContactDetails(address1, address2, address3, city, postcode, home_phone_number, mobile_phone_number, SignInDetailsStore.getToken(), SignInDetailsStore.getId());
	},

	handleUpdateSpecialismAndExperienceDetails: function (experience, specialism, token, id) {
		ArchaeologistProfileActionCreators.updateArchProfileSpecialismAndExperienceDetails(experience, specialism, SignInDetailsStore.getToken(), SignInDetailsStore.getId());
	},

	handleUpdateDescriptionDetails: function (description, token, id) {
		ArchaeologistProfileActionCreators.updateArchProfileDescriptionDetails(description, SignInDetailsStore.getToken(), SignInDetailsStore.getId());
	},

	componentDidMount: function () {
		ArchProfileDetailsStore.addChangeListener(this.updateState);
	},

	componentWillUnmount: function () {
		ArchProfileDetailsStore.removeChangeListener(this.updateState);
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
						<p>{ArchProfileDetailsStore.getArchaeologistProfileDetails().first_name + ' ' + ArchProfileDetailsStore.getArchaeologistProfileDetails().last_name}</p>
					</div>
					<div className="col-xs-1">
						<p>{ArchProfileDetailsStore.getArchaeologistProfileDetails().date_of_birth}</p>
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
								<p>{ArchProfileDetailsStore.getArchaeologistProfileDetails().address1}<br />{ArchProfileDetailsStore.getArchaeologistProfileDetails().address2}<br />{ArchProfileDetailsStore.getArchaeologistProfileDetails().address3}<br />{ArchProfileDetailsStore.getArchaeologistProfileDetails().city}<br />{ArchProfileDetailsStore.getArchaeologistProfileDetails().postcode}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-2">
								<p>{ArchProfileDetailsStore.getArchaeologistProfileDetails().home_phone_number}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-2">
								<p>{ArchProfileDetailsStore.getArchaeologistProfileDetails().mobile_phone_number}</p>
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
								{ this.state.isContactDetails ? <ContactDetailsEdit handleContactDetailsEditForm={this.hideContactDetailsEdit} handleContactDetailsEditFormSubmit={this.handleUpdateContactDetails} /> : null }
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-xs-2">
								<p>{ArchProfileDetailsStore.getArchaeologistProfileDetails().specialism}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-2">
								<p>{ArchProfileDetailsStore.getArchaeologistProfileDetails().experience}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-1">
								<EditButton label="Edit" handleButtonClick={this.showExperienceAndSpecialismEdit} />
								{ this.state.isExperienceAndSpecialism ? <ExperienceAndSpecialismEdit handleExperienceAndSpecialismEditForm={this.hideExperienceAndSpecialismEdit} handleExperienceAndSpecialismEditFormSubmit={this.handleUpdateSpecialismAndExperienceDetails} /> : null }
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="container">
						<p>{ArchProfileDetailsStore.getArchaeologistProfileDetails().description}</p>
						<EditButton label="Edit" handleButtonClick={this.showDescriptionEdit} />
						{ this.state.isDescription ? <DescriptionEdit handleDescriptionEditForm={this.hideDescriptionEdit} handleDescriptionEditFormSubmit={this.handleUpdateDescriptionDetails} /> : null }
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4">
						<h3 id="view-archaeologists">Archaeologists in Your Area</h3>
					</div>
				</div>
				<div className="row">
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
				<div className="row">
					<div className="col-xs-4">
						<h3 id="view-excavations">View Excavations Near You</h3>
					</div>
				</div>
				<div className="row">
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
				<div className="row">
					<DeleteButton />
					<DeleteModal />
				</div>
			</div>
		);
	}
});

module.exports = ArchaeologistProfile;