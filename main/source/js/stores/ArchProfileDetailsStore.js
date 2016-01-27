var Dispatcher = require('../dispatcher/Dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var ArchLandingPageActionCreators = require('../actions/ArchLandingPageActionCreators.js');

var archaeologistProfile = {};

var isArchaeologistSignedIn = false;

function toggleArchaeologistSignedStatus() {
	if (isArchaeologistSignedIn === true) {
		isArchaeologistSignedIn = false;
	} else {
		isArchaeologistSignedIn = true;
	}
} 

function setArchaeologistProfile(profile) {
	console.log(profile);
	archaeologistProfile = profile;
	console.log(archaeologistProfile);
	ArchProfileDetailsStore.emit('change');
}

function updateArchaeologistProfile(profileUpdate) {
	archaeologistProfile = profileUpdate;
	ArchProfileDetailsStore.emit('change');
}

function deleteArchaeologistProfile() {
	archaeologistProfile = {};
}

var ArchProfileDetailsStore = objectAssign({}, EventEmitter.prototype, {

	getArchaeologistProfileDetails: function () {
		return archaeologistProfile;
	},

	getArchaeologistSignedInStatus: function () {
		return isArchaeologistSignedIn;
	},

	addChangeListener: function (changeEventHandler) {
		this.on('change', changeEventHandler);
	},

	removeChangeListener: function (changeEventHandler) {
		this.removeListener('change', changeEventHandler);
	}
});

function handleAction(action) {
	if (action.type === 'get-archaeologist-profile-details') {
		setArchaeologistProfile(action.data);
	} else if (action.type === 'update-archaeologist-contact-details') {
		updateArchaeologistProfile(action.data);
	} else if (action.type === 'update-archaeologist-specialism-and-experience-details') {
		updateArchaeologistProfile(action.data);
	} else if (action.type === 'update-archaeologist-description-details') {
		updateArchaeologistProfile(action.data);
	} else if (action.type === 'delete-archaeologist-profile') {
		deleteArchaeologistProfile();
	} else if (action.type === 'sign-in-archaeologist') {
		toggleArchaeologistSignedStatus();
	} 
}

ArchProfileDetailsStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = ArchProfileDetailsStore;