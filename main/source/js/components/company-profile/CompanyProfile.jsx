var React = require('react');
var ReactFire = require('reactfire');
var EmployerNavbar = require('../company-navbar/EmployerNavbar.jsx');
var EditButton = require('./EditButton.jsx');
var ContactDetailsEdit = require('./ContactDetailsEdit.jsx');
var UrlEdit = require('./UrlEdit.jsx');
var DescriptionEdit = require('./DescriptionEdit.jsx');
var ExcavationDetails = require('./ExcavationDetails.jsx');
var DeleteButton = require('./DeleteButton.jsx');
var DeleteModal = require('./DeleteModal.jsx');
var CompanyProfileActionCreators = require('../../actions/CompanyProfileActionCreators.js');
var CompanyProfileDetailsStore = require('../../stores/CompanyProfileDetailsStore.js');
var SignInDetailsStore = require('../../stores/SignInDetailsStore.js');
var Authentication = require('../../services/Authentication.js');

var CompanyProfile = React.createClass({

	getInitialState: function () {
		return {
			isContactDetails: false,
			isUrl: false,
			isDescription: false
		};
	},

	updateState: function () {
		this.setState({
			profile: CompanyProfileDetailsStore.getCompanyProfileDetails()
		});
	},

	showContactDetailsEdit: function () {
		this.setState({
			isContactDetails: true
		});
	},

	showUrlEdit: function () {
		this.setState({
			isUrl: true
		});
	},

	showDescriptionEdit: function () {
		this.setState({
			isDescription: true
		});
	},

	hideContactDetailsEdit: function () {
		this.setState({
			isContactDetails: false
		});
	},

	hideUrlEdit: function () {
		this.setState({
			isUrl: false
		});
	},

	hideDescriptionEdit: function () {
		this.setState({
			isDescription: false
		});
	},

	handleUpdateContactDetails: function (address1, address2, address3, city, postcode, phone_number, token, id) {
		CompanyProfileActionCreators.updateCompanyProfileContactDetails(address1, address2, address3, city, postcode, phone_number, SignInDetailsStore.getToken(), SignInDetailsStore.getId());
	},

	handleUpdateUrl: function (url, token, id) {
		CompanyProfileActionCreators.updateCompanyProfileUrl(url, SignInDetailsStore.getToken(), SignInDetailsStore.getId());
	},

	handleUpdateDescriptionDetails: function (description, token, id) {
		CompanyProfileActionCreators.updateCompanyProfileDescriptionDetails(description, SignInDetailsStore.getToken(), SignInDetailsStore.getId());
	},

	componentDidMount: function () {
		CompanyProfileDetailsStore.addChangeListener(this.updateState);
	},

	componentWillUnmount: function () {
		CompanyProfileDetailsStore.removeChangeListener(this.updateState);
	},

	render: function () {
		return (
			<div className="container-fluid company-profile">
				<div className="row">
					<EmployerNavbar />
				</div>
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<h1>Company Profile</h1>
					</div>
				</div>
				<div className="panel panel-info">
            		<div className="panel-heading">
              			<h3 className="panel-title">{CompanyProfileDetailsStore.getCompanyProfileDetails().name}</h3>
            		</div>
            		<div className="panel-body">
              			<div className="row">
                			<div className="col-md-3 col-lg-3 " align="center"><i className="fa fa-info-circle fa-5x"></i></div>
                			<div className=" col-md-9 col-lg-9 "> 
                  				<table className="table table-user-information">
                    				<tbody>
                    					<tr>
                    						<td>About Us</td>
                    						<td>{CompanyProfileDetailsStore.getCompanyProfileDetails().description}</td>
                    						<td><EditButton label="Edit" handleButtonClick={this.showDescriptionEdit} /></td>
                    					</tr>
                        				<tr>
                        					<td>Address</td>
                        					<td>{CompanyProfileDetailsStore.getCompanyProfileDetails().address1}<br />{CompanyProfileDetailsStore.getCompanyProfileDetails().address2}<br />{CompanyProfileDetailsStore.getCompanyProfileDetails().address3}<br />{CompanyProfileDetailsStore.getCompanyProfileDetails().city}<br />{CompanyProfileDetailsStore.getCompanyProfileDetails().postcode}</td>
                        					<td><EditButton label="Edit" handleButtonClick={this.showContactDetailsEdit} /></td>
                      					</tr>
                      					<tr>
                        					<td>Email</td>
                        					<td>{CompanyProfileDetailsStore.getCompanyProfileDetails().email}</td>
                        					<td></td>
                      					</tr>
                      					<tr>
                        					<td>Phone Number</td>
                        					<td>{CompanyProfileDetailsStore.getCompanyProfileDetails().phone_number}</td>
                        					<td><EditButton label="Edit" handleButtonClick={this.showContactDetailsEdit} /></td>
                      					</tr>
                      					<tr>
                      						<td>Visit Us</td>
                      						<td><a type="submit" href={CompanyProfileDetailsStore.getCompanyProfileDetails().url} target="_blank">{CompanyProfileDetailsStore.getCompanyProfileDetails().name} Home Page</a></td>
                      						<td><EditButton label="Edit" handleButtonClick={this.showUrlEdit} /></td>
                      					</tr>
                      					<tr>
                      						<td></td>
                      						<td><DeleteButton /></td>
                      						<td></td>
                      					</tr>
                    				</tbody>
                  				</table>
                  				{ this.state.isDescription ? <DescriptionEdit handleDescriptionEditForm={this.hideDescriptionEdit} handleDescriptionEditFormSubmit={this.handleUpdateDescriptionDetails} /> : null }
                  				{ this.state.isContactDetails ? <ContactDetailsEdit handleContactDetailsEditForm={this.hideContactDetailsEdit} handleContactDetailsEditFormSubmit={this.handleUpdateContactDetails} /> : null }
                  				{ this.state.isUrl ? <UrlEdit handleUrlEditForm={this.hideUrlEdit} handleUrlEditFormSubmit={this.handleUpdateUrl} /> : null }
                			</div>
              			</div>
            		</div>
            	</div>
				<div className="row">
					<button type="button" className="btn btn-info" data-toggle="collapse" data-target="#excavation-view">View Your Excavations</button>
					<div className="collapse" id="excavation-view">
						<ExcavationDetails />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = CompanyProfile;