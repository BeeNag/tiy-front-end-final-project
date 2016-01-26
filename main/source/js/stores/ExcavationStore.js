var Dispatcher = require('../dispatcher/Dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var excavationDetails = [];

function setExcavationDetails(details) {
	console.log(details);
	excavationDetails.push(details);
}

function setExcavationDetailsArray(details) {
	console.log(details);
	excavationDetails = details;
}

var ExcavationStore = objectAssign({}, EventEmitter.prototype, {

	getExcavationDetails: function () {
		return excavationDetails;
	},

	addChangeListener: function (changeEventHandler) {
		this.on('change', changeEventHandler);
	},

	removeChangeListener: function (changeEventHandler) {
		this.removeListener('change', changeEventHandler);
	}
});

function handleAction(action) {
	if (action.type === 'set-excavation-details') {
		setExcavationDetails(action.excavationDetails);
	} else if (action.type === 'get-excavation-details') {
		setExcavationDetailsArray(action.excavations);
	}
}

ExcavationStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = ExcavationStore;