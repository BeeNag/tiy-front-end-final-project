var React = require('react');
var ArchSignInForm = require('./ArchSignInForm.jsx');
var CompanySignInForm = require('./CompanySignInForm.jsx');
var ArchSignUpForm = require('./ArchSignUpForm.jsx');
var CompanySignUpForm = require('./CompanySignUpForm.jsx');
var MainButton = require('../MainButton.jsx');
var TokenActionCreators = require('../../actions/TokenActionCreators.js');
var Authentication = require('../../services/Authentication.js');

var LandingPage = React.createClass({
	
	getInitialState: function () {
		return {
			isArchSignIn: false,
			isCompanySignIn: false,
			isArchSignUp: false,
			isCompanySignUp: false,
			token: null
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

	handleArchSignInFormSubmit: function (email, password) {
		Authentication.archaeologistSignIn(email, password, function handleUserSignIn(error, response) {
			if (error) {
				console.log('NO!');
				return;
			}

			TokenActionCreators.setArchaeologistAuthenticationToken(response.token);
			console.log('YES!');
		}.bind(this));
	},

	handleArchSignUpFormSubmit: function (email, password, archFormValues) {
		Authentication.createArchaeologistProfile(email, password, archFormValues, function handleCreateArchaeologistProfile(error, response) {
			if (error) {
				console.log('NO!');
				return;
			}

			Authentication.archaeologistSignIn(email, password, function handleUserSignIn(error, response) {
				if (error) {
					console.log('Dumb Dumb!');
					return;
				}

				TokenActionCreators.setArchaeologistAuthenticationToken(response.token);
				console.log('Success!');
			}.bind(this));
		}.bind(this));
	},

	handleCompanySignInFormSubmit: function (email, password) {
		Authentication.companySignIn(email, password, function handleUserSignIn(error, response) {
			if (error) {
				console.log('NO!');
				return;
			}

			TokenActionCreators.setCompanyAuthenticationToken(response.token);
			console.log('YES!');
		}.bind(this));
	},

	handleCompanySignUpFormSubmit: function (email, password, companyFormValues) {
		Authentication.createCompanyProfile(email, password, companyFormValues, function handleCreateCompanyProfile(error, response) {
			if (error) {
				console.log('NO!');
				return;
			}

			Authentication.companySignIn(email, password, function handleUserSignIn(error, response) {
				if (error) {
					console.log("NO!");
					return;
				}

				TokenActionCreators.setCompanyAuthenticationToken(response.token);
				console.log('YES!');
			}.bind(this));
		}.bind(this));
	},

	render: function () {
		return (
			<div className="container-fluid landing-page-background">
				<div className="jumbotron">
					<h1>Welcome to FreeArch<br /><small>Are you an Archaeologist or a potential Employer?</small></h1>
				</div>
				<div className="row landing-page-buttons">
					<div className="col-xs-4 col-xs-offset-2">
						<MainButton label="Archaeologist" handleButtonClick={this.showArchSignInForm} /> 
					</div>
					<div className="col-xs-4 col-xs-offset-2">
						<MainButton label="Employer" handleButtonClick={this.showCompanySignInForm} /> 
					</div>
				</div>
				{ this.state.isArchSignIn ? <ArchSignInForm handleArchSignInForm={this.hideArchSignInForm} handleArchSignInFormSubmit={this.handleArchSignInFormSubmit} handleArchChangeForm={this.showArchSignUpFormAndHideArchSignInForm} /> : null }
				{ this.state.isArchSignUp ? <ArchSignUpForm handleArchSignUpForm={this.hideArchSignUpForm} handleArchSignUpFormSubmit={this.handleArchSignUpFormSubmit} /> : null }
				{ this.state.isCompanySignIn ? <CompanySignInForm handleCompanySignInForm={this.hideCompanySignInForm} handleCompanySignInFormSubmit={this.handleCompanySignInFormSubmit} handleCompanyChangeForm={this.showCompanySignUpFormAndHideCompanySignInForm} /> : null }
				{ this.state.isCompanySignUp ? <CompanySignUpForm handleCompanySignUpForm={this.hideCompanySignUpForm} handleCompanySignUpFormSubmit={this.handleCompanySignUpFormSubmit} /> : null }
			</div>

	    );
	}
});

module.exports = LandingPage;