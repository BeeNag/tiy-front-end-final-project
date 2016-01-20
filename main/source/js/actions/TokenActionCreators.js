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

module.exports = {
	setArchaeologistAuthenticationToken: setArchaeologistAuthenticationToken,
	setCompanyAuthenticationToken: setCompanyAuthenticationToken
};