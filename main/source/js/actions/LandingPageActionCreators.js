var Dispatcher = require('../dispatcher/Dispatcher.js');

function changeToArchLandingPage() {
	var action = {
		type: 'change-to-arch-landing-page'
	};

	Dispatcher.dispatch(action);
}

function changeToEmployerLandingPage() {
	var action = {
		type: 'change-to-employer-landing-page'
	};

	Dispatcher.dispatch(action);
}

function archaeologistSignedIn() {
	var action = {
		type: 'sign-in-archaeologist'
	};

	Dispatcher.dispatch(action);
}

module.exports = {
	changeToArchLandingPage: changeToArchLandingPage,
	changeToEmployerLandingPage: changeToEmployerLandingPage,
	archaeologistSignedIn: archaeologistSignedIn
};

