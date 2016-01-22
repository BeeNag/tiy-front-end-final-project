var Dispatcher = require('../dispatcher/Dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var SearchActionCreators = require('../../actions/SearchActionCreators.js');

// var thumbnailDataArray = [
// 	{imageUrl: "http://www.valuestockphoto.com/downloads/43521-2/power_button.jpg", imageAlt: "power switched off", name: "Joe Bloggs", email: "joebloggs@gmail.com", specialism: "Osteoarchaeology", experience: "2-5 Years"},
// 	{imageUrl: "http://www.valuestockphoto.com/downloads/43521-2/power_button.jpg", imageAlt: "power switched off", name: "Jill Bloggs", email: "jillbloggs@gmail.com", specialism: "Egyptology", experience: "1-2 Years"},
// 	{imageUrl: "http://www.valuestockphoto.com/downloads/43521-2/power_button.jpg", imageAlt: "power switched off", name: "John Doe", email: "johndoe@gmail.com", specialism: "Field Archaeology", experience: "5+ Years"}
// ];

var archaeologistSearchThumbnails = [];

function setArchaeologistSearchThumbnails(data) {
	archaeologistSearchThumbnails = data;
	SearchStore.emit('change');
}

var SearchStore = objectAssign({}, EventEmitter.prototype, {

	getThumbnailSearchData: function () {
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

module.exports = SearchStore;