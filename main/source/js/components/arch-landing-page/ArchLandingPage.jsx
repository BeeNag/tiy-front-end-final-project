var React = require('react');
var ArchNavbar = require('../ArchNavbar.jsx');

var ArchLandingPage = React.createClass({
	render: function () {
		return (
			<div className="container-fluid">
				<div className="row">
					<ArchNavbar />
				</div>
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<h1>Welcome to the Homepage for Archaeologists <small>Here are the available options</small></h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-xs-offset-2">
						<button type="button" className="btn btn-primary">Create A Profile</button>
					</div>
					<div className="col-xs-4 col-xs-offset-2">
						<button type="button" className="btn btn-success">View Your Profile</button>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-xs-offset-2">
						<button type="button" className="btn btn-info">Archaeologists Near You</button>
					</div>
					<div className="col-xs-4 col-xs-offset-2">
						<button type="button" className="btn btn-info">Excavations Near You</button>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = ArchLandingPage;