var Dispatcher = require('../dispatcher/Dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var thumbnailData = {
	imageUrl: "http://www.valuestockphoto.com/downloads/43521-2/power_button.jpg",
	imageAlt: "power switched off",
	name: "Joe Bloggs",
	email: "joebloggs@gmail.com",
	specialism: "Osteoarchaeology",
	experience: "2-5 Years"
};

var SearchStore = objectAssign({}, EventEmitter.prototype, {

	getThumbnailData: function () {
		return thumbnailData;
	},

	addChangeListener: function (changeEventHandler) {
		this.on('change', changeEventHandler);
	},

	removeChangeListener: function (changeEventHandler) {
		this.removeListener('change', changeEventHandler);
	}
});

module.exports = SearchStore;