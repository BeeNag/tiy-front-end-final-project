var Dispatcher = require('../dispatcher/Dispatcher.js');

function changeToCompanyProfile() {
	var action = {
		type: 'change-to-company-profile'
	};

	Dispatcher.dispatch(action);
}

function changeToCreateExcavation() {
	var action = {
		type: 'change-to-create-excavation'
	};

	Dispatcher.dispatch(action);
}

function changeToSearch() {
	var action = {
		type: 'change-to-search'
	};

	Dispatcher.dispatch(action);
}

module.exports = {
	changeToCompanyProfile: changeToCompanyProfile,
	changeToCreateExcavation: changeToCreateExcavation,
	changeToSearch: changeToSearch
};