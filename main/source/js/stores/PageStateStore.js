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

function changeToArchLandingPage() {
	Page = webPages.ARCH_LANDING_PAGE;
	PageStateStore.emit('change');
}

function changeToEmployerLandingPage() {
	Page = webPages.EMPLOYER_LANDING_PAGE;
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
	}
}

PageStateStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = PageStateStore;