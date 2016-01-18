var Dispatcher = require('../dispatcher/Dispatcher.js');
var Authentication = require('../services/Authentication.js');

function changeToLandingPage() {
	var action = {
		type: 'change-to-landing-page'
	};

	Dispatcher.dispatch(action);
}

function updateArchProfileContactDetails(address1, address2, address3, city, postcode, home_phone_number, mobile_phone_number, token, id) {

	Authentication.updateArchaeologistProfileContactDetails(address1, address2, address3, city, postcode, home_phone_number, mobile_phone_number, token, id, function handleUpdateArchaeologistProfile(error, response) {
		if (error) {
			console.log('No no no');
			return;
		}

		var action = {
			type: 'update-archaeologist-contact-details',
			data: response
		};

		console.log(response);

		Dispatcher.dispatch(action);
	});
}

function updateArchProfileSpecialismAndExperienceDetails(specialism, experience, token, id) {

	Authentication.updateArchaeologistProfileSpecialismAndExperienceDetails(specialism, experience, token, id, function handleUpdateArchaeologistProfile(error, response) {
		if (error) {
			console.log('No no no');
			return;
		}

		var action = {
			type: 'update-archaeologist-specialism-and-experience-details',
			data: response
		};

		console.log(response);

		Dispatcher.dispatch(action);
	});
}

function updateArchProfileDescriptionDetails(description, token, id) {

	Authentication.updateArchaeologistProfileDescriptionDetails(description, token, id, function handleUpdateArchaeologistProfile(error, response) {
		if (error) {
			console.log('No no no');
			return;
		}

		var action = {
			type: 'update-archaeologist-description-details',
			data: response
		};

		console.log(response);

		Dispatcher.dispatch(action);
	});
}

function deleteArchProfile(token, id) {

	Authentication.deleteArchaeologistProfile(token, id, function handleDeleteArchaeologistProfile(error, response) {
		if (error) {
			console.log('No no no');
			return;
		}

		var action = {
			type: 'delete-archaeologist-profile',
		};

		Dispatcher.dispatch(action);
	});
}

module.exports = {
	changeToLandingPage: changeToLandingPage,
	updateArchProfileContactDetails: updateArchProfileContactDetails,
	updateArchProfileSpecialismAndExperienceDetails: updateArchProfileSpecialismAndExperienceDetails,
	updateArchProfileDescriptionDetails: updateArchProfileDescriptionDetails,
	deleteArchProfile: deleteArchProfile
};