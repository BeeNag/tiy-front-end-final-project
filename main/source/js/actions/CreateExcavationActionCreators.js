var Dispatcher = require('../dispatcher/Dispatcher.js');
var ReactFire = require('reactfire');
var HashID = require('../services/HashID.js');

function changeToCompanyProfile() {
	var action = {
		type: 'change-to-company-profile'
	};

	Dispatcher.dispatch(action);
}

function setExcavationDetails(excavationDetails) {

	var excavationId = HashID.generate();
	this.firebaseRef = new Firebase("https://tiy-front-end.firebaseio.com/excavations/" + excavationId);
	this.firebaseRef.on("child_added", function () {
		console.log('hello');
	}.bind(this));

	this.firebaseRef.set({
		company_id: excavationDetails.company_id,
		name: excavationDetails.name,
		address1: excavationDetails.address1,
		address2: excavationDetails.address2,
		address3: excavationDetails.address3,
		postcode: excavationDetails.postcode,
		duration: excavationDetails.duration,
		excavation_url: excavationDetails.excavation_url,
		excavation_description: excavationDetails.excavation_description
	});

	var action = {
		type: 'set-excavation-details',
		excavationDetails: excavationDetails
	};

	Dispatcher.dispatch(action);
}

module.exports = {
	changeToCompanyProfile: changeToCompanyProfile,
	setExcavationDetails: setExcavationDetails
};