var Dispatcher = require('../dispatcher/Dispatcher.js');

function addSearchThumbnails () {
	var action = {
		type: 'render-thumbnail'
	};

	Dispatcher.dispatch(action);
}

module.exports = {
	addSearchThumbnails: addSearchThumbnails
};