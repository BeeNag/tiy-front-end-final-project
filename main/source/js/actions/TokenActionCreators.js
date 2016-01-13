var Dispatcher = require('../dispatcher/Dispatcher.js');

function setUserAuthenticationToken(token) {
	var action = {
		type: 'set-user-authentication-token',
		token: token
	};
	console.log(token);
	Dispatcher.dispatch(action);
}

function isUserSignedIn() {
	var action = {
		type: 'check-for-token'
	};
}

module.exports = {
	setUserAuthenticationToken: setUserAuthenticationToken,
	isUserSignedIn: isUserSignedIn
}