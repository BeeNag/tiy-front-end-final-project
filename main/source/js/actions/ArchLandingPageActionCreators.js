var Dispatcher = require('../dispatcher/Dispatcher.js');
var Authentication = require('../services/Authentication.js');

function changeToLandingPage() {
	var action = {
		type: 'change-to-landing-page'
	};

	Dispatcher.dispatch(action);
}

function changeToArchLandingPage() {
	var action = {
		type: 'change-to-arch-landing-page'
	};

	Dispatcher.dispatch(action);
}

function changeToArchaeologistProfile() {
	var action = {
		type: 'change-to-archaeologist-profile'
	};

	Dispatcher.dispatch(action);
}

function getArchProfile(token, id) {

	Authentication.getArchaeologistProfile(token, id, function handleGetArchaeologistProfile(error, response) {
		if (error) {
			console.log('No no no');
			return;
		}
	});

	var action = {
		type: 'get-archaeologist-profile-details'
	};

	Dispatcher.dispatch(action);
}

module.exports = {
	changeToLandingPage: changeToLandingPage,
	changeToArchLandingPage: changeToArchLandingPage,
	changeToArchaeologistProfile: changeToArchaeologistProfile,
	getArchProfile: getArchProfile
};