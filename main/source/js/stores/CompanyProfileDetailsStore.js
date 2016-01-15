var Dispatcher = require('../dispatcher/Dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var EmployerLandingPageActionCreators = require('../actions/EmployerLandingPageActionCreators.js');

var companyProfile = {};

function setCompanyProfile(profile) {
	companyProfile = profile;
	CompanyProfileDetailsStore.emit('change');
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
	}
}

CompanyProfileDetailsStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = CompanyProfileDetailsStore;