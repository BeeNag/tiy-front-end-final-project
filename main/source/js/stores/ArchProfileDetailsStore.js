var Dispatcher = require('../dispatcher/Dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var ArchLandingPageActionCreators = require('../actions/ArchLandingPageActionCreators.js');

var archaeologistProfile = {};

function setArchaeologistProfile(profile) {
	archaeologistProfile = profile;
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
		setArchaeologistProfile(profile);
	}
}

module.exports = ArchProfileDetailsStore;