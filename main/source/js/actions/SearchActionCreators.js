var Dispatcher = require('../dispatcher/Dispatcher.js');
var Authentication = require('../services/Authentication.js')

function addSearchThumbnails() {
	var action = {
		type: 'render-thumbnail'
	};

	Dispatcher.dispatch(action);
}

function searchArchaeologistProfiles(searchString, token, id) {
	Authentication.searchForArchaeologists(searchString, token, id, function handleSearchForArchaeologists(error, response) {
		if (error) {
			console.log('No no no');
			return;
		}

		var action = {
			type: 'search-archaeologists',
			data: response
		};

		console.log(response);

		Dispatcher.dispatch(action);
	});
}

module.exports = {
	addSearchThumbnails: addSearchThumbnails,
	searchArchaeologistProfiles: searchArchaeologistProfiles
};