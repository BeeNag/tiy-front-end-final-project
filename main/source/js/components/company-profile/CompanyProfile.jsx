var React = require('react');
var EmployerNavbar = require('../EmployerNavbar.jsx');
var EditButton = require('./EditButton.jsx');
var ContactDetailsEdit = require('./ContactDetailsEdit.jsx');
var UrlEdit = require('./UrlEdit.jsx');
var DescriptionEdit = require('./DescriptionEdit.jsx');
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
			<div className="container-fluid">
				<div className="row">
					<EmployerNavbar />
				</div>
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<h1>Company Profile</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-xs-offset-3">
						<h2>{CompanyProfileDetailsStore.getCompanyProfileDetails().name}</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-xs-offset-3">
						<div className="container">
							<div className="row">
								<div className="col-xs-4">
									<p>{CompanyProfileDetailsStore.getCompanyProfileDetails().address1}<br />{CompanyProfileDetailsStore.getCompanyProfileDetails().address2}<br />{CompanyProfileDetailsStore.getCompanyProfileDetails().address3}<br />{CompanyProfileDetailsStore.getCompanyProfileDetails().city}<br />{CompanyProfileDetailsStore.getCompanyProfileDetails().postcode}</p>
								</div>
							</div>
							<div className="row">
								<div className="col-xs-4">
									<p>{CompanyProfileDetailsStore.getCompanyProfileDetails().phone_number}</p>
								</div>
							</div>
							<div className="row">
								<div className="col-xs-4">
									<p>Email</p>
								</div>
							</div>
							<div className="row">
								<EditButton label="Edit" handleButtonClick={this.showContactDetailsEdit} />
								{ this.state.isContactDetails ? <ContactDetailsEdit handleContactDetailsEditForm={this.hideContactDetailsEdit} handleContactDetailsEditFormSubmit={this.handleUpdateContactDetails} /> : null }
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-xs-offset-3">
						<div className="container">
							<div className="row">
								<div className="col-xs-4">
									<a type="submit" className="btn btn-info" href={CompanyProfileDetailsStore.getCompanyProfileDetails().url} target="_blank" role="button">Company Home Page</a>
								</div>
							</div>
							<div className="row">
								<EditButton label="Edit" handleButtonClick={this.showUrlEdit} />
								{ this.state.isUrl ? <UrlEdit handleUrlEditForm={this.hideUrlEdit} handleUrlEditFormSubmit={this.handleUpdateUrl} /> : null }
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="container">
						<div className="row">
							<p>{CompanyProfileDetailsStore.getCompanyProfileDetails().description}</p>
						</div>
						<div className="row">
							<EditButton label="Edit" handleButtonClick={this.showDescriptionEdit} />
							{ this.state.isDescription ? <DescriptionEdit handleDescriptionEditForm={this.hideDescriptionEdit} handleDescriptionEditFormSubmit={this.handleUpdateDescriptionDetails} /> : null }
						</div>
					</div>
				</div>
				<div className="row">
					<button type="button" className="btn btn-info" data-toggle="collapse" data-target="#excavation-view">View Your Excavations</button>
					<div className="collapse" id="excavation-view">
						<div className="row">
							<div className="container">
								<div className="row">
									<div className="col-xs-2">
										<p>Excavation Name</p>
									</div>
									<div className="col-xs-4 col-xs-offset-6">
										<p>Small map of location</p>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-6">
										<p>Description of Excavation</p>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-4">
										<a className="btn btn-info" href="#" role="button">Excavation Home Page</a>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="container">
								<div className="row">
									<div className="col-xs-2">
										<p>Excavation Name</p>
									</div>
									<div className="col-xs-4 col-xs-offset-6">
										<p>Small map of location</p>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-6">
										<p>Description of Excavation</p>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-4">
										<a className="btn btn-info" href="#" role="button">Excavation Home Page</a>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="container">
								<div className="row">
									<div className="col-xs-2">
										<p>Excavation Name</p>
									</div>
									<div className="col-xs-4 col-xs-offset-6">
										<p>Small map of location</p>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-6">
										<p>Description of Excavation</p>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-4">
										<a className="btn btn-info" href="#" role="button">Excavation Home Page</a>
									</div>
								</div>
							</div>
						</div>
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

module.exports = CompanyProfile;