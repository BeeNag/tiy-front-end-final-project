var Dispatcher = require('../dispatcher/Dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var SearchActionCreators = require('../actions/SearchActionCreators.js');

var archaeologistSearchThumbnails = [];

function setArchaeologistSearchThumbnails(data) {

	console.log(data);
	archaeologistSearchThumbnails = data;
	SearchStore.emit('change');
}

var SearchStore = objectAssign({}, EventEmitter.prototype, {

	getThumbnailSearchData: function () {
		console.log(archaeologistSearchThumbnails);
		return archaeologistSearchThumbnails;
	},

	addChangeListener: function (changeEventHandler) {
		this.on('change', changeEventHandler);
	},

	removeChangeListener: function (changeEventHandler) {
		this.removeListener('change', changeEventHandler);
	}
});

function handleAction(action) {
	if (action.type === 'search-archaeologists') {
		setArchaeologistSearchThumbnails(action.data);
	}
}

SearchStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = SearchStore;