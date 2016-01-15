var Dispatcher = require('../dispatcher/Dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var ArchLandingPageActionCreators = require('../actions/ArchLandingPageActionCreators.js');

var archaeologistProfile = {};

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

var ArchProfileDetailsStore = objectAssign({}, EventEmitter.prototype, {

	getArchaeologistProfileDetails: function () {
		return archaeologistProfile;
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
	} else if (action.type === 'update-archaeologist-profile-details') {
		updateArchaeologistProfile(action.data);
	}
}

ArchProfileDetailsStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = ArchProfileDetailsStore;