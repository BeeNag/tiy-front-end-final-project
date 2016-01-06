var Dispatcher = require('../dispatcher/Dispatcher.js');

function changeToLandingPage() {
	var action = {
		type: 'change-to-landing-page'
	};

	Dispatcher.dispatch(action);
}

function changeToArchaeologistProfile() {
	var action = {
		type: 'change-to-archaeologist-profile'
	};

	Dispatcher.dispatch(action);
}

module.exports = {
	changeToLandingPage: changeToLandingPage,
	changeToArchaeologistProfile: changeToArchaeologistProfile
};