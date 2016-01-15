var Dispatcher = require('../dispatcher/Dispatcher.js');

function setUserId(id) {
	var action = {
		type: 'set-user-id',
		id: id
	};

	Dispatcher.dispatch(action);
}

module.exports = {
	setUserId: setUserId
};