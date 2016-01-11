var React = require('react');
var ArchaeologistProfileDetails = require('./ArchaeologistProfileDetails.jsx');
var LandingPageActionCreators = require('../../actions/LandingPageActionCreators.js');

var ArchSignUpForm = React.createClass({

	handleArchSignUpFormSubmit: function (submitEvent) {
	    submitEvent.preventDefault();

	    ArchaeologistProfileDetails.archProfileRefs;
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