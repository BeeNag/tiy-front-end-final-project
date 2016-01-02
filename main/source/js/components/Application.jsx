var React = require('react');
var PageStateStore = require('../stores/PageStateStore.js');
var ArchLandingPage = require('./arch-landing-page/ArchLandingPage.jsx');
var ArchaeologistProfile = require('./archaeologist-profile/ArchaeologistProfile.jsx');
var CompanyProfile = require('./company-profile/CompanyProfile.jsx');
var CreateCompanyProfile = require('./create-company-profile/CreateCompanyProfile.jsx');
var CreateExcavation = require('./create-excavation/CreateExcavation.jsx');
var CreateProfile = require('./create-profile/CreateProfile.jsx');
var EmployerLandingPage = require('./employer-landing-page/EmployerLandingPage.jsx');
var LandingPage = require('./landing-page/LandingPage.jsx');
var Search = require('./search/Search.jsx');

var Application = React.createClass({

	getInitialState: function () {
		return {
			page: PageStateStore.getCurrentPage()
		};
	},

	render: function () {
		{if (this.state.page === 'LANDING_PAGE') {
			return (
			<LandingPage />
			);
		}}
		
	}
});

module.exports = Application;