var React = require('react');
var LandingPageNavbar = require('./LandingPageNavbar.jsx');
var ArchSignInForm = require('./ArchSignInForm.jsx');
var CompanySignInForm = require('./CompanySignInForm.jsx');
var ArchSignUpForm = require('./ArchSignUpForm.jsx');
var CompanySignUpForm = require('./CompanySignUpForm.jsx');
var MainButton = require('../MainButton.jsx');

var LandingPage = React.createClass({
	
	getInitialState: function () {
		return {
			isArchSignIn: false,
			isCompanySignIn: false,
			isArchSignUp: false,
			isCompanySignUp: false
		};
	},

	showArchSignInForm: function () {
		this.setState({
			isArchSignIn: true
		});
	},

	showCompanySignInForm: function () {
		this.setState({
			isCompanySignIn: true
		});
	},

	hideArchSignInForm: function () {
		this.setState({
			isArchSignIn: false
		});
	},

	hideCompanySignInForm: function () {
		this.setState({
			isCompanySignIn: false
		});
	},

	showArchSignUpFormAndHideArchSignInForm: function () {
		this.setState({
			isArchSignUp: true,
			isArchSignIn: false
		});
	},

	showCompanySignUpFormAndHideCompanySignInForm: function () {
		this.setState({
			isCompanySignUp: true,
			isCompanySignIn: false
		});
	},

	hideArchSignUpForm: function () {
		this.setState({
			isArchSignUp: false
		});
	},

	hideCompanySignUpForm: function () {
		this.setState({
			isCompanySignUp: false
		});
	},

	render: function () {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<h1>Welcome to FreeArch</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-6 col-xs-offset-3">
						<h3>Are you an Archaeologist or a potential Employer?</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-xs-offset-2">
						<MainButton label="Archaeologist" handleButtonClick={this.showArchSignInForm} /> 
					</div>
					<div className="col-xs-4 col-xs-offset-2">
						<MainButton label="Employer" handleButtonClick={this.showCompanySignInForm} /> 
					</div>
				</div>
				{ this.state.isArchSignIn ? <ArchSignInForm handleArchSignInForm={this.hideArchSignInForm} handleArchChangeForm={this.showArchSignUpFormAndHideArchSignInForm} /> : null }
				{ this.state.isCompanySignIn ? <CompanySignInForm handleCompanySignInForm={this.hideCompanySignInForm} handleCompanyChangeForm={this.showCompanySignUpFormAndHideCompanySignInForm} /> : null }
				{ this.state.isArchSignUp ? <ArchSignUpForm handleArchSignUpForm={this.hideArchSignUpForm} /> : null }
				{ this.state.isCompanySignUp ? <CompanySignUpForm handleCompanySignUpForm={this.hideCompanySignUpForm} /> : null }
			</div>

	    );
	}
});

module.exports = LandingPage;