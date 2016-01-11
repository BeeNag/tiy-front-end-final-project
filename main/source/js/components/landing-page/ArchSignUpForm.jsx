var React = require('react');
var ArchaeologistProfileDetails = require('./ArchaeologistProfileDetails.jsx');
var LandingPageActionCreators = require('../../actions/LandingPageActionCreators.js');

var ArchSignUpForm = React.createClass({

	handleArchSignUpFormSubmit: function (submitEvent) {
	    submitEvent.preventDefault();

	    var first_name = this.refs.first_name.value;
	    var last_name = this.refs.last_name.value;
	    var date_of_birth = this.refs.date_of_birth.value;
	    var address = this.refs.address.value;
	    var city = this.refs.city.value;
	    var postcode = this.refs.city.value;
	    var home_phone_number = this.refs.home_phone_number.value;
	    var mobile_phone_number = this.refs.mobile_phone_number.value;
	    var experience = this.refs.experience.value;
	    var specialism = this.refs.specialism.value;
	    var cscs_card = this.refs.cscs_card.value;
	    var description = this.refs.description.value;
	    var email = this.refs.email.value;
	    var password = this.refs.password.value;

	    this.props.handleArchSignUpForm();
	    this.props.handleArchSignUpFormSubmit(email, password);

	    LandingPageActionCreators.changeToArchLandingPage();
  	},

	render: function () {
		return (
			<div className="container form">
				<div className="col-xs-6 col-xs-offset-3">
	    			<div id="logbox">
	      				<form id="signup" method="post" action="/signup" onSubmit={this.handleArchSignUpFormSubmit}>
	        				<h1>Create an Account</h1>
	        				<ArchaeologistProfileDetails />
	        				<input name="user[email]" type="email" placeholder="Email Address" className="form-control input pass"></input>
	        				<input name="user[password]" type="password" placeholder="Choose a Password" required="required" className="form-control input pass"></input>	
	        				<input type="submit" value="Sign me up!" className="form-control inputButton"></input>
	      				</form>
	    			</div>
	   			</div>
   			</div>
		);
	}
});

module.exports = ArchSignUpForm;