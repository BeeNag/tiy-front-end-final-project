var Dispatcher = require('../dispatcher/Dispatcher.js');
var Authentication = require('../services/Authentication.js');

function changeToLandingPage() {
	var action = {
		type: 'change-to-landing-page'
	};

	Dispatcher.dispatch(action);
}

function updateArchProfile(address1, address2, address3, city, postcode, home_phone_number, mobile_phone_number, token, id) {

	Authentication.updateArchaeologistProfile(address1, address2, address3, city, postcode, home_phone_number, mobile_phone_number, token, id, function handleUpdateArchaeologistProfile(error, response) {
		if (error) {
			console.log('No no no');
			return;
		}

		var action = {
			type: 'update-archaeologist-profile-details',
			data: response
		};

		Dispatcher.dispatch(action);

	});
}

module.exports = {
	changeToLandingPage: changeToLandingPage,
	updateArchProfile: updateArchProfile
};