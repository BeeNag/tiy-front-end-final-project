var React = require('react');
var ArchSignInForm = require('./ArchSignInForm.jsx');
var CompanySignInForm = require('./CompanySignInForm.jsx');
var ArchSignUpForm = require('./ArchSignUpForm.jsx');
var CompanySignUpForm = require('./CompanySignUpForm.jsx');
var MainButton = require('../MainButton.jsx');
var TokenActionCreators = require('../../actions/TokenActionCreators.js');
var ArchSignInFormActionCreators = require('../../actions/ArchSignInFormActionCreators.js');
var CompanySignInFormActionCreators = require('../../actions/CompanySignInFormActionCreators.js');
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
			ArchSignInFormActionCreators.setArchId(response.id);
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
			CompanySignInFormActionCreators.setCompanyId(response.id);
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
			// <div className="container-fluid landing-page-background">
			// 	<div className="jumbotron">
			// 		<h1>Welcome to FreeArch<br /><small>Are you an Archaeologist or a potential Employer?</small></h1>
			// 	</div>
			// 	<div className="row landing-page-buttons">
			// 		<div className="col-xs-4 col-xs-offset-2">
			// 			<MainButton className="btn btn-primary btn-lg" label="Archaeologist" handleButtonClick={this.showArchSignInForm} /> 
			// 		</div>
			// 		<div className="col-xs-4 col-xs-offset-2">
			// 			<MainButton className="btn btn-primary btn-lg" label="Employer" handleButtonClick={this.showCompanySignInForm} /> 
			// 		</div>
			// 	</div>
			// 	{ this.state.isArchSignIn ? <ArchSignInForm handleArchSignInForm={this.hideArchSignInForm} handleArchSignInFormSubmit={this.handleArchSignInFormSubmit} handleArchChangeForm={this.showArchSignUpFormAndHideArchSignInForm} /> : null }
			// 	{ this.state.isArchSignUp ? <ArchSignUpForm handleArchSignUpForm={this.hideArchSignUpForm} handleArchSignUpFormSubmit={this.handleArchSignUpFormSubmit} /> : null }
			// 	{ this.state.isCompanySignIn ? <CompanySignInForm handleCompanySignInForm={this.hideCompanySignInForm} handleCompanySignInFormSubmit={this.handleCompanySignInFormSubmit} handleCompanyChangeForm={this.showCompanySignUpFormAndHideCompanySignInForm} /> : null }
			// 	{ this.state.isCompanySignUp ? <CompanySignUpForm handleCompanySignUpForm={this.hideCompanySignUpForm} handleCompanySignUpFormSubmit={this.handleCompanySignUpFormSubmit} /> : null }
			// </div>
			<div className="container-fluid">
				<div className="row text-center landing-page-background">
					<div className="welcome">
						<h1>Welcome to FreeArch</h1>
						<br />
						<h4>We provide an easy way for companies to find the archaeologists they want</h4>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-6 image-lp">
						{ this.state.isArchSignIn ? <ArchSignInForm handleArchSignInForm={this.hideArchSignInForm} handleArchSignInFormSubmit={this.handleArchSignInFormSubmit} handleArchChangeForm={this.showArchSignUpFormAndHideArchSignInForm} /> : null }
						{ this.state.isArchSignUp ? <ArchSignUpForm handleArchSignUpForm={this.hideArchSignUpForm} handleArchSignUpFormSubmit={this.handleArchSignUpFormSubmit} /> : null }
						<div className="image-wrapper overlay-fade-in" onClick={this.showArchSignInForm}>
							<img src="https://images.unsplash.com/photo-1420824471541-fe7e0ae0baa4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=0b29693aefa19092ec9c514fac266c2d" alt="Archaeologist Picture" className="arch-image"></img>
							<p className="image-text-arch">If you are an archaeologist check this out!</p>
							<div className="image-overlay-content">
								<h2>Join now so that employers can start looking for your profile!</h2>
							</div>
						</div>
					</div>
					<div className="col-xs-6 image-lp">
						{ this.state.isCompanySignIn ? <CompanySignInForm handleCompanySignInForm={this.hideCompanySignInForm} handleCompanySignInFormSubmit={this.handleCompanySignInFormSubmit} handleCompanyChangeForm={this.showCompanySignUpFormAndHideCompanySignInForm} /> : null }
						{ this.state.isCompanySignUp ? <CompanySignUpForm handleCompanySignUpForm={this.hideCompanySignUpForm} handleCompanySignUpFormSubmit={this.handleCompanySignUpFormSubmit} /> : null }
						<div className="image-wrapper overlay-fade-in" onClick={this.showCompanySignInForm}>
							<img src="https://images.unsplash.com/photo-1420824471541-fe7e0ae0baa4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=0b29693aefa19092ec9c514fac266c2d" alt="Company Picture" className="company-image"></img>
							<p className="image-text-company">Are you from a company looking to hire</p>
							<div className="image-overlay-content">
								<h2>Join now so that you can start looking for the archaeologists that you want!</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="page-break" />
				<div className="row">
					<div className="col-xs-12 process-title">
						<h2 className="text-center">Here is what you do to get started</h2>
					</div>
					<div className="col-xs-4 text-center">
						<h2>Step 1</h2>
						<p>Enter your details and sign up</p>
					</div>
					<div className="col-xs-4 text-center">
						<h2>Step 2</h2>
						<p>You will be taken to the landing page for archaeologists or companies and see the options available to you</p>
					</div>
					<div className="col-xs-4 text-center">
						<h2>Step 3</h2>
						<p>Select an option and away you go!</p>
					</div>
				</div>
				<hr className="page-break" />
			</div>

	    );
	}
});

module.exports = LandingPage;