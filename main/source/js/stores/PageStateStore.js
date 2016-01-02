var Dispatcher = require('../dispatcher/Dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var webPages = {
	ARCH_LANDING_PAGE: 'ARCH_LANDING_PAGE',
	ARCHAEOLOGIST_PROFILE: 'ARCHAEOLOGIST_PROFILE',
	COMPANY_PROFILE: 'COMPANY_PROFILE',
	CREATE_COMPANY_PROFILE: 'CREATE_COMPANY_PROFILE',
	CREATE_EXCAVATION: 'CREATE_EXCAVATION',
	CREATE_PROFILE: 'CREATE_PROFILE',
	EMPLOYER_LANDING_PAGE: 'EMPLOYER_LANDING_PAGE',
	LANDING_PAGE: 'LANDING_PAGE',
	SEARCH: 'SEARCH'
};

var Page = webPages.LANDING_PAGE;

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
	if (action.type === 'change_to_arch_landing_page') {

	} else if (action.type === 'change_to_employer_landing_page') {
		
	}
}

PageStateStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = PageStateStore;