var Dispatcher = require('../dispatcher/Dispatcher.js');

function setArchaeologistAuthenticationToken(token) {
	var action = {
		type: 'set-archaeologist-authentication-token',
		token: token
	};
	console.log(token);
	Dispatcher.dispatch(action);
}

function setCompanyAuthenticationToken(token) {
	var action = {
		type: 'set-company-authentication-token',
		token: token
	};
	console.log(token);
	Dispatcher.dispatch(action);
}

function removeArchaeologistAuthenticationToken() {
	var action = {
		type: 'remove-archaeologist-authentication-token'
	}

	Dispatcher.dispatch(action);
}

function removeCompanyAuthenticationToken() {
	var action = {
		type: 'remove-company-authentication-token'
	}

	Dispatcher.dispatch(action);
}

module.exports = {
	setArchaeologistAuthenticationToken: setArchaeologistAuthenticationToken,
	setCompanyAuthenticationToken: setCompanyAuthenticationToken,
	removeArchaeologistAuthenticationToken: removeArchaeologistAuthenticationToken,
	removeCompanyAuthenticationToken: removeCompanyAuthenticationToken
};