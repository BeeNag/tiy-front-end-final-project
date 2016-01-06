var Dispatcher = require('../dispatcher/Dispatcher.js');

function changeToCompanyProfile() {
	var action = {
		type: 'change-to-company-profile'
	};

	Dispatcher.dispatch(action);
}

module.exports = {
	changeToCompanyProfile: changeToCompanyProfile
};