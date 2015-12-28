var React = require('react');

var Application = React.createClass({
	render: function () {
		return (
			<div className="container-fluid">
				<div className="row">
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
						<h1>Company Profile</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-xs-offset-3">
						<h2>Company Name</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-xs-offset-3">
						<div className="container">
							<div className="row">
								<div className="col-xs-4">
									<p>Address</p>
								</div>
							</div>
							<div className="row">
								<div className="col-xs-4">
									<p>Phone</p>
								</div>
							</div>
							<div className="row">
								<div className="col-xs-4">
									<p>Email</p>
								</div>
							</div>
							<div className="row">
								<a href="#" className="btn btn-xs btn-primary"><span className="glyphicon glyphicon-pencil"></span> Edit</a>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-xs-offset-3">
						<div className="container">
							<div className="row">
								<div className="col-xs-4">
									<a className="btn btn-info" href="#" role="button">Company Home Page</a>
								</div>
							</div>
							<div className="row">
								<a href="#" className="btn btn-xs btn-primary"><span className="glyphicon glyphicon-pencil"></span> Edit</a>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="container">
						<div className="row">
							<p>Company Description</p>
						</div>
						<div className="row">
							<a href="#" className="btn btn-xs btn-primary"><span className="glyphicon glyphicon-pencil"></span> Edit</a>
						</div>
					</div>
				</div>
				<div className="row">
					<button type="button" className="btn btn-info" data-toggle="collapse" data-target="#excavation-view">View Your Excavations</button>
					<div className="collapse" id="excavation-view">
						<div className="row">
							<div className="container">
								<div className="row">
									<div className="col-xs-2">
										<p>Excavation Name</p>
									</div>
									<div className="col-xs-4 col-xs-offset-6">
										<p>Small map of location</p>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-6">
										<p>Description of Excavation</p>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-4">
										<a className="btn btn-info" href="#" role="button">Excavation Home Page</a>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="container">
								<div className="row">
									<div className="col-xs-2">
										<p>Excavation Name</p>
									</div>
									<div className="col-xs-4 col-xs-offset-6">
										<p>Small map of location</p>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-6">
										<p>Description of Excavation</p>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-4">
										<a className="btn btn-info" href="#" role="button">Excavation Home Page</a>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="container">
								<div className="row">
									<div className="col-xs-2">
										<p>Excavation Name</p>
									</div>
									<div className="col-xs-4 col-xs-offset-6">
										<p>Small map of location</p>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-6">
										<p>Description of Excavation</p>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-4">
										<a className="btn btn-info" href="#" role="button">Excavation Home Page</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<button type="button" className="btn btn-danger">Delete Profile</button>
				</div>
			</div>
		);
	}
});

module.exports = Application;