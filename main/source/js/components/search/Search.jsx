var React = require('react');

var Search = React.createClass({
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
							        <li><a href="#">Your Saved Candidates</a></li>
							        <button type="button" className="btn btn-default navbar-btn">Sign Out</button>
							    </ul>
							</div>
						</div>
					</nav>
				</div>
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<h1>Search for an Archaeologist</h1>
					</div>
				</div>
				<div className="row">
					<button type="button" className="btn btn-info" data-toggle="collapse" data-target="#basic-search">Basic Search</button>
					<div className="collapse" id="basic-search">
						<input type="text" className="form-control input-sm" maxlength="64" placeholder="Search"></input>
						<button type="submit" className="btn btn-primary btn-sm">Search</button>
					</div>
				</div>
				<div className="row">
					<button type="button" className="btn btn-info" data-toggle="collapse" data-target="#advanced-search">Advanced Search</button>
					<div className="collapse" id="advanced-search">
						<div className="input-group" id="advanced-search">
							<input type="text" className="form-control" placeholder="Search for Archaeologists"></input>
							<div className="input-group-btn">
								<div className="btn-group" role="group">
									<div className="dropdown dropdown-lg">
										<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span className="caret"></span></button>
										<div className="dropdown-menu dropdown-menu-right" role="menu">
											<form className="form-horizontal" role="form">
												<div className="form-group">
													<label for="filter">Filter By</label>
													<select className="form-control">
														<option selected>All Archaeologists</option>
														<option>Experience</option>
														<option>Specialism</option>
														<option>CSCS Card</option>
													</select>
												</div>
												<button type="submit" className="btn btn-primary"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
											</form>
										</div>
									</div>
									<button type="button" className="btn btn-primary"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<h3>Recent Archaeologists</h3>
				</div>
				<div className="row">
					<div className="col-xs-3">
						<div className="thumbnail">
							<img src="http://www.valuestockphoto.com/downloads/43521-2/power_button.jpg" alt="power switched off"></img>
							<div className="caption">
								<h4>Name</h4>
								<p>Email</p>
								<p>Specialism</p>
								<p>Experience</p>
								<p><a href="#" className="btn btn-primary" role="button">View Profile</a></p>
							</div>
						</div>
					</div>
					<div className="col-xs-3">
						<div className="thumbnail">
							<img src="http://www.valuestockphoto.com/downloads/43521-2/power_button.jpg" alt="power switched off"></img>
							<div className="caption">
								<h4>Name</h4>
								<p>Email</p>
								<p>Specialism</p>
								<p>Experience</p>
								<p><a href="#" className="btn btn-primary" role="button">View Profile</a></p>
							</div>
						</div>
					</div>
					<div className="col-xs-3">
						<div className="thumbnail">
							<img src="http://www.valuestockphoto.com/downloads/43521-2/power_button.jpg" alt="power switched off"></img>
							<div className="caption">
								<h4>Name</h4>
								<p>Email</p>
								<p>Specialism</p>
								<p>Experience</p>
								<p><a href="#" className="btn btn-primary" role="button">View Profile</a></p>
							</div>
						</div>
					</div>
					<div className="col-xs-3">
						<div className="thumbnail">
							<img src="http://www.valuestockphoto.com/downloads/43521-2/power_button.jpg" alt="power switched off"></img>
							<div className="caption">
								<h4>Name</h4>
								<p>Email</p>
								<p>Specialism</p>
								<p>Experience</p>
								<p><a href="#" className="btn btn-primary" role="button">View Profile</a></p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-8">
						<h3>Search Results</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-3">
						<div className="thumbnail">
							<img src="http://www.valuestockphoto.com/downloads/43521-2/power_button.jpg" alt="power switched off"></img>
							<div className="caption">
								<h4>Name</h4>
								<p>Email</p>
								<p>Specialism</p>
								<p>Experience</p>
								<p><a href="#" className="btn btn-primary" role="button">View Profile</a></p>
							</div>
						</div>
					</div>
					<div className="col-xs-3">
						<div className="thumbnail">
							<img src="http://www.valuestockphoto.com/downloads/43521-2/power_button.jpg" alt="power switched off"></img>
							<div className="caption">
								<h4>Name</h4>
								<p>Email</p>
								<p>Specialism</p>
								<p>Experience</p>
								<p><a href="#" className="btn btn-primary" role="button">View Profile</a></p>
							</div>
						</div>
					</div>
					<div className="col-xs-3 col-xs-offset-3">
						<div data-drop-zone className="drop-zone">Drag Desired Candidates in Here and They Will be Saved For You</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-8">
						<h3>Your Saved Profiles</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-3">
						<div className="thumbnail">
							<img src="http://www.valuestockphoto.com/downloads/43521-2/power_button.jpg" alt="power switched off"></img>
							<div className="caption">
								<h4>Name</h4>
								<p>Email</p>
								<p>Specialism</p>
								<p>Experience</p>
								<p><a href="#" className="btn btn-primary" role="button">View Profile</a></p>
							</div>
						</div>
					</div>
					<div className="col-xs-3">
						<div className="thumbnail">
							<img src="http://www.valuestockphoto.com/downloads/43521-2/power_button.jpg" alt="power switched off"></img>
							<div className="caption">
								<h4>Name</h4>
								<p>Email</p>
								<p>Specialism</p>
								<p>Experience</p>
								<p><a href="#" className="btn btn-primary" role="button">View Profile</a></p>
							</div>
						</div>
					</div>
					<div className="col-xs-3">
						<div className="thumbnail">
							<img src="http://www.valuestockphoto.com/downloads/43521-2/power_button.jpg" alt="power switched off"></img>
							<div className="caption">
								<h4>Name</h4>
								<p>Email</p>
								<p>Specialism</p>
								<p>Experience</p>
								<p><a href="#" className="btn btn-primary" role="button">View Profile</a></p>
							</div>
						</div>
					</div>
					<div className="col-xs-3">
						<div className="thumbnail">
							<img src="http://www.valuestockphoto.com/downloads/43521-2/power_button.jpg" alt="power switched off"></img>
							<div className="caption">
								<h4>Name</h4>
								<p>Email</p>
								<p>Specialism</p>
								<p>Experience</p>
								<p><a href="#" className="btn btn-primary" role="button">View Profile</a></p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-3">
						<div className="thumbnail">
							<img src="http://www.valuestockphoto.com/downloads/43521-2/power_button.jpg" alt="power switched off"></img>
							<div className="caption">
								<h4>Name</h4>
								<p>Email</p>
								<p>Specialism</p>
								<p>Experience</p>
								<p><a href="#" className="btn btn-primary" role="button">View Profile</a></p>
							</div>
						</div>
					</div>
					<div className="col-xs-3">
						<div className="thumbnail">
							<img src="http://www.valuestockphoto.com/downloads/43521-2/power_button.jpg" alt="power switched off"></img>
							<div className="caption">
								<h4>Name</h4>
								<p>Email</p>
								<p>Specialism</p>
								<p>Experience</p>
								<p><a href="#" className="btn btn-primary" role="button">View Profile</a></p>
							</div>
						</div>
					</div>
					<div className="col-xs-3">
						<div className="thumbnail">
							<img src="http://www.valuestockphoto.com/downloads/43521-2/power_button.jpg" alt="power switched off"></img>
							<div className="caption">
								<h4>Name</h4>
								<p>Email</p>
								<p>Specialism</p>
								<p>Experience</p>
								<p><a href="#" className="btn btn-primary" role="button">View Profile</a></p>
							</div>
						</div>
					</div>
					<div className="col-xs-3">
						<div className="thumbnail">
							<img src="http://www.valuestockphoto.com/downloads/43521-2/power_button.jpg" alt="power switched off"></img>
							<div className="caption">
								<h4>Name</h4>
								<p>Email</p>
								<p>Specialism</p>
								<p>Experience</p>
								<p><a href="#" className="btn btn-primary" role="button">View Profile</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Search;