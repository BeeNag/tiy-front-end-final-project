var React = require('react');

var SignUpForm = React.createClass({
	render: function () {
		return (
			<div className="container">
				<div className="col-xs-6 col-xs-offset-3">
	    			<div id="logbox">
	      				<form id="signup" method="post" action="/signup">
	        				<h1>Create an Account</h1>
	        				<input name="user[email]" type="email" placeholder="Email address" className="input pass"/>
	        				<input name="user[password]" type="password" placeholder="Choose a password" required="required" className="input pass"/>
	        				<input name="user[password2]" type="password" placeholder="Confirm password" required="required" className="input pass"/>	
	        				<input type="submit" value="Sign me up!" className="inputButton"/>
	      				</form>
	    			</div>
	   			</div>
   			</div>
		);
	}
});

module.exports = SignUpForm;