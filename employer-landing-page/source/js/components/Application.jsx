var React = require('react');

var Application = React.createClass({
	render: function () {
		return (
			<div className="container-fluid">
				<div className="row">
					<nav className="navbar navbar-default">
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
						    		<li className="dropdown">
							          	<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">For Companies <span className="caret"></span></a>
								          <ul className="dropdown-menu">
								            <li><a href="#">Search</a></li>
								            <li><a href="#">Saved Profiles</a></li>
								            <li><a href="#">Create Excavation</a></li>
								            <li><a href="#">Create Company Profile</a></li>
								          </ul>
							        </li>
							        <li className="dropdown">
							        	<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">For Archaeologists <span className="caret"></span></a>
							        	  <ul className="dropdown-menu">
							        	  	<li><a href="#">Create Profile</a></li>
							        	  	<li><a href="#">View Profile</a></li>
							        	  	<li><a href="#">Archaeologists Near You</a></li>
							        	  	<li><a href="#">Excavations Near You</a></li>
							        	  </ul>
							        </li>
							        <li><a href="#">HOME</a></li>
							        <button type="button" className="btn btn-default navbar-btn">Sign Out</button>
							    </ul>
							</div>
						</div>
					</nav>
				</div>
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<h1>Welcome to the Homepage for Employers <small>Here are the available options</small></h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-xs-offset-2">
						<button type="button" className="btn btn-primary">Create A Company Profile</button>
					</div>
					<div className="col-xs-4 col-xs-offset-2">
						<button type="button" className="btn btn-success">Create an Excavation Profile</button>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-xs-offset-2">
						<button type="button" className="btn btn-info">Search for a Profile</button>
					</div>
					<div className="col-xs-4 col-xs-offset-2">
						<button type="button" className="btn btn-info">View Your List of Saved Profiles</button>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Application;