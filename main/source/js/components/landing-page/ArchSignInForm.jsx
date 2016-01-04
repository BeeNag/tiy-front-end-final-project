var React = require('react');
var MainButton = require('../MainButton.jsx');

var ArchSignInForm = React.createClass({
  
  	handleArchSignInFormSubmit: function (submitEvent) {
  		console.log("Hello");
    	submitEvent.preventDefault();
    	this.props.handleArchSignInForm();
  	},

  	handleShowArchSignUpFormAndHideArchSignInForm: function () {
  		this.props.handleArchChangeForm();
  	},

	render: function () {
		return (
			<div>
				<div className="container form">
	   				<div className="col-xs-6 col-xs-offset-3">
	    				<div id="logbox">
	      					<form id="signup" method="post" action="/signup" onSubmit={this.handleArchSignInFormSubmit}>
	        					<h1>Account Login</h1>
	        					<input name="user[email]" type="email" placeholder="enter your email" className="form-control input pass"></input>
	        					<input name="user[password]" type="password" placeholder="enter your password" required="required" className="form-control input pass"></input>
	        					<input type="submit" value="Sign me in!" className="form-control inputButton"></input>
	      					</form>
			                <div className="text-center">
			                  	<MainButton label="Create an Account" handleButtonClick={this.handleShowArchSignUpFormAndHideArchSignInForm} />
			                </div>
	    				</div>
	    			</div>
	  			</div>
  			</div>
		);
	}
});

module.exports = ArchSignInForm;