var React = require('react');
var LandingPageNavbar = require('./LandingPageNavbar.jsx');
var SignInForm = require('./SignInForm.jsx');
var SignUpForm = require('./SignUpForm.jsx');

var LandingPage = React.createClass({
	render: function () {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<h1>Welcome to FreeArch</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-6 col-xs-offset-3">
						<h3>Are you an Archaeologist or a potential Employer?</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-xs-offset-2">
						<button type="button" className="btn btn-primary">Archaeologist</button>
					</div>
					<div className="col-xs-4 col-xs-offset-2">
						<button type="button" className="btn btn-primary">Employer</button>
					</div>
				</div>
				<SignInForm />
				<SignUpForm />
			</div>

	    );
	}
});

module.exports = LandingPage;