var Dispatcher = require('../dispatcher/Dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var TokenActionCreators = require('../actions/TokenActionCreators.js');

var token;

function setUserAuthenticationToken(newToken) {
	token = newToken;
	SignInDetailsStore.emit('change');
}

function isUserSignedIn () {
	return (this.state.token !== null);
}

var SignInDetailsStore = objectAssign({}, EventEmitter.prototype, {

	getToken: function () {
		return token;
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
	} else if (action.type === 'check-for-token') {
		isUserSignedIn();
	}
}

SignInDetailsStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = SignInDetailsStore;