var React = require('react');
var ArchaeologistProfileDetails = require('./ArchaeologistProfileDetails.jsx');
var LandingPageActionCreators = require('../../actions/LandingPageActionCreators.js');

var ArchSignUpForm = React.createClass({

	archFormValues: {

	},

	handleInputChange: function (name, input) {
		this.archFormValues[name] = input;
		console.log(this.formValues);
	},

	handleArchSignUpFormSubmit: function (submitEvent) {
	    submitEvent.preventDefault();

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
	        				<ArchaeologistProfileDetails type="text" placeholder="First Name" className="form-control input pass" handleInputChange={this.handleInputChange} name="first_name" />
	        				<ArchaeologistProfileDetails type="text" placeholder="Last Name" className="form-control input pass" handleInputChange={this.handleInputChange} name="last_name" />
	        				<ArchaeologistProfileDetails type="date" placeholder="Date of Birth" className="form-control input pass" handleInputChange={this.handleInputChange} name="date_of_birth" />
	        				<ArchaeologistProfileDetails type="text" placeholder="Address Line 1" className="form-control input pass" handleInputChange={this.handleInputChange} name="address1" />
	        				<ArchaeologistProfileDetails type="text" placeholder="Address Line 2" className="form-control input pass" handleInputChange={this.handleInputChange} name="address2" />
	        				<ArchaeologistProfileDetails type="text" placeholder="Address Line 3" className="form-control input pass" handleInputChange={this.handleInputChange} name="address3" />
	        				<ArchaeologistProfileDetails type="text" placeholder="City" className="form-control input pass" handleInputChange={this.handleInputChange} name="city" />
	        				<ArchaeologistProfileDetails type="text" placeholder="Postcode" className="form-control input pass" handleInputChange={this.handleInputChange} name="postcode" />
	        				<ArchaeologistProfileDetails type="text" placeholder="Home Phone Number" className="form-control input pass" handleInputChange={this.handleInputChange} name="home_phone_number" />
	        				<ArchaeologistProfileDetails type="text" placeholder="Mobile Phone Number" className="form-control input pass" handleInputChange={this.handleInputChange} name="mobile_phone_number" />
	        				<ArchaeologistProfileDetails type="number" placeholder="Experience" className="form-control input pass" handleInputChange={this.handleInputChange} name="experience" />
	        				<ArchaeologistProfileDetails type="text" placeholder="Specialism" className="form-control input pass" handleInputChange={this.handleInputChange} name="specialism" />
	        				<ArchaeologistProfileDetails type="text" placeholder="CSCS Card" className="form-control input pass" handleInputChange={this.handleInputChange} name="cscs_card" />
	        				<ArchaeologistProfileDetails type="text" placeholder="Description" className="form-control input pass" handleInputChange={this.handleInputChange} name="description" />
	        				<label htmlFor="upload-picture" className="upload">Upload a Picture of Yourself</label>
    			      		<input type="file" className="form-control input pass" id="upload-picture"></input>
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

module.exports = ArchSignUpForm;