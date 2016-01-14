var Dispatcher = require('../dispatcher/Dispatcher.js');

function setUserAuthenticationToken(token) {
	var action = {
		type: 'set-user-authentication-token',
		token: token
	};
	console.log(token);
	Dispatcher.dispatch(action);
}

module.exports = {
	setUserAuthenticationToken: setUserAuthenticationToken,
};