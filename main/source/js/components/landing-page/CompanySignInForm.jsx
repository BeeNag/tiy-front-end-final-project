var React = require('react');
var MainButton = require('../MainButton.jsx');
var LandingPageActionCreators = require('../../actions/LandingPageActionCreators.js');

var CompanySignInForm = React.createClass({
  
  	handleCompanySignInFormSubmit: function (submitEvent) {
    	submitEvent.preventDefault();
    	this.props.handleCompanySignInForm();

    	LandingPageActionCreators.changeToEmployerLandingPage();
  	},

  	handleShowCompanySignUpFormAndHideCompanySignInForm: function () {
  		this.props.handleCompanyChangeForm();
  	},

	render: function () {
		return (
			<div>
				<div className="container form">
	   				<div className="col-xs-6 col-xs-offset-3">
	    				<div id="logbox">
	      					<form id="signup" method="post" action="/signup" onSubmit={this.handleCompanySignInFormSubmit}>
	        					<h1>Account Login</h1>
	        					<input name="user[email]" type="email" placeholder="enter your email" className="form-control input pass"></input>
	        					<input name="user[password]" type="password" placeholder="enter your password" required="required" className="form-control input pass"></input>
	        					<input type="submit" value="Sign me in!" className="form-control inputButton"></input>
	      					</form>
			                <div className="text-center">
			                  	<MainButton label="Create an Account" handleButtonClick={this.handleShowCompanySignUpFormAndHideCompanySignInForm} />
			                </div>
	    				</div>
	    			</div>
	  			</div>
  			</div>
		);
	}
});

module.exports = CompanySignInForm;