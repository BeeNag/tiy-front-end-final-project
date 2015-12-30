var React = require('react');
var ReactDOM = require('react-dom');
var ArchLandingPage = require('./components/arch-landing-page/ArchLandingPage.jsx');
var ArchaeologistProfile = require('./components/archaeologist-profile/ArchaeologistProfile.jsx');
var CompanyProfile = require('./components/company-profile/CompanyProfile.jsx');
var CreateCompanyProfile = require('./components/create-company-profile/CreateCompanyProfile.jsx');
var CreateExcavation = require('./components/create-excavation/CreateExcavation.jsx');
var CreateProfile = require('./components/create-profile/CreateProfile.jsx');
var EmployerLandingPage = require('./components/employer-landing-page/EmployerLandingPage.jsx');
var LandingPage = require('./components/landing-page/LandingPage.jsx');
var Search = require('./components/search/Search.jsx');

ReactDOM.render(<Search />, document.querySelector('[data-react-application]'));