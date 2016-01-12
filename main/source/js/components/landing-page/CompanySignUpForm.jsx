var React = require('react');
var CompanyProfileDetails = require('./CompanyProfileDetails.jsx');
var LandingPageActionCreators = require('../../actions/LandingPageActionCreators.js');

var CompanySignUpForm = React.createClass({

	companyFormValues: {

	},

	handleInputChange: function(name, input) {
		this.companyFormValues[name] = input;
	},

	handleCompanySignUpFormSubmit: function (submitEvent) {
		submitEvent.preventDefault();

		var email = this.refs.email.value;
	    var password = this.refs.password.value;

		this.props.handleCompanySignUpForm();
		this.props.handleCompanySignUpFormSubmit(email, password);

		LandingPageActionCreators.changeToEmployerLandingPage();
	},

	render: function () {
		return (
			<div className="container form">
				<div className="col-xs-6 col-xs-offset-3">
	    			<div id="logbox">
	      				<form id="signup" method="post" action="/signup" onSubmit={this.handleCompanySignUpFormSubmit}>
	        				<h1>Create an Account</h1>
	        				<CompanyProfileDetails type="text" placeholder="Company Name" className="form-control input pass" handleInputChange={this.handleInputChange} name="name" />
	        				<CompanyProfileDetails type="text" placeholder="Address Line 1" className="form-control input pass" handleInputChange={this.handleInputChange} name="address1" />
	        				<CompanyProfileDetails type="text" placeholder="Address Line 2" className="form-control input pass" handleInputChange={this.handleInputChange} name="address2" />
	        				<CompanyProfileDetails type="text" placeholder="Address Line 3" className="form-control input pass" handleInputChange={this.handleInputChange} name="address3" />
	        				<CompanyProfileDetails type="text" placeholder="City" className="form-control input pass" handleInputChange={this.handleInputChange} name="city" />
	        				<CompanyProfileDetails type="text" placeholder="Postcode" className="form-control input pass" handleInputChange={this.handleInputChange} name="postcode" />
	        				<CompanyProfileDetails type="text" placeholder="Phone Number" className="form-control input pass" handleInputChange={this.handleInputChange} name="phone_number" />
	        				<CompanyProfileDetails type="text" placeholder="Company Home Page URL" className="form-control input pass" handleInputChange={this.handleInputChange} name="url" />
	        				<CompanyProfileDetails type="text" placeholder="Description" className="form-control input pass" handleInputChange={this.handleInputChange} name="description" />
	        				<input name="user[email]" type="email" placeholder="Email Address" className="form-control input pass" ref="email"></input>
	        				<input name="user[password]" type="password" placeholder="Choose a Password" required="required" className="form-control input pass" ref="password"></input>	
	        				<input type="submit" value="Sign me up!" className="form-control inputButton"></input>
	      				</form>
	    			</div>
	   			</div>
   			</div>
		);
	}
});

module.exports = CompanySignUpForm;