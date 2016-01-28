var React = require('react');
var ArchNavbar = require('../arch-navbar/ArchNavbar.jsx');
var EmployerNavbar = require('../company-navbar/EmployerNavbar.jsx');
var EditButton = require('./EditButton.jsx');
var PhotoEdit = require('./PhotoEdit.jsx');
var ContactDetailsEdit = require('./ContactDetailsEdit.jsx');
var ExperienceAndSpecialismEdit = require('./ExperienceAndSpecialismEdit.jsx');
var DescriptionEdit = require('./DescriptionEdit.jsx');
var ExcavationList = require('./ExcavationList.jsx');
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
			<div className="container-fluid archaeologist-profile">
				<div className="row">
					{ ArchProfileDetailsStore.getArchaeologistSignedInStatus() ? <ArchNavbar /> : <EmployerNavbar /> }
				</div>
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<h1>Your Profile</h1>
					</div>
				</div>
				<div className="panel panel-info">
            		<div className="panel-heading">
              			<h3 className="panel-title">{ArchProfileDetailsStore.getArchaeologistProfileDetails().first_name + ' ' + ArchProfileDetailsStore.getArchaeologistProfileDetails().last_name}</h3>
            		</div>
            		<div className="panel-body">
              			<div className="row">
                			<div className="col-md-3 col-lg-3 " align="center"><img src={'http://localhost:8383/uploads/' + ArchProfileDetailsStore.getArchaeologistProfileDetails().image} alt="Profile Picture" className="img-circle"></img></div>
                			<div className=" col-md-9 col-lg-9 "> 
                  				<table className="table table-user-information">
                    				<tbody>
                    					<tr>
                    						<td>About Me</td>
                    						<td>{ArchProfileDetailsStore.getArchaeologistProfileDetails().description}</td>
                    						<td>{ ArchProfileDetailsStore.getArchaeologistSignedInStatus() ? <EditButton label="Edit" handleButtonClick={this.showDescriptionEdit} /> : null }</td>
                    					</tr>
                      					<tr>
                        					<td>Specialism</td>
                        					<td>{ArchProfileDetailsStore.getArchaeologistProfileDetails().specialism}</td>
                        					<td>{ ArchProfileDetailsStore.getArchaeologistSignedInStatus() ? <EditButton label="Edit" handleButtonClick={this.showExperienceAndSpecialismEdit} /> : null }</td>
                      					</tr>
                      					<tr>
                        					<td>Experience</td>
                        					<td>{ArchProfileDetailsStore.getArchaeologistProfileDetails().experience}</td>
                        					<td>{ ArchProfileDetailsStore.getArchaeologistSignedInStatus() ? <EditButton label="Edit" handleButtonClick={this.showExperienceAndSpecialismEdit} /> : null }</td>
                      					</tr>
                      					<tr>
                        					<td>Date of Birth</td>
                        					<td>{ArchProfileDetailsStore.getArchaeologistProfileDetails().date_of_birth}</td>
                        					<td></td>
                      					</tr>
                        				<tr>
                        					<td>Home Address</td>
                        					<td>{ArchProfileDetailsStore.getArchaeologistProfileDetails().address1}<br />{ArchProfileDetailsStore.getArchaeologistProfileDetails().address2}<br />{ArchProfileDetailsStore.getArchaeologistProfileDetails().address3}<br />{ArchProfileDetailsStore.getArchaeologistProfileDetails().city}<br />{ArchProfileDetailsStore.getArchaeologistProfileDetails().postcode}</td>
                        					<td>{ ArchProfileDetailsStore.getArchaeologistSignedInStatus() ? <EditButton label="Edit" handleButtonClick={this.showContactDetailsEdit} /> : null }</td>
                      					</tr>
                      					<tr>
                        					<td>Email</td>
                        					<td>{ArchProfileDetailsStore.getArchaeologistProfileDetails().email}</td>
                        					<td></td>
                      					</tr>
                      					<tr>
                        					<td>Phone Number</td>
                        					<td>{ArchProfileDetailsStore.getArchaeologistProfileDetails().home_phone_number}(Landline)<br /><br />{ArchProfileDetailsStore.getArchaeologistProfileDetails().mobile_phone_number}(Mobile)</td>
                        					<td>{ ArchProfileDetailsStore.getArchaeologistSignedInStatus() ? <EditButton label="Edit" handleButtonClick={this.showContactDetailsEdit} /> : null }</td>
                      					</tr>
                      					<tr>
                      						<td></td>
                      						<td>{ ArchProfileDetailsStore.getArchaeologistSignedInStatus() ? <DeleteButton /> : null }</td>
                      						<td></td>
                      					</tr>
                    				</tbody>
                  				</table>
                  				{ this.state.isContactDetails ? <ContactDetailsEdit handleContactDetailsEditForm={this.hideContactDetailsEdit} handleContactDetailsEditFormSubmit={this.handleUpdateContactDetails} /> : null }
                  				{ this.state.isExperienceAndSpecialism ? <ExperienceAndSpecialismEdit handleExperienceAndSpecialismEditForm={this.hideExperienceAndSpecialismEdit} handleExperienceAndSpecialismEditFormSubmit={this.handleUpdateSpecialismAndExperienceDetails} /> : null }
                  				{ this.state.isDescription ? <DescriptionEdit handleDescriptionEditForm={this.hideDescriptionEdit} handleDescriptionEditFormSubmit={this.handleUpdateDescriptionDetails} /> : null }
                			</div>
              			</div>
            		</div>
            	</div>
				{ ArchProfileDetailsStore.getArchaeologistSignedInStatus() ? <div className="row">
					<div className="col-xs-4">
						<h3 id="view-excavations">View Excavations</h3>
					</div>
				</div> : null }
				{ ArchProfileDetailsStore.getArchaeologistSignedInStatus() ? <div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<h3>List of Excavations</h3>
						<ExcavationList />
					</div>
				</div> : null }
			</div>
		);
	}
});

module.exports = ArchaeologistProfile;