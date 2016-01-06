var React = require('react');

var ArchNavbar = React.createClass({
	render: function () {
		return (
			<nav className="navbar navbar-inverse">
			  			<div className="container-fluid">
						    <div className="navbar-header">
						      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#landing-page-nav" aria-expanded="false">
						        <span className="sr-only">Toggle navigation</span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						      </button>
						    </div>
						    <div className="collapse navbar-collapse" id="landing-page-nav">
						    	<ul className="nav navbar-nav">
						    		<button type="button" className="btn btn-default navbar-btn pull-left">HOME</button>
						    		<button type="button" className="btn btn-default navbar-btn">View Your Profile</button>
						    		<button type="button" className="btn btn-default navbar-btn">Archaeologists Near You</button>
						    		<button type="button" className="btn btn-default navbar-btn">Excavations Near You</button>
							        <button type="button" className="btn btn-default navbar-btn pull-right">Sign Out</button>
							    </ul>
							</div>
						</div>
					</nav>
		);
	}
});

module.exports = ArchNavbar;