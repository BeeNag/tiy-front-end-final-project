var Dispatcher = require('../dispatcher/Dispatcher.js');
var ReactFire = require('reactfire');
var HashID = require('../services/HashID.js');
var EmployerLandingPageActionCreators = require('./EmployerLandingPageActionCreators.js');
var SignInDetailsStore = require('../stores/SignInDetailsStore.js');

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

function getExcavationDetails() {
	var ref = new Firebase("https://tiy-front-end.firebaseio.com/excavations/");

// Attach an asynchronous callback to read the data at our posts reference
	ref.on("value", function(snapshot) {
	  console.log(snapshot.val());
	  var excavations = Object.keys(snapshot.val()).map(function (k) {
	  	return snapshot.val()[k];
	  });

	  var action = {
			type: 'get-excavation-details',
			excavations: excavations
		};

		Dispatcher.dispatch(action);
		EmployerLandingPageActionCreators.getCompanyProfile(SignInDetailsStore.getToken(), SignInDetailsStore.getId());
		EmployerLandingPageActionCreators.changeToCompanyProfile();

	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});
}

module.exports = {
	changeToCompanyProfile: changeToCompanyProfile,
	setExcavationDetails: setExcavationDetails,
	getExcavationDetails: getExcavationDetails
};