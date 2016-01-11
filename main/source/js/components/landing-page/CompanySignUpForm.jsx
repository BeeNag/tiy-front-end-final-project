var React = require('react');
var CompanyProfileDetails = require('./CompanyProfileDetails.jsx');
var LandingPageActionCreators = require('../../actions/LandingPageActionCreators.js');

var CompanySignUpForm = React.createClass({

	handleCompanySignUpFormSubmit: function (submitEvent) {
		submitEvent.preventDefault();

		var name = this.refs.name.value;
		var address = this.refs.address.value;
		var city = this.refs.city.value;
		var postcode = this.refs.postcode.value;
		var phone_number = this.refs.phone_number.value;
		var url = this.ref.url.value;
		var description = this.refs.description.value;

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
	        				<CompanyProfileDetails />
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