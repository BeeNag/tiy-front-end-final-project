var React = require('react');
var PageStateStore = require('../stores/PageStateStore.js');
var ArchLandingPage = require('./arch-landing-page/ArchLandingPage.jsx');
var ArchaeologistProfile = require('./archaeologist-profile/ArchaeologistProfile.jsx');
var CompanyProfile = require('./company-profile/CompanyProfile.jsx');
var CreateExcavation = require('./create-excavation/CreateExcavation.jsx');
var EmployerLandingPage = require('./employer-landing-page/EmployerLandingPage.jsx');
var LandingPage = require('./landing-page/LandingPage.jsx');
var Search = require('./search/Search.jsx');

var Application = React.createClass({

	getInitialState: function () {
		return {
			page: PageStateStore.getCurrentPage()
		};
	},

	updateState: function () {
		this.setState({
			page: PageStateStore.getCurrentPage()
		});
	},

	componentDidMount: function () {
		PageStateStore.addChangeListener(this.updateState);
	},

	componentWillUnmount: function () {
		PageStateStore.removeChangeListener(this.updateState);
	},

	render: function () {
		if (this.state.page === 'LANDING_PAGE') {
			return (
				<LandingPage />
			);
		}
		if (this.state.page === 'ARCH_LANDING_PAGE') {
			return (
				<ArchLandingPage />
			);
		}
		if (this.state.page === 'EMPLOYER_LANDING_PAGE') {
			return (
				<EmployerLandingPage />
			);
		}
	}
});

module.exports = Application;