var Dispatcher = require('../dispatcher/Dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var TokenActionCreators = require('../actions/TokenActionCreators.js');
var ArchSignUpFormActionCreators = require('../actions/ArchSignUpFormActionCreators.js');
var CompanySignUpFormActionCreators = require('../actions/CompanySignUpFormActionCreators.js');
var ArchSignInFormActionCreators = require('../actions/ArchSignInFormActionCreators.js');
var CompanySignInFormActionCreators = require('../actions/CompanySignInFormActionCreators.js');

var token = null;
var id = null;

function setArchaeologistAuthenticationToken(newToken) {
	token = newToken;
	SignInDetailsStore.emit('change');
}

function setCompanyAuthenticationToken(newToken) {
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
	if (action.type === 'set-archaeologist-authentication-token') {
		setArchaeologistAuthenticationToken(action.token);
	} else if (action.type === 'set-company-authentication-token') {
		setCompanyAuthenticationToken(action.token);
	} else if (action.type === 'set-user-id') {
		setUserId(action.id);
	} else if (action.type === 'set-arch-id') {
		setUserId(action.id);
	} else if (action.type === 'set-company-id') {
		setUserId(action.id);
	}
}

SignInDetailsStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = SignInDetailsStore;