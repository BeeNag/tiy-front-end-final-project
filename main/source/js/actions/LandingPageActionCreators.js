var Dispatcher = require('../dispatcher/Dispatcher.js');

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

function changeToEmployerLandingPage() {
	var action = {
		type: 'change-to-employer-landing-page'
	};

	Dispatcher.dispatch(action);
}

module.exports = {
	changeToArchLandingPage: changeToArchLandingPage,
	changeToEmployerLandingPage: changeToEmployerLandingPage
};

