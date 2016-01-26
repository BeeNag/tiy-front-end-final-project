var Dispatcher = require('../dispatcher/Dispatcher.js');

function setArchId(id) {
	var action = {
		type: 'set-arch-id',
		id: id
	};

	Dispatcher.dispatch(action);
}

module.exports = {
	setArchId: setArchId
};