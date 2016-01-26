var Dispatcher = require('../dispatcher/Dispatcher.js');

function setCompanyId(id) {
	var action = {
		type: 'set-company-id',
		id: id
	};

	Dispatcher.dispatch(action);
}

module.exports = {
	setCompanyId: setCompanyId
};