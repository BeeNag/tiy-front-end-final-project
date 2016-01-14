var Dispatcher = require('../dispatcher/Dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var TokenActionCreators = require('../actions/TokenActionCreators.js');
var ArchSignUpFormActionCreators = require('../actions/ArchSignUpFormActionCreators.js');

var token = null;
var id = null;

function setUserAuthenticationToken(newToken) {
	token = newToken;
	SignInDetailsStore.emit('change');
}

function setUserId(newId) {
	id = newId;
	SignInDetailsStore.emit('change');
}

var SignInDetailsStore = objectAssign({}, EventEmitter.prototype, {

	getToken: function () {
		return token;
	},

	getId: function () {
		return id;
	},

	addChangeListener: function (changeEventHandler) {
		this.on('change', changeEventHandler);
	},

	removeChangeListener: function (changeEventHandler) {
		this.removeListener('change', changeEventHandler);
	}
});

function handleAction (action) {
	if (action.type === 'set-user-authentication-token') {
		setUserAuthenticationToken(action.token);
	} else if (action.type === 'set-user-id') {
		setUserId(action.id);
	}
}

SignInDetailsStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = SignInDetailsStore;