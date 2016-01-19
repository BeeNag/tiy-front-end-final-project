var Dispatcher = require('../dispatcher/Dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var EmployerLandingPageActionCreators = require('../actions/EmployerLandingPageActionCreators.js');

var companyProfile = {};

function setCompanyProfile(profile) {
	companyProfile = profile;
	CompanyProfileDetailsStore.emit('change');
}

function updateCompanyProfile(profileUpdate) {
	companyProfile = profileUpdate;
	CompanyProfileDetailsStore.emit('change');
}

function deleteCompanyProfile() {
	companyProfile = {};
}

var CompanyProfileDetailsStore = objectAssign({}, EventEmitter.prototype, {

	getCompanyProfileDetails: function () {
		return companyProfile;
	},

	addChangeListener: function (changeEventHandler) {
		this.on('change', changeEventHandler);
	},

	removeChangeListener: function (changeEventHandler) {
		this.removeListener('change', changeEventHandler);
	}
});

function handleAction(action) {
	if (action.type === 'get-company-profile-details') {
		setCompanyProfile(action.data);
	} else if (action.type === 'update-company-contact-details') {
		updateCompanyProfile(action.data);
	} else if (action.type === 'update-company-url-details') {
		updateCompanyProfile(action.data);
	} else if (action.type === 'update-company-description-details') {
		updateCompanyProfile(action.data);
	} else if (action.type === 'delete-company-profile') {
		deleteCompanyProfile();
	}
}

CompanyProfileDetailsStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = CompanyProfileDetailsStore;