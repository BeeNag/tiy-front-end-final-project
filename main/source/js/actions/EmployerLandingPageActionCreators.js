var Dispatcher = require('../dispatcher/Dispatcher.js');

function changeToLandingPage() {
	var action = {
		type: 'change-to-landing-page'
	};

	Dispatcher.dispatch(action);
}

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
	changeToLandingPage: changeToLandingPage,
	changeToCompanyProfile: changeToCompanyProfile,
	changeToCreateExcavation: changeToCreateExcavation,
	changeToSearch: changeToSearch
};