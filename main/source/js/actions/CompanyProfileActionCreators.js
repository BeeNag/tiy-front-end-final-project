var Dispatcher = require('../dispatcher/Dispatcher.js');
var Authentication = require('../services/Authentication.js');

function changeToLandingPage() {
	var action = {
		type: 'change-to-landing-page'
	};

	Dispatcher.dispatch(action);
}

function updateCompanyProfileContactDetails(address1, address2, address3, city, postcode, phone_number, token, id) {
	Authentication.updateCompanyProfileContactDetails(address1, address2, address3, city, postcode, phone_number, token, id, function handleUpdateCompanyProfile(error, response) {
		if (error) {
			console.log('No no no');
			return;
		}

		var action = {
			type: 'update-company-contact-details',
			data: response
		};

		console.log(response);

		Dispatcher.dispatch(action);
	});
}

function updateCompanyProfileUrl(url, token, id) {
	Authentication.updateCompanyProfileUrlDetails(url, token, id, function handleUpdateCompanyProfile(error, response) {
		if (error) {
			console.log('No no no');
			return;
		}

		var action = {
			type: 'update-company-url-details',
			data: response
		};

		console.log(response);

		Dispatcher.dispatch(action);
	});
}

function updateCompanyProfileDescriptionDetails(description, token, id) {
	Authentication.updateCompanyProfileDesriptionDetails(description, token, id, function handleUpdateCompanyProfile(error, response) {
		if (error) {
			console.log('No no no');
			return;
		}

		var action = {
			type: 'update-company-description-details',
			data: response
		};

		console.log(response);

		Dispatcher.dispatch(action);
	});
}

function deleteCompanyProfile(token, id) {

	Authentication.deleteCompanyProfile(token, id, function handleDeleteCompanyProfile(error, response) {
		if (error) {
			console.log('No no no');
			return;
		}

		var action = {
			type: 'delete-company-profile',
		};

		Dispatcher.dispatch(action);
	});
}

module.exports = {
	changeToLandingPage: changeToLandingPage,
	updateCompanyProfileContactDetails: updateCompanyProfileContactDetails,
	updateCompanyProfileUrl: updateCompanyProfileUrl,
	updateCompanyProfileDescriptionDetails: updateCompanyProfileDescriptionDetails,
	deleteCompanyProfile: deleteCompanyProfile

};