var Dispatcher = require('../dispatcher/Dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var webPages = {
	ARCH_LANDING_PAGE: 'ARCH_LANDING_PAGE',
	ARCHAEOLOGIST_PROFILE: 'ARCHAEOLOGIST_PROFILE',
	COMPANY_PROFILE: 'COMPANY_PROFILE',
	CREATE_EXCAVATION: 'CREATE_EXCAVATION',
	EMPLOYER_LANDING_PAGE: 'EMPLOYER_LANDING_PAGE',
	LANDING_PAGE: 'LANDING_PAGE',
	SEARCH: 'SEARCH'
};

var Page = webPages.LANDING_PAGE;

function changeToLandingPage() {
	Page = webPages.LANDING_PAGE;
	PageStateStore.emit('change');
}

function changeToArchLandingPage() {
	Page = webPages.ARCH_LANDING_PAGE;
	PageStateStore.emit('change');
}

function changeToEmployerLandingPage() {
	Page = webPages.EMPLOYER_LANDING_PAGE;
	PageStateStore.emit('change');
}

function changeToArchaeologistProfile() {
	Page = webPages.ARCHAEOLOGIST_PROFILE;
	PageStateStore.emit('change');
}

function changeToCompanyProfile() {
	Page = webPages.COMPANY_PROFILE;
	PageStateStore.emit('change');
}

function changeToCreateExcavation() {
	Page = webPages.CREATE_EXCAVATION;
	PageStateStore.emit('change');
}

function changeToSearch() {
	Page = webPages.SEARCH;
	PageStateStore.emit('change');
}

var PageStateStore = objectAssign({}, EventEmitter.prototype, {

	getCurrentPage: function () {
		return Page;
	},

	addChangeListener: function (changeEventHandler) {
		this.on('change', changeEventHandler);
	},

	removeChangeListener: function (changeEventHandler) {
		this.removeListener('change', changeEventHandler);
	}
});

function handleAction(action) {
	if (action.type === 'change-to-arch-landing-page') {
		changeToArchLandingPage();
	} else if (action.type === 'change-to-employer-landing-page') {
		changeToEmployerLandingPage();
	} else if (action.type === 'change-to-archaeologist-profile') {
		changeToArchaeologistProfile();
	} else if (action.type === 'change-to-company-profile') {
		changeToCompanyProfile();
	} else if (action.type === 'change-to-create-excavation') {
		changeToCreateExcavation();
	} else if (action.type === 'change-to-search') {
		changeToSearch();
	} else if (action.type === 'change-to-landing-page') {
		changeToLandingPage();
	}
}

PageStateStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = PageStateStore;