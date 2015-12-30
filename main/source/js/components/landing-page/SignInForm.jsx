var React = require('react');

var SignInForm = React.createClass({
	render: function () {
		return (
			<div className="container">
   				<div className="col-xs-6 col-xs-offset-3">
    				<div id="logbox">
      					<form id="signup" method="post" action="/signup">
        					<h1>Account Login</h1>
        					<input name="user[email]" type="email" placeholder="enter your email" className="input pass"/>
        					<input name="user[password]" type="password" placeholder="enter your password" required="required" className="input pass"/>
        					<input type="submit" value="Sign me in!" className="inputButton"/>
        					<div className="text-center">
                    			<a href="#" id="">Create an Account</a>
                			</div>
      					</form>
    				</div>
    			</div>
  			</div>
		);
	}
});

module.exports = SignInForm;