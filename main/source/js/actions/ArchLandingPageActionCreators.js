var Dispatcher = require('../dispatcher/Dispatcher.js');

function changeToArchaeologistProfile() {
	var action = {
		type: 'change-to-archaeologist-profile'
	};

	Dispatcher.dispatch(action);
}

module.exports = {
	changeToArchaeologistProfile: changeToArchaeologistProfile
};