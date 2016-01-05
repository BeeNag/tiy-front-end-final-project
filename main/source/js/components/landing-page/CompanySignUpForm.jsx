var React = require('react');
var CompanyProfileDetails = require('./CompanyProfileDetails.jsx');
var LandingPageActionCreators = require('../../actions/LandingPageActionCreators.js');

var CompanySignUpForm = React.createClass({

	handleCompanySignUpFormSubmit: function (submitEvent) {
		submitEvent.preventDefault();
		this.props.handleCompanySignUpForm();

		LandingPageActionCreators.changeToEmployerLandingPage();
	},

	render: function () {
		return (
			<div className="container form">
				<div className="col-xs-6 col-xs-offset-3">
	    			<div id="logbox">
	      				<form id="signup" method="post" action="/signup" onSubmit={this.handleCompanySignUpFormSubmit}>
	        				<h1>Create an Account</h1>
	        				<CompanyProfileDetails />
	        				<input name="user[email]" type="email" placeholder="Email Address" className="form-control input pass"></input>
	        				<input name="user[password]" type="password" placeholder="Choose a Password" required="required" className="form-control input pass"></input>
	        				<input name="user[password2]" type="password" placeholder="Confirm Password" required="required" className="form-control input pass"></input>	
	        				<input type="submit" value="Sign me up!" className="form-control inputButton"></input>
	      				</form>
	    			</div>
	   			</div>
   			</div>
		);
	}
});

module.exports = CompanySignUpForm;