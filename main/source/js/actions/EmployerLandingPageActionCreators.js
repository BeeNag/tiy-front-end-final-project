var Dispatcher = require('../dispatcher/Dispatcher.js');
var Authentication = require('../services/Authentication.js');

function changeToLandingPage() {
	var action = {
		type: 'change-to-landing-page'
	};

	Dispatcher.dispatch(action);
}

function changeToEmployerLandingPage() {
	var action = {
		type: 'change-to-employer-landing-page'
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

function getCompanyProfile(token, id) {

	Authentication.getCompanyProfile(token, id, function handleGetCompanyProfile(error, response) {
		if (error) {
			console.log('No no no');
			return;
		}

		var action = {
			type: 'get-company-profile-details',
			data: response
		};

		Dispatcher.dispatch(action);
	});
}

module.exports = {
	changeToLandingPage: changeToLandingPage,
	changeToEmployerLandingPage: changeToEmployerLandingPage,
	changeToCompanyProfile: changeToCompanyProfile,
	changeToCreateExcavation: changeToCreateExcavation,
	changeToSearch: changeToSearch,
	getCompanyProfile: getCompanyProfile
};